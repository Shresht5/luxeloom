'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const layout = ({ children }) => {
    const router = useRouter();
    const [allowed, setAllowed] = useState(false)

    useEffect(() => {
        const user = localStorage.getItem("LoginId");

        if (user === 'admin@gmail.com') {
            setAllowed(true)
        } else {
            router.push('/')
            setAllowed(false)
        }
    }, [])

    if (!allowed) { return null }
    return (<>
        {children}
    </>)

}

export default layout