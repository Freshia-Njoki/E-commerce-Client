import { useState, useEffect } from "react";
import Axios from 'axios'
import { apiDomain } from "../../../utils/utils";
import './rates.css'

function Rates() {
    const [shippingData, setShippingData] = useState([]);

    useEffect(() => {
        Axios
            .get(`${apiDomain}/shipping`)
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
                {shippingData.map((shippingItem) => (
                    <div key={shippingItem.id} className="card">


                        <span className="cards">Shipping rate:{shippingItem.shippingRate}</span>

                        <span className="cards">Shipping method:{shippingItem.shippingMethod}</span>

                        <span className="cards">Delivery timeframe: {shippingItem.deliveryTimeframe}</span>


                    </div>
                ))}
            </div>
        </div>
    );
}

export default Rates;
