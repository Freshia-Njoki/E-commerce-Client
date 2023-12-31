import { AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import './footer.css';

function Footer() {
    const year = new Date().getFullYear()
    return (
        <>
            <div className="footer">
                <div >
                    <p> © {year} QuickBuy</p>
                    <a href="https://twitter.com/FreshiaNjoki2">< AiFillTwitterCircle className='icons' /></a>
                    <a href="https://www.linkedin.com/in/freshia-njoki"><AiFillLinkedin className='icons' /></a>
                </div>

            </div>

        </>

    )
}

export default Footer