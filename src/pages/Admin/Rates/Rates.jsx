import { MdNotificationsNone } from "react-icons/md";
import avatar from "../../../assets/Ellipse 100.jpg";
import logo from "../../../assets/logo.jpg";

function Rates() {
    return (
        <div>
            <div className="nav">
                <div className="logo">
                    <div className="infor">
                        <img src={logo} alt="" style={{ height: "60px", width: "60px" }} />

                        <h3>28 orders found</h3>
                    </div>

                    <div className="avr">
                        <MdNotificationsNone style={{ height: "30px", width: "30px" }} />
                        <img src={avatar} alt="" />
                        <p>Freshia</p>
                    </div>
                </div>
            </div>

            <div className="main-content"></div>
        </div>
    );
}

export default Rates;
