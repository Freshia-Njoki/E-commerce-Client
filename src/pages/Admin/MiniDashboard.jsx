import img6 from '../../assets/image 6.jpg'
import img7 from '../../assets/image 7.jpg'
import img5 from '../../assets/image 5.jpg'
import img8 from '../../assets/image 8.jpg'
import img9 from '../../assets/image 9.jpg'
import img10 from '../../assets/image 10.jpg'
import { AiOutlineHeart } from 'react-icons/ai'
import { UserData } from '../../data/Data.js'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)
import { useEffect, useState } from 'react';
import axios from 'axios';
import { apiDomain } from '../../utils/utils'

function minidashboard() {
    const [totalRevenue, setTotalRevenue] = useState(null);
    const [totalSavings, setTotalSavings] = useState(null);


    useEffect(() => {
        axios
            .get(`${apiDomain}/revenue`)
            .then((response) => {
                const { data } = response;
                const totalRevenue = data.data[0]?.total_revenue || 0;

                setTotalRevenue(totalRevenue);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);


    useEffect(() => {
        axios
            .get('http://localhost:8081/savings')
            .then((response) => {
                const { data } = response;
                const totalSavings = data.data[0]?.total_savings || 0;
                setTotalSavings(totalSavings);
            })
            .catch((error) => {
                console.error('Error fetching total savings:', error);
            });
    }, []);

    const data = {
        labels: UserData.map((userData) => userData.year),

        datasets: [
            {
                label: 'Gain',
                data: UserData.map((userData) => userData.Gain),
                backgroundColor: 'aqua',
                borderColor: 'black',
                borderWidth: 1,
            },
            {
                label: 'Loss',
                data: UserData.map((userData) => userData.Loss),
                backgroundColor: 'green',
                borderColor: 'black',
                borderWidth: 1,
            },
        ],
    };

    const options = {}
    return (
        <div>
            <div className="admin-dashboard">
                <div className="views">
                    <div className="statistics">
                        <div className="balance">
                            <h5>Total Revenue</h5>
                            <span className='cards' style={{ backgroundColor: 'aqua' }}>{totalRevenue ? `$${totalRevenue.toFixed(2)}` : 'Loading...'}</span>

                        </div>
                        <div className="savings">
                            <h5>Total Savings</h5>

                            <span className='cards' style={{ backgroundColor: 'aqua' }}> {totalSavings ? `$${totalSavings.toFixed(2)}` : 'Loading...'}</span>
                        </div>
                    </div>
                    <div className="graph">
                        <h5>Statistics</h5>
                        <Bar data={data} options={options}></Bar>
                    </div>
                </div>
                <div className="top-sales">
                    <h4>Top selling products</h4>
                    <div className="img">

                        <div>
                            <img src={img9} alt="" />
                            <div className="desc">
                                <p>phone</p>
                                <p>$255</p>
                            </div>
                            {/* <div className="icon"><AiOutlineHeart /></div> */}
                        </div>

                        <div>
                            <img src={img6} alt="" />
                            <div className="desc">
                                <p>bag</p>
                                <p>$15.50</p>
                            </div>
                            {/* <div className="icon"><AiOutlineHeart /></div> */}
                        </div>

                        <div>
                            <img src={img10} alt="" />
                            <div className="desc">
                                <p>clothes</p>
                                <p>$20</p>
                            </div>
                            {/* <div className="icon"><AiOutlineHeart /></div> */}
                        </div>

                        <div>
                            <img src={img7} alt="" />
                            <div className="desc">
                                <p>beauty</p>
                                <p>$80</p>
                            </div>
                            {/* <div className="icon"><AiOutlineHeart /></div> */}
                        </div>

                        <div>
                            <img src={img8} alt="" />
                            <div className="desc">
                                <p>beauty</p>
                                <p>$11</p>
                            </div>
                            {/* <div className="icon"><AiOutlineHeart /></div> */}
                        </div>

                        <div>
                            <img src={img5} alt="" />
                            <div className="desc">
                                <p>bag</p>
                                <p>$25</p>
                            </div>
                            {/* <div className="icon"><AiOutlineHeart /></div> */}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default minidashboard