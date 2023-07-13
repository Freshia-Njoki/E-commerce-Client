import { BsArrowLeftCircle } from 'react-icons/bs'
import { BiEditAlt } from 'react-icons/bi'
import { FiCheckCircle } from 'react-icons/fi'
import { GrLocation } from 'react-icons/gr'
import img29 from '../../assets/image 29.jpg'
import img31 from '../../assets/image 31.jpg'
import img32 from '../../assets/image 32.jpg'
import { FiCircle } from 'react-icons/fi'
import './placeorder.css'

function PlaceOrder() {
    //biedit - edit functionality, customer name, location-desc
    return (
        <div className='bg'>
            <div className="p-nav">
                <BsArrowLeftCircle style={{ width: '32px', height: '32px' }} />
                <h2 style={{ marginLeft: "30%" }}>Place Order</h2>
            </div>
            <div className='shipping-info'>
                <div className="mini-nav">
                    <h3>Shipping information</h3>
                    <div className="edit">
                        <p style={{ color: 'red', paddingRight: '1rem' }}>Edit</p>
                        <BiEditAlt />
                    </div>
                </div>
                <div>
                    <div className="customer-info">


                        <div style={{ paddingLeft: "1rem" }}>
                            <h4>Freshia Ruitha</h4>
                            <div className='information'>
                                <GrLocation style={{ width: '20px', height: '20px' }} />
                                <p>Location description</p>
                            </div>
                        </div>
                        <div className="phone-no">
                            <p style={{ fontSize: '18px' }}>+254-723-253-252</p>
                        </div>

                    </div>

                </div>

            </div>

            <div className="payment">
                <h3 >Payment Method</h3>

                <div style={{ paddingLeft: "1rem" }}>
                    <h4 style={{ paddingTop: '5px' }}>Trusted PAyment, 100% Money Bank Guarantee</h4>
                    <div className="payment-card">
                        <img src={img29} alt="" style={{ width: '50px', height: '50px' }} />
                        <p>Account(Balance:Ksh_)</p>
                        <FiCircle style={{ width: '20px', height: '20px' }} />

                    </div>

                    <div className="payment-card2">
                        <img src={img31} alt="" style={{ width: '50px', height: '50px' }} />
                        <FiCheckCircle style={{ width: '20px', height: '20px', marginTop: "5px" }} />

                    </div>

                    <div className="payment-card">
                        <img src={img32} alt="" style={{ width: '60px', height: '40px' }} />
                    </div>
                    <div >
                        <p>Total</p>
                        <div style={{ display: 'flex', gap: '37rem', padding: '5px, 0px' }}>
                            <p>Goods Amount:</p>
                            <p>1400</p>
                        </div>
                        <div style={{ display: 'flex', gap: '38rem' }}>
                            <p>Shipping Fee:</p>
                            <p>144</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='payment-footer'>
                <div style={{ display: "flex", gap: "2rem" }}>

                    <p>Ksh 785</p>
                </div>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "1rem" }}>

                    <button className='btn2' >Place Order</button>
                </div>


            </div>
        </div>
    )
}

export default PlaceOrder