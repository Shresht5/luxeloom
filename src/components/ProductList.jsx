'use client'
import React, { useEffect, useState } from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import Image from 'next/image';
import Link from 'next/link';

const ProductList = () => {

    const [products, setProducts] = useState([]);
    const [showfilter, setShowFilter] = useState(false);

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
        <div>

            {/* search bar */}
            <div className='flex items-center px-5 py-2.5'>
                <button onClick={() => setShowFilter(!showfilter)}>
                    <IoReorderThreeOutline className='text-4xl' />
                </button>
                <div className='w-full'>
                    <div className='flex items-center mx-auto  max-w-xl p-1'>
                        <input className='w-full' placeholder='Search' />
                        <button>
                            <IoMdSearch className='text-2xl ml-2' />
                        </button>
                    </div>
                </div>
            </div>

            {/* main */}
            <div className='flex relative'>
                {/* filter */}
                <div className={`flex ${showfilter ? '' : "hidden"} xl:block xl:flex-row-reverse`}>
                    <form className='absolute xl:static flex z-20 flex-col w-[250px] p-2 space-y-1.5 bg-gray-100 h-full'>
                        <h4 className='px-5 py-1 shadow text-md mt-3 bg-white'>sort</h4>
                        <label>
                            <input type='radio' name='sort' />
                            price low to high
                        </label>
                        <label>
                            <input type='radio' name='sort' />
                            price high to low
                        </label>
                        <label>
                            <input type='radio' name='sort' />
                            A - Z
                        </label>
                        <label>
                            <input type='radio' name='sort' />
                            Z - A
                        </label>

                        <h4 className='px-5 py-1 shadow text-md mt-3 bg-white'>under price</h4>

                        <input type="text" name="price" placeholder='enter price' />
                        <h4 className='px-5 py-1 shadow text-md mt-3 bg-white'>type</h4>
                        <label>
                            <input type='radio' name='producttype' />
                            curtain
                        </label><label>
                            <input type='radio' name='producttype' />
                            pillow
                        </label><label>
                            <input type='radio' name='producttype' />
                            carpet
                        </label>
                        <h4 className='px-5 py-1 shadow text-md mt-3 bg-white'>cloth type</h4>
                        <label>
                            <input type='radio' name='clothtype' />
                            cotton
                        </label>
                        <label>
                            <input type='radio' name='clothtype' />
                            polyster
                        </label>
                        <label>
                            <input type='radio' name='clothtype' />
                            terycote
                        </label>


                        {/* background */}
                        <button type='button' className='bg-gray-800 text-white p-1.5 mt-3'>Submit</button>
                    </form>
                </div>
                {/* list */}
                <div className=' bg-gray-100 sm:p-5 grid gap-5 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full'>
                    {products.map((product, id) =>
                        <div key={id} className='bg-white'>
                            <Link href={`/product?productid=${product._id}`}>
                                <div className='relative w-full aspect-square'>
                                    <Image
                                        src={product.image}
                                        fill
                                        className='object-cover'
                                        alt='product image'
                                    />
                                </div>
                                <h4 className='text-lg ml-2 mt-2 '>{product.name}</h4>
                                <div className='flex ml-2 items-center'>
                                    <h4 className='text-xl text-red-400'>Rs {product.currentprice}</h4>
                                    <h5 className=' line-through pl-2 text-gray-700 '>Rs {product.mrp}</h5>
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div >
    )
}

export default ProductList