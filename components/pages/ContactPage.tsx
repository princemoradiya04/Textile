import { motion } from 'framer-motion';
import { SectionWrapper } from '../SectionWrapper';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Building,
  HeadphonesIcon, 
  Users, 
  ChevronRight,
  Send,
  Calendar,
  Globe,
  Factory,
  MessageSquare,
  Linkedin,
  Instagram,
  Facebook,
  ExternalLink,
  Package,
  FileText
} from 'lucide-react';
import { useState } from 'react';

// Product interest options
const productInterests = [
  'Cotton Yarns',
  'Wool Yarns', 
  'Synthetic Yarns',
  'Blended Yarns',
  'Custom Solutions',
  'Sustainable Products',
  'Technical Textiles',
  'Bulk Orders',
  'Sample Requests',
  'Partnership Opportunities'
];

// Contact information data
const contactInfo = [
  {
    id: 'hq',
    title: 'Headquarters',
    subtitle: 'Main Office & Factory',
    icon: Building,
    details: [
      '123 Industrial Estate, Sector 15',
      'Mumbai, Maharashtra 400001',
      'India'
    ],
    phone: '+91 22 2569 8765',
    email: 'info@globalspinners.com',
    hours: 'Mon-Fri: 9:00 AM - 6:00 PM IST'
  },
  {
    id: 'sales',
    title: 'Sales & Marketing',
    subtitle: 'Business Inquiries',
    icon: Users,
    details: [
      'Global Sales Team',
      'Export & Domestic Sales',
      '35+ Countries Served'
    ],
    phone: '+91 22 2569 8766',
    email: 'sales@globalspinners.com',
    hours: 'Mon-Sat: 8:30 AM - 7:00 PM IST'
  },
  {
    id: 'support',
    title: 'Customer Support',
    subtitle: 'Technical Assistance',
    icon: HeadphonesIcon,
    details: [
      '24/7 Technical Support',
      'Quality Assurance',
      'After-sales Service'
    ],
    phone: '+91 22 2569 8767',
    email: 'support@globalspinners.com',
    hours: '24/7 Support Available'
  }
];

// Social media links
const socialLinks = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com/company/globalspinners',
    description: 'Connect with us professionally',
    color: 'text-blue-600 hover:text-blue-700'
  },
  {
    name: 'Instagram', 
    icon: Instagram,
    url: 'https://instagram.com/globalspinners',
    description: 'Follow our latest updates',
    color: 'text-pink-600 hover:text-pink-700'
  },
  {
    name: 'Facebook',
    icon: Facebook, 
    url: 'https://facebook.com/globalspinners',
    description: 'Join our community',
    color: 'text-blue-700 hover:text-blue-800'
  }
];

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productInterest: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      productInterest: '',
      message: ''
    });
    
    setIsSubmitting(false);
    
    // Show success message (in a real app, you'd handle this properly)
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section - Factory Aerial View */}
      <SectionWrapper className="min-h-screen section-padding-responsive bg-gradient-mesh relative overflow-hidden flex items-center">
        <div className="container-100 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <Badge variant="secondary" className="w-fit">
              <MessageSquare className="w-4 h-4 mr-2" />
              Get in Touch
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-display" style={{ fontFamily: 'Playfair Display, serif' }}>
                Contact Us for
                <span className="text-gradient-accent block">Premium Textiles</span>
              </h1>
              
              <p className="text-body-lg text-muted-foreground leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Ready to partner with a leading textile manufacturer? Contact our expert team 
                for premium yarns, custom solutions, and exceptional service. We're here to 
                help bring your textile vision to life.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                <Mail className="w-4 h-4 mr-2" />
                Email Us
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                  24/7
                </div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                  35+
                </div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                  24h
                </div>
                <div className="text-sm text-muted-foreground">Response</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=800&h=800&fit=crop&crop=entropy"
                alt="Aerial view of Global Spinners textile factory showing modern manufacturing facilities"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              {/* Floating contact badges */}
              <div className="absolute top-6 right-6">
                <Badge className="bg-white/90 text-primary border-0 mb-3">
                  <Factory className="w-3 h-3 mr-1" />
                  Manufacturing Hub
                </Badge>
              </div>
              <div className="absolute bottom-6 left-6">
                <Badge className="bg-accent/90 text-white border-0">
                  <Globe className="w-3 h-3 mr-1" />
                  Global Reach
                </Badge>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full animate-float" />
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Contact Form & Info Section */}
      <SectionWrapper className="section-padding-responsive bg-white">
        <div className="container-100">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">
              <Send className="w-4 h-4 mr-2" />
              Send Inquiry
            </Badge>
            <h2 className="text-heading mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Get a Quote Today
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Fill out the form below and our team will get back to you within 24 hours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 rounded-xl border border-black/5 bg-white shadow-md">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        required
                        className="border-input-border focus:border-input-border-focus"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company *</Label>
                      <Input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Enter company name"
                        required
                        className="border-input-border focus:border-input-border-focus"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Enter email address"
                        required
                        className="border-input-border focus:border-input-border-focus"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="Enter phone number"
                        className="border-input-border focus:border-input-border-focus"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="productInterest">Product Interest *</Label>
                    <Select
                      value={formData.productInterest}
                      onValueChange={(value) => handleInputChange('productInterest', value)}
                      required
                    >
                      <SelectTrigger className="border-input-border focus:border-input-border-focus">
                        <SelectValue placeholder="Select your product interest" />
                      </SelectTrigger>
                      <SelectContent>
                        {productInterests.map((product) => (
                          <SelectItem key={product} value={product}>
                            {product}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your requirements, quantity, timeline, and any specific needs..."
                      rows={6}
                      required
                      className="border-input-border focus:border-input-border-focus resize-none"
                    />
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Inquiry
                          <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </div>

                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </Card>
            </motion.div>

            {/* Contact Information Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {contactInfo.map((contact, index) => (
                <Card
                  key={contact.id}
                  className="p-6 rounded-xl border border-black/5 bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <contact.icon className="w-6 h-6 text-accent" />
                    </div>
                    
                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="font-semibold mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                          {contact.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {contact.subtitle}
                        </p>
                      </div>

                      <div className="space-y-2">
                        {contact.details.map((detail, i) => (
                          <p key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                            <MapPin className="w-3 h-3" />
                            {detail}
                          </p>
                        ))}
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-accent" />
                          <a href={`tel:${contact.phone}`} className="text-sm hover:text-accent transition-colors">
                            {contact.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-accent" />
                          <a href={`mailto:${contact.email}`} className="text-sm hover:text-accent transition-colors">
                            {contact.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-accent" />
                          <span className="text-sm text-muted-foreground">
                            {contact.hours}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Map Embed Section */}
      <SectionWrapper className="section-padding-responsive bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="container-100">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">
              <MapPin className="w-4 h-4 mr-2" />
              Our Location
            </Badge>
            <h2 className="text-heading mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Visit Our Manufacturing Hub
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Located in Mumbai's industrial heart, our state-of-the-art facility is open for visits by appointment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-96 bg-muted-100">
                {/* Map placeholder with branded pin */}
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=1200&h=400&fit=crop&crop=entropy"
                  alt="Map showing Global Spinners location in Mumbai, India"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                
                {/* Brand-accent pin */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-8 h-8 bg-accent rounded-full border-4 border-white shadow-lg animate-bounce"></div>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-6 border-transparent border-t-accent"></div>
                  </div>
                </div>

                {/* Location info overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <Card className="p-4 bg-white/90 backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold mb-1">Global Spinners & Textiles</h3>
                        <p className="text-sm text-muted-foreground">
                          123 Industrial Estate, Sector 15, Mumbai, Maharashtra 400001, India
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Directions
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Social Links Section */}
      <SectionWrapper className="section-padding-responsive bg-white">
        <div className="container-100">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">
              <Globe className="w-4 h-4 mr-2" />
              Follow Us
            </Badge>
            <h2 className="text-heading mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Connect on Social Media
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Stay updated with our latest products, industry insights, and company news.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 rounded-xl border border-black/5 bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <social.icon className={`w-8 h-8 ${social.color} transition-colors duration-300`} />
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {social.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {social.description}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="group/btn"
                    onClick={() => window.open(social.url, '_blank')}
                  >
                    Follow Us
                    <ExternalLink className="w-3 h-3 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Footer CTA - Book a Consultation */}
      <SectionWrapper className="section-padding-responsive bg-primary text-primary-foreground">
        <div className="container-100">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                <Calendar className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h2 className="text-heading mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Book a Consultation
            </h2>
            <p className="text-body-lg mb-8 opacity-90" style={{ fontFamily: 'Inter, sans-serif' }}>
              Schedule a personalized consultation with our textile experts. We'll discuss your 
              requirements, provide samples, and create a custom solution for your business needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold">Expert Consultation</h3>
                <p className="text-sm opacity-90">Meet with our experienced textile specialists</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold">Product Samples</h3>
                <p className="text-sm opacity-90">Receive physical samples for quality evaluation</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold">Custom Quote</h3>
                <p className="text-sm opacity-90">Get detailed pricing for your specific needs</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="group">
                <Calendar className="w-4 h-4 mr-2" />
                Book Consultation
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-sm opacity-75">
                "Our team is committed to understanding your unique requirements and delivering textile solutions that exceed expectations."
              </p>
              <p className="text-xs opacity-60 mt-2">— Global Spinners Customer Success Team</p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </motion.div>
  );
}