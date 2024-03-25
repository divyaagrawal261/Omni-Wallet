import React from "react";
import NavBar from "../NavBar/Navbar";
import Card from "./WalletCard";
import { FaWallet } from "react-icons/fa";
import OptionTab from "./OptionTab";

function Dashboard() {
  return (
    <>
      <NavBar />
      <div className="w-full md:flex-row justify-start items-start flex flex-col">
        <div className="walletSection md:w-1/4 w-full bg-slate-800 h-[100%] flex flex-col justify-center p-2 gap-2">
          <h1 className="text-white/70 text-center p-2 font-semibold">
            WALLETS
          </h1>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="mainPage md:w-3/4 w-full flex px-2 gap-2 md:mt-0 mt-2 justify-start md:py-2">
            <div className="mainTop flex justify-start w-full h-[200px] gap-2">
          <div className="flex flex-col w-full md:w-1/2 gap-2 h-full">
            <div className="balanceCard w-full h-full flex">
              <div className="w-full p-2 border rounded-lg flex justify-evenly">
                <div className="flex flex-col w-full h-full justify-start items-start pl-2 gap-2">
                  <h1 className="text-xl">Wallet Name</h1>
                  <h1 className="text-xl">amount</h1>
                </div>
              </div>
            </div>
            <div className="balanceCard w-full h-full flex">
              <div className="w-full p-2 border rounded-lg flex justify-evenly">
                <div className="flex flex-col w-full h-full justify-start items-start pl-2 gap-2">
                  <h1 className="text-xl">Wallet Name</h1>
                  <h1 className="text-xl">amount</h1>
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
        </div>
      </div>
    </>
  );
}

export default Dashboard;
