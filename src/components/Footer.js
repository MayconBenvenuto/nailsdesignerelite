import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3><span className="fire-emoji">🔥</span> Nail Designer Elite</h3>
            <p>Transforme sua paixão em uma carreira lucrativa e bem-sucedida com nosso método comprovado por mais de 2.000 alunas.</p>
            <div className="footer-cta">
              <a href="https://go.hotmart.com/H100473557A?ap=3259" target="_blank" rel="noopener noreferrer">
                <button>Quero me inscrever agora!</button>
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Acessos Rápidos</h3>
            <ul>
              <li><a href="#about">✓ Sobre o Curso</a></li>
              <li><a href="#modules">✓ Módulos de Ensino</a></li>
              <li><a href="#instructor">✓ Conheça a Instrutora</a></li>
              <li><a href="#certificates">✓ Alunas Certificadas</a></li>
              <li><a href="#faq">✓ Dúvidas Frequentes</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Nails Design Elite. Todos os direitos reservados.</p>
          <p>
            <a href="#privacy" className="footer-link">Política de Privacidade</a> | 
            <a href="#terms" className="footer-link">Termos de Uso</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
