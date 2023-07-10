import Sidebar from '../../components/Sidebar';

import { BiHelpCircle } from 'react-icons/bi'
import { FiLogOut } from 'react-icons/fi'
import './dashboard.css'
import Card from '../../components/card/card';
// import Categories from '../../components/Categories/Categories';



function Dashboard() {
    //state-management(redux) for dashboard components

    return (
        <div>
            <div className="navbar">
                <h3>Our Products</h3>
                <div className="search">
                    <input type="text" placeholder="search item..." style={{ marginLeft: '13rem', padding: '5px 50px', borderRadius: '8px', border: '1px solid grey' }} />
                    <input type="button" value="search" style={{ padding: '5px 10px', borderRadius: '8px', border: '1px solid grey' }} />
                    <div className="nav-right">
                        <BiHelpCircle /> <p>Help</p>
                        <FiLogOut /> <p>Logout</p>
                    </div>


                </div>

            </div>

            <div className='content'>


                <Sidebar />
                <div className='products'>

                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div >
    )
}

export default Dashboard