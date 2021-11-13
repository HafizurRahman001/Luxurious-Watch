import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Purchase.css';
import Header from '../../Pages/Shared/Header/Header';
import PurchaseInfo from '../Purchase Info/PurchaseInfo';
import Footer from '../../Pages/Shared/Footer/Footer';

const Purchase = () => {

    const { productId } = useParams();
    const [specificProduct, setSpecificProduct] = useState({});
    console.log(specificProduct);

    // load specific data using user's email
    useEffect(() => {
        fetch(`https://immense-mesa-31667.herokuapp.com/purchase/${productId}`)
            .then(res => res.json())
            .then(data => {
                setSpecificProduct(data);
            })
    }, []);

    return (
        <>

            {/* added header section */}
            <Header></Header>

            <div className='py-5' style={{ backgroundColor: 'rgb(23 27 28 / 89%)' }}>
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
                                                    <div className="accordion-body">
                                                        <p style={{ textAlign: 'justify' }} className="card-text product-description">{specificProduct?.desc?.slice(0, 300)}</p>
                                                        <h5 className='text-start text-muted product-description-price'>Price: ${specificProduct?.price}</h5>
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
                                                        <div className="row">
                                                            <div className="col-md-4 col-4 text-start">
                                                                <h6>Product Brand</h6>
                                                                <h6>Strap Material</h6>
                                                                <h6>Box Content</h6>
                                                                <h6>SKU Code</h6>
                                                            </div>
                                                            <div className="col-md-2 col-2">
                                                                <h6><i className="fas fa-long-arrow-alt-right"></i></h6>
                                                                <h6><i className="fas fa-long-arrow-alt-right"></i></h6>
                                                                <h6><i className="fas fa-long-arrow-alt-right"></i></h6>
                                                                <h6><i className="fas fa-long-arrow-alt-right"></i></h6>
                                                            </div>
                                                            <div className="col-md-6 col-6 text-start">
                                                                <h6>{specificProduct?.productBrand}</h6>
                                                                <h6>{specificProduct?.productMaterial}</h6>
                                                                <h6>{specificProduct?.boxContent}</h6>
                                                                <h6>{specificProduct?._id}</h6>
                                                            </div>
                                                        </div>
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
                                                                <h6><i className="fab pe-3 fa-angellist"></i>100% Authentic</h6>
                                                            </li>
                                                            <li>
                                                                <h6><i className="fas pe-3 fa-exchange-alt"></i>14 Days Easy Return</h6>

                                                                <ol style={{ listStyle: "none" }}>
                                                                    <li className='text-muted'>
                                                                        <h6><i className="fas pe-3 fa-times"></i>Change of mind is not applicable</h6>
                                                                    </li>
                                                                </ol>
                                                            </li>
                                                            <li>
                                                                <h6><i className="fas pe-3 fa-sun"></i>One Year Seller Warrenty</h6>
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

            {/* added footer section */}
            <Footer></Footer>
        </>
    );
};

export default Purchase;