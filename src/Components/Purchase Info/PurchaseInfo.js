import React from 'react';
import './PurchaseInfo.css';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import swal from 'sweetalert';


const PurchaseInfo = ({ specificProduct }) => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        const date = new Date();
        const localDate = date.toLocaleDateString();
        data.status = 'Pending';
        const infoData = { ...data, localDate, specificProduct };
        fetch('https://immense-mesa-31667.herokuapp.com/purchase-info', {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(infoData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    //display sweet alert
                    swal("Place Order successful!", "Congratulation for purchase!", "success");
                }
            })
        reset();
    };
    return (
        <div className="container additional-info">
            <h3 style={{ color: '#ddd' }} className='py-5'>GIVE YOUR ADDITIONAL INFORMATION</h3>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="user_info_form w-100">
                    <input defaultValue={user?.displayName} {...register("userName", { required: true })} placeholder="Your Name" />
                    <input defaultValue={user?.email} {...register("email", { required: true })} placeholder="Your Email" />
                    <input {...register("phone", { required: true })} placeholder="Your Phone" />
                    <input {...register("country", { required: true })} placeholder="Your Country Name" />
                    <input {...register("address", { required: true })} placeholder="Your Address" />
                    <input className='place_order_btn' type="submit" value='PLACE ORDER' />
                </form>
            </div>
        </div>
    );
};

export default PurchaseInfo;