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
    <section className="hero" style={{ background: 'linear-gradient(135deg, #8A2BE2 60%, #C71585 100%)', borderRadius: 20, boxShadow: '0 8px 32px 0 rgba(138,43,226,0.15)' }}>
      <div className="hero-content">
        <h1 className="text-red-bold" style={{ marginBottom: 16, color: '#DC143C', textShadow: '0 2px 8px #6A0DAD' }}>
          Você Vai se Arrepender de Não Começar Hoje
        </h1>
        <p style={{ color: '#fff', fontWeight: 'bold', marginBottom: 16, fontSize: 20, textShadow: '0 1px 6px #6A0DAD' }}>
          Minhas alunas estão faturando alto fazendo unhas em casa com um método simples e acessível.<br />
          Invista <span style={{ color: '#DC143C', fontWeight: 900 }}>R$79</span> em você e comece a ganhar até <span style={{ color: '#DC143C', fontWeight: 900 }}>R$4.000/mês</span> com Nails Design.
        </p>
        <h2 className="testimonial-video-title">DEPOIMENTO DE UMA DE NOSSAS ALUNAS:</h2>
        <div style={{ position: 'relative', width: '100%', maxWidth: 400, margin: '16px auto', aspectRatio: '9/16' }}>
          <iframe
            src="https://www.youtube.com/embed/r0DOaqETCVQ?autoplay=1&mute=1&loop=1&playlist=r0DOaqETCVQ&modestbranding=1&controls=0&rel=0"
            title="Depoimento de uma de nossas alunas"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{ borderRadius: 10, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          ></iframe>
        </div>
        <a href="https://go.hotmart.com/H100473557A?ap=3259" target="_blank" rel="noopener noreferrer">
          <button style={{ background: '#DC143C', color: '#fff', fontWeight: 700, fontSize: 18, boxShadow: '0 2px 8px #C71585', border: 'none', borderRadius: 50, padding: '14px 32px', marginTop: 8 }}>
            Quero me inscrever agora!
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
