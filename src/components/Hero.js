import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="urgency-banner" data-aos="fade-down">
          <span className="urgency-dot">●</span> OFERTA LIMITADA: ÚLTIMAS VAGAS HOJE! <span className="urgency-dot">●</span>
        </div>
        <h1 className="font-extrabold" data-aos="fade-up">Transforme Sua Vida em 30 Dias Sendo uma Nail Designer Profissional</h1>
        <div className="price-highlight" data-aos="zoom-in" data-aos-delay="100">
          <span className="old-price small-text">de R$197,00</span>
          <span className="current-price font-bold">por apenas R$19,90</span>
          <span className="discount-badge cta-text">90% OFF</span>
        </div>
        <p className="hero-description font-medium" data-aos="fade-up" data-aos-delay="150">
          <span className="feature-icon">▸</span> <strong className="highlight-text">Método Completo do Básico ao Avançado</strong> - Minhas alunas estão faturando até <span className="valor-destaque accent-text font-bold">R$4.000/mês</span> trabalhando em casa!<br />
          <span className="feature-icon">▸</span> <strong>+100 Aulas Didáticas + 20 Certificados Profissionais</strong><br />
          <span className="feature-icon">▸</span> <strong>Bônus Exclusivos:</strong> Curso de Extensão de Cílios, Logotipos Editáveis e muito mais!
        </p>
        <h2 className="testimonial-video-title font-bold" data-aos="fade-up" data-aos-delay="300">VEJA O RESULTADO DE UMA ALUNA:</h2>
        <div className="hero-video-wrapper" data-aos="zoom-in" data-aos-delay="450">
          <iframe
            src="https://www.youtube.com/embed/r0DOaqETCVQ?controls=1&modestbranding=1&rel=0&showinfo=0"
            title="Depoimento de uma de nossas alunas"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="hero-video-iframe"
          ></iframe>
        </div>
        <div className="benefits-list" data-aos="fade-up" data-aos-delay="500">
          <div className="benefit-item font-medium">
            <span className="check-icon">✓</span> <strong className="highlight-text">Garantia de 7 dias</strong> - Se não gostar, devolvemos seu dinheiro!
          </div>
          <div className="benefit-item font-medium">
            <span className="check-icon">✓</span> <strong className="highlight-text">Acesso vitalício</strong> - Estude no seu ritmo, quando quiser
          </div>
          <div className="benefit-item font-medium">
            <span className="check-icon">✓</span> <strong className="highlight-text">Suporte direto</strong> - Tire suas dúvidas com nossa equipe
          </div>
        </div>
        <div className="countdown-timer accent-text font-semibold" data-aos="pulse" data-aos-delay="550">
          <span className="timer-icon">⏱</span> Esta oferta expira em algumas horas!
        </div>
        <button
          className="hero-cta-btn cta-text"
          data-aos="fade-up"
          data-aos-delay="600"
          onClick={() => {
            if (window.fbq) {
              window.fbq('track', 'AddToCart', {
                content_name: 'Nail Designer Elite',
                value: 19.90,
                currency: 'BRL'
              });
            }
            window.open('https://go.hotmart.com/H100473557A?ap=acb3', '_blank', 'noopener,noreferrer');
          }}
        >
          <span className="btn-arrow">→</span> QUERO COMEÇAR AGORA!
        </button>
        <div className="trust-badges small-text font-medium" data-aos="fade-up" data-aos-delay="650">
          <span className="trust-badge"><span className="badge-icon">●</span> Compra 100% Segura</span>
          <span className="trust-badge"><span className="badge-icon">●</span> Acesso Imediato</span>
          <span className="trust-badge"><span className="badge-icon">●</span> Certificado Incluído</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
