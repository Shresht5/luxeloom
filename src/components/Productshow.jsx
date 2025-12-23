'use client'
import { addCart } from '@/redux/cartSlice';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

const Productshow = () => {
  const [product, setProduct] = useState({});
  const [qty, setQty] = useState(1);
  const searchParams = useSearchParams();
  const productid = searchParams.get('productid')
  const dispatch = useDispatch();

  async function productCalling() {

    const res = await fetch(`/api/product/singleproduct?productid=${productid}`)
    const data = await res.json();
    console.log(`data : `, data)
    setProduct(data.product);
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
        <div className='p-2  space-y-2 sm:w-full'>
          <h3 className='font-semibold text-xl py-2 sm:text-2xl'>{product.name}</h3>
          <div className='flex'>
            <h3 className='text-red-500 font-bold'>Rs {product.currentprice}</h3>
            <h2 className=' ml-2 text-gray-700 line-through'>Rs {product.mrp}</h2>
          </div>
          <div className='flex'>
            <h2 className=' font-semibold text-md text-gray-600'>cloth type : </h2><p className='ml-2'>{product.clothtype}</p>
          </div>
          <div className='flex'>
            <h2 className=' font-semibold text-md text-gray-600'>product type : </h2><p className='ml-2'>{product.producttype}</p>
          </div>
          <div className='flex'>
            <h2 className=' font-semibold text-md text-gray-600'>color : </h2><p className='ml-2'>{product.color}</p>
          </div>
          <div className='flex'>
            <h2 className=' font-semibold text-md text-gray-600'>detail : </h2><p className='ml-2'>{product.detail}</p>
          </div>

          <div className='flex justify-center'>
            <button onClick={() => { setQty(qty - 1) }} className='bg-white px-2 drop-shadow-md'>-</button>
            <input value={qty} onChange={(e) => { setQty(e.target.value) }} className='bg-white px-2 w-[100px] drop-shadow-md'></input>
            <button onClick={() => { setQty(qty + 1) }} className='bg-white px-2 drop-shadow-md'>+</button>
          </div>

          <div className='w-full flex space-x-3 py-4'>
            <button type='button' onClick={buyNowFun} className='w-48 p-2 text-gray-200 cursor-pointer bg-gray-700 '>buy now</button>
            <button className='w-48 p-2 text-gray-200 cursor-pointer  bg-gray-700 ' onClick={() => { dispatch(addCart({ product, qty })); console.log('done') }}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Productshow