import React from "react";

interface Props {
    options: any[],
    onChange: (e: any) => void;
    label?: string;
}

const AppInput: React.FC<Props> = (props: Props) => {
    const { options, label, onChange, } = props
    return (
        <div className="w-full">
            <p className="text-[10px] mb-2">{label}</p>
            <input type="text" className="app-input" />
        </div>
    )
}

export default AppInput