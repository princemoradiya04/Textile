import { useState, useEffect } from 'react';
import { Router } from "./components/Router";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Add smooth scrolling behavior to the entire document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Simulate loading time for initial load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // SEO and Meta improvements
  useEffect(() => {
    document.title = "Global Spinners & Textiles - Premium Fabric Manufacturing Since 1970";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Leading textile manufacturer specializing in cotton, wool, and synthetic fabrics. Sustainable production, premium quality, serving 35+ countries worldwide since 1970.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Leading textile manufacturer specializing in cotton, wool, and synthetic fabrics. Sustainable production, premium quality, serving 35+ countries worldwide since 1970.';
      document.head.appendChild(meta);
    }

    // Add viewport meta tag for mobile optimization
    const viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1.0';
      document.head.appendChild(meta);
    }

    // Add keywords
    const keywords = document.querySelector('meta[name="keywords"]');
    if (!keywords) {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'textile manufacturing, cotton yarns, wool fabrics, synthetic textiles, sustainable manufacturing, B2B textiles, fabric supplier';
      document.head.appendChild(meta);
    }
  }, []);

  // Handle potential CSS loading issues gracefully
  useEffect(() => {
    // Ensure CSS custom properties are available
    const testElement = document.createElement('div');
    testElement.className = 'container-100';
    testElement.style.position = 'absolute';
    testElement.style.top = '-9999px';
    document.body.appendChild(testElement);
    
    // Check if custom utilities are working
    const computedStyle = window.getComputedStyle(testElement);
    const hasCustomPadding = computedStyle.paddingLeft !== '0px';
    
    if (!hasCustomPadding) {
      // Fallback: Add inline CSS for critical utilities
      const fallbackCSS = `
        .container-100 {
          width: 100%;
          margin-left: auto;
          margin-right: auto;
          padding-left: 1rem;
          padding-right: 1rem;
          max-width: 100%;
        }
        
        @media (min-width: 640px) {
          .container-100 {
            padding-left: 2rem;
            padding-right: 2rem;
            max-width: calc(100% - 4rem);
          }
        }
        
        @media (min-width: 768px) {
          .container-100 {
            padding-left: 3rem;
            padding-right: 3rem;
            max-width: calc(100% - 6rem);
          }
        }
        
        @media (min-width: 1024px) {
          .container-100 {
            padding-left: 4rem;
            padding-right: 4rem;
            max-width: calc(100% - 8rem);
          }
        }
        
        @media (min-width: 1280px) {
          .container-100 {
            padding-left: 5rem;
            padding-right: 5rem;
            max-width: calc(100% - 10rem);
          }
        }
        
        @media (min-width: 1536px) {
          .container-100 {
            padding-left: 6.25rem;
            padding-right: 6.25rem;
            max-width: calc(100% - 12.5rem);
          }
        }
        
        .section-padding-responsive {
          padding-top: 2rem;
          padding-bottom: 2rem;
        }
        
        @media (min-width: 768px) {
          .section-padding-responsive {
            padding-top: 4rem;
            padding-bottom: 4rem;
          }
        }
        
        @media (min-width: 1024px) {
          .section-padding-responsive {
            padding-top: 5rem;
            padding-bottom: 5rem;
          }
        }
        
        @media (min-width: 1280px) {
          .section-padding-responsive {
            padding-top: 6rem;
            padding-bottom: 6rem;
          }
        }
      `;
      
      const styleElement = document.createElement('style');
      styleElement.textContent = fallbackCSS;
      document.head.appendChild(styleElement);
    }
    
    document.body.removeChild(testElement);
  }, []);

  return <Router isLoading={isLoading} />;
}