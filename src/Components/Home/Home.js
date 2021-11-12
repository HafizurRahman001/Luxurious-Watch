import React from 'react';
import Banner from '../../Pages/Banner/Banner';
import Contact from '../../Pages/Contact/Contact';
import Products from '../Products/Products';
import Header from '../../Pages/Shared/Header/Header'
import UsersReview from '../Users Review/UsersReview';
import Footer from '../../Pages/Shared/Footer/Footer';

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