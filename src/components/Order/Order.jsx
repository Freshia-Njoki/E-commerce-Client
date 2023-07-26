import { BsArrowLeftCircle } from 'react-icons/bs'
import { useState, useEffect } from 'react';
import './order.css'

function order() {
    const [currentDate, setCurrentDate] = useState('');


    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            const date = now.toLocaleDateString();
            setCurrentDate(date);

        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className='order-page'>
            {/* <div className="navbar">
                <BsArrowLeftCircle style={{ width: '32px', height: '30px' }} />
                <h3 style={{ marginLeft: "30%" }}>Order Updates</h3>
            </div> */}

            <div className='order'>
                <h3>System cancel order</h3>
                <p>1352463576453 has been canceled by system. if you
                    <br />already paid, please check refund status in account
                </p>

                <div className='footer-order'>
                    <p className="date">{currentDate}</p>


                </div>

            </div>

            <div className='order'>
                <h3>your goods is still pending</h3>
                <p>135276453 has been canceled by system. if you

                </p>

                <div className='footer-order'>
                    <p className="date">{currentDate}</p>
                </div>

            </div>

            <div className='order'>
                <h3>order submitted successfully</h3>
                <p>135246357 has been canceled by system. if you

                </p>

                <div className='footer-order'>
                    <p className="date">{currentDate}</p>
                </div>

            </div>

        </div >
    )
}

export default order