import React from 'react';
import { useParams } from 'react-router';
import homeBooking from '../../../../src/fakeData/service.json'


const HomeBooking = () => {
    const { appoinmentId } = useParams();
    console.log(appoinmentId)
    const homeDetails = homeBooking.find(item => item.id === parseInt(appoinmentId));
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

export default HomeBooking;