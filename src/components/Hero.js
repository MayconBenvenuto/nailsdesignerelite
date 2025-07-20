import React, { useRef, useEffect } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    
    const tryAutoplay = () => {
      if (video) {
        video.muted = true; // Necessário para autoplay
        const playPromise = video.play();
        
        if (playPromise !== undefined) {
          playPromise.then(() => {
            // Autoplay funcionou
            console.log('Autoplay iniciado com sucesso');
          }).catch(() => {
            // Autoplay foi bloqueado, tenta novamente na primeira interação do usuário
            console.log('Autoplay bloqueado, aguardando interação do usuário');
          });
        }
      }
    };

    const handleUserInteraction = () => {
      tryAutoplay();
      // Remove os listeners após a primeira interação
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('scroll', handleUserInteraction);
    };

    // Tenta autoplay imediatamente
    tryAutoplay();

    // Adiciona listeners para tentar autoplay na primeira interação
    document.addEventListener('touchstart', handleUserInteraction, { passive: true });
    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('scroll', handleUserInteraction, { passive: true });

    return () => {
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('scroll', handleUserInteraction);
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="urgency-banner" data-aos="fade-down">
          <span className="urgency-dot">●</span> OFERTA LIMITADA: ÚLTIMAS VAGAS HOJE! <span className="urgency-dot">●</span>
        </div>
        <h1 data-aos="fade-up">Transforme Sua Vida em 30 Dias Sendo uma Nail Designer Profissional</h1>
        <div className="price-highlight" data-aos="zoom-in" data-aos-delay="100">
          <span className="old-price">de R$197,00</span>
          <span className="current-price">por apenas R$19,90</span>
          <span className="discount-badge">90% OFF</span>
        </div>
        <p className="hero-description" data-aos="fade-up" data-aos-delay="150">
          <span className="feature-icon">▸</span> <strong>Método Completo do Básico ao Avançado</strong> - Minhas alunas estão faturando até <span className="valor-destaque">R$4.000/mês</span> trabalhando em casa!<br />
          <span className="feature-icon">▸</span> <strong>+100 Aulas Didáticas + 20 Certificados Profissionais</strong><br />
          <span className="feature-icon">▸</span> <strong>Bônus Exclusivos:</strong> Curso de Extensão de Cílios, Logotipos Editáveis e muito mais!
        </p>
        <h2 className="testimonial-video-title" data-aos="fade-up" data-aos-delay="300">VEJA O RESULTADO DE UMA ALUNA:</h2>
        <div className="hero-video-wrapper" data-aos="zoom-in" data-aos-delay="450">
          <iframe
            src="https://www.youtube.com/embed/r0DOaqETCVQ?autoplay=1&mute=1&loop=1&playlist=r0DOaqETCVQ&modestbranding=1&controls=0&rel=0"
            title="Depoimento de uma de nossas alunas"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="hero-video-iframe"
          ></iframe>
        </div>
        <div className="benefits-list" data-aos="fade-up" data-aos-delay="500">
          <div className="benefit-item">
            <span className="check-icon">✓</span> <strong>Garantia de 7 dias</strong> - Se não gostar, devolvemos seu dinheiro!
          </div>
          <div className="benefit-item">
            <span className="check-icon">✓</span> <strong>Acesso vitalício</strong> - Estude no seu ritmo, quando quiser
          </div>
          <div className="benefit-item">
            <span className="check-icon">✓</span> <strong>Suporte direto</strong> - Tire suas dúvidas com nossa equipe
          </div>
        </div>
        <div className="countdown-timer" data-aos="pulse" data-aos-delay="550">
          <span className="timer-icon">⏱</span> Esta oferta expira em algumas horas!
        </div>
        <button
          className="hero-cta-btn"
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
        <div className="trust-badges" data-aos="fade-up" data-aos-delay="650">
          <span className="trust-badge"><span className="badge-icon">●</span> Compra 100% Segura</span>
          <span className="trust-badge"><span className="badge-icon">●</span> Acesso Imediato</span>
          <span className="trust-badge"><span className="badge-icon">●</span> Certificado Incluído</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
