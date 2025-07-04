import React from 'react';
import '../styles/CTA.css';

const CTA = () => {
  return (
    <section className="cta" id="cta">
      <div className="container">
        <h2>Pronta para se tornar uma referência?</h2>
        <p>Garanta sua vaga agora e comece sua jornada para o sucesso.</p>
        {/* Botão agora abre o site de inscrição */}
        <a href="https://www.naildesignerelite.com.br" target="_blank" rel="noopener noreferrer">
          <button>Quero me inscrever com desconto</button>
        </a>
      </div>
    </section>
  );
};

export default CTA;
