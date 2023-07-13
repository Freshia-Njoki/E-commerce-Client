import * as yup from 'yup'
import { Link } from 'react-router-dom'
import { yupResolver } from "@hookform/resolvers/yup"
// import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
// import Axios from 'axios';
import './login.css'


function Login() {


    const schema = yup.object().shape({
        username: yup.string().required("full name is required"),
        password: yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/, "should contain special characters, letters, numbers and 4 charcacters long").required("password is required"),

    });
    const { register, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    return (
        <>
            <div className='login'>
                <div className='login-form'>

                    <div >
                        <h1>Welcome to</h1>
                        <h1>QuickBuy</h1>
                    </div>
                    <div className="form">

                        <h4>Log in</h4>

                        <form className="form-inputs" >
                            <label htmlFor="text">Email Address</label>
                            <input type="text" id="text" placeholder='' {...register("email")} />
                            {/* <p>{errors.email?.message}</p> */}
                            <label htmlFor="password">Password</label>
                            <input type="password" id='password' placeholder=''  {...register("password")} />
                            {/* <p>{errors.password?.message}</p> */}
                            {/* navigate upon succesful signup-remove link */}
                            <Link to='/dashboard'><input className='loginBtn' type="submit" value="Login" /></Link>

                            <Link to='/signup'><input className='signupBtn' type="submit" value="Sign up" /></Link>
                        </form>
                    </div>
                </div>
            </div >

        </>
    )
}

export default Login