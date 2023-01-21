import { useRef, useState } from "react";
import ReactQuill from "react-quill";
import { EdictorToolBar, PlusBtn } from '../index';
import PictureModal from "./PictureModal";
import VideoModal from "./VideoModal";

const Edictor = () => {

    const [state, setState] = useState({ value: '' });
    const handleChange = (value: any) => {
        setState({ value });
    };

    const [showPictureModal, setshowPictureModal] = useState(false)
    const [showVideoModal, setshowVideoModal] = useState(false)

    const quillRef = useRef(null);
    return (
        <>
            <div className='hero-widget-card'>

                <div className="h-[20px] border-b-[1px] border-b-borderColor " />
                <div className="px-2 pb-4">
                    <EdictorToolBar quillRef={quillRef} />
                    <div className=" overflow-y-scroll h-[70vh]">
                        <ReactQuill
                            theme="snow"
                            ref={quillRef}
                            value={state.value}
                            onChange={handleChange}
                            placeholder={"Add content"}

                        />

                        <PlusBtn
                            onPictureClick={() => setshowPictureModal(true)}
                            onYoutudeClick={() => setshowVideoModal(true)}
                            onSocialClick={() => console.log('s')}
                        />


                    </div>

                </div>
            </div>

            <PictureModal
                quillRef={quillRef}
                isOpen={showPictureModal}
                onClose={() => setshowPictureModal(false)}
            />
            <VideoModal
                quillRef={quillRef}
                isOpen={showVideoModal}
                onClose={() => setshowVideoModal(false)}
            />
        </>

    )
}

export default Edictor