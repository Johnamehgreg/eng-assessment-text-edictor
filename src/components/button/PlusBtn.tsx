import { Menu, MenuButton, MenuItem, MenuList, Portal } from '@chakra-ui/react';
import { BsPlusLg } from 'react-icons/bs';
import { FaImage } from 'react-icons/fa';
import { TiVideo } from 'react-icons/ti';

interface Props {
    onPictureClick: () => void;
    onYoutudeClick: () => void;
    onSocialClick: () => void;
}

const PlusBtn:React.FC<Props> = ({onPictureClick, onSocialClick, onYoutudeClick}) => {

    return (
        <>
            <Menu >
                <MenuButton>
                    <div className='plus-btn'>
                        <BsPlusLg size={13} />
                    </div>
                </MenuButton>
                <Portal >
                    <MenuList className='plus-embed-menu-wrapper' >
                        <p className='text-[10px] px-2'>EMBEDS</p>
                        <MenuItem
                        onClick={onPictureClick}
                        _hover={{backgroundColor:'transparent'}}
                            padding={'0rem'}
                            marginBottom={'0.5rem'}
                        >
                            <div className='plus-embed-menu-item '>
                                <FaImage />
                                <div className=" ml-2 ">
                                    <p className='text-[13px] mt-[-2px] font-semibold'>Picture</p>
                                    <p className='text-[10px]'>Jpeg, png</p>
                                </div>
                            </div>

                        </MenuItem>
                        <MenuItem
                        onClick={onYoutudeClick}
                        _hover={{backgroundColor:'transparent'}}
                            padding={'0rem'}
                            marginBottom={'0.5rem'}
                        >
                            <div className='plus-embed-menu-item '>
                                <TiVideo />
                                <div className=" ml-2 ">
                                    <p className='text-[13px] mt-[-2px] font-semibold'>Video</p>
                                    <p className='text-[10px]'>Embed a YouTube video</p>
                                </div>
                            </div>

                        </MenuItem>
                        <MenuItem
                        onClick={onSocialClick}
                        _hover={{backgroundColor:'transparent'}}
                            padding={'0rem'}
                        >
                            <div className='plus-embed-menu-item '>
                                <FaImage />
                                <div className=" ml-2 ">
                                    <p className='text-[13px] mt-[-2px] font-semibold'>Social</p>
                                    <p className='text-[10px]'>Embed a Facebook link</p>
                                </div>
                            </div>

                        </MenuItem>
                    </MenuList>
                </Portal>
            </Menu>
        </>

    )
}

export default PlusBtn