import React from "react";
import NavBar from "../NavBar/Navbar";
import GIF from "../assets/Expense.gif"

function AddExpense()
{
    return(
        <div>
        <NavBar/>
        <div className="flex flex-col md:flex-row lg:flex-row w-full items-center md:h-[70vh] lg:h-[70vh]">
        <div className="w-full md:w-1/2 lg:w-1/2 text-3xl p-2 text-start">Time to spend on happy living!
        <img src={GIF} alt="" className="border rounded-xl m-2"/></div>
        <br />
        <div className="addWalletSection p-2 h-[50vh] md:h-full md:w-1/3 lg:w-1/3 w-full justify-center lg:items-center md:items-center flex items-start">
            <form action="" className="flex flex-col w-full gap-2 p-2">
                <input type="text" placeholder="Wallet Name" className="p-2"/>
                <input type="number" placeholder="Opening Balance" className="p-2"/>
                <input type="text" placeholder="Note" className="p-2"/>
                <button className="bg-blue-500 p-2 text-white hover:bg-slate-50 hover:text-blue-500 delay hover:border">Create Wallet</button>
            </form>
        </div>
        </div>
    </div>  
    )
}

export default AddExpense;