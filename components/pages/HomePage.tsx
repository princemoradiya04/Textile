import { motion } from 'framer-motion';
import { HeroSection } from "../HeroSection";
import { ProductsSection } from "../ProductsSection";
import { SustainabilitySection } from "../SustainabilitySection";
import { ProcessSection } from "../ProcessSection";
import { AboutSection } from "../AboutSection";
import { TestimonialsSection } from "../TestimonialsSection";
import { ContactSection } from "../ContactSection";
import { SectionWrapper } from "../SectionWrapper";

export function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section - Full viewport with 100px responsive padding */}
      <SectionWrapper 
        id="home"
        variant="full-bleed"
        className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50"
      >
        <HeroSection />
      </SectionWrapper>
      
      {/* Products Section */}
      <SectionWrapper 
        id="products" 
        variant="full-bleed"
        className="section-padding-responsive bg-white"
      >
        <ProductsSection />
      </SectionWrapper>
      
      {/* About Section */}
      <SectionWrapper 
        id="about" 
        variant="full-bleed"
        delay={0.1} 
        className="section-padding-responsive bg-gradient-to-br from-secondary-50 via-white to-accent-50/30"
      >
        <AboutSection />
      </SectionWrapper>
      
      {/* Sustainability Section */}
      <SectionWrapper 
        id="sustainability" 
        variant="full-bleed"
        delay={0.2} 
        className="section-padding-responsive bg-white"
      >
        <SustainabilitySection />
      </SectionWrapper>
      
      {/* Process Section */}
      <SectionWrapper 
        id="process" 
        variant="full-bleed"
        delay={0.1} 
        className="section-padding-responsive bg-gradient-to-br from-secondary-50/60 via-accent-50/20 to-primary-50/40"
      >
        <ProcessSection />
      </SectionWrapper>
      
      {/* Testimonials Section */}
      <SectionWrapper 
        variant="full-bleed"
        delay={0.2} 
        className="section-padding-responsive bg-white"
      >
        <TestimonialsSection />
      </SectionWrapper>
      
      {/* Contact Section */}
      <SectionWrapper 
        id="contact" 
        variant="full-bleed"
        delay={0.1} 
        className="section-padding-responsive bg-gradient-to-br from-primary to-primary-800 text-white"
      >
        <ContactSection />
      </SectionWrapper>
    </motion.div>
  );
}