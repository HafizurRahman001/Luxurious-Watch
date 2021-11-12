import React from 'react';
import './Footer.css';
import logo from '../../../images/logo/header-logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer-section py-4">
            <div className="container">
                <div className="row g-3">
                    <div className="col-md-3 col-6">
                        <div className="footer-logo">
                            <img className='img-fluid' src={logo} alt="" />
                        </div>
                        <h4 className='text-start fw-bold'>LUXURIOUS WATCH</h4>
                        <p className='text-start'>Buy more, Get More</p>
                        <p className='text-start'>Find out your luxurious one</p>
                    </div>
                    <div className="col-md-3 col-6 useful-links-section">
                        <h4 className='fw-bold'>USEFUL LINKS:</h4>
                        <p><Link to="/">Home</Link></p>
                        <p><Link to="/services">My Bookings</Link></p>
                        <p><Link to="/about">Manage All Bookings</Link></p>
                        <p><Link to="/contact">Add New Place</Link></p>
                    </div>
                    <div className="col-md-3 col-12">
                        <h4 className='fw-bold'>GET IN TOUCH:</h4>
                        <i className="fab fab-icon fa-facebook-square"></i>
                        <i className="fab fab-icon fa-linkedin"></i>
                        <i className="fab fab-icon fa-twitter-square"></i>
                    </div>
                    <div className="col-md-3 col-12">
                        <h4 className='fw-bold'>CONTACT US:</h4>
                        <p>2005 Stokes Isle Apt. 896,<br />
                            Venaville 10010, USA <br />
                            info@yourdomain.com <br />
                            (+68) 120034509
                        </p>
                    </div>
                </div>
            </div> <hr />
            <p className='text-center text-dark'>&copy;- All right reserved by medi care team</p>
        </div>
    );
};

export default Footer;