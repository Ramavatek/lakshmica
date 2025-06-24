'use client';
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-orange-500">
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

      {/* Hero Section */}
      <section id="home" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-red-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                Premium <span className="text-orange-600">Poultry</span> & 
                <span className="text-red-600"> Cattle Feed</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Welcome to Lakshmica - Your trusted partner for high-quality, 
                nutritious feed solutions that ensure healthy livestock and maximum productivity. 
                Experience the finest in animal nutrition with our premium feed products.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/poultry-feed" className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center">
                  Explore Poultry Feed
                </Link>
                <Link href="/cattle-feed" className="border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-50 transition-all duration-300 text-center">
                  Explore Cattle Feed
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-orange-200 to-red-200 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <div className="flex justify-center space-x-8 mb-6">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-10 h-10 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
                      </svg>
                    </div>
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-10 h-10 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                  </div>
                  <p className="text-orange-600 font-semibold text-xl">Quality Feed for Healthy Animals</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-70"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-red-400 rounded-full opacity-70"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Lakshmica?</h2>
            <p className="text-xl text-gray-600">Our Special Features & Benefits</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-yellow-50 hover:shadow-lg transition-shadow duration-300">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">100% Natural</h3>
              <p className="text-gray-600">Made with the finest natural ingredients that provide optimal nutrition for your livestock, ensuring healthier animals and better productivity.</p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-blue-50 hover:shadow-lg transition-shadow duration-300">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">High Energy</h3>
              <p className="text-gray-600">Specially formulated high-energy feed that significantly boosts animal productivity, enhancing milk production and meat quality.</p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-shadow duration-300">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C14.8,11.78 14.58,12 14.3,12H9.7C9.42,12 9.2,11.78 9.2,11.5V10C9.2,8.6 10.6,7 12,7Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Disease Protection</h3>
              <p className="text-gray-600">Advanced immunity-boosting ingredients that help protect your animals from diseases while promoting overall health and vitality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Feed Solutions</h2>
            <p className="text-xl text-gray-600">Premium nutrition for different livestock categories</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-16 h-16 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9l-5 4.87 1.18 6.88L12 17.77l-6.18 2.98L7 14.87 2 9l6.91-1.74L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">Poultry Feed</h3>
                <p className="text-orange-600 font-semibold">For Healthy Chickens & Birds</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Starter, Grower & Finisher varieties
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  High protein content (16-23%)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Vitamin & mineral enriched
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  10+ specialized products available
                </li>
              </ul>
              <Link href="/poultry-feed" className="w-full bg-orange-500 text-white py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors block text-center">
                View All Products
              </Link>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-green-200 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-16 h-16 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">Cattle Feed</h3>
                <p className="text-green-600 font-semibold">For Cows & Buffalo</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Dairy & beef cattle specialized feed
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Increases milk production
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Rich in calcium & phosphorus
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  10+ specialized formulations
                </li>
              </ul>
              <Link href="/cattle-feed" className="w-full bg-green-500 text-white py-3 rounded-full font-semibold hover:bg-green-600 transition-colors block text-center">
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <p className="text-orange-100">Happy Farmers</p>
              <p className="text-sm">Satisfied Customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <p className="text-orange-100">Years Experience</p>
              <p className="text-sm">Industry Expertise</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-orange-100">Tons Per Month</p>
              <p className="text-sm">Production Capacity</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-orange-100">Natural</p>
              <p className="text-sm">Premium Quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                About <span className="text-orange-600">Lakshmica</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our company was established in 1998 with a vision to provide farmers 
                with the highest quality animal feed solutions. For over 25 years, 
                we have been committed to excellence in animal nutrition.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We combine traditional Indian farming wisdom with modern nutrition 
                science to create feeds that promote optimal animal health and productivity. 
                Our commitment to quality has made us a trusted partner for thousands of farmers.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5,16L3,5H1V3H4L6,14L7,18H20V16H5M6,2H4V4H6V2M7,7H5V9H7V7M8,12H6V14H8V12Z"/>
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-orange-600">ISO Certified</div>
                  <p className="text-sm text-gray-600">Quality Assured</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-green-600">Organic</div>
                  <p className="text-sm text-gray-600">Natural Ingredients</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-green-200 to-yellow-200 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <svg className="w-12 h-12 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17,12H22L18,8V6A2,2 0 0,0 16,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H16A2,2 0 0,0 18,18V16L22,12H17M16,16H4V6H16V16Z"/>
                    </svg>
                  </div>
                  <p className="text-green-700 font-semibold text-xl">Serving Farmers Since 1998</p>
                  <p className="text-green-600">Trusted Partner in Agriculture</p>
                </div>
              </div>
              {/* Decorative pattern */}
              <div className="absolute -top-8 -left-8 w-24 h-24 border-4 border-orange-300 rounded-full opacity-30"></div>
              <div className="absolute -bottom-8 -right-8 w-20 h-20 border-4 border-green-300 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">We're Here to Help You Succeed</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-600">+91 9866610714</p>
                    <p className="text-gray-600">+91 8125884442</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">info@lakshmika.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-gray-600">8-2-293/13, Banjara Hills Road No 14, Hyderabad, Telangana 50034</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Message</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                />
                <textarea 
                  rows="4" 
                  placeholder="Your Message" 
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                ></textarea>
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                  Send Message
                </button>
              </form>
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
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Lakshmica</h3>
                  <p className="text-sm text-gray-400">Premium Feed Solutions</p>
                </div>
              </div>
              <p className="text-gray-400">
                Your trusted partner for high-quality poultry and cattle feed solutions.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <span className="text-white">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <span className="text-white">t</span>
                </a>
                <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                  <span className="text-white">w</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; 2025 Lakshmica Feed Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
