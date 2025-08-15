import { Button } from "./ui/button";
import { ArrowRight, Play, Users, Award, Globe, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { ImageWithFallback } from './figma/ImageWithFallback';
import { QuoteRequestModal } from './QuoteRequestModal';
import { CompanyOverviewModal } from './CompanyOverviewModal';
import { useState } from 'react';

export function HeroSection() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isOverviewModalOpen, setIsOverviewModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = 96;
      const targetPosition = section.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleQuoteRequest = () => {
    setIsQuoteModalOpen(true);
  };

  const handleLearnMore = () => {
    setIsOverviewModalOpen(true);
  };

  const stats = [
    { number: "50+", label: "Years Experience", icon: Award },
    { number: "35+", label: "Countries Served", icon: Globe },
    { number: "500+", label: "Happy Clients", icon: Users },
    { number: "99%", label: "Quality Rate", icon: Sparkles }
  ];

  return (
    <>
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-offset">
      {/* Enhanced Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50"></div>
      
      {/* Animated Background Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </motion.div>

      {/* 100px Responsive Container */}
      <div className="relative z-10 container-100 w-full mx-auto px-4 sm:px-5 md:px-12 lg:px-16 xl:px-20 2xl:px-24 pt-16 sm:pt-20 md:pt-24 lg:pt-28">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-accent/20 hover:bg-accent/15 hover:scale-105 transition-all duration-300"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              </motion.div>
              <span>Trusted Since 1970</span>
            </motion.div>

            {/* Enhanced Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-4 sm:space-y-6"
            >
              <h1 className="text-display leading-tight">
                <motion.span 
                  className="text-gradient block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  Heritage
                </motion.span>
                <motion.span 
                  className="block" 
                  style={{ fontFamily: 'Playfair Display, serif' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  Craftsmanship
                </motion.span>
                <motion.span 
                  className="text-muted-foreground block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  Meets Modern
                </motion.span>
                <motion.span 
                  className="text-accent block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  Precision
                </motion.span>
              </h1>
              
              <motion.p 
                className="text-body-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0" 
                style={{ fontFamily: 'Inter, sans-serif' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Leading textile manufacturer specializing in premium cotton, wool, and synthetic fabrics. 
                Sustainable production, exceptional quality, serving global markets since 1970.
              </motion.p>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300 cursor-pointer"
              >
                <Button 
                  onClick={handleQuoteRequest}
                  size="lg"
                  className="bg-gradient-to-r from-accent-600 to-accent-700 hover:from-accent-700 hover:to-accent-800 text-white px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg rounded-2xl shadow-2xl hover:shadow-accent/25 transition-all duration-300 group w-full sm:w-auto"
                >
                  <span>Get Quote Today</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300 cursor-pointer"
              >
                <Button 
                  onClick={handleLearnMore}
                  variant="outline" 
                  size="lg"
                  className="px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg rounded-2xl border-2 border-primary/20 hover:border-primary/40 bg-white/80 backdrop-blur-sm hover:bg-white group w-full sm:w-auto"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  </motion.div>
                  <span>Learn More</span>
                </Button>
              </motion.div>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                  className="text-center group hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300 cursor-pointer"
                  whileHover={{ y: -5 }}
                >
                  <motion.div 
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:bg-accent/20 transition-colors duration-300"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <stat.icon className="w-4 h-4 sm:w-6 sm:h-6 text-accent" />
                  </motion.div>
                  <div className="text-lg sm:text-2xl font-bold text-foreground">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="relative order-first lg:order-last"
          >
            {/* Main Image Container */}
            <div className="relative">
              {/* Enhanced Background Elements */}
              <motion.div 
                className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              ></motion.div>
              <motion.div 
                className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-secondary/30 to-accent/20 rounded-full blur-2xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                }}
              ></motion.div>
              
              {/* Enhanced Main Image */}
              <motion.div 
                className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-border hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 cursor-pointer"
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                transition={{ duration: 0.4 }}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80"
                    alt="Modern textile manufacturing facility"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Enhanced Image Overlay Content */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 sm:p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.6 }}
                >
                  <div className="text-white">
                    <div className="text-xs sm:text-sm opacity-90 mb-1">Premium Quality</div>
                    <div className="text-sm sm:text-base font-semibold">ISO 9001:2015 Certified</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Enhanced Floating Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, duration: 0.6 }}
                className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-white rounded-2xl shadow-xl p-3 sm:p-4 border border-border hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <motion.div 
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.div>
                  <div>
                    <div className="text-xs sm:text-sm font-semibold">Live Production</div>
                    <div className="text-xs text-muted-foreground">24/7 Operations</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white rounded-2xl shadow-xl p-3 sm:p-4 border border-border hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <div className="text-center">
                  <motion.div 
                    className="text-xl sm:text-2xl font-bold text-accent"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    70%
                  </motion.div>
                  <div className="text-xs text-muted-foreground">Water Saved</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-accent transition-colors cursor-pointer hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300"
          onClick={() => scrollToSection('about')}
          whileHover={{ scale: 1.1 }}
        >
          <div className="text-xs sm:text-sm font-medium">Scroll to explore</div>
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2.5 sm:h-3 bg-accent rounded-full mt-1.5 sm:mt-2"
            ></motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>

    {/* Quote Request Modal */}
    <QuoteRequestModal
      isOpen={isQuoteModalOpen}
      onClose={() => setIsQuoteModalOpen(false)}
    />

    {/* Company Overview Modal */}
    <CompanyOverviewModal
      isOpen={isOverviewModalOpen}
      onClose={() => setIsOverviewModalOpen(false)}
    />
    </>
  );
}