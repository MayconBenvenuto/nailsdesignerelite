import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="text-white-bold" style={{marginBottom: 16}}>
          Você Vai se Arrepender de Não Começar Hoje
        </h1>
        <p style={{color: '#fff', fontWeight: 'bold', marginBottom: 16}}>
          Tem mulher faturando alto fazendo unhas em casa com um método simples e acessível.<br/>
          Invista R$79 em você e comece a ganhar até R$4.000/mês com Nails Design.
        </p>
        <button>Quero me inscrever agora</button>
      </div>
    </section>
  );
};

export default Hero;
