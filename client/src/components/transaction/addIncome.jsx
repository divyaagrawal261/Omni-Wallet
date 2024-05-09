import {React, useState, useEffect} from "react";
import NavBar from "../NavBar/Navbar";
import GIF from "../assets/Income.gif"

function makeRequest()
{
    const storedData = localStorage.getItem('accessToken').toString();

    fetch(`${process.env.REACT_APP_API_URL}/api/transactions/create`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${storedData}`
        },
        body: JSON.stringify({
            wallet_id: document.querySelector('#walletName').value,
            amount: document.querySelector('input[placeholder="Amount"]').value,
            note: document.querySelector('input[placeholder="Note"]').value,
            date: document.querySelector('input[type="date"]').value,
            type:"income"
        })
    })
    .then(response => response.json())
    .then(data => {})
    .catch(error => {console.error(error)
    });
}
function AddIncome()
{
    const storedData = localStorage.getItem('accessToken').toString();

    const [showLoader, setShowLoader]=useState(false);
    const [wallets, setWallets]=useState([]);

    useEffect(()=>{
           fetch(`${process.env.REACT_APP_API_URL}/api/wallets`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${storedData}`
            }
           }).then(response => response.json()).then(data => {setWallets(data); setShowLoader(false);})}, []
           )
    
    return(
        <div>
        <NavBar/>
        {showLoader && <div className="loaderContainer absolute z-20 h-screen w-full flex flex-col justify-center items-center bg-white/50 backdrop-blur-sm text-3xl font-semibold">
                <div className="loadingAnimation"></div>
                Loading...
            </div>}
        <div className="flex flex-col md:flex-row lg:flex-row w-full items-center md:h-[70vh] lg:h-[70vh]">
        <div className="w-full md:w-1/2 lg:w-1/2 text-3xl p-2 text-start">Time to spend on happy living!
        <img src={GIF} alt="" className="border rounded-xl m-2"/></div>
        <br />
        <div className="addWalletSection p-2 h-[50vh] md:h-full md:w-1/3 lg:w-1/3 w-full justify-center lg:items-center md:items-center flex items-start">
            <form action="" className="flex flex-col w-full gap-2 p-2">
                <select name="" id="walletName" placeholder="Wallet Name" required>
                      {wallets.map((wallet,index)=>(<option key={index} value={wallet._id}>{wallet.walletName}</option>))}
                </select>
                <input type="number" placeholder="Amount" className="p-2" required/>
                <input type="text" placeholder="Note" className="p-2" required/>
                <input type="date" id="date" required/>
                <button className="bg-blue-500 p-2 text-white hover:bg-slate-50 hover:text-blue-500 delay hover:border" onClick={makeRequest}>Add Expense</button>
            </form>
        </div>
        </div>
    </div>  
    )
}

export default AddIncome;