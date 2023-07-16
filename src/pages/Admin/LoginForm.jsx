import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import './loginform.css'
import Axios from 'axios';

function Signup() {
    const navigate = useNavigate();

    const schema = yup.object().shape({
        admin_name: yup.string().required("adminname is required"),
        email: yup.string().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email format')
            .required('Email is required'),
        password: yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/, "should contain special characters, letters, numbers and 4 characters long").required("password is required"),

    });
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        Axios.post("http://localhost:8081/auth/adminLogin", data)

            .then(({ data }) => {
                //validate to check if the data.token is present
                if (data.token) {
                    navigate("/admindashboard");
                }

            })
            .catch(({ response }) => {
                alert(response.data.error)

            });
    }

    return (
        <>
            <div className='signup'>
                <div className="sigup-form">
                    <form className="form-inputs" onSubmit={handleSubmit(onSubmit)} >
                        <h3 className="sigupBanner">Log in </h3>
                        <label htmlFor="username">Admin name</label>
                        <input type="text" id="username" placeholder='ruithaa' {...register("admin_name")} />
                        <p>{errors.admin_name?.message}</p>
                        <label htmlFor="email">Email Address</label>
                        <input type="text" id="email" placeholder='ruithaa@gmail.com' {...register("email")} />
                        <p>{errors.email?.message}</p>
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' placeholder='ruitha@123'  {...register("password")} />
                        <p>{errors.password?.message}</p>
                        <input className='registerBtn' type="submit" style={{ marginTop: "30PX" }} />


                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup