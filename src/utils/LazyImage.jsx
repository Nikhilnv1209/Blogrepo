import React, { useRef, useEffect } from 'react';
import "../Styles/LazyLoadAnimation.css"

function LazyImage({ src, alt }) {
  const imageRef = useRef(null);

  useEffect(() => {
    // console.log("lazy image rendered");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Load the image when it enters the viewport
          imageRef.current.src = src;
          // opacity-0 to opacity-100
          imageRef.current.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    });

    // Start observing the image element
    observer.observe(imageRef.current);

    // Clean up the observer when the component is unmounted
    return () => observer.disconnect();
  }, [src]);

  return <img ref={imageRef} alt={alt} className="object-fill h-[193px] w-full hover:opacity-100" />;
}

export default LazyImage;
