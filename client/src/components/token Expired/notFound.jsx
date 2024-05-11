import React from "react";
import TimeUp from "../assets/times-up-rubber-stamp-vector.jpg"; 
import { Link } from "react-router-dom";
function TokenExpired(){
    return(
        <div className="w-100 h-screen text-center flex px-20">
            <div className="w-100 bg-white p-5 border rounded-lg">
                <img src={TimeUp} className="w-100 h-40 aspect-[16/9]" alt="" />
                <h1 className="text-3xl font-bold">Session Expired.</h1>
                <div className="mt-5"><Link to="/"className="text-lg bg-cyan-500 text-white p-3">Re-Login</Link></div>
            </div>
        </div>
    )
}

export default TokenExpired;