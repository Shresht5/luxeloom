'use client'
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'

const HomeList = () => {
  const [products, setProducts] = useState([]);
  const slideref1 = useRef(null);
  const slideref2 = useRef(null);

  async function callAllproduct() {
    const res = await fetch('/api/product/allproduct')
    const data = await res.json();
    console.log(data);

    setProducts(data.products)
  }
  const scroll = (ref_, direction) => {
    ref_.current.scrollBy({ left: direction === "left" ? -300 : 300, behavior: 'smooth' });
  };

  useEffect(() => {
    callAllproduct();
  }, []);
  return (
    <div className='space-y-8  w-screen p-2 bg-gradient-to-t to-[#19645b] from-cyan-300'>
      {/* upperSection */}
      <div>
        <div className=' border-0  bg-blue-100 drop-shadow-lg p-4 sm:pl-8 '>
          <h3 className='text-blue-900 font-semibold '>Latest Fashion</h3>
        </div>
        {/*horizontal scroll bar */}
        <div className='relative'>
          <div ref={slideref1} className="flex overflow-x-hidden whitespace-nowrap  p-3 space-x-8">
            {products.slice(0, products.length / 2).map((product, i) => (
              <div key={i} className="bg-white rounded-b-md shadow-lg w-[250px] inline-block">
                <Link href={`/product?productid=${product._id}`}>
                  <div className="relative w-[250px] h-[250px] ">
                    <Image
                      src={product.image}
                      fill
                      alt="product image"
                      className="object-cover"
                      sizes='300px'
                    />
                  </div>
                  <h4 className=" truncate text-lg ml-2 mt-2">{product.name}</h4>
                  <div className="flex ml-2 items-center">
                    <h4 className="text-xl text-red-400">Rs {product.currentprice}</h4>
                    <h5 className="line-through pl-2 text-gray-700">Rs {product.mrp}</h5>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div onClick={() => { scroll(slideref1, 'left') }} className='text-2xl absolute left-1 top-[50%] p-4 -translate-y-1/2 z-10 cursor-pointer bg-[rgba(200,200,200,0.8)] hover:bg-[#ffffff]'>{'<'}</div>
          <div onClick={() => { scroll(slideref1, 'right') }} className='text-2xl absolute right-1 top-[50%] p-4 -translate-y-1/2 z-10 cursor-pointer bg-[rgba(200,200,200,0.8)] hover:bg-[#ffffff]'>{'>'}</div>
        </div>
      </div>
      {/* lowerSection */}
      <div>
        <div className=' border-0  bg-blue-100 drop-shadow-lg p-4 sm:pl-8 '>
          <h3 className='text-blue-900 font-semibold '>Good Deals</h3>
        </div>
        {/*horizontal scroll bar */}
        <div className='relative'>
          <div ref={slideref2} className=" flex overflow-x-hidden whitespace-nowrap p-3 space-x-8">
            {products.slice(products.length / 2, products.length).map((product, i) => (
              <div key={i} className="bg-white  rounded-b-md shadow-lg  w-[250px] inline-block">
                <Link href={`/product?productid=${product._id}`}>
                  <div className="relative w-[250px] h-[250px] ">
                    <Image
                      src={product.image}
                      fill
                      alt="product image"
                      className="object-cover"
                      sizes='300px'
                    />
                  </div>
                  <h4 className=" truncate text-lg ml-2 mt-2">{product.name}</h4>
                  <div className="flex ml-2 items-center">
                    <h4 className="text-xl text-red-400">Rs {product.currentprice}</h4>
                    <h5 className="line-through pl-2 text-gray-700">Rs {product.mrp}</h5>
                  </div>
                </Link>
              </div>
            ))}  </div>

          <div onClick={() => { scroll(slideref2, 'left') }} className='text-2xl absolute left-1 top-[50%] p-4 -translate-y-1/2 z-10 cursor-pointer bg-[rgba(200,200,200,0.8)] hover:bg-[#ffffff]'>{'<'}</div>
          <div onClick={() => { scroll(slideref2, 'right') }} className='text-2xl absolute right-1 top-[50%] p-4 -translate-y-1/2 z-10 cursor-pointer bg-[rgba(200,200,200,0.8)] hover:bg-[#ffffff]'>{'>'}</div>

        </div>

      </div>
    </div>
  )
}

export default HomeList