import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import './ManageAllOrders.css';
import swal from 'sweetalert';


const ManageAllOrders = () => {

    // handle useState and destructuring data
    const [manageProducts, setManageProducts] = useState([]);
    const { isLoading } = useAuth();

    // handle manage products
    useEffect(() => {
        fetch('https://immense-mesa-31667.herokuapp.com/manage-all-orders')
            .then(res => res.json())
            .then(data => {
                setManageProducts(data);
            })
    }, [manageProducts]);

    //handle deleted product and shipped method
    const handleShipped = (id, method, path) => {
        fetch(`https://immense-mesa-31667.herokuapp.com/${path}/${id}`, {
            method: method,
        })
            .then(res => res.json())
            .then(data => {
                if (data?.modifiedCount > 0) {
                    //display sweet alert
                    swal("Product Successfully Shipped!", "Have a nice day!", "success");
                }
                if (data.deletedCount > 0) {
                    alert('Order Successfully Deleted')
                }
            })
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
        <div className="container">
            <div className='mb-5' data-aos="fade-left">
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
                {manageProducts?.map((manageProduct, index) => <tbody key={manageProduct?._id} data-aos="zoom-in">
                    <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{manageProduct?.userName}</td>
                        <td>{manageProduct?.specificProduct?.title}</td>
                        <td className={manageProduct?.status === 'Shipped' ? 'status' : 'text-white'}>{manageProduct?.status}</td>
                        <td>
                            <button className='btn btn-info px-2 py-1' onClick={() => handleShipped(manageProduct?._id, 'PUT', 'shipped')}>Shipped</button>{' '}
                            <button className='btn btn-danger px-2 py-1' onClick={() => handleShipped(manageProduct?._id, 'DELETE', 'delete-product')}>Delete</button>
                        </td>
                    </tr>
                </tbody>)}
            </table>
        </div>
    );
};

export default ManageAllOrders;