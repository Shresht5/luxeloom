'use client'
import { addCart } from '@/redux/cartSlice';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

const Productshow = () => {
    const defaultform = { name: '', image: '', color: '', clothtype: '', producttype: '', detail: '', mrp: 0, currentprice: 0 }
    const [product, setProduct] = useState({});
    const [qty, setQty] = useState(1);
    const searchParams = useSearchParams();
    const productid = searchParams.get('productid')
    const [form, setForm] = useState(defaultform)
    const dispatch = useDispatch();

    async function productCalling() {
        const res = await fetch(`/api/product/singleproduct?productid=${productid}`)
        const data = await res.json();
        console.log(`data : `, data)
        setProduct(data.product);
        setForm({ ...defaultform, ...data.product })
    }

    async function buyNowFun() {
        const userId = localStorage.getItem('LoginId');
        const res = await fetch(`/api/order/placeorder`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId, productId: product._id, qty })
        })
        const data = await res.json()
        console.log(data);
    }
    function handleFormChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }


    useEffect(() => {
        productCalling();
    }, [productid]);

    useEffect(() => {
        if (product) {
            console.log('updated product', product)
        }
    }, [product]);

    if (!product) { return <div>loding data ...</div> }


    return (
        <div className='w-screen bg-blue-50'>
            <form>
                <div className=' md:flex'>
                    <div className="relative w-full md:max-w-[50vw] max-w-screen   aspect-square">
                        {product?.image ? (
                            <Image
                                src={product.image}
                                alt={'Product image'}
                                fill
                                className="object-cover"
                            />
                        ) : (
                            ''
                        )}
                    </div>
                    <div className='p-2 flex flex-col space-y-2 sm:w-full'>


                        <h4 className='px-5 py-1 shadow text-md mt-3 bg-white'>Image</h4>

                        <input
                            className='text-gray-600 border-[1px] px-1 bg-white border-none focus:outline-none'
                            type="text"
                            name="image"
                            placeholder='enter product name'
                            value={form.image}
                            onChange={handleFormChange}
                        />

                        <h4 className='px-5 py-1 shadow text-md mt-3 bg-white'>Name</h4>

                        <input
                            className='text-gray-600 border-[1px] px-1 bg-white border-none focus:outline-none'
                            type="text"
                            name="name"
                            placeholder='enter product name'
                            value={form.name}
                            onChange={handleFormChange}
                        />

                        <h4 className='px-5 py-1 shadow text-md mt-3 bg-white'>MRP price</h4>

                        <input
                            className='text-gray-600 border-[1px] px-1 bg-white border-none focus:outline-none'
                            type="number"
                            name="mrp"
                            placeholder='enter MRP '
                            value={form.mrp}
                            onChange={handleFormChange}
                        />

                        <h4 className='px-5 py-1 shadow text-md mt-3 bg-white'>Current price</h4>

                        <input
                            className='text-gray-600 border-[1px] px-1 bg-white border-none focus:outline-none'
                            type="number"
                            name="currentprice"
                            placeholder='enter current price'
                            value={form.currentprice}
                            onChange={handleFormChange}
                        />

                        <h4 className='px-5 py-1 shadow text-md mt-3 bg-white'>Product type</h4>

                        <label className='text-gray-600'>
                            <input type='radio' name='producttype' checked={form.producttype === "curtain"} onChange={handleFormChange} value="curtain" />
                            curtain
                        </label>

                        <label className='text-gray-600'>
                            <input type='radio' name='producttype' checked={form.producttype === "pillow"} onChange={handleFormChange} value="pillow" />
                            pillow
                        </label>

                        <label className='text-gray-600'>
                            <input type='radio' name='producttype' checked={form.producttype === "carpet"} onChange={handleFormChange} value="carpet" />
                            carpet
                        </label>


                        <h4 className='px-5 py-1 shadow text-md mt-3 bg-white'>Cloth type</h4>


                        <label className='text-gray-600'>
                            <input type='radio' name='clothtype' checked={form.clothtype === "cotton"} onChange={handleFormChange} value="cotton" />
                            cotton
                        </label>

                        <label className='text-gray-600'>
                            <input type='radio' name='clothtype' checked={form.clothtype === "polyester"} onChange={handleFormChange} value="polyester" />
                            polyster
                        </label>

                        <label className='text-gray-600'>
                            <input type='radio' name='clothtype' checked={form.clothtype === "terycot"} onChange={handleFormChange} value="terycot" />
                            terycote
                        </label>

                        <h4 className='px-5 py-1 shadow text-md mt-3 bg-white'>Color</h4>

                        <input
                            className='text-gray-600 border-[1px] px-1 bg-white border-none focus:outline-none'
                            type="text"
                            name="color"
                            placeholder='enter color'
                            value={form.color}
                            onChange={handleFormChange}
                        />

                        <h4 className='px-5 py-1 shadow text-md mt-3 bg-white'>Detail</h4>

                        <input
                            className='text-gray-600 border-[1px] px-1 bg-white border-none focus:outline-none'
                            type="text"
                            name="detail"
                            placeholder='enter details'
                            value={form.detail}
                            onChange={handleFormChange}
                        />

                        <div className='w-full flex space-x-3 py-4'>
                            <button type='button' onClick={buyNowFun} className='w-48 p-2 text-gray-200 cursor-pointer bg-gray-700 '>Save</button>
                            <button className='w-48 p-2 text-gray-200 cursor-pointer  bg-gray-700 ' onClick={() => { dispatch(addCart({ product, qty })); console.log('done') }}>Delete</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Productshow