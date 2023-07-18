import { MdNotificationsNone } from 'react-icons/md'
import avatar from '../../../assets/Ellipse 100.jpg'
import './orders.css'

function Orders() {
    return (
        <div >
            <div className="nav">
                <div className='logo'>

                    <div className="infor">


                        <h3>28 orders found</h3></div>

                    <div className="avr">
                        <MdNotificationsNone style={{ height: "30px", width: '30px' }} />
                        <img src={avatar} alt="" />
                        <p>Freshia</p>
                    </div>



                </div>
            </div>

            <div className="order-content">
                <div className="status">
                    <span className='cards'>All orders</span>
                    <span className='cards'>Dispatch</span>
                    <span className='cards'>Pending</span>
                    <span className='cards'>Completed</span>
                    <div className="date">
                        <input type="date" name="" id="" />
                        <p style={{ marginTop: '.4rem' }}>to</p>
                        <input type="date" name="" id="" />
                    </div>


                </div>

                <div className='items'>
                    <span className='cards'>ID</span><hr style={{ height: '15rem' }} />
                    <span className='cards'>Name</span> <hr />
                    <span className='cards'>Address</span> <hr />
                    <span className='cards'>Date</span> <hr />
                    <span className='cards'>Price</span> <hr />
                    <span className='cards'>Status</span> <hr />
                    <span className='cards'>Action</span> <hr />

                </div>

            </div>

        </div>
    )
}

export default Orders