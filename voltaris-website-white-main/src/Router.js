import React from 'react';
import App from './App';
import MinimalDuyurularPage from './pages/MinimalDuyurularPage';

const Router = () => {
  // Simple routing logic
  const path = window.location.pathname;
  
  // Handle different routes
  switch(path) {
    case '/duyurular':
      return <MinimalDuyurularPage />;
    default:
      return <App />;
  }
};

export default Router;