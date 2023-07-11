import { IoNotificationsOutline } from 'react-icons/io'
import avatar from '../../../assets/Ellipse 100.jpg'

function Orders() {
    return (
        <div><div className="nav">
            <h5>28 orders found</h5>
            <div>
                <IoNotificationsOutline />
                <img src={avatar} alt="" />
            </div>
        </div></div>
    )
}

export default Orders