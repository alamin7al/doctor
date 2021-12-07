import React from 'react';

import {
   
    useHistory,
    useLocation
} from "react-router-dom";
import logins from '../../img/login.png';




// import useAuth from './useAuth'
import { useState, } from 'react';
import {
    BrowserRouter as Router,

    NavLink,

} from "react-router-dom";
import useAuth from './useAuth';
const Register = () => {
    const history = useHistory()
    const [loginData, setLoginData] = useState({})

    const { user, regiseruser, isLoading, error } = useAuth()

    const handleonBlur = e => {
        const field = e.target.name
        const value = e.target.value
        const newLogindata = { ...loginData }
        newLogindata[field] = value
        console.log(newLogindata);
        setLoginData(newLogindata)
    }


    const handleLoginSubmit = e => {
        e.preventDefault()

        if (loginData.password !== loginData.password2) {
            alert('your password didnt match')
            return
        }
        regiseruser(loginData.email, loginData.password,loginData.name,history)
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col col-md-6 w-50 mx-auto container my-5'>
                    <h2>Register</h2>
                    {!isLoading && < form onSubmit={handleLoginSubmit}>

                        <div className="mb-3 text-start">
                            <label for="exampleInputPassword1" className="form-label ">Your Name</label>

                            <input
                                name='name'

                                className="form-control"
                                onBlur={handleonBlur}

                                id="exampleInputPassword1" />
                        </div>


                        <div className="mb-3 text-start">
                            <label for="exampleInputPassword1" className="form-label">Your Email</label>

                            <input
                                name='email'
                                type='email'
                                className="form-control"
                                onBlur={handleonBlur}

                                id="exampleInputPassword1" />
                        </div>

                        <div className="mb-3 text-start">
                            <label for="exampleInputPassword1" className="form-label">Your Password</label>

                            <input
                                name='password'
                                type="password" className="form-control"
                                onBlur={handleonBlur}

                                id="exampleInputPassword1" />
                        </div>

                        <div className="mb-3 text-start">
                            <label for="exampleInputPassword1" className="form-label">ReType Your Password</label>

                            <input
                                name='password2'
                                type="password" className="form-control"
                                onBlur={handleonBlur}

                                id="exampleInputPassword1" />
                        </div>

                        <button
                            className='btn btn-primary btn-lg'
                            type='submit'
                        >Login</button>
                        <br />
                        <br />
                        <NavLink
                            style={{ textDecoration: 'none' }}

                            to='/login'><p
                                className=' fs-4'

                            >Already Register? Please Login</p>
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









                </div>
                <div className=' col-md-6'>
                    <img src={logins} style={{ width: '100%' }} alt='' />
                </div>
            </div>
        </div >
    );
};

export default Register;