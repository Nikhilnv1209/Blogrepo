import React, { useState } from 'react'
import LazyImage from '../utils/LazyImage';

const TrendingSlides = ({ slidesData }) => {
  const [noOfElements, setNoOfElements] = useState(6);
  const slides = slidesData.slice(0, noOfElements);

  // console.log("trending slides rendered", noOfElements);

  const handleLoadMore = () => {
    if (noOfElements > slidesData.length) return;
    setNoOfElements(noOfElements + 3);
  }

  return (
    <div className='grid grid-cols-3'>
      {
        slides.map((slide) => (
          <div className="flex flex-col gap-4 px-[15px] min-h-[325px] cursor-pointer" key={slide.id}>
            {/* <img
              src={slide.image}
              alt="bannerimage"
              loading='lazy'
              className="object-fill h-[193px] w-full opacity-90 duration-300 hover:opacity-100"
            /> */}
            <LazyImage src={slide.image} alt="bannerimage" />
            <div className="flex flex-col gap-4">
              <span className="font-Roboto">
                <p className="font-[400] text-[13px] text-gray-500 space-x-2">
                  <span className="border-b border-gray-500 duration-200 hover:border-[#009688] hover:cursor-pointer hover:text-[#009688]">{slide.tag1}</span>
                  <span>|</span>
                  <span className="border-b border-gray-500 duration-200 hover:border-[#009688] hover:cursor-pointer hover:text-[#009688]">{slide.tag2}</span>
                  <span>|</span>
                  <span className="border-b border-gray-500 duration-200 hover:border-[#009688] hover:cursor-pointer hover:text-[#009688]">{slide.tag3}</span>
                </p>
              </span>
              <h1 className="text-[14px] font-semibold hover:text-[#009688] duration-200">{slide.description}</h1>
            </div>
          </div>
        ))
      }
      {(noOfElements < slidesData.length) ? (<div className='col-span-3 place-self-center'>
        <button className='px-7 py-2 border border-black rounded'
          onClick={handleLoadMore}
        >View more</button>
      </div>): null
      }
    </div>
  )
}

export default TrendingSlides