import React from 'react';
import reactDOM from 'react-dom/client';
import App from './App';

const a = '1';
console.log(a);

const root = reactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
