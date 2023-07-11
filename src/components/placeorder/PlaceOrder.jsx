import { BsArrowLeftCircle } from 'react-icons/bs'
import { BiEditAlt } from 'react-icons/bi'
import { GrLocation } from 'react-icons/gr'
import img29 from '../../assets/image 29.jpg'
// import img 30 from '../../assets/image 30.jpg'
// import img 31 from '../../assets/image 31.jpg'
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
                    <div className="flex">


                        <div>
                            <h4>Freshia Ruitha</h4>
                            <div className='info'>
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
                <h3>Payment Method</h3>
                <h6>Trusted PAyment, 100% Money Bank Guarantee</h6>
                <div className="payment-card">
                    <img src={img29} alt="" />
                    <p>Account(Balance:Ksh_)</p>
                    <FiCircle />

                </div>
            </div>
        </div>
    )
}

export default PlaceOrder