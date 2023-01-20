import { AiOutlineCloseCircle } from 'react-icons/ai'

const PageNotFound = () => {
    return (
        <div className='hero-verify-widget'>
            <div className='hero-auth-widget-card h-4/6 flex items-center justify-center flex-col '>
                <AiOutlineCloseCircle
                    size={80}
                    color='#000'
                />
                <h1 className='font-[700] '>Page Not Found</h1>

            </div>

        </div>
    )
}

export default PageNotFound