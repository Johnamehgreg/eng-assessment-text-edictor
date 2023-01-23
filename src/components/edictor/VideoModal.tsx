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
    handleUploadVideo:(arg:VideeArq) => void;

}
const VideoModal: React.FC<Props> = ({ isOpen, handleUploadVideo,  onClose }) => {

    const [videoUrl, setvideoUrl] = useState('')
    const [videoPlatForm, setvideoPlatForm] = useState('')
    const [videoId, setvideoId] = useState<any>(null)
    

    const validateUrl = () => {

        if (videoPlatForm.includes(VideoType.YOUTUBE)) {

            if (getYouTubeVideoId() !== undefined) {
                setvideoId(getYouTubeVideoId())
            } else {
                setvideoId(null)
            }
        } else if (videoPlatForm.includes(VideoType.VIMEO)) {
            if (getVimeoVideoId() !== undefined) {
                setvideoId(getVimeoVideoId())
            }else {
                setvideoId(null)
            }
           
        } 
    }

    const onCloseBtn = () => {
        setvideoId(null)
        setvideoUrl('')
        onClose()
    }

    const handleUpload =() => {
        handleUploadVideo({videoId, platformType:videoPlatForm})
        onCloseBtn()
    }

    const getYouTubeVideoId = () => {
        let url = videoUrl
        var videoId: any

        if (url?.includes('/embed/')) return videoId = url?.split('embed/')[1];
        if (url?.includes('v=')) return videoId = url?.split('v=')[1];
        if (url?.includes('https://youtu.be/') && !url?.includes('embed/') && !url?.includes('v=')) return url?.split('https://youtu.be/')[1];

        var ampersandPosition = videoId?.indexOf('&')
        if (ampersandPosition != -1) {
            videoId = videoId?.substring(0, ampersandPosition);
        }
        return videoId;
    }
    const getVimeoVideoId = () => {
        let url = videoUrl
        var videoId: any
        if (url?.includes('https://player.vimeo.com')) return videoId = url?.split('video/')[1];
        var ampersandPosition = videoId?.indexOf('&')
        if (ampersandPosition != -1) {
            videoId = videoId?.substring(0, ampersandPosition);
        }
        return videoId;
    }




    useEffect(() => {
        validateUrl()
    }, [videoUrl, videoPlatForm])

  

    return (
        <AppModal
            title='Embed'
            isOpen={isOpen}
            onClose={onCloseBtn}
        >

           

            <AppSelect
                options={list}
                label='VIDEO PROVIDER'
                onChange={(e: any) => setvideoPlatForm(e.value)}
            />

            <div className="mb-4"></div>

            <AppInput
                label='URL'
                onChange={(e: any) => setvideoUrl(e.target.value)}
            />

            <div className="flex mt-4">
                <AppBtn
                    isDisabled={videoId === null ? true : false}
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
    { label: "Youtube", value: VideoType.YOUTUBE },
    { label: "Vimeo", value: VideoType.VIMEO },
]
export default VideoModal