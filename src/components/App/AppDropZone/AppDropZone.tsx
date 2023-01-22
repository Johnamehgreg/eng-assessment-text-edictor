import React, { ReactNode } from 'react';
import { useDropzone } from 'react-dropzone';
import { useLocation, useParams } from 'react-router-dom';


interface Props {
    children: ReactNode
}

const AppDropZone: React.FC<Props> = ({ children }) => {

    const location = useLocation();
    const params = useParams();

    const { getRootProps, getInputProps } = useDropzone({
        // accept: 'image/*',
        onDrop: (acceptedFiles: any) => {

            console.log(acceptedFiles)

        }
    });



    return (
        <div className=' relative bg-red-400 w-[200px] h-[200px]' {...getRootProps()}>
            <input {...getInputProps()} />

            {
                children
            }
        </div>

    );
}

export default AppDropZone;
