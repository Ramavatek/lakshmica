'use client';
import { useState } from "react";
import Link from "next/link";

export default function PoultryFeed() {
  const poultryProducts = [
    {
      name: "Pre-Starter Crumble 23",
      description: "Extra-fine 23 % CP crumble for the first 5–7 days; high lysine, probiotic, and enzyme pack for gut health."
    },
    {
      name: "Broiler Starter 22",
      description: "22 % CP medicated crumble (0–14 d) optimised for rapid frame growth and early immunity."
    },
    {
      name: "Broiler Grower 20",
      description: "20 % CP crumble/pellet (14–28 d) with balanced amino acids for efficient muscle deposition."
    },
    {
      name: "Broiler Finisher 18",
      description: "18 % CP large pellet (28 d → market) formulated for feed-conversion efficiency and desired carcass fat."
    },
    {
      name: "Layer Chick Starter 20",
      description: "20 % CP crumble (0–6 wk) enriched with vitamins A, D, E and methionine to build strong pullets."
    },
    {
      name: "Layer Developer 17",
      description: "17 % CP mash (6–17 wk) moderate Ca; conditions pullets for onset of lay without early shell issues."
    },
    {
      name: "Layer Complete 18 Ca+",
      description: "18 % CP, 3.8 % Ca pellet from 18 wk onward; contains oyster-shell grit for shell quality and omega-3 option."
    },
    {
      name: "Breeder Pellet 19",
      description: "19 % CP with elevated vitamin E, selenium and linoleic acid to enhance hatchability in parent flocks."
    },
    {
      name: "Duck Starter 22 Niacin",
      description: "22 % CP crumble, niacin-fortified (65 mg kg⁻¹) to prevent leg disorders in ducklings and goslings."
    },
    {
      name: "Omega-Layer Enriched 16",
      description: "16 % CP mash with flaxseed oil; boosts DHA/ALA levels in table eggs for premium markets."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-orange-500">
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
                <h1 className="text-2xl font-bold text-orange-600" style={{fontFamily: 'Times New Roman, serif'}}>Lakshmica</h1>
                <p className="text-sm text-gray-600">Enterprises</p>
              </div>
            </Link>
            
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Home</Link>
              <Link href="/cattle-feed" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Cattle Feed</Link>
              <Link href="/poultry-feed" className="text-orange-600 font-medium">Poultry Feed</Link>
              <Link href="/#contact" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">Poultry Feed Solutions</h1>
            <p className="text-xl mb-8 opacity-90">
              Complete nutrition for broilers, layers, breeders, and specialty birds. 
              Our scientifically formulated feeds ensure optimal growth, egg production, and bird health.
            </p>
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9l-5 4.87 1.18 6.88L12 17.77l-6.18 2.98L7 14.87 2 9l6.91-1.74L12 2z"/>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Poultry Feed Product Catalogue</h2>
            <p className="text-xl text-gray-600">Specialized nutrition for every stage of poultry development</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {poultryProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9l-5 4.87 1.18 6.88L12 17.77l-6.18 2.98L7 14.87 2 9l6.91-1.74L12 2z"/>
                    </svg>
                  </div>
                  <span className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full font-medium">
                    Premium
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">{product.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.description}</p>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors text-sm">
                    Get Quote
                  </button>
                  <button className="text-orange-600 font-medium text-sm hover:text-orange-700 transition-colors">
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our Poultry Feed?</h2>
            <p className="text-xl text-gray-600">Advanced nutrition for maximum productivity and bird welfare</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Superior Egg Production</h3>
              <p className="text-gray-600">Optimized nutrition for increased egg laying rates and shell quality</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Rapid Growth</h3>
              <p className="text-gray-600">Balanced amino acids for efficient feed conversion and fast weight gain</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C14.8,11.78 14.58,12 14.3,12H9.7C9.42,12 9.2,11.78 9.2,11.5V10C9.2,8.6 10.6,7 12,7Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Health & Immunity</h3>
              <p className="text-gray-600">Probiotics and vitamins to boost immune system and reduce mortality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feed Types Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Feed Categories</h2>
            <p className="text-xl text-gray-600">Specialized feeds for different poultry types and life stages</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🐣</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Starter Feeds</h3>
              <p className="text-sm text-gray-600">High-protein feeds for chicks 0-6 weeks</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🐓</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Grower Feeds</h3>
              <p className="text-sm text-gray-600">Balanced nutrition for growing birds</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🥚</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Layer Feeds</h3>
              <p className="text-sm text-gray-600">Calcium-rich feeds for egg production</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🦆</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Specialty Feeds</h3>
              <p className="text-sm text-gray-600">Custom feeds for ducks, geese, and breeders</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Boost Your Poultry Production Today</h2>
          <p className="text-xl mb-8 opacity-90">Get expert advice and premium feed solutions tailored to your flock</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Request Sample
            </button>
            <Link href="/#contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
              Contact Expert
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
                Your trusted partner for high-quality poultry feed solutions.
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
