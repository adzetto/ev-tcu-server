import React, { useState } from 'react';
import { AdasSystemsSpecs } from './TechnicalSpecs';
import AdasSystemArchitecture, { LaneDetectionDiagram, TrafficSignDetectionDiagram, CruiseControlSystemDiagram, BlindSpotDetectionDiagram } from '../AdasSvgComponents';
import { ChevronDown, Terminal, Code, Cpu, Server } from 'lucide-react';

const AdasSpecsSection = () => {
  const [activeSection, setActiveSection] = useState('');

  return (
    <section id="adas" className="py-16 md:py-20 relative bg-gradient-to-b from-zinc-900 via-black to-zinc-900 text-white overflow-hidden">
      {/* Technical background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 h-64 w-1/3 bg-grid-pattern-small rotate-12 transform origin-top-left"></div>
        <div className="absolute bottom-0 right-0 h-48 w-1/4 bg-circuit-pattern transform origin-bottom-right"></div>
        <div className="absolute top-1/4 right-10 h-32 w-32 rounded-full bg-voltaris-red/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-10 h-40 w-40 rounded-full bg-voltaris-red/5 blur-3xl"></div>
      </div>
      
      {/* Technical connection lines */}
      <div className="absolute left-0 top-16 w-1 h-1/3 bg-gradient-to-b from-transparent via-voltaris-red/30 to-transparent"></div>
      <div className="absolute right-0 bottom-16 w-1 h-1/3 bg-gradient-to-b from-transparent via-voltaris-red/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-8 md:mb-12 relative">
          <span className="text-xs tracking-wider text-voltaris-red/80 uppercase font-mono mb-2 inline-block">Advanced Driver Assistance Systems</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-white">
            ADAS Sistemi Planlaması
          </h2>
          <div className="h-1 w-16 sm:w-20 bg-voltaris-red mx-auto"></div>
          
          <div className="flex items-center justify-center mt-4 gap-2">
            <span className="h-2 w-2 rounded-full bg-voltaris-red animate-pulse"></span>
            <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base px-2 italic">
              Advanced Driver Assistance Systems (ADAS) ile aracımız için planladığımız gelişmiş sürüş destek sistemleri.
            </p>
            <span className="h-2 w-2 rounded-full bg-voltaris-red animate-pulse"></span>
          </div>
          
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
            <Cpu className="text-voltaris-red/20 h-10 w-10" />
          </div>
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
            <Server className="text-voltaris-red/20 h-10 w-10" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12 relative">
          <div className="absolute inset-0 bg-voltaris-red/5 rounded-lg -m-4 blur-xl"></div>
          <AdasSystemsSpecs />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10 mb-10">
          <div className="bg-gradient-to-br from-zinc-900 to-black p-4 md:p-6 rounded-lg border border-zinc-800 shadow-lg relative group hover:border-voltaris-red/20 transition-all duration-300">
            <div className="absolute top-0 right-0 w-1/4 h-1 bg-gradient-to-r from-transparent to-voltaris-red/30"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1 bg-gradient-to-r from-voltaris-red/30 to-transparent"></div>
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setActiveSection(activeSection === 'architecture' ? '' : 'architecture')}>
              <div className="flex items-center">
                <Terminal className="text-voltaris-red h-5 w-5 mr-2" />
                <h3 className="text-xl font-bold text-white">ADAS Sistem Mimarisi</h3>
              </div>
              <ChevronDown className={`text-voltaris-red transition-transform duration-300 ${activeSection === 'architecture' ? 'rotate-180' : ''}`} />
            </div>
            {activeSection === 'architecture' && (
              <div className="mt-6 animate-fadeIn">
                <AdasSystemArchitecture />
              </div>
            )}
          </div>

          <div className="bg-gradient-to-br from-black to-red-950 p-4 md:p-6 rounded-lg border border-red-900/20 shadow-lg relative group hover:border-red-600/30 transition-all duration-300">
            <div className="absolute top-0 right-0 h-1/4 w-1 bg-gradient-to-b from-transparent to-red-500/20"></div>
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setActiveSection(activeSection === 'laneDetection' ? '' : 'laneDetection')}>
              <div className="flex items-center">
                <Code className="text-red-400 h-5 w-5 mr-2" />
                <h3 className="text-xl font-bold text-red-300">Şerit Takip Sistemi</h3>
              </div>
              <ChevronDown className={`text-red-400 transition-transform duration-300 ${activeSection === 'laneDetection' ? 'rotate-180' : ''}`} />
            </div>
            {activeSection === 'laneDetection' && (
              <div className="mt-6 animate-fadeIn">
                <LaneDetectionDiagram />
              </div>
            )}
          </div>

          <div className="bg-gradient-to-br from-black to-blue-950 p-4 md:p-6 rounded-lg border border-blue-900/20 shadow-lg relative group hover:border-blue-600/30 transition-all duration-300">
            <div className="absolute bottom-0 right-0 h-1/4 w-1 bg-gradient-to-b from-blue-500/20 to-transparent"></div>
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setActiveSection(activeSection === 'trafficSign' ? '' : 'trafficSign')}>
              <div className="flex items-center">
                <Code className="text-blue-400 h-5 w-5 mr-2" />
                <h3 className="text-xl font-bold text-blue-300">Trafik İşareti Tanıma</h3>
              </div>
              <ChevronDown className={`text-blue-400 transition-transform duration-300 ${activeSection === 'trafficSign' ? 'rotate-180' : ''}`} />
            </div>
            {activeSection === 'trafficSign' && (
              <div className="mt-6 animate-fadeIn">
                <TrafficSignDetectionDiagram />
              </div>
            )}
          </div>

          <div className="bg-gradient-to-br from-black to-green-950 p-4 md:p-6 rounded-lg border border-green-900/20 shadow-lg relative group hover:border-green-600/30 transition-all duration-300">
            <div className="absolute top-0 left-0 h-1/4 w-1 bg-gradient-to-b from-transparent to-green-500/20"></div>
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setActiveSection(activeSection === 'cruiseControl' ? '' : 'cruiseControl')}>
              <div className="flex items-center">
                <Code className="text-green-400 h-5 w-5 mr-2" />
                <h3 className="text-xl font-bold text-green-300">Akıllı Hız Sabitleyici</h3>
              </div>
              <ChevronDown className={`text-green-400 transition-transform duration-300 ${activeSection === 'cruiseControl' ? 'rotate-180' : ''}`} />
            </div>
            {activeSection === 'cruiseControl' && (
              <div className="mt-6 animate-fadeIn">
                <CruiseControlSystemDiagram />
              </div>
            )}
          </div>

          <div className="lg:col-span-2 bg-gradient-to-r from-black via-zinc-900 to-black p-4 md:p-6 rounded-lg border border-purple-900/20 shadow-lg relative group hover:border-purple-600/30 transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-voltaris-red/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-voltaris-red/40 to-transparent"></div>
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setActiveSection(activeSection === 'blindSpot' ? '' : 'blindSpot')}>
              <div className="flex items-center">
                <Code className="text-purple-400 h-5 w-5 mr-2" />
                <h3 className="text-xl font-bold text-purple-300">Kör Nokta Algılama</h3>
              </div>
              <ChevronDown className={`text-purple-400 transition-transform duration-300 ${activeSection === 'blindSpot' ? 'rotate-180' : ''}`} />
            </div>
            {activeSection === 'blindSpot' && (
              <div className="mt-6 animate-fadeIn">
                <BlindSpotDetectionDiagram />
              </div>
            )}
          </div>
        </div>
        
        {/* Technical footer */}
        <div className="text-center mt-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-voltaris-red/20 rounded-full bg-black/30 text-xs text-voltaris-red/80 font-mono">
            <span className="inline-block h-2 w-2 bg-voltaris-red rounded-full animate-ping"></span>
            ADAS Development in Progress
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdasSpecsSection;
