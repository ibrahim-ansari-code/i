"use client";

import React, { useState } from 'react';
import { JetBrains_Mono, Manrope } from 'next/font/google';
import Script from 'next/script';

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] });
const manrope = Manrope({ subsets: ['latin'] });

export default function TablingosLanding() {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <div className={`min-h-screen bg-[#0d1117] text-white ${manrope.className} relative overflow-hidden`}>
      {/* Grid texture overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(57, 211, 83, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(57, 211, 83, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Glowing accent lines */}
      <div className="fixed top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#39d353] to-transparent opacity-20"></div>
      <div className="fixed top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#ff7b72] to-transparent opacity-15"></div>

      <Script src="https://assets.calendly.com/assets/external/widget.js" />

      {/* Navigation */}
      <nav className="relative z-50 px-4 md:px-8 py-6 border-b border-[#21262d]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className={`text-2xl font-bold ${jetbrainsMono.className} text-[#39d353]`}>
            &gt; tablingos_
          </div>
          <button 
            onClick={() => setShowCalendly(true)}
            className="bg-[#39d353] text-[#0d1117] px-6 py-2 rounded font-semibold hover:bg-[#2ea043] transition-all duration-300 border border-[#39d353] hover:shadow-lg hover:shadow-[#39d353]/20"
          >
            call
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className={`text-sm font-mono text-[#ff7b72] ${jetbrainsMono.className}`}>
                  // data_transformation.init()
                </div>
                <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold leading-tight ${jetbrainsMono.className}`}>
                  <span className="text-white">Transform</span><br/>
                  <span className="text-[#39d353]">Messy Data</span><br/>
                  <span className="text-white">Into Perfect</span><br/>
                  <span className="text-[#ff7b72]">Insights</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Skip the development headaches. Our no-code platform handles data collection, validation, and transformation so you can focus on what matters.
                </p>
              </div>
              <button 
                onClick={() => setShowCalendly(true)}
                className="bg-[#ff7b72] text-[#0d1117] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#f85149] transition-all duration-300 border border-[#ff7b72] hover:shadow-xl hover:shadow-[#ff7b72]/20 inline-flex items-center gap-2"
              >
                <span>call</span>
                <span className={`${jetbrainsMono.className} text-sm opacity-80`}>// start_session()</span>
              </button>
            </div>
            
            {/* Terminal Preview */}
            <div className="relative">
              <div className="bg-[#21262d] rounded-lg border border-[#30363d] overflow-hidden shadow-2xl">
                <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-[#30363d]">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27ca3f]"></div>
                  <span className={`ml-4 text-sm text-gray-400 ${jetbrainsMono.className}`}>data_transform.py</span>
                </div>
                <div className={`p-6 ${jetbrainsMono.className} text-sm space-y-2`}>
                  <div className="text-[#ff7b72]">import <span className="text-[#39d353]">tablingos</span> <span className="text-gray-400">as</span> <span className="text-[#39d353]">tg</span></div>
                  <div className="text-gray-400"># Load messy CSV data</div>
                  <div className="text-white">raw_data = tg.<span className="text-[#39d353]">load</span>(<span className="text-[#a5d6ff]">'messy_sales.csv'</span>)</div>
                  <div className="text-gray-400"># Transform with drag-and-drop rules</div>
                  <div className="text-white">clean_data = raw_data.<span className="text-[#39d353]">transform</span>()</div>
                  <div className="text-gray-400"># Validate automatically</div>
                  <div className="text-white">validated = clean_data.<span className="text-[#39d353]">validate</span>()</div>
                  <div className="text-[#39d353] animate-pulse">✓ 10,000 rows processed in 2.3s</div>
                </div>
              </div>
              
              {/* Floating data flow indicators */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#39d353] rounded-full animate-pulse opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#ff7b72] rounded-full animate-pulse opacity-40" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative px-4 md:px-8 py-16 md:py-20 border-t border-[#21262d]">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 ${jetbrainsMono.className}`}>
            <div className="text-[#ff7b72] text-sm mb-4">// core_features.list()</div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Built for <span className="text-[#39d353]">Developers</span></h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-[#21262d] border border-[#30363d] rounded-lg p-8 hover:border-[#39d353] transition-all duration-300 group">
              <div className="mb-6">
                <div className="w-12 h-12 bg-[#39d353] bg-opacity-20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-opacity-30 transition-all">
                  <div className={`text-[#39d353] text-xl ${jetbrainsMono.className}`}>{'<>'}</div>
                </div>
                <h3 className={`text-xl font-bold text-white mb-3 ${jetbrainsMono.className}`}>drag_drop_builder()</h3>
                <p className="text-gray-300 leading-relaxed">
                  Intuitive drag-and-drop data transformation builder
                </p>
              </div>
              <div className={`text-xs text-[#39d353] ${jetbrainsMono.className} opacity-60`}>
                // No coding required
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#21262d] border border-[#30363d] rounded-lg p-8 hover:border-[#ff7b72] transition-all duration-300 group">
              <div className="mb-6">
                <div className="w-12 h-12 bg-[#ff7b72] bg-opacity-20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-opacity-30 transition-all">
                  <div className={`text-[#ff7b72] text-xl ${jetbrainsMono.className}`}>✓</div>
                </div>
                <h3 className={`text-xl font-bold text-white mb-3 ${jetbrainsMono.className}`}>auto_validate()</h3>
                <p className="text-gray-300 leading-relaxed">
                  Automated validation and error handling for any data type
                </p>
              </div>
              <div className={`text-xs text-[#ff7b72] ${jetbrainsMono.className} opacity-60`}>
                // Zero errors guaranteed
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#21262d] border border-[#30363d] rounded-lg p-8 hover:border-[#39d353] transition-all duration-300 group">
              <div className="mb-6">
                <div className="w-12 h-12 bg-[#39d353] bg-opacity-20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-opacity-30 transition-all">
                  <div className={`text-[#39d353] text-xl ${jetbrainsMono.className}`}>⚡</div>
                </div>
                <h3 className={`text-xl font-bold text-white mb-3 ${jetbrainsMono.className}`}>seamless_integration()</h3>
                <p className="text-gray-300 leading-relaxed">
                  Seamless integration with your existing workflows and systems
                </p>
              </div>
              <div className={`text-xs text-[#39d353] ${jetbrainsMono.className} opacity-60`}>
                // API-first architecture
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Flow Visualization */}
      <section className="relative px-4 md:px-8 py-16 md:py-20 border-t border-[#21262d]">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`mb-12 ${jetbrainsMono.className}`}>
            <div className="text-[#ff7b72] text-sm mb-4">// data_pipeline.visualize()</div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Let your data <span className="text-[#39d353]">work for you</span>,<br/>
              <span className="text-[#ff7b72]">not against you</span>
            </h2>
          </div>
          
          {/* Data transformation flow */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-12">
            <div className="bg-[#21262d] border border-[#30363d] rounded-lg p-6 text-center">
              <div className={`text-[#ff7b72] text-sm mb-2 ${jetbrainsMono.className}`}>INPUT</div>
              <div className="text-white font-semibold">Messy Data</div>
              <div className="text-xs text-gray-400 mt-1">CSV, JSON, XML</div>
            </div>
            
            <div className="flex items-center">
              <div className="w-8 h-px bg-[#39d353] animate-pulse"></div>
              <div className={`mx-2 text-[#39d353] ${jetbrainsMono.className}`}>&gt;</div>
              <div className="w-8 h-px bg-[#39d353] animate-pulse"></div>
            </div>
            
            <div className="bg-[#21262d] border border-[#39d353] rounded-lg p-6 text-center">
              <div className={`text-[#39d353] text-sm mb-2 ${jetbrainsMono.className}`}>PROCESS</div>
              <div className="text-white font-semibold">Transform</div>
              <div className="text-xs text-gray-400 mt-1">Validate & Clean</div>
            </div>
            
            <div className="flex items-center">
              <div className="w-8 h-px bg-[#39d353] animate-pulse"></div>
              <div className={`mx-2 text-[#39d353] ${jetbrainsMono.className}`}>&gt;</div>
              <div className="w-8 h-px bg-[#39d353] animate-pulse"></div>
            </div>
            
            <div className="bg-[#21262d] border border-[#30363d] rounded-lg p-6 text-center">
              <div className={`text-[#39d353] text-sm mb-2 ${jetbrainsMono.className}`}>OUTPUT</div>
              <div className="text-white font-semibold">Perfect Insights</div>
              <div className="text-xs text-gray-400 mt-1">Ready to use</div>
            </div>
          </div>
          
          <button 
            onClick={() => setShowCalendly(true)}
            className="bg-[#39d353] text-[#0d1117] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#2ea043] transition-all duration-300 border border-[#39d353] hover:shadow-xl hover:shadow-[#39d353]/20"
          >
            call
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-4 md:px-8 py-12 border-t border-[#21262d] mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className={`text-2xl font-bold ${jetbrainsMono.className} text-[#39d353]`}>
              &gt; tablingos_
            </div>
            <div className="flex items-center gap-6">
              <a 
                href="https://x.com/ibrahimansr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#39d353] transition-colors duration-300"
              >
                Twitter
              </a>
              <a 
                href="https://www.linkedin.com/company/tablingos/about/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#39d353] transition-colors duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className={`text-center mt-8 text-gray-500 text-sm ${jetbrainsMono.className}`}>
            // Let your data work for you, not against you.
          </div>
        </div>
      </footer>

      {/* Calendly Modal */}
      {showCalendly && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl h-[80vh] relative">
            <button 
              onClick={() => setShowCalendly(false)}
              className="absolute top-4 right-4 z-10 bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center text-gray-600 font-bold"
            >
              ×
            </button>
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/ibrahim-ansari4161/new-meeting"
              style={{ minWidth: '320px', height: '100%' }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}
