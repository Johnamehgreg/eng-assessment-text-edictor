
import { useEffect } from 'react';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { BiItalic } from 'react-icons/bi';
import { BsListOl, BsTypeBold } from 'react-icons/bs';
import { FaImage } from 'react-icons/fa';
import { HiOutlineLink } from 'react-icons/hi';
import { ImParagraphCenter, ImParagraphLeft, ImParagraphRight } from 'react-icons/im';


interface Props {
    quillRef: any
    onPictureClick: () => void
}
export const EdictorToolBar: React.FC<Props> = ({ quillRef, onPictureClick }) => {

  
    useEffect(() => {
       
    }, [])
          
    const undo = () => {
        const quill = quillRef.current.getEditor();
        quill.history.undo();
    };

    const handleImagePickerClick = () => {
        const input: any = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = async () => {
            const file = input.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                const quill = quillRef.current.getEditor();
                const range = quill.getSelection();
                quill.insertEmbed(range.index, 'image', reader.result);
            }
        };
    };

    const handleYoutubeUrlPickerClick = () => {
        const quill = quillRef.current.getEditor();
        const range = quill.getSelection();
        const videoUrl = prompt('Please enter the YouTube video URL');
        const videoId = extractYoutubeVideoId(videoUrl);
        const iframe = `<iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        quill.insertEmbed(range.index, 'video', iframe);
    };

    const handleIFrameUrlPickerClick = () => {
        const quill = quillRef.current.getEditor();
        const range = quill.getSelection();
        // const videoUrl = prompt('Please enter the iFrame video URL');
        const iframe = `<iframe width="729" height="410" src="https://www.youtube.com/embed/ydkQlJhodio" title="How to use TypeScript with React... But should you?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
        quill.insertEmbed(range.index, 'video', iframe);
    };

    const extractYoutubeVideoId = (url: any) => {
        // check if the URL is a valid YouTube video URL
        if (!/^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/.+$/.test(url)) {
            return null;
        }
        // extract the video ID from the URL
        const videoId = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/).pop();
        return videoId;
    }

    const leftParagraphFunction = () => {
        let quill = quillRef.current.getEditor();
        let range = quill.getSelection();
        quill.format('right-paragraph', true, 'user');
    }



    return (
        <div className="toolbar-wrapper " >

            <button onClick={undo}>Paragraph</button>

            <div className="vertical-divider"></div>
            <button onClick={onPictureClick}>
                <HiOutlineLink size={16} />
            </button>
            <button onClick={onPictureClick}>
                <FaImage size={16} />
            </button>
            <div className="vertical-divider"></div>
            <button onClick={leftParagraphFunction}>
                <ImParagraphLeft size={16} />
            </button>
            <button onClick={handleIFrameUrlPickerClick}>
                <ImParagraphCenter size={16} />
            </button>
            <button onClick={handleIFrameUrlPickerClick}>
                <ImParagraphRight size={16} />
            </button>

            <div className="vertical-divider"></div>
            <button onClick={handleIFrameUrlPickerClick}>
                <BsTypeBold size={16} />
            </button>
            <button onClick={handleIFrameUrlPickerClick}>
                <BiItalic size={16} />
            </button>
            <div className="vertical-divider"></div>
            <button onClick={handleIFrameUrlPickerClick}>
                <AiOutlineUnorderedList size={16} />
            </button>
            <button onClick={handleIFrameUrlPickerClick}>
                <BsListOl size={16} />
            </button>
            <button onClick={handleIFrameUrlPickerClick}>
                <BsListOl size={16} />
            </button>
        </div>
    )
}

export default EdictorToolBar;
