import React from 'react';
import '../styles/CTA.css';

const CTA = () => {
  return (
    <section className="cta" id="cta">
      <div className="container">
        <div className="cta-urgency">
          <span className="urgency-icon">●</span> ATENÇÃO: ÚLTIMAS HORAS DA PROMOÇÃO! <span className="urgency-icon">●</span>
        </div>
        <h2 className="font-extrabold">Não Perca Esta Oportunidade Única!</h2>
        <div className="cta-price-highlight">
          <span className="cta-old-price small-text">de R$79,90</span>
          <span className="cta-current-price font-bold">por apenas R$19,90</span>
        </div>
        <p className="font-medium">
          <span className="highlight-bullet">▶</span> <strong className="highlight-text">Mais de 10.000 alunas já transformaram suas vidas!</strong><br />
          <span className="highlight-bullet">★</span> <span className="accent-text">Avaliação 4.9/5 estrelas</span> • <span className="highlight-bullet">✓</span> Garantia de 7 dias<br />
          <span className="highlight-bullet">+</span> <strong>Bônus exclusivos que valem mais que o curso!</strong>
        </p>
        <button
          className="cta-text"
          style={{ 
            background: 'linear-gradient(90deg, #FF6B35 0%, #F7931E 100%)', 
            color: '#fff', 
            fontWeight: 700, 
            fontSize: 18, 
            boxShadow: '0 8px 25px rgba(255, 107, 53, 0.4)',
            border: 'none',
            borderRadius: '50px',
            padding: '16px 40px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            animation: 'pulse 2s infinite'
          }}
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
          <span className="btn-icon">→</span> ÚLTIMAS VAGAS - GARANTIR AGORA!
        </button>
        <div className="cta-guarantee small-text font-medium">
          <span className="guarantee-bullet">●</span> Parcelamento disponível • <span className="guarantee-bullet">●</span> Pagamento seguro • <span className="guarantee-bullet">●</span> Acesso imediato
        </div>
      </div>
    </section>
  );
};

export default CTA;
