import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div className='h-screen relative flex flex-col text-left overflow-hidden md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h4 className='absolute top-24 text-gray-500 uppercase text-2xl tracking-[20px] font-bold'>Work Experiences</h4>
        <h4 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-xl'>Hover over a skill for currenly proficiency</h4>
    </motion.div>
  )
}

export default Skills