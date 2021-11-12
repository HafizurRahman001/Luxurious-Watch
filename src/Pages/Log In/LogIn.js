import React, { useState } from 'react';
import './LogIn.css';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import login from '../../images/login.png';

const LogIn = () => {

    const [logInData, setLogInData] = useState({});
    const { loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation()
    const history = useHistory()

    // handle input field onchange function
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogInData = { ...logInData };
        newLogInData[field] = value;
        setLogInData(newLogInData);
    };

    // handle submit user info
    const handleLogInSubmit = e => {
        e.preventDefault();
        loginUser(logInData.email, logInData.password, location, history);
    };

    //handle user signIn with google
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
                    <div className="col-md-6 form-section">
                        <div>
                            <h2 className="fw-bold text-white py-5">LOG IN FOR CONTINUE</h2>
                        </div>
                        <form className='login-form' onSubmit={handleLogInSubmit}>
                            <div className="input-group input-form flex-nowrap">
                                <span className="input-group-text" id="addon-wrapping"><i className="far fa-envelope"></i></span>
                                <input onBlur={handleOnChange} type="email" name='email' className="form-control" placeholder="User Email" aria-label="Useremail" aria-describedby="addon-wrapping" />
                            </div>
                            <div className="input-group input-form flex-nowrap">
                                <span className="input-group-text" id="addon-wrapping"><i className="fas fa-lock"></i></span>
                                <input onBlur={handleOnChange} type="password" name='password' className="form-control" placeholder="User Password" aria-label="Username" aria-describedby="addon-wrapping" />
                            </div>
                            <p style={{ marginTop: '-10px' }} className='text-start mb-1'>
                                <Link style={{ textDecoration: 'none', color: 'yellow' }} to='/register'>New User? Please Register</Link>
                            </p>
                            {authError && <p style={{ color: 'tomato', textAlign: 'left' }} >{authError}</p>}
                            <div className='text-start'>
                                <input className='btn text-white' style={{ backgroundColor: 'crimson', padding: '5px 14px' }} type="submit" value="LogIn" />
                            </div>
                        </form>
                        <div className='signin-with-google' onClick={handleGoogleSignIn} style={{ border: '1px solid #ddd', padding: '10px 7px 10px 0px', borderRadius: '30px', width: '40%', margin: 'auto', cursor: 'pointer' }}>
                            <p className='mb-0 text-white'><i className="fab pe-3 fa-google"></i> SignIn With Google</p>
                        </div>
                        {/* {isLoading && <div className="text-center my-5">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>} */}
                    </div>
                    <div className="col-md-6">
                        <img style={{ width: '100%', padding: '10px 0px 10px 0px' }} className='' src={login} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;