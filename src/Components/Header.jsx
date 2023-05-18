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
    <section className="relative mx-auto">
      <div id="hero_section_1" className={`flex gap-4 ${showHeroSection1 ? 'fade-in' : 'fade-out'}`}>
        <HeaderSlides slidesData={slidesData1} />
      </div>

      <div id="hero_section_2" className={`absolute top-0 left-0 flex gap-4 ${showHeroSection1 ? 'fade-out' : 'fade-in'}`}>
        <HeaderSlides slidesData={slidesData2} />
      </div>


    </section>
  );
});

export default Header;
