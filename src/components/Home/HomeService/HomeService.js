import React from 'react';

const HomeService = ({home}) => {

    const {name, description, image} = home;
    return (
        <div>
            <div>
                <div className="col">
                    <div className = "card h-100" >
                        <img src={image} className="card-img-top card-image" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{description.slice(0, 150)}</p>
                            <button className="btn btn-danger">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HomeService;