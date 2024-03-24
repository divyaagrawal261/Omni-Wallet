import React from "react";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";

const LoginForm=()=>{
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate('/register');
    }
    return(
        <div className="wrapper text-center h-screen">
                <h1 className="text-5xl mb-10"><b>Login</b></h1>
            <form className="p-5">
                <div className="input-box text-xl my-2">
                    <input type="text" className="p-2" placeholder="Email" required/>
                </div>
                <div className="input-box text-xl my-2">
                    <input type="password" className="p-2" placeholder="Password" required/>
                </div>
                <button type="submit" className="mt-5 bg-cyan-500 text-white p-3"><p className="text-xl">Login</p></button>
                <div className="register-link mt-5">
                    <p>Don't have an account? <a onClick={handleClick} className="text-cyan-900 underline">Register</a></p>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;