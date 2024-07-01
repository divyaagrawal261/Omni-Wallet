import {React, useState} from "react";
import NavBar from "../NavBar/Navbar";
import walletGIF from "../assets/Wallet.gif";
import {useNavigate} from "react-router-dom";

function Wallets()
{
    const [showLoader, setShowLoader]=useState(false);
    const navigate = useNavigate();
    
    function createWallet()
    {
        setShowLoader(true);
        const storedData = localStorage.getItem('accessToken').toString();
        
        fetch(`${process.env.REACT_APP_API_URL}/api/wallets/create`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${storedData}`
            },
            body: JSON.stringify({
                walletName: document.querySelector('#walletName').value,
                walletBalance: document.querySelector('#walletBalance').value
            })
        })
        .then(response => response.json())
        .then(data => {setShowLoader(false);})
        .catch(error => {console.error(error)});
    }
    
    try{
    return(
    <div>
        <NavBar/>
        {showLoader && <div className="loaderContainer absolute z-20 h-screen w-full flex flex-col justify-center items-center bg-white/50 backdrop-blur-sm text-3xl font-semibold">
                <div className="loadingAnimation"></div>
                Loading...
            </div>}
        <marquee behavior="" direction="" className="bg-red-500 text-white">We recommend adding upto 7 wallets only</marquee>
        <div className="flex flex-col md:flex-row lg:flex-row w-full items-center md:h-[70vh] lg:h-[70vh]">
        <div className="w-full md:w-1/2 lg:w-1/2 text-3xl p-2 text-start">Ready to add a new Wallet?
        <img src={walletGIF} alt="" className="border rounded-xl m-2"/></div>
        <br />
        <div className="addWalletSection p-2 h-[50vh] md:h-full md:w-1/3 lg:w-1/3 w-full justify-center lg:items-center md:items-center flex items-start">
            <form action="" className="flex flex-col w-full gap-2 p-2">
                <input type="text" placeholder="Wallet Name" id="walletName" className="p-2"/>
                <input type="number" step="0.01" placeholder="Opening Balance" id="walletBalance" className="p-2"/>
                <button className="bg-blue-500 p-2 text-white hover:bg-slate-50 hover:text-blue-500 delay hover:border" onClick={createWallet}>Create Wallet</button>
            </form>
        </div>
        </div>
    </div>    
    )
    }
    catch(error)
    {
        navigate("/logout");
    }
}

export default Wallets;