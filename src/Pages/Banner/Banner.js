import React from 'react';
import { Link } from 'react-router-dom';
import banner1 from '../../images/Banner-Images/banner1.png'
import banner2 from '../../images/Banner-Images/banner2.png'
import banner3 from '../../images/Banner-Images/banner3.jpg'

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={banner1} className="d-block w-100" alt="..." />
                        <div style={{ background: 'rgb(49 48 48 / 42%)' }} className="carousel-caption d-none d-md-block" data-aos="fade-left">
                            <h2 style={{ textShadow: '1px 2px 3px black', color: 'yellow', fontWeight: 'bold' }}>WELCOME TO LUXURIOUS WATCH STORE</h2>
                            <p style={{ textShadow: '1px 2px 3px black', color: 'aqua', fontSize: '20px' }}>We are offering you various gent's fashionable watch</p>
                            <button style={{ backgroundColor: 'crimson' }} className="btn mb-3" >
                                <Link style={{ textDecoration: 'none', color: 'white' }} to='/all-products'>Explore More</Link>
                            </button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={banner3} className="d-block w-100" alt="..." />
                        <div style={{ background: 'rgb(49 48 48 / 42%)' }} className="carousel-caption d-none d-md-block">
                            <h2 style={{ textShadow: '1px 2px 3px black', color: 'yellow', fontWeight: 'bold' }}>WELCOME TO LUXURIOUS WATCH STORE</h2>
                            <p style={{ textShadow: '1px 2px 3px black', color: 'aqua', fontSize: '20px' }}>We are offering you various gent's fashionable watch</p>
                            <button style={{ backgroundColor: 'crimson' }} className="btn mb-3" >
                                <Link style={{ textDecoration: 'none', color: 'white' }} to='/all-products'>Explore More</Link>
                            </button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={banner2} className="d-block w-100" alt="..." />
                        <div style={{ background: 'rgb(49 48 48 / 42%)' }} className="carousel-caption d-none d-md-block">
                            <h2 style={{ textShadow: '1px 2px 3px black', color: 'yellow', fontWeight: 'bold' }}>WELCOME TO LUXURIOUS WATCH STORE</h2>
                            <p style={{ textShadow: '1px 2px 3px black', color: 'aqua', fontSize: '20px' }}>We are offering you various gent's fashionable watch</p>
                            <button style={{ backgroundColor: 'crimson' }} className="btn mb-3" >
                                <Link style={{ textDecoration: 'none', color: 'white' }} to='/all-products'>Explore More</Link>
                            </button>
                        </div>
                    </div>
                </div >
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div >
        </div >
    );
};

export default Banner;