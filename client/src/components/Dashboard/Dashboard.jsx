import {React, useEffect, useState} from "react";
import NavBar from "../NavBar/Navbar";
import Card from "./WalletCard";
import { Link, useNavigate} from "react-router-dom";
import OptionTab from "./OptionTab";
import TransactionCard from "./TransactionCard";
import Graph from "./Graph";

function Dashboard() {

  const navigate = useNavigate();
  const storedData = localStorage.getItem('accessToken').toString();
  
  const [wallets,setWallets]=useState([]);
  const [totalBalance, setTotalBalance]=useState("0");
  const [recents, setRecents]=useState([]);
  const [showLoader, setShowLoader]=useState(true);

  useEffect(()=>{
    
    fetch(`${process.env.REACT_APP_API_URL}/api/wallets`, {
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${storedData}`
      }
  }).then(response => response.json()).then(data=>{setWallets(data)}).catch(error => {console.error(error)});},[])

  useEffect(()=>{
    fetch(`${process.env.REACT_APP_API_URL}/api/transactions/recents`, {
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${storedData}`
      }
  }).then(response => response.json()).then(data=>{setRecents(data)}).catch(error => {console.error(error)});},[])

  useEffect(()=>{
    fetch(`${process.env.REACT_APP_API_URL}/api/users/current`, {
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${storedData}`
      }
  }).then(response => response.json()).then(data=>{setTotalBalance(data.currentBalance); setShowLoader(false)}).catch(error => {console.error(error)});},[])

  try{
  return (
    <>
    <div className="h-screen">
      <NavBar />
      {showLoader && <div className="loaderContainer absolute z-20 h-screen w-full flex flex-col justify-center items-center bg-white/50 backdrop-blur-sm text-3xl font-semibold">
                <div className="loadingAnimation"></div>
                Loading...
            </div>}
      <div className="w-full md:flex-row justify-start items-start flex flex-col-reverse">
        <div className="walletSection md:w-1/4 w-full bg-slate-800 h-[100vh] flex flex-col justify-start p-2 gap-2 overflow-y-scroll">
          <h1 className="text-white/70 text-center p-2 font-semibold">
            WALLETS
          </h1>
          {wallets.map((wallet,index)=>{return <Card key={index} walletName={wallet.walletName} walletBalance={wallet.walletBalance}/>})}
          </div>
        <div className="mainPage md:w-3/4 w-full flex flex-col px-2 gap-2 md:mt-0 mt-2 justify-start md:py-2 h-[100vh]">
            <div className="mainTop flex justify-start w-full h-calc gap-2">
          <div className="flex flex-col w-full md:w-1/2 h-full justify-start">
            <div className="w-full h-full flex mb-2">
              <div className="w-full p-2 border rounded-lg flex justify-evenly h-full balanceCard">
                <div className="flex flex-col w-full h-full justify-start items-start pl-2 gap-2">
                  <h1 className="text-2xl font-bold">Total Balance</h1>
                  <h1 className="text-xl font-semibold">{totalBalance}</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="optionsContainer grid grid-cols-2 md:w-1/2 w-full gap-2 h-full">
            <Link to="/income" className="h-full"><OptionTab bgColor="#000000" text="+ Add Income" /></Link>
            <Link to="/expense" className="h-full"><OptionTab bgColor="#000000" text="+ Add Expense" /></Link>
            <Link to="/wallets" className="h-full"><OptionTab bgColor="#000000" text="+ Add Wallet" /></Link>
            <Link to="/history" className="h-full"><OptionTab bgColor="#000000" text="History" /></Link>
          </div>
          </div>
          <div className="mainBottom justify-start w-full gap-2 flex flex-col md:flex-row items-start h-calc2">
            <div className="graphSection w-full md:w-1/2 flex flex-col justify-start">
              <Graph/>
            </div>
            <div className="RecentsSection w-full md:w-1/2 border p-2 rounded-lg gap-2 flex-col flex md:relative overflow-y-scroll justify-start">
                <h2 className="text-center">RECENTS</h2>
                {recents.map((transaction,index)=>{return <TransactionCard key={index} amount={transaction.amount} wallet={transaction.wallet_id.walletName} type={transaction.type}/>})}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
  }
  catch{
    navigate("/logout");
  }
}

export default Dashboard;
