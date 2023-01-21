import React from "react";
import AppInput from "../App/AppInput/AppInput";
import AppModal from "../App/AppModal/AppModal";
import AppSelect from "../App/AppSelect/AppSelect";
import AppBtn from "../button/AppBtn";


interface Props {
    isOpen: boolean;
    onClose: () => void;
    quillRef: any

}
const VideoModal: React.FC<Props> = ({ isOpen, onClose }) => {

    return (
        <AppModal
            title='Embed'
            isOpen={isOpen}
            onClose={onClose}
        >
           

            <AppSelect
                options={list}
                label='VIDEO PROVIDER'
                onChange={(e: any) => console.log(e)}
            />

            <div className="mb-4"></div>

            <AppInput
            options={list}
            label='VIDEO PROVIDER'
            onChange={(e: any) => console.log(e)}
            />

            <div className="flex mt-4">
                <AppBtn
                    title="Embed"
                    onClick={() => console.log("File Upload")}
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
    { label: "youtube", value: 'youtube' },
    { label: "Facebook", value: 'Facebook' },
]
export default VideoModal