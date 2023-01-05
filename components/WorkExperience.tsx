import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

type Props = {}

function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0}}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1}}
      className='h-screen relative flex flex-col text-left overflow-hidden md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h4 className='absolute top-24 text-gray-500 uppercase text-2xl tracking-[20px] font-bold'>Work Experiences</h4>
        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
            {/* Experience Card */}
            <ExperienceCard/>

            {/* Experience Card */}
            <ExperienceCard/>

            {/* Experience Card */}
            <ExperienceCard/>
            
            {/* Experience Card */}
            <ExperienceCard/>

            {/* Experience Card */}
            <ExperienceCard/>

        </div>    
    </motion.div>
  )
}

export default WorkExperience