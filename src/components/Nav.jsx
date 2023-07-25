// import logo from '../assets/logo.PNG'
import { useState } from "react";
import { AiOutlineShoppingCart } from 'react-icons/ai'
import './nav.css'
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'

function Nav() {
    const [isAboutVisible, setAboutVisible] = useState(false);
    const [iscontactUsVisible, setcontactUsVisible] = useState(false);

    const aboutContent = (
        <div className="dropdown-menu">
            <span>CustomersOrders, PaymentDiscounts.</span>

        </div>
    );

    const contactUSContent = (
        <div className="dropdown-menu">
            <span>orders or inquiries.</span>

        </div>
    );


    return (
        <div className="header-wrapper">
            <img src={logo} alt="" style={{ height: '60px', borderRadius: '4px', padding: '2px' }} />
            <div className="quickbuy">
                <button className='submitBtn animatedButton'><Link to='/login'>Get Started</Link> </button>
                <span>ShopAll</span>
                <span>Accessories</span>
                <span>Women</span>
                <span>Men</span>
            </div>
            <div className="contact">
                <span onMouseEnter={() => { setAboutVisible(true) }}
                    onMouseLeave={() => { setAboutVisible(false) }}
                    style={{ color: 'white' }}>
                    About {isAboutVisible && aboutContent}

                </span>

                <span onMouseEnter={() => { setcontactUsVisible(true) }}
                    onMouseLeave={() => { setcontactUsVisible(false) }}
                    style={{ color: 'white' }}
                >
                    ContactUs {iscontactUsVisible && contactUSContent}

                </span>
                <span>$0.00</span>
                <span>  <AiOutlineShoppingCart />
                </span>

            </div>



        </div>
    )
}

export default Nav
