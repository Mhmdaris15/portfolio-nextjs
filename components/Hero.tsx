import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import Link from 'next/link'
import { profileImage } from './AllImages'

type Props = {}

const Hero = (props: Props) => {
    const [text, count] = useTypewriter({
        words: [
            'The Name\'s Muhammad Aris Septanugroho', 
            'He is a' , 
            '<Frontend Developer/>', 
            '{{ Backend Developer }}', 
            'Data_Science.py', 
            'cout >> Competitive Programming >> endl', 
            'Game Developer;'
        ],
        loop: true,
        delaySpeed: 2000,
        typeSpeed: 30,
        deleteSpeed: 10,
    })

    return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <Image className='rounded-full object-cover w-64 h-64' src={profileImage} alt="Muhammad Aris" width={300} height={300} />
        <h2 className='text-sm text-gray-600 uppercase tracking-[15px]'>Software Engineer</h2>
        <h1 className='text-xl'>
            <span className=''>{text}</span>
            <Cursor cursorColor='#F7AB0A' />
        </h1>
        <div className='pt-5 z-10'>
            <Link href='#about'>
                <button className='hero-button'>About</button>
            </Link>
            <Link href='#experiences'>
                <button className='hero-button'>Experiences</button>
            </Link>
            <Link href='#skills'>
                <button className='hero-button'>Skills</button>
            </Link>
            <Link href='#projects'>
                <button className='hero-button'>Projects</button>
            </Link>
        </div>
    </div>
  )
}

export default Hero