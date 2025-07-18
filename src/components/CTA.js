import React from 'react';
import '../styles/CTA.css';

const CTA = () => {
  return (
    <section className="cta" id="cta">
      <div className="container">
        <h2>Pronta para se tornar uma referência?</h2>
        <p>Garanta sua vaga agora e comece sua jornada para o sucesso.</p>
        <button
          style={{ background: 'linear-gradient(90deg, #28a745 0%, #20c997 100%)', color: '#fff', fontWeight: 700, fontSize: 16, boxShadow: '0 6px 20px rgba(40, 167, 69, 0.4)' }}
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

export default CTA;
