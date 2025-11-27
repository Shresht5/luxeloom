'use client'
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const HomeList = () => {
  const [products, setProducts] = useState([]);

  async function callAllproduct() {
    const res = await fetch('/api/product/allproduct')
    const data = await res.json();
    console.log(data);

    setProducts(data.products)
    console.log(products);
  }

  useEffect(() => {
    callAllproduct();
  }, []);
  return (
    <div className='space-y-8 min-h-screen w-screen p-2 bg-gradient-to-l to-blue-200 from-blue-400'>
      {/* upperSection */}
      <div>
        <div className=' border-0  bg-blue-100 drop-shadow-lg p-4 sm:pl-8 '>
          <h3 className='text-blue-900 font-semibold '>Latest Fashion</h3>
        </div>
        {/*horizontal scroll bar */}
        <div className="flex overflow-x-auto whitespace-nowrap p-3 space-x-8">
          {products.slice(0, products.length / 2).map((product, i) => (
            <div key={i} className="bg-white w-[250px] inline-block">
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
      </div>
      {/* lowerSection */}
      <div>
        <div className=' border-0  bg-blue-100 drop-shadow-lg p-4 sm:pl-8 '>
          <h3 className='text-blue-900 font-semibold '>Good Deals</h3>
        </div>
        {/*horizontal scroll bar */}
        <div className="flex overflow-x-auto whitespace-nowrap p-3 space-x-8">
          {products.slice(products.length / 2, products.length).map((product, i) => (
            <div key={i} className="bg-white w-[250px] inline-block">
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
      </div>
    </div>
  )
}

export default HomeList