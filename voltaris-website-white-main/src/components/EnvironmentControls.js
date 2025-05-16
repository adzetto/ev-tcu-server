import React, { useState, useEffect } from 'react';

/**
 * Environment controls component for 3D model viewers
 * Allows changing environment presets for 3D models
 */
const EnvironmentControls = ({ currentEnvironment, onEnvironmentChange }) => {
  // State to track if the control should pulse
  const [shouldPulse, setShouldPulse] = useState(true);
  
  // Stop pulsing after it's been clicked once
  const handleEnvChange = (envId) => {
    onEnvironmentChange(envId);
    setShouldPulse(false);
  };
  
  // Automatically stop pulsing after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldPulse(false);
    }, 10000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Environment presets options
  const environmentOptions = [
    { id: 'city', name: 'Şehir' },
    { id: 'sunset', name: 'Gün Batımı' },
    { id: 'dawn', name: 'Şafak' },
    { id: 'night', name: 'Gece' },
    { id: 'warehouse', name: 'Laboratuvar' },
    { id: 'studio', name: 'Stüdyo' }
  ];

  return (
    <div className={`absolute top-12 right-2 sm:top-14 sm:right-3 z-30 rounded-md bg-voltaris-neutral-100/90 backdrop-blur-sm border border-voltaris-neutral-300/50 shadow-sm p-1 sm:p-1 environment-controls ${shouldPulse ? 'animate-pulse-soft' : ''}`}>
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center px-1 py-0.5 bg-voltaris-neutral-50 border-l-2 border-yellow-500/60 rounded-r mb-0.5">
          <div className="h-1 w-1 rounded-full bg-yellow-500 mr-1"></div>
          <span className="text-[7px] sm:text-[8px] font-mono text-voltaris-neutral-700 uppercase">Ortam</span>
        </div>
        <div className="flex flex-wrap gap-0.5">
          {environmentOptions.map((env) => (
            <button
              key={env.id}
              className={`text-[6px] sm:text-[7px] px-1 py-0.5 rounded font-mono ${
                currentEnvironment === env.id
                  ? 'bg-voltaris-neutral-700 text-white'
                  : 'bg-voltaris-neutral-100 text-voltaris-neutral-700 hover:bg-voltaris-neutral-200'
              } transition-colors`}
              onClick={() => handleEnvChange(env.id)}
            >
              {env.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnvironmentControls; 