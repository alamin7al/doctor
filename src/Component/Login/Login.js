import React from 'react';
import {
   
    useHistory,
    useLocation
} from "react-router-dom";


import logins from '../../img/login.png';


import { useState } from 'react';
import {
    BrowserRouter as Router,

    NavLink,

} from "react-router-dom";
import useAuth from './useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { loginUser, user, isLoading, error, googleSignIn } = useAuth()
    const location = useLocation()
    const history = useHistory()

    const handleonChange = e => {
        const field = e.target.name
        const value = e.target.value
        const newLogindata = { ...loginData }
        newLogindata[field] = value
        setLoginData(newLogindata)
    }
    const handleLoginSubmit = e => {
        e.preventDefault()
        // location, history
        loginUser(loginData.email, loginData.password,location,history)

    }
    const handleGoogleSignIn = () => {
        googleSignIn(location,history)
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col col-md-6 w-50 mx-auto container my-5'>
                    <h2>Login</h2>

                    {!isLoading && <form onSubmit={handleLoginSubmit}>


                        <div className="mb-3 text-start">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input
                                name='email'
                                type="email" className="form-control" id="exampleInputEmail1"
                                onChange={handleonChange}

                                aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3 text-start">
                            <label for="exampleInputPassword1" className="form-label">Password</label>

                            <input
                                name='password'
                                type="password" className="form-control"
                                onChange={handleonChange}

                                id="exampleInputPassword1" />
                        </div>

                        <button
                            className='btn btn-primary'
                            type='submit'
                        >Login</button>

                        <NavLink
                            style={{ textDecoration: 'none' }}

                            to='/register'><p className='fs-4'


                            >New User?Please Register</p>
                        </NavLink>

                    </form>}
                    {isLoading && <div class="spinner-border" role="status">
                        <span class="sr-only"></span>
                    </div>}

                    {user?.email && <div class="alert alert-info" role="alert">
                        User Created SuccessFully
                    </div>}
                    {error && <div class="alert alert-danger" role="alert">
                        {error}
                    </div>}

                    <p>----------------------------------</p>
                    <button onClick={handleGoogleSignIn} className='btn btn-primary'>Google sign In</button>
                </div>

                <div className=' col-md-6'>
                    <img src={logins} style={{ width: '100%' }} alt='' />

                </div>

            </div>
        </div>
    );

};

export default Login;