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
        <h1 data-aos="fade-up">Você Vai se Arrepender de Não Começar Hoje</h1>
        <p className="hero-description" data-aos="fade-up" data-aos-delay="150">
          Minhas alunas estão faturando alto fazendo unhas em casa com um método simples e acessível.<br />
          Invista <span className="valor-destaque">R$79</span> em você e comece a ganhar até <span className="valor-destaque">R$4.000/mês</span> com Nails Design.
        </p>
        <h2 className="testimonial-video-title" data-aos="fade-up" data-aos-delay="300">DEPOIMENTO DE UMA DE NOSSAS ALUNAS:</h2>
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
        <button
          className="hero-cta-btn"
          data-aos="fade-up"
          data-aos-delay="600"
          onClick={() => {
            if (window.fbq) {
              window.fbq('track', 'AddToCart', {
                content_name: 'Nail Designer Elite',
                value: 79,
                currency: 'BRL'
              });
            }
            window.open('https://pay.hotmart.com/M88990157L?off=vioyo3c2&checkoutMode=10&ref=H100473557A&bid=1752798014304', '_blank', 'noopener,noreferrer');
          }}
        >
          Quero me inscrever agora!
        </button>
      </div>
    </section>
  );
};

export default Hero;
