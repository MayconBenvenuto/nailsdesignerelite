// Utilitários de performance
export const performance = {
  // Preload de recursos críticos
  preloadResource: (href, as, type = null) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    if (type) link.type = type;
    document.head.appendChild(link);
  },

  // Prefetch de recursos futuros
  prefetchResource: (href) => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = href;
    document.head.appendChild(link);
  },

  // Lazy load de scripts
  loadScript: (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  },

  // Observador de performance
  observePerformance: () => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log('Performance entry:', entry);
        }
      });
      
      observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });
    }
  },

  // Medição de métricas customizadas
  measureCustomMetric: (name, startMark, endMark) => {
    if ('performance' in window) {
      performance.measure(name, startMark, endMark);
      const measure = performance.getEntriesByName(name)[0];
      console.log(`${name}: ${measure.duration}ms`);
      return measure.duration;
    }
  },

  // Marca de tempo
  mark: (name) => {
    if ('performance' in window) {
      performance.mark(name);
    }
  },

  // Otimização de imagens
  getOptimizedImageSrc: (src, width, quality = 80) => {
    // Se for uma URL externa, retorna como está
    if (src.startsWith('http')) return src;
    
    // Para imagens locais, adiciona parâmetros de otimização se suportado
    const extension = src.split('.').pop().toLowerCase();
    
    // Converte para WebP se suportado
    if (['jpg', 'jpeg', 'png'].includes(extension)) {
      const supportsWebP = document.createElement('canvas')
        .toDataURL('image/webp').indexOf('data:image/webp') === 0;
      
      if (supportsWebP) {
        return src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      }
    }
    
    return src;
  },

  // Debounce para otimizar eventos
  debounce: (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Throttle para scroll/resize
  throttle: (func, limit) => {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
};

// Web Vitals helper
export const webVitals = {
  // Largest Contentful Paint
  getLCP: (callback) => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        callback(lastEntry.startTime);
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }
  },

  // First Input Delay
  getFID: (callback) => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          callback(entry.processingStart - entry.startTime);
        }
      });
      observer.observe({ entryTypes: ['first-input'] });
    }
  },

  // Cumulative Layout Shift
  getCLS: (callback) => {
    if ('PerformanceObserver' in window) {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            callback(clsValue);
          }
        }
      });
      observer.observe({ entryTypes: ['layout-shift'] });
    }
  }
};

export default performance;
