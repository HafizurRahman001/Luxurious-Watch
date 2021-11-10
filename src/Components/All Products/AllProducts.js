import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const AllProducts = () => {
    const { products } = useAuth();
    return (
        <div className="container">
            <div>
                <h1>CLASSICAL GENT WATCH</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {products?.map(product => <div key={product?._id} className="col">
                    <div className="card h-100">
                        <img src={product?.img} className="card-img-top img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{product?.title}</h5>
                            <p className="card-text">{product?.desc?.slice(0, 150)}</p>
                            <h4>Price: ${product?.price}</h4>
                        </div>
                        <div className="card-footer">
                            <Link to={`/purchase/${product?._id}`}>
                                <button className="btn btn-primary w-100">Buy Now</button>
                            </Link>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default AllProducts;