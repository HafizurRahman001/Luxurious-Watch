import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = (props) => {
    const { img, title, desc, price, _id } = props?.product;
    return (
        <div className="col" data-aos="zoom-in">
            <div style={{ boxShadow: '1px 2px 10px #363A43' }} className="card h-100">
                <img src={img} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title fw-bold">{title?.toUpperCase()}</h5>
                    <p className="card-text text-start text-muted">{desc?.slice(0, 150)}</p>
                    <h4 className="text-muted text-start"><i className="fas pe-2 fa-dollar-sign"></i>Price: {price}</h4>
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