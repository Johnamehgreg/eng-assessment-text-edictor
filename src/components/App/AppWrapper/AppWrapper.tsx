import React from "react";


export interface Props {
    children: JSX.Element;
}

const AppWrapper: React.FC<Props> = ({ children }) => {

    return (
        <div className="h-[100vh]">
            <div className='hero-widget-wrapper'>
                    {children}
            </div>
        </div>
    )
}

export default AppWrapper