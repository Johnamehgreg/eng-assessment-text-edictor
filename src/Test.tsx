import { useEffect, useRef } from "react";
import ReactQuill from "react-quill";

const Test = () => {
    const quillRef = useRef<any>(null);
    const reactQuillRef = useRef<any>(null);
  

    const handleIframeButton = () => {
        const iframeSrc = prompt('Enter the iframe src URL:');
        
        quillRef.current.clipboard.dangerouslyPasteHTML(`<iframe src="${iframeSrc}"></iframe>`);
      }

    useEffect(() => {
        quillRef.current = reactQuillRef.current.getEditor();
        const toolbar = quillRef.current.getModule('toolbar');
        toolbar.addHandler('iframe', handleIframeButton);
      }, []); // empty dependency array ensures this only runs on mount


    console.log(quillRef.current)
    return (
      <>
      <ReactQuill 
        ref={reactQuillRef}
        // modules={{ toolbar: toolbarOptions }}

        
      />

      <button onClick={() => handleIframeButton()}>Click</button>
      </>
    );
  }
  

  export default Test