import { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import { EdictorToolBar, PlusBtn } from '../index';
import { useEditorHook } from "./editorHook";
import PictureModal from "./PictureModal";
import SocialModal from "./SocialModal";
import VideoModal from "./VideoModal";


const modules = {
    toolbar: {
        container: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            ['clean']
        ],
    }



};


const Edictor = () => {

    const [state, setState] = useState({ value: '' });

    const [index, setindex] = useState(0)


    const reactQuillRef = useRef<any>(null);
    const quillRef = useRef<any>(null);

    const handleChange = async (value: any) => {
        setState({ value });
        const quill = reactQuillRef.current.getEditor();
        const range = await quill.getSelection();

        if(range.index) return  setindex(range.index)

    };

    useEffect(() => {
        quillRef.current = reactQuillRef.current.getEditor();
        const toolbar = quillRef.current.getModule('toolbar');
        toolbar.addHandler('iframe', handleUploadVideo);
    }, []);
    

    const [showPictureModal, setshowPictureModal] = useState(false)
    const [showVideoModal, setshowVideoModal] = useState(false)
    const [showSocialModal, setshowSocialModal] = useState(false)







    const {
        handleUploadVideo,
        handleImageUpload,
    } = useEditorHook({ reactQuillRef, quillRef, index })

    return (
        <>
            <div className='hero-widget-card' >




                <div className="h-[20px] border-b-[1px] border-b-borderColor " />
                <div className="px-2 pb-4">
                    <EdictorToolBar
                        reactQuillRef={reactQuillRef}
                        onPictureClick={() => setshowPictureModal(true)}

                    />
                    <div className=" overflow-y-scroll h-[70vh]">
                        <ReactQuill
                            theme="snow"
                            modules={modules}
                            ref={reactQuillRef}
                            value={state.value}
                            onChange={handleChange}
                            placeholder={"Add content"}

                        />

                        <PlusBtn
                            onPictureClick={() => setshowPictureModal(true)}
                            onYoutudeClick={() => setshowVideoModal(true)}
                            onSocialClick={() => setshowSocialModal(true)}
                        />


                    </div>

                </div>
            </div>

            <PictureModal
                handleImageUpload={handleImageUpload}
                isOpen={showPictureModal}
                onClose={() => setshowPictureModal(false)}
            />
            <VideoModal
                handleUploadVideo={handleUploadVideo}
                isOpen={showVideoModal}
                onClose={() => setshowVideoModal(false)}
            />
            <SocialModal
                handleUploadVideo={handleUploadVideo}
                isOpen={showSocialModal}
                onClose={() => setshowSocialModal(false)}
            />

         

        </>



    )
}

export default Edictor