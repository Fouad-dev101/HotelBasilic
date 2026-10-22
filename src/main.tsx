import React from 'react';
import ReactDOM from 'react-dom/client';
import { LanguageProvider } from './i18n/LanguageContext';
import { BookingProvider } from './context/BookingContext';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <BookingProvider>
        <App />
      </BookingProvider>
    </LanguageProvider>
  </React.StrictMode>
);