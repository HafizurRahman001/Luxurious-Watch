import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import SingleOrder from '../Single Order/SingleOrder';

const MyOrder = () => {

    //declaring and structure data
    const { user, isLoading } = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    const [control, setControl] = useState(false);

    //loaded user's orders from database
    useEffect(() => {
        fetch(`https://immense-mesa-31667.herokuapp.com/my-order/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyOrders(data);
            })
    }, [control, user?.email]);

    // waiting browser until data loaded successfully
    if (isLoading) {
        return <div className="text-center my-5">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    };

    return (
        <div className="container">
            <div className="mb-5" data-aos="fade-left">
                <h2 className='fw-bold'>YOUR ORDER LIST</h2>
                <p className='text-muted'>Order Quantity {myOrders?.length}</p>
            </div>
            {isLoading && <div className="text-center my-5">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>}
            <div>
                <div className="row g-2" >
                    {
                        myOrders.map(order => <SingleOrder
                            order={order}
                            key={order?._id}
                            setControl={setControl}
                            control={control}
                        ></SingleOrder>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyOrder;