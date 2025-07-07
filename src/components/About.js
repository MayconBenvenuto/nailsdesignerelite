import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 data-aos="fade-up">O que você vai aprender?</h2>
        <p data-aos="fade-up" data-aos-delay="150">
          Nosso curso foi desenhado para transformar você em uma Nail Designer de Elite, mesmo que esteja começando do zero. Aprenda as técnicas mais modernas e desejadas do mercado, domine a arte da esmaltação em gel, blindagem, banho de fibra e muito mais.
        </p>
        <div className="about-cta" data-aos="fade-up" data-aos-delay="300">
          <a href="https://go.hotmart.com/H100473557A?ap=3259" target="_blank" rel="noopener noreferrer">
            <button className="hero-cta-btn" style={{margin: '20px auto 0'}}>
              Quero começar agora!
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
