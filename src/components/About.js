import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>O que você vai aprender?</h2>
        <p>
          Nosso curso foi desenhado para transformar você em uma Nail Designer de Elite, mesmo que esteja começando do zero. Aprenda as técnicas mais modernas e desejadas do mercado, domine a arte da esmaltação em gel, blindagem, banho de fibra e muito mais.
        </p>
        <div className="about-cta">
          <a href="https://go.hotmart.com/H100473557A?ap=3259" target="_blank" rel="noopener noreferrer">
            <button style={{ background: 'linear-gradient(90deg, #28a745 0%, #20c997 100%)', color: '#fff', fontWeight: 700, fontSize: 16, boxShadow: '0 6px 20px rgba(40, 167, 69, 0.4)', border: 'none', borderRadius: 50, padding: '12px 24px', margin: '20px auto 0', cursor: 'pointer' }}>
              Quero começar agora!
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
