
import { Menu, MenuButton, MenuItem, MenuList, Portal } from '@chakra-ui/react';
import React, { useState } from 'react';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { BiItalic } from 'react-icons/bi';
import { BsListOl, BsTypeBold } from 'react-icons/bs';
import { FaImage } from 'react-icons/fa';
import { HiOutlineLink } from 'react-icons/hi';
import { ImParagraphCenter, ImParagraphLeft, ImParagraphRight } from 'react-icons/im';
import AppInput from '../App/AppInput/AppInput';
import { useEditorHook } from './editorHook';

const CustomButton = () => <BsTypeBold size={20} />


interface Props {
    reactQuillRef: any
    onPictureClick: () => void
}
export const EditorToolBar: React.FC<Props> = ({ reactQuillRef, onPictureClick }) => {



    const {

        addBlockQoute,
        addLink
    } = useEditorHook({ reactQuillRef, })





    return (
        <div className="toolbar-wrapper " id="toolbar-11">

            <select className="ql-header" defaultValue="">
                <option value="1"></option>
                <option value="2"></option>
                <option value=""></option>
            </select>


            <div className="vertical-divider"></div>

            <LinkComponent addLink={(url: string) => addLink(url)} />
            <button onClick={onPictureClick}>
                <FaImage size={16} />
            </button>
            <div className="vertical-divider"></div>
            <button className="ql-align" value="">
                <ImParagraphLeft size={16} />
            </button>
            <button className="ql-align" value="center">
                <ImParagraphCenter size={16} />
            </button>
            <button className="ql-align" value="right" >
                <ImParagraphRight size={16} />
            </button>

            <div className="vertical-divider"></div>
            <button className='ql-customBold' >
                <CustomButton />
            </button>
            <button className='ql-italic'>
                <BiItalic size={16} />
            </button>
            <div className="vertical-divider"></div>
            <button className="ql-list" value="ordered">
                <AiOutlineUnorderedList size={16} />
            </button>
            <button className="ql-list" value="bullet">
                <BsListOl size={16} />
            </button>
            <button className='ql-blockquote'>
                <BsListOl size={16} />
            </button>
        </div>
    )
}

interface LProps {
    addLink: (url: string) => void;
}


const LinkComponent: React.FC<LProps> = ({ addLink }) => {

    const [url, seturl] = useState('')
    return (
        <Menu >
            <MenuButton>
                <HiOutlineLink size={16} />
            </MenuButton>
            <Portal >
                <MenuList className='plus-embed-menu-wrapper px-2' >
                    <AppInput
                        placeholder='Enter url'
                        onChange={(e: any) => seturl(e.target.value)}
                    />
                    <MenuItem
                        onClick={() => addLink(url)}
                        _hover={{ backgroundColor: 'transparent' }}
                        padding={'0rem'}
                        marginBottom={'0.5rem'}
                    >
                        <div className='primary-btn mt-2 solid-btn'>
                            save
                        </div>
                    </MenuItem>


                </MenuList>
            </Portal>
        </Menu>
    )
}
export default EditorToolBar;
