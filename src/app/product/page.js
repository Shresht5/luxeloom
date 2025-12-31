import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import Productshow from '@/components/Productshow'
import React, { Suspense } from 'react'

const pages = () => {
    return (
        <div >
            <div className='bg-black'>
                <NavBar />
            </div>
            <div>
                <Suspense fallback={<div>Loading products...</div>}>
                    <Productshow />
                </Suspense>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default pages