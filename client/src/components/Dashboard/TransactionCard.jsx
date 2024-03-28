import React from "react";

function TransactionCard(props)
{
    if(props.type=="expense")
    var color="red";
    else 
    color="green";
    return(
    <div className="w-full p-2 rounded-lg" style={{backgroundColor:color}}>
        <h2 className="text-xl font-semibold">{props.wallet}</h2>
        <h2 className="text-xl font-semibold">{props.amount}</h2> 
    </div>
    )
}

export default TransactionCard;