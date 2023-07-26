import { useContext } from 'react';
// import Dashboard from '../Dashboard/Dashboard'
import { Context } from '../context/UserDashboardContext/Context';
import Categories from '../Categories/Categories';
import Order from '../Order/Order';
import Cart from '../Cart/Cart';
import Products from '../Products'

import Account from '../Account/Account'
import './mainav.css'

export default function MainNav() {
    const { ui } = useContext(Context);

    return (
        <div className="mainnav">
            {ui === 'buy' ? (
                <div className="mainnav_wrapper">
                    {/* <h2>Quickbuy</h2> */}
                    <Products />
                </div>
            ) :
                ui === 'categories' ? (
                    <div className="mainnav_wrapper">

                        <Categories />
                    </div>
                ) : ui === 'order' ? (
                    <div className="mainnav_wrapper">

                        <Order />
                    </div>
                )
                    : ui === 'cart' ? (
                        <div className="mainnav_wrapper">

                            <Cart />
                        </div>
                    )
                        : ui === 'account' ? (
                            <div className='container'>
                                <h2>Account</h2>
                                <Account />
                            </div>
                        ) : null}
        </div>
    );
}