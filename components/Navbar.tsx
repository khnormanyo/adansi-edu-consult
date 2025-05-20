'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
        document.documentElement.style.setProperty('--current-navbar-height', 'var(--navbar-height-scrolled)');
      } else {
        setIsScrolled(false);
        document.documentElement.style.setProperty('--current-navbar-height', 'var(--navbar-height)');
      }
    };
    
    // Set initial value
    document.documentElement.style.setProperty('--current-navbar-height', 'var(--navbar-height)');
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={`w-full fixed top-0 left-0 ${isScrolled ? 'bg-white/90 shadow-md' : 'bg-gradient-to-b from-black/70 to-black/30'} backdrop-blur-md z-[1000] transition-all duration-300`}>
      {/* Top Bar (Info Strip) */}
      <div className={`${isScrolled ? 'text-gray-800' : 'text-white'} transition-all duration-300 py-2`}>
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="hidden sm:flex flex-col sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4 text-xs">
              <div className={`flex items-center ${isScrolled ? 'text-gray-600 hover:text-gray-800' : 'text-white hover:text-gray-200'} transition-colors duration-200`}>
                <div className="h-6 w-6 rounded-full flex items-center justify-center bg-green-500/20 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span>+1 (044) 123 456 789</span>
              </div>
              <div className="hidden sm:flex items-center mx-1">
                <span className={`${isScrolled ? 'text-gray-400' : 'text-gray-300'}`}>•</span>
              </div>
              <div className={`hidden md:flex items-center ${isScrolled ? 'text-gray-600 hover:text-gray-800' : 'text-white hover:text-gray-200'} transition-colors duration-200`}>
                <div className="h-6 w-6 rounded-full flex items-center justify-center bg-green-500/20 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>27 Division St, New York, USA</span>
              </div>
              <div className="hidden md:flex items-center mx-1">
                <span className={`${isScrolled ? 'text-gray-400' : 'text-gray-300'}`}>•</span>
              </div>
              <div className={`hidden sm:flex items-center ${isScrolled ? 'text-gray-600 hover:text-gray-800' : 'text-white hover:text-gray-200'} transition-colors duration-200`}>
                <div className="h-6 w-6 rounded-full flex items-center justify-center bg-green-500/20 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span>info@adansiedu.com</span>
              </div>
            </div>
            <div className="flex space-x-3">
              <a href="#" className={`${isScrolled ? 'text-gray-600 hover:text-gray-800' : 'text-white hover:text-gray-200'} transition-colors duration-200`}>
                <div className="h-8 w-8 rounded-full flex items-center justify-center bg-green-500/20 hover:bg-green-500/30 transition-colors duration-200">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"></path>
                  </svg>
                </div>
              </a>
              <a href="#" className={`${isScrolled ? 'text-gray-600 hover:text-gray-800' : 'text-white hover:text-gray-200'} transition-colors duration-200`}>
                <div className="h-8 w-8 rounded-full flex items-center justify-center bg-green-500/20 hover:bg-green-500/30 transition-colors duration-200">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184c-.896-.96-2.173-1.56-3.591-1.56-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                  </svg>
                </div>
              </a>
              <a href="#" className={`${isScrolled ? 'text-gray-600 hover:text-gray-800' : 'text-white hover:text-gray-200'} transition-colors duration-200`}>
                <div className="h-8 w-8 rounded-full flex items-center justify-center bg-green-500/20 hover:bg-green-500/30 transition-colors duration-200">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </div>
              </a>
              <a href="#" className={`${isScrolled ? 'text-gray-600 hover:text-gray-800' : 'text-white hover:text-gray-200'} transition-colors duration-200`}>
                <div className="h-8 w-8 rounded-full flex items-center justify-center bg-green-500/20 hover:bg-green-500/30 transition-colors duration-200">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Navigation Section */}
      <div className={`${isScrolled ? 'bg-white text-gray-800 py-2' : 'py-4'} transition-all duration-300`}>
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center pl-2 py-2">
                <div className="relative flex items-center">
                  <img 
                    src="/images/logo.png" 
                    alt="Adansi Education" 
                    className="h-10 sm:h-12 w-auto transition-all duration-300"
                  />
                  <span className="border-l-4 border-accent h-10 mx-4 transition-all duration-300 hidden sm:block"></span>
                  <span className={`${isScrolled ? 'text-gray-600' : 'text-gray-300'} text-sm uppercase tracking-wider font-medium transition-colors duration-300 hidden sm:block`}>Study Abroad</span>
                </div>
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center">
              <div className="flex space-x-6">
                <div className="group relative">
                  <Link href="/" className={`${isScrolled ? 'text-gray-800' : 'text-white'} uppercase font-bold text-[15px] hover:text-accent transition-colors flex items-center`}>
                    HOME
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border-t-2 border-green-500">
                    <div className="py-2">
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-accent">Home 1</Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-accent">Home 2</Link>
                    </div>
                  </div>
                </div>
                
                <div className="group relative">
                  <Link href="/about" className={`${isScrolled ? 'text-gray-800' : 'text-white'} uppercase font-bold text-[15px] hover:text-accent transition-colors flex items-center`}>
                    ABOUT
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border-t-2 border-green-500">
                    <div className="py-2">
                      <Link href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-accent">About Us</Link>
                      <Link href="/about/team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-accent">Our Team</Link>
                    </div>
                  </div>
                </div>
                
                <div className="group relative">
                  <Link href="/packages" className={`${isScrolled ? 'text-gray-800' : 'text-white'} uppercase font-bold text-[15px] hover:text-accent transition-colors flex items-center`}>
                    PACKAGES
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border-t-2 border-green-500">
                    <div className="py-2">
                      <Link href="/packages#1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-accent">University Application</Link>
                      <Link href="/packages#2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-accent">Scholarship Application</Link>
                      <Link href="/packages#3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-accent">Study Abroad Preparation</Link>
                      <Link href="/packages" className="block px-4 py-2 text-sm text-accent hover:bg-gray-100">View All Packages</Link>
                    </div>
                  </div>
                </div>
                
                <div className="group relative">
                  <Link href="/consult" className={`${isScrolled ? 'text-gray-800' : 'text-white'} uppercase font-bold text-[15px] hover:text-accent transition-colors flex items-center`}>
                    CONSULT
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border-t-2 border-green-500">
                    <div className="py-2">
                      <Link href="/consult/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-accent">Our Services</Link>
                      <Link href="/consult/book" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-accent">Book a Session</Link>
                    </div>
                  </div>
                </div>
                
                <div className="group relative">
                  <Link href="/contact" className={`${isScrolled ? 'text-gray-800' : 'text-white'} uppercase font-bold text-[15px] hover:text-accent transition-colors flex items-center`}>
                    CONTACT
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border-t-2 border-green-500">
                    <div className="py-2">
                      <Link href="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-accent">Contact Us</Link>
                      <Link href="/contact/locations" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-accent">Our Locations</Link>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Search and Grid Icons */}
              <div className="flex items-center ml-8 space-x-4">
                <button className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-green-500 transition-colors duration-200`}>
                  <div className={`h-9 w-9 rounded-full ${isScrolled ? 'border-gray-300 hover:border-green-500' : 'border-white/70 hover:border-green-500'} border flex items-center justify-center transition-all duration-200 hover:shadow-md`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </button>
                <button className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-green-500 transition-colors duration-200 p-2 rounded-md hover:bg-white/10`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`${isScrolled ? 'text-gray-800' : 'text-white'} focus:outline-none transition-colors p-2 rounded-md hover:bg-white/10`}
              >
                {isMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`lg:hidden ${isScrolled ? 'bg-white/95' : 'bg-black/90'} backdrop-blur-md shadow-md ${isMenuOpen ? 'block' : 'hidden'} transition-all duration-300 max-h-[80vh] overflow-y-auto`}>
        <div className="container mx-auto py-4">
          <div className="flex flex-col space-y-4">
            <div className="relative">
              <button 
                className={`w-full flex justify-between items-center ${isScrolled ? 'text-gray-800 border-gray-200' : 'text-white border-gray-700'} py-3 border-b transition-colors font-bold text-[15px]`}
                onClick={() => {
                  const submenu = document.getElementById('home-submenu');
                  if (submenu) submenu.classList.toggle('hidden');
                }}
              >
                <span className="uppercase">HOME</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div id="home-submenu" className="hidden pl-4 pt-3 pb-2 space-y-2 border-l-2 border-green-500 ml-2 mt-2">
                <Link href="/" className={`block ${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'} py-2 transition-colors hover:pl-1 duration-200`} onClick={() => setIsMenuOpen(false)}>
                  Home 1
                </Link>
                <Link href="/" className={`block ${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'} py-2 transition-colors hover:pl-1 duration-200`} onClick={() => setIsMenuOpen(false)}>
                  Home 2
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <button 
                className={`w-full flex justify-between items-center ${isScrolled ? 'text-gray-800 border-gray-200' : 'text-white border-gray-700'} py-3 border-b transition-colors font-bold text-[15px]`}
                onClick={() => {
                  const submenu = document.getElementById('about-submenu');
                  if (submenu) submenu.classList.toggle('hidden');
                }}
              >
                <span className="uppercase">ABOUT</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div id="about-submenu" className="hidden pl-4 pt-3 pb-2 space-y-2 border-l-2 border-green-500 ml-2 mt-2">
                <Link href="/about" className={`block ${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'} py-2 transition-colors hover:pl-1 duration-200`} onClick={() => setIsMenuOpen(false)}>
                  About Us
                </Link>
                <Link href="/about/team" className={`block ${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'} py-2 transition-colors hover:pl-1 duration-200`} onClick={() => setIsMenuOpen(false)}>
                  Our Team
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <button 
                className={`w-full flex justify-between items-center ${isScrolled ? 'text-gray-800 border-gray-200' : 'text-white border-gray-700'} py-3 border-b transition-colors font-bold text-[15px]`}
                onClick={() => {
                  const submenu = document.getElementById('packages-submenu');
                  if (submenu) submenu.classList.toggle('hidden');
                }}
              >
                <span className="uppercase">PACKAGES</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div id="packages-submenu" className="hidden pl-4 pt-3 pb-2 space-y-2 border-l-2 border-green-500 ml-2 mt-2">
                <Link href="/packages#1" className={`block ${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'} py-2 transition-colors hover:pl-1 duration-200`} onClick={() => setIsMenuOpen(false)}>
                  University Application
                </Link>
                <Link href="/packages#2" className={`block ${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'} py-2 transition-colors hover:pl-1 duration-200`} onClick={() => setIsMenuOpen(false)}>
                  Scholarship Application
                </Link>
                <Link href="/packages#3" className={`block ${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'} py-2 transition-colors hover:pl-1 duration-200`} onClick={() => setIsMenuOpen(false)}>
                  Study Abroad Preparation
                </Link>
                <Link href="/packages" className={`block ${isScrolled ? 'text-accent' : 'text-accent'} py-1 transition-colors`} onClick={() => setIsMenuOpen(false)}>
                  View All Packages
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <button 
                className={`w-full flex justify-between items-center ${isScrolled ? 'text-gray-800 border-gray-200' : 'text-white border-gray-700'} py-3 border-b transition-colors font-bold text-[15px]`}
                onClick={() => {
                  const submenu = document.getElementById('consult-submenu');
                  if (submenu) submenu.classList.toggle('hidden');
                }}
              >
                <span className="uppercase">CONSULT</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div id="consult-submenu" className="hidden pl-4 pt-3 pb-2 space-y-2 border-l-2 border-green-500 ml-2 mt-2">
                <Link href="/consult/services" className={`block ${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'} py-2 transition-colors hover:pl-1 duration-200`} onClick={() => setIsMenuOpen(false)}>
                  Our Services
                </Link>
                <Link href="/consult/book" className={`block ${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'} py-2 transition-colors hover:pl-1 duration-200`} onClick={() => setIsMenuOpen(false)}>
                  Book a Session
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <button 
                className={`w-full flex justify-between items-center ${isScrolled ? 'text-gray-800 border-gray-200' : 'text-white border-gray-700'} py-3 border-b transition-colors font-bold text-[15px]`}
                onClick={() => {
                  const submenu = document.getElementById('contact-submenu');
                  if (submenu) submenu.classList.toggle('hidden');
                }}
              >
                <span className="uppercase">CONTACT</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div id="contact-submenu" className="hidden pl-4 pt-3 pb-2 space-y-2 border-l-2 border-green-500 ml-2 mt-2">
                <Link href="/contact" className={`block ${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'} py-2 transition-colors hover:pl-1 duration-200`} onClick={() => setIsMenuOpen(false)}>
                  Contact Us
                </Link>
                <Link href="/contact/locations" className={`block ${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'} py-2 transition-colors hover:pl-1 duration-200`} onClick={() => setIsMenuOpen(false)}>
                  Our Locations
                </Link>
              </div>
            </div>
            
            {/* Search and Grid controls for mobile */}
            <div className="flex items-center justify-start space-x-4 pt-4">
              <button className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-green-500 transition-colors duration-200`}>
                <div className={`h-9 w-9 rounded-full ${isScrolled ? 'border-gray-300 hover:border-green-500' : 'border-white/70 hover:border-green-500'} border flex items-center justify-center transition-all duration-200 hover:shadow-md`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </button>
              <button className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-green-500 transition-colors duration-200 p-2 rounded-md hover:bg-white/10`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}