import React, { useState, useEffect } from 'react';
import '../styles/Quiz.css';

const quizData = [
    {
        question: "Você vai continuar assistindo outras mulheres mudarem de vida enquanto você vive no automático?",
        options: [
            "NÃO! Eu também quero conquistar minha liberdade.",
            "Já perdi tempo demais, tô pronta pra agir.",
            "Às vezes me pego pensando nisso, e dói…",
            "Ainda não sei se é pra mim (mas tô cansada dessa vida).",
        ],
    },
    {
        question: "O que te faz perder o sono hoje?",
        options: [
            "Falta de dinheiro. Tô cansada de contar moeda.",
            "Não ter um rumo na vida, nem saber por onde começar.",
            "Vontade de empreender, mas o medo me trava.",
            "A sensação de estar desperdiçando meu potencial.",
        ],
    },
    {
        question: "Quanto vale pra você trabalhar de onde quiser e faturar até R$4.000/mês com algo que ama?",
        options: [
            "Vale tudo! Só preciso de uma direção.",
            "Isso é exatamente o que estou buscando.",
            "Já pensei nisso, mas sempre adiei…",
            "Parece bom demais pra ser verdade (mas queria que fosse).",
        ],
    },
    {
        question: "Se você tivesse um passo a passo validado, com técnicas que já mudaram a vida de centenas de mulheres, o que faria agora?",
        options: [
            "Me jogava de cabeça! Quero isso pra ontem.",
            "Dava meu melhor, porque sei que posso.",
            "Começava devagar, mas não deixava passar.",
            "Ainda fico presa na dúvida e no medo…",
        ],
    },
    {
        question: "Quer ser a próxima história real de superação que vai mostrar pra todo mundo que dá pra vencer mesmo começando do zero?",
        options: [
            "SIM! Eu vou ser o próximo case de sucesso.",
            "Sim. Eu cansei de esperar pela vida perfeita.",
            "Talvez… Mas sei que não posso mais adiar.",
            "Não sei se tenho coragem — mas queria ter.",
        ],
    },
];

const Quiz = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 3000); // Mostra o popup após 3 segundos

        return () => clearTimeout(timer);
    }, []);

    const handleAnswerClick = () => {
        if (currentQuestion < quizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setQuizFinished(true);
        }
    };

    const handleShowResultClick = () => {
        // Dispara o evento do Pixel do Meta
        if (window.fbq) {
            window.fbq('trackCustom', 'leadQualificadoQuiz');
        }
        console.log("Evento leadQualificadoQuiz enviado!"); // Para teste
        setShowPopup(false); // Fecha o popup
        // Opcional: redirecionar para a seção de CTA
        document.getElementById('cta').scrollIntoView({ behavior: 'smooth' });
    };
    
    const handleClosePopup = () => {
        setShowPopup(false);
    }

    if (!showPopup) {
        return null;
    }

    return (
        <div className="quiz-overlay">
            <div className="quiz-popup">
                <button className="close-button" onClick={handleClosePopup}>&times;</button>
                
                {!quizFinished ? (
                    <>
                        <h2>🚨 Teste Rápido: Você Vai Continuar Reclamando da Vida ou Vai Lucrar com o Que Ama?</h2>
                        <p className="quiz-subtitle">⚠ Este não é um quiz qualquer. É um despertador. Responda com sinceridade e descubra se você tem o perfil para viver do mundo das unhas — mesmo começando do zero.</p>
                        
                        <p className="quiz-question">{quizData[currentQuestion].question}</p>
                        
                        <div className="quiz-options">
                            {quizData[currentQuestion].options.map((option, index) => (
                                <button key={index} onClick={handleAnswerClick}>
                                    {`${String.fromCharCode(65 + index)}) ${option}`}
                                </button>
                            ))}
                        </div>

                        <div className="progress-bar-container">
                            <div 
                                className="progress-bar" 
                                style={{ width: `${((currentQuestion + 1) / quizData.length) * 100}%` }}
                            ></div>
                        </div>
                    </>
                ) : (
                    <div className="quiz-final-message">
                        <h3>Você está a um passo de mudar sua realidade.</h3>
                        <p>Suas respostas mostram que você tem o desejo e o potencial para transformar sua paixão em uma fonte de renda e liberdade.</p>
                        <p>Clique no botão abaixo para ver o resultado e descobrir como dar o próximo passo.</p>
                        <button className="result-button" onClick={handleShowResultClick}>
                            Ver meu resultado
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Quiz;
