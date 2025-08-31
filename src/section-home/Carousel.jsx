import React, { useEffect, useState, useRef } from "react";
import './Carousel.css'

const Carousel = ({ images, interval = 4000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);
  const timerRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
    resetTimer();
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
    resetTimer();
  };

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, interval);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [images.length, interval]);

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transition = "transform 0.5s ease-in-out";
      slideRef.current.style.transform = `translateX(-${currentIndex * 100}vw)`;
    }
  }, [currentIndex]);

  return (
    <div className="w-screen h-[95dvh] !mt-10 overflow-hidden relative carousel">
      {/* Slides */}
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

      {/* Botão Esquerda */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center text-3xl cursor-pointer "
      >
        &#10094;
      </button>

      {/* Botão Direita */}
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 bg-white text-black  rounded-full w-10 h-10 flex items-center justify-center text-3xl cursor-pointer"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
