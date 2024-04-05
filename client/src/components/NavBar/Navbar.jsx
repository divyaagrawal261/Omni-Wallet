import React from "react";
import { Link } from "react-router-dom";

function NavBar()
{
    return(
    <div className="w-full flex justify-between p-2 px-4 h-20 bg-slate-900 text-white">
      <div className="brandName float-left font-semibold text-2xl"><Link to="/dash">Brand</Link></div>
      <div className="brandName float-right font-semibold text-xl border-white border p-1 rounded-lg"><Link to="/" className="logOutBtn">Log out</Link></div>
    </div>)
}

export default NavBar;