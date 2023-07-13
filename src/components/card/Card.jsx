import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import '../../pages/Dashboard/dashboard.css'
import img from '../../assets/img.avif'

function Card() {
    return (
        <div className='section'>
            <div className="card">
                <div><img className='img' src={img} alt="" /></div>
            </div>

            <div className="description"><p>product name</p>
                <p>price: $55.50</p></div>
            <div className="rating" style={{ marginLeft: "1rem" }}> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiOutlineStar /> </div>
        </div>
    )
}
export default Card