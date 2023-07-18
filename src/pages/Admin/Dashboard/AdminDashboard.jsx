import avatar from '../../../assets/Ellipse 100.jpg'
import logo from '../../../assets/logo.jpg'
import './dashboard.css'
import Mainnav from "../../../components/AdminMainnav/Mainnav"
import AdminSideNav from "../../../components/AdminMainnav/AdminSideNav"

function AdminDashboard() {

    return (


        <div>

            <div className="admin-nav">
                <img src={logo} alt="" style={{ height: '80px', width: '100px', paddingTop: '5px' }} />
                <p style={{ marginLeft: '0px' }}>Welcome, Freshia</p>
                <input type="text" placeholder="search..." style={{ padding: '10px 90px', borderRadius: '8px', border: 'none', backgroundColor: 'whitesmoke' }} />
                <div className="user">
                    <img src={avatar} alt="" style={{ borderRadius: '50px', border: 'none', marginTop: '.7rem' }} />
                    <p>Freshia</p>
                </div>

            </div>
            <div className="cols">
                <div className="adm-sidebar">
                    <AdminSideNav />
                </div>

                <Mainnav />
            </div>



        </div >
    )
}

export default AdminDashboard