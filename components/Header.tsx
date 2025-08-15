import { Button } from "./ui/button";
import { Menu, Phone, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { PageRoute } from "./Router";
import { QuoteRequestModal } from "./QuoteRequestModal";

interface HeaderProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Track scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (page: PageRoute) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  const handleQuoteRequest = () => {
    setIsQuoteModalOpen(true);
    setIsMenuOpen(false);
  };

  const navItems: { id: PageRoute; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'products', label: 'Products' },
    { id: 'sustainability', label: 'Sustainability' },
    { id: 'contact', label: 'Contact' },
    { id: 'news', label: 'News' }
  ];

  const getNavItemClass = (pageId: PageRoute) => {
    const baseClass = "relative px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-foreground transition-all duration-300 rounded-xl hover:bg-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";
    const activeClass = "text-accent bg-white shadow-sm hover:bg-white";
    
    return currentPage === pageId ? `${baseClass} ${activeClass}` : baseClass;
  };

  return (
    <>
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-xl border-b border-border/40 shadow-lg' 
          : 'bg-white/90 backdrop-blur-md'
      }`}
    >
      {/* 100px Responsive Container */}
      <div className="container-100 w-full mx-auto px-4 sm:px-5 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3 sm:space-x-4 cursor-pointer group" 
            onClick={() => handleNavigation('home')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            role="button"
            tabIndex={0}
            aria-label="Navigate to homepage"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleNavigation('home');
              }
            }}
          >
            <div className="relative">
              <motion.div 
                className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gradient-to-br from-primary via-primary-700 to-primary-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Enhanced textile weave icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white sm:w-5 sm:h-5 md:w-6 md:h-6">
                  <g strokeLinecap="round" strokeLinejoin="round">
                    {/* Horizontal threads */}
                    <motion.path 
                      d="M2 6h20M2 12h20M2 18h20" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      opacity="0.9"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 0.2 }}
                    />
                    {/* Vertical threads */}
                    <motion.path 
                      d="M6 2v20M12 2v20M18 2v20" 
                      stroke="currentColor" 
                      strokeWidth="1.8" 
                      opacity="0.7"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 0.4 }}
                    />
                    {/* Weave intersections */}
                    <motion.circle 
                      cx="6" cy="6" r="1" fill="currentColor" opacity="0.8"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.8 }}
                    />
                    <motion.circle 
                      cx="12" cy="12" r="1" fill="currentColor" opacity="0.8"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 1.0 }}
                    />
                    <motion.circle 
                      cx="18" cy="18" r="1" fill="currentColor" opacity="0.8"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 1.2 }}
                    />
                    <motion.circle 
                      cx="18" cy="6" r="1" fill="currentColor" opacity="0.6"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 1.4 }}
                    />
                    <motion.circle 
                      cx="6" cy="18" r="1" fill="currentColor" opacity="0.6"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 1.6 }}
                    />
                  </g>
                </svg>
              </motion.div>
              <motion.div 
                className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-accent to-accent-700 rounded-full flex items-center justify-center shadow-md"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 1.8 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full"></div>
              </motion.div>
            </div>
            <div className="min-w-0">
              <motion.h1 
                className="text-base sm:text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 truncate" 
                style={{ fontFamily: 'Playfair Display, serif' }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Global
              </motion.h1>
              <motion.p 
                className="text-xs sm:text-sm text-muted-foreground group-hover:text-accent transition-colors duration-300 hidden sm:block" 
                style={{ fontFamily: 'Inter, sans-serif' }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Premium Textile Manufacturing
              </motion.p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav 
            className="hidden lg:flex items-center space-x-1 bg-secondary/40 rounded-2xl p-1.5 backdrop-blur-sm border border-secondary/30 shadow-inner"
            role="navigation"
            aria-label="Main navigation"
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={getNavItemClass(item.id)}
                style={{ fontFamily: 'Inter, sans-serif' }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                whileHover={{ y: -1, scale: 1.02 }}
                whileTap={{ y: 0, scale: 0.98 }}
                aria-current={currentPage === item.id ? 'page' : undefined}
              >
                <span className="relative z-10">{item.label}</span>
                {currentPage === item.id && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-white rounded-xl shadow-md border border-accent/10"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden xl:flex items-center space-x-4 lg:space-x-6">
            <motion.a 
              href="tel:+15557890123" 
              className="flex items-center space-x-2 lg:space-x-3 text-sm text-muted-foreground hover:text-accent transition-all duration-300 group rounded-xl p-2 hover:bg-accent/5"
              whileHover={{ scale: 1.02, x: 2 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Call us at +1 (555) 789-0123"
            >
              <motion.div 
                className="w-9 h-9 lg:w-11 lg:h-11 bg-gradient-to-br from-accent/10 to-accent/20 rounded-xl flex items-center justify-center group-hover:from-accent/20 group-hover:to-accent/30 transition-all duration-300 shadow-sm"
                whileHover={{ rotate: 5 }}
              >
                <Phone className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-accent" />
              </motion.div>
              <div className="hidden lg:block">
                <div className="text-xs text-muted-foreground font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Call us
                </div>
                <span style={{ fontFamily: 'Inter, sans-serif' }} className="font-semibold text-foreground group-hover:text-accent transition-colors">
                  +1 (555) 789-0123
                </span>
              </div>
            </motion.a>
            
            <motion.div
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button 
                onClick={handleQuoteRequest}
                className="bg-gradient-to-r from-accent via-accent-600 to-accent-700 text-accent-foreground hover:from-accent-700 hover:via-accent-700 hover:to-accent-800 rounded-xl px-4 py-2.5 lg:px-6 lg:py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-0 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 text-sm lg:text-base" 
                style={{ fontFamily: 'Inter, sans-serif' }}
                aria-label="Request a quote"
              >
                <span className="hidden lg:inline">Request Quote</span>
                <span className="lg:hidden">Quote</span>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.div
            className="lg:hidden"
            whileTap={{ scale: 0.9 }}
          >
            <Button
              variant="ghost"
              size="lg"
              className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl hover:bg-secondary/30 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -180, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              id="mobile-navigation"
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="lg:hidden overflow-hidden"
              role="navigation"
              aria-label="Mobile navigation"
            >
              <div className="py-6 sm:py-8 border-t border-border/30">
                <div className="flex flex-col space-y-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => handleNavigation(item.id)}
                      className={`text-left px-4 py-3 sm:px-6 sm:py-4 rounded-xl transition-all duration-300 ${
                        currentPage === item.id 
                          ? 'bg-accent/10 text-accent border border-accent/20 shadow-sm' 
                          : 'text-foreground/80 hover:text-foreground hover:bg-secondary/30'
                      }`}
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      whileHover={{ x: 4, scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      aria-current={currentPage === item.id ? 'page' : undefined}
                    >
                      <span className="font-medium text-sm sm:text-base">{item.label}</span>
                    </motion.button>
                  ))}
                  
                  <motion.div 
                    className="pt-6 sm:pt-8 space-y-4 sm:space-y-6 border-t border-border/30 mt-4 sm:mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                  >
                    <motion.a 
                      href="tel:+15557890123" 
                      className="flex items-center space-x-3 sm:space-x-4 px-4 py-3 sm:px-6 sm:py-4 text-sm text-muted-foreground hover:text-accent transition-all duration-300 rounded-xl hover:bg-accent/5"
                      aria-label="Call us at +1 (555) 789-0123"
                      whileHover={{ x: 4, scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                        <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground font-medium mb-1">Call us</div>
                        <span style={{ fontFamily: 'Inter, sans-serif' }} className="font-semibold text-foreground text-sm sm:text-base">
                          +1 (555) 789-0123
                        </span>
                      </div>
                    </motion.a>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        onClick={handleQuoteRequest}
                        className="w-full bg-gradient-to-r from-accent-600 to-accent-700 text-white hover:from-accent-700 hover:to-accent-800 rounded-xl py-3 sm:py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base" 
                        style={{ fontFamily: 'Inter, sans-serif' }}
                        aria-label="Request a quote"
                      >
                        Request Quote
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>

    {/* Quote Request Modal */}
    <QuoteRequestModal
      isOpen={isQuoteModalOpen}
      onClose={() => setIsQuoteModalOpen(false)}
    />
  </>
  );
}