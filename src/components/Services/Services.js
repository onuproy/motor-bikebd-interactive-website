import React, { useEffect, useState } from 'react';
import Singleservice from '../Singleservices/Singleservice';
import css from './Services.css'

const Service = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <div class="Service-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title">
                            <h1>Our Popular Bikes</h1>
                        </div>
                    </div>
                    {
                        services.map(service => <Singleservice key={service.id}service={service}></Singleservice>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;