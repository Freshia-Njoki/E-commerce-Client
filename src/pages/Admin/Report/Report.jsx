import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import { Data } from "../../../data/revenueSavings.js";
import { orderData } from "../../../data/orderData.js";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)
ChartJS.register(Tooltip, Legend)

import './report.css';

function Report() {
    const chartData = {
        labels: Data.map((item) => item.year),

        datasets: [
            {
                label: 'Revenue',
                data: Data.map((item) => item.revenue),
                backgroundColor: 'rgba(192, 75, 192, 0.6)',
                borderColor: 'rgba(192, 75, 192, 1)',
                borderWidth: 1,
            },
            {
                label: 'Savings',
                data: Data.map((item) => item.savings),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const pieChartData = {
        labels: orderData.map((item) => item.year),

        datasets: [
            {
                data: orderData.map((item) => item.items),
                backgroundColor: ['rgba(75, 192, 75, 0.6)', 'rgba(192, 75, 75, 0.6)', 'rgba(75, 75, 192, 0.6)'],
                borderColor: ['rgba(75, 192, 75, 1)', 'rgba(192, 75, 75, 1)', 'rgba(75, 75, 192, 1)'],
                borderWidth: 1,
            },
        ],
    };

    const orderChartData = {
        labels: orderData.map((item) => item.year),

        datasets: [
            {
                label: 'Items',
                data: orderData.map((item) => item.items),
                backgroundColor: 'rgba(75, 192, 75, 0.6)',
                borderColor: 'rgba(75, 192, 75, 1)',
                borderWidth: 1,
            },
            {
                label: 'Amount Made',
                data: orderData.map((item) => item.amountMade),
                backgroundColor: 'rgba(192, 75, 75, 0.6)',
                borderColor: 'rgba(192, 75, 75, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {};

    return (
        <div className="bar-graph">
            <div className="graph-container">
                <div className="graph">
                    <h5>Revenue and Savings</h5>
                    <Bar data={chartData} options={options} />
                </div>

                <div className="graph">
                    <h5>Order Data</h5>
                    <Bar data={orderChartData} options={options} />
                </div>
            </div>

            <div className="flex">
                <h3>Reviews Highlights:</h3>
                <span className='review'><p> Customer Satisfaction:<br /> By providing a delightful shopping experience. <br />

                    Impressive Savings made while shopping with us. <br />

                    Product Quality:curating a diverse selection of items.</p></span>



            </div>


        </div>
    );
}

export default Report;
