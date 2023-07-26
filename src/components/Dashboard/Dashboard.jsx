import React, { useState } from 'react';
import { BiHelpCircle } from 'react-icons/bi';
import { FiLogOut } from 'react-icons/fi';
import './dashboard.css';
import { Link } from 'react-router-dom';
import Sidenav from '../Sidenav/Sidenav';
import MainNav from '../mainnav/MainNav';

function Dashboard() {
    const [selectedCategory, setSelectedCategory] = useState('');

    return (
        <>
            <div className="navbarr">
                <h3>Our Products</h3>
                <div className="search">
                    <input
                        type="text"
                        placeholder="search item..."
                        style={{
                            marginLeft: '13rem',
                            padding: '5px 50px',
                            borderRadius: '8px',
                            border: '1px solid grey',
                        }}
                    />
                    <input
                        type="button"
                        value="search"
                        style={{
                            padding: '5px 10px',
                            borderRadius: '8px',
                            border: '1px solid grey',
                        }}
                    />
                    <div className="nav-right">
                        <BiHelpCircle /> <p>Help</p>
                        <FiLogOut /><Link to="/logout"><p>Logout</p></Link>
                    </div>
                </div>
            </div>

            <div className="display">
                <Sidenav setSelectedCategory={setSelectedCategory} />

                <MainNav selectedCategory={selectedCategory} />
            </div>
        </>
    );
}

export default Dashboard;
