import { useCallback } from "react";
import { VideoType } from "../../constants/editor";


interface IEditor {
    reactQuillRef: any;
    quillRef?: any;
    index?: number

}

export interface VideeArq {
    platformType?: string,
    url?: string,
    videoId?: string;
    isSocial?: boolean,
    iframCode?: string
}


export const useEditorHook = (arg: IEditor) => {

    const { reactQuillRef, index, quillRef } = arg;
    const quill = reactQuillRef?.current?.getEditor();


    const scrollToEnd = (index: number | undefined) => {
        const quill = reactQuillRef.current.getEditor();
        const bounds = quill.getBounds(index);
        quill.root.parentNode.scrollBottom = bounds.bottom;
    }

    const addLink = useCallback((value: string) => {
        const quill = reactQuillRef.current.getEditor();
        let selected = quill.getSelection();
        if (selected) {
            quill.format('link', value);
        }
    }, []);




    const addBold = () => {
        let quill = reactQuillRef.current.getEditor();
        quill.format('bold', true);
    }
    const addItalic = () => {
        let quill = reactQuillRef.current.getEditor();
        quill.format('italic', true);
    }

    const addBlockQoute = () => {
        let quill = reactQuillRef.current.getEditor();
        quill.format('blockquote', true);
    }

    const addBulletlist = () => {
        let quill = reactQuillRef.current.getEditor();
        quill.format('list', 'bullet');
    }
    const addOrderedlist = () => {
        let quill = reactQuillRef.current.getEditor();
        quill.format('list', 'ordered');
    }
    const addAlignLeft = () => {
        let quill = reactQuillRef.current.getEditor();
        quill.format('align', 'left');
    }
    const addAlignRight = () => {
        let quill = reactQuillRef.current.getEditor();
        quill.format('align', 'right');
    }
    const addAlignCenter = () => {
        let quill = reactQuillRef.current.getEditor();
        quill.format('align', 'center');
    }


    // function to handle pick image

    const handleImageUpload = async (file: any) => {



        const reader: any = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            quill.insertEmbed(index, 'image', reader.result);
        }


    };

    const getUrl = (arg: VideeArq) => {
        const { videoId, platformType, } = arg;

        let url: string = ''

        switch (platformType) {
            case VideoType.YOUTUBE:
                return url = `https://www.youtube.com/embed/${videoId}`
            case VideoType.VIMEO:
                return url = `https://player.vimeo.com/video/${videoId}`
            default:
                return url = ''

        }

    }


    const getSocilaUrl = (arg: VideeArq) => {
        let socialUrl: string | undefined = ''

        const { url, platformType, } = arg;

        let instagram = 'https://www.instagram.com/reel/CnpfY3OIwuM/?utm_source=ig_web_copy_link'

        switch (platformType) {
            case VideoType.FACEBOOK:
                return socialUrl = `https://www.facebook.com/plugins/video.php?href=${url}`
            case VideoType.INSTAGRAM:
                return socialUrl = `https://www.instagram.com/reel/CnpfY3OIwuM`
            case VideoType.TIKTOK:
                return socialUrl = url
            default:
                return socialUrl = ''

        }
    }



    const handleUploadVideo = (arg: VideeArq) => {
        const { isSocial, iframCode, platformType } = arg;
        let videoUrl: string | undefined = ''
        let iframe: string | undefined
        console.log(arg)
        if (isSocial) {
            videoUrl = getSocilaUrl(arg)
            iframe = iframCode
        } else {
            videoUrl = getUrl(arg)
            iframe = `<iframe     src="${videoUrl}"></iframe>`
        }

        // alert(platformType)




        quillRef.current.clipboard.dangerouslyPasteHTML(index, iframe);
        // scrollToEnd(index)
    }





    return {
        handleUploadVideo,
        handleImageUpload,
        addItalic,
        addBold,
        addBulletlist,
        addOrderedlist,
        addAlignLeft,
        addAlignRight,
        addAlignCenter,
        addBlockQoute,
        addLink
    }
}