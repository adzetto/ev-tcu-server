import React from 'react';
import { VehicleSpecifications } from './TechnicalSpecs';

const VehicleSpecsSection = () => {
  return (
    <section id="vehicle" className="py-16 md:py-20 relative bg-white">
      <div className="container mx-auto px-4 z-10">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-voltaris-text">Araç Özellikleri</h2>
          <div className="h-1 w-16 sm:w-20 bg-voltaris-red mx-auto"></div>
          <p className="text-voltaris-secondary mt-4 max-w-2xl mx-auto text-sm sm:text-base px-2">
            Elektrikli aracımızın tasarım özellikleri ve performans değerleri.
          </p>
        </div>
        
        <VehicleSpecifications />
      </div>
    </section>
  );
};

export default VehicleSpecsSection;
