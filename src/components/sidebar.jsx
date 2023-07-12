import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from "react-router-dom"
import '../pages/Dashboard/dashboard.css'


function sidebar() {
    //collapse sidebar
    return (
        <div >
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

                    <MenuItem className="menu">QuickBuy </MenuItem>
                    <MenuItem className="menu" component={<Link to="/categories" />} >Categories </MenuItem>
                    <MenuItem className="menu" component={<Link to="/order" />}>Order Management </MenuItem>
                    <MenuItem className="menu" component={<Link to="/cart" />}>Cart </MenuItem>
                    <MenuItem className="menu" component={<Link to="/account" />}>Account </MenuItem>

                </Menu>
            </Sidebar>
        </div>
    )
}

export default sidebar