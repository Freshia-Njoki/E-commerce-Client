import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Context } from '../../components/context/adminDashboardContext/Context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminSideNav() {
    const { dispatch } = useContext(Context);
    const navigate = useNavigate();

    const handleMinidashboard = () => {
        dispatch({ type: 'MINIDASHBOARD', payload: 'minidashboard' })

    }

    const handleOrders = () => {
        dispatch({ type: 'ORDERS', payload: 'orders' })

    }
    const handleProducts = () => {
        dispatch({ type: 'PRODUCTS', payload: 'products' })

    }
    const handleMarketing = () => {
        dispatch({ type: 'MARKETING', payload: 'marketing' })

    }
    const handleRates = () => {
        dispatch({ type: 'RATES', payload: 'rates' })

    }
    const handleReports = () => {
        dispatch({ type: 'REPORTS', payload: 'reports' })

    }
    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
        navigate('/login');
    };
    return (
        <div >
            <Sidebar className='sidebar' >
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

                    <MenuItem className="menu" onClick={handleMinidashboard}>Dashboard </MenuItem>
                    <MenuItem className="menu" onClick={handleOrders}>Orders </MenuItem>
                    <MenuItem className="menu" onClick={handleProducts}>Products </MenuItem>
                    <MenuItem className="menu" onClick={handleMarketing}>Marketing </MenuItem>
                    <MenuItem className="menu" onClick={handleRates}>Rates </MenuItem>
                    <MenuItem className="menu" onClick={handleReports}>Reports </MenuItem>
                    <MenuItem className="menu" onClick={handleLogout}>Logout</MenuItem>

                </Menu>
            </Sidebar>
        </div>
    )
}

export default AdminSideNav