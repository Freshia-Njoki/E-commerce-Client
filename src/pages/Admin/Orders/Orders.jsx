import { MdNotificationsNone } from 'react-icons/md'
import avatar from '../../../assets/Ellipse 100.jpg'
import './orders.css'

function Orders() {
    return (
        <div >
            <div className="nav">
                <div><h3>28 orders found</h3></div>
                <div className='info'>
                    <MdNotificationsNone style={{ height: "30px", width: '30px' }} />
                    <img src={avatar} alt="" />
                    <p>Freshia</p>
                </div>
            </div>

            <div className="content">
                <div className="main">

                    <div><span className='cards'>All orders</span></div>


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
                    <div><span className='cards'>ID</span></div><hr style={{ height: '20rem' }} />
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