
import React from 'react';
import '../styles/Modules.css';
import modulo2Img from '../assets/images/modulo2.png';
import modulo4Img from '../assets/images/modulo4.png';
import modulo5Img from '../assets/images/modulo5.png';
import modulo6Img from '../assets/images/modulo6.png';

const Modules = () => {
  const modules = [
    "Esmaltação em Gel",
    "Alongamento de Fibra",
    "Manutenção e Remoção",
    "Marketing e Vendas para Nail Designers"
  ];

  return (
    <section id="modules" className="modules">
      <div className="container">
        <h2 className="font-bold" data-aos="fade-up">Módulos do Curso</h2>
        <div className="modules-list">
          {modules.map((module, index) => (
            <div key={index} className="module-item font-semibold" data-aos="fade-up" data-aos-delay={100 + index * 100}>
              {module}
            
              {module === "Esmaltação em Gel" && (
                <img 
                  src={modulo2Img} 
                  alt="Esmaltação em Gel" 
                  className="module-image"
                  style={{ marginTop: '16px', maxWidth: '100%', borderRadius: '8px', boxShadow: '0 2px 12px rgba(0,0,0,0.10)' }}
                />
              )}
             
              {module === "Alongamento de Fibra" && (
                <img 
                  src={modulo4Img} 
                  alt="Alongamento de Fibra" 
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
