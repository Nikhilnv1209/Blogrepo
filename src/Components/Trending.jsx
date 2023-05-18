import React from 'react'
import { trending } from '../Constants/Data'
import TrendingSlides from './TrendingSlides'

const Trending = () => {
  return (
    <section className='bg-white'>
        <div className='mt-[10px] pt-2 relative mb-[60px] before:absolute before:top-4 before:border-y-[2.8px] border-black before:z-[1] before:w-full before:h-[40%]'>
          <h1 className='w-[25%] h-[2rem] font-Roboto relative z-[2] text-xl text-gray-400 mx-auto text-center bg-white'>TRENDING STORIES</h1>
        </div>
        <TrendingSlides slidesData={trending} />
    </section>
  )
}

export default Trending