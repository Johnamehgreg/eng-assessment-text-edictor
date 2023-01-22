import React, { useState } from "react";
import AppModal from "../App/AppModal/AppModal";
import AppBtn from "../button/AppBtn";


interface Props {
    isOpen: boolean;
    onClose: () => void;
    handleImageUpload:any
}
const PictureModal: React.FC<Props> = ({  isOpen, handleImageUpload, onClose }) => {
    const [imageFile, setimageFile] = useState<any>(null)
    const [previewImage, setpreviewImage] = useState<any>(null)



    const handleEmbed = () => {
        handleImageUpload(imageFile)
        onClose()
        onCancel()
    }

    const handleOnchage = (file: any) => {
        setimageFile(file)

        const reader: any = new FileReader();

        reader.onloadend = () => {
            setpreviewImage(reader.result);
        };

        reader.readAsDataURL(file);
    }

    const onCancel = () => {
        setimageFile(null)
        setpreviewImage(null)
    }

    
    return (
        <AppModal
            title='Embed'
            isOpen={isOpen}
            onClose={() => {
                onClose()
                onCancel()
            }}
        >
            <p className="text-[12px] font-semibold mb-4">Upload Image</p>
            <p className="text-[10px] mb-4">FILE UPLOAD</p>




            <div className="file-upload-container mb-4">


                {
                    previewImage === null ?

                        <label

                            className='   cursor-pointer'
                            htmlFor={'image-upload'}
                        >

                            <span>
                                Import Image from Device
                            </span>



                            <input
                                onChange={(e: any) => {
                                    handleOnchage(e.target.files[0])


                                }}
                                // disabled={edit}
                                className="hidden"
                                type="file"
                                id={'image-upload'}
                                accept="image/png, image/jpg,  image/jpeg"
                            />

                        </label>

                        :

                        <div className="">
                            <img src={previewImage} className='h-[200px] w-[200px]' alt="" />
                        </div>


                }

            </div>


            <div className="flex">
                <AppBtn
                    isDisabled={imageFile === null ? true : false}
                    title="Embed"
                    onClick={() => handleEmbed()}
                />
                <div className="mx-2"></div>
                <AppBtn
                    isDisabled={imageFile === null ? true : false}
                    btnMode="outline"
                    title="Cancel"
                    onClick={onCancel}
                />
            </div>
        </AppModal>
    )
}

export default PictureModal