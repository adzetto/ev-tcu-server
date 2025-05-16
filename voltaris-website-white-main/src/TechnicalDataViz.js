import React from 'react';

// Technical Data Visualization Component for App.js - removed animation effects
const TechnicalDataViz = () => {
  return (
    <div className="flex space-x-2 mb-4">
      <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-green-500 to-red-500 w-9/12"></div>
      </div>
      <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-blue-500 to-red-500 w-8/12"></div>
      </div>
      <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-red-500 to-yellow-500 w-10/12"></div>
      </div>
      <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-yellow-500 to-red-500 w-7/12"></div>
      </div>
      <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-red-500 to-blue-500 w-9/12"></div>
      </div>
    </div>
  );
};

export default TechnicalDataViz;