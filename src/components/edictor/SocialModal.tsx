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
const SocialModal: React.FC<Props> = ({ isOpen, onClose }) => {

    return (
        <AppModal
            title='Embed'
            isOpen={isOpen}
            onClose={onClose}
        >


            <AppSelect
                options={list}
                label='SOCIAL MEDIA PLATFORM'
                onChange={(e: any) => console.log(e)}
            />

            <div className="mb-4"></div>

            <AppInput
                options={list}
                label='URL'
                onChange={(e: any) => console.log(e)}
            />
            <div className="mb-4"></div>

            <AppInput
                options={list}
                label='CODE'
                onChange={(e: any) => console.log(e)}
            />

            <p className="text-[10px] mb-2 mt-4">Disable caption </p>

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
    { label: "Facebook", value: 'Facebook' },
    { label: "Instagram", value: 'Instagram' },
    { label: "TikTok", value: 'TikTok' },
]
export default SocialModal