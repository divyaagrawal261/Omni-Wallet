import React from "react";
import { Link, useNavigate} from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        navigate("/");
    }

    return(
        <div className="w-full flex justify-between p-2 px-4 h-20 bg-slate-900 text-white">
            <div className="brandName float-left font-semibold text-2xl"><Link to="/dash">Brand</Link></div>
            <div className="brandName float-right font-semibold text-xl border-white border p-1 rounded-lg">
                <button className="logOutBtn" onClick={handleLogout}>Log out</button>
            </div>
        </div>
    )
}

export default NavBar;