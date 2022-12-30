import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div initial={{ 
        opacity: 0,
     }} animate={{ 
        scale: [1, 1.5, 2.5, 1.2, 1.3],
        opacity: [0.1, 0.5, 1, 0.8, 0.2],
        borderRadius: ['20%', '30%', '40%', '50%', '60%'],
      }} transition={{ 
        duration: 5,
        repeat: Infinity,
        repeatType: 'reverse'
       }} className='relative flex justify-center items-center z-0'>
        <div className='absolute rounded-full border border-[#333333] h-[100px] w-[150px] mt-52 animate-ping' />
        <div className='absolute rounded-full border border-[#F7AB0A] h-[200px] w-[200px] mt-52 animate-pulse' />
        <div className='absolute rounded-full border border-[#333333] h-[350px] w-[350px] mt-52 animate-ping' />
        <div className='absolute rounded-full border border-[#F7AB0A] h-[550px] w-[550px] mt-52 animate-pulse' />
        <div className='absolute rounded-full border border-[#333333] h-[700px] w-[700px] mt-52' />
    </motion.div>
  )
}

export default BackgroundCircles