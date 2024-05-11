import {React, useState, useEffect} from "react";
import NavBar from "../NavBar/Navbar";
import TransactionCard from "./TransactionCard";
import {useNavigate} from "react-router-dom";

function AllTransactions()
{
    const navigate = useNavigate();
    const storedData = localStorage.getItem('accessToken').toString();

    const [transactions, setTransactions]=useState([]);
    const [showLoader, setShowLoader]=useState(true);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/transactions`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${storedData}`
            }
        })
          .then(response => response.json())
          .then(data => {setTransactions(data)
        setShowLoader(false)})
          .catch(error => {console.error(error)
        });
      }, []);

    try{
    return(
    <div>
        <NavBar/>
        {showLoader && <div className="loaderContainer absolute z-20 h-screen w-full flex flex-col justify-center items-center bg-white/50 backdrop-blur-sm text-3xl font-semibold">
                <div className="loadingAnimation"></div>
                Loading...
            </div>}
        <div className="flex flex-col w-full h-fit">
        <div className="historySection w-full flex flex-col gap-2 mt-2 px-2">
            {transactions.map((transaction, index)=>{
                const date = new Date(transaction.date);

                const readableDate = date.toLocaleString('en-US', {
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric'
                });

                return (<TransactionCard key={index} date={readableDate} walletName={transaction.wallet_id.walletName} amount={transaction.amount} type={transaction.type} note={transaction.note}/>)})}
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

export default AllTransactions;