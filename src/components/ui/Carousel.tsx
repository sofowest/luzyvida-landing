import React, { useState, useRef } from 'react';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

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

  return (
    <div className="relative overflow-hidden w-90 mx-0 h-[70dvh] rounded-xl shadow-[var(--shadow-carousel)] lg:h-[60dvh]">
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{transform: `translateX(-${current * 100}%)`}}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0 h-full">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <button
        onClick={goToPrevious}
        className="w-11 h-11 p-1 absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#01010193] bg-opacity-50 text-white rounded-full hover:bg-[#4b004ba2] transition"
      >
        &#9664;
      </button>
      <button
        onClick={goToNext}
        className="w-11 h-11 p-1 absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#01010193] bg-opacity-50 text-white rounded-full hover:bg-[#4b004ba2] transition"
      >
        &#9654;
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