import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  X, 
  Shield,
  FileText,
  Cookie,
  Lock,
  Eye,
  UserCheck,
  Globe,
  Calendar,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  AlertTriangle,
  Info,
  Settings,
  Download,
  ExternalLink
} from 'lucide-react';
import { useState, useEffect } from 'react';

interface LegalInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'privacy' | 'terms' | 'cookies';
}

export function LegalInfoModal({ isOpen, onClose, initialTab = 'privacy' }: LegalInfoModalProps) {
  const [selectedTab, setSelectedTab] = useState(initialTab);

  // Update tab when modal opens with different initial tab
  useEffect(() => {
    if (isOpen && initialTab) {
      setSelectedTab(initialTab);
    }
  }, [isOpen, initialTab]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const lastUpdated = "January 15, 2025";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 50 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-6xl max-h-[90vh] mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-800 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold" style={{ fontFamily: 'Playfair Display, serif' }}>
                Legal Information
              </h2>
              <p className="text-sm text-muted-foreground">
                Privacy, Terms & Policies - Last updated {lastUpdated}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto max-h-[calc(90vh-120px)]">
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
            {/* Tab Navigation */}
            <div className="px-6 py-4 bg-muted/30 border-b border-border">
              <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto">
                <TabsTrigger value="privacy" className="gap-2">
                  <Lock className="w-4 h-4" />
                  Privacy Policy
                </TabsTrigger>
                <TabsTrigger value="terms" className="gap-2">
                  <FileText className="w-4 h-4" />
                  Terms of Service
                </TabsTrigger>
                <TabsTrigger value="cookies" className="gap-2">
                  <Cookie className="w-4 h-4" />
                  Cookie Policy
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="p-6">
              {/* Privacy Policy Tab */}
              <TabsContent value="privacy" className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Privacy Policy
                  </h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Global Textiles is committed to protecting your privacy and ensuring the security of your personal information.
                  </p>
                </div>

                <div className="grid gap-6">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                        <Eye className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Information We Collect</h4>
                        <p className="text-muted-foreground mb-3">
                          We collect information you provide directly to us, such as when you create an account, 
                          request a quote, or contact us for support.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            Contact information (name, email, phone number)
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            Company information and business requirements
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            Communication preferences and history
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-green-50 text-green-600 rounded-lg flex items-center justify-center">
                        <Shield className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">How We Use Your Information</h4>
                        <p className="text-muted-foreground mb-3">
                          We use the information we collect to provide, maintain, and improve our services, 
                          and to communicate with you about your account and our products.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            Process and fulfill your product orders and quote requests
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            Provide customer support and technical assistance
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            Send you important updates about our services
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            Improve our products and develop new offerings
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center">
                        <UserCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Your Rights & Controls</h4>
                        <p className="text-muted-foreground mb-3">
                          You have certain rights regarding your personal information, including the ability to 
                          access, update, or delete your data.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            Access and download your personal data
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            Correct or update your information
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            Request deletion of your account
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            Opt out of marketing communications
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-blue-50">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Mail className="w-5 h-5 text-blue-600" />
                      Contact Us About Privacy
                    </h4>
                    <p className="text-muted-foreground mb-4">
                      If you have questions about this Privacy Policy or our data practices, please contact our Privacy Team:
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-blue-600" />
                        <span>privacy@global-textiles.com</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-blue-600" />
                        <span>+1 (555) 789-0123 ext. 501</span>
                      </div>
                    </div>
                  </Card>
                </div>
              </TabsContent>

              {/* Terms of Service Tab */}
              <TabsContent value="terms" className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Terms of Service
                  </h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    These terms govern your use of Global Textiles' services and establish the contractual relationship between us.
                  </p>
                </div>

                <div className="grid gap-6">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Service Agreement</h4>
                        <p className="text-muted-foreground mb-3">
                          By using our services, you agree to these terms and acknowledge that you have the authority 
                          to enter into this agreement on behalf of your organization.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            Must be 18 years or older to use our services
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            Provide accurate and complete information
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            Maintain the security of your account credentials
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-red-50 text-red-600 rounded-lg flex items-center justify-center">
                        <AlertTriangle className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Product Orders & Pricing</h4>
                        <p className="text-muted-foreground mb-3">
                          All product orders are subject to our standard terms of sale, including pricing, 
                          delivery, and quality specifications.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            Prices are valid for 30 days from quote date
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            Minimum order quantities apply to all products
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            Payment terms are Net 30 for approved accounts
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            Force majeure events may affect delivery schedules
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center">
                        <Globe className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Intellectual Property</h4>
                        <p className="text-muted-foreground mb-3">
                          All content, trademarks, and intellectual property on this website are owned by 
                          Global Textiles or our licensors.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            Limited license to use our website for business purposes
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            Prohibition on copying or distributing our content
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            Respect for third-party intellectual property rights
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-yellow-50">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Info className="w-5 h-5 text-yellow-600" />
                      Limitation of Liability
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Our liability is limited to the maximum extent permitted by law. We provide our services 
                      "as is" and make no warranties beyond those expressly stated in our product specifications 
                      and sales agreements. For detailed liability terms, please contact our legal department.
                    </p>
                  </Card>
                </div>
              </TabsContent>

              {/* Cookie Policy Tab */}
              <TabsContent value="cookies" className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Cookie Policy
                  </h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    This policy explains how we use cookies and similar technologies to improve your experience on our website.
                  </p>
                </div>

                <div className="grid gap-6">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                        <Cookie className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">What Are Cookies?</h4>
                        <p className="text-muted-foreground mb-3">
                          Cookies are small text files stored on your device when you visit our website. 
                          They help us provide you with a better, more personalized experience.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          <div className="p-4 bg-blue-50 rounded-lg">
                            <h5 className="font-medium text-blue-900 mb-2">Essential Cookies</h5>
                            <p className="text-sm text-blue-700">Required for basic website functionality and security.</p>
                          </div>
                          <div className="p-4 bg-green-50 rounded-lg">
                            <h5 className="font-medium text-green-900 mb-2">Analytics Cookies</h5>
                            <p className="text-sm text-green-700">Help us understand how visitors use our website.</p>
                          </div>
                          <div className="p-4 bg-purple-50 rounded-lg">
                            <h5 className="font-medium text-purple-900 mb-2">Functional Cookies</h5>
                            <p className="text-sm text-purple-700">Remember your preferences and settings.</p>
                          </div>
                          <div className="p-4 bg-orange-50 rounded-lg">
                            <h5 className="font-medium text-orange-900 mb-2">Marketing Cookies</h5>
                            <p className="text-sm text-orange-700">Used to provide relevant advertisements.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-green-50 text-green-600 rounded-lg flex items-center justify-center">
                        <Settings className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Managing Your Cookie Preferences</h4>
                        <p className="text-muted-foreground mb-4">
                          You can control and configure your cookie preferences at any time. 
                          Here's how to manage different types of cookies:
                        </p>
                        
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-4 border rounded-lg">
                            <div>
                              <h5 className="font-medium">Essential Cookies</h5>
                              <p className="text-sm text-muted-foreground">Always active - required for website functionality</p>
                            </div>
                            <Badge variant="secondary">Required</Badge>
                          </div>
                          
                          <div className="flex items-center justify-between p-4 border rounded-lg">
                            <div>
                              <h5 className="font-medium">Analytics & Performance</h5>
                              <p className="text-sm text-muted-foreground">Help us improve our website performance</p>
                            </div>
                            <Button variant="outline" size="sm">
                              Manage
                            </Button>
                          </div>
                          
                          <div className="flex items-center justify-between p-4 border rounded-lg">
                            <div>
                              <h5 className="font-medium">Functional Cookies</h5>
                              <p className="text-sm text-muted-foreground">Remember your preferences and settings</p>
                            </div>
                            <Button variant="outline" size="sm">
                              Manage
                            </Button>
                          </div>
                          
                          <div className="flex items-center justify-between p-4 border rounded-lg">
                            <div>
                              <h5 className="font-medium">Marketing & Advertising</h5>
                              <p className="text-sm text-muted-foreground">Personalized content and advertisements</p>
                            </div>
                            <Button variant="outline" size="sm">
                              Manage
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center">
                        <ExternalLink className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Third-Party Cookies</h4>
                        <p className="text-muted-foreground mb-3">
                          We may use third-party services that set their own cookies. These partners help us 
                          provide better services and understand our website performance.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            Google Analytics - Website analytics and reporting
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            HubSpot - Customer relationship management
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            LinkedIn - Professional networking and advertising
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-amber-50">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-amber-600" />
                      Cookie Retention
                    </h4>
                    <p className="text-muted-foreground text-sm mb-3">
                      Different cookies have different lifespans. Session cookies are deleted when you close your browser, 
                      while persistent cookies remain until they expire or you delete them.
                    </p>
                    <div className="text-sm">
                      <div className="flex justify-between py-2 border-b">
                        <span>Essential Cookies:</span>
                        <span className="font-medium">Session</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span>Analytics Cookies:</span>
                        <span className="font-medium">24 months</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span>Marketing Cookies:</span>
                        <span className="font-medium">12 months</span>
                      </div>
                    </div>
                  </Card>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-border bg-muted/20">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Last updated: {lastUpdated}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">legal@global-textiles.com</span>
            </div>
          </div>
          
          <div className="flex gap-3">
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="w-4 h-4" />
              Export PDF
            </Button>
            <Button onClick={onClose} className="gap-2">
              <CheckCircle className="w-4 h-4" />
              Understood
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}