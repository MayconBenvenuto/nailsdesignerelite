import React, { useState } from 'react';
import '../styles/FAQ.css';

const FAQItem = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={"faq " + (faq.open ? 'open' : '')}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question">
        {faq.question}
      </div>
      <div className="faq-answer">
        {faq.answer}
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
        <h2>Dúvidas Frequentes</h2>
        <div className="faq-list">
            {faqs.map((faq, index) => (
                <FAQItem faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
            ))}
        </div>
    </section>
  );
};

export default FAQ;
