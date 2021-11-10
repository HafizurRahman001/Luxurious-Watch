import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = (props) => {
    const { img, title, desc, price, _id } = props?.product;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc?.slice(0, 150)}</p>
                    <h4>Price: ${price}</h4>
                </div>
                <div className="card-footer">
                    <Link to={`/purchase/${_id}`}>
                        <button className="btn btn-primary w-100">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;