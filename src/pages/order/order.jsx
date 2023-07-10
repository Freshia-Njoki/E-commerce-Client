import { BsArrowLeftCircle } from 'react-icons/bs'
import './order.css'
import { BiFontSize } from 'react-icons/bi'

function order() {
    return (
        <div className='order-page'>
            <div className="navbar">
                <BsArrowLeftCircle style={{ width: '32px', height: '32px' }} />
                <h3 style={{ marginLeft: "30%" }}>Order Updates</h3>
            </div>

            <div className='order'>
                <h3>System cancel order</h3>
                <p>1352463576453 has been canceled by system. if you
                    <br />already paid, please check refund status in account
                </p>

                <div className='footer'>
                    <p>date</p>
                    <p>time</p>
                </div>

            </div>

            <div className='order'>
                <h3>your goods is still pending</h3>
                <p>135276453 has been canceled by system. if you

                </p>

                <div className='footer'>
                    <p>date</p>
                    <p>time</p>
                </div>

            </div>

            <div className='order'>
                <h3>order submitted successfully</h3>
                <p>135246357 has been canceled by system. if you

                </p>

                <div className='footer'>
                    <p>date</p>
                    <p>time</p>
                </div>

            </div>

        </div >
    )
}

export default order