import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">Logo</div>
        <nav>
          <ul>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#modules">Módulos</a></li>
            <li><a href="#instructor">Instrutora</a></li>
            <li><a href="#testimonials">Depoimentos</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
