"use client";

import React, { useState } from 'react';
import { Bebas_Neue, Open_Sans } from 'next/font/google';
import Script from 'next/script';

const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' });
const openSans = Open_Sans({ subsets: ['latin'] });

export default function TablingosLanding() {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white overflow-hidden ${openSans.className}`}>
      <Script src="https://assets.calendly.com/assets/external/widget.js" />
      
      {/* Navigation */}
      <nav className="relative z-50 px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className={`text-2xl sm:text-3xl font-bold text-white ${bebasNeue.className}`}>
            TABLINGOS
          </div>
          <button
            onClick={() => setShowCalendly(true)}
            className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            call
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Diagonal Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 transform rotate-45 rounded-3xl animate-pulse"></div>
            <div className="absolute top-1/2 -left-32 w-64 h-64 bg-orange-300/20 transform -rotate-12 rounded-2xl animate-bounce" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-pink-300/15 transform rotate-12 rounded-xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight ${bebasNeue.className}`}>
                <span className="block transform -skew-x-6 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
                  TRANSFORM
                </span>
                <span className="block transform skew-x-3 text-white mt-2">
                  MESSY DATA
                </span>
                <span className="block transform -skew-x-3 bg-gradient-to-r from-pink-200 to-white bg-clip-text text-transparent mt-2">
                  INTO PERFECT
                </span>
                <span className="block transform skew-x-6 text-white mt-2">
                  INSIGHTS
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-white/90 leading-relaxed transform skew-x-1">
                Skip the development headaches. Our no-code platform handles data collection, validation, and transformation so you can focus on what matters.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowCalendly(true)}
                  className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  call
                </button>
                <div className="text-white/80 text-sm self-center transform skew-x-2">
                  Let your data work for you, not against you.
                </div>
              </div>
            </div>

            {/* Animated Data Flow Visualization */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 transform -rotate-3 border border-white/20">
                {/* Data Pipeline Nodes */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-orange-400 rounded-full animate-pulse"></div>
                    <div className="flex-1 h-2 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full relative overflow-hidden">
                      <div className="absolute inset-0 bg-white/30 transform -skew-x-12 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    </div>
                    <div className="w-4 h-4 bg-pink-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                    <div className="flex-1 h-2 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full relative overflow-hidden">
                      <div className="absolute inset-0 bg-white/30 transform -skew-x-12 animate-pulse" style={{animationDelay: '0.8s'}}></div>
                    </div>
                    <div className="w-4 h-4 bg-orange-400 rounded-full animate-pulse" style={{animationDelay: '1.3s'}}></div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
                    <div className="flex-1 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full relative overflow-hidden">
                      <div className="absolute inset-0 bg-white/30 transform -skew-x-12 animate-pulse" style={{animationDelay: '1.1s'}}></div>
                    </div>
                    <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1.6s'}}></div>
                  </div>
                </div>
                
                {/* Transformation Indicator */}
                <div className="mt-8 text-center">
                  <div className={`text-2xl font-bold text-white ${bebasNeue.className} transform skew-x-3`}>
                    DATA TRANSFORMATION
                  </div>
                  <div className="text-white/80 text-sm mt-2 transform -skew-x-1">
                    Real-time processing
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto">
          {/* Diagonal Section Divider */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-br from-white/5 to-transparent transform -skew-y-2"></div>
          
          <div className="relative z-10 grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: "DRAG-AND-DROP BUILDER",
                description: "Intuitive drag-and-drop data transformation builder",
                icon: "🔧",
                delay: "0s"
              },
              {
                title: "AUTOMATED VALIDATION",
                description: "Automated validation and error handling for any data type",
                icon: "✅",
                delay: "0.3s"
              },
              {
                title: "SEAMLESS INTEGRATION",
                description: "Seamless integration with your existing workflows and systems",
                icon: "🔗",
                delay: "0.6s"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 border border-white/20 hover:border-white/40"
                style={{
                  transform: index % 2 === 0 ? 'rotate(2deg)' : 'rotate(-2deg)',
                  animationDelay: feature.delay
                }}
              >
                <div className="text-4xl mb-4 transform -rotate-12">{feature.icon}</div>
                <h3 className={`text-2xl font-bold mb-4 text-white ${bebasNeue.className} transform skew-x-2`}>
                  {feature.title}
                </h3>
                <p className="text-white/90 leading-relaxed transform -skew-x-1">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Diagonal Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 transform skew-y-3 rounded-3xl"></div>
          
          <div className="relative z-10 space-y-8">
            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white ${bebasNeue.className} transform -skew-x-3`}>
              READY TO TRANSFORM YOUR DATA?
            </h2>
            
            <p className="text-xl sm:text-2xl text-white/90 transform skew-x-2">
              Join the revolution. Make your data work for you.
            </p>
            
            <button
              onClick={() => setShowCalendly(true)}
              className="bg-white text-purple-600 px-12 py-6 rounded-full text-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 shadow-2xl"
            >
              call
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-4 sm:px-6 lg:px-8 py-12 border-t border-white/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className={`text-3xl font-bold text-white ${bebasNeue.className} transform skew-x-3`}>
              TABLINGOS
            </div>
            
            <div className="flex space-x-6">
              <a
                href="https://x.com/ibrahimansr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                Twitter
              </a>
              <a
                href="https://www.linkedin.com/company/tablingos/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                LinkedIn
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/60 transform skew-x-1">
            © 2024 Tablingos. Let your data work for you, not against you.
          </div>
        </div>
      </footer>

      {/* Calendly Modal */}
      {showCalendly && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-4xl h-[600px] relative">
            <button
              onClick={() => setShowCalendly(false)}
              className="absolute top-4 right-4 z-10 bg-gray-100 hover:bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center text-gray-600 transition-colors"
            >
              ✕
            </button>
            <div
              className="calendly-inline-widget w-full h-full rounded-2xl"
              data-url="https://calendly.com/ibrahim-ansari4161/new-meeting"
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}
