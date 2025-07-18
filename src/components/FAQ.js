import React, { useState } from 'react';
import '../styles/FAQ.css';

const FAQItem = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={"faq " + (faq.open ? 'open' : '')}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question" tabIndex={0} aria-expanded={faq.open} aria-controls={`faq-answer-${index}`}> 
        {faq.question}
      </div>
      <div className="faq-answer" id={`faq-answer-${index}`} aria-hidden={!faq.open}>
        <p>{faq.answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      question: 'Preciso ter experiência para fazer o curso?',
      answer: 'Não! Nosso curso é para todas, desde a iniciante que nunca pegou em um pincel até a profissional que deseja se aperfeiçoar.',
      open: false
    },
    {
      question: 'O acesso ao curso é vitalício?',
      answer: 'Sim, você paga uma vez e tem acesso para sempre, incluindo todas as atualizações futuras.',
      open: false
    },
    {
      question: 'Receberei um certificado?',
      answer: 'Sim! Ao concluir o curso, você receberá um certificado de conclusão válido em todo o território nacional.',
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setFaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open;
      } else {
        faq.open = false;
      }
      return faq;
    }));
  };

  return (
    <section id="faq" className="faqs">
      <div className="container">
        <h2 data-aos="fade-up">Dúvidas Frequentes</h2>
        <div className="faq-list">
            {faqs.map((faq, index) => (
                <div data-aos="fade-up" data-aos-delay={index * 100} key={index}>
                  <FAQItem faq={faq} index={index} toggleFAQ={toggleFAQ} />
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
