import useAuth from '../../Hooks/useAuth';
import './SingleOrder.css';

const SingleOrder = (props) => {
    const { setControl } = props;
    const { isLoading } = useAuth();

    const handleCancelOrder = id => {
        const proceedDelete = window.confirm('Are you sure to cancel order?');
        if (proceedDelete) {
            fetch(`http://localhost:5000/cancel-order/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    setControl(data.acknowledged);
                    setControl(false);
                })
        }
    }
    return (
        <>
            {!isLoading && <div className="col-md-12">
                <div className="row order-details border">
                    <div className="col-md-4 mt-0 ps-0">
                        <div className="order-img">
                            <img className="img-fluid" src={props?.order?.specificProduct?.img} alt="" />
                        </div>
                    </div>
                    <div className="col-md-8 mt-1 p-2 pt-0">
                        <h2 className="text-center mb-5 mt-0 order-title">{props?.order?.specificProduct?.title}</h2>
                        <div className="row">
                            <div className="col-md-6 left-details-section">
                                <h4
                                    style={{ color: '#645a5a' }}
                                    className='text-center fw-bold mb-4'>
                                    Dr. {props?.order?.specificProduct?.doctor}
                                </h4>
                                <div className="row ps-3">
                                    <div className="col-md-6 col-6">
                                        <p><i className="fas text-muted fa-lock-open"></i> Open: {props?.order?.specificProduct?.open}</p>
                                        <p><i className="far text-muted fa-calendar-alt"></i> Price: {props?.order?.specificProduct?.price}</p>
                                    </div>
                                    <div className="col-md-6 col-6 ps-5">
                                        <p><i className="fas text-muted fa-lock"></i> Close: {props?.order?.specificProduct?.close}</p>
                                        <p><i className="fas text-muted fa-star"></i> Rating: {props?.order?.specificProduct?.rating}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 ps-4">
                                <p style={{ textAlign: 'justify' }} className="text-start">{props?.order?.specificProduct?.desc?.slice(0, 150)}</p>
                                <div className="cancel-order-details-btn">
                                    <button onClick={() => handleCancelOrder(props?.order?._id)}
                                        style={{ backgroundColor: 'rgb(0 0 139 / 62%)', color: 'white' }} className="btn cancel-order-btn">Cancel Order
                                        <i className="fas ps-1 fa-angle-right"></i>
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div >}
            {isLoading && <div className="text-center my-5">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>}
        </>
    );
};

export default SingleOrder;