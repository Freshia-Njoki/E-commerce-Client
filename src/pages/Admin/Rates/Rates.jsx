import { MdNotificationsNone } from "react-icons/md";
import avatar from "../../../assets/Ellipse 100.jpg";
import logo from "../../../assets/logo.jpg";
import { useState, useEffect } from "react";
import Axios from 'axios'
import './rates.css'

function Rates() {
    const [shippingData, setShippingData] = useState([]);

    useEffect(() => {
        Axios
            .get('http://localhost:8081/shipping')
            .then((response) => {
                const { data } = response;
                setShippingData(data);
            })
            .catch((error) => {
                console.error('Error fetching shipping data:', error);
            });
    }, []);

    return (
        <div>
            <div className="main-content">
                <div className="flex">
                    <div>chart</div>
                </div>
                <div>
                    {shippingData.map((shippingItem) => (
                        <div key={shippingItem.id} className='items'>

                            <span className='cards'>Shipping rate</span>
                            <div><ul>{shippingItem.shippingRate}</ul> </div>

                            <div>
                                <span className='cards'>Shipping method: </span>
                                <ul>{shippingItem.shippingMethod}</ul>
                            </div>

                            <hr />
                            <div>
                                <span className='cards'>Delivery timeframe: </span>
                                <ul>{shippingItem.deliveryTimeframe}</ul>
                            </div>

                            <div>
                                <span className='cards'>Region rule: </span>
                                <ul>{shippingItem.regionRule}</ul>
                            </div>

                            <div>
                                <span className='cards'>Order Size: </span>
                                <ul>{shippingItem.orderSize}</ul>
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default Rates;
