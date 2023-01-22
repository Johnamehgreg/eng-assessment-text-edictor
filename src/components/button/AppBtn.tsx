import React from "react"


interface Props {
    title:string,
    onClick:() => void,
    btnMode?:string,
    isDisabled?:boolean
}
const AppBtn:React.FC<Props> = ({title, isDisabled, btnMode, onClick}) => {

    const btnType = () => {
        switch(btnMode){
            case 'outline':
                return 'outline-btn'
            default :
                return 'solid-btn'
        }
    }
  return (
    <button
    disabled={isDisabled}
    className={` ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'} primary-btn ${btnType()}`}
    onClick={onClick}
    style={{
        opacity: isDisabled ? 0.5 : 1
    }}
    >
      {title}
    </button>
  )
}

export default AppBtn
