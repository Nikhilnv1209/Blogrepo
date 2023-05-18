import { memo, useEffect, useState } from "react";
import { slidesData1, slidesData2 } from "../Constants/Data";
import "../Styles/Header.css"
import HeaderSlides from "./HeaderSlides";
const Header = memo(() => {
  //   console.log(slidesData);
  const [showHeroSection1, setShowHeroSection1] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeroSection1((prevValue) => !prevValue);
    }, 7000);
    // console.log("timer", timer);
    return () => clearTimeout(timer);
  }, [showHeroSection1]);

  return (
    <section className="relative w-[76.25rem] mx-auto max-h-[30.45rem] h-[30.45rem] bg-gray-50 px-[.5rem] py-[.5rem]">
      <div id="hero_section_1" className={`flex gap-4 ${showHeroSection1 ? 'fade-in' : 'fade-out'}`}>
        <HeaderSlides slidesData={slidesData1} />
      </div>

      <div id="hero_section_2" className={`absolute top-0 left-0 w-[76.25rem] mx-auto max-h-[30.45rem] h-[30.45rem] px-[.5rem] py-[.5rem] flex gap-4 ${showHeroSection1 ? 'fade-out' : 'fade-in'}`}>
        <HeaderSlides slidesData={slidesData2} />
      </div>


    </section>
  );
});

export default Header;
