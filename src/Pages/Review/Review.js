import React, { useState } from 'react';
import './Review.css';
import { useForm } from 'react-hook-form';
import ReactStars from 'react-rating-stars-component'
import useAuth from '../../Hooks/useAuth';

const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const [rating, setRating] = useState({});
    const { isLoading } = useAuth();

    const handleRating = (rating) => {
        setRating(rating);
    }
    const onSubmit = data => {
        const reviewData = { ...data, rating: rating };
        console.log(reviewData);
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        reset();
    };

    if (isLoading) {
        return <div className="text-center my-5">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    };

    return (
        <div className="container">
            <div className='mb-5'>
                <h2 className='fw-bold'>SHARE YOUR FEELINGS!</h2>
                <p className='text-muted'>Your Review is Very Important for Us</p>
            </div>
            <div className="review_form">
                <form className="w-50 mx-auto review_form_section" onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("userName", { required: true })} placeholder="Your Name" />
                    <input {...register("designation", { required: true })} placeholder="Your Designation" />
                    <textarea {...register("description", { required: true })} placeholder="Your Review" />
                    <div>
                        <h4 className='text-start text-white'>Rate Us</h4>
                    </div>
                    <ReactStars onChange={handleRating}
                        activeColor='#ffff00'
                        size={30}
                        isHalf={true}
                    />
                    <div style={{ textAlign: "left", paddingTop: '10px' }}>
                        <input className='review_submit_btn' type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Review;