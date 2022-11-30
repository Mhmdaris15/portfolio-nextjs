import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-10 xl:items-center'>
        <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
        
        className='flex flex-row items-center'>
            {/* Social Icons */}
            <SocialIcon url="https://github.com/mhmdaris15" 
            fgColor='gray'
            bgColor='transparent'
            />
            <SocialIcon url="https://instagram.com/mhmdaris15" 
            fgColor='gray'
            bgColor='transparent'
            />
            <SocialIcon url="https://twitter.com/mhmdaris15"
            fgColor='gray'
            bgColor='transparent'
            />
            <SocialIcon url="https://reddit.com/mhmdaris15" 
            fgColor='gray'
            bgColor='transparent'
            />
            <SocialIcon url="https://linkedin.com/muhammad-aris-septanugroho" 
            fgColor='gray'
            bgColor='transparent'
            />
        </motion.div>

        <motion.div
        initial={{ opacity: 0, x: 500 }}
        animate={{ opacity:1, x:0, transition: { duration: 0.8 } }}
        className='flex flex-row items-center text-gray-300 cursor-pointer'>
            <SocialIcon className='cursor-pointer' network='email' fgColor='gray' bgColor='transparent'/>
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>get in touch</p>
        </motion.div>
    </header>
  )
}

export default Header