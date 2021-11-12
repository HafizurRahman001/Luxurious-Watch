import React, { useEffect } from 'react';
import useAuth from '../../Hooks/useAuth';

const ManageProducts = () => {
    const { products, setProducts, isLoading } = useAuth();

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [products])

    const handleDeleteProduct = id => {
        const proceedDeleteProduct = window.confirm('are you sure to delete product?');
        if (proceedDeleteProduct) {
            fetch(`http://localhost:5000/manage-product/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data?.insertedId);
                })
        }

    };

    if (isLoading) {
        return <div className="text-center my-5">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    };

    return (
        <div>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {products?.map(product => <div key={product?._id} className="col" data-aos="zoom-in">
                        <div style={{ boxShadow: '1px 2px 10px #363A43' }} className="card h-100">
                            <img src={product?.img} className="card-img-top img-fluid" alt="..." />
                            <div style={{ backgroundColor: 'rgb(20 15 42 / 15%)' }} className="card-body">
                                <h5 className="card-title fw-bold">{product?.title}</h5>
                                <p className="card-text text-start">{product?.desc?.slice(0, 150)}</p>
                                <h4>Price: ${product?.price}</h4>
                            </div>
                            <div className="card-footer">

                                <button style={{ backgroundColor: '#FF2B00' }} onClick={() => handleDeleteProduct(product?._id)} className="btn w-100 text-white">Delete Product</button>

                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;