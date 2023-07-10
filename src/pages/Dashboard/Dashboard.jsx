import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from "react-router-dom"
import { BsSearch } from 'react-icons/bs'
import { BiHelpCircle } from 'react-icons/bi'
import { FiLogOut } from 'react-icons/fi'
import './dashboard.css'

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


            <Sidebar className='sidebar'>
                <Menu menuItemStyles={{
                    button: {
                        // the active class will be added automatically by react router
                        // so we can use it to style the active menu item
                        [`&.active`]: {
                            backgroundColor: '#13395e',
                            color: '#b6c8d9',
                        },
                    },
                }}>

                    <MenuItem className="menu" component={<Link to="/quickbuy" />}>QuickBuy </MenuItem>
                    <MenuItem className="menu" component={<Link to="/categories" />}>Categories </MenuItem>
                    <MenuItem className="menu" component={<Link to="/order" />}>Order Management </MenuItem>
                    <MenuItem className="menu" component={<Link to="/cart" />}>Cart </MenuItem>
                    <MenuItem className="menu" component={<Link to="/Account" />}>Account </MenuItem>

                </Menu>
            </Sidebar>;
        </div>
    )
}

export default Dashboard