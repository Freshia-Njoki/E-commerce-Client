import React, { useState, useContext } from 'react';
import { Context } from '../context/UserDashboardContext/Context';
import PaymentForm from '../Stripe/PaymentForm';

function Cart() {
    const { cart } = useContext(Context);
    const [showPaymentForm, setShowPaymentForm] = useState(false);

    const handleOrderClick = () => {
        // Set the state to true to show the payment form
        setShowPaymentForm(true);
    };

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
                                    {/* Add a button to trigger the payment process */}
                                    <button onClick={handleOrderClick}>Order</button>
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

            {/* Conditionally render the PaymentForm component based on showPaymentForm state */}
            {showPaymentForm && <PaymentForm />}
        </>
    );
}

export default Cart;
