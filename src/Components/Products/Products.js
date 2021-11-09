import React from 'react';
import useAuth from '../../Hooks/useAuth';

const Products = () => {
    const { products } = useAuth();
    return (
        <div>
            <div className="row">

            </div>
        </div>
    );
};

export default Products;