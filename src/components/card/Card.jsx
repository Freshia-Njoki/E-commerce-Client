import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import '../Dashboard/dashboard.css'


function Card({ img, productName, price, description }) {
    console.log(img)
    return (
        <div className='card-section'>
            <div className="card">
                <div><img className='img' src={`http://localhost:8081${img}`} alt="" /></div>
            </div>


            <div className="description"><p>{productName}</p>
                <p>{description}</p>
                <p>price: {price}</p></div>
            <div className="rating" style={{ marginLeft: "1rem" }}> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiOutlineStar /> </div>
        </div>
    )
}
export default Card