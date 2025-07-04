import React from 'react';
import '../styles/Instructor.css';
import instructorImage from '../assets/images/vanessa.jpg';

const Instructor = () => {
  return (
    <section id="instructor" className="instructor">
      <div className="container">
        <img src={instructorImage} alt="Instrutora Vanessa Santos" className="instructor-image" />
        <h3>Vanessa Santos</h3>
        <h4>Nail Designer de Elite</h4>
        <p>Com mais de 5 anos de experiência, Vanessa já transformou a vida de centenas de alunas, capacitando-as para se tornarem profissionais de sucesso no mercado de unhas.</p>
      </div>
    </section>
  );
};

export default Instructor;
