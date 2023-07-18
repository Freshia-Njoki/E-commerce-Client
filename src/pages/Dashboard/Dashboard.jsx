import Sidebar from '../../components/sidebar';
import { BiHelpCircle } from 'react-icons/bi';
import { FiLogOut } from 'react-icons/fi';
import './dashboard.css';
import Card from '../../components/card/card';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
function Dashboard() {
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

        <>
            <div className="navbar">
                <h3>Our Products</h3>
                <div className="search">
                    <input
                        type="text"
                        placeholder="search item..."
                        style={{
                            marginLeft: '13rem',
                            padding: '5px 50px',
                            borderRadius: '8px',
                            border: '1px solid grey',
                        }}
                    />
                    <input
                        type="button"
                        value="search"
                        style={{
                            padding: '5px 10px',
                            borderRadius: '8px',
                            border: '1px solid grey',
                        }}
                    />
                    <div className="nav-right">
                        <BiHelpCircle /> <p>Help</p>
                        <FiLogOut /><Link to="/logout"><p>Logout</p></Link>
                    </div>
                </div>
            </div>

            <div className="display">
                <Sidebar />
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
        </>
    );
}

export default Dashboard;
