'use client'
import React, { useEffect, useState } from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { FiFilter } from "react-icons/fi";
import Image from 'next/image';
import Link from 'next/link';

const ProductList = () => {

    const [products, setProducts] = useState([]);
    const [showfilter, setShowFilter] = useState(false);
    const [showProducts, setShowProducts] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [filters, setFilters] = useState({
        sort: 'a-z', price: "", clothtype: 'all', producttype: 'all'
    });

    async function callAllproduct() {
        const res = await fetch('/api/product/allproduct')
        const data = await res.json();
        console.log('API : ', data);

        setProducts(data.products)
        setShowProducts(data.products)
        console.log('products : ', products);
    }


    function handleSearch() {
        const input = searchInput.toLowerCase().trim();
        const searched = products.filter((p) =>
            p.name.toLowerCase().split(' ').some((d) => d.startsWith(input))
        );
        setShowProducts(searched);
    }

    function handleFilterChange(e) {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value
        });
    }

    async function handleFilterSerch(e) {
        e.preventDefault();
        const res = await fetch(`/api/product/allproduct?sort=${filters.sort}&price=${filters.price}&productype=${filters.producttype}&clothtype=${filters.clothtype}`)
        const data = await res.json();
        console.log(data);
        setShowProducts(data.products)
    }

    useEffect(() => {
        callAllproduct();
    }, []);
    useEffect(() => {
        console.log(filters);

    }, [filters]);

    return (
        <div>

            {/* search bar */}
            <div className='flex items-center px-5 py-2.5'>
                <button onClick={() => setShowFilter(!showfilter)} className='flex space-x-1'>
                    <FiFilter className='text-2xl' />
                    <h3 className='hidden  sm:block text-gray-400'>filter</h3>
                </button>
                <div className='w-full'>
                    <div className='flex items-center mx-auto  max-w-xl p-1'>
                        <input className='w-full' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} placeholder='Search' />
                        <button onClick={handleSearch}>
                            <IoMdSearch className='text-2xl ml-2' />
                        </button>
                    </div>
                </div>
            </div>

            {/* main */}
            <div className='flex relative'>
                {/* filter */}
                <div className={`flex ${showfilter ? '' : "hidden"} lg:block lg:flex-row-reverse`}>
                    <form onSubmit={handleFilterSerch} className='absolute lg:static flex z-20 flex-col w-[250px] p-2 space-y-1.5 bg-gray-100 h-full'>
                        <h4 className='px-5 py-1 shadow text-md mt-3 bg-white'>sort</h4>

                        <label className='text-gray-600'>
                            <input type='radio' name='sort' checked={filters.sort === "a-z"} onChange={handleFilterChange} value="a-z" />
                            A - Z
                        </label>

                        <label className='text-gray-600'>
                            <input type='radio' name='sort' checked={filters.sort === "z-a"} onChange={handleFilterChange} value="z-a" />
                            Z - A
                        </label>

                        <label className='text-gray-600'>
                            <input type='radio' name='sort' checked={filters.sort === "low-high"} onChange={handleFilterChange} value="low-high" />
                            price low to high
                        </label>

                        <label className='text-gray-600'>
                            <input type='radio' name='sort' checked={filters.sort === "high-low"} onChange={handleFilterChange} value="high-low" />
                            price high to low
                        </label>

                        <h4 className='px-5 py-1 shadow text-md mt-3 bg-white'>under price</h4>

                        <input
                            className='text-gray-600 border-[1px] px-1 bg-white border-none focus:outline-none'
                            type="number"
                            name="price"
                            placeholder='enter under price'
                            value={filters.price}
                            onChange={handleFilterChange}
                        />

                        <h4 className='px-5 py-1 shadow text-md mt-3 bg-white'>type</h4>
                        <label className='text-gray-600'>
                            <input type='radio' name='producttype' checked={filters.producttype === "all"} onChange={handleFilterChange} value="all" />
                            all
                        </label>
                        <label className='text-gray-600'>
                            <input type='radio' name='producttype' checked={filters.producttype === "curtain"} onChange={handleFilterChange} value="curtain" />
                            curtain
                        </label>

                        <label className='text-gray-600'>
                            <input type='radio' name='producttype' checked={filters.producttype === "pillow"} onChange={handleFilterChange} value="pillow" />
                            pillow
                        </label>

                        <label className='text-gray-600'>
                            <input type='radio' name='producttype' checked={filters.producttype === "carpet"} onChange={handleFilterChange} value="carpet" />
                            carpet
                        </label>


                        <h4 className='px-5 py-1 shadow text-md mt-3 bg-white'>cloth type</h4>

                        <label className='text-gray-600'>
                            <input type='radio' name='clothtype' checked={filters.clothtype === "all"} onChange={handleFilterChange} value="all" />
                            all
                        </label>
                        <label className='text-gray-600'>
                            <input type='radio' name='clothtype' checked={filters.clothtype === "cotton"} onChange={handleFilterChange} value="cotton" />
                            cotton
                        </label>

                        <label className='text-gray-600'>
                            <input type='radio' name='clothtype' checked={filters.clothtype === "polyester"} onChange={handleFilterChange} value="polyester" />
                            polyster
                        </label>

                        <label className='text-gray-600'>
                            <input type='radio' name='clothtype' checked={filters.clothtype === "terycot"} onChange={handleFilterChange} value="terycot" />
                            terycote
                        </label>

                        <button type='submit' className='bg-gray-800 text-white p-1.5 mt-3'>
                            Submit
                        </button>
                    </form>
                </div>
                {/* list */}
                <div className=' bg-gray-100 sm:p-5 grid gap-5 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full'>
                    {showProducts.map((product, id) =>
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