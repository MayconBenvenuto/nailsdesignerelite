import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import './index.css';


import App from './App';
import reportWebVitals from './reportWebVitals';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Scroll suave para navegação por âncoras e inicialização do AOS
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
      duration: 900,
      once: true,
      offset: 60,
      easing: 'ease-in-out',
    });
  });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
