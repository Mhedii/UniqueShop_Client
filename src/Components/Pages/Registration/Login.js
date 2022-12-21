import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import "./Login.css"
const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { signInWithGoogle, loginUser, isLoading, } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();



    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate);

        e.preventDefault();

    }


    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate);
    }

    return (
        <div>
            <div className="grid grid-cols-3 justify-center justify-items-center text-center">
                <div className='col-start-2  '>
                    {/* {isLoading && <CircularProgress />} */}
                    <h1 className="login-heading text-start">Login</h1>
                    <button className="justify-center  w-full max-w-md font-medium flex p-3 border rounded-2xl border-color: rgb(235 222 222);"
                        onClick={handleGoogleSignIn} >
                        <span className="google-logo"><img src="https://i.ibb.co/GJ6gbG1/google-logo-9808.png" alt="" /></span> Google Sign In
                    </button>

                    <p className="or-sign mb-5">--------------- or Sign in with Email ---------------</p>
                    <form onSubmit={handleLoginSubmit}>
                        <input type="email" placeholder="Your Email *"
                            className="input input-bordered input-md font w-full max-w-md mb-5 border-5 rounded-2xl border-color:rgb(168 166 173);"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            required />

                        <input type="password" placeholder="Your Password *"
                            className="input input-bordered input-md w-full max-w-md mb-5 border-5 rounded-2xl border-color:rgb(168 166 173);"
                            label="Your Password"
                            name="password"
                            onChange={handleOnChange}
                            required />
                        <br />

                        <button type="submit" className=" w-full max-w-md mb-5 text-white font-bold text-md bg-[#5138ee] rounded-2xl p-3"> Login </button>


                        <p className="create-account">Not registered yet? <NavLink to="" className="text-primary">Create an Account</NavLink></p>

                    </form>
                </div>
            </div >
        </div >
    );
};

export default Login;