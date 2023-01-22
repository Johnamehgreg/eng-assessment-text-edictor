import React from "react";

interface Props {
    
    onChange: (e: any) => void;
    label?: string;
    value?: string;
}

const AppInput: React.FC<Props> = (props: Props) => {
    const { label,value, onChange, } = props
    return (
        <div className="w-full">
            <p className="text-[10px] mb-2">{label}</p>
            <input 
            value={value}
            onChange={onChange} type="text" className="app-input" />
        </div>
    )
}

export default AppInput