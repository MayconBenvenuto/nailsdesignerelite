import React from 'react';
import './styles/App.css';

import Hero from './components/Hero';
import About from './components/About';
import Modules from './components/Modules';
import Instructor from './components/Instructor';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Modules />
      <Instructor />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
