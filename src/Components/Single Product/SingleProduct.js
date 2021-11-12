import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = (props) => {
    const { img, title, desc, price, _id } = props?.product;
    return (
        <div className="col" data-aos="zoom-in">
            <div style={{ boxShadow: '1px 2px 10px #363A43' }} className="card h-100">
                <div>
                    <img src={img} className="card-img-top img-fluid" alt="..." />
                </div>
                <div style={{ backgroundColor: 'rgb(20 15 42 / 13%)' }} className="card-body">
                    <h5 style={{ color: '#04293A' }} className="card-title fw-bold">{title?.toUpperCase()}</h5>
                    <p className="card-text text-start">{desc?.slice(0, 150)}</p>
                    <h5 className="text-start"><i className="fas pe-2 fa-dollar-sign"></i>Price: {price}</h5>
                </div>
                <div className="">
                    <Link to={`/purchase/${_id}`}>
                        <button style={{ backgroundColor: 'crimson', color: 'white', padding: '10px 0px', borderTopRightRadius: '0', borderTopLeftRadius: '0' }} className="btn w-100">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;