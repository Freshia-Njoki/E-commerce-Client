import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Card from '../components/card/Card';
import { Context } from '../components/context/UserDashboardContext/Context';

function Products() {
    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const { dispatch } = useContext(Context);
    const state = useContext(Context)

    const handleClick = (item) => {
        alert('Item added to cart ')

        // Assuming 'item' contains the necessary details of the product to be added to the cart
        dispatch({ type: 'ADD_TO_CART', payload: item });
    };
    console.log(state)

    useEffect(() => {
        // Fetch products from the server
        axios
            .get('http://localhost:8081/products')
            .then((response) => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <div className="products">
                {isLoading ? (
                    <p>Loading...</p> // Display a loading message or spinner while loading
                ) : (
                    products.map((product, index) => (
                        <div key={index} onClick={() => handleClick(product)}>
                            <Card
                                key={product.id}
                                productName={product.name}
                                price={product.price}
                                description={product.description}
                                img={product.image_path}

                            >
                            </Card>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Products;
