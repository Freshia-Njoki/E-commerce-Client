import { Context } from "../context/userContext/Context";
import { useContext } from "react";
import R from '../../../src/assets/R.jpeg';
import './account.css'
function Account() {
    const { user } = useContext(Context);
    return (
        <div className='profile'>
            <div className="userAvatar">
                <img className="userAvatar-img" src={R} alt="user-profile-pic" />

            </div>
            <div className="user-Details">

                <h2>Username</h2>
                <p>{user.username}</p>
                <h2>Email</h2>
                <p>{user.email}</p>


            </div>


        </div >
    )
}

export default Account