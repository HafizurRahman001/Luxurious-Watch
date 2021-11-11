import React from 'react';
import Banner from '../../Pages/Banner/Banner';
import Contact from '../../Pages/Contact/Contact';
import Footer from '../../Pages/Shared/Footer/Footer';
import Products from '../Products/Products';
import Header from '../../Pages/Shared/Header/Header'
import UsersReview from '../Users Review/UsersReview';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <UsersReview></UsersReview>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;