import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar} from 'react-bootstrap';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    
    return (
        <div>
             <Navbar className="header">
                <Container>
                    
                   <img width="170px" height="70px" src = "./image/logo.png" alt = ""/>

                   {/* navbar-section  */}
                        <Nav className = "ms-auto" >
                            <Link className="nav-link me-4 nav-item" to="/home">Home</Link>
                            <Link className="nav-link me-4 nav-item" to="/services">Services</Link>
                            <Link className="nav-link me-4 nav-item" to="/contact">Contact</Link>
                             <Link className="nav-link me-4 nav-item" to="/about">About</Link>
                            <Link className="nav-link me-4 nav-item" to="/login">Login</Link>
                        </Nav>
                </Container>
            </Navbar>
            
       

        </div>
    );
};

export default Header;