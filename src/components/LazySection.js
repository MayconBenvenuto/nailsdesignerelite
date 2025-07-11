import React, { Suspense } from 'react';
import { useLazyLoading } from '../hooks/usePerformance';

const LazySection = ({ 
  children, 
  fallback = null, 
  className = '',
  threshold = 0.1,
  rootMargin = '50px'
}) => {
  const [ref, isVisible] = useLazyLoading(threshold, rootMargin);

  const defaultFallback = (
    <div 
      style={{
        minHeight: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f9f9f9'
      }}
    >
      <div 
        style={{
          width: '40px',
          height: '40px',
          border: '3px solid #ddd',
          borderTop: '3px solid #667eea',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}
      />
    </div>
  );

  return (
    <div ref={ref} className={className}>
      {isVisible ? (
        <Suspense fallback={fallback || defaultFallback}>
          {children}
        </Suspense>
      ) : (
        fallback || defaultFallback
      )}
    </div>
  );
};

export default LazySection;
