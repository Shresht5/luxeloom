import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='md:grid md:grid-cols-2 w-full bg-[rgb(26,26,26)] text-white p-1.5'>
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
    )
}

export default Footer