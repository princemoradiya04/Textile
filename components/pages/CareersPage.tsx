import { motion } from 'framer-motion';
import { SectionWrapper } from '../SectionWrapper';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { 
  ArrowLeft,
  Package,
  Award,
  CheckCircle,
  Download,
  ShoppingCart,
  Zap,
  Leaf,
  Globe,
  Factory,
  Target,
  Settings,
  Star,
  Mail,
  Phone,
  FileText,
  Truck,
  Shield,
  Calendar,
  TrendingUp,
  Users,
  ArrowRight,
  ChevronRight,
  Sparkles,
  BarChart3,
  Layers,
  Thermometer,
  Droplets,
  Wind,
  Sun,
  Eye,
  Heart,
  Home,
  Shirt,
  Mountain,
  Snowflake,
  Flame,
  Atom,
  Cpu,
  Activity,
  Combine,
  Palette,
  Lightbulb,
  Microscope,
  Beaker,
  Wrench,
  Calculator,
  PaintBucket,
  MapPin,
  Clock,
  GraduationCap,
  Building,
  Coffee,
  Briefcase,
  PlusCircle,
  Search
} from 'lucide-react';
import { useState } from 'react';

// Add interface for navigation prop
interface CareersPageProps {
  onNavigate?: (page: 'home' | 'about' | 'products' | 'sustainability' | 'contact' | 'news' | 'cotton-yarns' | 'wool-yarns' | 'synthetic-yarns' | 'blended-yarns' | 'custom-solutions' | 'careers') => void;
}

// Job categories and positions
const jobCategories = [
  {
    id: 'engineering',
    name: 'Engineering & R&D',
    description: 'Drive innovation in textile technology and manufacturing processes',
    icon: Lightbulb,
    openPositions: 8,
    color: 'bg-blue-500'
  },
  {
    id: 'production',
    name: 'Production & Manufacturing',
    description: 'Lead world-class manufacturing operations and quality control',
    icon: Factory,
    openPositions: 12,
    color: 'bg-green-500'
  },
  {
    id: 'sales',
    name: 'Sales & Marketing',
    description: 'Build relationships and grow our global market presence',
    icon: TrendingUp,
    openPositions: 6,
    color: 'bg-purple-500'
  },
  {
    id: 'administration',
    name: 'Administration & Support',
    description: 'Support our operations with essential business functions',
    icon: Building,
    openPositions: 4,
    color: 'bg-orange-500'
  }
];

// Featured job positions
const featuredJobs = [
  {
    id: 'senior-textile-engineer',
    title: 'Senior Textile Engineer',
    department: 'Engineering & R&D',
    location: 'Atlanta, GA',
    type: 'Full-time',
    experience: '5-8 years',
    salary: '$85,000 - $110,000',
    description: 'Lead innovative textile development projects and drive sustainable manufacturing processes. Work with cutting-edge fiber technology and automated production systems.',
    requirements: [
      'Masters in Textile Engineering or related field',
      '5+ years textile manufacturing experience',
      'Experience with sustainable textile processes',
      'Knowledge of fiber science and yarn technology',
      'Project management experience'
    ],
    benefits: ['Health Insurance', 'Retirement Plan', 'Professional Development', 'Flexible Hours'],
    isUrgent: true,
    postedDays: 3
  },
  {
    id: 'production-manager',
    title: 'Production Manager',
    department: 'Production & Manufacturing',
    location: 'Atlanta, GA',
    type: 'Full-time',
    experience: '7-10 years',
    salary: '$75,000 - $95,000',
    description: 'Oversee daily production operations, manage teams, and ensure quality standards. Drive continuous improvement initiatives and maintain safety protocols.',
    requirements: [
      'Bachelor\'s degree in Industrial Engineering or Manufacturing',
      '7+ years manufacturing management experience',
      'Lean manufacturing certification preferred',
      'Strong leadership and team management skills',
      'Knowledge of quality control systems'
    ],
    benefits: ['Health Insurance', 'Retirement Plan', 'Performance Bonus', 'Career Development'],
    isPopular: true,
    postedDays: 7
  },
  {
    id: 'quality-control-specialist',
    title: 'Quality Control Specialist',
    department: 'Production & Manufacturing',
    location: 'Atlanta, GA',
    type: 'Full-time',
    experience: '3-5 years',
    salary: '$55,000 - $70,000',
    description: 'Ensure product quality through comprehensive testing and analysis. Maintain quality standards and implement improvement procedures.',
    requirements: [
      'Bachelor\'s in Materials Science or Chemistry',
      '3+ years quality control experience',
      'Knowledge of textile testing methods',
      'Attention to detail and analytical skills',
      'Certification in quality management preferred'
    ],
    benefits: ['Health Insurance', 'Retirement Plan', 'Training Programs', 'Growth Opportunities'],
    postedDays: 12
  },
  {
    id: 'sales-representative',
    title: 'Regional Sales Representative',
    department: 'Sales & Marketing',
    location: 'Remote / Travel',
    type: 'Full-time',
    experience: '4-6 years',
    salary: '$60,000 - $80,000 + Commission',
    description: 'Build and maintain client relationships in assigned territory. Drive sales growth and represent our brand at industry events and trade shows.',
    requirements: [
      'Bachelor\'s degree in Business or related field',
      '4+ years B2B sales experience',
      'Textile industry knowledge preferred',
      'Excellent communication and presentation skills',
      'Willingness to travel (40-50%)'
    ],
    benefits: ['Health Insurance', 'Commission Structure', 'Travel Allowance', 'Car Allowance'],
    postedDays: 5
  },
  {
    id: 'sustainability-coordinator',
    title: 'Sustainability Coordinator',
    department: 'Engineering & R&D',
    location: 'Atlanta, GA',
    type: 'Full-time',
    experience: '2-4 years',
    salary: '$50,000 - $65,000',
    description: 'Develop and implement sustainability initiatives across all operations. Monitor environmental impact and drive green manufacturing practices.',
    requirements: [
      'Bachelor\'s in Environmental Science or Sustainability',
      '2+ years sustainability experience',
      'Knowledge of environmental regulations',
      'Experience with sustainability reporting',
      'Strong analytical and communication skills'
    ],
    benefits: ['Health Insurance', 'Retirement Plan', 'Professional Development', 'Green Benefits'],
    isSustainable: true,
    postedDays: 14
  },
  {
    id: 'hr-generalist',
    title: 'HR Generalist',
    department: 'Administration & Support',
    location: 'Atlanta, GA',
    type: 'Full-time',
    experience: '3-5 years',
    salary: '$45,000 - $60,000',
    description: 'Support all aspects of human resources including recruitment, employee relations, benefits administration, and compliance.',
    requirements: [
      'Bachelor\'s degree in HR or related field',
      '3+ years HR generalist experience',
      'Knowledge of employment law',
      'HRIS experience preferred',
      'Strong interpersonal skills'
    ],
    benefits: ['Health Insurance', 'Retirement Plan', 'Professional Development', 'Work-Life Balance'],
    postedDays: 18
  }
];

// Company benefits
const companyBenefits = [
  {
    category: 'Health & Wellness',
    icon: Heart,
    benefits: [
      'Comprehensive medical, dental, and vision insurance',
      'Mental health support and counseling services',
      'On-site fitness center and wellness programs',
      'Annual health screenings and preventive care',
      'Flexible sick leave and personal time off'
    ]
  },
  {
    category: 'Financial Security',
    icon: Shield,
    benefits: [
      '401(k) retirement plan with company matching',
      'Profit sharing and performance bonuses',
      'Life and disability insurance coverage',
      'Employee stock purchase program',
      'Financial planning and investment guidance'
    ]
  },
  {
    category: 'Work-Life Balance',
    icon: Coffee,
    benefits: [
      'Flexible work hours and remote work options',
      'Generous paid time off and holidays',
      'Parental leave and family support programs',
      'Employee assistance program (EAP)',
      'Sabbatical opportunities for long-term employees'
    ]
  },
  {
    category: 'Growth & Development',
    icon: GraduationCap,
    benefits: [
      'Tuition reimbursement for continuing education',
      'Professional development workshops and conferences',
      'Mentorship and leadership development programs',
      'Internal promotion and career advancement',
      'Skills training and certification programs'
    ]
  },
  {
    category: 'Lifestyle Perks',
    icon: Coffee,
    benefits: [
      'Free meals and premium coffee bar',
      'Employee discounts and company store',
      'Transportation and parking allowances',
      'Team building events and company retreats',
      'Recognition and awards programs'
    ]
  }
];

// Company culture values
const cultureValues = [
  {
    title: 'Innovation',
    description: 'We embrace new ideas and technologies to lead the textile industry forward.',
    icon: Lightbulb,
    color: 'text-blue-600'
  },
  {
    title: 'Sustainability',
    description: 'Environmental responsibility is at the core of everything we do.',
    icon: Leaf,
    color: 'text-green-600'
  },
  {
    title: 'Excellence',
    description: 'We strive for the highest quality in our products and services.',
    icon: Star,
    color: 'text-yellow-600'
  },
  {
    title: 'Collaboration',
    description: 'We work together as one team to achieve extraordinary results.',
    icon: Users,
    color: 'text-purple-600'
  },
  {
    title: 'Integrity',
    description: 'We operate with transparency, honesty, and ethical practices.',
    icon: Shield,
    color: 'text-gray-600'
  },
  {
    title: 'Growth',
    description: 'We invest in our people and provide opportunities for advancement.',
    icon: TrendingUp,
    color: 'text-indigo-600'
  }
];

// Employee testimonials
const testimonials = [
  {
    name: 'Sarah Chen',
    position: 'Senior Textile Engineer',
    department: 'R&D',
    tenure: '4 years',
    photo: 'https://images.unsplash.com/photo-1494790108755-2616b6d96a3c?w=200&h=200&fit=crop&crop=face',
    testimonial: 'Global has given me the opportunity to work on cutting-edge sustainable textile projects. The company truly invests in innovation and environmental responsibility.',
    highlight: 'Innovation Focus'
  },
  {
    name: 'Michael Rodriguez',
    position: 'Production Manager',
    department: 'Manufacturing',
    tenure: '7 years',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
    testimonial: 'The collaborative culture at Global is exceptional. Management truly listens to employee feedback and implements meaningful changes based on our input.',
    highlight: 'Leadership Support'
  },
  {
    name: 'Emily Thompson',
    position: 'Quality Control Specialist',
    department: 'Production',
    tenure: '3 years',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
    testimonial: 'The professional development opportunities here are amazing. I\'ve completed three certifications with full company support and tuition reimbursement.',
    highlight: 'Career Growth'
  },
  {
    name: 'James Wilson',
    position: 'Regional Sales Manager',
    department: 'Sales',
    tenure: '5 years',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    testimonial: 'Working at Global means being part of a family that values work-life balance. The flexible policies have allowed me to excel professionally while being present for my family.',
    highlight: 'Work-Life Balance'
  }
];

// Office locations
const officeLocations = [
  {
    city: 'Atlanta, GA',
    type: 'Headquarters',
    address: '2500 Manufacturing Drive, Atlanta, GA 30309',
    employees: 450,
    facilities: ['Manufacturing Plant', 'R&D Center', 'Corporate Offices', 'Quality Lab'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=entropy'
  },
  {
    city: 'Charlotte, NC',
    type: 'Production Facility',
    address: '1200 Industrial Blvd, Charlotte, NC 28208',
    employees: 280,
    facilities: ['Spinning Mill', 'Quality Control', 'Logistics Center'],
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop&crop=entropy'
  },
  {
    city: 'Dallas, TX',
    type: 'Distribution Center',
    address: '800 Commerce Way, Dallas, TX 75201',
    employees: 120,
    facilities: ['Warehouse', 'Customer Service', 'Regional Office'],
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=entropy'
  }
];

export function CareersPage({ onNavigate }: CareersPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTab, setSelectedTab] = useState('jobs');

  const filteredJobs = selectedCategory === 'all' 
    ? featuredJobs 
    : featuredJobs.filter(job => {
        const category = jobCategories.find(cat => cat.name === job.department);
        return category?.id === selectedCategory;
      });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header Section */}
      <SectionWrapper className="section-padding-responsive bg-gradient-mesh relative overflow-hidden">
        <div className="container-100">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <Button 
              variant="ghost" 
              className="gap-2"
              onClick={() => onNavigate && onNavigate('home')}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
            <span className="text-muted-foreground">/</span>
            <span className="text-muted-foreground">Careers</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <Badge variant="secondary" className="w-fit">
                <Users className="w-4 h-4 mr-2" />
                Join Our Team
              </Badge>
              
              <div className="space-y-6">
                <h1 className="text-display" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Build Your Career
                  <span className="text-gradient-accent block">With Global</span>
                </h1>
                
                <p className="text-body-lg text-muted-foreground leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Join a team of passionate professionals shaping the future of textile manufacturing. 
                  At Global, we combine 50+ years of industry expertise with cutting-edge innovation 
                  to create sustainable solutions that matter.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  View Open Positions
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="w-4 h-4 mr-2" />
                  Company Culture Guide
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                    30+
                  </div>
                  <div className="text-sm text-muted-foreground">Open Positions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                    850+
                  </div>
                  <div className="text-sm text-muted-foreground">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                    50+
                  </div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
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
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=800&fit=crop&crop=entropy"
                  alt="Global team collaboration and workplace culture"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Floating elements */}
                <div className="absolute top-6 right-6">
                  <Badge className="bg-white/90 text-primary border-0 mb-3">
                    <Award className="w-3 h-3 mr-1" />
                    Best Places to Work
                  </Badge>
                </div>
                <div className="absolute bottom-6 left-6">
                  <Badge className="bg-accent/90 text-white border-0">
                    <Users className="w-3 h-3 mr-1" />
                    Growing Team
                  </Badge>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full animate-float" />
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Job Categories */}
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
              <Briefcase className="w-4 h-4 mr-2" />
              Career Opportunities
            </Badge>
            <h2 className="text-heading mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Explore Career Paths
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Discover diverse opportunities across our organization, from innovative R&D to world-class manufacturing operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {jobCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="rounded-xl border border-black/5 bg-white shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 p-6 cursor-pointer"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <div className="text-center space-y-4">
                    <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mx-auto`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {category.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {category.description}
                      </p>
                      <Badge variant="outline" className="text-xs">
                        {category.openPositions} open positions
                      </Badge>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h3 className="text-xl font-semibold" style={{ fontFamily: 'Playfair Display, serif' }}>
                Featured Positions
              </h3>
              <div className="flex gap-2">
                <Button
                  variant={selectedCategory === 'all' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory('all')}
                >
                  All Jobs
                </Button>
                {jobCategories.map(category => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className="hidden sm:inline-flex"
                  >
                    {category.name.split(' & ')[0]}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="rounded-xl border border-black/5 bg-white shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 p-6">
                    <div className="space-y-4">
                      {/* Job Header */}
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-lg mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                            {job.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">{job.department}</p>
                        </div>
                        <div className="flex flex-col gap-1">
                          {job.isUrgent && (
                            <Badge className="bg-red-100 text-red-800">
                              Urgent
                            </Badge>
                          )}
                          {job.isPopular && (
                            <Badge className="bg-blue-100 text-blue-800">
                              Popular
                            </Badge>
                          )}
                          {job.isSustainable && (
                            <Badge className="bg-green-100 text-green-800">
                              <Leaf className="w-3 h-3 mr-1" />
                              Green Job
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Job Details */}
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <GraduationCap className="w-4 h-4 text-muted-foreground" />
                          <span>{job.experience}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-muted-foreground" />
                          <span>{job.salary}</span>
                        </div>
                      </div>

                      {/* Job Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {job.description}
                      </p>

                      {/* Key Requirements */}
                      <div className="space-y-2">
                        <h5 className="text-sm font-semibold">Key Requirements:</h5>
                        <div className="space-y-1">
                          {job.requirements.slice(0, 3).map((req, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <CheckCircle className="w-3 h-3 text-accent mt-1 flex-shrink-0" />
                              <span className="text-xs text-muted-foreground">{req}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="flex flex-wrap gap-1">
                        {job.benefits.slice(0, 3).map((benefit, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {benefit}
                          </Badge>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex justify-between items-center pt-2">
                        <span className="text-xs text-muted-foreground">
                          Posted {job.postedDays} days ago
                        </span>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                          <Button size="sm" className="group">
                            Apply Now
                            <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Company Culture & Benefits */}
      <SectionWrapper className="section-padding-responsive bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="container-100">
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <Heart className="w-4 h-4 mr-2" />
                Why Global
              </Badge>
              <h2 className="text-heading mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                More Than Just a Job
              </h2>
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
                <TabsTrigger value="culture">Culture</TabsTrigger>
                <TabsTrigger value="benefits">Benefits</TabsTrigger>
                <TabsTrigger value="testimonials">Stories</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="culture" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cultureValues.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 h-full text-center">
                      <div className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-accent-100 to-accent-200 flex items-center justify-center`}>
                        <value.icon className={`w-6 h-6 ${value.color}`} />
                      </div>
                      <h3 className="font-semibold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {value.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {value.description}
                      </p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="benefits" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {companyBenefits.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                          <category.icon className="w-5 h-5 text-accent" />
                        </div>
                        <h3 className="font-semibold" style={{ fontFamily: 'Playfair Display, serif' }}>
                          {category.category}
                        </h3>
                      </div>
                      <div className="space-y-2">
                        {category.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="testimonials" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden">
                          <ImageWithFallback
                            src={testimonial.photo}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.tenure} at Global</p>
                        </div>
                        <Badge className="ml-auto" variant="outline">
                          {testimonial.highlight}
                        </Badge>
                      </div>
                      <blockquote className="text-sm text-muted-foreground italic">
                        "{testimonial.testimonial}"
                      </blockquote>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </SectionWrapper>

      {/* Office Locations */}
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
              <MapPin className="w-4 h-4 mr-2" />
              Our Locations
            </Badge>
            <h2 className="text-heading mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Where We Work
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Join our team across multiple locations, each offering unique opportunities and a collaborative work environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {officeLocations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="rounded-xl border border-black/5 bg-white shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden h-full">
                  <div className="relative h-48">
                    <ImageWithFallback
                      src={location.image}
                      alt={`${location.city} office`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="bg-white/20 text-white border-white/30 mb-2">
                        {location.type}
                      </Badge>
                      <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {location.city}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{location.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{location.employees} employees</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Facilities:</h4>
                      <div className="flex flex-wrap gap-1">
                        {location.facilities.map((facility, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {facility}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Call to Action */}
      <SectionWrapper className="section-padding-responsive bg-gradient-to-br from-accent-50 via-white to-primary-50">
        <div className="container-100">
          <div className="text-center max-w-3xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge variant="secondary" className="mb-4">
                <PlusCircle className="w-4 h-4 mr-2" />
                Ready to Join
              </Badge>
              <h2 className="text-heading mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Start Your Journey
                <span className="text-gradient-accent block">With Global</span>
              </h2>
              <p className="text-body-lg text-muted-foreground mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                We're always looking for talented individuals who share our passion for innovation, 
                sustainability, and excellence. Even if you don't see the perfect role today, 
                we'd love to hear from you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="group">
                Browse All Jobs
                <Search className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Submit General Application
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-border"
            >
              <div className="text-center">
                <Mail className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-sm text-muted-foreground">careers@globaltextiles.com</p>
              </div>
              <div className="text-center">
                <Phone className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-sm text-muted-foreground">+1 (555) 789-0123</p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Response Time</h3>
                <p className="text-sm text-muted-foreground">Within 48 hours</p>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </motion.div>
  );
}