import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Footer from '../../Pages/Shared/Footer/Footer';
import Header from '../../Pages/Shared/Header/Header';

const AllProducts = () => {

    const { products, isLoading } = useAuth();

    // waiting browser until data loaded successfully
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
                    <div className='py-5' data-aos="fade-left">
                        <h1 className="fw-bold">CLASSICAL GENT WATCH</h1>
                        <p className="text-muted">Find Out Your Desire Watch</p>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4 pb-5">
                    {products?.map(product => <div key={product?._id} className="col" data-aos="zoom-in">
                        <div style={{ boxShadow: '1px 2px 10px #363A43' }} className="card h-100">
                            <img src={product?.img} className="card-img-top img-fluid" alt="..." />
                            <div style={{ backgroundColor: 'rgba(20, 15, 42, 0.13)' }} className="card-body">
                                <h4 style={{ color: '#04293A' }} className="card-title fw-bold">{product?.title?.toUpperCase()}</h4>
                                <p className="card-text text-start">{product?.desc?.slice(0, 150)}</p>
                                <h4 style={{ color: '#565555' }} className="text-start">Price: <i className="fas pe-1 fa-dollar-sign"></i>{product?.price}</h4>
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
            <Footer></Footer>
        </>
    );
};

export default AllProducts;