import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { 
  Clock, 
  Shield, 
  Award, 
  Globe, 
  Phone, 
  Mail, 
  MapPin, 
  Users,
  Truck,
  Building,
  Calendar,
  Star,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface BusinessInfoPanelProps {
  className?: string;
}

const businessStats = [
  { label: 'Years of Experience', value: '53+', icon: <Calendar className="w-5 h-5" /> },
  { label: 'Countries Served', value: '35+', icon: <Globe className="w-5 h-5" /> },
  { label: 'Team Members', value: '200+', icon: <Users className="w-5 h-5" /> },
  { label: 'Client Satisfaction', value: '99%', icon: <Star className="w-5 h-5" /> }
];

const quickFacts = [
  'Family-owned textile manufacturer since 1970',
  'ISO 9001 & ISO 14001 certified operations',
  'OEKO-TEX & GOTS certified products',
  '24/7 emergency support for clients',
  'State-of-the-art quality control lab',
  'Sustainable manufacturing practices'
];

const operatingHours = {
  weekdays: 'Monday - Friday: 8:00 AM - 6:00 PM EST',
  saturday: 'Saturday: 9:00 AM - 2:00 PM EST',
  sunday: 'Sunday: Closed',
  emergency: 'Emergency Support: 24/7 for clients'
};

export function BusinessInfoPanel({ className }: BusinessInfoPanelProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`bg-secondary-50 border-t border-border ${className}`}>
      <div className="container-100">
        <motion.div 
          className="py-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Always Visible Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {businessStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 rounded-lg bg-white shadow-sm border border-black/5"
              >
                <div className="text-accent mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-lg font-bold text-primary">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Toggle Button */}
          <div className="flex justify-center mb-4">
            <Button
              variant="ghost"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-muted-foreground hover:text-accent"
            >
              <span className="text-sm mr-2">
                {isExpanded ? 'Show Less' : 'Business Information'}
              </span>
              {isExpanded ? 
                <ChevronUp className="w-4 h-4" /> : 
                <ChevronDown className="w-4 h-4" />
              }
            </Button>
          </div>

          {/* Expandable Section */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Operating Hours */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <Clock className="w-5 h-5 text-accent" />
                          <h4 className="font-semibold">Operating Hours</h4>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Mon - Fri</span>
                            <span>8:00 AM - 6:00 PM</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Saturday</span>
                            <span>9:00 AM - 2:00 PM</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Sunday</span>
                            <span>Closed</span>
                          </div>
                          <div className="pt-2 border-t border-border">
                            <div className="flex items-center space-x-2">
                              <Badge className="bg-accent text-accent-foreground">24/7</Badge>
                              <span className="text-xs">Emergency Support</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Quick Facts */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <Building className="w-5 h-5 text-accent" />
                          <h4 className="font-semibold">Company Highlights</h4>
                        </div>
                        <div className="space-y-2">
                          {quickFacts.slice(0, 4).map((fact, index) => (
                            <div key={index} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-muted-foreground">{fact}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Location & Contact */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <MapPin className="w-5 h-5 text-accent" />
                          <h4 className="font-semibold">Our Location</h4>
                        </div>
                        <div className="space-y-3">
                          <div className="text-sm">
                            <div className="font-medium">Manufacturing Facility</div>
                            <div className="text-muted-foreground">
                              2500 Manufacturing Drive<br />
                              Atlanta, GA 30309, USA
                            </div>
                          </div>
                          <div className="flex flex-col space-y-2">
                            <a 
                              href="tel:+15557890123"
                              className="flex items-center space-x-2 text-sm hover:text-accent transition-colors"
                            >
                              <Phone className="w-4 h-4" />
                              <span>+1 (555) 789-0123</span>
                            </a>
                            <a 
                              href="mailto:info@global-textiles.com"
                              className="flex items-center space-x-2 text-sm hover:text-accent transition-colors"
                            >
                              <Mail className="w-4 h-4" />
                              <span>info@global-textiles.com</span>
                            </a>
                          </div>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="w-full mt-3"
                          >
                            <Calendar className="w-4 h-4 mr-2" />
                            Schedule Visit
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                {/* Additional Information Row */}
                <motion.div 
                  className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  {/* Certifications Summary */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <Shield className="w-5 h-5 text-accent" />
                        <h4 className="font-semibold">Quality Assurance</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {[
                          { name: 'OEKO-TEX', color: 'bg-primary-100 text-primary-800' },
                          { name: 'GOTS', color: 'bg-success-100 text-success-800' },
                          { name: 'ISO 9001', color: 'bg-accent-100 text-accent-800' },
                          { name: 'ISO 14001', color: 'bg-secondary-100 text-secondary-800' }
                        ].map((cert, index) => (
                          <Badge key={index} className={cert.color}>
                            {cert.name}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground mt-3">
                        All certifications are current and regularly audited to ensure compliance with international standards.
                      </p>
                    </CardContent>
                  </Card>

                  {/* Services Summary */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <Truck className="w-5 h-5 text-accent" />
                        <h4 className="font-semibold">Service Capabilities</h4>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          'Custom Manufacturing',
                          'Quality Testing',
                          'Global Shipping',
                          'Technical Support',
                          'Sample Development',
                          'Sustainability Consulting'
                        ].map((service, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                            <span className="text-sm">{service}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}