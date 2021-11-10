import React from 'react';
import './PurchaseInfo.css';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';

const PurchaseInfo = ({ specificProduct }) => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.status = 'Pending';
        const infoData = { ...data, specificProduct };
        fetch('http://localhost:5000/purchase-info', {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(infoData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Your Order placed Successfully')
                }
            })
        reset();
    };
    return (
        <div className="container additional-info">
            <h3>Give Your Additional Information</h3>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="user_info_form w-100">
                    <input defaultValue={user?.displayName} {...register("userName", { required: true })} placeholder="Your Name" />
                    <input defaultValue={user?.email} {...register("email", { required: true })} placeholder="Your Email" />
                    <input {...register("phone", { required: true })} placeholder="Your Phone" />
                    <input {...register("country", { required: true })} placeholder="Your Country Name" />
                    <input {...register("address", { required: true })} placeholder="Your Address" />

                    {/* Rating here */}

                    <input className='place_order_btn' type="submit" value='PLACE ORDER' />
                </form>
            </div>
        </div>
    );
};

export default PurchaseInfo;