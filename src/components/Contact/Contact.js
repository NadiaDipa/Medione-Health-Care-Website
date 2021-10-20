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
                <form onSubmit="">
                <div className="mb-4">
                    <h2 className="login-header mb-3 fw-20">Get in touch with us!</h2>
                     <p className="text-muted text-center">
                        Leave your message and we'll get back to you shortly.
                    </p>
                    <hr />
                </div>
                <div className="mb-3">
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Your Full Name</label>
                        <input onBlur="" type="password" className="form-control" id="exampleInputPassword1" placeholder="Jhon Doe" required/>
                    </div>

                    <label for="exampleInputEmail1" className="form-label">Your Email address</label>
                    <input required onBlur="" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@domain.com" />
                </div>
                
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Your Phone Number</label>
                    <input onBlur="" type="password" className="form-control" id="exampleInputPassword1" placeholder="+880 1234567890" required/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Your Message </label>
                    <textarea placeholder=" Your Question or Comments type here..." rows = "5" cols = "112" required/>
                </div>
               
                <button className="button send-msg">SEND MESSAGE</button>
                
            </form>
            </div>

          
        </div>
    );
};

export default Contact;