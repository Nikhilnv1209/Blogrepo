import React, { memo, useEffect } from 'react'

const HeaderSlides = memo(({slidesData}) => {
  useEffect(() => {
    console.log("header slides rendered");
  });
  return (
    <>
    <aside className="">
        <img
          src={slidesData[0].image}
          alt="bannerimage"
          className="object-fill h-[22.832rem] w-[44.68rem]"
          />
        <div className="flex mt-3 flex-col gap-7">
          <span className="font-Roboto">
            <p className="font-[400] text-[13px] text-gray-500 space-x-2">
              <span className="border-b border-gray-500 duration-200 hover:border-[#009688] hover:cursor-pointer hover:text-[#009688]">{slidesData[0].tag1}</span>
              <span>|</span>
              <span className="border-b border-gray-500 duration-200 hover:border-[#009688] hover:cursor-pointer hover:text-[#009688]">{slidesData[0].tag2}</span>
            </p>
          </span>
          <h1 className="text-2xl font-semibold">
            {slidesData[0].description}
          </h1>
        </div>
      </aside>
      <aside className="flex-1 flex flex-col gap-12">
        {
          slidesData.slice(1).map((slide) => (
            <div className="flex gap-4" key={slide.id}>
              <img
                src={slide.image}
                alt="bannerimage"
                className="object-fill h-[4.675rem] w-[9.125rem]"
                />
              <div className="flex flex-col gap-4">
                <span className="font-Roboto">
                  <p className="font-[400] text-[13px] text-gray-500 space-x-2">
                    <span className="border-b border-gray-500 duration-200 hover:border-[#009688] hover:cursor-pointer hover:text-[#009688]">{slide.tag1}</span>
                    <span>|</span>
                    <span className="border-b border-gray-500 duration-200 hover:border-[#009688] hover:cursor-pointer hover:text-[#009688]">{slide.tag2}</span>
                  </p>
                </span>
                <h1 className="text-[14px] font-semibold">{slide.description}</h1>
              </div>
            </div>
          ))
        }
      </aside>
    </>
  )
});

export default HeaderSlides