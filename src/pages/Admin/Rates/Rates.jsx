import { MdNotificationsNone } from "react-icons/md";
import avatar from "../../../assets/Ellipse 100.jpg";
import logo from "../../../assets/logo.jpg";
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
                {/* <div className="flex">
                    <div>chart</div>
                </div> */}
                {/* <div className="table-container">
                    {shippingData.map((shippingItem) => (
                        <div key={shippingItem.id} className="card">
                            <div className="table-row">
                                <span className="cards">Shipping rate</span>
                                <span>{shippingItem.shippingRate}</span>
                            </div>

                            <div className="table-row">
                                <span className="cards">Shipping method: </span>
                                <span>{shippingItem.shippingMethod}</span>
                            </div>

                            <div className="table-row">
                                <span className="cards">Delivery timeframe: </span>
                                <span>{shippingItem.deliveryTimeframe}</span>
                            </div>

                            <div className="table-row">
                                <span className="cards">Region rule: </span>
                                <span>{shippingItem.regionRule}</span>
                            </div>

                            <div className="table-row">
                                <span className="cards">Order Size: </span>
                                <span>{shippingItem.orderSize}</span>
                            </div>

                            <hr />
                        </div>
                    ))}
                </div> */}
                <div className="table-container">
                    {shippingData.map((shippingItem) => (
                        <div key={shippingItem.id} className="card">
                            <span className="row-title">Shipping Details:</span>
                            <div className="table">
                                <div className="table-row">
                                    <span className="cards">Shipping rate:</span>
                                    {/* <span>{shippingItem.shippingRate}</span> */}
                                </div>

                                <div className="table-row">
                                    <span className="cards">Shipping method:</span>
                                    {/* <span>{shippingItem.shippingMethod}</span> */}
                                </div>

                                <div className="table-row">
                                    <span className="cards">Delivery timeframe:</span>
                                    {/* <span>{shippingItem.deliveryTimeframe}</span> */}
                                </div>


                                <div className="table-row">
                                    <span className="cards">Order Size:</span>
                                    {/* <span>{shippingItem.orderSize}</span> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>



            </div>
        </div>
    );
}

export default Rates;
