import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
// import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import './loginform.css'
import Signup from '../Signup/Signup';

function LoginForm() {
    const schema = yup.object().shape({
        username: yup.string().required("admin name is required"),
        email: yup.string().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Incorrect email format')
            .required('Email is required'),
        password: yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/, "should contain special characters, letters, numbers and 4 charcacters long").required("password is required"),

    });
    const { register, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })
    return (
        //use navigate- on continue button
        <div className='login'>
            <div className="admin-form">
                <form className="form-inputs" >
                    <h3 className="loginBanner">Set up your account </h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

                    <input type="text" placeholder='Admin Name' {...register("adminname")} />
                    {/* <p>{errors.username?.message}</p> */}

                    <input type="text" placeholder='Mobile Number' {...register("mobile_no")} />
                    {/* <p>{errors.mobile_no?.message}</p> */}

                    <input type="text" placeholder='Email Address' {...register("email")} />
                    {/* <p>{errors.email?.message}</p> */}

                    <input type="password" placeholder='Password'  {...register("password")} />
                    {/* <p>{errors.password?.message}</p> */}

                    <input type="password" placeholder='Confirm Password'  {...register("Confirm_password")} />
                    {/* <p>{errors.password?.message}</p> */}
                    <div className="checkbox">
                        <input type="checkbox" />
                        <p>Confirm Password</p>
                    </div>


                    <button className='btn submitBtn animatedButton'><Link to="/admindashboard" style={{ color: 'white', textDecoration: 'none' }}>Continue</Link></button>


                    <div className="sign">
                        <p>Already have an account?</p>
                        <Link to="/signup" style={{ color: 'blue', fontSize: '20px' }}>Sign in</Link>
                    </div>

                </form>
            </div >

        </div >
    )
}

export default LoginForm