import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import "./Contact.css"

const Contact = () => {
    return (
        <div className="contact-body">
            {/* image-section */}
            <div className="contact-img">
                 <img width = "500px" src = "./image/contact.png" alt = ""/>
            </div>
            {/* form-section */}
            <div className="from">
                <Form className = "mt-5 pe-5 ps-5 pb-5 border border-5" >
                    <h1 className = "headline text-center pb-3 pt-3 mb-3"> Feel Free to Contact us! </h1>
                    <Row Row className = "mb-3" >
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="email" placeholder="Enter your full Name"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="password" placeholder="Email Address" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Your Message</Form.Label>
                        <br />
                        <textarea placeholder="Write something for us..." rows = "5" cols = "98.5"/>
                    </Form.Group>
                    <Button className="button btn-danger">SEND MESSAGE</Button>
                </Form>
            </div>

          
        </div>
    );
};

export default Contact;