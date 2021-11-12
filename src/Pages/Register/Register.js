import React, { useState } from 'react';
import './Register.css';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import register from '../../images/register.jpg';

const Register = () => {

    //destructuring data from use firebase
    const { registerUser, signInWithGoogle, isLoading, authError, user } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const [logInData, setLogInData] = useState({});

    //handle input users register form
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogInData = { ...logInData };
        newLogInData[field] = value;
        setLogInData(newLogInData);
    }

    //handle user submitted info
    const handleLogInSubmit = e => {
        if (logInData.password !== logInData.password2) {
            alert('Your password is miss match. please retry it.')
            return;
        }
        registerUser(logInData.email, logInData.password, logInData.name, history)
        e.preventDefault();
        e.target.reset();

    };

    //handle user google signIn using google firebase
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
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
        <div className="py-5">
            <div className="container">
                <div style={{ backgroundColor: '#363A43', padding: '0px 20px' }} className="row d-flex align-items-center">
                    <div className="col-md-6">
                        <div>
                            <h2 className="fw-bold text-white py-5">REGISTER FOR CONTINUE</h2>
                        </div>
                        <form onSubmit={handleLogInSubmit}>
                            <div className="input-group input-form flex-nowrap">
                                <span className="input-group-text" id="addon-wrapping"><i className="fas fa-user-graduate"></i></span>
                                <input onBlur={handleOnBlur} type="name" name='name' className="form-control" placeholder="Your Name" aria-label="Your Name" aria-describedby="addon-wrapping" />
                            </div>
                            <div className="input-group input-form flex-nowrap">
                                <span className="input-group-text" id="addon-wrapping"><i className="far fa-envelope"></i></span>
                                <input onBlur={handleOnBlur} type="email" name='email' className="form-control" placeholder="Your Email" aria-label="Your Email" aria-describedby="addon-wrapping" />
                            </div>
                            <div className="input-group input-form flex-nowrap">
                                <span className="input-group-text" id="addon-wrapping"><i className="fas fa-lock"></i></span>
                                <input onBlur={handleOnBlur} type="password" name='password' className="form-control" placeholder="Your Password" aria-label="Your Password" aria-describedby="addon-wrapping" />
                            </div>
                            <div className="input-group input-form flex-nowrap">
                                <span className="input-group-text" id="addon-wrapping"><i className="fas fa-lock"></i></span>
                                <input onBlur={handleOnBlur} type="password" name='password2' className="form-control" placeholder="Rewrite Password" aria-label="Rewrite Password" aria-describedby="addon-wrapping" />
                            </div>
                            <p style={{ marginTop: '-10px' }} className='text-start mb-1'>
                                <Link style={{ textDecoration: 'none', color: 'yellow' }} to='/login'>Already Have An Accoutn?</Link>
                            </p>
                            {authError && <p style={{ color: 'tomato', textAlign: 'left' }} >{authError}</p>}
                            <div className='text-start'>
                                <input className='btn text-white' style={{ backgroundColor: 'crimson' }} type="submit" value="Register" />
                            </div>
                        </form>
                        <div className='signin-with-google' onClick={handleGoogleSignIn} style={{ border: '1px solid #ddd', padding: '10px 7px 10px 0px', borderRadius: '30px', width: '40%', margin: 'auto', cursor: 'pointer' }}>
                            <p className='mb-0 text-white'><i className="fab pe-3 fa-google"></i> SignIn With Google</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img style={{ width: '100%', padding: '10px 0px 10px 0px' }} src={register} alt="" />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Register;