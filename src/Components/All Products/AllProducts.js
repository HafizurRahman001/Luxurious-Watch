import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Header from '../../Pages/Shared/Header/Header';

const AllProducts = () => {
    const { products, isLoading } = useAuth();

    if (isLoading) {
        return <div className="text-center my-5">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    };

    return (
        <>
            <Header></Header>
            <div className="container">
                <div>
                    <div className='py-5'>
                        <h1 className="fw-bold">CLASSICAL GENT WATCH</h1>
                        <p className="text-muted">Find Out Your Desire Watch</p>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {products?.map(product => <div key={product?._id} className="col">
                        <div className="card h-100">
                            <img src={product?.img} className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{product?.title?.toUpperCase()}</h5>
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
        </>
    );
};

export default AllProducts;