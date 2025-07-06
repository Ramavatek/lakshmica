'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const heroHeight = window.innerHeight;
      
      // Show header when scrolled past 80% of hero section
      setIsScrolled(scrollTop > heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Modern Professional Header - Hidden on Hero, Visible on Scroll */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200 translate-y-0' 
          : 'bg-transparent border-b border-transparent -translate-y-full'
      }`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img 
                  src="/image.png" 
                  alt="Lakshmica Logo" 
                  className="w-12 h-12 object-contain transition-transform hover:scale-105"
                  style={{mixBlendMode: 'multiply'}}
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold text-gray-800" style={{fontFamily: 'Times New Roman, serif'}}>
                  Lakshmica
                </h1>
                <p className="text-sm text-gray-500 font-medium tracking-wide">ENTERPRISES</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <a 
                href="#home" 
                className="px-4 py-2 text-gray-700 hover:text-orange-600 font-medium transition-all duration-300 hover:bg-orange-50 rounded-lg"
              >
                Home
              </a>
              <Link 
                href="/cattle-feed" 
                className="px-4 py-2 text-gray-700 hover:text-green-600 font-medium transition-all duration-300 hover:bg-green-50 rounded-lg"
              >
                Cattle Feed
              </Link>
              <Link 
                href="/poultry-feed" 
                className="px-4 py-2 text-gray-700 hover:text-orange-600 font-medium transition-all duration-300 hover:bg-orange-50 rounded-lg"
              >
                Poultry Feed
              </Link>
              <a 
                href="#about" 
                className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:bg-blue-50 rounded-lg"
              >
                About
              </a>
              <a 
                href="#contact" 
                className="px-4 py-2 text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 hover:bg-purple-50 rounded-lg"
              >
                Contact
              </a>
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <a 
                href="#contact" 
                className="hidden md:inline-flex bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Get Quote
              </a>
              
              {/* Modern Mobile Menu Button */}
              <button 
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <span className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                  <span className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>

          {/* Modern Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md absolute top-full left-0 right-0 shadow-lg">
              <div className="py-4 space-y-1">
                <a 
                  href="#home" 
                  className="block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 font-medium transition-all duration-200 rounded-lg mx-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
                <Link 
                  href="/cattle-feed" 
                  className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 font-medium transition-all duration-200 rounded-lg mx-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cattle Feed
                </Link>
                <Link 
                  href="/poultry-feed" 
                  className="block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 font-medium transition-all duration-200 rounded-lg mx-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Poultry Feed
                </Link>
                <a 
                  href="#about" 
                  className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-all duration-200 rounded-lg mx-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="#contact" 
                  className="block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 font-medium transition-all duration-200 rounded-lg mx-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
                <div className="px-6 py-3">
                  <a 
                    href="#contact" 
                    className="block w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold text-center hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section with Background Image */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/bg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        {/* Professional Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>

        {/* Content with Professional Styling */}
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          {/* Centered Logo */}
          <div className="mb-12">
            <img 
              src="/image.png" 
              alt="Lakshmica Logo" 
              className="mx-auto mb-8 object-contain transform hover:scale-105 transition-all duration-500"
              style={{width: '240px', height: '240px', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))'}}
            />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" 
              style={{
                fontFamily: 'Times New Roman, serif',
                textShadow: '2px 2px 8px rgba(0,0,0,0.7)'
              }}>
            <span className="block text-white">
              Lakshmica Enterprises
            </span>
          </h1>

          {/* Professional Subheading */}
          <div className="relative mb-8">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-orange-200 tracking-wide">
              Premium Cattle Feed & Poultry Feed Solutions
            </h2>
            <div className="w-24 h-0.5 bg-orange-400 mx-auto mt-4"></div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-200">
            Delivering excellence in animal nutrition with scientifically formulated feeds 
            designed to enhance productivity, health, and sustainable farming practices.
          </p>

          {/* Professional CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/cattle-feed" 
              className="group bg-black/40 backdrop-blur-sm border border-green-400/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600/90 hover:border-green-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-500/25 min-w-[200px]"
            >
              <span className="flex items-center justify-center gap-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
                </svg>
                Cattle Feed Solutions
              </span>
            </Link>
            <Link 
              href="/poultry-feed" 
              className="group bg-black/40 backdrop-blur-sm border border-orange-400/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600/90 hover:border-orange-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 min-w-[200px]"
            >
              <span className="flex items-center justify-center gap-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9l-5 4.87 1.18 6.88L12 17.77l-6.18 2.98L7 14.87 2 9l6.91-1.74L12 2z"/>
                </svg>
                Poultry Feed Solutions
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section - Professional & Sophisticated */}
      <section id="about" className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Premium Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-orange-500/5 to-green-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent">
                  About Lakshmica Enterprises
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Excellence in animal nutrition through scientific innovation and decades of expertise in livestock feed solutions.
              </p>
            </div>

            {/* Professional Cards */}
            <div className="grid lg:grid-cols-2 gap-12 mb-20">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-white transform hover:-translate-y-2 transition-all duration-500 shadow-2xl hover:shadow-green-500/25 hover:bg-white/15">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
                      </svg>
                    </div>
                    <span className="text-green-300 text-sm font-bold bg-green-400/20 px-4 py-2 rounded-full border border-green-400/30">PREMIUM</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-green-300 group-hover:text-green-200 transition-colors">Cattle Feed Solutions</h3>
                  <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                    Advanced nutritional formulations for dairy cows, beef cattle, calves, and heifers. Our feeds are designed to optimize growth, milk production, and overall livestock health.
                  </p>
                  <Link href="/cattle-feed" className="inline-flex items-center text-green-300 hover:text-green-200 transition-colors font-semibold text-lg group">
                    <span>Explore Products</span>
                    <svg className="w-6 h-6 ml-2 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                    </svg>
                  </Link>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-400/50 rounded-3xl transition-all duration-500"></div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-white transform hover:-translate-y-2 transition-all duration-500 shadow-2xl hover:shadow-orange-500/25 hover:bg-white/15">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9l-5 4.87 1.18 6.88L12 17.77l-6.18 2.98L7 14.87 2 9l6.91-1.74L12 2z"/>
                      </svg>
                    </div>
                    <span className="text-orange-300 text-sm font-bold bg-orange-400/20 px-4 py-2 rounded-full border border-orange-400/30">PREMIUM</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-orange-300 group-hover:text-orange-200 transition-colors">Poultry Feed Solutions</h3>
                  <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                    Scientifically balanced nutrition for broilers, layers, breeders, and specialty birds. Formulated to maximize egg production, growth rates, and feed conversion efficiency.
                  </p>
                  <Link href="/poultry-feed" className="inline-flex items-center text-orange-300 hover:text-orange-200 transition-colors font-semibold text-lg group">
                    <span>Explore Products</span>
                    <svg className="w-6 h-6 ml-2 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                    </svg>
                  </Link>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-400/50 rounded-3xl transition-all duration-500"></div>
                </div>
              </div>
            </div>

            {/* Professional Stats */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                  <div className="relative w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl hover:shadow-blue-500/25">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-blue-300 mb-3 group-hover:text-blue-200 transition-colors">Quality Assurance</h4>
                <p className="text-gray-400 text-lg leading-relaxed">Rigorous testing and certification protocols ensure premium quality standards</p>
              </div>
              
              <div className="text-center group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                  <div className="relative w-24 h-24 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl hover:shadow-green-500/25">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9l-5 4.87 1.18 6.88L12 17.77l-6.18 2.98L7 14.87 2 9l6.91-1.74L12 2z"/>
                    </svg>
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-green-300 mb-3 group-hover:text-green-200 transition-colors">Scientific Excellence</h4>
                <p className="text-gray-400 text-lg leading-relaxed">Research-driven nutritional formulations backed by veterinary science</p>
              </div>
              
              <div className="text-center group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                  <div className="relative w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl hover:shadow-purple-500/25">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                    </svg>
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-purple-300 mb-3 group-hover:text-purple-200 transition-colors">Expert Support</h4>
                <p className="text-gray-400 text-lg leading-relaxed">Professional consultation and guidance from industry specialists</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Why Choose Us?
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Quality, reliability, and results you can trust for your livestock nutrition needs
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {/* Feature Card 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 premium-card">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center group-hover:text-blue-300 transition-colors">Quality Assured</h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  Every batch is rigorously tested and certified to meet the highest nutritional standards in the industry
                </p>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/50 rounded-3xl transition-all duration-500"></div>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 premium-card">
                <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9l-5 4.87 1.18 6.88L12 17.77l-6.18 2.98L7 14.87 2 9l6.91-1.74L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center group-hover:text-green-300 transition-colors">Scientific Formulation</h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  Research-backed nutrition designed by expert animal nutritionists and veterinarians
                </p>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-400/50 rounded-3xl transition-all duration-500"></div>
              </div>
            </div>

            {/* Feature Card 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 premium-card">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center group-hover:text-orange-300 transition-colors">Expert Support</h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  Dedicated team of nutritionists and veterinarians providing personalized guidance 24/7
                </p>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-400/50 rounded-3xl transition-all duration-500"></div>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid md:grid-cols-4 gap-8 mt-20 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="text-4xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform">10+</div>
              <p className="text-gray-400">Years Experience</p>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform">500+</div>
              <p className="text-gray-400">Happy Farmers</p>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform">20+</div>
              <p className="text-gray-400">Feed Products</p>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform">99%</div>
              <p className="text-gray-400">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">We&apos;re Here to Help You Succeed in Your Livestock Journey</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500">
                <h3 className="text-3xl font-bold text-white mb-8 group-hover:text-orange-200 transition-colors">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-2">Address</h4>
                      <p className="text-gray-300 text-lg leading-relaxed">8-2-293/13, Banjara Hills Road No 14<br />Hyderabad, Telangana 50034</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-2">Phone</h4>
                      <p className="text-gray-300 text-lg leading-relaxed">+91 9866601714<br />+91 8125884442</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500">
                <h3 className="text-3xl font-bold text-white mb-8 group-hover:text-blue-200 transition-colors">Ready to Get Started?</h3>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  Contact us today for personalized feed recommendations and competitive pricing. Our experts are ready to help you optimize your livestock nutrition.
                </p>
                <div className="space-y-4">
                  <Link 
                    href="/cattle-feed" 
                    className="group/btn w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-green-500/25 transform hover:scale-105 flex items-center justify-center space-x-3"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
                    </svg>
                    <span>View Cattle Feed Products</span>
                  </Link>
                  <Link 
                    href="/poultry-feed" 
                    className="group/btn w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 transform hover:scale-105 flex items-center justify-center space-x-3"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9l-5 4.87 1.18 6.88L12 17.77l-6.18 2.98L7 14.87 2 9l6.91-1.74L12 2z"/>
                    </svg>
                    <span>View Poultry Feed Products</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/image.png" 
                  alt="Lakshmica Logo" 
                  className="w-10 h-10 object-contain"
                  style={{mixBlendMode: 'multiply', filter: 'brightness(0) invert(1)'}}
                />
                <div>
                  <h3 className="text-xl font-bold" style={{fontFamily: 'Times New Roman, serif'}}>Lakshmica</h3>
                  <p className="text-sm text-gray-400">Enterprises</p>
                </div>
              </div>
              <p className="text-gray-400">
                Your trusted partner for premium cattle and poultry feed solutions.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><Link href="/cattle-feed" className="text-gray-400 hover:text-white transition-colors">Cattle Feed</Link></li>
                <li><Link href="/poultry-feed" className="text-gray-400 hover:text-white transition-colors">Poultry Feed</Link></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <p className="text-gray-400 text-sm mb-2">8-2-293/13, Banjara Hills Road No 14</p>
              <p className="text-gray-400 text-sm mb-2">Hyderabad, Telangana 50034</p>
              <p className="text-gray-400 text-sm mb-1">+91 9866601714</p>
              <p className="text-gray-400 text-sm">+91 8125884442</p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; 2025 Lakshmica Enterprises. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
