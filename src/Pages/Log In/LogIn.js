import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const LogIn = () => {
    const [logInData, setLogInData] = useState({});
    const { loginUser, signInWithGoogle, isLoading } = useAuth();

    const location = useLocation()
    const history = useHistory()

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogInData = { ...logInData };
        newLogInData[field] = value;
        setLogInData(newLogInData);
        console.log(newLogInData);
    };
    const handleLogInSubmit = e => {
        e.preventDefault();
        loginUser(logInData.email, logInData.password, location, history);
    };
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <form onSubmit={handleLogInSubmit}>
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="addon-wrapping">@</span>
                            <input onBlur={handleOnChange} type="email" name='email' className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                        </div>
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="addon-wrapping">@</span>
                            <input onBlur={handleOnChange} type="password" name='password' className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                        </div>
                        <input type="submit" value="Submit" />
                    </form>
                    {isLoading && <div className="text-center my-5">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>}
                    <p>
                        <Link to='/register'>New User? Please Register</Link>
                    </p>
                    <p>-------------OR---------------</p><br />
                    <button onClick={handleGoogleSignIn} className="btn btn-primary">Google SignIn</button>
                </div>
                <div className="col-md-6"></div>
            </div>
        </div>
    );
};

export default LogIn;