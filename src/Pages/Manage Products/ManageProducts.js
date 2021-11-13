import React, { useEffect } from 'react';
import useAuth from '../../Hooks/useAuth';
import swal from 'sweetalert';


const ManageProducts = () => {
    const { products, setProducts, isLoading } = useAuth();

    // load all products from database
    useEffect(() => {
        fetch('https://immense-mesa-31667.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [products])

    //handle delete method
    const handleDeleteProduct = id => {
        const proceedDeleteProduct = window.confirm('are you sure to delete product?');
        if (proceedDeleteProduct) {
            fetch(`https://immense-mesa-31667.herokuapp.com/manage-product/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data?.deletedCount > 0) {
                        swal("Product Deleted Successfully!", "Done!", "success");
                    }
                })
        }

    };

    // waiting browser until data loaded successfully
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
                                <h5 style={{ color: '#04293A' }} className="card-title fw-bold">{product?.title}</h5>
                                <p className="card-text text-start">{product?.desc?.slice(0, 150)}</p>
                                <h4 className='text-start'>Price: ${product?.price}</h4>
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