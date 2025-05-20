'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import required Swiper modules
import { FreeMode, Autoplay, A11y, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

// Import React hooks
import { useRef, useState, useEffect } from 'react';
import type { SwiperRef } from 'swiper/react';

export default function DestinationCountries() {
  const [isHovering, setIsHovering] = useState(false);
  
  // Reference to access swiper instance
  const swiperRef = useRef<SwiperRef>(null);
  
  // Initialize linear transition class on mount
  useEffect(() => {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    if (swiperWrapper) {
      swiperWrapper.classList.add('linear-transition');
    }
  }, []);
  
  // Handle pause and resume on hover
  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;
    
    if (swiperInstance && swiperInstance.autoplay) {
      if (isHovering) {
        // Immediately stop autoplay when mouse enters
        swiperInstance.autoplay.stop();
        
        // Apply non-linear transition for better visual appearance when paused
        const swiperWrapper = document.querySelector('.swiper-wrapper');
        if (swiperWrapper) {
          swiperWrapper.classList.remove('linear-transition');
        }
        
        // Add a visual indicator that the carousel is paused (optional)
        swiperInstance.el.classList.add('carousel-paused');
      } else {
        // Small delay when resuming to prevent flicker and ensure smooth transition
        const resumeTimeout = setTimeout(() => {
          // Start autoplay when mouse leaves
          swiperInstance.autoplay.start();
          
          // Restore the linear transition for smooth scrolling
          const swiperWrapper = document.querySelector('.swiper-wrapper');
          if (swiperWrapper) {
            swiperWrapper.classList.add('linear-transition');
          }
          
          // Remove the paused visual indicator
          swiperInstance.el.classList.remove('carousel-paused');
        }, 50);
        
        return () => clearTimeout(resumeTimeout);
      }
    }
    
    // Cleanup on component unmount
    return () => {
      if (swiperInstance && swiperInstance.autoplay) {
        swiperInstance.autoplay.stop();
      }
    };
  }, [isHovering]);

  const countries = [
    {
      id: 1,
      name: "United Kingdom",
      image: "/images/flags/uk.png",
      flagEmoji: "🇬🇧",
      description: "Study in the UK",
      link: "/packages"
    },
    {
      id: 2,
      name: "United States",
      image: "/images/flags/usa.png",
      flagEmoji: "🇺🇸",
      description: "Study in the USA",
      link: "/packages"
    },
    {
      id: 3,
      name: "Turkey",
      image: "/images/flags/turkey.png",
      flagEmoji: "🇹🇷",
      description: "Study in Turkey",
      link: "/packages"
    },
    {
      id: 4,
      name: "Canada",
      image: "/images/flags/canada.png",
      flagEmoji: "🇨🇦",
      description: "Study in Canada",
      link: "/packages"
    },
    {
      id: 5,
      name: "Australia",
      image: "/images/flags/canada.png", // Using Canada's flag as fallback
      flagEmoji: "🇦🇺",
      description: "Study in Australia",
      link: "/packages"
    },
    {
      id: 6,
      name: "Germany",
      image: "/images/flags/canada.png", // Using Canada's flag as fallback
      flagEmoji: "🇩🇪",
      description: "Study in Germany",
      link: "/packages"
    },
    {
      id: 7,
      name: "France",
      image: "/images/flags/canada.png", // Using Canada's flag as fallback
      flagEmoji: "🇫🇷",
      description: "Study in France",
      link: "/packages"
    },
    {
      id: 8,
      name: "Spain",
      image: "/images/flags/canada.png", // Using Canada's flag as fallback
      flagEmoji: "🇪🇸",
      description: "Study in Spain",
      link: "/packages"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 right-32 w-24 h-24 rounded-full bg-primary/5"></div>
        <div className="absolute bottom-20 left-32 w-32 h-32 rounded-full bg-accent/5"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-accent/10 rounded-full text-accent text-sm font-medium mb-4">
            Study Destinations
          </div>
          <h2 className="text-4xl font-bold text-primary mb-6">Popular Countries</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore educational opportunities in these prime international destinations. Our consultancy services cover applications to institutions in these countries and more.
          </p>
        </div>
        
        <div 
          className="relative overflow-hidden carousel-container cursor-pointer group" 
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={() => setIsHovering(true)}
          onTouchEnd={() => setIsHovering(false)}
        >
          {/* Custom Navigation Buttons */}
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-primary hover:text-accent shadow-md rounded-r-full w-10 h-10 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary/50 md:w-12 md:h-12 ml-2"
            onClick={() => swiperRef.current?.swiper.slidePrev()}
            aria-label="Scroll left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-primary hover:text-accent shadow-md rounded-l-full w-10 h-10 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary/50 md:w-12 md:h-12 mr-2"
            onClick={() => swiperRef.current?.swiper.slideNext()}
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <Swiper
            ref={swiperRef}
            modules={[FreeMode, Autoplay, A11y, Navigation]}
            spaceBetween={24}
            slidesPerView={1.5}
            centeredSlides={false}
            loop={true}
            freeMode={{
              enabled: true,
              sticky: false,
              momentum: true,
              momentumRatio: 0.4,
            }}
            speed={8000}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
              pauseOnMouseEnter: false, // We're handling this manually with our state
              stopOnLastSlide: false,
              waitForTransition: false,
            }}
            navigation={{
              enabled: true,
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            breakpoints={{
              480: { slidesPerView: 1.8, spaceBetween: 20 },
              640: { slidesPerView: 2.5, spaceBetween: 24 },
              768: { slidesPerView: 3.2, spaceBetween: 24 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
              1280: { slidesPerView: 5, spaceBetween: 30 }
            }}
            className="py-4 pl-4"
          >
            {/* Double the country items to ensure smooth continuous loop */}
            {[...countries, ...countries].map((country, index) => (
              <SwiperSlide key={`${country.id}-${index}`}>
                <div 
                  className="group h-full"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <a 
                    href={country.link} 
                    className="block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full border border-gray-50"
                  >
                    <div className="flex flex-col items-center justify-center py-8 px-4 bg-white">
                      <div className="w-28 h-28 rounded-full overflow-hidden mb-5 border-4 border-gray-100 shadow-md flex items-center justify-center bg-gray-50 transform group-hover:scale-105 transition-all duration-300 group-hover:border-accent/20">
                        {country.id <= 4 ? (
                          <div className="w-full h-full flex items-center justify-center overflow-hidden">
                            <img 
                              src={country.image} 
                              alt={`Flag of ${country.name}`} 
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        ) : (
                          <div className="flex items-center justify-center w-full h-full">
                            <span className="text-6xl" role="img" aria-label={`Flag of ${country.name}`}>{country.flagEmoji}</span>
                          </div>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold text-primary mb-1 text-center">{country.name}</h3>
                      <p className="text-gray-600 text-sm mb-4 text-center">{country.description}</p>
                      <div className="mt-auto">
                        <span className="text-accent flex items-center text-sm font-medium">
                          Learn more
                          <svg className="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      
      {/* Custom styles for smooth scrolling carousel */}
      <style jsx global>{`
        .swiper-wrapper {
          transition-timing-function: ease-out !important;
          transition-duration: 400ms !important;
        }
        
        .swiper-wrapper.linear-transition {
          transition-timing-function: linear !important;
          transition-duration: 8000ms !important;
        }
        
        .carousel-paused .swiper-slide {
          position: relative;
          overflow: visible;
        }
        
        /* Subtle indicator of paused state (optional) */
        .carousel-paused .swiper-slide-active::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          width: 30%;
          height: 3px;
          background-color: #f99f1b; /* accent color */
          border-radius: 3px;
          opacity: 0.7;
        }
        
        /* For touch devices */
        @media (hover: none) {
          .swiper-wrapper {
            transition-timing-function: ease-out !important;
          }
          
          /* Always show navigation buttons on mobile */
          .carousel-container button {
            opacity: 1 !important;
            width: 40px !important;
            height: 40px !important;
            background-color: rgba(255, 255, 255, 0.9) !important;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1) !important;
          }
          
          .carousel-container button:active {
            background-color: #f9f9f9 !important;
            transform: translateY(-50%) scale(0.95) !important;
          }
        }
        
        /* Better touch areas for mobile navigation */
        @media (max-width: 768px) {
          .carousel-container button.absolute.left-0 {
            left: 5px;
          }
          
          .carousel-container button.absolute.right-0 {
            right: 5px;
          }
        }
      `}</style>
    </section>
  );
}