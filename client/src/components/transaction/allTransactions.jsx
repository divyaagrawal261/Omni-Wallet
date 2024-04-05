import React from "react";
import NavBar from "../NavBar/Navbar";
import walletGIF from "../assets/Wallet.gif"
import TransactionCard from "./TransactionCard";

function AllTransactions()
{
    return(
    <div>
        <NavBar/>
        <div className="flex flex-col w-full h-fit">
        <div className="historySection w-full flex flex-col gap-2 mt-2 px-2">
        <TransactionCard date="10/04/2024" walletName="Bank of India" amount="1200" type="expense" note="Sample Note"/>
        <TransactionCard date="10/04/2024" walletName="Bank of India" amount="1200" type="income"/>
        <TransactionCard date="10/04/2024" walletName="Bank of India" amount="1200" type="expense"/>
        <TransactionCard date="10/04/2024" walletName="Bank of India" amount="1200" type="income"/>
        <TransactionCard date="10/04/2024" walletName="Bank of India" amount="1200" type="expense"/>
        <TransactionCard date="10/04/2024" walletName="Bank of India" amount="1200" type="expense"/>
        <TransactionCard date="10/04/2024" walletName="Bank of India" amount="1200" type="expense"/>
        <TransactionCard date="10/04/2024" walletName="Bank of India" amount="1200" type="expense"/>
        <TransactionCard date="10/04/2024" walletName="Bank of India" amount="1200" type="expense"/>
        <TransactionCard date="10/04/2024" walletName="Bank of India" amount="1200" type="expense"/>
        <TransactionCard date="10/04/2024" walletName="Bank of India" amount="1200" type="expense"/>
 
        </div>
        </div>
    </div>    
    )
}

export default AllTransactions;