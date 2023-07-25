import { useContext } from 'react';
import { Context } from '../context/adminDashboardContext/Context';
import Orders from '../../pages/Admin/Orders/Orders'
import Products from '../../pages/Admin/Products/Products'
import Marketing from '../../pages/Admin/Marketing/Marketing'
import Rates from '../../pages/Admin/Rates/Rates'
import Report from '../../pages/Admin/Report/Report'
import MiniDashboard from '../../pages/Admin/MiniDashboard';
import Logout from '../../pages/Admin/AdminLogout/AdminLogout'


export default function MainNav() {
    const { ui } = useContext(Context);

    return (
        <div className="mainnav">
            {ui === 'minidashboard' ? (
                <div className="mainnav_wrapper">

                    <MiniDashboard />
                </div>
            ) :
                ui === 'orders' ? (
                    <div className="mainnav_wrapper">

                        <Orders />
                    </div>
                ) : ui === 'products' ? (
                    <div className="mainnav_wrapper">

                        <Products />
                    </div>
                )
                    // : ui === 'marketing' ? (
                    //     <div className="mainnav_wrapper">

                    //         <Marketing />
                    //     </div>
                    // )
                    : ui === 'rates' ? (
                        <div className='container'>

                            <Rates />
                        </div>
                    ) : ui === 'reports' ? (
                        <div className='container'>

                            <Report />
                        </div>
                    )
                        : ui === 'logout' ? (
                            <div className='container'>
                                <Logout />
                            </div>
                        ) :
                            null}
        </div>
    );
}
