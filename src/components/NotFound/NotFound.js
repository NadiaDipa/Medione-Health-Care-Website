import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found-section m-5 mb-5">
            <h1 className="mb-4">OPPS!</h1>
            <img src = "https://p.kindpng.com/picc/s/254-2549839_transparent-404-png-404-not-found-medicine-png.png"
            alt = "" />
            <h2 className="mt-5 mb-5">The page you're looking for could have been deleted or never existed!</h2>
        </div>
    );
};

export default NotFound;