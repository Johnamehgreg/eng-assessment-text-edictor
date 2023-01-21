


interface Props {
    quillRef: any
}
export const EdictorToolBar: React.FC<Props> = ({ quillRef }) => {
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


    return (
        <div >

            <button onClick={undo}>undo</button> <br />
            <button onClick={handleImagePickerClick}>Image</button><br />
            <button onClick={handleYoutubeUrlPickerClick}>Videos</button> <br />
            <button onClick={handleIFrameUrlPickerClick}>Iframe videos</button>
        </div>
    )
}

export default EdictorToolBar;
