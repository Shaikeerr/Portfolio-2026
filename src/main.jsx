import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider } from './context/ThemeContext';
import { MascotProvider } from './context/MascotContext';
import { LanguageProvider } from './context/LanguageContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <ThemeProvider>
        <MascotProvider>
          <App />
        </MascotProvider>
      </ThemeProvider>
    </LanguageProvider>
  </React.StrictMode>
);

