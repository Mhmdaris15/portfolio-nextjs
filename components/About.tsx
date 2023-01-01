import React from 'react'
import Image from 'next/image'
import { profileImage } from './AllImages'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 text-gray-500 uppercase text-2xl tracking-[10px] font-bold'>About</h3>
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
        className='-mb-20 md:mb-0 flex shrink-0' 
        >
            <Image className='rounded-full w-40 h-40 object-cover md:w-72 md:h-72 md:mr-8 xl:w-[400px] xl:h-[400px] xl:rounded-lg xl:mt-8' src={profileImage} width={300} height={300} alt="Muhammad Aris Septanugroho"/>
        </motion.div>
        <div className='space-y-10'>
            <h4 className='md:text-3xl sm:text-xl text-center font-semibold my-5'><span className='font-semibold decoration-amber-500 hover:underline'>Versatile programmer</span> with a passion for learning and leading an IT organization</h4>
            <q className='text-sm md:text-base'>I am a self-taught programmer with a degree in Computer Science and a wide range of technical skills, including Frontend and Backend development, Data Science and Machine Learning, Unreal Engine 5, Networking, Linux, and System Administration. I am a leader in an IT organization and have a strong passion for constantly learning and improving my skills. I enjoy working on projects that involve a combination of my various technical skills and am always eager to take on new challenges.</q>
        </div>
    </div>
  )
}

export default About