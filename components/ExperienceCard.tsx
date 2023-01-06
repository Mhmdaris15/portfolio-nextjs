import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { nevtikLogo } from './AllImages'
import { SiJupyter, SiNumpy, SiPandas, SiTensorflow, SiPython } from 'react-icons/si'

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article className='flex flex-col py-5 rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.div
        initial={{y: -100, opacity: 0}}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true}}
        className='w-20 h-20'>
            <Image className='w-20 h-20 rounded-full object-cover object-center' src={nevtikLogo} alt='NEVTIK Logo' width={100} height={100} />
        </motion.div>
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>CEO of NEVTIK</h4>
            <p className='text-xl font-bold mt-1'>NEVTIK SIP</p>
            <div className='flex space-x-2 my-2'>
                <SiJupyter className='h-10 w-10 text-yellow-500' />
                <SiNumpy className='h-10 w-10 text-yellow-500' />
                <SiPandas className='h-10 w-10 text-yellow-500' />
                <SiTensorflow className='h-10 w-10 text-yellow-500' />
                <SiPython className='h-10 w-10 text-yellow-500' />
            </div>
            <p className='uppercase py-5 text-gray-300'>Started wortk ... - Ended...</p>
            <ul className='list-disc space-y-2 ml-5 text-lg'>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard