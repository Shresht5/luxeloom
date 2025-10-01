import React from 'react'
import { FaArrowDown } from "react-icons/fa";

const HeroSection = () => {
    return (
        <div className=' flex justify-center h-[calc(100vh-84px)]'>
            <div className='text-center w-full sm:w-[50%] '>
                <h1 className='mt-15 text-[60px] font-bold'>LUXELOOM</h1>
                <h3 className='mt-9 text-[25px] sm:text-[40px] text-white text-shadow-2xl'><b className='font-boldt-b'>Transform</b> your living space with <b className='font-boldt-b'>LuxeLoom’s</b> exclusive collection of <b className='font-boldt-b'>home essentials.</b></h3>
                <div className='mx-auto p-2 mt-9 '>
                    <FaArrowDown className='text-white inline text-6xl p-1.5 border-0 rounded-full bg-[rgba(255,255,255,0.1)]' />
                </div>
            </div>
        </div >
    )
}

export default HeroSection