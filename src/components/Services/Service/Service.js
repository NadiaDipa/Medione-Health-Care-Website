import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name, description, image} = service;
    return (
          <div>
            <div>
              <div className="col">
                
                <div className="card">
                
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

export default Service;