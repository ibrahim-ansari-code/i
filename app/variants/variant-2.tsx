"use client";

import React, { useState } from 'react';
import { Poppins, Inter } from 'next/font/google';
import Script from 'next/script';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });
const inter = Inter({ subsets: ['latin'], weight: ['400', '500'] });

export default function TablingosLanding() {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <div className={`min-h-screen bg-white ${inter.className}`}>
      <Script src="https://assets.calendly.com/assets/external/widget.js" />
      
      {/* Navigation */}
      <nav className="px-6 py-8 lg:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className={`text-2xl font-bold text-charcoal ${poppins.className}`}>
            Tablingos
          </div>
          <button 
            onClick={() => setShowCalendly(true)}
            className="bg-soft-blue text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
            style={{ backgroundColor: '#3498db' }}
          >
            call
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 lg:px-12 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className={`text-5xl lg:text-7xl font-bold mb-8 leading-tight ${poppins.className}`} style={{ color: '#2c3e50' }}>
              Transform Messy Data
              <br />
              Into Perfect Insights
            </h1>
            <p className="text-xl lg:text-2xl mb-12 leading-relaxed" style={{ color: '#7f8c8d' }}>
              Skip the development headaches. Our no-code platform handles data collection, validation, and transformation so you can focus on what matters.
            </p>
            <button 
              onClick={() => setShowCalendly(true)}
              className="bg-soft-blue text-white px-12 py-4 rounded-lg text-lg font-medium hover:bg-blue-600 transition-colors mb-20"
              style={{ backgroundColor: '#3498db' }}
            >
              call
            </button>
          </div>
          
          {/* Floating Product Preview */}
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.08)' }}>
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="w-12 h-12 bg-soft-blue rounded-lg mb-4" style={{ backgroundColor: '#3498db' }}></div>
                    <h3 className={`text-lg font-semibold mb-2 ${poppins.className}`} style={{ color: '#2c3e50' }}>Data Source</h3>
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-200 rounded w-full"></div>
                      <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="w-12 h-12 bg-soft-blue rounded-lg mb-4" style={{ backgroundColor: '#3498db' }}></div>
                    <h3 className={`text-lg font-semibold mb-2 ${poppins.className}`} style={{ color: '#2c3e50' }}>Transform</h3>
                    <div className="space-y-2">
                      <div className="h-2 bg-blue-200 rounded w-full"></div>
                      <div className="h-2 bg-blue-200 rounded w-5/6"></div>
                      <div className="h-2 bg-blue-200 rounded w-2/3"></div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="w-12 h-12 bg-soft-blue rounded-lg mb-4" style={{ backgroundColor: '#3498db' }}></div>
                    <h3 className={`text-lg font-semibold mb-2 ${poppins.className}`} style={{ color: '#2c3e50' }}>Perfect Output</h3>
                    <div className="space-y-2">
                      <div className="h-2 bg-green-200 rounded w-full"></div>
                      <div className="h-2 bg-green-200 rounded w-full"></div>
                      <div className="h-2 bg-green-200 rounded w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 lg:px-12 lg:py-32" style={{ backgroundColor: '#ecf0f1' }}>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${poppins.className}`} style={{ color: '#2c3e50' }}>
              Let your data work for you,
              <br />not against you
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg">
              <div className="w-16 h-16 bg-soft-blue rounded-2xl mb-6 flex items-center justify-center" style={{ backgroundColor: '#3498db' }}>
                <div className="w-8 h-8 bg-white rounded opacity-80"></div>
              </div>
              <h3 className={`text-2xl font-semibold mb-4 ${poppins.className}`} style={{ color: '#2c3e50' }}>
                Intuitive drag-and-drop data transformation builder
              </h3>
              <p className="text-lg leading-relaxed" style={{ color: '#7f8c8d' }}>
                Build complex data pipelines with simple visual tools. No coding required.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg">
              <div className="w-16 h-16 bg-soft-blue rounded-2xl mb-6 flex items-center justify-center" style={{ backgroundColor: '#3498db' }}>
                <div className="w-8 h-8 bg-white rounded opacity-80"></div>
              </div>
              <h3 className={`text-2xl font-semibold mb-4 ${poppins.className}`} style={{ color: '#2c3e50' }}>
                Automated validation and error handling for any data type
              </h3>
              <p className="text-lg leading-relaxed" style={{ color: '#7f8c8d' }}>
                Catch issues before they become problems with intelligent validation.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg">
              <div className="w-16 h-16 bg-soft-blue rounded-2xl mb-6 flex items-center justify-center" style={{ backgroundColor: '#3498db' }}>
                <div className="w-8 h-8 bg-white rounded opacity-80"></div>
              </div>
              <h3 className={`text-2xl font-semibold mb-4 ${poppins.className}`} style={{ color: '#2c3e50' }}>
                Seamless integration with your existing workflows and systems
              </h3>
              <p className="text-lg leading-relaxed" style={{ color: '#7f8c8d' }}>
                Connect to any data source and export to any destination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 lg:px-12 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-8 ${poppins.className}`} style={{ color: '#2c3e50' }}>
            Ready to transform your data workflow?
          </h2>
          <p className="text-xl mb-12" style={{ color: '#7f8c8d' }}>
            Join teams who've eliminated data headaches forever.
          </p>
          <button 
            onClick={() => setShowCalendly(true)}
            className="bg-soft-blue text-white px-12 py-4 rounded-lg text-lg font-medium hover:bg-blue-600 transition-colors"
            style={{ backgroundColor: '#3498db' }}
          >
            call
          </button>
        </div>
      </section>

      {/* Calendly Widget */}
      {showCalendly && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-4xl h-5/6 relative">
            <button 
              onClick={() => setShowCalendly(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl z-10"
            >
              ×
            </button>
            <div 
              className="calendly-inline-widget w-full h-full rounded-2xl"
              data-url="https://calendly.com/ibrahim-ansari4161/new-meeting"
            ></div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="px-6 py-12 lg:px-12 border-t" style={{ borderColor: '#ecf0f1' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className={`text-2xl font-bold mb-6 lg:mb-0 ${poppins.className}`} style={{ color: '#2c3e50' }}>
              Tablingos
            </div>
            <div className="flex space-x-8">
              <a 
                href="https://x.com/ibrahimansr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-soft-blue transition-colors"
              >
                Twitter
              </a>
              <a 
                href="https://www.linkedin.com/company/tablingos/about/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-soft-blue transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
