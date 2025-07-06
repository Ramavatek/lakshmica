'use client';
import { useState } from "react";
import Link from "next/link";

export default function CattleFeed() {
  const cattleProducts = [
    {
      name: "Calf Starter 20",
      description: "Fine mash/crumble, 20 % crude protein (CP) with digestible fibre, vitamins A-E and a coccidiostat; jump-starts rumen development in calves ≤ 12 weeks."
    },
    {
      name: "Heifer Grow 16",
      description: "16 % CP developer pellet balanced for steady skeletal growth without excess fat in replacement heifers (3–15 months)."
    },
    {
      name: "Dairy Boost 18",
      description: "High-energy 18 % CP lactation ration (pellet or mash) with bypass protein, yeast culture and protected fat to support peak milk yield."
    },
    {
      name: "Close-Up Transition",
      description: "Negative-DCAD, low-calcium mix fed 21 days pre-calving to reduce milk fever risk and ease metabolic transition."
    },
    {
      name: "Beef Finisher 14",
      description: "14 % CP high-grain TMR concentrate that maximises daily gain and marbling in the last 90 days before slaughter."
    },
    {
      name: "Fiber Guard Roughage Plus",
      description: "Chopped, ammoniated straw cube fortified with minerals—keeps rumen pH stable when pastures are short or lush."
    },
    {
      name: "Energy Mol Block 40",
      description: "Self-fed molasses-urea tub (≈40 % sugar) supplying extra energy and non-protein nitrogen on dry forage."
    },
    {
      name: "Protein Plus 46",
      description: "46 % CP soybean-meal pellet added at 1–2 kg/day to low-protein forages for growth or lactation."
    },
    {
      name: "Mineral Max Brick",
      description: "Weatherproof salt block with Ca, P, Mg and chelated trace minerals (Zn, Cu, Se) for grazing cattle."
    },
    {
      name: "Silage Mate CornPak",
      description: "Fermented whole-plant corn (~35 % DM) chopped and bag-sealed; economical basal energy source for all classes."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-teal-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-green-500">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-3">
                <img 
                src="/image.png" 
                alt="Lakshmica Logo" 
                className="w-14 h-14 m-0 p-0 object-contain"
                style={{mixBlendMode: 'multiply'}}
              />
              <div>
                <h1 className="text-2xl font-bold text-green-600" style={{fontFamily: 'Times New Roman, serif'}}>Lakshmica</h1>
                <p className="text-sm text-gray-600">Enterprises</p>
              </div>
            </Link>
            
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Home</Link>
              <Link href="/cattle-feed" className="text-green-600 font-medium">Cattle Feed</Link>
              <Link href="/poultry-feed" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Poultry Feed</Link>
              <Link href="/#contact" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">Cattle Feed Solutions</h1>
            <p className="text-xl mb-8 opacity-90">
              Premium nutrition solutions for dairy cows, beef cattle, calves, and heifers. 
              Our scientifically formulated feeds ensure optimal health, growth, and productivity.
            </p>
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Cattle Feed Product Catalogue</h2>
            <p className="text-xl text-gray-600">Complete nutrition solutions for every stage of cattle development</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cattleProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
                    </svg>
                  </div>
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
                    Premium
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">{product.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.description}</p>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors text-sm">
                    Get Quote
                  </button>
                  <button className="text-green-600 font-medium text-sm hover:text-green-700 transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our Cattle Feed?</h2>
            <p className="text-xl text-gray-600">Science-backed nutrition for optimal cattle health and productivity</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Enhanced Milk Production</h3>
              <p className="text-gray-600">Specially formulated to boost milk yield and quality in dairy cattle</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C14.8,11.78 14.58,12 14.3,12H9.7C9.42,12 9.2,11.78 9.2,11.5V10C9.2,8.6 10.6,7 12,7Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Disease Prevention</h3>
              <p className="text-gray-600">Fortified with vitamins and minerals to boost immunity and prevent diseases</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Optimal Growth</h3>
              <p className="text-gray-600">Balanced nutrition for healthy weight gain and muscle development</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Improve Your Cattle&apos;s Health?</h2>
          <p className="text-xl mb-8 opacity-90">Contact us today for personalized feed recommendations and pricing</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Quote Now
            </button>
            <Link href="/#contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
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
                Your trusted partner for high-quality cattle feed solutions.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/cattle-feed" className="text-gray-400 hover:text-white transition-colors">Cattle Feed</Link></li>
                <li><Link href="/poultry-feed" className="text-gray-400 hover:text-white transition-colors">Poultry Feed</Link></li>
                <li><Link href="/#contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <p className="text-gray-400 text-sm mb-2">8-2-293/13, Banjara Hills Road No 14</p>
              <p className="text-gray-400 text-sm mb-2">Hyderabad, Telangana 50034</p>
              <p className="text-gray-400 text-sm">+91 9866601714</p>
              <p className="text-gray-400 text-sm">+91 8125884442</p>
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
