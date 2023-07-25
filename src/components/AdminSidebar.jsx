import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from "react-router-dom"

function AdminSidebar() {
    return (
        <div>
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

                    <MenuItem className="menu">Dashboard </MenuItem>
                    <MenuItem className="menu" component={<Link to="/orders" />} >Orders </MenuItem>
                    <MenuItem className="menu" component={<Link to="/products" />}>Products </MenuItem>
                    {/* <MenuItem className="menu" component={<Link to="/marketing" />}>Marketing </MenuItem> */}
                    <MenuItem className="menu" component={<Link to="/rates" />}>Rates </MenuItem>
                    <MenuItem className="menu" component={<Link to="/report" />}>Reports </MenuItem>
                    <MenuItem className="menu" component={<Link to="/adminlogout" />}>Log Out </MenuItem>

                </Menu>
            </Sidebar>
        </div>
    )
}

export default AdminSidebar