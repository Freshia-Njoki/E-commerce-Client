import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Context } from '../components/context/UserDashboardContext/Context';
import { useContext } from 'react';
// import './Dashboard/dashboard.css'
import { FaUserTie } from 'react-icons/fa'


function Sidenav() {
    //collapse sidebar
    const { dispatch } = useContext(Context);

    const handlebuy = () => {
        dispatch({ type: 'BUY', payload: 'buy' })

    }

    const handleCategories = () => {
        dispatch({ type: 'CATEGORIES', payload: 'categories' })

    }
    const handleOrder = () => {
        dispatch({ type: 'ORDER', payload: 'order' })

    }
    const handleCart = () => {
        dispatch({ type: 'CART', payload: 'cart' })

    }
    const handleAccount = () => {
        dispatch({ type: 'ACCOUNT', payload: 'account' })

    }
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

                    <MenuItem className="menu" onClick={handlebuy}>QuickBuy </MenuItem>
                    <MenuItem className="menu" onClick={handleCategories}>Categories </MenuItem>
                    <MenuItem className="menu" onClick={handleOrder}>Order Management </MenuItem>
                    <MenuItem className="menu" onClick={handleCart}>Cart </MenuItem>
                    <MenuItem className="menu" onClick={handleAccount}><FaUserTie className='icon' />Account </MenuItem>

                </Menu>
            </Sidebar>
        </div>
    )
}

export default Sidenav