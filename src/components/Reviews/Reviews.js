import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Reviews = () => {
    const {user} = useAuth();
    const reviewRef = useRef();
    const ratingRef = useRef();
    const handleAddUser = e =>{
        const review = reviewRef.current.value;
        const rating = ratingRef.current.value;
        const name = user.displayName;
        const reviewdescription ={name:name,reviewdescription:review,rating:rating}
console.log(reviewdescription)
        fetch('https://secret-gorge-46028.herokuapp.com/reviews',{
            method:'POST',
            headers:{
                'content-type' :'application/json'
            },
            body:JSON.stringify(reviewdescription)
        })
        .then( res => res.json())
        .then(data =>{
            if(data.insertedId){
                alert('Review Inserted Successfully');
                e.target.reset();
            }
        })
        e.preventDefault();
    }
    return (
        <div className="order-form contact-form-area">
            <h2>Reviews</h2>
            <br/>
            <form onSubmit={handleAddUser}>
                <textarea ref={reviewRef} placeholder="Review Descriptions"></textarea>
                <select name="" id="" ref={ratingRef} >
                    <option value="">Select Rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Reviews;