import React from "react"


interface Props {
    title:string,
    onClick:() => void,
    btnMode?:string
}
const AppBtn:React.FC<Props> = ({title, btnMode, onClick}) => {

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
    className={`primary-btn ${btnType()}`}
    onClick={onClick}
    >
      {title}
    </button>
  )
}

export default AppBtn
