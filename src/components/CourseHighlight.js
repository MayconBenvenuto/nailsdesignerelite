import React from 'react';
import '../styles/CourseHighlight.css';

const CourseHighlight = () => {
  return (
    <section className="course-highlight">
      <div className="course-highlight-container">
        <div className="course-highlight-content">
          {/* Header */}
          <div className="course-highlight-header">
            <h1 className="course-highlight-title" data-aos="fade-up">
              <span className="fire-emoji" aria-label="Fogo" role="img">🔥</span> De Zero a Nail Designer Lucrativa em Apenas 30 Dias
            </h1>
            <p className="course-highlight-subtitle" data-aos="fade-up" data-aos-delay="150">
              Mais de 2.000 mulheres já transformaram suas vidas com Nails Design – 
              agora é a sua vez de começar a faturar de casa, mesmo sem experiência.
            </p>
          </div>

          {/* Centralized Benefits */}
          <div className="course-highlight-benefits">
            <div className="benefit-item">
              <span className="check-icon">✓</span>
              <div className="benefit-content">
                <h3>Curso completo e certificado</h3>
              </div>
            </div>
            
            <div className="benefit-item">
              <span className="check-icon">✓</span>
              <div className="benefit-content">
                <h3>Estude no seu tempo, direto do celular</h3>
              </div>
            </div>
            
            <div className="benefit-item">
              <span className="check-icon">✓</span>
              <div className="benefit-content">
                <h3>Suporte exclusivo e acesso vitalício</h3>
              </div>
            </div>

            {/* Call to Action */}
            <div className="cta-section">
              <a href="https://go.hotmart.com/H100473557A?ap=3259" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", display: "block", marginTop: "30px"}}>
                <button style={{ 
                  background: 'linear-gradient(90deg, #28a745 0%, #20c997 100%)', 
                  color: '#fff', 
                  fontWeight: 700, 
                  fontSize: 18, 
                  boxShadow: '0 6px 20px rgba(40, 167, 69, 0.4)', 
                  border: 'none', 
                  borderRadius: 50, 
                  padding: '15px 35px', 
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}>
                  Quero me inscrever agora!
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHighlight;
