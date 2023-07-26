import React, { useState, useContext } from 'react';
import { Context } from '../context/UserDashboardContext/Context';
import PaymentForm from '../Stripe/PaymentForm';
import { useNavigate } from 'react-router-dom';
import './cart.css'

function Cart() {
    const { cart, dispatch } = useContext(Context);
    const navigate = useNavigate();

    const handleOrderClick = (cartName, cartPrice) => {
        // Directly call the navigate function to navigate to the new route
        navigate('/placeorder', { state: { cartName, cartPrice } });
    };

    const handleRemoveItem = (createdAt) => {
        dispatch({ type: 'REMOVE_ITEM', payload: createdAt });
    }

    console.log(cart);

    return (
        <>
            <div className='cart-page'>
                {cart?.map((item) => (
                    <div key={item.id} className='cart-body'>
                        <div className='cart-header'>
                            <h3>{item.name}</h3>
                        </div>
                        <div className='cart-item'>
                            <div className="product">
                                <img className='img' src={`http://localhost:8081${item.image_path}`} alt="" style={{ paddingLeft: "2rem", width: '160px', height: '120px' }} />
                                <div className="desc">
                                    <p>{item.description}</p>
                                    <p>price :  ${item.price}</p>
                                    <button className="order-btn" onClick={() => handleOrderClick(item.name, item.price)}>Order</button>
                                    <button className="remove-btn" onClick={() => handleRemoveItem(item.created_at)}>Remove Item</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Cart;
