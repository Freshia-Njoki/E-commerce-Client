import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import './loginform.css'
import { apiDomain } from '../../utils/utils';
import Axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        Axios.post(`${apiDomain}/auth/adminLogin`, data)

            .then(({ data }) => {
                //validate to check if the data.token is present
                if (data.token) {
                    navigate("/admindashboard");
                }

            })
            .catch(({ response }) => {
                const error = response.data.error;
                toast.error(error);

            });
    }

    return (
        <>
            <div className='signup'>
                <div className="sigup-form">
                    <form className="form-inputs" onSubmit={handleSubmit(onSubmit)} >
                        <h3 className="sigupBanner">Log in </h3>
                        <label htmlFor="username">Admin name</label>
                        <input type="text" id="username" placeholder='susan' {...register("admin_name")} />

                        {errors.admin_name && toast.error(errors.admin_name?.message)}
                        <label htmlFor="email">Email Address</label>
                        <input type="text" id="email" placeholder='susan@gmail.com' {...register("email")} />
                        {errors.email && toast.error(errors.email?.message)}
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' placeholder='susan@123'  {...register("password")} />
                        {errors.password && toast.error(errors.password?.message)}
                        <input className='registerBtn' type="submit" style={{ marginTop: "30PX" }} />


                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup