import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar} from 'react-bootstrap';
import './Header.css'
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';


const Header = () => {
    const {user, logOut} = useFirebase();
    console.log(user)
    return (
        <div>
             <div Navbar className = "header" collapseOnSelect expand = "lg">
                <Container>
                    
                   <img width="170px" height="70px" src = "./image/logo.png" alt = ""/>


                   {/* navbar-section  */}
                        <Nav className = "ms-auto" >
                            <Link className="nav-link me-4 nav-item" to="/home">Home</Link>
                            <Link className="nav-link me-4 nav-item" to="/services">Services</Link>
                              <Link className="nav-link me-4 nav-item" to="/doctors">Our Specialists</Link>
                            <Link className="nav-link me-4 nav-item" to="/contact">Contact</Link>
                            <Link className="nav-link me-4 nav-item" to="/about">About</Link>

                            <span className="text-light me-2 fs-6">{user?.displayName}</span>

                            {
                                user.displayName ?
                                    <button onClick={logOut} className="btn">Log Out</button>
                                :
                                <Link className="nav-link me-4 nav-item fw-bold" to="/login">Login</Link>
                            }
                        </Nav>
                </Container>
            </div>
            
       

        </div>
    );
};

export default Header;