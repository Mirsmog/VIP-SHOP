import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import userStore from './store/userStore.js';
export const Context = React.createContext(null);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context.Provider
      value={{
        user: new userStore(),
      }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>
);
