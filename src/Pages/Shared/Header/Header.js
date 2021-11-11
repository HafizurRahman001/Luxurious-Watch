import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    const linkStyle = {
        color: 'white',
        textDecoration: 'none'
    }
    return (
        <div className="bg-danger">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav nav-menu me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to='/home'>HOME</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/about'>ABOUT</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/all-products'>EXPLORE</Link>
                                </li>
                                {user?.email && <li className="nav-item">
                                    <Link to='/dash-board'>DASHBOARD</Link>
                                </li>}
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-danger text-dark bg-warning" type="submit">Search</button>
                            </form>
                            <span>
                                {
                                    !user?.email ? (<button className="btn btn-primary ms-2">
                                        <Link style={linkStyle} to='/login'>LOGIN</Link>
                                    </button>) : (
                                        <button className="btn btn-primary ms-2" onClick={logOut}>LOGOUT
                                        </button>)
                                }
                            </span>
                            {user?.email && <h5 className="text-white ms-2 pt-2">{user?.displayName}</h5>}
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;