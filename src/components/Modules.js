import React from 'react';
import '../styles/Modules.css';

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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;
