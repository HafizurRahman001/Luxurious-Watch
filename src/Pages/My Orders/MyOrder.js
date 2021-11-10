import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import SingleOrder from '../Single Order/SingleOrder';

const MyOrder = () => {
    const { user, isLoading } = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/my-order/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyOrders(data);
            })
    }, [control]);

    return (
        <div className="container">
            <div>
                <div className="row g-4">
                    {
                        myOrders.slice(0, 6).map(order => <SingleOrder
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