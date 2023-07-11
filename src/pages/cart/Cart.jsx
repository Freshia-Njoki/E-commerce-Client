import { BsArrowLeftCircle, BsBoxSeam, BsArrowRightCircle } from 'react-icons/bs'
import { AiFillTags } from 'react-icons/ai'
import { FiCheckCircle, FiCircle } from 'react-icons/fi'
import img5 from '../../assets/image 5.jpg'
import img6 from '../../assets/image 6.jpg'
import { Link } from 'react-router-dom'
import './cart.css'
import PlaceOrder from '../../components/placeorder/PlaceOrder'

function Cart() {
    //usestate handle bag quantity
    return (
        <>
            <div className='cart-page'>
                <div className="cart-nav">
                    <BsArrowLeftCircle style={{ width: '32px', height: '32px' }} />
                    <h2 style={{ marginLeft: "30%" }}>Cart</h2>
                </div>

                <div className='cart-body'>
                    <div className='cart-header'>
                        <FiCheckCircle style={{ width: '30px', height: '30px' }} />
                        <BsBoxSeam style={{ width: '32px', height: '32px' }} />
                        <h3>ZY charm</h3>
                        <BsArrowRightCircle style={{ width: '25px', height: '25px' }} />
                        <div className='tag' ><AiFillTags style={{ width: '32px', height: '32px' }} /></div>

                    </div>
                    <div className='item'>
                        <div className="product"><img src={img5} alt="" style={{ paddingLeft: "2rem", width: '160px', height: '120px' }} />
                            <div className="desc">
                                <p>Brown Elegant Statement Handbag </p>
                                <p>price :  $79.99</p></div>
                        </div>
                        <div className="btns">
                            +  <button className='btn1'> quantity </button> -
                            <button className='btn2'><Link to="/placeorder" element={<PlaceOrder />} style={{ color: 'white', textDecoration: 'none' }}>Order Now</Link></button>
                        </div>
                    </div>

                </div>

                <div className='cart-body'>
                    <div className='cart-header'>
                        <FiCircle style={{ width: '30px', height: '30px' }} />
                        <BsBoxSeam style={{ width: '32px', height: '32px' }} />
                        <h3>gift</h3>
                        <BsArrowRightCircle style={{ width: '25px', height: '25px' }} />
                        <div className='tag' ><AiFillTags style={{ width: '32px', height: '32px' }} /></div>

                    </div>
                    <div className='item'>
                        <div className="product"><img src={img6} alt="" style={{ paddingLeft: "2rem", width: '160px', height: '120px', borderRadius: "3px", marginTop: '5px' }} />
                            <div className="desc">
                                <p>Brown Elegant Statement Handbag </p>
                                <p>price :  $79.99</p></div>
                        </div>
                        <div className="btns">
                            +  <button className='btn1'> quantity </button> -

                        </div>
                    </div>

                </div>

            </div>

            <div className='cart-footer'>
                <div style={{ display: "flex", gap: "2rem" }}>
                    <FiCircle style={{ width: '20px', height: '20px' }} />
                    <p>All</p>
                </div>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "1rem" }}>
                    <p>Total: ksh 324</p>
                    <button className='btn2'>Check Out</button>
                </div>


            </div>
        </>
    )
}

export default Cart