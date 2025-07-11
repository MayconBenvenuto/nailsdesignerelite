import React, { useState } from 'react';
import { useLazyLoading, useImagePreload } from '../hooks/usePerformance';

const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  loading = 'lazy',
  critical = false,
  placeholder = null
}) => {
  const [ref, isVisible] = useLazyLoading();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  // Para imagens críticas, preload imediatamente
  const { loaded: preloaded } = useImagePreload(critical ? src : '');
  
  // Determina se deve carregar a imagem
  const shouldLoad = critical || isVisible || preloaded;
  
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div 
      ref={ref} 
      className={`optimized-image-container ${className}`}
      style={{ 
        width: width ? `${width}px` : '100%', 
        height: height ? `${height}px` : 'auto',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Placeholder enquanto carrega */}
      {!imageLoaded && !imageError && (
        <div 
          className="image-placeholder"
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1
          }}
        >
          {placeholder || (
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
          )}
        </div>
      )}
      
      {/* Imagem principal */}
      {shouldLoad && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          decoding="async"
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'opacity 0.3s ease',
            opacity: imageLoaded ? 1 : 0
          }}
        />
      )}
      
      {/* Fallback para erro */}
      {imageError && (
        <div 
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#f8f8f8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#666',
            fontSize: '14px'
          }}
        >
          Imagem não disponível
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
