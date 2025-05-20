export default function Packages() {
  // This data would typically come from a CMS or database
  const packages = [
    {
      id: 1,
      title: 'University Application Support',
      category: 'Application',
      description: 'Comprehensive guidance through the entire university application process, including institution selection, document preparation, and application submission.',
      features: [
        'Personalized university selection based on academic profile',
        'Application strategy and timeline planning',
        'Document review and optimization',
        'Personal statement and essay guidance',
        'Interview preparation and coaching',
        'Application tracking and follow-up',
        'Admission decision guidance',
      ],
      price: '$300',
      popular: true,
    },
    {
      id: 2,
      title: 'Scholarship Application',
      category: 'Financial Aid',
      description: 'Expert assistance in identifying and applying for scholarships that match your profile, increasing your chances of securing financial support.',
      features: [
        'Scholarship opportunity research and matching',
        'Application preparation and document review',
        'Essay and personal statement editing',
        'Recommendation letter guidance',
        'Interview preparation',
        'Application submission and follow-up',
        'Alternative funding options guidance',
      ],
      price: '$250',
      popular: false,
    },
    {
      id: 3,
      title: 'Study Abroad Preparation',
      category: 'International',
      description: 'Comprehensive package to prepare students for international education, including visa guidance, pre-departure orientation, and cultural adaptation support.',
      features: [
        'Visa application guidance and documentation',
        'Accommodation search and recommendations',
        'Cultural orientation and adaptation training',
        'Travel preparation and checklist',
        'Insurance and healthcare guidance',
        'Banking and financial management advice',
        'Local support network connections',
      ],
      price: '$350',
      popular: false,
    },
    {
      id: 4,
      title: 'Career Counseling',
      category: 'Career',
      description: 'Professional guidance on career pathways, skills development, and job market preparation to align education with career goals.',
      features: [
        'Career assessment and profiling',
        'Industry and job market analysis',
        'Educational pathway planning',
        'Skills gap analysis and development plan',
        'Resume and LinkedIn profile development',
        'Interview skills and job application strategies',
        'Networking and professional development guidance',
      ],
      price: '$200',
      popular: false,
    },
    {
      id: 5,
      title: 'Test Preparation',
      category: 'Exams',
      description: 'Structured coaching and preparation for standardized tests like SAT, TOEFL, IELTS, GRE, and GMAT to achieve competitive scores.',
      features: [
        'Diagnostic assessment and personalized study plan',
        'Content review and knowledge building',
        'Test-taking strategies and techniques',
        'Practice tests and performance analysis',
        'Time management and stress reduction techniques',
        'Score improvement tracking',
        'Test day preparation guidance',
      ],
      price: '$280',
      popular: false,
    },
    {
      id: 6,
      title: 'Comprehensive Education Planning',
      category: 'Premium',
      description: 'All-inclusive package covering educational planning from high school through university, with ongoing support and guidance.',
      features: [
        'Long-term educational roadmap development',
        'Course selection and academic planning',
        'Extracurricular activity recommendations',
        'University application strategy',
        'Scholarship and financial aid planning',
        'Career alignment and internship guidance',
        'Ongoing mentorship and support',
      ],
      price: '$500',
      popular: true,
    },
  ];

  // Categories for filtering
  const categories = ['All', 'Application', 'Financial Aid', 'International', 'Career', 'Exams', 'Premium'];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Our Service Packages</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully designed packages tailored to meet your educational consulting needs.
            Each package is customizable to fit your specific requirements.
          </p>
        </div>
        
        {/* Category Filter - would be interactive with client-side JavaScript */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                category === 'All' 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div 
              key={pkg.id}
              id={`${pkg.id}`}
              className={`bg-white rounded-lg shadow-lg overflow-hidden border ${
                pkg.popular ? 'border-accent' : 'border-gray-200'
              }`}
            >
              {pkg.popular && (
                <div className="bg-accent text-white text-center py-2">
                  <p className="text-sm font-medium">Most Popular</p>
                </div>
              )}
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                    {pkg.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{pkg.title}</h3>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                
                <div className="mb-6">
                  <p className="text-2xl font-bold text-primary">{pkg.price}</p>
                  <p className="text-sm text-gray-500">One-time payment</p>
                </div>
                
                <div className="border-t border-gray-200 pt-6 mb-6">
                  <h4 className="font-medium text-gray-900 mb-4">What's included:</h4>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg 
                          className="h-5 w-5 text-accent mr-2 mt-0.5" 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                            clipRule="evenodd" 
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button
                  className={`block w-full text-center py-3 rounded-md font-medium transition-colors ${
                    pkg.popular 
                      ? 'bg-accent hover:bg-amber-600 text-white' 
                      : 'bg-primary hover:bg-primary/90 text-white'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Information */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can packages be customized?</h3>
              <p className="text-gray-700">
                Yes, all our packages can be tailored to meet your specific requirements. Contact us to discuss your needs.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if I need services from multiple packages?</h3>
              <p className="text-gray-700">
                We offer combination packages at discounted rates. Reach out to our team for personalized options.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer payment plans?</h3>
              <p className="text-gray-700">
                Yes, we offer flexible payment plans to make our services more accessible. Installment options are available.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What is your success rate?</h3>
              <p className="text-gray-700">
                We maintain a 85%+ success rate for university admissions and 70%+ for scholarship applications.
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 bg-primary text-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Personalized Guidance?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Our experts are ready to help you choose the right package or create a custom solution for your educational journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-primary hover:bg-gray-100 py-3 px-6 rounded-md font-medium transition-colors">
              Schedule a Consultation
            </button>
            <button className="bg-accent hover:bg-amber-600 text-white py-3 px-6 rounded-md font-medium transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}