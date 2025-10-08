import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import Productshow from '@/components/Productshow'
import React from 'react'

const pages = () => {
    return (
        <div >
            <div className='bg-black'>
                <NavBar />
            </div>
            <div>
                <Productshow />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default pages