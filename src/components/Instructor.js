import React from 'react';
import '../styles/Instructor.css';
import instructorImage from '../assets/images/vanessa.jpg';

const Instructor = () => {
  return (
    <section id="instructor" className="instructor">
      <div className="container">
        <img src={instructorImage} alt="Instrutora Vanessa Santos sorrindo, segurando esmaltes" className="instructor-image" loading="lazy" data-aos="zoom-in" />
        <h3 data-aos="fade-up">Vanessa Santos</h3>
        <h4 data-aos="fade-up" data-aos-delay="100">Nail Designer de Elite</h4>
        <p data-aos="fade-up" data-aos-delay="200">Com mais de 5 anos de experiência, Vanessa já transformou a vida de centenas de alunas, capacitando-as para se tornarem profissionais de sucesso no mercado de unhas.</p>
      </div>
    </section>
  );
};

export default Instructor;
