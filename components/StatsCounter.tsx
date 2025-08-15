import { motion } from 'framer-motion';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import { useState, useEffect } from 'react';

interface StatsCounterProps {
  value: string | number;
  label: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function StatsCounter({ value, label, suffix = '', duration = 2000, className = '' }: StatsCounterProps) {
  const [ref, isInView] = useIntersectionObserver({ threshold: 0.3 });
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Extract numeric value for animation
  const numericValue = typeof value === 'string' ? parseInt(value.replace(/\D/g, ''), 10) || 0 : value;
  const displayValue = typeof value === 'string' ? value : value.toString();

  useEffect(() => {
    if (isInView && !hasAnimated && numericValue > 0) {
      setHasAnimated(true);
      
      const startTime = Date.now();
      const animate = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * numericValue);
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isInView, hasAnimated, numericValue, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`text-center ${className}`}
    >
      <div className="text-4xl lg:text-5xl font-bold text-accent mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
        {hasAnimated ? count : 0}{suffix}
      </div>
      <div className="text-base lg:text-lg text-muted-foreground font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
        {label}
      </div>
    </motion.div>
  );
}