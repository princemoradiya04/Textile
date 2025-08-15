import { ReactNode } from 'react';

interface ContainerWrapperProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'narrow' | 'medium' | 'wide' | 'full';
}

export function ContainerWrapper({ 
  children, 
  className = '', 
  variant = 'default' 
}: ContainerWrapperProps) {
  // Fallback responsive padding classes for when custom utilities fail
  const fallbackClasses = "w-full mx-auto px-4 sm:px-5 md:px-12 lg:px-16 xl:px-20 2xl:px-24";
  
  // Custom utility classes (will override fallback if working)
  const customClass = variant === 'default' ? 'container-100' : `container-${variant}`;
  
  return (
    <div className={`${customClass} ${fallbackClasses} ${className}`}>
      {children}
    </div>
  );
}

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
}

export function SectionPaddingWrapper({ 
  children, 
  className = '' 
}: SectionWrapperProps) {
  // Fallback responsive padding classes
  const fallbackClasses = "py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24";
  
  return (
    <div className={`section-padding-responsive ${fallbackClasses} ${className}`}>
      {children}
    </div>
  );
}