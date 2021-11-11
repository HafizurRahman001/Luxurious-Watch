import React from 'react';
import './MakeAdmin.css';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';

const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();
    const { isLoading } = useAuth();

    const adminEmailInput = {
        padding: '5px 3px',
        marginRight: '7px'
    }
    const onSubmit = data => {
        fetch('http://localhost:5000/admin', {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Admin Successfully Made')
                }
                if (data.modifiedCount === 0) {
                    alert('Already is a Admin')
                };
            })
        console.log(data);
        reset();
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
            <div className="mb-5">
                <h2 className='fw-bold'>WANNA MAKE AN ADMIN?</h2>
                <p className="text-muted">Put the user email for conform making admin</p>
            </div>
            <div>
                <form className='w-100 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                    <input style={adminEmailInput} {...register("email")} placeholder='Admin email' />

                    <input className='btn btn-danger' type="Submit" />
                </form>
            </div>
        </div >
    );
};

export default MakeAdmin;