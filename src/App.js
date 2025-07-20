import React, { lazy, Suspense } from 'react';
import './styles/App.css';
import { useWebVitals } from './hooks/usePerformance';

// Componentes críticos carregados imediatamente
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
// import Quiz from './components/Quiz';

// Componentes lazy-loaded (versão simplificada)
const About = lazy(() => import('./components/About'));
// const ValueProposition = lazy(() => import('./components/ValueProposition'));
const CourseHighlight = lazy(() => import('./components/CourseHighlight'));
const Modules = lazy(() => import('./components/Modules'));
const Instructor = lazy(() => import('./components/Instructor'));
const Certificates = lazy(() => import('./components/Certificates'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));
const CTA = lazy(() => import('./components/CTA'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  // Monitora Web Vitals
  useWebVitals();

  const LoadingFallback = () => (
    <div style={{
      minHeight: '100px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div>Carregando...</div>
    </div>
  );

  return (
    <div className="App">
      {/* Componentes críticos */}
      {/* <Quiz /> */}
      <Hero />
      <ValueProposition />
      
      {/* Componentes com lazy loading simples */}
      {/* <Suspense fallback={<LoadingFallback />}>
        <ValueProposition />
      </Suspense> */}
      
      <Suspense fallback={<LoadingFallback />}>
        <About />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <CourseHighlight />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <Modules />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <Instructor />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <Certificates />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <Testimonials />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <FAQ />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <CTA />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
