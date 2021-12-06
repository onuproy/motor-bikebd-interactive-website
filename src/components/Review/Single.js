import React from 'react';
import useAuth from '../../Hooks/useAuth';
import Rating from 'react-rating'
import css from './Review.css'

const Single = (props) => {
    const {reviewdescription,rating,name} = props.review;
    const {user} = useAuth();
    return (
        <div class="col-md-3">
            <div class="slider-item">
                <img src="https://web.programming-hero.com/static/media/profileImage.934e5b10.png" alt="" />
                <Rating
                    initialRating={rating}
                    readonly
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                />
                <p>"{reviewdescription}"</p>
                <h2>{name}</h2>
            </div>
        </div>
    );
};

export default Single;