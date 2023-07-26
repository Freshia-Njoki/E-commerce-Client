import './placeorder.css'
import CheckoutForm from '../Stripe/Checkout'
import Payment from '../Stripe/PaymentForm'
import { useLocation } from 'react-router-dom'

function PlaceOrder(props) {
    const location = useLocation();

    //biedit - edit functionality, customer name, location-desc
    return (
        <div className="lipa">
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>

                <div className="item-details"><h3>{location.state.cartName}</h3>
                    <p>PRICE :{location.state.cartPrice} </p></div>

                <hr />
                <br />
                <Payment />
            </div>

        </div>
    )
}

export default PlaceOrder