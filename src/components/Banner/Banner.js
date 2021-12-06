import React from 'react';
import { Link } from 'react-router-dom';
import bikes from './../../hero-banner-image.png';
import css from './Banner.css'

const Banner = () => {
    return (
        <div className="banner-area tutor-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="content-area">
                            <h2>Over $180, get 20%off with code: motorbikebd2021</h2>
                            <p>International free shipping over 2000৳ </p>
                            <div className="button-area">
                                <Link to="/contact" className="btn btn-outline-success">Buy Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="bike-image">
                            {/* <img src={bikes} alt="" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;