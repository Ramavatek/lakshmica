'use client';
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="relative z-50 bg-white/95 backdrop-blur-sm shadow-lg border-b-4 border-orange-500">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img 
                src="/image.png" 
                alt="Lakshmica Logo" 
                className="w-14 h-14 m-0 p-0 object-contain"
                style={{mixBlendMode: 'multiply'}}
              />
              <div>
                <h1 className="text-2xl font-bold text-orange-600" style={{fontFamily: 'Times New Roman, serif'}}>Lakshmica</h1>
                <p className="text-sm text-gray-600">Enterprises</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Home</a>
              <Link href="/cattle-feed" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Cattle Feed</Link>
              <Link href="/poultry-feed" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Poultry Feed</Link>
              <a href="#about" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Contact</a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-around">
                <span className="w-full h-0.5 bg-gray-600"></span>
                <span className="w-full h-0.5 bg-gray-600"></span>
                <span className="w-full h-0.5 bg-gray-600"></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-2">
                <a href="#home" className="text-gray-700 hover:text-orange-600 font-medium py-2">Home</a>
                <Link href="/cattle-feed" className="text-gray-700 hover:text-orange-600 font-medium py-2">Cattle Feed</Link>
                <Link href="/poultry-feed" className="text-gray-700 hover:text-orange-600 font-medium py-2">Poultry Feed</Link>
                <a href="#about" className="text-gray-700 hover:text-orange-600 font-medium py-2">About</a>
                <a href="#contact" className="text-gray-700 hover:text-orange-600 font-medium py-2">Contact</a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section with Background Image */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero-background.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          {/* Centered Logo */}
          <div className="mb-8">
            <img 
              src="/logo-icon.png" 
              alt="Lakshmica Logo" 
              className="w-32 h-32 mx-auto mb-6 object-contain"
              style={{mixBlendMode: 'multiply'}}
            />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{fontFamily: 'Times New Roman, serif'}}>
            Lakshmica Enterprises
          </h1>
          
          {/* Subheading */}
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-orange-300">
            Cattle Feed & Poultry Feed Supplier
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner for premium, nutritious feed solutions. We specialize in high-quality cattle and poultry feed designed to maximize health, productivity, and growth for your livestock.
          </p>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/cattle-feed" 
              className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-700 hover:to-green-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Cattle Feed
            </Link>
            <Link 
              href="/poultry-feed" 
              className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-700 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Poultry Feed
            </Link>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">About Lakshmica Enterprises</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With years of experience in animal nutrition, Lakshmica Enterprises is committed to providing the finest feed solutions for cattle and poultry. Our scientifically formulated feeds are designed to enhance animal health, improve productivity, and ensure sustainable farming practices.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-green-50 p-6 rounded-xl">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🐄</span>
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Cattle Feed Solutions</h3>
                <p className="text-green-700">Premium nutrition for dairy cows, beef cattle, calves, and heifers with specialized formulations for every growth stage.</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🐓</span>
                </div>
                <h3 className="text-xl font-bold text-orange-800 mb-2">Poultry Feed Solutions</h3>
                <p className="text-orange-700">Complete nutrition for broilers, layers, breeders, and specialty birds with feeds optimized for growth and egg production.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600">Quality, reliability, and results you can trust</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Quality Assured</h3>
              <p className="text-gray-600 text-center">Every batch is tested and certified to meet the highest nutritional standards</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9l-5 4.87 1.18 6.88L12 17.77l-6.18 2.98L7 14.87 2 9l6.91-1.74L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Scientific Formulation</h3>
              <p className="text-gray-600 text-center">Research-backed nutrition designed by animal nutrition experts</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Expert Support</h3>
              <p className="text-gray-600 text-center">Dedicated team of nutritionists and veterinarians for personalized guidance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">We&apos;re Here to Help You Succeed</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Address</h4>
                    <p className="text-gray-600">8-2-293/13, Banjara Hills Road No 14<br />Hyderabad, Telangana 50034</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600">+91 9866601714<br />+91 8125884442</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Ready to Get Started?</h3>
              <p className="text-gray-600 mb-6">
                Contact us today for personalized feed recommendations and competitive pricing. Our experts are ready to help you optimize your livestock nutrition.
              </p>
              <div className="space-y-4">
                <Link 
                  href="/cattle-feed" 
                  className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors block text-center"
                >
                  View Cattle Feed Products
                </Link>
                <Link 
                  href="/poultry-feed" 
                  className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors block text-center"
                >
                  View Poultry Feed Products
                </Link>
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
