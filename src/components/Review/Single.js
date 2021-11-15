import React from 'react';
import useAuth from '../../Hooks/useAuth';

const Single = (props) => {
    const {reviewdescription,rating} = props.review;
    const {user} = useAuth();
    return (
        <div class="slider-item">
            <img src="https://web.programming-hero.com/static/media/profileImage.934e5b10.png" alt="" />
            {rating}
            <p>{reviewdescription}</p>
            <h2>{user.displayName}</h2>
        </div>
    );
};

export default Single;