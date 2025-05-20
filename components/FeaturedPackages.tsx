import Link from 'next/link';

export default function FeaturedPackages() {
  const packages = [
    {
      id: 1,
      title: 'University Application Support',
      category: 'Application',
      price: '$300',
      duration: '3-6 months',
      image: '/placeholder1.jpg',
      description: 'Comprehensive guidance through the entire university application process, including institution selection, document preparation, and application submission.',
      features: ['Institution matching', 'Application strategy', 'Document review', 'Interview preparation'],
      popular: true,
    },
    {
      id: 2,
      title: 'Scholarship Application',
      category: 'Financial Aid',
      price: '$250',
      duration: '2-4 months',
      image: '/placeholder2.jpg',
      description: 'Expert assistance in identifying and applying for scholarships that match your profile, increasing your chances of securing financial support.',
      features: ['Scholarship research', 'Application preparation', 'Essay editing', 'Follow-up support'],
      popular: false,
    },
    {
      id: 3,
      title: 'Study Abroad Preparation',
      category: 'International',
      price: '$350',
      duration: '3-5 months',
      image: '/placeholder3.jpg',
      description: 'Comprehensive package to prepare students for international education, including visa guidance, pre-departure orientation, and cultural adaptation support.',
      features: ['Visa application support', 'Accommodation guidance', 'Cultural orientation', 'Travel preparation'],
      popular: false,
    },
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-primary/5 rounded-full"></div>
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-accent/5 rounded-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-accent/10 rounded-full text-accent text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-4xl font-bold text-primary mb-6">Featured Education Packages</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully designed packages tailored to meet your educational consulting needs.
            Each package is customizable to fit your specific requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div 
              key={pkg.id} 
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow relative"
            >
              {/* Image container */}
              <div className="h-56 bg-gray-200 relative overflow-hidden">
                {/* Replace with actual image */}
                <div className="h-full w-full flex items-center justify-center bg-primary/10">
                  <p className="text-primary font-medium">Package Image</p>
                </div>
                
                {/* Price tag */}
                <div className="absolute top-5 left-5 bg-white py-1 px-3 rounded-full text-primary font-semibold text-sm">
                  {pkg.price}
                </div>
                
                {/* Category tag */}
                <div className="absolute top-5 right-5 bg-accent py-1 px-3 rounded-full text-white font-medium text-xs">
                  {pkg.category}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-primary">{pkg.title}</h3>
                  <div className="flex items-center text-gray-500 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {pkg.duration}
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-5 line-clamp-2">
                  {pkg.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <svg 
                        className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <Link
                    href={`/packages#${pkg.id}`}
                    className={`py-2.5 px-4 rounded-md font-medium text-sm transition-colors ${
                      pkg.popular 
                        ? 'bg-accent hover:bg-amber-600 text-white' 
                        : 'bg-primary hover:bg-primary/90 text-white'
                    }`}
                  >
                    Learn More
                  </Link>
                  
                  <a href="/contact" className="text-primary hover:text-accent transition-colors text-sm font-medium">
                    Get Quote
                  </a>
                </div>
              </div>
              
              {/* Popular ribbon */}
              {pkg.popular && (
                <div className="absolute -right-8 top-6 bg-accent text-white py-1 px-8 transform rotate-45 shadow-md">
                  <span className="text-xs font-semibold">POPULAR</span>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/packages"
            className="inline-flex items-center py-3 px-6 bg-primary hover:bg-primary/90 text-white rounded-md font-medium transition-colors"
          >
            View All Packages
            <svg 
              className="ml-2 h-5 w-5" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </Link>
        </div>
        
        {/* Call to action banner */}
        <div className="mt-24 relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-primary"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-800 opacity-90"></div>
          
          <div className="relative z-10 py-12 px-8 md:py-16 md:px-16 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Start Your Educational Journey?</h3>
              <p className="text-white/80 max-w-xl">
                Get personalized guidance and support to achieve your academic goals. Our expert consultants are ready to help.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-white hover:bg-gray-100 text-primary py-3 px-6 rounded-md font-semibold transition-colors whitespace-nowrap"
              >
                Contact Us
              </Link>
              <Link
                href="/packages"
                className="bg-accent hover:bg-amber-600 text-white py-3 px-6 rounded-md font-semibold transition-colors whitespace-nowrap"
              >
                Explore Packages
              </Link>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3"></div>
        </div>
      </div>
    </section>
  );
}