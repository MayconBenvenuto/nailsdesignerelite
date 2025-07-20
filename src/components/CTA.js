import React from 'react';
import '../styles/CTA.css';

const CTA = () => {
  return (
    <section className="cta" id="cta">
      <div className="container">
        <div className="cta-urgency">
          <span className="urgency-icon">●</span> ATENÇÃO: ÚLTIMAS HORAS DA PROMOÇÃO! <span className="urgency-icon">●</span>
        </div>
        <h2>Não Perca Esta Oportunidade Única!</h2>
        <div className="cta-price-highlight">
          <span className="cta-old-price">de R$197,00</span>
          <span className="cta-current-price">por apenas R$19,90</span>
        </div>
        <p>
          <span className="highlight-bullet">▶</span> <strong>Mais de 10.000 alunas já transformaram suas vidas!</strong><br />
          <span className="highlight-bullet">★</span> Avaliação 4.9/5 estrelas • <span className="highlight-bullet">✓</span> Garantia de 7 dias<br />
          <span className="highlight-bullet">+</span> Bônus exclusivos que valem mais que o curso!
        </p>
        <button
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
        <div className="cta-guarantee">
          <span className="guarantee-bullet">●</span> Parcelamento disponível • <span className="guarantee-bullet">●</span> Pagamento seguro • <span className="guarantee-bullet">●</span> Acesso imediato
        </div>
      </div>
    </section>
  );
};

export default CTA;
