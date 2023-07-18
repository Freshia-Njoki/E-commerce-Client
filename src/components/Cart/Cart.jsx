import { useContext } from 'react';
import { BsArrowLeftCircle, BsBoxSeam, BsArrowRightCircle } from 'react-icons/bs';
import { AiFillTags } from 'react-icons/ai';
import { FiCheckCircle, FiCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
// Replace 'path/to/your/context/file' with the correct path to your cart context file
import img5 from '../../assets/image 5.jpg';
import img6 from '../../assets/image 6.jpg';
import './cart.css';
import PlaceOrder from '../placeorder/PlaceOrder';
import { Context } from '../context/UserDashboardContext/Context';

function Cart() {
    //usestate handle bag quantity

    // Fetch the cart state from the context
    const state = useContext(Context);
    const { cart } = useContext(Context);

    console.log(cart)

    return (
        <>
            <div className='cart-page'>
                {/* Rest of the code ... */}

                {/* Map through the 'cart' array to display items */}
                {cart?.map((item) => (
                    <div key={item.id} className='cart-body'>
                        {/* Display the item details */}
                        <div className='cart-header'>
                            {/* ... */}
                            <h3>{item.name}</h3>
                            {/* ... */}
                        </div>
                        <div className='item'>
                            <div className="product">
                                <img className='img' src={`http://localhost:8081${item.image_path}`} alt="" style={{ paddingLeft: "2rem", width: '160px', height: '120px' }} />

                                <div className="desc">
                                    <p>{item.description}</p>
                                    <p>price :  ${item.price}</p>
                                </div>
                            </div>
                            <div className="btns">
                                {/* ... */}
                            </div>
                        </div>
                    </div>
                ))}

                {/* Rest of the code ... */}
            </div>
        </>
    )
}

export default Cart;
