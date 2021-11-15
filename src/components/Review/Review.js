import React, { useEffect, useState } from 'react';
import Single from './Single';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Review = () => {
    const [reviews, setReview] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReview(data))
    },[])
    return (
        <div className="review-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="review-content">
                            <h2>Our Customer Review</h2>

                            <div className="review-slider-area">
                                {
                                    reviews.map(review => <Single key={review._id}review={review}></Single>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;