// import logo from '../assets/logo.PNG'
import { useState } from "react";
import { AiOutlineShoppingCart } from 'react-icons/ai'
import './nav.css'
import { Link } from 'react-router-dom'

function Nav() {
    const [isAboutVisible, setAboutVisible] = useState(false);
    const [iscontactUsVisible, setcontactUsVisible] = useState(false);

    const aboutContent = (
        <div className="dropdown-menu">
            <h4>Lorem ipsum dolor sit amet.</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus inventore corporis tenetur quod odit repellendus?
            </p>

        </div>
    );

    const contactUSContent = (
        <div className="dropdown-menu">
            <h4>Lorem ipsum dolor.</h4>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit.</li>

        </div>
    );


    return (
        <div className="header-wrapper">
            <img src="logo" alt="" />
            <div className="main">
                <button className='submitBtn animatedButton'><Link to='/login'>Get Started</Link> </button>
                <span>ShopAll</span>
                <span>Accessories</span>
                <span>Women</span>
                <span>Men</span>
            </div>
            <div className="contact">
                <span onMouseEnter={() => { setAboutVisible(true) }}
                    onMouseLeave={() => { setAboutVisible(false) }}
                    style={{ color: 'blue' }}>
                    About {isAboutVisible && aboutContent}

                </span>

                <span onMouseEnter={() => { setcontactUsVisible(true) }}
                    onMouseLeave={() => { setcontactUsVisible(false) }}>
                    Contact Us {iscontactUsVisible && contactUSContent}

                </span>
                <span>$ 0.00</span>
                <span>  <AiOutlineShoppingCart />
                </span>

            </div>



        </div>
    )
}

export default Nav
