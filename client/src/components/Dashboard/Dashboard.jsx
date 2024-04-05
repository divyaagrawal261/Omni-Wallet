import React from "react";
import NavBar from "../NavBar/Navbar";
import Card from "./WalletCard";
import { FaWallet } from "react-icons/fa";
import OptionTab from "./OptionTab";
import TransactionCard from "./TransactionCard";
import Graph from "./Graph";

function Dashboard() {
  return (
    <>
    <div className="h-screen">
      <NavBar />
      <div className="w-full md:flex-row justify-start items-start flex flex-col-reverse">
        <div className="walletSection md:w-1/4 w-full bg-slate-800 h-[100vh] flex flex-col justify-start p-2 gap-2 overflow-y-scroll">
          <h1 className="text-white/70 text-center p-2 font-semibold">
            WALLETS
          </h1>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          </div>
        <div className="mainPage md:w-3/4 w-full flex flex-col px-2 gap-2 md:mt-0 mt-2 justify-start md:py-2 h-[100vh]">
            <div className="mainTop flex justify-start w-full h-calc gap-2">
          <div className="flex flex-col w-full md:w-1/2 h-full justify-start">
            <div className="w-full h-full flex mb-2">
              <div className="w-full p-2 border rounded-lg flex justify-evenly h-full balanceCard">
                <div className="flex flex-col w-full h-full justify-start items-start pl-2 gap-2">
                  <h1 className="text-2xl font-bold">Total Balance</h1>
                  <h1 className="text-xl font-semibold">Amount</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="optionsContainer grid grid-cols-2 md:w-1/2 w-full gap-2 h-full">
            <OptionTab bgColor="#000000" text="+ Add Income" />
            <OptionTab bgColor="#000000" text="+ Add Expense" />
            <OptionTab bgColor="#000000" text="+ Add Wallet" />
            <OptionTab bgColor="#000000" text="History" />
          </div>
          </div>
          <div className="mainBottom justify-start w-full gap-2 flex flex-col md:flex-row items-start h-calc2">
            <div className="graphSection w-full md:w-1/2 flex flex-col justify-start">
              <Graph/>
            </div>
            <div className="RecentsSection w-full md:w-1/2 border p-2 rounded-lg gap-2 flex-col flex md:relative overflow-y-scroll justify-start">
                <h2 className="text-center">RECENTS</h2>
                <TransactionCard wallet="Bank of India" amount="1200" type="expense"/>
                <TransactionCard wallet="Bank of India" amount="1200" type="expense"/>
                <TransactionCard wallet="Bank of India" amount="1200" type="expense"/>
                <TransactionCard wallet="Bank of India" amount="1200" type="expense"/>
                <TransactionCard wallet="Bank of India" amount="1200" type="expense"/>
                <TransactionCard wallet="Bank of India" amount="1200" type="income"/>
                <TransactionCard wallet="Bank of India" amount="1200" type="expense"/>
                <TransactionCard wallet="Bank of India" amount="1200" type="income"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Dashboard;
