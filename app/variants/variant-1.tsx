"use client";

import React, { useState } from 'react';
import { Orbitron, Source_Sans_3 } from 'next/font/google';
import Script from 'next/script';

const orbitron = Orbitron({ subsets: ['latin'], weight: ['400', '700', '900'] });
const sourceSans = Source_Sans_3({ subsets: ['latin'], weight: ['400', '500', '600'] });

export default function TablingosLanding() {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden ${sourceSans.className}`}>
      <Script src="https://assets.calendly.com/assets/external/widget.js" />
      
      {/* Animated Background Data Flow */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-32 border border-cyan-400 rounded-lg animate-pulse">
          <div className="p-4">
            <div className="flex justify-between items-end h-20">
              <div className="w-4 bg-cyan-400 animate-bounce" style={{height: '60%', animationDelay: '0s'}}></div>
              <div className="w-4 bg-blue-400 animate-bounce" style={{height: '80%', animationDelay: '0.2s'}}></div>
              <div className="w-4 bg-cyan-300 animate-bounce" style={{height: '40%', animationDelay: '0.4s'}}></div>
              <div className="w-4 bg-blue-300 animate-bounce" style={{height: '90%', animationDelay: '0.6s'}}></div>
              <div className="w-4 bg-cyan-400 animate-bounce" style={{height: '70%', animationDelay: '0.8s'}}></div>
            </div>
          </div>
        </div>
        
        <div className="absolute top-40 right-20 w-48 h-48 border border-blue-400 rounded-full flex items-center justify-center animate-spin" style={{animationDuration: '20s'}}>
          <div className="w-32 h-32 border-2 border-cyan-400 rounded-full animate-ping"></div>
        </div>
        
        <div className="absolute bottom-32 left-1/4 w-80 h-2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
        
        <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96" viewBox="0 0 400 400">
          <path d="M50,200 Q200,50 350,200 Q200,350 50,200" stroke="#00bcd4" strokeWidth="2" fill="none" opacity="0.3">
            <animate attributeName="stroke-dasharray" values="0,1000;1000,0;0,1000" dur="8s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6">
        <div className={`text-2xl md:text-3xl font-bold text-cyan-400 ${orbitron.className}`}>
          TABLINGOS
        </div>
        <button 
          onClick={() => setShowCalendly(true)}
          className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
        >
          Schedule Demo
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className={`text-4xl md:text-6xl lg:text-7xl font-black leading-tight ${orbitron.className}`}>
                <span className="text-white">Transform</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Messy Data</span>
                <br />
                <span className="text-white">Into Perfect</span>
                <br />
                <span className="text-cyan-400">Insights</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg">
                Skip the development headaches. Our no-code platform handles data collection, validation, and transformation so you can focus on what matters.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setShowCalendly(true)}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-cyan-500/30"
                >
                  Get Started Now
                </button>
                <button 
                  onClick={() => setShowCalendly(true)}
                  className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
                >
                  Watch Demo
                </button>
              </div>
              
              <div className="text-sm text-gray-400 flex items-center">
                <span className="mr-2">💡</span>
                Let your data work for you, not against you
              </div>
            </div>
            
            {/* Floating Dashboard Preview */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className={`text-xs text-cyan-400 ${orbitron.className}`}>DATA FLOW</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Processing Rate</span>
                    <span className="text-cyan-400 font-bold">2.4k/sec</span>
                  </div>
                  
                  <div className="h-32 flex items-end justify-between space-x-2">
                    <div className="w-8 bg-gradient-to-t from-cyan-500 to-cyan-300 rounded-t animate-pulse" style={{height: '70%'}}></div>
                    <div className="w-8 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t animate-pulse" style={{height: '85%', animationDelay: '0.2s'}}></div>
                    <div className="w-8 bg-gradient-to-t from-cyan-500 to-cyan-300 rounded-t animate-pulse" style={{height: '60%', animationDelay: '0.4s'}}></div>
                    <div className="w-8 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t animate-pulse" style={{height: '95%', animationDelay: '0.6s'}}></div>
                    <div className="w-8 bg-gradient-to-t from-cyan-500 to-cyan-300 rounded-t animate-pulse" style={{height: '80%', animationDelay: '0.8s'}}></div>
                  </div>
                  
                  <div className="flex space-x-4 text-xs">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-gray-400">Validated</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-gray-400">Transformed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${orbitron.className}`}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                DATA TRANSFORMATION
              </span>
              <br />
              <span className="text-white">MADE SIMPLE</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800/40 to-blue-900/20 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z" />
                </svg>
              </div>
              <h3 className={`text-xl font-bold mb-4 text-cyan-400 ${orbitron.className}`}>
                DRAG & DROP BUILDER
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Intuitive drag-and-drop data transformation builder that requires zero coding knowledge.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/40 to-blue-900/20 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12L11 14L15 10M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z" />
                </svg>
              </div>
              <h3 className={`text-xl font-bold mb-4 text-blue-400 ${orbitron.className}`}>
                AUTO VALIDATION
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Automated validation and error handling for any data type with real-time feedback.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/40 to-blue-900/20 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9Z" />
                </svg>
              </div>
              <h3 className={`text-xl font-bold mb-4 text-cyan-400 ${orbitron.className}`}>
                SEAMLESS INTEGRATION
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Seamless integration with your existing workflows and systems without disruption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="relative z-10 px-6 md:px-12 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className={`text-4xl md:text-5xl font-black text-cyan-400 ${orbitron.className}`}>
                99.9%
              </div>
              <div className="text-gray-300 font-medium">Data Accuracy</div>
            </div>
            <div className="space-y-2">
              <div className={`text-4xl md:text-5xl font-black text-blue-400 ${orbitron.className}`}>
                10x
              </div>
              <div className="text-gray-300 font-medium">Faster Processing</div>
            </div>
            <div className="space-y-2">
              <div className={`text-4xl md:text-5xl font-black text-cyan-400 ${orbitron.className}`}>
                24/7
              </div>
              <div className="text-gray-300 font-medium">Automated Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-cyan-500/20 px-6 md:px-12 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className={`text-2xl font-bold text-cyan-400 ${orbitron.className}`}>
              TABLINGOS
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <button 
                onClick={() => setShowCalendly(true)}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Book a Call
              </button>
              <button 
                onClick={() => setShowCalendly(true)}
                className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Start Free Trial
              </button>
            </div>
            
            <div className="flex space-x-6">
              <a 
                href="https://x.com/ibrahimansr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/tablingos/about/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-cyan-500/10 text-center text-gray-400 text-sm">
            © 2024 Tablingos. Let your data work for you, not against you.
          </div>
        </div>
      </footer>

      {/* Calendly Modal */}
      {showCalendly && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-4xl h-[80vh] relative">
            <button 
              onClick={() => setShowCalendly(false)}
              className="absolute top-4 right-4 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
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