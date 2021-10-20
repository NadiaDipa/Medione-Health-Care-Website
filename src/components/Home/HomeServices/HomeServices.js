import React, { useEffect, useState } from 'react';
import HomeService from '../HomeService/HomeService';

const HomeServices = () => {
    const [homes, setHomes] = useState([]);
    useEffect( () => {
        fetch('service.json')
        .then( res => res.json())
        .then(data => setHomes(data))
    }, [])
    return (
        <div className = "row row-cols-1 row-cols-md-3 g-4" >
            {
                homes.map(home => <HomeService
                key={home.id}
                home={home}
                ></HomeService>)
            }
        </div>
    );
};

export default HomeServices;