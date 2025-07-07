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
          <button
            className="hero-cta-btn"
            style={{margin: '20px auto 0'}}
            onClick={() => {
              if (window.fbq) {
                window.fbq('track', 'AddToCart', {
                  content_name: 'Nail Designer Elite',
                  value: 79,
                  currency: 'BRL'
                });
              }
              window.open('https://go.hotmart.com/H100473557A?ap=3259', '_blank', 'noopener,noreferrer');
            }}
          >
            Quero começar agora!
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
