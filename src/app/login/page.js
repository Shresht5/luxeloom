'use client'
import Login from '@/components/login';
import Image from 'next/image';
import React from 'react'
import { FaArrowLeft } from "react-icons/fa";

const page = () => {
    return (
        <div>
            <div>
                <Image src='/images/Hero_photo.jpg'
                    fill
                    alt='hero photo'
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    priority
                />
            </div>
            <Login />
        </div>
    )
}

export default page