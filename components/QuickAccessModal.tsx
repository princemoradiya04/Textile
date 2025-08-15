import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { 
  Clock, 
  Shield, 
  Award, 
  Globe, 
  Phone, 
  Mail, 
  MapPin, 
  Download, 
  ExternalLink,
  User,
  Calendar,
  Building,
  Truck,
  CheckCircle
} from 'lucide-react';

interface QuickAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'hours' | 'certifications' | 'contact';
}

const businessHours = [
  { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM EST', status: 'open' },
  { day: 'Saturday', hours: '9:00 AM - 2:00 PM EST', status: 'limited' },
  { day: 'Sunday', hours: 'Closed', status: 'closed' },
  { day: 'Emergency Support', hours: '24/7 for existing clients', status: 'emergency' }
];

const certifications = [
  {
    name: 'OEKO-TEX Standard 100',
    icon: <Shield className="w-6 h-6" />,
    description: 'Textiles tested for harmful substances',
    validUntil: 'Valid until Dec 2025',
    certificateNumber: 'OTX-2024-789456',
    downloadUrl: '#'
  },
  {
    name: 'Global Organic Textile Standard (GOTS)',
    icon: <Award className="w-6 h-6" />,
    description: 'Organic fiber textiles processing standard',
    validUntil: 'Valid until Jun 2025',
    certificateNumber: 'GOTS-2024-123789',
    downloadUrl: '#'
  },
  {
    name: 'ISO 9001:2015',
    icon: <Shield className="w-6 h-6" />,
    description: 'Quality Management System',
    validUntil: 'Valid until Mar 2026',
    certificateNumber: 'ISO9001-2024-456123',
    downloadUrl: '#'
  },
  {
    name: 'ISO 14001:2015',
    icon: <Globe className="w-6 h-6" />,
    description: 'Environmental Management System',
    validUntil: 'Valid until Mar 2026',
    certificateNumber: 'ISO14001-2024-456124',
    downloadUrl: '#'
  }
];

const contactMethods = [
  {
    type: 'General Inquiries',
    icon: <Mail className="w-5 h-5" />,
    primary: 'info@global-textiles.com',
    secondary: '+1 (555) 789-0123',
    hours: 'Mon-Fri 8AM-6PM EST',
    response: 'Within 2 hours'
  },
  {
    type: 'Sales & Quotes',
    icon: <User className="w-5 h-5" />,
    primary: 'sales@global-textiles.com',
    secondary: '+1 (555) 789-0124',
    hours: 'Mon-Fri 8AM-6PM EST',
    response: 'Within 30 minutes'
  },
  {
    type: 'Technical Support',
    icon: <Phone className="w-5 h-5" />,
    primary: 'support@global-textiles.com',
    secondary: '+1 (555) 789-0125',
    hours: '24/7 for clients',
    response: 'Within 1 hour'
  },
  {
    type: 'Logistics & Shipping',
    icon: <Truck className="w-5 h-5" />,
    primary: 'logistics@global-textiles.com',
    secondary: '+1 (555) 789-0126',
    hours: 'Mon-Fri 7AM-5PM EST',
    response: 'Within 4 hours'
  }
];

export function QuickAccessModal({ isOpen, onClose, initialTab = 'hours' }: QuickAccessModalProps) {
  const [activeTab, setActiveTab] = useState(initialTab);

  const tabs = [
    { id: 'hours', label: 'Business Hours', icon: <Clock className="w-4 h-4" /> },
    { id: 'certifications', label: 'Certifications', icon: <Shield className="w-4 h-4" /> },
    { id: 'contact', label: 'Quick Contact', icon: <Phone className="w-4 h-4" /> }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'open':
        return <Badge className="bg-success text-success-foreground">Open</Badge>;
      case 'limited':
        return <Badge variant="secondary">Limited Hours</Badge>;
      case 'closed':
        return <Badge variant="destructive">Closed</Badge>;
      case 'emergency':
        return <Badge className="bg-accent text-accent-foreground">Emergency</Badge>;
      default:
        return null;
    }
  };

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString('en-US', {
      timeZone: 'America/New_York',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Quick Access Information</DialogTitle>
        </DialogHeader>

        {/* Tab Navigation */}
        <div className="flex space-x-1 bg-muted-100 p-1 rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-white text-accent shadow-sm'
                  : 'text-muted-foreground hover:text-foreground hover:bg-white/50'
              }`}
            >
              {tab.icon}
              <span className="text-sm font-medium">{tab.label}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {/* Business Hours Tab */}
          {activeTab === 'hours' && (
            <motion.div
              key="hours"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">Current Time (EST)</h3>
                <div className="text-2xl font-mono text-accent">{getCurrentTime()}</div>
              </div>

              <Separator />

              <div className="space-y-4">
                {businessHours.map((hour, index) => (
                  <motion.div
                    key={hour.day}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-lg border border-black/5 bg-muted-50"
                  >
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{hour.day}</p>
                        <p className="text-sm text-muted-foreground">{hour.hours}</p>
                      </div>
                    </div>
                    {getStatusBadge(hour.status)}
                  </motion.div>
                ))}
              </div>

              <div className="bg-accent-50 p-4 rounded-lg">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <h4 className="font-medium text-accent-800">Need immediate assistance?</h4>
                    <p className="text-sm text-accent-700">
                      Our emergency support line is available 24/7 for existing clients with urgent production needs.
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-3 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    >
                      Contact Emergency Support
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Certifications Tab */}
          {activeTab === 'certifications' && (
            <motion.div
              key="certifications"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">Quality Certifications</h3>
                <p className="text-muted-foreground">
                  Our commitment to quality and sustainability is validated by leading industry certifications.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="p-6 rounded-lg border border-black/5 bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-accent">
                        {cert.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2">{cert.name}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{cert.description}</p>
                        <div className="space-y-1">
                          <p className="text-xs text-success">{cert.validUntil}</p>
                          <p className="text-xs text-muted-foreground font-mono">{cert.certificateNumber}</p>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="mt-3 w-full"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download Certificate
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-primary-50 p-4 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Award className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium text-primary-800">Why Certifications Matter</h4>
                    <p className="text-sm text-primary-700">
                      Our certifications ensure product safety, environmental responsibility, and consistent quality. 
                      All certificates are regularly audited and renewed to maintain the highest standards.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Quick Contact Tab */}
          {activeTab === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">Get In Touch</h3>
                <p className="text-muted-foreground">
                  Choose the best contact method for your specific needs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contactMethods.map((contact, index) => (
                  <motion.div
                    key={contact.type}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="p-6 rounded-lg border border-black/5 bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-accent">
                        {contact.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-3">{contact.type}</h4>
                        <div className="space-y-2">
                          <a 
                            href={`mailto:${contact.primary}`}
                            className="flex items-center space-x-2 text-sm hover:text-accent transition-colors"
                          >
                            <Mail className="w-4 h-4" />
                            <span>{contact.primary}</span>
                          </a>
                          <a 
                            href={`tel:${contact.secondary}`}
                            className="flex items-center space-x-2 text-sm hover:text-accent transition-colors"
                          >
                            <Phone className="w-4 h-4" />
                            <span>{contact.secondary}</span>
                          </a>
                        </div>
                        <Separator className="my-3" />
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-muted-foreground">Hours:</span>
                            <span>{contact.hours}</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-muted-foreground">Response:</span>
                            <span className="text-success">{contact.response}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-secondary-50 p-4 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Building className="w-5 h-5 text-secondary-800 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-secondary-800">Visit Our Facility</h4>
                    <p className="text-sm text-secondary-700 mb-2">
                      2500 Manufacturing Drive, Atlanta, GA 30309
                    </p>
                    <p className="text-sm text-secondary-700">
                      Schedule a facility tour to see our manufacturing processes and quality control systems in action.
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-3 border-secondary text-secondary-800 hover:bg-secondary hover:text-secondary-foreground"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule Tour
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}