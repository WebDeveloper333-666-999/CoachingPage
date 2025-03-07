import React, { useState, useEffect } from 'react';

interface Slide {
  image: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    title: "Explore Our Courses",
    description: "Learn new skills with our online courses and tutorials."
  },
  {
    image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    title: "Transform Your Life",
    description: "Discover your inner potential through spiritual guidance."
  },
  {
    image: "https://images.unsplash.com/photo-1602525962574-3bc829fbed3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    title: "Spiritual Journey",
    description: "Begin your path to spiritual enlightenment and self-discovery."
  }
];

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-[600px] overflow-hidden bg-gray-100">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center justify-center text-center">
              <div className="max-w-4xl px-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 transform transition-all duration-700 translate-y-0 opacity-100">
                  {slide.title}
                </h1>
                <p className="text-xl sm:text-2xl text-white/90 mb-8 transform transition-all duration-700 translate-y-0 opacity-100">
                  {slide.description}
                </p>
                <button className="bg-purple-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-purple-700 transform hover:scale-105 transition duration-200 shadow-lg hover:shadow-xl">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0">
        <div className="flex justify-center space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Carousel;