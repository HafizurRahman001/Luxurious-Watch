import React from 'react';
import useAuth from '../../Hooks/useAuth';
import Header from '../../Pages/Shared/Header/Header';

const About = () => {
    const { products } = useAuth();
    return (
        <div>
            <Header></Header>
            <h1>This is About {products.length}</h1>
        </div>
    );
};

export default About;