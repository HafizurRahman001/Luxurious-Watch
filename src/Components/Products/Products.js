import React from 'react';
import './Products.css';
import useAuth from '../../Hooks/useAuth';
import SingleProduct from '../Single Product/SingleProduct';

const Products = () => {
    const { products, isLoading } = useAuth();

    if (isLoading) {
        return <div className="text-center my-5">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    };

    return (
        <div className="sliced-products">
            <div className="container py-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        products?.slice(0, 6)?.map(product => <SingleProduct
                            key={product?._id}
                            product={product}
                        ></SingleProduct>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Products;