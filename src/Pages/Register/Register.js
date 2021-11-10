import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const { registerUser, signInWithGoogle, isLoading, authError, user } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const [logInData, setLogInData] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogInData = { ...logInData };
        newLogInData[field] = value;
        setLogInData(newLogInData);
        console.log(newLogInData);
    }
    const handleLogInSubmit = e => {
        if (logInData.password !== logInData.password2) {
            alert('Your password is miss match. please retry it.')
            return;
        }
        registerUser(logInData.email, logInData.password, logInData.name, history)
        e.preventDefault();
        e.target.reset();

    };
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    {!isLoading && <form onSubmit={handleLogInSubmit}>
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="addon-wrapping">@</span>
                            <input onBlur={handleOnBlur} type="name" name='name' className="form-control" placeholder="Your Name" aria-label="Your Name" aria-describedby="addon-wrapping" />
                        </div>
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="addon-wrapping">@</span>
                            <input onBlur={handleOnBlur} type="email" name='email' className="form-control" placeholder="Your Email" aria-label="Your Email" aria-describedby="addon-wrapping" />
                        </div>
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="addon-wrapping">@</span>
                            <input onBlur={handleOnBlur} type="password" name='password' className="form-control" placeholder="Your Password" aria-label="Your Password" aria-describedby="addon-wrapping" />
                        </div>
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="addon-wrapping">@</span>
                            <input onBlur={handleOnBlur} type="password" name='password2' className="form-control" placeholder="Rewrite Password" aria-label="Rewrite Password" aria-describedby="addon-wrapping" />
                        </div>
                        <input type="submit" value="Register" />
                    </form>}
                    {isLoading && <div className="text-center my-5">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>}
                    <p>
                        <Link to='/login'>Already Have An Accoutn?</Link>
                    </p>
                    <p>-------------OR---------------</p><br />
                    <button onClick={handleGoogleSignIn} className="btn btn-primary">Google SignIn</button>
                </div>
                <div className="col-md-6"></div>
            </div>
        </div>
    );
};

export default Register;