import React from 'react';
import './MakeAdmin.css';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import swal from 'sweetalert';

const MakeAdmin = () => {

    const { register, handleSubmit, reset } = useForm();
    const { isLoading } = useAuth();

    // css style object
    const adminEmailInput = {
        padding: '5px 3px',
        marginRight: '7px'
    }

    // handle making admin
    const onSubmit = data => {
        fetch('https://immense-mesa-31667.herokuapp.com/admin', {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    //display sweet alert
                    swal("Admin Successfully Made!", "Well Done!", "success");
                }
                if (data.modifiedCount === 0) {
                    //display sweet alert
                    swal("Already is a Admin!", "Try another user!", "success");
                };
            })
        reset();
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
            <div className="mb-5" data-aos="fade-left">
                <h2 className='fw-bold'>WANNA MAKE AN ADMIN?</h2>
                <p className="text-muted">Put the user email for conform making admin</p>
            </div>
            <div style={{ backgroundImage: 'linear-gradient(to top, rgb(221 221 221 / 38%), #dddddda3, rgb(221 221 221 / 0%))' }} className='border border-1 pt-4 pb-5'>

                <form className='w-100 mx-auto' onSubmit={handleSubmit(onSubmit)} data-aos="flip-left">
                    <span style={{ fontSize: '80px' }}>
                        <i style={{ paddingBottom: '30px' }} className="fas fa-user-cog"></i>
                    </span> <br />
                    <input style={adminEmailInput} {...register("email")} placeholder='Admin email' />

                    <input className='btn btn-danger' type="Submit" />
                </form>
            </div>
        </div >
    );
};

export default MakeAdmin;