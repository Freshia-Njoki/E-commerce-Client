import './orders.css';
import { useState, useEffect } from "react";
import Axios from 'axios';
import { apiDomain } from "../../../utils/utils";

function Orders() {
    const [orderData, setOrderData] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState('AllOrders');

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                let response;
                if (selectedStatus === 'AllOrders') {
                    response = await Axios.get(`${apiDomain}/orders`);
                } else {
                    response = await Axios.post(`${apiDomain}/orders/status`, { status: selectedStatus });
                }
                const { data } = response;
                setOrderData(data);
            } catch (error) {
                console.error('Error fetching order data:', error);
            }
        };
        fetchOrders();
    }, [selectedStatus]);

    return (
        <div>


            <div className="order-content">
                <div className="minibar">
                    <div className="status">
                        <span className={selectedStatus === 'AllOrders' ? 'cards active' : 'cards'} onClick={() => setSelectedStatus('AllOrders')}>AllOrders</span>
                        <span className={selectedStatus === 'completed' ? 'cards active' : 'cards'} onClick={() => setSelectedStatus('completed')}>completed</span>
                        <span className={selectedStatus === 'pending' ? 'cards active' : 'cards'} onClick={() => setSelectedStatus('pending')}>pending</span>
                        <span className={selectedStatus === 'cancelled' ? 'cards active' : 'cards'} onClick={() => setSelectedStatus('cancelled')}>cancelled</span>
                    </div>
                    <div className="time">
                        <input type="date" name="" id="" />
                        <p style={{ marginTop: '.4rem', color: 'white' }}>to</p>
                        <input type="date" name="" id="" />
                    </div>
                </div>
                <div className="nav">
                    <h3>{orderData.length} orders found</h3>
                </div>

                <div className='items'>

                    {orderData.length === 0 ? (
                        <div className="no-orders">
                            <h4>No orders found with the selected status.</h4>
                        </div>
                    ) : (
                        orderData.map((order) => (
                            <div key={order.id}>
                                <span className='item'>ID:  {order.user_id}</span> <br />
                                <span className='item'>Cash:  {order.total_amount}</span> <br />
                                <span className='item'>Status:  {order.status}</span> <br />
                                {/* <span className='item'>OrderTime:   {order.created_at}</span> <br /> */}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default Orders;
