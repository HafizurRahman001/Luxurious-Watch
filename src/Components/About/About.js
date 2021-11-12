import React from 'react';
import Footer from '../../Pages/Shared/Footer/Footer';
import Header from '../../Pages/Shared/Header/Header';
import aboutImg from '../../images/about img.png';

const About = () => {
    return (

        <div>
            {/* add header section  */}
            <Header></Header>

            <div className='py-5'>
                <div className="container">
                    <h1 className="fw-bold text-start pb-5">WELCOME TO LUXURIOUS WATCH</h1>
                    <div>
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <div className='py-2'>
                                    <img className='img-fluid' src={aboutImg} alt="" />
                                </div>
                            </div>
                            <div className="col-md-6 col-12 text-muted text-start">
                                <h4 className='fw-bold pb-4' style={{ color: 'black' }}>Your digital destination for modern luxury.</h4>
                                <p>Luxe Digital started as a humble side project in January 2018 and quickly became a reference publication that took on a life of its own. You have made this possible and I am incredibly grateful for this amazing opportunity to inspire you to become your best versions.</p>
                                <p>This magazine is for you, the discerning, the affluents, the ambitious who dare to think innovatively at a time of unprecedented change.</p>
                                <p>From the get-go, we envisioned a new kind of media. One that empowers our readers to shake the status quo. One that elevates people’s potential.</p>
                                <p>Luxe Digital celebrates all the luxuries that make our lives richer —intellectually, but also aesthetically and emotionally. We are championing a new definition of luxury. Beyond bling. Unpretentious. Conscious, elevated living.</p>
                                <p>This means you’ll find, through the sections, thought-provoking ideas, soul-nurturing journeys, surprising places, and compelling stories. Stories on digital trends, (emerging) luxury brands, technological innovation, influencers, modern icons, craftsmanship, one-of-a-kind experiences, forward thinkers, and much, much more.</p>
                                <h5 className="fw-bold" style={{ color: 'black' }}>Luxury business and lifestyle stories. Distilled, not diluted.</h5>
                                <p>We are a global team of luxury and digital insiders and on-the-ground trend and innovation hunters. We are big believers in coming together to connect, inspire and create.</p>
                                <p>Welcome to the conversation. An inspiring and empowering conversation that I hope will spark positive changes, in life and at work.</p>
                            </div>
                        </div>
                        <div className='text-start py-5 text-muted'>
                            <h4 style={{ color: 'black' }}>About Luxurious Watch</h4>
                            <p>Luxe Digital is the publication of reference for a new generation of business leaders and affluent consumers.</p>
                            <p>Luxe Digital crafts compelling luxury business and lifestyle stories that are smart, sophisticated and global — just like the women and men who read us.</p>
                            <p>Our goal is to inspire and empower the world’s leading luxury leaders and modern consumers with clarity and depth of understanding.</p>
                            <p>Luxe Digital is brought to you by the senior leadership team of mOOnshot digital, a celebrated full-service digital marketing agency for lifestyle and luxury brands. We have been at the forefront of digital transformation for some of the most well-known luxury companies in the world and emerging, modern disruptors.</p>

                            <div className="text-muted pt-5">
                                <p> <strong>Business stories</strong>are demystifying the (digital) forces shaping the future of the luxury industry.</p>
                                <p><strong>Lifestyle stories</strong> are inspiring elevated living, from little gems to precious, unique experiences.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* add footer section */}
            <Footer></Footer>
        </div>
    );
};

export default About;