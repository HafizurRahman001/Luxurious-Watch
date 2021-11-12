import React, { useEffect } from 'react';
import './AddNewProduct.css';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import addProduct from '../../images/add-product.jpg';

const AddNewProduct = () => {
    const { isLoading, setProducts, products } = useAuth();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.boxContent = 'Watch';

        //send product to database
        fetch('http://localhost:5000/add-product', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.insertedId) {
                    alert('New Product Added Successfully.');
                }
            })
        reset();
    };

    //recall products for delete product
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [products])

    //waiting browser by spinner until data loaded
    if (isLoading) {
        return <div className="text-center my-5">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    };

    return (
        <>
            <div className='py-5' data-aos="fade-right">
                <h1 className='fw-bold'>ADD A NEW PRODUCT FOR SELL</h1>
                <p className='text-muted'>You can easily add a new product</p>
            </div>
            <div style={{ backgroundColor: '#313146' }} data-aos="fade-left">
                <div className='container'>
                    <div className="row d-flex align-items-center py-2">
                        <div className="col-md-7">
                            <div className=''>
                                <form className='add-product-form text-start' onSubmit={handleSubmit(onSubmit)}>
                                    <h4 style={{ paddingBottom: '68px' }} className='fw-bold text-muted text-center'>FILL THE CRITERIA CAREFULLY!</h4>
                                    <input className='w-100' {...register("title", { required: true })} placeholder="Product Name" />
                                    <input className='common-form' {...register("productBrand", { required: true })} placeholder="Product Brand" />
                                    <input className='mx-2 common-form product-material' {...register("productMaterial", { required: true })} placeholder="Making Material" />
                                    <input className='common-form' {...register("price", { required: true })} placeholder="Product Price" />
                                    <input className='w-100' {...register("desc", { required: true })} placeholder="Product Description" />
                                    <input className='w-100' {...register("img", { required: true })} placeholder="Img url" />

                                    <input className='btn btn-info px-3' type="submit" />
                                </form>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <img style={{ padding: '10px', width: '100%', height: '508px' }} className='' src={addProduct} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddNewProduct;