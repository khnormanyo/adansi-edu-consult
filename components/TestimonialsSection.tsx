'use client';

import { useState } from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Paz Nyarko Awuah',
      role: 'Harvard University Admit',
      image: '/images/testimonials/person1.jpg', // Updated to actual image
      quote: 'Adansi Edu Consult was instrumental in helping me secure admission to Harvard. Their personalized guidance and strategic approach made all the difference in my application process.',
    },
    {
      id: 2,
      name: 'Prince Asamoah',
      role: 'Full Scholarship Recipient',
      image: '/images/testimonials/person2.jpg', // Updated to actual image
      quote: 'Thanks to Adansi Edu Consult, I received a full scholarship to my dream university. Their scholarship experts knew exactly how to highlight my strengths and achievements.',
    },
    {
      id: 3,
      name: 'Benard Annor Yawson',
      role: 'International Student from Ghana',
      image: '/images/testimonials/person3.jpg', // Updated to actual image
      quote: 'Navigating the international education system seemed overwhelming until I found Adansi Edu Consult. They guided me through every step of the process, from university selection to visa application.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-gray-100 rounded-full opacity-50"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gray-100 rounded-full opacity-50"></div>
      <div className="absolute top-1/4 right-10 w-20 h-20 bg-accent/10 rounded-full"></div>
      <div className="absolute bottom-1/4 left-10 w-16 h-16 bg-primary/10 rounded-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-accent/10 rounded-full text-accent text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 className="text-4xl font-bold text-primary mb-6">What Our Students Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from students who have achieved their educational goals with our guidance and support.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {/* Quote icon */}
            <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-accent rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-2 flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-accent/20 mb-6">
                  {/* Student image */}
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-primary">{testimonials[activeIndex].name}</h3>
                <p className="text-accent">{testimonials[activeIndex].role}</p>
                
                <div className="mt-8 flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === activeIndex ? 'bg-accent' : 'bg-gray-300'
                      }`}
                      aria-label={`View testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="md:col-span-3">
                <blockquote className="text-gray-700 text-lg italic leading-relaxed mb-8">
                  "{testimonials[activeIndex].quote}"
                </blockquote>
                
                <div className="flex justify-end space-x-4">
                  <button 
                    onClick={handlePrev}
                    className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button 
                    onClick={handleNext}
                    className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative pattern at bottom */}
          <div className="flex justify-center mt-6 space-x-3">
            <div className="w-16 h-2 rounded-full bg-accent/30"></div>
            <div className="w-4 h-2 rounded-full bg-accent/50"></div>
            <div className="w-8 h-2 rounded-full bg-accent/20"></div>
          </div>
        </div>
        
        {/* Achievement stats */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <p className="text-gray-600">Students Helped</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="text-4xl font-bold text-primary mb-2">95%</div>
            <p className="text-gray-600">Success Rate</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <p className="text-gray-600">Partner Universities</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="text-4xl font-bold text-primary mb-2">10+</div>
            <p className="text-gray-600">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}