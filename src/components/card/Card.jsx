import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import '../Dashboard/dashboard.css';
import { apiDomain } from '../../utils/utils';

function Card({ img, productName, price, description, handleClick }) { // Receive handleClick as a prop

    return (
        <div className='card-section'>
            <div className="card">
                <div><img className='img' src={`${apiDomain}${img}`} alt="" /></div>
            </div>

            <div className="description">
                <p>{productName}</p>
                <p>{description}</p>
                <p>price: {price}</p>
            </div>

            <button onClick={handleClick}>ADD TO CART</button> {/* Attach the handleClick function to the button click event */}
        </div>
    );
}

export default Card;
