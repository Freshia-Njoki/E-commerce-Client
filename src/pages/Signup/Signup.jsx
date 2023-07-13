import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
// import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import './signup.css'

function Signup() {
    const schema = yup.object().shape({
        username: yup.string().required("full name is required"),
        email: yup.string().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email format')
            .required('Email is required'),
        password: yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/, "should contain special characters, letters, numbers and 4 charcacters long").required("password is required"),

    });
    const { register, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    return (
        <>
            <div className='signup'>
                <div className="sigup-form">
                    <form className="form-inputs" >
                        <h3 className="sigupBanner">Sign up </h3>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" placeholder='' {...register("username")} />
                        {/* <p>{errors.username?.message}</p> */}
                        <label htmlFor="email">Email Address</label>
                        <input type="text" id="email" placeholder='' {...register("email")} />
                        {/* <p>{errors.email?.message}</p> */}
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' placeholder='8+ characters'  {...register("password")} />
                        {/* <p>{errors.password?.message}</p> */}
                        <input className='registerBtn' type="text" placeholder="Register" style={{ marginTop: "30PX" }} />


                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup