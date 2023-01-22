// import Select, { SelectChangeEvent } from '@mui/material/Select';
import { motion, useAnimation } from 'framer-motion';
import * as React from 'react';
import { IoMdArrowDropdown } from "react-icons/io";



interface Props {
  options: any[],
  onChange: (e: any) => void;
  label?:string;
}
const AppSelect: React.FC<Props> = (props: any) => {


  const { options, label,  onChange,   } = props





  const [showDropDown, setshowDropDown] = React.useState(false)
  const ani1 = useAnimation()
  const arrowAni = useAnimation()
  let dropDownRef = React.useRef<any>()

  React.useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!dropDownRef?.current?.contains(event.target)) {
        setshowDropDown(false)
      }
    })
  })



  React.useEffect(() => {
    if (showDropDown) {
      ani1.start({

        scale: 1,
        transition: {
          type: 'spring',
          duration: 0.3,
          bounce: 0.3
        }
      })
    } else {
      ani1.start({
        scale: 0,
        transition: {
          type: 'spring',
          duration: 0.3,
          bounce: 0.3
        }
      })
    }
    if (showDropDown) {
      arrowAni.start({
        x: 0,
        rotate: '0deg',
        transition: {
          type: 'spring',
          duration: 0.3,
          bounce: 0.3
        }
      })
    } else {
      arrowAni.start({
        x: 0,
        rotate: '180deg',
        transition: {
          type: 'spring',
          duration: 0.3,
          bounce: 0.3
        }
      })
    }
  }, [showDropDown])

  React.useEffect(() => {
    onChange(options[0])
    setvle(options[0]?.label)
  }, [])
  

  const onSelect = (item: any) => {
    setshowDropDown(false)
    setvle(item.label)
    onChange(item)
  }

  const [vle, setvle] = React.useState('')





  return (
    <>

      <p className="text-[10px] mb-2">{label}</p>
      <div ref={dropDownRef} className={`${showDropDown ? 'border-primaryGreen ' : 'border-lightGreen '} w-full rounded-[4px] transition  bg-backgoundColor relative h-[35px] border-[1px] `}>


        <div
          onClick={() => setshowDropDown(!showDropDown)}
          className="w-full flex h-full px-2 cursor-pointer justify-between items-center">
          {/* <p className="text-gray-400  text-[14px]"></p> */}
          <input

            onInput={(e: any) => e.target.setCustomValidity("")}
            className="text-black caret-transparent cursor-pointer outline-none bg-transparent  text-[14px]"
            value={vle}
            required={false}

          />
          <motion.div animate={arrowAni} >
            <IoMdArrowDropdown color="#33106B" size={20} />
          </motion.div>
        </div>


        <motion.div
          animate={ani1}
          className=" bg-white z-[100] px-2 h-auto  shadow-xl top-[40px] absolute w-full  rounded-md max-h-[200px] overflow-scroll ">
          {
            options
              .map((item: any) => {
                return (
                  <div
                  key={item.value}
                    onClick={() => {
                      onSelect(item)
                    }}
                    className="px-2 my-2 rounded-sm flex items-center  hover:bg-lightGreen h-[30px] cursor-pointer">
                    <p className='text-[14px] text-black'>{item.label}</p>
                  </div>
                )
              })
          }
        </motion.div>


      </div>
    </>

  );
}

export default AppSelect;


