import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import reviewLogo from '../../images/logo/review-logo.png'
import review from '../../images/review.jpg';

const UsersReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user-review')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, []);

    const cardShadow = {
        boxShadow: '1px 1px 3px gray'
    }

    return (
        <div className='pb-5'>
            <div className='container'>
                <div className='py-5'>
                    <div>
                        <img style={{ width: '15%', height: '15%' }} src={reviewLogo} alt="" />
                    </div>
                    <h1 className='fw-bold'>OUR CLIENTS OPINIONS</h1>
                    <p className='text-muted'>What our client think about our products?</p>
                </div>
                <div>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {reviews.map(singleReview => <div key={singleReview?._id} className="col">
                            <div style={cardShadow} className="card h-100">
                                <img src={review} className="card-img-top img-fluid" alt="..." />

                                <div className="card-body">
                                    <h5 className="card-title fw-bold">{singleReview?.userName?.toUpperCase()}</h5>
                                    <p className="fs-6 mt-0 text-muted">{singleReview?.designation}</p>
                                    <p className="card-text text-start">{singleReview?.description}</p>
                                </div>
                                <div className="card-footer">
                                    <div className="row">
                                        <div className="col-md-6 col-6">
                                            <h5>Ratings({singleReview?.rating}) </h5>
                                        </div>
                                        <div className="col-md-6 col-6">
                                            <div style={{ fontSize: '20px' }}>
                                                <Rating
                                                    initialRating={singleReview?.rating}
                                                    readonly
                                                    emptySymbol="far fa-star fa-1x"
                                                    fullSymbol="fas fa-star fa-1x"
                                                    fractions={2}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsersReview;