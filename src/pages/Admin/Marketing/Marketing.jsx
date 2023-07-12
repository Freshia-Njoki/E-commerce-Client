import avatar from '../../../assets/Ellipse 100.jpg'
import img7 from '../../../assets/image 7.jpg'
import img5 from '../../../assets/image 5.jpg'
import img6 from '../../../assets/image 6.jpg'
import img from '../../../assets/img.avif'
import img8 from '../../../assets/image 8.jpg'
import img9 from '../../../assets/image 9.jpg'
import img10 from '../../../assets/image 10.jpg'
import './marketing.css'

function Marketing() {
    return (
        //update functionality
        <>
            <div>
                <div className="info">
                    <img src={avatar} alt="" />
                    <p>Freshia</p>

                </div>
                <div className="marketing">
                    <div >
                        <img src={img9} alt="" style={{ height: '300px', width: '300px', borderRadius: '3px' }} />
                        <div className='item'>
                            <h4>Name:</h4>
                            <span>Phone</span>
                        </div>
                        <div className='item'>
                            <h4>Description:</h4>
                            <span>Lorem ipsum dolor sit amet.</span>
                        </div>
                        <div className='item'>
                            <h4>Price:</h4>
                            <span>$225</span>
                        </div>

                    </div>

                    <div className='offer'>

                        <div><span className='cards'>Offers</span></div>
                        <div><span className='cards'>Rate 16%</span></div>
                        <div><button type="button">Update</button></div>

                    </div>

                    <div >
                        <h4>Top orders</h4>
                        <div className='images'>
                            <img src={img10} alt="" />
                            <img src={img8} alt="" />
                            <img src={img6} alt="" />
                            <img src={img} alt="" />
                            <img src={img7} alt="" />
                            <img src={img5} alt="" />

                        </div>


                    </div>



                </div>
            </div>
        </>
    )
}

export default Marketing