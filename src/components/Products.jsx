import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Card from '../components/card/Card';
import { apiDomain } from '../utils/utils';
import { Context } from '../components/context/UserDashboardContext/Context';

function Products() {
    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const { cart, dispatch } = useContext(Context);

    useEffect(() => {
        // Fetch products from the server
        axios
            .get(`${apiDomain}/products`)
            .then((response) => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
                setLoading(false);
            });
    }, []);

    const handleClick = (item) => {
        // Check if the item already exists in the cart based on some unique identifier (e.g., product ID)
        const existingItem = cart.find((cartItem) => cartItem.id === item.id);

        if (existingItem) {
            // If the item exists, update the quantity (or price) by doubling it
            dispatch({ type: 'UPDATE_CART_ITEM', payload: { ...existingItem, price: existingItem.price * 2 } });
        } else {
            // If the item doesn't exist, add it to the cart
            dispatch({ type: 'ADD_TO_CART', payload: item });
        }

        alert('Item added to cart');
    };

    return (
        <div>
            <div className="products">
                {isLoading ? (
                    <p>Loading...</p> // Display a loading message or spinner while loading
                ) : (
                    products.map((product, index) => (
                        <div key={index}>
                            <Card
                                key={product.id}
                                productName={product.name}
                                price={product.price}
                                description={product.description}

                                img={product.image_path}
                                handleClick={() => handleClick(product)} // Pass the handleClick function as a prop
                            />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Products;
