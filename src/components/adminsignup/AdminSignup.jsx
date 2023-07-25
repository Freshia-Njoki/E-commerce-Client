import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';
import './adminsignup.css'
import { apiDomain } from '../../utils/utils';
import Axios from 'axios'

function LoginForm() {
    const navigate = useNavigate();
    const schema = yup.object().shape({
        admin_name: yup.string().required("Admin name is required"),
        phone_no: yup.string().matches(/^[0-9]{10}$/, 'Mobile number must be a 10-digit number').required('Mobile number is required'),
        email: yup.string()
            .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Incorrect email format')
            .required('Email is required'),
        password: yup.string()
            .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/, "Should contain special characters, letters, numbers, and be at least 4 characters long")
            .required("Password is required"),
    });

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const Submit = (data) => {
        Axios.post(`${apiDomain}/auth/adminRegister`, data)
            .then((response) => {
                response.data.message && alert(response.data.message);

                navigate("/admindashboard");
            })


            .catch(({ response }) => {
                alert(response.data.error);
            });
    }

    return (
        <div className='login'>
            <div className="admin-form">
                <form className="form-inputs" onSubmit={handleSubmit(Submit)}>
                    <h3 className="loginBanner">Admin Set up Account </h3>
                    <p style={{ color: 'white' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

                    <input type="text" placeholder='Admin Name' {...register("admin_name")} />
                    <p>{errors.admin_name?.message}</p>

                    <input type="text" placeholder='Mobile Number' {...register("phone_no")} />
                    <p>{errors.phone_no?.message}</p>

                    <input type="text" placeholder='Email Address' {...register("email")} />
                    <p>{errors.email?.message}</p>

                    <input type="password" placeholder='Password'  {...register("password")} />
                    <p>{errors.password?.message}</p>


                    <input className='btn submitBtn animatedButton' type="submit" placeholder="Continue" style={{ marginTop: "30PX" }} />

                    {/* <button className='btn submitBtn animatedButton'></button> */}

                    <div className="sign">
                        <p>Already have an account?</p>
                        <Link to="/adminlogin" style={{ color: 'blue', fontSize: '20px' }}>Sign in</Link>
                    </div>

                </form>
            </div >

        </div >
    )
}

export default LoginForm