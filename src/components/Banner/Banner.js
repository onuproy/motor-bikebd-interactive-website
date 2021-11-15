import React from 'react';
import { Link } from 'react-router-dom';
import bikes from './../../banner-bike.png';
import css from './Banner.css'

const Banner = () => {
    return (
        <div className="banner-area tutor-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="content-area">
                            <h2>Best Deal</h2>
                            <h2>15% - 20% Off</h2>
                            <p>World largest Bikes marketplace.</p>
                            <div className="button-area">
                                <Link to="/contact" className="btn btn-outline-success">Buy Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="bike-image">
                            <img src={bikes} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;