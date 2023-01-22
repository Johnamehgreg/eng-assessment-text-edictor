import { VideoType } from "../../constants/edictor";


interface IEditor {
    reactQuillRef: any;
    quillRef?: any;
    index?: number

}

export interface VideeArq {
    platformType?: string,
    url?: string,
    videoId?: string
}


export const useEditorHook = (arg: IEditor) => {

    const { reactQuillRef, index, quillRef } = arg;
    const quill = reactQuillRef?.current?.getEditor();


    const scrollToEnd = () => {
        reactQuillRef.current.getEditor().setSelection(reactQuillRef.current.getEditor().getLength(), reactQuillRef.current.getEditor().getLength());
    }




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
        const { videoId, platformType } = arg;

        let url: string = ''

        switch (platformType) {
            case VideoType.YOUTUBE:
                return url = `https://www.youtube.com/embed/${videoId}`
            case VideoType.VIMEO:
                return url = `https://player.vimeo.com/video/${videoId}`
            default:
                return url = ''

        }



        return url

    }



    const handleUploadVideo = (arg: VideeArq) => {
        const { videoId, platformType } = arg;

        // alert(platformType)

        let url = getUrl(arg)

        let iframe = `<iframe  frameborder="0" allowfullscreen="true" width="100%" height="310" src="${url}"></iframe>`
        quillRef.current.clipboard.dangerouslyPasteHTML(index, iframe);


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
        addBlockQoute
    }
}