import { useState } from 'react';
import { useDropzone } from 'react-dropzone';

function Test() {
  const [files, setFiles] = useState<any>([]);
  const { getRootProps, getInputProps } = useDropzone({
    // accept: 'image/*',
    onDrop: (acceptedFiles:any) => {

        console.log(acceptedFiles)
      setFiles(acceptedFiles.map((file:any) => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  const thumbs = files.map((file:any) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} alt={file.name}/>
      </div>
    </div>
  ));

  return (
    <section>
      <div className='w-[300px] h-[300px] bg-red-400' {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside>
        {thumbs}
      </aside>
    </section>
  );
}

export default Test;
