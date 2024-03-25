import React from "react";

function OptionTab(props)
{
 return(
    <div className="w-full text-white h-full items-center flex justify-center text-center" style={{backgroundColor: props.bgColor}}>
        {props.text}
    </div>
 )
}

export default OptionTab;