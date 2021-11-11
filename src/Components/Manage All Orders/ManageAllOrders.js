import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const ManageAllOrders = () => {
    const [manageProducts, setManageProducts] = useState([]);
    const { isLoading } = useAuth();


    useEffect(() => {
        fetch('http://localhost:5000/manage-all-orders')
            .then(res => res.json())
            .then(data => {
                setManageProducts(data);
            })
    }, [manageProducts]);

    const handleShipped = (id, method, path) => {
        fetch(`http://localhost:5000/${path}/${id}`, {
            method: method,
        })
            .then(res => res.json())
            .then(data => {
                if (data?.modifiedCount > 0) {
                    alert('Product Successfully Shipped.')
                }
                if (data.deletedCount > 0) {
                    alert('Order Successfully Deleted')
                }
            })
    };

    if (isLoading) {
        return <div className="text-center my-5">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    };

    return (
        <div className="container">
            <div className='mb-5'>
                <h2 className='fw-bold'>MANAGE ALL ORDERS</h2>
                <p className='text-muted'>Manage User's Orders</p>
            </div>
            <table className="table table-striped table-dark table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                {manageProducts?.map((manageProduct, index) => <tbody key={manageProduct?._id}>
                    <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{manageProduct?.userName}</td>
                        <td>{manageProduct?.specificProduct?.title}</td>
                        <td>{manageProduct?.status}</td>
                        <td>
                            <button onClick={() => handleShipped(manageProduct?._id, 'PUT', 'shipped')}>Shipped</button>
                            <button onClick={() => handleShipped(manageProduct?._id, 'DELETE', 'delete-product')}>Delete</button>
                        </td>
                    </tr>
                </tbody>)}
            </table>
        </div>
    );
};

export default ManageAllOrders;