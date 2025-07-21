import React from 'react';
import '../styles/ValueProposition.css';

const ValueProposition = () => {
  return (
    <section className="value-proposition">
      <div className="container">
        <div className="value-header">
          <h2><span className="target-icon">◉</span> O Que Você Vai Receber por Apenas R$19,90:</h2>
          <p className="value-subtitle">Um investimento que pode transformar sua vida financeira!</p>
        </div>
        
        <div className="value-grid">
          <div className="value-item" data-aos="fade-up" data-aos-delay="100">
            <div className="value-icon">📚</div>
            <h3>+100 Aulas Completas</h3>
            <p>Do básico ao avançado, tudo explicado passo a passo</p>
            <span className="value-price">Valor: R$97,00</span>
          </div>
          
          <div className="value-item" data-aos="fade-up" data-aos-delay="200">
            <div className="value-icon">🏆</div>
            <h3>20 Certificados Profissionais</h3>
            <p>Certificados reconhecidos para validar seu conhecimento</p>
            <span className="value-price">Valor: R$50,00</span>
          </div>
          
          <div className="value-item" data-aos="fade-up" data-aos-delay="300">
            <div className="value-icon">👁</div>
            <h3>Curso de Extensão de Cílios</h3>
            <p>Bônus exclusivo para ampliar seus serviços</p>
            <span className="value-price">Valor: R$47,00</span>
          </div>
          
          <div className="value-item" data-aos="fade-up" data-aos-delay="400">
            <div className="value-icon">🎨</div>
            <h3>Logotipos Editáveis</h3>
            <p>Templates profissionais para sua marca</p>
            <span className="value-price">Valor: R$30,00</span>
          </div>
          
          <div className="value-item" data-aos="fade-up" data-aos-delay="500">
            <div className="value-icon">📋</div>
            <h3>Ficha de Anamnese</h3>
            <p>Documentos prontos para uso profissional</p>
            <span className="value-price">Valor: R$25,00</span>
          </div>
          
          <div className="value-item" data-aos="fade-up" data-aos-delay="600">
            <div className="value-icon">💡</div>
            <h3>Estratégias de Precificação</h3>
            <p>Como definir preços competitivos na sua região</p>
            <span className="value-price">Valor: R$37,00</span>
          </div>
        </div>
        
        <div className="value-total" data-aos="zoom-in" data-aos-delay="700">
          <div className="total-calculation">
            <p className="total-text">Valor total de tudo que você recebe:</p>
            <p className="total-amount">R$286,00</p>
            <p className="discount-text">Seu investimento hoje:</p>
            <p className="final-price">Apenas R$19,90</p>
            <div className="savings">
              <span className="savings-badge">Você economiza R$266,10!</span>
            </div>
          </div>
        </div>
        
        <div className="guarantee-section" data-aos="fade-up" data-aos-delay="800">
          <div className="guarantee-icon">🛡</div>
          <h3>Garantia Incondicional de 7 Dias</h3>
          <p>Se por qualquer motivo você não ficar satisfeita, devolvemos 100% do seu dinheiro. Sem perguntas, sem complicações!</p>
        </div>
        
        <div className="value-cta-section" data-aos="fade-up" data-aos-delay="900">
          <button
            className="value-cta-btn"
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
            <span className="btn-icon">→</span> APROVEITAR ESTA OFERTA AGORA!
          </button>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
