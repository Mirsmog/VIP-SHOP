import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
const Context = React.createContext(null);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <App />
  </React.StrictMode>
);
