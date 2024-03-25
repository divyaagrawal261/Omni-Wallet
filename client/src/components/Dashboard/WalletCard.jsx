import React from "react";
import { FaWallet } from 'react-icons/fa';

function Card(props){
    return(
        <div className="w-full p-2 border border-white rounded-lg flex justify-evenly" style={{backgroundColor: props.bgColor}}>
            <FaWallet color="#ffffff75" className="w-1/6 h-full"/>
            <div className="flex flex-col w-5/6 h-full justify-start items-start pl-2">
                <h2 className="text-white">Wallet Name</h2>
                <h2 className="text-white">amount</h2>
            </div>            
        </div>
    )
}

export default Card;