import React from 'react';
import useAuth from '../../Hooks/useAuth';

const AddNewProduct = () => {
    const { isLoading } = useAuth();

    if (isLoading) {
        return <div className="text-center my-5">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    };

    return (
        <div>
            <h2>This is add new product</h2>
        </div>
    );
};

export default AddNewProduct;