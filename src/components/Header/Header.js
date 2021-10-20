// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Container, Nav, Navbar} from 'react-bootstrap';
// import './Header.css'
// import { Link } from 'react-router-dom';
// import useFirebase from '../../hooks/useFirebase';


// const Header = () => {
//     const {user, logOut} = useFirebase();
//     console.log(user)
//     return (
//         <div>
//              <div Navbar className = "header" collapseOnSelect expand = "lg">
//                 <Container>
                    
//                    <img width="170px" height="70px" src = "./image/logo.png" alt = ""/>


//                    {/* navbar-section  */}
//                         <Nav className = "ms-auto" >
//                             <Link className="nav-link me-4 nav-item" to="/home">Home</Link>
//                             <Link className="nav-link me-4 nav-item" to="/services">Services</Link>
//                               <Link className="nav-link me-4 nav-item" to="/doctors">Our Specialists</Link>
//                             <Link className="nav-link me-4 nav-item" to="/contact">Contact</Link>
//                             <Link className="nav-link me-4 nav-item" to="/about">About</Link>

//                             <span className="text-light me-2 fs-6">{user?.displayName}</span>

//                             {
//                                 user.displayName ?
//                                     <button onClick={logOut} className="btn">Log Out</button>
//                                 :
//                                 <Link className="nav-link me-4 nav-item fw-bold" to="/login">Login</Link>
//                             }
//                         </Nav>
//                 </Container>
//             </div>
            
       

//         </div>
//     );
// };

// export default Header;



import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const { user, logOut } = useFirebase();
    console.log(user)

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <img width="170px" height="70px" src = "./image/logo.png" alt = ""/>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
                            <li class="nav-item">
                                <NavLink className = "nav-link me-4y"
                                    to="/home">
                                    Home
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="link nav-link"
                                    to="/services"
                                >
                                    Services
                                </NavLink>
                            </li>

                            <li class="nav-item">
                                <NavLink className="link nav-link"
                                    to="/doctors"
                                >
                                    Our Specialists
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="link nav-link"
                                    to="/about"
                                >
                                    About
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="link nav-link"
                                    to="/contact"
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <span className="text-light me-3 mt-2">{user?.displayName}</span>
                            {/* <img className="photo-url" src={user?.photoURL} alt="" /> */}
                            {user?.displayName ?
                                <button onClick={logOut} className="btn btn-outline-primary btn-sm fw-bold me-2">Logout</button> :
                                <NavLink to="/login"><button className="btn btn-outline-primary btn-sm fw-bold me-2">Login</button></NavLink>}
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;