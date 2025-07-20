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
      question: '● Por que o curso está com este preço promocional?',
      answer: 'Esta é uma promoção especial para celebrar nossa meta de 10.000 alunas! O valor normal é R$197,00, mas queremos tornar o conhecimento acessível para mais mulheres transformarem suas vidas.',
      open: false
    },
    {
      question: '▸ Por quanto tempo esta oferta ficará disponível?',
      answer: 'Esta promoção é limitada e pode sair do ar a qualquer momento. Quando atingirmos nossa meta de vagas, o preço retorna ao valor normal de R$197,00.',
      open: false
    },
    {
      question: '▸ Preciso ter experiência para fazer o curso?',
      answer: 'Não! Nosso curso é para todas, desde a iniciante que nunca pegou em um pincel até a profissional que deseja se aperfeiçoar. Começamos do absoluto zero!',
      open: false
    },
    {
      question: '▸ O acesso ao curso é vitalício?',
      answer: 'Sim! Você paga uma vez e tem acesso para sempre, incluindo todas as atualizações futuras. Pode estudar no seu tempo, quando quiser.',
      open: false
    },
    {
      question: '▸ Receberei certificados?',
      answer: 'Sim! Você receberá 20 certificados profissionais válidos em todo o território nacional, que podem ser usados para comprovar sua qualificação.',
      open: false
    },
    {
      question: '▸ Posso parcelar o pagamento?',
      answer: 'Sim! Mesmo sendo apenas R$19,90, você pode parcelar no cartão de crédito através da plataforma segura da Hotmart.',
      open: false
    },
    {
      question: '▸ E se eu não gostar do curso?',
      answer: 'Oferecemos garantia incondicional de 7 dias! Se por qualquer motivo não ficar satisfeita, devolvemos 100% do seu dinheiro, sem perguntas.',
      open: false
    },
    {
      question: '▸ Quanto posso ganhar como nail designer?',
      answer: 'Nossas alunas relatam ganhos de R$1.500 a R$4.000+ por mês. O valor varia conforme dedicação, região e clientela. Algumas trabalham meio período e outras em tempo integral.',
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
