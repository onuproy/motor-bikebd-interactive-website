import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import css from './Singleservice.css'

const Singleservice = (props) => {
    const {_id,serviceName,shortdescription,img,price} = props.service;
    return (
        <div className="col-lg-3">
            <div className="single-service-area">
                <img src={img} alt="" />
                <h2>{serviceName}</h2>
                <p>{shortdescription}</p>
                <p>Price: <strong>{price}</strong> ৳</p>
            <Link to={`/placeorder/${_id}`}><button>Buy Now</button></Link>
            </div>
        </div>
    );
};

export default Singleservice;