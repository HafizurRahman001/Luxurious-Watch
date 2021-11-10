import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PurchaseInfo from '../Purchase Info/PurchaseInfo';

const Purchase = () => {
    const { productId } = useParams();
    const [specificProduct, setSpecificProduct] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/purchase/${productId}`)
            .then(res => res.json())
            .then(data => {
                setSpecificProduct(data);
            })
    }, [])
    return (
        <div className='container'>
            <h2>this is Purchase page</h2>
            <p>product Id: {productId}</p>


            <div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card h-100">
                            <img src={specificProduct?.img} className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{specificProduct?.title}</h5>
                                <p className="card-text text-start">{specificProduct?.desc?.slice(0, 300)}</p>
                                <h4>Price: ${specificProduct?.price}</h4>
                            </div>
                            <div className="card-footer">

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <PurchaseInfo specificProduct={specificProduct}></PurchaseInfo>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;