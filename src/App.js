import React from 'react';
import './styles/App.css';

import Hero from './components/Hero';
import About from './components/About';
import Modules from './components/Modules';
import Instructor from './components/Instructor';
import Certificates from './components/Certificates';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Quiz from './components/Quiz';

function App() {
  return (
    <div className="App">
      <Quiz />
      <Hero />
      <About />
      <Modules />
      <Instructor />
      <Certificates />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
