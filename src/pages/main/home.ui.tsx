import React, { useRef } from "react";
import ReactQuill from 'react-quill';
import { EdictorToolBar } from "../../components";


const HomeUi = () => {

  const [state, setState] = React.useState({ value: '' });
  const handleChange = (value: any) => {
    setState({ value });
  };


  const quillRef = useRef(null);



  return (
    <div className="text-editor">
      <EdictorToolBar quillRef={quillRef} />
      <ReactQuill
        theme="snow"
        ref={quillRef}
        value={state.value}
        onChange={handleChange}
        placeholder={"Write something awesome..."}

      />
    </div>
  )
}

export default HomeUi