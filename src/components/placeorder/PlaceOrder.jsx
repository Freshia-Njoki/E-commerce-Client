import { BsArrowLeftCircle } from 'react-icons/bs'
import { BiEditAlt } from 'react-icons/bi'
import { FiCheckCircle } from 'react-icons/fi'
import { GrLocation } from 'react-icons/gr'
import img29 from '../../assets/image 29.jpg'
import img31 from '../../assets/image 31.jpg'
import img32 from '../../assets/image 32.jpg'
import { FiCircle } from 'react-icons/fi'
import './placeorder.css'
import CheckoutForm from '../Stripe/Checkout'
import Payment from '../Stripe/PaymentForm'
import { useLocation } from 'react-router-dom'

function PlaceOrder(props) {
    const location = useLocation();

    //biedit - edit functionality, customer name, location-desc
    return (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
            <h3>{location.state.cartName}</h3>
            <p>PRICE :{location.state.cartPrice} </p>

            <hr />
            <br />
            <Payment />
        </div>
    )
}

export default PlaceOrder