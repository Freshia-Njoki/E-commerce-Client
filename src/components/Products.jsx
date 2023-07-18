import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/card/Card';

function Products() {
    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        // Fetch products from the server
        axios
            .get('http://localhost:8081/products')
            .then((response) => {
                setProducts(response.data);
                setLoading(false)
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
                setLoading(false)
            });
    }, []);



    console.log(products)
    return (
        <div>

            <div className="products">
                {isLoading ? (
                    <p>Loading...</p> // Display a loading message or spinner while loading
                ) : (
                    products.map((product) => (
                        <Card
                            key={product.id}
                            productName={product.name}
                            price={product.price}
                            description={product.description}
                            img={product.image_path}
                        />
                    ))
                )}
            </div>
        </div>
    )
}

export default Products