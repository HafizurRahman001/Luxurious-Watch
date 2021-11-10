import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
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
                                <li className="nav-item">
                                    <Link to='/manage-all-orders'>MANAGE ALL ORDERS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/my-orders'>My Orders</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/manage-products'>MANAGE PRODUCTS</Link>
                                </li>
                                {user?.email && <li className="nav-item">
                                    <Link to='/dash-board'>DASHBOARD</Link>
                                </li>}
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                            <span>
                                {
                                    !user?.email ? <Link to='/login'>LOGIN</Link> : <span onClick={logOut}>LOGOUT</span>
                                }
                            </span>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;