import React from 'react';
import { useParams } from 'react-router';
import serviceBooking from '../../../../src/fakeData/services.json'

const ServiceBooking = () => {
    const { bookingId } = useParams();
    const homeDetails = serviceBooking.find(item => item.id === parseInt(bookingId));
    const { name, imgURL, price, description, comments } = homeDetails;
    return (
        <div className="w-100">
            <div className="p-5">
                <div className="p-4">
                    <img className="img-fluid" src={imgURL} alt="" />
                </div>
                <div className="p-4 w-75">
                    <span className=" text-warning fs-6"><i class="fas fa-comments mb-3"></i> {comments} comments</span>
                    
                    <h4>{name}</h4>
                    <p>{description}</p>
                    <h5 className="text-danger mb-3">$ {price}</h5>
                    <button className="btn btn-sm btn-danger">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceBooking;