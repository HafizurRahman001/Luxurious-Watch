import React, { useEffect, useState } from 'react';
import initializeFirebase from '../Firebase/firebase.init';

initializeFirebase();
const useFirebase = () => {
    const [products, setProducts] = useState([]);










    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])



    return {
        products,
    }
};

export default useFirebase;