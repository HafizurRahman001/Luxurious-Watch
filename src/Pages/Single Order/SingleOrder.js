import './SingleOrder.css';

const SingleOrder = (props) => {
    const { setControl } = props;

    const handleCancelOrder = id => {
        const proceedDelete = window.confirm('Are you sure to cancel order?');
        if (proceedDelete) {
            fetch(`http://localhost:5000/cancel-order/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    setControl(data?.acknowledged);
                    setControl(false);
                })
        }
    };

    return (
        <div className="col-md-12" data-aos="fade-left">
            <div className="row order-details text-start">
                <div className="col-md-4 mt-0 ps-0">
                    <div className="order-img">
                        <img style={{ padding: "2px" }} className="img-fluid" src={props?.order?.specificProduct?.img} alt="" />
                    </div>
                </div>
                <div className="col-md-8 mt-1 p-2 pt-0">
                    <h2 className="text-center mb-5 mt-0 order-title">{props?.order?.specificProduct?.title}</h2>
                    <div className="row">
                        <div className="col-md-6 left-details-section">
                            <h4
                                style={{ color: '#ddd' }}
                                className='text-center mb-4'>
                                PRODUCT HIGHLIGHTS
                            </h4>
                            <div className="row ps-3">
                                <div style={{ color: 'rgb(221 221 221 / 74%)' }} className="col-md-4 col-4 product-highlights text-start">
                                    <p>
                                        <i className="far pe-2 product-highlights-icon fa-calendar-alt"></i>Date:
                                    </p>
                                    <p>
                                        <i className="fas pe-2 product-highlights-icon fa-file-invoice-dollar"></i>Price:
                                    </p>
                                    <p>
                                        <i className="fas pe-1 product-highlights-icon fa-medal"></i>Brand:
                                    </p>
                                    <p>
                                        <i className="fas pe-1 product-highlights-icon fa-file-export"></i>Status:
                                    </p>
                                </div>
                                <div style={{ color: 'rgb(221 221 221 / 74%)' }} className="col-md-1 col-1 product-highlights">
                                    <p>:</p>
                                    <p>:</p>
                                    <p>:</p>
                                    <p>:</p>
                                </div>
                                <div style={{ color: 'rgb(221 221 221 / 74%)' }} className="col-md-7 col-7 ps-5 product-highlights">
                                    <p>{props?.order?.localDate}</p>
                                    <p>{props?.order?.specificProduct?.price}</p>
                                    <p>{props?.order?.specificProduct?.productBrand}</p>
                                    <p className={props?.order?.status === 'Shipped' && 'status'}>{props?.order?.status}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 ps-4">
                            <p style={{ textAlign: 'justify', color: 'rgb(221 221 221 / 74%)' }} className="text-start">{props?.order?.specificProduct?.desc?.slice(0, 150)}</p>
                            <div className="cancel-order-details-btn">
                                <button onClick={() => handleCancelOrder(props?.order?._id)}
                                    style={{ backgroundColor: '#2D2D37', color: 'white' }} className="btn cancel-order-btn">Cancel Order
                                    <i style={{ color: 'tomato' }} className="fas ps-2 fa-times"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default SingleOrder;