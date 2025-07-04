import React from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Paula",
      text: "O curso superou minhas expectativas! A didática da Vanessa é incrível e o suporte é excelente. Hoje tenho minha agenda lotada!"
    },
    {
      name: "Juliana Costa",
      text: "Eu não sabia nada sobre unhas de gel e hoje sou uma profissional de sucesso na minha cidade. Só tenho a agradecer!"
    },
    {
      name: "Fernanda Lima",
      text: "Melhor investimento que fiz na minha carreira. As técnicas ensinadas são as mais pedidas pelas clientes."
    }
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2>O que nossas alunas dizem</h2>
        <div className="testimonials-list">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item">
              <p>"{testimonial.text}"</p>
              <h4>- {testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
