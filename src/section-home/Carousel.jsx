import React, { useEffect, useState, useRef } from 'react';

const Carousel = ({ images, interval = 4000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(slideInterval);
  }, [images.length, interval]);

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transition = 'transform 0.5s ease-in-out';
      slideRef.current.style.transform = `translateX(-${currentIndex * 100}vw)`;
    }
  }, [currentIndex]);

  return (
    <div className="w-screen h-[90dvh] overflow-hidden relative">
      <div
        ref={slideRef}
        className="flex h-full"
        style={{ width: `${images.length * 100}vw` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`slide-${index}`}
            className="w-screen h-full object-cover flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
