import avatar from '../../../assets/Ellipse 100.jpg'
import { MdNotificationsNone } from 'react-icons/md'
import logo from '../../../assets/logo.jpg'
import './report.css'

function Report() {
    return (
        <div>
            <div className="nav">
                <div className='logo'>

                    <div className="infor">
                        <img src={logo} alt="" style={{ height: '60px', width: '60px' }} />

                        <h3>28 orders found</h3></div>

                    <div className="avr">
                        <MdNotificationsNone style={{ height: "30px", width: '30px' }} />
                        <img src={avatar} alt="" />
                        <p>Freshia</p>
                    </div>



                </div>
            </div>

            <div className="report-content">

                <div>
                    <div className="sales">graph</div>
                    <div> <span className='cards'>Comments:</span>
                        <span className='cards'></span>
                    </div>
                </div>

                <div>
                    <h5>Reviews</h5>
                    <div className="flex">
                        <h4>Ratings</h4>
                        <span className='cards'>Comments</span>

                    </div>
                    <div>
                        <span className='cards'>Monthly Revenue:</span>
                        ksh:____
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Report