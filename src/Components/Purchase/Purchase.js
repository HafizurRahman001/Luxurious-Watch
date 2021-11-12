import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Purchase.css';
import Header from '../../Pages/Shared/Header/Header';
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
        <>
            <Header></Header>
            <div className='mb-5 py-5' style={{ backgroundColor: 'rgb(23 27 28 / 89%)' }}>
                <div className='container'>
                    <div className="py-5">
                        <h1 className='fw-bold text-white'>PURCHASE NOW!!</h1>
                        <p className='text-muted'>Purchase your product</p>
                    </div>
                    <div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card h-100">
                                    <img src={specificProduct?.img} className="card-img-top img-fluid" alt="..." />
                                    <div className="card-body">
                                        <h4 className="card-title fw-bold">{specificProduct?.title?.toUpperCase()}</h4>

                                        {/* BOOTSTRAP ACCORDION */}
                                        <div className="accordion" id="accordionExample">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingOne">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        <i className="fas pe-3 fa-align-justify"></i> PRODUCT DESCRIPTION
                                                    </button>
                                                </h2>
                                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body text-muted">
                                                        <p style={{ textAlign: 'justify' }} className="card-text">{specificProduct?.desc?.slice(0, 300)}</p>
                                                        <h4>Price: ${specificProduct?.price}</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingTwo">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        <i className="fab pe-3 fa-buffer"></i> SPECIFICATIONS
                                                    </button>
                                                </h2>
                                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingThree">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        <i className="fas pe-3 fa-compress-arrows-alt"></i>SERVICE
                                                    </button>
                                                </h2>
                                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body text-start">
                                                        <ol style={{ listStyle: "none" }}>
                                                            <li>
                                                                <p><i className="fab pe-2 fa-angellist"></i>100% Authentic</p>
                                                            </li>
                                                            <li>
                                                                <i className="fas pe-2 fa-exchange-alt"></i>14 Days Easy Return

                                                                <ol style={{ listStyle: "none" }}>
                                                                    <li className='text-muted'>
                                                                        <p><i className="fas pe-2 fa-times"></i>Change of mind is not applicable</p>
                                                                    </li>
                                                                </ol>
                                                            </li>
                                                            <li>
                                                                <p><i className="fas pe-2 fa-sun"></i>One Year Seller Warrenty</p>
                                                            </li>
                                                        </ol>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
            </div>
        </>
    );
};

export default Purchase;