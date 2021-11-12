import React from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import headerLogo from '../../../images/logo/header-logo.png'

const Header = () => {
    const { user, logOut } = useAuth();

    const linkStyle = {
        color: 'white',
        textDecoration: 'none'
    };

    const activeStyle = {
        fontWeight: 'bold',
        borderBottom: '2px solid yellow',
        color: 'yellow'
    }
    return (
        <div style={{ backgroundColor: 'rgb(37 75 162)' }}>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light py-3 ">
                    <div className="container-fluid">
                        <div style={{ width: '100px' }} className="navbar-brand" href="/">
                            <Link to='/'>
                                <img style={{ width: '100%' }} className="img-fluid" src={headerLogo} alt="" />
                            </Link>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav nav-menu me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink activeStyle={activeStyle} to='/home'><i className="fas pe-2 fa-home"></i>HOME</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeStyle={activeStyle} to='/about'><i className="fas pe-2 fa-award"></i>ABOUT</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeStyle={activeStyle} to='/all-products'><i className="fab pe-2 fa-buffer"></i>EXPLORE</NavLink>
                                </li>
                                {user?.email && <li className="nav-item">
                                    <NavLink activeStyle={activeStyle} to='/dash-board'><i className="fab pe-2 fa-gg"></i>DASHBOARD</NavLink>
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
                                        <button className="btn btn-info ms-2" onClick={logOut}>LOGOUT
                                        </button>)
                                }
                            </span>
                            {user?.email && <h5 className="text-white ms-3 pt-2">{user?.displayName}</h5>}
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;