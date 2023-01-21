import React from "react";
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
            <p className="text-[10px] mb-4">FILE UPLOAD</p>

            <AppSelect
            options={list}
            onChange={(e:any) => console.log(e)}
            placeholder='Selece'
            />

            <div className="flex">
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


let list =[
    {label:"youtube", value:'youtube'},
    {label:"Facebook", value:'Facebook'},
]
export default VideoModal