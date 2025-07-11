import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import './styles/critical.css';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Configuração básica sem medições complexas de performance
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function () {
    // Scroll suave
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
      link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
    
    // Inicializa AOS
    AOS.init({
      duration: 600,
      once: true,
      offset: 60,
      easing: 'ease-in-out',
      disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches
    });
  });
  
  // Remove loading spinner quando React renderizar
  window.addEventListener('load', () => {
    const spinner = document.getElementById('loading-spinner');
    if (spinner) {
      setTimeout(() => {
        spinner.style.opacity = '0';
        setTimeout(() => {
          spinner.style.display = 'none';
        }, 300);
      }, 500);
    }
  });
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Web Vitals básico
reportWebVitals(console.log);
