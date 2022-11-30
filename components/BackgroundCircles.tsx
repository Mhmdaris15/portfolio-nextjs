import React from 'react'

type Props = {}

const BackgroundCircles = (props: Props) => {
  return (
    <div className='relative flex justify-center items-center'>
        <div className='absolute rounded-full border border-[#333333] h-[200px] w-[200px] animate-ping' />
        <div className='absolute rounded-full border border-[#333333] h-[300px] w-[300px] animate-ping' />
        <div className='absolute rounded-full border border-[#333333] h-[500px] w-[500px] animate-ping' />
        <div className='absolute rounded-full border border-[#F7AB0A] h-[650px] w-[650px] animate-ping' />
        <div className='absolute rounded-full border border-[#333333] h-[800px] w-[800px] animate-pulse' />
    </div>
  )
}

export default BackgroundCircles