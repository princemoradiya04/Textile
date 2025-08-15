import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  BookOpen, 
  Download, 
  MessageCircle, 
  Phone, 
  Mail,
  Clock,
  CheckCircle,
  AlertCircle,
  Info,
  HelpCircle,
  FileText,
  Video,
  Settings,
  Wrench,
  Zap,
  Shield,
  Globe,
  Calendar,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Star,
  Filter,
  ArrowRight,
  Users,
  Headphones,
  Building2
} from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Avatar } from '../ui/avatar';

interface SupportResource {
  id: string;
  title: string;
  description: string;
  type: 'documentation' | 'video' | 'guide' | 'troubleshooting' | 'faq';
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  downloadUrl?: string;
  viewUrl?: string;
  lastUpdated: string;
  rating: number;
  downloads: number;
  icon: any;
}

interface SupportContact {
  id: string;
  name: string;
  role: string;
  department: string;
  specialties: string[];
  availability: string;
  avatar: string;
  languages: string[];
  rating: number;
  responseTime: string;
}

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  helpful: number;
  tags: string[];
}

const supportResources: SupportResource[] = [
  {
    id: '1',
    title: 'Yarn Specification Guide',
    description: 'Comprehensive guide to understanding yarn specifications, properties, and selection criteria for different applications.',
    type: 'documentation',
    category: 'Product Information',
    difficulty: 'beginner',
    downloadUrl: '#',
    lastUpdated: '2024-01-15',
    rating: 4.8,
    downloads: 2847,
    icon: BookOpen
  },
  {
    id: '2',
    title: 'Quality Control Procedures',
    description: 'Step-by-step procedures for implementing quality control measures in textile manufacturing processes.',
    type: 'guide',
    category: 'Quality Control',
    difficulty: 'intermediate',
    downloadUrl: '#',
    viewUrl: '#',
    lastUpdated: '2024-01-12',
    rating: 4.9,
    downloads: 1923,
    icon: Shield
  },
  {
    id: '3',
    title: 'Troubleshooting Production Issues',
    description: 'Common production issues and their solutions, including preventive measures and best practices.',
    type: 'troubleshooting',
    category: 'Production',
    difficulty: 'advanced',
    downloadUrl: '#',
    lastUpdated: '2024-01-10',
    rating: 4.7,
    downloads: 1456,
    icon: Wrench
  },
  {
    id: '4',
    title: 'Sustainable Manufacturing Video Series',
    description: 'Video tutorials covering sustainable practices, environmental compliance, and eco-friendly production methods.',
    type: 'video',
    category: 'Sustainability',
    difficulty: 'intermediate',
    viewUrl: '#',
    lastUpdated: '2024-01-08',
    rating: 4.9,
    downloads: 3421,
    icon: Video
  },
  {
    id: '5',
    title: 'Machine Maintenance Checklist',
    description: 'Preventive maintenance schedules and procedures for textile manufacturing equipment.',
    type: 'guide',
    category: 'Maintenance',
    difficulty: 'intermediate',
    downloadUrl: '#',
    lastUpdated: '2024-01-05',
    rating: 4.6,
    downloads: 987,
    icon: Settings
  },
  {
    id: '6',
    title: 'Safety Protocols and Procedures',
    description: 'Comprehensive safety guidelines and emergency procedures for textile manufacturing facilities.',
    type: 'documentation',
    category: 'Safety',
    difficulty: 'beginner',
    downloadUrl: '#',
    lastUpdated: '2024-01-03',
    rating: 4.8,
    downloads: 2134,
    icon: Shield
  }
];

const supportContacts: SupportContact[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Senior Technical Specialist',
    department: 'Product Support',
    specialties: ['Yarn Specifications', 'Quality Control', 'Color Matching'],
    availability: 'Mon-Fri, 8AM-6PM EST',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    languages: ['English', 'Spanish'],
    rating: 4.9,
    responseTime: '< 2 hours'
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    role: 'Materials Engineer',
    department: 'R&D Support',
    specialties: ['Material Properties', 'Performance Testing', 'Innovation'],
    availability: 'Mon-Fri, 9AM-5PM PST',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    languages: ['English', 'Mandarin'],
    rating: 4.8,
    responseTime: '< 4 hours'
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    role: 'Production Consultant',
    department: 'Manufacturing Support',
    specialties: ['Process Optimization', 'Troubleshooting', 'Efficiency'],
    availability: 'Mon-Fri, 7AM-4PM CST',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    languages: ['English', 'Spanish', 'Portuguese'],
    rating: 4.9,
    responseTime: '< 1 hour'
  }
];

const faqs: FAQ[] = [
  {
    id: '1',
    question: 'What are the minimum order quantities for custom yarn specifications?',
    answer: 'Minimum order quantities vary depending on the specific requirements and complexity of your custom yarn. For standard modifications, the MOQ is typically 500kg. For completely new specifications, it may be 1000kg or higher. Contact our sales team for specific requirements.',
    category: 'Orders & Pricing',
    helpful: 42,
    tags: ['MOQ', 'Custom', 'Pricing']
  },
  {
    id: '2',
    question: 'How long does it take to process a custom yarn order?',
    answer: 'Lead times depend on the complexity and quantity of your order. Standard yarn modifications typically take 2-3 weeks. New custom formulations may require 4-6 weeks for development and production. We provide detailed timelines during order confirmation.',
    category: 'Orders & Pricing',
    helpful: 38,
    tags: ['Lead Time', 'Custom', 'Production']
  },
  {
    id: '3',
    question: 'What quality certifications do your yarns meet?',
    answer: 'Our yarns meet various international standards including OEKO-TEX Standard 100, ISO 9001:2015, and GOTS (Global Organic Textile Standard) for organic products. We also maintain specific certifications for medical-grade and automotive applications.',
    category: 'Quality & Certifications',
    helpful: 56,
    tags: ['Certifications', 'Quality', 'Standards']
  },
  {
    id: '4',
    question: 'Do you provide technical support for production issues?',
    answer: 'Yes, we offer comprehensive technical support including on-site consultations, remote troubleshooting, and 24/7 emergency support for critical production issues. Our technical team has decades of combined experience in textile manufacturing.',
    category: 'Support & Services',
    helpful: 34,
    tags: ['Technical Support', 'Troubleshooting', 'Emergency']
  },
  {
    id: '5',
    question: 'Can you help with sustainability and environmental compliance?',
    answer: 'Absolutely. We offer sustainability consulting, help with environmental impact assessments, and provide eco-friendly yarn alternatives. Our sustainability team can help you meet specific environmental standards and certifications.',
    category: 'Sustainability',
    helpful: 29,
    tags: ['Sustainability', 'Environmental', 'Consulting']
  },
  {
    id: '6',
    question: 'What testing services do you provide?',
    answer: 'We offer comprehensive testing services including tensile strength, colorfastness, shrinkage, pilling resistance, and specialized tests for medical or automotive applications. All testing is performed in our certified laboratory.',
    category: 'Testing & Analysis',
    helpful: 41,
    tags: ['Testing', 'Laboratory', 'Analysis']
  }
];

const categories = ['All Categories', 'Product Information', 'Quality Control', 'Production', 'Sustainability', 'Maintenance', 'Safety'];
const difficulties = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];
const resourceTypes = ['All Types', 'Documentation', 'Video', 'Guide', 'Troubleshooting', 'FAQ'];

export function TechnicalSupportPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All Levels');
  const [selectedType, setSelectedType] = useState('All Types');
  const [activeTab, setActiveTab] = useState('resources');

  const filteredResources = supportResources.filter(resource => {
    const matchesSearch = searchQuery === '' || 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || resource.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All Levels' || resource.difficulty === selectedDifficulty.toLowerCase();
    const matchesType = selectedType === 'All Types' || resource.type === selectedType.toLowerCase();
    
    return matchesSearch && matchesCategory && matchesDifficulty && matchesType;
  });

  const handleResourceDownload = (resource: SupportResource) => {
    console.log(`Downloading: ${resource.title}`);
  };

  const handleContactSpecialist = (contact: SupportContact) => {
    console.log(`Contacting: ${contact.name}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section-padding-responsive bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-100">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full text-accent-700 text-sm font-medium"
            >
              <Headphones className="w-4 h-4" />
              24/7 Expert Support
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900" style={{ fontFamily: 'Playfair Display, serif' }}>
              Technical Support
            </h1>
            
            <p className="text-lg md:text-xl text-primary-700 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Access comprehensive technical resources, expert guidance, and professional support 
              to optimize your textile manufacturing processes and resolve any challenges.
            </p>

            {/* Quick Search */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search technical resources, guides, and FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-3 text-base bg-white shadow-lg border-0 rounded-xl"
                />
              </div>
            </motion.div>

            {/* Support Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12"
            >
              {[
                { icon: Clock, label: 'Average Response', value: '< 2 hours' },
                { icon: Users, label: 'Expert Specialists', value: '50+' },
                { icon: BookOpen, label: 'Resources Available', value: '200+' },
                { icon: Globe, label: 'Languages Supported', value: '12' }
              ].map((stat, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mx-auto">
                    <stat.icon className="w-6 h-6 text-accent-700" />
                  </div>
                  <div className="text-lg font-bold text-primary-900">{stat.value}</div>
                  <div className="text-sm text-primary-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding-responsive">
        <div className="container-100">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="resources" className="gap-2">
                <BookOpen className="w-4 h-4" />
                Resources
              </TabsTrigger>
              <TabsTrigger value="experts" className="gap-2">
                <Users className="w-4 h-4" />
                Experts
              </TabsTrigger>
              <TabsTrigger value="faq" className="gap-2">
                <HelpCircle className="w-4 h-4" />
                FAQ
              </TabsTrigger>
              <TabsTrigger value="contact" className="gap-2">
                <MessageCircle className="w-4 h-4" />
                Contact
              </TabsTrigger>
            </TabsList>

            <TabsContent value="resources" className="space-y-6">
              {/* Filters */}
              <div className="flex flex-col lg:flex-row gap-4 p-6 bg-muted-50 rounded-xl">
                <div className="flex-1">
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1">
                  <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                    <SelectTrigger>
                      <SelectValue placeholder="Difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                      {difficulties.map(difficulty => (
                        <SelectItem key={difficulty} value={difficulty}>{difficulty}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1">
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                      {resourceTypes.map(type => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="text-sm text-muted-foreground flex items-center">
                  {filteredResources.length} of {supportResources.length} resources
                </div>
              </div>

              {/* Resources Grid */}
              <div className="grid gap-6">
                <AnimatePresence>
                  {filteredResources.map((resource, index) => (
                    <motion.div
                      key={resource.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Card className="p-6 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <resource.icon className="w-6 h-6 text-accent-700" />
                          </div>
                          
                          <div className="flex-1 space-y-3">
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <h3 className="text-lg font-semibold text-primary-900">{resource.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                  {resource.description}
                                </p>
                              </div>
                              <div className="flex gap-2">
                                <Badge variant="outline">{resource.category}</Badge>
                                <Badge 
                                  variant={resource.difficulty === 'beginner' ? 'default' : 
                                          resource.difficulty === 'intermediate' ? 'secondary' : 'destructive'}
                                >
                                  {resource.difficulty}
                                </Badge>
                              </div>
                            </div>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Star className="w-4 h-4 text-yellow-500" />
                                  {resource.rating}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Download className="w-4 h-4" />
                                  {resource.downloads.toLocaleString()}
                                </div>
                                <div>
                                  Updated {new Date(resource.lastUpdated).toLocaleDateString()}
                                </div>
                              </div>

                              <div className="flex gap-2">
                                {resource.viewUrl && (
                                  <Button variant="outline" size="sm" className="gap-2">
                                    <ExternalLink className="w-4 h-4" />
                                    View
                                  </Button>
                                )}
                                {resource.downloadUrl && (
                                  <Button 
                                    size="sm" 
                                    onClick={() => handleResourceDownload(resource)}
                                    className="gap-2"
                                  >
                                    <Download className="w-4 h-4" />
                                    Download
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </TabsContent>

            <TabsContent value="experts" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {supportContacts.map((contact, index) => (
                  <motion.div
                    key={contact.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="p-6 space-y-4 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-12 h-12">
                          <img src={contact.avatar} alt={contact.name} className="w-full h-full object-cover" />
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-primary-900">{contact.name}</h3>
                          <p className="text-sm text-muted-foreground">{contact.role}</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <h4 className="text-sm font-medium text-primary-800 mb-1">Department</h4>
                          <p className="text-sm text-muted-foreground">{contact.department}</p>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium text-primary-800 mb-1">Specialties</h4>
                          <div className="flex flex-wrap gap-1">
                            {contact.specialties.map((specialty, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <Star className="w-3 h-3 text-yellow-500" />
                              {contact.rating} rating
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <Clock className="w-3 h-3" />
                              {contact.responseTime}
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium text-primary-800 mb-1">Availability</h4>
                          <p className="text-xs text-muted-foreground">{contact.availability}</p>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium text-primary-800 mb-1">Languages</h4>
                          <p className="text-xs text-muted-foreground">{contact.languages.join(', ')}</p>
                        </div>
                      </div>

                      <Button 
                        className="w-full gap-2" 
                        onClick={() => handleContactSpecialist(contact)}
                      >
                        <MessageCircle className="w-4 h-4" />
                        Contact {contact.name.split(' ')[0]}
                      </Button>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="faq" className="space-y-6">
              <div className="max-w-4xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={faq.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <AccordionItem value={faq.id} className="border rounded-lg px-6 py-2">
                        <AccordionTrigger className="text-left font-medium">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="space-y-4">
                          <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-2">
                              {faq.tags.map((tag, i) => (
                                <Badge key={i} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              {faq.helpful} found helpful
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              </div>
            </TabsContent>

            <TabsContent value="contact" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Contact Methods */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-primary-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Get in Touch
                  </h2>
                  
                  <div className="space-y-4">
                    {[
                      {
                        icon: Phone,
                        title: 'Phone Support',
                        description: '24/7 emergency technical support',
                        contact: '+1 (555) 789-0123',
                        action: 'Call Now'
                      },
                      {
                        icon: Mail,
                        title: 'Email Support',
                        description: 'Detailed technical inquiries',
                        contact: 'support@global-textiles.com',
                        action: 'Send Email'
                      },
                      {
                        icon: MessageCircle,
                        title: 'Live Chat',
                        description: 'Instant help from our specialists',
                        contact: 'Available Mon-Fri, 8AM-8PM EST',
                        action: 'Start Chat'
                      },
                      {
                        icon: Calendar,
                        title: 'Schedule Consultation',
                        description: 'On-site or virtual technical consultation',
                        contact: 'Book a convenient time slot',
                        action: 'Schedule Now'
                      }
                    ].map((method, index) => (
                      <Card key={index} className="p-4 hover:shadow-md transition-all duration-300">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                            <method.icon className="w-6 h-6 text-accent-700" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-primary-900">{method.title}</h3>
                            <p className="text-sm text-muted-foreground">{method.description}</p>
                            <p className="text-sm text-primary-700">{method.contact}</p>
                          </div>
                          <Button size="sm" className="gap-2">
                            {method.action}
                            <ArrowRight className="w-4 h-4" />
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Emergency Support */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-primary-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Emergency Support
                  </h2>
                  
                  <Card className="p-6 bg-red-50 border-red-200">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                          <AlertCircle className="w-6 h-6 text-red-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-red-900">Critical Production Issues</h3>
                          <p className="text-sm text-red-700">24/7 emergency response for production-critical problems</p>
                        </div>
                      </div>
                      <div className="pl-13">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-red-600" />
                            <span className="font-medium text-red-900">Emergency Hotline: +1 (555) 911-HELP</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-red-600" />
                            <span className="text-sm text-red-700">Response time: less than 30 minutes</span>
                          </div>
                        </div>
                        <Button size="sm" className="mt-4 bg-red-600 hover:bg-red-700">
                          Call Emergency Support
                        </Button>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <h3 className="font-semibold text-primary-900 mb-4">Support Hours</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>General Support</span>
                        <span className="text-muted-foreground">Mon-Fri, 8AM-8PM EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Technical Specialists</span>
                        <span className="text-muted-foreground">Mon-Fri, 6AM-10PM EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Emergency Support</span>
                        <span className="text-accent-700 font-medium">24/7 Available</span>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding-responsive bg-primary-900 text-primary-foreground">
        <div className="container-100">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-6 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
              Need More Help?
            </h2>
            <p className="text-lg text-primary-200 leading-relaxed">
              Our technical specialists are ready to provide personalized support for your specific requirements. 
              From troubleshooting to optimization, we're here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
                <MessageCircle className="w-5 h-5" />
                Contact Support Team
              </Button>
              <Button size="lg" variant="outline" className="border-primary-300 text-primary-100 hover:bg-primary-800 gap-2">
                <Calendar className="w-5 h-5" />
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}