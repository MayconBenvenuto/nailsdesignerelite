import React, { useState } from 'react';
import '../styles/CourseHighlight.css';

const CourseHighlight = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const quizSteps = [
    {
      id: 1,
      question: "Você Está Pronta Para Virar o Jogo Ou Vai Continuar Parada no Automático",
      options: ["Sim, quero virar o jogo!", "Ainda estou em dúvida"]
    },
    {
      id: 2,
      question: "Você vai continuar assistindo outras mulheres mudarem de vida enquanto você",
      options: ["Não, quero mudar também!", "Talvez no futuro"]
    },
    {
      id: 3,
      question: "Já perdeu tempo demais, tá pronta pra agir",
      options: ["Sim, estou pronta!", "Preciso pensar mais"]
    },
    {
      id: 4,
      question: "3 vezes me peso pensando nisso, é pra",
      options: ["Agir agora!", "Continuar pensando"]
    },
    {
      id: 5,
      question: "Ainda não sei se é pra mim (mas tô cansada dessa vida)",
      options: ["Quero tentar!", "Não é pra mim"]
    }
  ];

  const handleAnswerSelect = (stepId, answer) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [stepId]: answer
    });
  };

  const nextStep = () => {
    if (currentStep < quizSteps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const currentQuiz = quizSteps[currentStep - 1];

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
              Mais de 2.000 mulheres já fizeram esse teste e descobriram o 
              caminho para faturar de casa com Nails Design – mesmo sem 
              experiência.
            </p>
          </div>

          {/* Two Columns */}
          <div className="course-highlight-columns">
            {/* Left Column - Benefits */}
            <div className="benefits-column">
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
            </div>

            {/* Right Column - Interactive Quiz */}
            <div className="quiz-column">
              <div className="quiz-card">
                <div className="quiz-header">
                  <span className="challenge-badge">💥 Desafio Rápido: Você Está Pronta Para Virar o Jogo Ou Vai Continuar Parada no Automático</span>
                </div>
                
                <div className="quiz-content">
                  <div className="step-indicator">
                    Etapa {currentStep} de {quizSteps.length}
                  </div>
                  
                  <div className="quiz-question-container">
                    <div className="quiz-step-label">
                      {String.fromCharCode(64 + currentStep)})
                    </div>
                    <p className="quiz-question-text">
                      {currentQuiz.question}
                    </p>
                  </div>
                  
                  <div className="quiz-options-container">
                    {currentQuiz.options.map((option, index) => (
                      <button
                        key={index}
                        className={`quiz-option ${selectedAnswers[currentStep] === option ? 'selected' : ''}`}
                        onClick={() => handleAnswerSelect(currentStep, option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  
                  {selectedAnswers[currentStep] && (
                    <button className="next-quiz-button" onClick={nextStep}>
                      {currentStep === quizSteps.length ? 'Finalizar' : 'Próxima'}
                    </button>
                  )}
                  
                  {currentStep === quizSteps.length && selectedAnswers[currentStep] && (
                    <div className="quiz-completion">
                      <p className="completion-text">
                        Parabéns! Você demonstrou estar pronta para esta transformação!
                      </p>
                      <a href="https://go.hotmart.com/H100473557A?ap=3259" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", display: "block", marginTop: "15px"}}>
                        <button style={{ background: 'linear-gradient(90deg, #28a745 0%, #20c997 100%)', color: '#fff', fontWeight: 700, fontSize: 16, boxShadow: '0 6px 20px rgba(40, 167, 69, 0.4)', border: 'none', borderRadius: 50, padding: '12px 24px', width: '100%', cursor: 'pointer' }}>
                          Quero me inscrever agora!
                        </button>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHighlight;
