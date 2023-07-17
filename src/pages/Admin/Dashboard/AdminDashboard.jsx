import AdminSidebar from "../../../components/AdminSidebar"
import avatar from '../../../assets/Ellipse 100.jpg'
import logo from '../../../assets/logo.jpg'
import img6 from '../../../assets/image 6.jpg'
import img7 from '../../../assets/image 7.jpg'
import img5 from '../../../assets/image 5.jpg'
import img8 from '../../../assets/image 8.jpg'
import img9 from '../../../assets/image 9.jpg'
import img10 from '../../../assets/image 10.jpg'
import { AiOutlineHeart } from 'react-icons/ai'
import './dashboard.css'
import { UserData } from '../../../data/Data.js'

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)
import { useEffect, useState } from 'react';
import axios from 'axios';

function AdminDashboard() {
    const [totalRevenue, setTotalRevenue] = useState(null);
    const [totalSavings, setTotalSavings] = useState(null);

    useEffect(() => {
        axios
            .get('http://localhost:8081/revenue')
            .then((response) => {
                const { data } = response;
                const totalRevenue = data.data[0]?.total_revenue || 0; // Assuming the API response has { data: [{ total_revenue: number }] }

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
            <div className="admin-nav">
                <img src={logo} alt="" style={{ height: '80px', width: '100px', paddingTop: '5px' }} />
                <p style={{ marginLeft: '0px' }}>Welcome, Freshia</p>
                <input type="text" placeholder="search..." style={{ padding: '10px 90px', borderRadius: '8px', border: 'none', backgroundColor: 'whitesmoke' }} />
                <div className="user">
                    <img src={avatar} alt="" style={{ borderRadius: '50px', border: 'none', marginTop: '.7rem' }} />
                    <p>Freshia</p>
                </div>

            </div>
            <div className="cols">
                <div className="adm-sidebar">
                    <AdminSidebar />
                </div>
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
                                <div className="icon"><AiOutlineHeart /></div>
                            </div>

                            <div>
                                <img src={img6} alt="" />
                                <div className="desc">
                                    <p>bag</p>
                                    <p>$15.50</p>
                                </div>
                                <div className="icon"><AiOutlineHeart /></div>
                            </div>

                            <div>
                                <img src={img10} alt="" />
                                <div className="desc">
                                    <p>clothes</p>
                                    <p>$20</p>
                                </div>
                                <div className="icon"><AiOutlineHeart /></div>
                            </div>

                            <div>
                                <img src={img7} alt="" />
                                <div className="desc">
                                    <p>beauty</p>
                                    <p>$80</p>
                                </div>
                                <div className="icon"><AiOutlineHeart /></div>
                            </div>

                            <div>
                                <img src={img8} alt="" />
                                <div className="desc">
                                    <p>beauty</p>
                                    <p>$11</p>
                                </div>
                                <div className="icon"><AiOutlineHeart /></div>
                            </div>

                            <div>
                                <img src={img5} alt="" />
                                <div className="desc">
                                    <p>bag</p>
                                    <p>$25</p>
                                </div>
                                <div className="icon"><AiOutlineHeart /></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



        </div >
    )
}

export default AdminDashboard