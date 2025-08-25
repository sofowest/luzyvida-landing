// src/components/Carousel.tsx
import React, { useState, useRef } from 'react';

// Se mantiene la misma interfaz
interface CarouselProps {
  images: string[];
  stylePreset: 'Installations' | 'Team';
}

const Carousel: React.FC<CarouselProps> = ({ images, stylePreset }) => {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // ... (tus funciones goToNext, goToPrevious, handleTouchStart, handleTouchEnd se mantienen igual) ...
  const goToNext = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToPrevious = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const swipeThreshold = 50;

    if (touchStartX.current - touchEndX.current > swipeThreshold) {
      goToNext();
    } else if (touchStartX.current - touchEndX.current < -swipeThreshold) {
      goToPrevious();
    }
  };


  // Define las clases base y condicionales
  const baseClasses = "relative overflow-hidden w-[85vw] mx-0 h-[70vh] rounded-xl shadow-[var(--shadow-carousel)] lg:h-[60dvh]";

  const containerClasses = stylePreset === 'Installations'
    ? 'shadow-[var(--shadow-carousel)]'
    : 'shadow-lg bg-[var(--background-color)]'; // Estilos para Team

  const containerImageClasses = stylePreset === 'Installations'
    ? 'flex-shrink-0 h-full w-full'
    : 'flex-shrink-0 h-full w-full flex justify-center pt-4'; // Centrado para Team

  const imageClasses = stylePreset === 'Installations'
    ? 'w-full h-full object-cover'
    : 'w-50 h-50 object-cover rounded-full';

  const buttonClasses = stylePreset === 'Installations'
    ? 'absolute top-1/2 transform -translate-y-1/2 text-white rounded-full bg-[#01010193] bg-opacity-50 rounded-full hover:bg-[#4b004ba2] transition'
    : 'absolute top-1/2 transform -translate-y-1/2 text-black rounded-full bg-[#01010193] bg-opacity-50 rounded-full hover:bg-[#4b004ba2] transition';

  return (
    <div className={`${baseClasses} ${containerClasses}`}>
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((image, index) => (
          <div key={index} className={`${containerImageClasses}`}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className={imageClasses}
            />
          </div>
        ))}
      </div>
      
      <button
        onClick={goToPrevious}
        className={`${buttonClasses} w-11 h-11 pr-1 left-4`}
      >
        <img src="/imgs/arrow.svg" alt="flecha izq" className="w-full h-full rotate-180"/>
      </button>
      
      <button
        onClick={goToNext}
        className={`${buttonClasses} w-11 h-11 pl-1 right-4`}
      >
        <img src="/imgs/arrow.svg" alt="flecha derecha" className="w-full h-full"/>
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
              index === current ? 'bg-white' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;