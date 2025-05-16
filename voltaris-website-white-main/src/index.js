import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles.css';
import './responsive.css';
import Router from './Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);