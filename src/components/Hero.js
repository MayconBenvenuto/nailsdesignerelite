import React, { useRef, useEffect } from 'react';
import '../styles/Hero.css';

// Vídeo hospedado no GitHub RAW - substitua <usuario>,<repo>,<branch> conforme seu repositório
const VIDEO_URL = 'https://raw.githubusercontent.com/MayconBenvenuto/nailsdesignerelite/main/src/assets/videos/depoimento.mp4';

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
        <h1 className="text-white-bold" style={{ marginBottom: 16, color: '#fff', textShadow: '0 2px 8px #6A0DAD' }}>
          Você Vai se Arrepender de Não Começar Hoje
        </h1>
        <p style={{ color: '#fff', fontWeight: 'bold', marginBottom: 16, fontSize: 20, textShadow: '0 1px 6px #6A0DAD' }}>
          Minhas alunas estão faturando alto fazendo unhas em casa com um método simples e acessível.<br />
          Invista <span style={{ color: '#DC143C', fontWeight: 900 }}>R$79</span> em você e comece a ganhar até <span style={{ color: '#DC143C', fontWeight: 900 }}>R$4.000/mês</span> com Nails Design.
        </p>
        <h2 className="testimonial-video-title">Depoimento de uma de nossas alunas</h2>
        <video
          ref={videoRef}
          className="testimonial-video"
          controls
          preload="metadata"
          playsInline
          loop
          muted
          autoPlay
          onLoadedData={() => console.log('Vídeo carregado com sucesso')} // Debug
          onError={(e) => console.error('Erro ao carregar vídeo:', e)} // Debug
        >
          <source src={VIDEO_URL} type="video/mp4" />
          Seu navegador não suporta o formato de vídeo.
        </video>
        <button style={{ background: '#DC143C', color: '#fff', fontWeight: 700, fontSize: 18, boxShadow: '0 2px 8px #C71585', border: 'none', borderRadius: 50, padding: '14px 32px', marginTop: 8 }}>
          Quero me inscrever agora
        </button>
      </div>
    </section>
  );
};

export default Hero;
