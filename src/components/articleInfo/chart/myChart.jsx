import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Line} from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
const MyChart = ({graph}) => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Sales History',
            },
        },
    };

    const labels = graph?.FC.map(wk=>wk.wk)

    const data = {
        labels,
        datasets: [
            {
                label: 'Forecast',
                data: graph?.FC.map(wk=>wk.value),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Sold',
                data: graph?.SOLD.map(wk=>wk.value),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };


    return (
        <div className='article-info__chart-div'>
            <div className={'chart-div__chart'}>
                <Line options={options} data={data}/>
            </div>

        </div>

)
    ;
};

export default MyChart;
