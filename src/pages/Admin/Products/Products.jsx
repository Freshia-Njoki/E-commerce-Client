import { MdNotificationsNone } from 'react-icons/md'
import { AiOutlineHeart, AiOutlineInbox } from 'react-icons/ai'
import { BsCheck2Circle } from 'react-icons/bs'
import { BsSearch } from 'react-icons/bs'
import img5 from '../../../assets/image 5.jpg'
import img6 from '../../../assets/image 6.jpg'
import img7 from '../../../assets/image 7.jpg'
import img8 from '../../../assets/image 8.jpg'
import avatar from '../../../assets/Ellipse 100.jpg'
import logo from '../../../assets/logo.jpg'
import './products.css'

function Products() {
    return (
        <div>
            <div className="products-nav">
                <div className="it-left">
                    <img src={logo} alt="" style={{ height: '60px', width: '60px' }} />
                    <h3>28 orders found</h3>
                </div>
                <div className='admin-info'>
                    <MdNotificationsNone style={{ height: "30px", width: '30px' }} />
                    <img src={avatar} alt="" style={{ borderRadius: '50px', border: 'none' }} />
                    <p>Freshia</p>
                </div>
            </div>

            <div className="product-content">
                <div className='mini-content'>

                    <div><span className='cards'>Men</span></div>
                    <span className='cards'>Female</span>
                    <span className='cards'>Fashion</span>

                    <div className="date" >
                        <BsSearch style={{ height: '30px', width: '30px' }} />
                        <AiOutlineHeart style={{ height: '30px', width: '30px' }} />
                        <AiOutlineInbox style={{ height: '30px', width: '30px' }} />
                    </div>


                </div>

                <div className='item'>
                    <div className="mini-items">

                        <div style={{ display: 'flex' }}>
                            <img src={img5} alt="" />
                            <span className='cards'>Bag</span>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <img src={img6} alt="" />
                            <span className='cards'>Bag</span>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <img src={img7} alt="" />
                            <span className='cards'>Beauty</span>
                        </div>
                        <vr />
                    </div>
                    <div className='main-product--content'>
                        <div>
                            <img src={img8} alt="" style={{ height: '200px', width: '200px', borderRadius: '3px', marginRight: '1rem' }} />
                        </div>
                        <div >
                            <span className='spans'>
                                <p>Ref:No 24r5345g</p>
                                <div style={{ display: 'flex', flexDirection: 'row' }}><p>instock</p>
                                    <BsCheck2Circle style={{ height: '20px', width: '20px', margin: '3px' }} /></div>
                            </span>
                            <hr style={{ marginLeft: '1rem', color: 'grey' }} />

                            <span className='span1'>

                                <div>
                                    <p>Name</p>
                                    <p>Price</p>
                                </div>

                                <div>
                                    <p>beauty brush</p>
                                    <p>$11.50</p>
                                </div>


                            </span>

                            <span className='span1'>

                                <div>
                                    <p>Quantity</p>
                                    <p>Description</p>
                                </div>

                                <div>
                                    <p>17</p>
                                    <p>$11.50</p>
                                </div>

                            </span>
                            <hr style={{ marginLeft: '1rem' }} />

                            <span className='estimate'><h3>Estimate delivery : _____</h3></span>

                        </div>
                    </div>

                </div>



            </div>

        </div >
    )
}

export default Products