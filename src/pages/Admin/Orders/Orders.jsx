import './orders.css'

function Orders() {
    return (
        <div >
            <div className="nav">
                <div className='logo'>
                    <div className="infor">
                        <h3>28 orders found</h3></div>
                </div>
            </div>

            <div className="order-content">
                <div className="minibar">
                    <div className="status">
                        <span className='cards'>AllOrders</span>
                        <span className='cards'>Completed</span>
                        <span className='cards'>Pending</span>
                        <span className='cards'>cancelled</span>
                    </div>
                    <div className="time">
                        <input type="date" name="" id="" />
                        <p style={{ marginTop: '.4rem', color: 'white' }}>to</p>
                        <input type="date" name="" id="" />
                    </div>
                </div>

                <div className='items'>
                    {/* <span className='cards'>ID</span><hr style={{ height: '15rem' }} /> */}
                    <span className='cards'>Name</span> <hr />
                    {/* <span className='cards'>Address</span> <hr /> */}
                    <span className='cards'>Date</span> <hr />
                    <span className='cards'>Price</span> <hr />
                    <span className='cards'>Status</span> <hr />
                    {/* <span className='cards'>Action</span> <hr /> */}

                </div>

            </div>

        </div>
    )
}

export default Orders