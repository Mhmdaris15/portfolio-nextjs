import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
type Props = {}

const Hero = (props: Props) => {
    const [text, count] = useTypewriter({
        words: ['The Name\'s Muhammad Aris Septanugroho', 'He is a' , '<Frontend Developer/>', '{{ Backend Developer }}', 'Data_Science.py', '>> Competitive Programming >> endl', 'Game Developer;'],
        loop: true,
        delaySpeed: 2000
    })

    return (
    <div>
        <h1 className='text-4xl font-bold'>
            <span className=''>{text}</span>
            <Cursor cursorColor='red' />
        </h1>
        <BackgroundCircles />
    </div>
  )
}

export default Hero