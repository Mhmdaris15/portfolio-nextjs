import React from 'react'
import Image from 'next/image'
import { FaReact } from 'react-icons/fa'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean
}

const Skill = ({ directionLeft }: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.div
        initial={{ opacity: 0, x: directionLeft ? -200 : 200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className='rounded-full border border-gray-500 object-cover filter group-hover:bg-gray-500 hover:brightness-50 hover:drop-shadow-xl transition duration-300 ease-in-out' 
        >
            <FaReact className='w-24 h-24 p-3 xl:w-32 xl:h-32 md:w-28 md:h-28' />
        </motion.div>
    <motion.div 
    initial={{ opacity: 0, x: directionLeft ? -200 : 200 }}
    // transition={{ duration: 1 }}
    whileInView={{ x: 0 }}
    whileHover={{ opacity:1, onDurationChange:0.1 }}
    className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out '>
        <div className='flex items-center justify-center full rounded-full p-3 w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 group-hover:bg-gray-200 z-0'>
            <p className='text-black font-bold text-3xl opacity-100'>100%</p>
        </div>
    </motion.div>
    </div>
  )
}

export default Skill