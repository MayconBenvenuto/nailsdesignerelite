
import React from 'react';
import '../styles/Modules.css';
import modulo1Img from '../assets/images/modulo1.jpg';
import modulo2Img from '../assets/images/modulo2.png';
import modulo3Img from '../assets/images/modulo3.png';
import modulo4Img from '../assets/images/modulo4.png';
import modulo5Img from '../assets/images/modulo5.png';
import modulo6Img from '../assets/images/modulo6.png';

const Modules = () => {
  const modules = [
    "Apresentação dos Materiais",
    "Esmaltação em Gel",
    "Blindagem Diamante",
    "Banho de Fibra",
    "Manutenção e Remoção",
    "Marketing e Vendas para Nail Designers"
  ];

  return (
    <section id="modules" className="modules">
      <div className="container">
        <h2 data-aos="fade-up">Módulos do Curso</h2>
        <div className="modules-list">
          {modules.map((module, index) => (
            <div key={index} className="module-item" data-aos="fade-up" data-aos-delay={100 + index * 100}>
              {module}
              {module === "Apresentação dos Materiais" && (
                <img 
                  src={modulo1Img} 
                  alt="Apresentação dos Materiais" 
                  className="module-image"
                  style={{ marginTop: '16px', maxWidth: '100%', borderRadius: '8px', boxShadow: '0 2px 12px rgba(0,0,0,0.10)' }}
                />
              )}
              {module === "Esmaltação em Gel" && (
                <img 
                  src={modulo2Img} 
                  alt="Esmaltação em Gel" 
                  className="module-image"
                  style={{ marginTop: '16px', maxWidth: '100%', borderRadius: '8px', boxShadow: '0 2px 12px rgba(0,0,0,0.10)' }}
                />
              )}
              {module === "Blindagem Diamante" && (
                <img 
                  src={modulo3Img} 
                  alt="Blindagem Diamante" 
                  className="module-image"
                  style={{ marginTop: '16px', maxWidth: '100%', borderRadius: '8px', boxShadow: '0 2px 12px rgba(0,0,0,0.10)' }}
                />
              )}
              {module === "Alongamento em Fibra" && (
                <img 
                  src={modulo4Img} 
                  alt="Alongamento em Fibra" 
                  className="module-image"
                  style={{ marginTop: '16px', maxWidth: '100%', borderRadius: '8px', boxShadow: '0 2px 12px rgba(0,0,0,0.10)' }}
                />
              )}
              {module === "Manutenção e Remoção" && (
                <img 
                  src={modulo5Img} 
                  alt="Manutenção e Remoção" 
                  className="module-image"
                  style={{ marginTop: '16px', maxWidth: '100%', borderRadius: '8px', boxShadow: '0 2px 12px rgba(0,0,0,0.10)' }}
                />
              )}
              {module === "Marketing e Vendas para Nail Designers" && (
                <img 
                  src={modulo6Img} 
                  alt="Marketing e Vendas para Nail Designers" 
                  className="module-image"
                  style={{ marginTop: '16px', maxWidth: '100%', borderRadius: '8px', boxShadow: '0 2px 12px rgba(0,0,0,0.10)' }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;
