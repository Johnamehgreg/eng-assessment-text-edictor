import React, { useEffect, useState } from "react";
import { VideoType } from "../../constants/editor";
import AppInput from "../App/AppInput/AppInput";
import AppModal from "../App/AppModal/AppModal";
import AppSelect from "../App/AppSelect/AppSelect";
import AppBtn from "../button/AppBtn";
import { VideeArq } from "./editorHook";


interface Props {
    isOpen: boolean;
    onClose: () => void;
    handleUploadVideo: (arg: VideeArq) => void;
}
const SocialModal: React.FC<Props> = ({ isOpen, handleUploadVideo, onClose }) => {

    const [videoUrl, setvideoUrl] = useState('')
    const [code, setcode] = useState('')
    const [videoPlatForm, setvideoPlatForm] = useState('')
    const [videoId, setvideoId] = useState<any>(null)

    const onCloseBtn = () => {
        setvideoId(null)
        setvideoUrl('')
        onClose()
    }

    const handleUpload = () => {
        handleUploadVideo({ url: videoUrl, iframCode: code, isSocial: true, platformType: videoPlatForm })
        // onCloseBtn()
    }

    const getTiktokId = () => {
        let url = videoUrl
        var videoId: any
        if (url?.includes('https://www.tiktok.com')) return videoId = url?.split('video/')[1];
        var ampersandPosition = videoId?.indexOf('&')
        if (ampersandPosition != -1) {
            videoId = videoId?.substring(0, ampersandPosition);
        }
        return videoId;
    }

    const validateUrl = () => {

        if (videoPlatForm.includes(VideoType.TIKTOK)) {

            if (getTiktokId() !== undefined) {
                let id = getTiktokId().replace(/o/g, "")

                console.log(id)
                let url = `https://www.tiktok.com/embed/${id}`
                setcode(`<iframe  frameborder="0" width="100%" height="310" src="${url}"></iframe>`)
            } else {
                // setvideoId(null)
                // setvideoUrl('')
            }
        }

        if (videoPlatForm.includes(VideoType.FACEBOOK)) {
            if (videoUrl.trim().length > 0) {
                setcode(`<iframe  frameborder="0" allowfullscreen="true" width="100%" height="310" src="https://www.facebook.com/plugins/video.php?href=${videoUrl}"></iframe>`)
            }

        }
        if (videoPlatForm.includes(VideoType.INSTAGRAM)) {
            if (videoUrl.trim().length > 0) {
                setcode(`<iframe  frameborder="0" allowfullscreen="true" width="100%" height="310" src="${videoUrl}"></iframe>`)
            }

        }
    }

    useEffect(() => {
        validateUrl()
    }, [videoUrl, videoPlatForm])

    const handleSelect = (e: any) => {
        setvideoPlatForm(e.value)
        setcode('')
        setvideoUrl('')
    }


    return (
        <AppModal
            title='Embed'
            isOpen={isOpen}
            onClose={onClose}
        >


            <AppSelect
                options={list}
                label='SOCIAL MEDIA PLATFORM'
                onChange={(e: any) => handleSelect(e)}
            />

            <div className="mb-4"></div>

            <AppInput
                value={videoUrl}
                onChange={(e: any) => setvideoUrl(e.target.value)}
                label='URL'
            />
            <div className="mb-4"></div>

            <AppInput
                value={code}
                label='CODE'
                onChange={(e: any) => setcode(e.target.value)}
            />

            <p className="text-[10px] mb-2 mt-4">Disable caption </p>

            <div className="flex mt-4">
                <AppBtn
                    title="Embed"
                    onClick={() => handleUpload()}
                />
                <div className="mx-2"></div>
                <AppBtn
                    btnMode="outline"
                    title="Cancel"
                    onClick={onClose}
                />
            </div>
        </AppModal>
    )
}


let list = [
    { label: "Facebook", value: VideoType.FACEBOOK },
    { label: "Instagram", value: VideoType.INSTAGRAM },
    { label: "TikTok", value: VideoType.TIKTOK },
]
export default SocialModal