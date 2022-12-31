import React from 'react'
import Image from 'next/image'
import { profileImage } from './AllImages'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 text-gray-500 uppercase text-2xl tracking-[20px] font-bold'>About</h3>
        <motion.div initial={{ 
            x: -300,
            opacity: 0,
        }}
         whileInView={{ 
            x: 0,
            opacity: 1,
        }}
        // viewport={{ 
        //     once: true,
        // }}
        transition={{ 
            duration: 1.2,
        }}
        >
            <Image className='rounded-md w-96 h-96 object-cover' src={profileImage} width={300} height={300} alt="Muhammad Aris Septanugroho"/>
        </motion.div>
    </div>
  )
}

export default About