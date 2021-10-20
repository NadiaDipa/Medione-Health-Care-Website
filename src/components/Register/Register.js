import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Register = () => {
    const {user, signInUsingGit, signInUsingEmailPassword, handleEmail, handlePass, signInUsingGoogle} = useFirebase();
    return (
        <div className = "login-form w-50 mx-auto p-5 shadow mt-5 my-5" >
           <Form Form onSubmit = ""
           className = "" >
                <h2 className="login-header">Create Account Now</h2>
                <Form.Text className="text-muted">
                    Create your account. It's free and only takes a minute.
                </Form.Text>
                <hr />
                <br />
                <Form.Group className="mb-3" controlId="">
                    <Form.Control type="name" placeholder="Enter Your First Name" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                    <Form.Control type="name" placeholder="Enter Your Last Name" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Confirm Your Password" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I accept the Terms of Use & Privacy Policy" />
                </Form.Group>
                <Button className="submit-btn" type="submit">
                   Register Now
                </Button>
                <br />
                <br />
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <div>Or</div>
                <div className="fs-2 text-center">
                    <i onClick={signInUsingGoogle} className= "fab fa-google text-danger" ></i>
                    <i onClick={signInUsingGit} className= "fab fa-github ms-3" > </i>
                </div>

            </Form>
           







            {/* <form onSubmit="">
                 h2> Create Account </h2>
                <input type="email" name="" id="" placeholder="Enter Your Email" />
                <br />
                <input type="password" name="" id="" placeholder="Enter Your Password" />
                <br />
                <input type="password" name="" id="" placeholder="Re-enter Password" />
                <input type="submit" value="Submit" />
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p> */}

        </div>
    );
};

export default Register;