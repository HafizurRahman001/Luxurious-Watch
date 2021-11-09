import React from 'react';
import useAuth from '../../Hooks/useAuth';

const About = () => {
    const { products } = useAuth();
    return (
        <div>
            <h1>This is About {products.length}</h1>
        </div>
    );
};

export default About;