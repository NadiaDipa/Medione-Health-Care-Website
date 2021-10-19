import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className = "login-form m-4" >
           <Form Form onSubmit = ""
           className = "border border-5 p-5" >
                <h2 className="login-header">Register</h2>
                <Form.Text className="text-muted">
                    Create your account. It's free and only takes a minute.
                </Form.Text>
                <hr />
                <br />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter Your First Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter Your Last Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Confirm Your Password" />
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