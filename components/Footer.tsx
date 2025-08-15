import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { MapPin, Phone, Mail, Linkedin, Facebook, Instagram, ExternalLink, Clock, Shield, Award, Download, FileText, Globe, Info } from "lucide-react";
import { motion } from "framer-motion";
import { LegalInfoModal } from "./LegalInfoModal";
import { QuickAccessModal } from "./QuickAccessModal";
import { QuoteRequestModal } from "./QuoteRequestModal";
import { BusinessInfoPanel } from "./BusinessInfoPanel";
import { useState } from "react";
import type { PageRoute } from "./Router";

interface FooterProps {
  onNavigate?: (page: PageRoute, context?: {
    linkText?: string;
    section?: string;
    intent?: 'explore' | 'convert' | 'learn' | 'support';
  }) => void;
}

const footerLinks = {
  company: [
    { name: "About Us", route: "about" as PageRoute },
    { name: "Sustainability", route: "sustainability" as PageRoute },
    { name: "Case Studies", route: "case-studies" as PageRoute },
    { name: "News & Insights", route: "news" as PageRoute },
    { name: "Careers", route: "careers" as PageRoute }
  ],
  products: [
    { name: "Cotton Yarns", route: "cotton-yarns" as PageRoute },
    { name: "Wool Yarns", route: "wool-yarns" as PageRoute },
    { name: "Synthetic Yarns", route: "synthetic-yarns" as PageRoute },
    { name: "Blended Yarns", route: "blended-yarns" as PageRoute },
    { name: "Custom Solutions", route: "custom-solutions" as PageRoute }
  ],
  resources: [
    { name: "Product Catalog", route: "product-catalog" as PageRoute },
    { name: "Technical Support", route: "technical-support" as PageRoute },
    { name: "Fabric Samples", route: "contact" as PageRoute },
    { name: "Quality Standards", route: "quality-standards" as PageRoute },
    { name: "Downloads Center", route: "downloads-center" as PageRoute }
  ],
  support: [
    { name: "Contact Us", route: "contact" as PageRoute },
    { name: "Request Quote", action: "quote" },
    { name: "Customer Portal", href: "#portal" },
    { name: "Shipping Info", href: "#shipping" },
    { name: "Returns Policy", href: "#returns" }
  ]
};

const socialLinks = [
  { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/company/global-textiles", label: "LinkedIn" },
  { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com/global-textiles", label: "Facebook" },
  { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com/global-textiles", label: "Instagram" }
];

const certifications = [
  { name: "OEKO-TEX", icon: <Shield className="w-4 h-4" />, description: "Standard 100" },
  { name: "GOTS", icon: <Award className="w-4 h-4" />, description: "Global Organic" },
  { name: "ISO 9001", icon: <Shield className="w-4 h-4" />, description: "Quality Certified" },
  { name: "ISO 14001", icon: <Globe className="w-4 h-4" />, description: "Environmental" }
];

export function Footer({ onNavigate }: FooterProps) {
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [legalModalTab, setLegalModalTab] = useState<'privacy' | 'terms' | 'cookies'>('privacy');
  const [isQuickAccessOpen, setIsQuickAccessOpen] = useState(false);
  const [quickAccessTab, setQuickAccessTab] = useState<'hours' | 'certifications' | 'contact'>('hours');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleLinkClick = (link: any, section: string) => {
    if (link.route && onNavigate) {
      onNavigate(link.route, {
        linkText: link.name,
        section: `footer-${section}`,
        intent: section === 'support' ? 'support' : section === 'products' ? 'convert' : 'explore'
      });
    } else if (link.action === 'quote') {
      setIsQuoteModalOpen(true);
    }
  };

  const handleLegalClick = (type: 'privacy' | 'terms' | 'cookies') => {
    setLegalModalTab(type);
    setIsLegalModalOpen(true);
  };

  const handleQuickAccessClick = (tab: 'hours' | 'certifications' | 'contact') => {
    setQuickAccessTab(tab);
    setIsQuickAccessOpen(true);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Newsletter subscription logic would go here
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <motion.div 
        className="bg-accent section-padding-responsive py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container-100 w-full mx-auto px-4 sm:px-5 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h3 
              className="text-heading text-accent-foreground mb-4 sm:mb-6" 
              style={{ fontFamily: 'Playfair Display, serif' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Stay Connected with Industry Insights
            </motion.h3>
            <motion.p 
              className="text-accent-foreground/90 mb-6 sm:mb-8 text-body-lg leading-relaxed" 
              style={{ fontFamily: 'Inter, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Get the latest updates on textile innovations, sustainability practices, 
              and market trends delivered straight to your inbox.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div className="flex-1" whileHover={{ scale: 1.02 }}>
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="bg-accent-foreground/10 border-accent-foreground/20 text-accent-foreground placeholder:text-accent-foreground/60 rounded-lg h-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="secondary" 
                  className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 rounded-lg shadow-lg h-12 px-6 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300 cursor-pointer"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  onClick={handleNewsletterSubmit}
                >
                  Subscribe
                </Button>
              </motion.div>
            </motion.div>
            {isSubscribed && (
              <motion.div 
                className="mt-2 text-xs text-accent-foreground/80"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                Thank you for subscribing!
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Main Footer Content */}
      <motion.div 
        className="section-padding-responsive"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container-100">
          <div className="grid lg:grid-cols-6 gap-8 sm:gap-12">
            {/* Company Info */}
            <motion.div 
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div>
                <motion.div 
                  className="flex items-center space-x-3 mb-6"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center relative overflow-hidden"
                    whileHover={{ rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent/80"></div>
                    <div className="relative">
                      <motion.svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        className="text-accent-foreground"
                        whileHover={{ scale: 1.1 }}
                      >
                        <motion.path 
                          d="M2 6h20M2 12h20M2 18h20" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, delay: 0.5 }}
                        />
                        <motion.path 
                          d="M6 2v20M12 2v20M18 2v20" 
                          stroke="currentColor" 
                          strokeWidth="1" 
                          strokeLinecap="round" 
                          opacity="0.6"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, delay: 1 }}
                        />
                      </motion.svg>
                    </div>
                  </motion.div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-primary-foreground" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Global
                    </h3>
                    <p className="text-xs sm:text-sm text-primary-foreground/70" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Premium Textile Manufacturing
                    </p>
                  </div>
                </motion.div>
                <p className="text-primary-foreground/80 leading-relaxed mb-6 text-sm sm:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Three generations of textile expertise, delivering premium cotton, wool, 
                  and synthetic fabrics to manufacturers worldwide since 1970.
                </p>
              </div>

              {/* Contact Info */}
              <motion.div 
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="flex items-center space-x-3 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300 cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-primary-foreground/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                    2500 Manufacturing Drive, Atlanta, GA 30309
                  </span>
                </motion.div>
                <motion.a
                  href="tel:+15557890123"
                  className="flex items-center space-x-3 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300 cursor-pointer hover:text-accent transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-primary-foreground/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                    +1 (555) 789-0123
                  </span>
                </motion.a>
                <motion.a
                  href="mailto:info@global-textiles.com"
                  className="flex items-center space-x-3 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300 cursor-pointer hover:text-accent transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-primary-foreground/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                    info@global-textiles.com
                  </span>
                </motion.a>
              </motion.div>

              {/* Quick Access Buttons */}
              <motion.div 
                className="flex flex-wrap gap-2 mt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleQuickAccessClick('hours')}
                  className="text-primary-foreground/70 hover:text-accent hover:bg-primary-foreground/5 text-xs"
                >
                  <Clock className="w-3 h-3 mr-1" />
                  Business Hours
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleQuickAccessClick('certifications')}
                  className="text-primary-foreground/70 hover:text-accent hover:bg-primary-foreground/5 text-xs"
                >
                  <Shield className="w-3 h-3 mr-1" />
                  Certifications
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleQuickAccessClick('contact')}
                  className="text-primary-foreground/70 hover:text-accent hover:bg-primary-foreground/5 text-xs"
                >
                  <Info className="w-3 h-3 mr-1" />
                  Quick Info
                </Button>
              </motion.div>

              {/* Certifications */}
              <motion.div 
                className="flex flex-wrap gap-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    className="flex items-center space-x-1"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-accent-foreground/60">
                      {cert.icon}
                    </div>
                    <span className="text-xs text-primary-foreground/70" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {cert.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Social Links */}
              <motion.div 
                className="flex space-x-3 sm:space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="text-primary-foreground/60 hover:text-accent transition-colors p-2 hover:bg-primary-foreground/5 rounded-lg hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Links Sections */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:col-span-4">
              {[
                { title: "Company", links: footerLinks.company },
                { title: "Products", links: footerLinks.products },
                { title: "Resources", links: footerLinks.resources },
                { title: "Support", links: footerLinks.support }
              ].map((section, sectionIndex) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + sectionIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-bold text-primary-foreground mb-4 sm:mb-6 text-sm sm:text-base" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {section.title}
                  </h4>
                  <ul className="space-y-2 sm:space-y-3">
                    {section.links.map((link, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + sectionIndex * 0.1 + index * 0.05 }}
                        viewport={{ once: true }}
                      >
                        {link.route || link.action ? (
                          <motion.button
                            onClick={() => handleLinkClick(link, section.title)}
                            className="text-primary-foreground/70 hover:text-accent transition-colors text-xs sm:text-sm text-left group flex items-center"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                            whileHover={{ x: 5 }}
                          >
                            <span>{link.name}</span>
                            <motion.div
                              className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                              whileHover={{ x: 2 }}
                            >
                              <FileText className="w-3 h-3" />
                            </motion.div>
                          </motion.button>
                        ) : (
                          <motion.a
                            href={link.href}
                            className="text-primary-foreground/70 hover:text-accent transition-colors text-xs sm:text-sm group flex items-center"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                            whileHover={{ x: 5 }}
                          >
                            <span>{link.name}</span>
                            <motion.div
                              className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                              whileHover={{ x: 2 }}
                            >
                              <ExternalLink className="w-3 h-3" />
                            </motion.div>
                          </motion.a>
                        )}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div 
        className="border-t border-primary-foreground/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container-100 py-6 sm:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div 
              className="text-xs sm:text-sm text-primary-foreground/70 text-center md:text-left" 
              style={{ fontFamily: 'Inter, sans-serif' }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              © 2025 Global — Crafted with care, powered by innovation.
            </motion.div>
            <motion.div 
              className="flex flex-wrap justify-center space-x-4 sm:space-x-6 text-xs sm:text-sm"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, index) => {
                const legalType = item === "Privacy Policy" ? 'privacy' : 
                                item === "Terms of Service" ? 'terms' : 'cookies';
                return (
                  <motion.button 
                    key={item}
                    onClick={() => handleLegalClick(legalType)}
                    className="text-primary-foreground/70 hover:text-accent transition-colors cursor-pointer"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {item}
                  </motion.button>
                );
              })}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Legal Information Modal */}
      <LegalInfoModal
        isOpen={isLegalModalOpen}
        onClose={() => setIsLegalModalOpen(false)}
        initialTab={legalModalTab}
      />

      {/* Quick Access Modal */}
      <QuickAccessModal
        isOpen={isQuickAccessOpen}
        onClose={() => setIsQuickAccessOpen(false)}
        initialTab={quickAccessTab}
      />

      {/* Quote Request Modal */}
      <QuoteRequestModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </footer>
  );
}