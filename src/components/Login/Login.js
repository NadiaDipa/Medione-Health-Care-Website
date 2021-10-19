import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className="login-form m-4">
            <Form onSubmit = "">
                <small>Welcome Back</small>
                <h2 className="login-header">Login to your account</h2>
                <hr />
               
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter Your email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Your Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Keep me logged in" />
                </Form.Group>
                <Link>Forget Your Password?</Link>
                <br />
                <br />
               <Button className="submit-btn" type="submit">
                    Submit
                </Button>
                
                <br />
                <br />
                <p>Don't have an account? <Link to="/register">Create Account</Link></p>
                <button className="btn-regular">Google Sign In</button>
            </Form>
        </div>
    );
};

export default Login;