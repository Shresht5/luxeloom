import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import AdminProductshow from '@/components/AdminProductshow'
import React from 'react'

const pages = () => {
    return (
        <div >
            <div className='bg-black'>
                <NavBar />
            </div>
            <div>
                <AdminProductshow />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default pages