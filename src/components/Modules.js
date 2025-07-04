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
      <h2>Módulos do Curso</h2>
      <div className="modules-list">
        {modules.map((module, index) => (
          <div key={index} className="module-item">
            {module}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Modules;
