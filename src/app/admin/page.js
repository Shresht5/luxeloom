
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar.jsx'
import AdminProductList from '@/components/AdminProductList'
import React from 'react'

const page = () => {
    return (
        <div>
            <div className='bg-black'>
                <NavBar />
            </div>
            <div>
                <AdminProductList />
            </div>
            <Footer />
        </div>
    )
}

export default page