import * as yup from 'yup'
import { Link } from 'react-router-dom'
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import Axios from 'axios';
import { apiDomain } from '../../utils/utils';
import './login.css'
import { useContext } from 'react';
import { Context } from '../../components/context/userContext/Context';
import LoginForm from '../../components/adminsignup/AdminSignup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const { user, dispatch } = useContext(Context);
    console.log(user);
    const navigate = useNavigate();

    const schema = yup.object().shape({
        username: yup.string().required("Username is required"),
        password: yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/, "should contain special characters, letters, numbers and 4 characters long").required("password is required"),

    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        Axios.post(`${apiDomain}/auth/login`, data)
            .then(({ data }) => {
                //validate to check if the data.token is present
                if (data.token) {
                    dispatch({ type: "LOGIN_SUCCESS", payload: data })
                    navigate("/dashboard");
                }

            })
            .catch(({ response }) => {
                const error = response.data.error;
                toast.error(error);

            });
        toast.success("Login successful");
    }

    return (
        <>
            <div className='Login'>
                <div className='login-form'>

                    <div >
                        <h1>Welcome to</h1>
                        <h1>QuickBuy</h1>
                    </div>
                    <div className="form">

                        <h4>Log in</h4>

                        <form className="form-inputs" onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="text">UserName</label>
                            <input type="text" id="text" placeholder='ruth' {...register("username")} />
                            {errors.username && toast.error(errors.username?.message)}
                            <label htmlFor="password">Password</label>
                            <input type="password" id='password' placeholder='ruth@123'  {...register("password")} />
                            {errors.password && toast.error(errors.password?.message)}
                            <input className='loginBtn' type="submit" value="Login" />

                            <Link to='/signup'><input className='signupBtn' type="submit" value="Sign up" /></Link>
                        </form>
                    </div>
                </div>
                <div>
                    <LoginForm />
                </div>
            </div >

        </>
    )
}

export default Login