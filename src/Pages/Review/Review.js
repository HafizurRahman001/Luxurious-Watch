import React, { useState } from 'react';
import './Review.css';
import { useForm } from 'react-hook-form';
import ReactStars from 'react-rating-stars-component'
import useAuth from '../../Hooks/useAuth';
import swal from 'sweetalert';

const Review = () => {

    const { register, handleSubmit, reset } = useForm();
    const [rating, setRating] = useState({});
    const { isLoading } = useAuth();

    //handle users rating
    const handleRating = (rating) => {
        setRating(rating);
    };

    //handle user's review submission
    const onSubmit = data => {
        const date = new Date();
        const reviewData = { ...data, date, rating: rating };
        console.log(reviewData);
        fetch('https://immense-mesa-31667.herokuapp.com/review', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        reset();

        swal({
            title: "Thanks for your review!",
            text: "Your opinion is very important to us!",
            icon: "success",
            button: "Ok!",
        });
    };

    // waiting browser until data loaded successfully
    if (isLoading) {
        return <div className="text-center my-5">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    };

    return (
        <div className="container">
            <div className='mb-5' data-aos="fade-left">
                <h2 className='fw-bold'>SHARE YOUR FEELINGS!</h2>
                <p className='text-muted'>Your Review is Very Important for Us</p>
            </div>
            <div className="review_form" data-aos="fade-left">
                <form className="w-50 mx-auto review_form_section" onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("userName", { required: true })} placeholder="Your Name" />
                    <input {...register("designation", { required: true })} placeholder="Your Designation" />
                    <textarea {...register("description", { required: true })} placeholder="Your Opinion" />
                    <div>
                        <h4 style={{ marginBottom: '-3px' }} className='text-start text-white'>Rate Us</h4>
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