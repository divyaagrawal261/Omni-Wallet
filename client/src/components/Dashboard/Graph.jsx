import React from "react";
import {Chart as ChartJS} from "chart.js/auto";
import {Bar} from "react-chartjs-2";

function Graph()
{

    const data={
        labels:["Jan", "Feb", "March", "April"],
        datasets:[
            {
                label: "Expenses in 20XX",
                data: [60,90,50]
            }
        ]
    }
    return(
        <Bar data={data} className="historyGraph"/>
    );
}

export default Graph;