import { motion } from 'framer-motion';
import { SectionWrapper } from '../SectionWrapper';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { Progress } from '../ui/progress';
import { 
  Leaf, 
  Droplets, 
  Zap, 
  Shield, 
  Award, 
  Recycle, 
  Users, 
  GraduationCap,
  FlaskConical,
  CheckCircle,
  ChevronRight,
  ArrowRight,
  Globe,
  Heart,
  Sprout,
  Factory,
  Target,
  TreePine,
  Waves,
  Sun,
  Lightbulb,
  BookOpen,
  HeartHandshake,
  Building,
  Package
} from 'lucide-react';

// Sustainability stats data
const sustainabilityStats = [
  {
    id: 'water',
    title: 'Water Recycling',
    percentage: 70,
    description: 'Advanced water treatment and recycling systems',
    icon: Droplets,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    accentColor: 'from-blue-500 to-blue-700'
  },
  {
    id: 'energy',
    title: 'Renewable Energy',
    percentage: 40,
    description: 'Solar and wind power integration',
    icon: Zap,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    accentColor: 'from-yellow-500 to-yellow-700'
  },
  {
    id: 'dyes',
    title: 'Zero-Harm Dyes',
    percentage: 100,
    description: 'OEKO-TEX certified non-toxic colorants',
    icon: Shield,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    accentColor: 'from-green-500 to-green-700'
  },
  {
    id: 'waste',
    title: 'Waste Reduction',
    percentage: 85,
    description: 'Circular economy and zero-waste initiatives',
    icon: Recycle,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    accentColor: 'from-purple-500 to-purple-700'
  }
];

// Certifications data
const certifications = [
  {
    name: 'GOTS',
    fullName: 'Global Organic Textile Standard',
    description: 'Organic textile processing certification',
    logo: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=150&fit=crop&crop=entropy',
    scope: 'Organic Products'
  },
  {
    name: 'OEKO-TEX',
    fullName: 'Standard 100',
    description: 'Harmful substance testing certification',
    logo: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=150&fit=crop&crop=entropy',
    scope: 'All Products'
  },
  {
    name: 'GRS',
    fullName: 'Global Recycled Standard',
    description: 'Recycled content verification',
    logo: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=150&fit=crop&crop=entropy',
    scope: 'Recycled Materials'
  },
  {
    name: 'CRADLE TO CRADLE',
    fullName: 'Circular Economy Certified',
    description: 'Circular design methodology',
    logo: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=150&fit=crop&crop=entropy',
    scope: 'Sustainable Design'
  },
  {
    name: 'BCI',
    fullName: 'Better Cotton Initiative',
    description: 'Sustainable cotton farming',
    logo: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=150&fit=crop&crop=entropy',
    scope: 'Cotton Products'
  },
  {
    name: 'ISO 14001',
    fullName: 'Environmental Management',
    description: 'Environmental management systems',
    logo: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=150&fit=crop&crop=entropy',
    scope: 'All Operations'
  }
];

// Manufacturing timeline data
const manufacturingSteps = [
  {
    id: 'selection',
    title: 'Fiber Selection',
    description: 'Sustainable sourcing from certified suppliers with traceability',
    icon: Sprout,
    details: ['Organic cotton farms', 'Responsible wool sourcing', 'Recycled material verification', 'Supplier audits']
  },
  {
    id: 'preparation',
    title: 'Eco-Preparation',
    description: 'Water-efficient processing with biodegradable chemicals',
    icon: Droplets,
    details: ['Low-impact scouring', 'Enzyme treatments', 'Water recycling', 'Chemical reduction']
  },
  {
    id: 'dyeing',
    title: 'Clean Dyeing',
    description: 'Zero-harm dyes and closed-loop water systems',
    icon: Waves,
    details: ['OEKO-TEX dyes', 'Water recycling', 'Energy efficiency', 'Effluent treatment']
  },
  {
    id: 'spinning',
    title: 'Green Spinning',
    description: 'Energy-efficient machinery with renewable power',
    icon: Zap,
    details: ['Solar power integration', 'Efficient motors', 'Waste heat recovery', 'Smart monitoring']
  },
  {
    id: 'testing',
    title: 'Quality Check',
    description: 'Comprehensive testing for safety and performance',
    icon: CheckCircle,
    details: ['Chemical testing', 'Physical properties', 'Colorfastness', 'Sustainability metrics']
  },
  {
    id: 'packaging',
    title: 'Eco-Packaging',
    description: 'Minimal, recyclable packaging with carbon footprint tracking',
    icon: Package,
    details: ['Recyclable materials', 'Minimal packaging', 'Carbon tracking', 'Logistics optimization']
  }
];

// CSR initiatives data
const csrInitiatives = [
  {
    id: 'farmers',
    title: 'Local Farmer Support',
    description: 'Supporting cotton and wool farmers with sustainable practices and fair pricing',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop&crop=entropy',
    impact: '1,200+ farmers supported',
    programs: ['Organic farming training', 'Fair trade partnerships', 'Seed program support', 'Financial assistance']
  },
  {
    id: 'training',
    title: 'Skills Development',
    description: 'Training programs for workers in sustainable manufacturing and safety',
    icon: GraduationCap,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=entropy',
    impact: '5,000+ workers trained',
    programs: ['Safety training', 'Technical skills', 'Environmental awareness', 'Leadership development']
  },
  {
    id: 'ecolabs',
    title: 'Innovation Labs',
    description: 'Research facilities developing next-generation sustainable textile solutions',
    icon: FlaskConical,
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop&crop=entropy',
    impact: '15+ innovations developed',
    programs: ['Bio-based materials', 'Circular processes', 'Water treatment', 'Energy efficiency']
  },
  {
    id: 'community',
    title: 'Community Development',
    description: 'Healthcare, education, and infrastructure development in local communities',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop&crop=entropy',
    impact: '50+ communities impacted',
    programs: ['Healthcare centers', 'School construction', 'Clean water projects', 'Women empowerment']
  }
];

export function SustainabilityPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section - Worker in Eco-Friendly Dyeing Area */}
      <SectionWrapper className="min-h-screen section-padding-responsive bg-gradient-mesh relative overflow-hidden flex items-center">
        <div className="container-100 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <Badge variant="secondary" className="w-fit">
              <Leaf className="w-4 h-4 mr-2" />
              Sustainable Manufacturing
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-display" style={{ fontFamily: 'Playfair Display, serif' }}>
                Weaving a
                <span className="text-gradient-accent block">Sustainable Future</span>
              </h1>
              
              <p className="text-body-lg text-muted-foreground leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Leading the textile industry towards environmental responsibility through innovative 
                processes, renewable energy, water conservation, and community development. 
                Our commitment to sustainability is woven into every fiber of our operations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Our Impact Report
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                <Award className="w-4 h-4 mr-2" />
                View Certifications
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                  70%
                </div>
                <div className="text-sm text-muted-foreground">Water Recycled</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                  40%
                </div>
                <div className="text-sm text-muted-foreground">Renewable Energy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                  100%
                </div>
                <div className="text-sm text-muted-foreground">Zero-Harm Dyes</div>
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
                src="https://images.unsplash.com/photo-1581093804475-577d72e38aa0?w=800&h=800&fit=crop&crop=entropy"
                alt="Worker in eco-friendly dyeing area using sustainable processes and zero-harm dyes"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              {/* Floating sustainability badges */}
              <div className="absolute top-6 right-6">
                <Badge className="bg-green-600 text-white border-0 mb-3">
                  <Leaf className="w-3 h-3 mr-1" />
                  Eco-Friendly
                </Badge>
              </div>
              <div className="absolute bottom-6 left-6">
                <Badge className="bg-blue-600 text-white border-0">
                  <Droplets className="w-3 h-3 mr-1" />
                  Water Conservation
                </Badge>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-100 rounded-full animate-float" />
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-blue-100 rounded-full animate-float" style={{ animationDelay: '2s' }} />
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Sustainability Stats Cards */}
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
              <Target className="w-4 h-4 mr-2" />
              Sustainability Metrics
            </Badge>
            <h2 className="text-heading mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Environmental Impact
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Measurable progress towards environmental stewardship and sustainable manufacturing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sustainabilityStats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 rounded-xl border border-black/5 bg-white shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 text-center">
                  <div className={`w-16 h-16 ${stat.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className={`text-4xl font-bold bg-gradient-to-r ${stat.accentColor} bg-clip-text text-transparent mb-2`} style={{ fontFamily: 'Playfair Display, serif' }}>
                        {stat.percentage}%
                      </div>
                      <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {stat.title}
                      </h3>
                    </div>
                    
                    <div className="space-y-3">
                      <Progress 
                        value={stat.percentage} 
                        className="h-2"
                      />
                      <p className="text-sm text-muted-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {stat.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Certifications Panel */}
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
              <Award className="w-4 h-4 mr-2" />
              Certifications
            </Badge>
            <h2 className="text-heading mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Industry Certifications
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Our commitment to sustainability is validated by leading international certifications.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 rounded-xl border border-black/5 bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
                  <div className="relative w-16 h-16 mx-auto mb-4 rounded-lg overflow-hidden bg-muted-100">
                    <ImageWithFallback
                      src={cert.logo}
                      alt={`${cert.fullName} certification logo`}
                      className="absolute inset-0 w-full h-full object-contain p-2"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {cert.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {cert.description}
                    </p>
                    <Badge variant="outline" className="text-xs">
                      {cert.scope}
                    </Badge>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground mb-6">
              All certifications are regularly audited and maintained to ensure continuous compliance
            </p>
            <Button variant="outline" size="lg">
              <CheckCircle className="w-4 h-4 mr-2" />
              View All Certificates
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* Manufacturing Timeline */}
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
              <Factory className="w-4 h-4 mr-2" />
              Manufacturing Process
            </Badge>
            <h2 className="text-heading mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Sustainable Manufacturing Timeline
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              From fiber selection to quality check, every step is designed for environmental responsibility.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-green-200 via-green-500 to-green-200 h-full hidden lg:block" />

            <div className="space-y-16">
              {manufacturingSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? '' : 'lg:text-right'
                  }`}
                >
                  <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <Card className="p-8 rounded-xl border border-black/5 bg-white shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                            <step.icon className="w-6 h-6 text-green-600" />
                          </div>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Step {index + 1}
                          </Badge>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                            {step.description}
                          </p>
                        </div>

                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-primary">Key Features</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {step.details.map((detail, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <CheckCircle className="w-3 h-3 text-green-500" />
                                <span className="text-xs text-muted-foreground">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>

                  <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} hidden lg:block`}>
                    <div className="relative">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                          <div className="w-3 h-3 bg-green-500 rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CSR Initiatives */}
      <SectionWrapper className="section-padding-responsive bg-gradient-to-br from-accent-50 via-white to-primary-50">
        <div className="container-100">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">
              <Heart className="w-4 h-4 mr-2" />
              Social Responsibility
            </Badge>
            <h2 className="text-heading mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              CSR Initiatives
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Creating positive impact through community development, education, and sustainable practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {csrInitiatives.map((initiative, index) => (
              <motion.div
                key={initiative.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="rounded-xl border border-black/5 bg-white shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                  <div className="relative h-48">
                    <ImageWithFallback
                      src={initiative.image}
                      alt={`${initiative.title} - CSR initiative`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                          <initiative.icon className="w-4 h-4 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                          {initiative.title}
                        </h3>
                      </div>
                      <Badge className="bg-white/20 text-white border-white/30">
                        {initiative.impact}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <p className="text-muted-foreground leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {initiative.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-primary">Key Programs</h4>
                      <div className="space-y-1">
                        {initiative.programs.map((program, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 text-accent" />
                            <span className="text-sm text-muted-foreground">{program}</span>
                          </div>
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

      {/* CTA Section - Join Us in Weaving a Sustainable Future */}
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
                <Globe className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h2 className="text-heading mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Join Us in Weaving a Sustainable Future
            </h2>
            <p className="text-body-lg mb-8 opacity-90" style={{ fontFamily: 'Inter, sans-serif' }}>
              Partner with us to create textiles that respect our planet and communities. 
              Together, we can weave sustainability into every thread of the textile industry.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold">Sustainable Products</h3>
                <p className="text-sm opacity-90">Eco-friendly textiles for responsible brands</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto">
                  <HeartHandshake className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold">Social Impact</h3>
                <p className="text-sm opacity-90">Supporting communities and fair trade</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold">Innovation</h3>
                <p className="text-sm opacity-90">Pioneering sustainable textile technologies</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="group">
                Partner with Us
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <BookOpen className="w-4 h-4 mr-2" />
                Download Impact Report
              </Button>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-sm opacity-75">
                "Sustainability is not just about the environment - it's about creating a better future for all stakeholders in the textile value chain."
              </p>
              <p className="text-xs opacity-60 mt-2">— Global Spinners & Textiles Sustainability Team</p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </motion.div>
  );
}