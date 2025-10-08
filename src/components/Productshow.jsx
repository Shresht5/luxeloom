'use client'
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Productshow = () => {
  const [product, setProduct] = useState({});
  const searchParams = useSearchParams();
  const productid = searchParams.get('productid')

  async function productCalling() {

    const res = await fetch(`/api/product/singleproduct?productid=${productid}`)
    const data = await res.json();
    console.log(`data : `, data)
    setProduct(data.product);
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
    <div className='w-screen'>
      <div className=''>
        <div className="relative w-full aspect-square">
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
        <div className='p-2'>
          <h3 className='font-semibold'>{product.name}</h3>
          <div className='flex'>
            <h3 className='text-red-500 font-bold'>Rs {product.currentprice}</h3>
            <h2 className=' ml-2 text-gray-700 line-through'>Rs {product.mrp}</h2>
          </div>
          <div className='w-full grid grid-cols-2 py-4'>
            <button className='w-48 p-2 text-gray-200  bg-gray-700 '>buy now</button>
            <button className='w-48 p-2 text-gray-200  bg-gray-700 '>Add to cart</button>
          </div>
        </div>
      </div>
      <div>otherrandom</div>
    </div>
  )
}

export default Productshow