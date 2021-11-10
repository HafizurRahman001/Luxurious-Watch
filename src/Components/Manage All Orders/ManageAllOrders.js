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
    }
    return (
        <div>
            <table className="table table-striped">
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
                        <td>{manageProduct?.title}</td>
                        <td>{manageProduct?.status}</td>
                        <td>
                            <button onClick={() => handleShipped(manageProduct?._id, 'PUT', 'shipped')}>Shipped</button>
                            <button onClick={() => handleShipped(manageProduct?._id, 'DELETE', 'delete-product')}>Delete</button>
                        </td>
                    </tr>
                </tbody>)}
            </table>
            {isLoading && <div className="text-center my-5">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>}
        </div>
    );
};

export default ManageAllOrders;