export default function About() {
  return (
    <div className="bg-gray-50">
      {/* About Hero Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About Adansi Edu Consult</h1>
            <p className="text-lg">
              Dedicated to empowering students and institutions through educational excellence and guidance.
            </p>
          </div>
        </div>
      </section>
      
      {/* About Block */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white rounded-lg shadow-lg p-2 h-96">
                {/* This would be replaced with an actual image */}
                <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500">
                  <p>Company image would go here</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2010, Adansi Edu Consult was established with a vision to transform educational consulting 
                in Ghana and across Africa. Our founder, recognizing the challenges students faced in navigating the 
                complex landscape of higher education opportunities, set out to create a service that would bridge 
                the gap between ambitious students and quality education.
              </p>
              <p className="text-gray-700 mb-4">
                Over the years, we have grown from a small advisory service to a comprehensive educational consulting 
                firm, helping thousands of students achieve their academic dreams both locally and internationally.
              </p>
              <p className="text-gray-700 mb-4">
                Today, Adansi Edu Consult stands as a beacon of educational excellence, committed to providing 
                personalized guidance, innovative solutions, and unwavering support to students at every stage of 
                their academic journey.
              </p>
              
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Our Vision</h3>
                  <p className="text-gray-700">
                    To be the leading educational consulting firm in Africa, recognized for excellence in guiding students 
                    toward educational success and global opportunities.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Our Mission</h3>
                  <p className="text-gray-700">
                    To empower students with knowledge, resources, and support that enable them to access quality 
                    education and achieve their academic and career goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Adansi Edu Consult.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3 text-center">Integrity</h3>
              <p className="text-gray-700 text-center">
                We uphold the highest standards of honesty, transparency, and ethical conduct in all our interactions.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3 text-center">Excellence</h3>
              <p className="text-gray-700 text-center">
                We strive for excellence in everything we do, constantly improving our services to exceed expectations.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3 text-center">Student-Centered</h3>
              <p className="text-gray-700 text-center">
                We place students at the heart of everything we do, tailoring our approach to meet their unique needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals who make our mission possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((member) => (
              <div key={member} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 bg-gray-200">
                  {/* This would be replaced with an actual team member image */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-1">Team Member Name</h3>
                  <p className="text-gray-600 mb-4">Position Title</p>
                  <p className="text-gray-700">
                    Brief description about the team member's experience and expertise.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}