import React from 'react'

const NavBar = () => {
    return (
        <div className='flex justify-between p-5 md:mx-24 text-white'>
            <div className=' font-[var(--font-poppiins)]'>
                <h2 className='text-2xl md:text-3xl'>LUXELOOM</h2>
            </div>
            <div className='flex items-center space-x-4'>
                <div className=' p-2.5'>
                    <p>Contact</p>
                </div>
                <div className=' p-2.5'>
                    <p>Cart</p>
                </div>
                <div className=' p-2.5'>
                    <p>Login</p>
                </div>
            </div>
        </div>
    )
}

export default NavBar