
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { BiItalic } from 'react-icons/bi';
import { BsListOl, BsTypeBold } from 'react-icons/bs';
import { FaImage } from 'react-icons/fa';
import { HiOutlineLink } from 'react-icons/hi';
import { ImParagraphCenter, ImParagraphLeft, ImParagraphRight } from 'react-icons/im';
import { useEditorHook } from './editorHook';


interface Props {
    reactQuillRef: any
    onPictureClick: () => void
}
export const EdictorToolBar: React.FC<Props> = ({ reactQuillRef, onPictureClick }) => {
    


    const {
        addAlignLeft,
        addAlignRight,
        addAlignCenter,
        addBold,
        addItalic,
        addOrderedlist,
        addBulletlist,
        addBlockQoute
    } = useEditorHook({ reactQuillRef,  })


    


    return (
        <div className="toolbar-wrapper " >

            <button >Paragraph</button>

            <div className="vertical-divider"></div>
            <button onClick={onPictureClick}>
                <HiOutlineLink size={16} />
            </button>
            <button onClick={onPictureClick}>
                <FaImage size={16} />
            </button>
            <div className="vertical-divider"></div>
            <button onClick={addAlignLeft}>
                <ImParagraphLeft size={16} />
            </button>
            <button onClick={addAlignCenter}>
                <ImParagraphCenter size={16} />
            </button>
            <button onClick={addAlignRight}>
                <ImParagraphRight size={16} />
            </button>

            <div className="vertical-divider"></div>
            <button onClick={addBold}>
                <BsTypeBold size={16} />
            </button>
            <button onClick={addItalic}>
                <BiItalic size={16} />
            </button>
            <div className="vertical-divider"></div>
            <button onClick={addOrderedlist}>
                <AiOutlineUnorderedList size={16} />
            </button>
            <button onClick={addBulletlist}>
                <BsListOl size={16} />
            </button>
            <button onClick={addBlockQoute}>
                <BsListOl size={16} />
            </button>
        </div>
    )
}

export default EdictorToolBar;
