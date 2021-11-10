import React from 'react';
import useAuth from '../../Hooks/useAuth';
import SingleProduct from '../Single Product/SingleProduct';

const Products = () => {
    const { products } = useAuth();
    return (
        <div className="container my-5">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    products?.slice(0, 6)?.map(product => <SingleProduct
                        key={product?._id}
                        product={product}
                    ></SingleProduct>)
                }

            </div>
        </div>
    );
};

export default Products;