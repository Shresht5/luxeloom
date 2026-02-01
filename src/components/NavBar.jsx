'use client'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const NavBar = () => {
    const { data: session, status } = useSession();
    const [login, setLogin] = useState(false)
    const [adminShow, setAdminShow] = useState(false);


    useEffect(() => {
        console.log(session, status)
        if (session?.user?.email) {
            localStorage.setItem("LoginId", session.user.email);
            setLogin(true);
        }
        const user = localStorage.getItem('LoginId')
        if (user && user !== '') {
            setLogin(true);
        }
        if (user && user === 'admin@gmail.com') {
            setAdminShow(true);
        }
    }, [])
    useEffect(() => {
        if (session?.user?.email) {
            localStorage.setItem("LoginId", session.user.email);
            setLogin(true);
            setAdminShow(session.user.email === "admin@gmail.com");
        }
    }, [session])
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
                {adminShow && (
                    <div className=' p-2.5'>
                        <Link href='/admin'>Admin</Link>
                    </div>
                )}
                {login ? (
                    <div className=' p-2.5 flex justify-center items-center'>
                        <img
                            src={session.user?.image ?? ""}
                            alt="user"
                            className="w-8 h-8 rounded-full"
                        />
                        <button className='pl-4 cursor-pointer' onClick={() => { localStorage.removeItem('LoginId'); setLogin(false); setAdminShow(false); signOut() }}>Logout</button>
                    </div>
                ) : (
                    <div className=' p-2.5'>
                        <Link href='/login'>Login</Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default NavBar