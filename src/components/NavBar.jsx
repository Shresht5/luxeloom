'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const NavBar = () => {
    const [login, setLogin] = useState(false)
    useEffect(() => {
        const user = localStorage.getItem('LoginId')
        if (user && user !== '') {
            setLogin(true);
        }
    }, [])
    return (
        <div className='flex justify-between p-5 md:mx-24 text-white'>
            <div className=' font-[var(--font-poppiins)]'>
                <Link href='/' className='text-2xl md:text-3xl'>LUXELOOM</Link>
            </div>
            <div className='flex items-center space-x-4'>
                <div className=' p-2.5'>
                    <Link href='/discover'>Discover</Link>
                </div>
                <div className=' p-2.5'>
                    <Link href='/cart'>Cart</Link>

                </div>
                {login ? (<div className=' p-2.5'>
                    <button className=' cursor-pointer' onClick={() => { localStorage.removeItem('LoginId'); setLogin(false); }}>Logout</button>
                </div>
                ) : (
                    <div className=' p-2.5'>
                        <Link href='/login'>Login</Link>
                    </div>

                )
                }

            </div>
        </div>
    )
}

export default NavBar