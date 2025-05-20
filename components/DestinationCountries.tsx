'use client';

export default function DestinationCountries() {
  const countries = [
    {
      id: 1,
      name: "United Kingdom",
      image: "/images/flags/uk.png",
      link: "/packages"
    },
    {
      id: 2,
      name: "United States",
      image: "/images/flags/usa.png",
      link: "/packages"
    },
    {
      id: 3,
      name: "Turkey",
      image: "/images/flags/turkey.png",
      link: "/packages"
    },
    {
      id: 4,
      name: "Canada",
      image: "/images/flags/canada.png",
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
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-accent/10 rounded-full text-accent text-sm font-medium mb-4">
            Study Destinations
          </div>
          <h2 className="text-4xl font-bold text-primary mb-6">Popular Countries</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore educational opportunities in these prime international destinations. Our consultancy services cover applications to institutions in these countries and more.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {countries.map((country) => (
            <div key={country.id} className="group">
              <a 
                href={country.link} 
                className="block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={country.image} 
                    alt={`Flag of ${country.name}`} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 bg-white">
                  <h3 className="text-xl font-semibold text-primary mb-2">{country.name}</h3>
                  <p className="text-accent flex items-center">
                    Learn more
                    <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}