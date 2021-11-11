import React from 'react';
import ManageProducts from '../../Pages/Manage Products/ManageProducts';

const ManagementProducts = () => {
    return (
        <div>
            <div className='mb-5'>
                <h2 className='fw-bold'>MANAGEMENT ALL PRODUCTS</h2>
                <p className='text-muted'>You can manage all products easily!</p>
            </div>
            <div>
                <ManageProducts></ManageProducts>
            </div>
        </div>
    );
};

export default ManagementProducts;