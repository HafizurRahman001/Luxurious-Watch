import React from 'react';
import Banner from '../../Pages/Banner/Banner';
import Products from '../Products/Products';
import UsersReview from '../Users Review/UsersReview';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <UsersReview></UsersReview>
        </div>
    );
};

export default Home;