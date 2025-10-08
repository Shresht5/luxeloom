
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar.jsx'
import ProductList from '@/components/ProductList'
import React from 'react'

const page = () => {
    return (
        <div>
            <div className='bg-black'>
                <NavBar />
            </div>
            <div>
                <ProductList />
            </div>
            <Footer />
        </div>
    )
}

export default page