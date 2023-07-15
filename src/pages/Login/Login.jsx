import * as yup from 'yup'
import { Link } from 'react-router-dom'
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import Axios from 'axios';
import './login.css'


function Login() {
    const navigate = useNavigate();

    const schema = yup.object().shape({
        username: yup.string().required("Username is required"),
        password: yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/, "should contain special characters, letters, numbers and 4 characters long").required("password is required"),

    });
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        Axios.post("http://localhost:8081/auth/login", data)
            .then(({ data }) => {
                //validate to check if the data.token is present
                if (data.token) {
                    navigate("/dashboard");
                }

            })
            .catch(({ response }) => {
                alert(response.data.error)

            });
    }

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

                        <form className="form-inputs" onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="text">User name</label>
                            <input type="text" id="text" placeholder='freshiaa' {...register("username")} />
                            <p>{errors.username?.message}</p>
                            <label htmlFor="password">Password</label>
                            <input type="password" id='password' placeholder='freshiaa@123'  {...register("password")} />
                            <p>{errors.password?.message}</p>
                            {/* navigate upon succesful signup-remove link */}
                            {/* <Link to='/dashboard'></Link> */}
                            <input className='loginBtn' type="submit" value="Login" />

                            <Link to='/signup'><input className='signupBtn' type="submit" value="Sign up" /></Link>
                        </form>
                    </div>
                </div>
            </div >

        </>
    )
}

export default Login