import React from "react";
import AppModal from "../App/AppModal/AppModal";
import AppBtn from "../button/AppBtn";


interface Props {
    isOpen: boolean;
    onClose: () => void;
    quillRef: any

}
const PictureModal: React.FC<Props> = ({ isOpen, onClose }) => {

    return (
        <AppModal
            title='Embed'
            isOpen={isOpen}
            onClose={onClose}
        >
            <p className="text-[12px] font-semibold mb-4">Upload Image</p>
            <p className="text-[10px] mb-4">FILE UPLOAD</p>

            <div className="file-upload-container mb-4">
                <button>
                    Import Image from Device
                </button>
            </div>


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

export default PictureModal