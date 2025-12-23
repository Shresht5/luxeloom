import Image from 'next/image';
import React from 'react'
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='min-h-screen flex flex-col justify-end'>
            <div className='min-h-[67vh] bg-gradient-to-b md:flex md:bg-gradient-to-r from-cyan-50 to-cyan-300'>
                <div className=' md:w-[100%] flex flex-col justify-center items-center md:items-start space-y-5 py-6 px-1 md:pl-10'>
                    <h2 className='text-2xl'><b>LuxLoom</b> gives you <b>style</b>.</h2>
                    <p>Elevate your living spaces with LuxLoom, your global destination for premium home décor.Delivering worldwide, LuxLoom brings quality, style, and sophistication right to your doorstep.</p>
                    <div className='flex space-x-3'>
                        <div className='flex items-center px-2 bg-black text-white rounded-lg'>
                            <FaApple className='text-3xl' />
                            <div>
                                <h6>download on</h6>
                                <h5>App Store</h5>
                            </div>
                        </div>
                        <div className='flex items-center px-2 bg-black text-white rounded-lg'>
                            <FaGooglePlay className='text-3xl' />
                            <div>
                                <h6>Get it on</h6>
                                <h5>Google Play</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center w-full'>
                    <Image
                        src='/images/mobilefooter.png'
                        width={300}
                        height={500}
                        alt='mobile footer'
                    />
                </div>
            </div>
            <div className='min-h-[33vh]md:grid md:grid-cols-2 w-full bg-[rgb(26,26,26)] text-white p-1.5'>
                <div className='p-2 md:p-3'>
                    <h1 className=' text-[35px] '>LUXELOOM</h1>
                </div>
                <div className='grid grid-cols-2 p-12 text-end text-[20px]'>
                    <div className='space-y-2'>
                        <h5>How We Work</h5>
                        <h5>Cancellation Policy</h5>
                        <h5>Terms & Conditions</h5>
                        <h5>Contact</h5>
                    </div>
                    <div className='space-y-2'>
                        <h5>About Us</h5>
                        <h5>Career</h5>
                        <h5>Follow us</h5>
                        <div className=' flex justify-end space-x-1 text-[30px]'>
                            <FaSquareInstagram />
                            <FaXTwitter />
                            <FaSquareFacebook />
                            <FaLinkedin />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer