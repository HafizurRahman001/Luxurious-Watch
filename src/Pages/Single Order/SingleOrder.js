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
        <div className="col-md-12">
            <div className="row order-details border">
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
                                className='text-center fw-bold mb-4'>
                                Dr. {props?.order?.specificProduct?.doctor}
                            </h4>
                            <div className="row ps-3">
                                <div className="col-md-6 col-6">
                                    <p className='text-start'><i className="fas text-muted fa-lock-open"></i> Open: {props?.order?.specificProduct?.open}</p>
                                    <p className='text-start'><i className="far text-muted fa-calendar-alt"></i> Price: {props?.order?.specificProduct?.price}</p>
                                </div>
                                <div className="col-md-6 col-6 ps-5">
                                    <p className='text-start'><i className="fas text-muted fa-lock"></i> Close: {props?.order?.specificProduct?.close}</p>
                                    <p className='text-start'><i className="fas text-muted fa-star"></i> Rating: {props?.order?.specificProduct?.rating}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 ps-4">
                            <p style={{ textAlign: 'justify', color: '#ddd' }} className="text-start">{props?.order?.specificProduct?.desc?.slice(0, 150)}</p>
                            <div className="cancel-order-details-btn">
                                <button onClick={() => handleCancelOrder(props?.order?._id)}
                                    style={{ backgroundColor: '#2D2D37', color: 'white' }} className="btn cancel-order-btn">Cancel Order
                                    <i className="fas ps-1 fa-angle-right"></i>
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