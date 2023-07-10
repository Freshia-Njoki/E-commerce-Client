import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import '../../pages/Dashboard/dashboard.css'
import img from '../../assets/img.avif'

function Card() {
    return (
        <div >
            <div className="card">
                <img className='img' src={img} alt="" />
                <div className="description"><p>product name</p>
                    <p>price: $55.50</p></div>
                <div className="rating"> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiOutlineStar /> </div>


            </div>
        </div>
    )
}
export default Card