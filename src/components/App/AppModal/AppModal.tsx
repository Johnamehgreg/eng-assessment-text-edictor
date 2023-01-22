import { motion, useAnimation } from 'framer-motion';
import React, { ReactNode } from "react";
import { IoCloseSharp } from 'react-icons/io5';


interface Props {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    title?: string;

}

const AppModal: React.FC<Props> = (props: Props) => {


    const { isOpen, title, onClose, children } = props

    const ani1 = useAnimation()



    // React.useEffect(() => {
    //     if (isOpen) {
    //         ani1.start({

    //             scale: 1,
    //             transition: {
    //                 type: 'spring',
    //                 duration: 0.3,
    //                 bounce: 0.3
    //             }
    //         })
    //     } else {
    //         ani1.start({
    //             scale: 0,
    //             transition: {
    //                 type: 'spring',
    //                 duration: 0.3,
    //                 bounce: 0.3
    //             }
    //         })
    //     }

    // }, [isOpen])


    return (
        <>

            {
                isOpen && (
                    <motion.div
                        className="modal-content "
                        animate={ani1}>

                        <div className="modal-card ">
                            <div className="flex justify-between  mb-4 items-center">
                                <p className='text-[14px] font-semibold'>{title} </p>

                                <IoCloseSharp
                                    onClick={onClose}
                                    className='cursor-pointer transition-all hover:scale-110' size={20} />
                            </div>


                            {
                                children
                            }

                        </div>
                    </motion.div>

                )
            }




        </>
    )
}

export default AppModal
