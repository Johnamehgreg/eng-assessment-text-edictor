import { useState } from "react";
import { Quill } from 'react-quill';


const HomeUi = () => {

  var toolbarOptions = ['bold', 'italic', 'underline', 'strike'];


  var quill = new Quill('#editor', {
    modules: {
      toolbar: {
        container: '#toolbar',  // Selector for toolbar container
        handlers: {
          toolbar: toolbarOptions
        }
      }
    }
  });

  const [value, setValue] = useState('');
  return (
    <>
      <div id="toolbar">
        <select className="ql-size">
          <option value="small"></option>
          <option selected></option>
          <option value="large"></option>
          <option value="huge"></option>
        </select>
        <button className="ql-bold"></button>
        <button className="ql-script" value="sub"></button>
        <button className="ql-script" value="super"></button>
      </div>
      <div id="editor"></div>
    </>
  )
}

export default HomeUi