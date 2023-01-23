import React, { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface Props{
    reactQuillRef:any
}

const CustomYoutubeUpload:React.FC<Props> = ({reactQuillRef}) => {
  const [youtubeUrl, setYoutubeUrl] = useState<any>("");

  const handleYoutubeUrl = (e:any) => {
    setYoutubeUrl(e.target.value);
  };

  const insertYoutube = () => {
    if (!youtubeUrl) {
      return;
    }
    // Extract the video ID from the URL
    const videoId = youtubeUrl.match(/v=([^&]+)/)[1];
    // Get the quill instance
    const quill = reactQuillRef.current.getEditor();
    // Insert the video into the editor
    quill.insertEmbed(quill.getSelection().index, "video", `https://www.youtube.com/embed/${videoId}`);
    // Clear the video URL field
    setYoutubeUrl("");
  };

  return (
    <div className="youtube-upload">
      <input
        type="text"
        placeholder="Enter YouTube video URL"
        onChange={handleYoutubeUrl}
      />
      <button onClick={insertYoutube}>Insert Video</button>
    </div>
  );
};

const Test = () => {
  const reactQuillRef = useRef(null);
  return (
    <div>
      <CustomYoutubeUpload reactQuillRef={reactQuillRef} />
      <ReactQuill ref={reactQuillRef} />
    </div>
  );
};

export default Test;
