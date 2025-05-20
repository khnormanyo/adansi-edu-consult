'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const slides = [
    {
      id: 1,
      title: "Your Path to Educational Excellence",
      subtitle: "Guiding students toward academic success and future opportunities through personalized consulting services.",
      image: "/images/slider/new_slide1.jpg", // Updated to new image
      ctaLink: "/packages"
    },
    {
      id: 2,
      title: "Discover Your Full Academic Potential",
      subtitle: "Expert guidance for university applications, scholarships, and study abroad opportunities.",
      image: "/images/slider/new_slide2.jpg", // Updated to new image
      ctaLink: "/packages"
    },
    {
      id: 3,
      title: "Education That Opens Global Doors",
      subtitle: "Connect with top universities worldwide and secure your academic future with our professional support.",
      image: "/images/slider/new_slide3.jpg", // Updated to new image
      ctaLink: "/contact"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      goToNextSlide();
    }, 5000);
    
    return () => clearInterval(timer);
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide(index);
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const goToNextSlide = () => {
    const nextSlide = (currentSlide + 1) % slides.length;
    goToSlide(nextSlide);
  };

  const goToPrevSlide = () => {
    const prevSlide = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(prevSlide);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden -mt-[1px]" style={{ marginTop: 0, paddingTop: 0 }}>
      {/* Full-width background slider */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${slide.image})`, 
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
          />
        ))}
        {/* Darker overlay for better text readability and contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70"></div>
      </div>
      
      {/* Modern slider controls - positioned on sides of full-width slider */}
      <button 
        onClick={goToPrevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-accent text-white p-3 rounded-full z-20 transition-all shadow-md hover:scale-110"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={goToNextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-accent text-white p-3 rounded-full z-20 transition-all shadow-md hover:scale-110"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Centered content container */}
      <div className="container mx-auto h-full px-4 relative z-10 flex items-center">
        <div className="max-w-5xl mx-auto text-center text-white">
          {slides.map((slide, index) => (
            <div 
              key={slide.id}
              className={`transition-opacity duration-500 ${
                index === currentSlide ? 'opacity-100 block' : 'opacity-0 hidden'
              }`}
            >
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-xl">
                {slide.title.split(' ').map((word, i) => 
                  i % 3 === 2 ? <span key={i} className="text-accent">{word} </span> : <span key={i}>{word} </span>
                )}
              </h1>
              <p className="text-xl mb-10 text-white max-w-2xl mx-auto drop-shadow-lg">
                {slide.subtitle}
              </p>
              
              <div className="flex flex-wrap gap-5 justify-center">
                <Link 
                  href="/packages" 
                  className="bg-accent hover:bg-amber-600 text-white py-4 px-8 rounded-md font-medium transition-colors inline-flex items-center shadow-md"
                >
                  Our Packages
                  <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link 
                  href="/contact" 
                  className="bg-white hover:bg-gray-100 text-primary py-4 px-8 rounded-md font-medium transition-colors shadow-md"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          ))}
          
          {/* Slider navigation dots */}
          <div className="absolute bottom-10 left-0 right-0 flex justify-center">
            <div className="flex space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-accent' : 'bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats section - as a banner below the slider */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-primary/80 to-primary/90 backdrop-blur-sm py-5 z-10 hidden md:block border-t border-white/10">
        <div className="container mx-auto">
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center text-white">
              <div className="text-3xl font-bold text-accent mb-1 drop-shadow-md">500+</div>
              <p className="text-xs text-white/90 font-medium">Students Helped</p>
            </div>
            <div className="text-center text-white">
              <div className="text-3xl font-bold text-accent mb-1 drop-shadow-md">95%</div>
              <p className="text-xs text-white/90 font-medium">Success Rate</p>
            </div>
            <div className="text-center text-white">
              <div className="text-3xl font-bold text-accent mb-1 drop-shadow-md">50+</div>
              <p className="text-xs text-white/90 font-medium">Partner Universities</p>
            </div>
            <div className="text-center text-white">
              <div className="text-3xl font-bold text-accent mb-1 drop-shadow-md">10+</div>
              <p className="text-xs text-white/90 font-medium">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}