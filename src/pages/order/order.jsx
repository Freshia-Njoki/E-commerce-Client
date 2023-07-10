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
                <h5>System cancel order</h5>
                <p>1352463576453 has been canceled by system. if you
                    <br />already paid, please check refund status in account
                </p>

                <div>
                    <p>date</p>
                    <p>time</p>
                </div>

            </div>

            <div className='order'>
                <h5>System cancel order</h5>
                <p>1352463576453 has been canceled by system. if you
                    <br />already paid, please check refund status in account
                </p>

                <div>
                    <p>date</p>
                    <p>time</p>
                </div>

            </div>

            <div className='order'>
                <h5>System cancel order</h5>
                <p>1352463576453 has been canceled by system. if you
                    <br />already paid, please check refund status in account
                </p>

                <div>
                    <p>date</p>
                    <p>time</p>
                </div>

            </div>

        </div >
    )
}

export default order