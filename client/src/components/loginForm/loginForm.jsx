import React, { useRef, useState } from "react";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";
import Modal from 'react-modal';
import GreenTick from "../assets/green-tick.svg";
import RedCross from "../assets/red-x-icon.webp";

Modal.setAppElement('#root')

const LoginForm = () => {
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [loginFlag, setLoginFlag]=useState(false);
    const [showLoader, setShowLoader]=useState(false);

    const openModal = () => {
        setModalIsOpen(true);
        setTimeout(closeModal, 3000);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

    const handleSubmit = async (event) => {
        setShowLoader(true)

        event.preventDefault();

        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: emailRef.current.value,
                password: passwordRef.current.value
            })
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('accessToken', data.accessToken);
            setShowLoader(false)
            setLoginFlag(true);
            openModal();
            setShowLoader(true)
            navigate("/dash")
            setShowLoader(false)
        } else {
            setShowLoader(false)
            setLoginFlag(false);
            openModal();
        }
    }

    const handleClick = () => {
        navigate('/register');
    }

    return (
        <div className="wrapper text-center h-screen">
            {showLoader && <div className="loaderContainer absolute z-20 h-screen w-full flex flex-col justify-center items-center bg-white/50 backdrop-blur-sm text-3xl font-semibold">
                <div className="loadingAnimation"></div>
                Loading...
            </div>}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Transaction Details"
                className="Modals w-full flex absolute top-1 justify-center z-20"
                overlayClassName="Overlay"
            >
                <div className="w-fit rounded-lg p-2 bg-white m-2">
                    {loginFlag && <div className="h-6 flex items-center font-semibold"><img src={GreenTick} className="h-6 mr-2"/>Login Successful</div>}
                    {!loginFlag && <div className="h-6 flex items-center font-semibold"><img src={RedCross} className="h-6 mr-2"/>Invalid Credentials</div>}
                </div>
            </Modal>
            <h1 className="text-5xl mb-10"><b>Login</b></h1>
            <form onSubmit={handleSubmit} className="p-5">
                <div className="input-box text-xl my-2">
                    <input ref={emailRef} type="text" className="p-2" placeholder="Email" required />
                </div>
                <div className="input-box text-xl my-2">
                    <input ref={passwordRef} type="password" className="p-2" placeholder="Password" required />
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