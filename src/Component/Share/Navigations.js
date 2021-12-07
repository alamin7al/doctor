import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import {
    BrowserRouter as Router,

    Link,

} from "react-router-dom";
import useAuth from '../Login/useAuth';
const Navigations = () => {
    const { user, logOut } = useAuth()
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Doctors</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <Link className='text-decoration-none fs-5 mt-1 mx-3' to="/home">Home</Link>
                            <Link className='text-decoration-none fs-5 mt-1 mx-3' to="/appointement">Appointements </Link>
                            {
                                user?.email ?
                                    <>  <Link to="/dashbord"><button className='btn btn-outline-dark'>Dashbord</button>
                                    </Link>

                                        <button onClick={logOut} className='btn btn-outline-dark'>Logout</button>
                                    </>

                                    :
                                    <Link to="/login"><button className='btn btn-outline-dark'>Login</button></Link>

                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Navigations;