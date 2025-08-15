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
  PaintBucket
} from 'lucide-react';
import { useState } from 'react';

// Add interface for navigation prop
interface CustomSolutionsPageProps {
  onNavigate?: (page: 'home' | 'about' | 'products' | 'sustainability' | 'contact' | 'news' | 'cotton-yarns' | 'wool-yarns' | 'synthetic-yarns' | 'blended-yarns' | 'custom-solutions') => void;
}

// Custom solution services data
const customServices = [
  {
    id: 'custom-yarn-development',
    name: 'Custom Yarn Development',
    description: 'End-to-end custom yarn development from concept to production, tailored to your exact specifications and performance requirements.',
    image: 'https://images.unsplash.com/photo-1567696044516-fc0c1a8e41b8?w=800&h=600&fit=crop&crop=entropy',
    icon: Lightbulb,
    capabilities: [
      'Fiber blend optimization',
      'Count development',
      'Twist engineering',
      'Strength enhancement',
      'Performance testing'
    ],
    deliverables: ['Technical specifications', 'Sample production', 'Performance analysis', 'Production setup'],
    timeline: '4-8 weeks',
    moq: '1000 kg',
    industries: ['Automotive', 'Aerospace', 'Medical', 'Sports'],
    isPopular: true
  },
  {
    id: 'color-matching',
    name: 'Precision Color Matching',
    description: 'Advanced color matching and development services using spectrophotometric analysis and custom dye formulations.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop&crop=entropy',
    icon: PaintBucket,
    capabilities: [
      'Pantone matching',
      'Custom color development',
      'Metamerism analysis',
      'Fastness optimization',
      'Batch consistency'
    ],
    deliverables: ['Color standards', 'Dye recipes', 'Lab dips', 'Production samples'],
    timeline: '2-4 weeks',
    moq: '500 kg',
    industries: ['Fashion', 'Home Textiles', 'Automotive', 'Technical'],
    isPremium: true
  },
  {
    id: 'technical-consulting',
    name: 'Technical Consulting',
    description: 'Expert technical consultation on yarn selection, application engineering, and performance optimization for specialized uses.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop&crop=entropy',
    icon: Microscope,
    capabilities: [
      'Application analysis',
      'Performance requirements',
      'Cost optimization',
      'Process improvement',
      'Quality assurance'
    ],
    deliverables: ['Technical reports', 'Recommendations', 'Implementation plans', 'Training materials'],
    timeline: '1-3 weeks',
    moq: 'Project basis',
    industries: ['Industrial', 'Aerospace', 'Marine', 'Construction'],
    isTechnical: true
  },
  {
    id: 'specialty-treatments',
    name: 'Specialty Treatments',
    description: 'Advanced yarn treatments including antimicrobial, flame retardant, UV resistant, and other functional finishes.',
    image: 'https://images.unsplash.com/photo-1604719312566-3dcd3d5d8032?w=800&h=600&fit=crop&crop=entropy',
    icon: Beaker,
    capabilities: [
      'Antimicrobial treatment',
      'Flame retardancy',
      'UV protection',
      'Water repellency',
      'Anti-static properties'
    ],
    deliverables: ['Treated samples', 'Performance certificates', 'Application guidelines', 'Production setup'],
    timeline: '3-6 weeks',
    moq: '750 kg',
    industries: ['Medical', 'Safety', 'Outdoor', 'Military'],
    isSpecialty: true
  },
  {
    id: 'rapid-prototyping',
    name: 'Rapid Prototyping',
    description: 'Fast-track development service for urgent custom yarn requirements with accelerated timelines and priority support.',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=800&fit=crop&crop=entropy',
    icon: Zap,
    capabilities: [
      'Express development',
      'Priority processing',
      'Rush sampling',
      'Accelerated testing',
      'Quick-turn production'
    ],
    deliverables: ['Express samples', 'Rapid testing', 'Fast-track production', '24/7 support'],
    timeline: '1-2 weeks',
    moq: '250 kg',
    industries: ['Fashion', 'Automotive', 'Electronics', 'Sports'],
    isRapid: true
  },
  {
    id: 'sustainable-solutions',
    name: 'Sustainable Solutions',
    description: 'Eco-friendly custom yarn development using recycled materials, organic fibers, and sustainable manufacturing processes.',
    image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=800&h=600&fit=crop&crop=entropy',
    icon: Leaf,
    capabilities: [
      'Recycled fiber integration',
      'Organic material sourcing',
      'Biodegradable options',
      'Carbon footprint reduction',
      'Circular economy solutions'
    ],
    deliverables: ['Sustainability reports', 'Eco-certifications', 'LCA analysis', 'Green production'],
    timeline: '6-10 weeks',
    moq: '1500 kg',
    industries: ['Fashion', 'Home Textiles', 'Packaging', 'Automotive'],
    isSustainable: true
  }
];

// Development process steps
const developmentProcess = [
  {
    step: 1,
    title: 'Requirements Analysis',
    description: 'Comprehensive analysis of your technical requirements, performance specifications, and application needs.',
    icon: Calculator,
    duration: '3-5 days',
    activities: ['Technical briefing', 'Specification review', 'Feasibility analysis', 'Timeline planning']
  },
  {
    step: 2,
    title: 'Design & Development',
    description: 'Custom yarn design using advanced fiber science, blend optimization, and performance engineering.',
    icon: Lightbulb,
    duration: '1-2 weeks',
    activities: ['Fiber selection', 'Blend formulation', 'Process design', 'Initial sampling']
  },
  {
    step: 3,
    title: 'Laboratory Testing',
    description: 'Comprehensive testing of prototypes using state-of-the-art equipment and standardized test methods.',
    icon: Microscope,
    duration: '3-7 days',
    activities: ['Physical testing', 'Performance validation', 'Quality analysis', 'Optimization iterations']
  },
  {
    step: 4,
    title: 'Sample Production',
    description: 'Small-batch production of optimized samples for client evaluation and final approval.',
    icon: Factory,
    duration: '1-2 weeks',
    activities: ['Pilot production', 'Quality control', 'Sample preparation', 'Documentation']
  },
  {
    step: 5,
    title: 'Scale-up & Production',
    description: 'Full-scale production setup with process optimization and quality assurance systems.',
    icon: TrendingUp,
    duration: '2-4 weeks',
    activities: ['Production planning', 'Process scaling', 'Quality systems', 'Delivery scheduling']
  },
  {
    step: 6,
    title: 'Support & Optimization',
    description: 'Ongoing technical support, process optimization, and continuous improvement services.',
    icon: Settings,
    duration: 'Ongoing',
    activities: ['Performance monitoring', 'Process refinement', 'Technical support', 'Product evolution']
  }
];

// Technical capabilities
const technicalCapabilities = {
  testing: {
    title: 'Advanced Testing Facilities',
    capabilities: [
      'Tensile strength testing',
      'Abrasion resistance analysis',
      'Color fastness evaluation',
      'Thermal properties testing',
      'Chemical resistance testing',
      'Microscopic fiber analysis'
    ]
  },
  development: {
    title: 'R&D Infrastructure',
    capabilities: [
      'Fiber blending laboratory',
      'Pilot spinning facilities',
      'Color matching systems',
      'Performance testing lab',
      'Quality control systems',
      'Data analysis software'
    ]
  },
  manufacturing: {
    title: 'Production Capabilities',
    capabilities: [
      'Flexible production lines',
      'Multi-fiber processing',
      'Custom color systems',
      'Specialty treatments',
      'Quality assurance',
      'Scalable manufacturing'
    ]
  }
};

// Industry applications
const industryApplications = [
  {
    industry: 'Automotive',
    icon: Truck,
    applications: [
      { name: 'Interior Fabrics', description: 'Custom automotive interior textiles', requirements: ['Durability', 'Fire resistance', 'UV stability'] },
      { name: 'Airbag Components', description: 'High-strength airbag fabrics', requirements: ['Tensile strength', 'Tear resistance', 'Consistency'] },
      { name: 'Filtration Systems', description: 'Engine and cabin air filters', requirements: ['Particle retention', 'Airflow', 'Temperature resistance'] }
    ]
  },
  {
    industry: 'Aerospace',
    icon: Mountain,
    applications: [
      { name: 'Composite Reinforcement', description: 'Carbon and aramid reinforcement yarns', requirements: ['High modulus', 'Low weight', 'Fatigue resistance'] },
      { name: 'Thermal Protection', description: 'Heat-resistant protective textiles', requirements: ['Temperature resistance', 'Insulation', 'Lightweight'] },
      { name: 'Interior Components', description: 'Aircraft cabin textiles', requirements: ['Fire resistance', 'Low toxicity', 'Durability'] }
    ]
  },
  {
    industry: 'Medical',
    icon: Heart,
    applications: [
      { name: 'Surgical Textiles', description: 'Biocompatible surgical materials', requirements: ['Biocompatibility', 'Sterilization', 'Strength'] },
      { name: 'Wound Care', description: 'Advanced wound dressing materials', requirements: ['Absorbency', 'Antimicrobial', 'Comfort'] },
      { name: 'Implantable Devices', description: 'Medical implant components', requirements: ['Biocompatibility', 'Durability', 'Non-reactive'] }
    ]
  },
  {
    industry: 'Sports & Performance',
    icon: Activity,
    applications: [
      { name: 'Athletic Apparel', description: 'High-performance sportswear', requirements: ['Moisture wicking', 'Stretch', 'Durability'] },
      { name: 'Protective Gear', description: 'Sports safety equipment', requirements: ['Impact resistance', 'Flexibility', 'Comfort'] },
      { name: 'Outdoor Equipment', description: 'Technical outdoor gear', requirements: ['Weather resistance', 'Breathability', 'Strength'] }
    ]
  }
];

// Case studies data
const caseStudies = [
  {
    title: 'Automotive Interior Innovation',
    client: 'Premium Auto Manufacturer',
    challenge: 'Develop flame-retardant yarn with luxury feel for high-end vehicle interiors',
    solution: 'Custom wool-synthetic blend with integrated FR treatment',
    results: ['50% weight reduction', '30% cost savings', 'Enhanced durability', 'Luxury aesthetics'],
    timeline: '6 weeks',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop&crop=entropy'
  },
  {
    title: 'Medical Device Breakthrough',
    client: 'Medical Device Company',
    challenge: 'Create biocompatible yarn for implantable medical devices',
    solution: 'Ultra-pure UHMWPE yarn with specialized surface treatment',
    results: ['FDA approval achieved', 'Biocompatibility certified', 'Long-term stability', 'Cost-effective production'],
    timeline: '8 weeks',
    image: 'https://images.unsplash.com/photo-1567696044516-fc0c1a8e41b8?w=800&h=600&fit=crop&crop=entropy'
  },
  {
    title: 'Sustainable Fashion Line',
    client: 'Eco-Fashion Brand',
    challenge: 'Develop 100% recycled yarn without compromising quality or aesthetics',
    solution: 'Innovative recycled cotton-PET blend with enhanced processing',
    results: ['100% recycled content', '40% carbon reduction', 'Premium quality', 'Market differentiation'],
    timeline: '10 weeks',
    image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=800&h=600&fit=crop&crop=entropy'
  }
];

export function CustomSolutionsPage({ onNavigate }: CustomSolutionsPageProps) {
  const [selectedService, setSelectedService] = useState(customServices[0]);
  const [selectedTab, setSelectedTab] = useState('overview');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header with Breadcrumb */}
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
              onClick={() => onNavigate && onNavigate('products')}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Button>
            <span className="text-muted-foreground">/</span>
            <span className="text-muted-foreground">Custom Solutions</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <Badge variant="secondary" className="w-fit">
                <Sparkles className="w-4 h-4 mr-2" />
                Custom Engineering Solutions
              </Badge>
              
              <div className="space-y-6">
                <h1 className="text-display" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Custom Yarn
                  <span className="text-gradient-accent block">Solutions</span>
                </h1>
                
                <p className="text-body-lg text-muted-foreground leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Unlock the potential of specialized yarns engineered to your exact specifications. 
                  From automotive interiors to medical devices, our custom development services deliver 
                  innovative solutions that meet the most demanding performance requirements.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  Start Your Project
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="w-4 h-4 mr-2" />
                  Capabilities Guide
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                    6
                  </div>
                  <div className="text-sm text-muted-foreground">Service Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                    500+
                  </div>
                  <div className="text-sm text-muted-foreground">Custom Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                    1-12
                  </div>
                  <div className="text-sm text-muted-foreground">Week Timeline</div>
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
                  src="https://images.unsplash.com/photo-1567696044516-fc0c1a8e41b8?w=800&h=800&fit=crop&crop=entropy"
                  alt="Advanced custom yarn development laboratory with precision equipment"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Floating quality indicators */}
                <div className="absolute top-6 right-6">
                  <Badge className="bg-white/90 text-primary border-0 mb-3">
                    <Award className="w-3 h-3 mr-1" />
                    R&D Excellence
                  </Badge>
                </div>
                <div className="absolute bottom-6 left-6">
                  <Badge className="bg-accent/90 text-white border-0">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Custom Engineering
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

      {/* Service Categories */}
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
              Service Portfolio
            </Badge>
            <h2 className="text-heading mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Comprehensive Custom Services
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              From concept to production, our full-service custom development capabilities ensure your vision becomes reality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {customServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className={`rounded-xl border shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden cursor-pointer ${
                    selectedService.id === service.id ? 'border-accent bg-accent/5' : 'border-black/5 bg-white'
                  }`}
                  onClick={() => setSelectedService(service)}
                >
                  <div className="relative h-48">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Service badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {service.isPopular && (
                        <Badge className="bg-accent text-white border-0">
                          <Star className="w-3 h-3 mr-1" />
                          Popular
                        </Badge>
                      )}
                      {service.isPremium && (
                        <Badge className="bg-purple-600 text-white border-0">
                          <Sparkles className="w-3 h-3 mr-1" />
                          Premium
                        </Badge>
                      )}
                      {service.isTechnical && (
                        <Badge className="bg-blue-600 text-white border-0">
                          <Microscope className="w-3 h-3 mr-1" />
                          Technical
                        </Badge>
                      )}
                      {service.isSpecialty && (
                        <Badge className="bg-green-600 text-white border-0">
                          <Beaker className="w-3 h-3 mr-1" />
                          Specialty
                        </Badge>
                      )}
                      {service.isRapid && (
                        <Badge className="bg-red-600 text-white border-0">
                          <Zap className="w-3 h-3 mr-1" />
                          Rapid
                        </Badge>
                      )}
                      {service.isSustainable && (
                        <Badge className="bg-emerald-600 text-white border-0">
                          <Leaf className="w-3 h-3 mr-1" />
                          Sustainable
                        </Badge>
                      )}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-2">
                        <service.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {service.name}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Timeline</h4>
                        <p className="text-muted-foreground">{service.timeline}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">MOQ</h4>
                        <p className="text-muted-foreground">{service.moq}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="text-xs font-semibold text-primary">Industries</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.industries.slice(0, 2).map((industry, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {industry}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Selected Service Details */}
          <motion.div
            key={selectedService.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="rounded-xl border border-black/5 bg-white shadow-lg">
              <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
                <div className="border-b border-border px-6 pt-6">
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                        <selectedService.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                          {selectedService.name}
                        </h3>
                        <p className="text-muted-foreground">{selectedService.description}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm">
                        <Mail className="w-4 h-4 mr-2" />
                        Start Project
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Service Guide
                      </Button>
                    </div>
                  </div>
                  
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="capabilities">Capabilities</TabsTrigger>
                    <TabsTrigger value="deliverables">Deliverables</TabsTrigger>
                    <TabsTrigger value="industries">Industries</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="overview" className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-primary">Development Timeline</h4>
                      <p className="text-muted-foreground">{selectedService.timeline}</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-primary">Minimum Order</h4>
                      <p className="text-muted-foreground">{selectedService.moq}</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-primary">Target Industries</h4>
                      <p className="text-muted-foreground">{selectedService.industries.join(', ')}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-primary">Service Overview</h4>
                    <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedService.description} Our expert team combines advanced materials science with 
                        practical manufacturing knowledge to deliver solutions that exceed performance expectations 
                        while meeting cost and timeline objectives.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="capabilities" className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {selectedService.capabilities.map((capability, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <div>
                          <h5 className="font-semibold mb-1">{capability}</h5>
                          <p className="text-sm text-muted-foreground">
                            Advanced capability with state-of-the-art equipment and expert knowledge.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="deliverables" className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {selectedService.deliverables.map((deliverable, i) => (
                      <Card key={i} className="p-4 border border-accent/20 bg-accent/5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                            <FileText className="w-4 h-4 text-accent" />
                          </div>
                          <div>
                            <h5 className="font-semibold text-accent">{deliverable}</h5>
                            <p className="text-xs text-muted-foreground">
                              Comprehensive documentation and materials
                            </p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="industries" className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {selectedService.industries.map((industry, i) => (
                      <Card key={i} className="p-4 text-center hover:shadow-md transition-shadow">
                        <h5 className="font-semibold mb-2">{industry}</h5>
                        <p className="text-xs text-muted-foreground">
                          Specialized solutions for {industry.toLowerCase()} applications
                        </p>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Development Process */}
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
              <Settings className="w-4 h-4 mr-2" />
              Development Process
            </Badge>
            <h2 className="text-heading mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              From Concept to Production
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Our systematic approach ensures successful custom yarn development with predictable timelines and quality results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full relative overflow-hidden">
                  <div className="absolute top-4 right-4 w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-accent font-bold text-sm">{step.step}</span>
                  </div>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                  <Badge variant="outline" className="text-xs mb-4">
                    <Calendar className="w-3 h-3 mr-1" />
                    {step.duration}
                  </Badge>
                  <div className="space-y-2">
                    <h5 className="text-xs font-semibold text-primary">Key Activities:</h5>
                    <div className="space-y-1">
                      {step.activities.map((activity, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-accent rounded-full" />
                          <span className="text-xs text-muted-foreground">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Technical Capabilities */}
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
              <Microscope className="w-4 h-4 mr-2" />
              Technical Excellence
            </Badge>
            <h2 className="text-heading mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Advanced R&D Capabilities
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              State-of-the-art facilities and expert knowledge ensure precision development and reliable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(technicalCapabilities).map(([key, category], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full">
                  <h3 className="font-semibold text-primary mb-4">{category.title}</h3>
                  <div className="space-y-3">
                    {category.capabilities.map((capability, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{capability}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Case Studies */}
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
              <Star className="w-4 h-4 mr-2" />
              Success Stories
            </Badge>
            <h2 className="text-heading mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Client Success Stories
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Real-world examples of how our custom solutions have transformed our clients' products and markets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
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
                      src={study.image}
                      alt={study.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="bg-white/20 text-white border-white/30 mb-2">
                        {study.timeline}
                      </Badge>
                      <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {study.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Challenge</h4>
                      <p className="text-sm text-muted-foreground">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Solution</h4>
                      <p className="text-sm text-muted-foreground">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Results</h4>
                      <div className="space-y-1">
                        {study.results.map((result, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 text-accent" />
                            <span className="text-xs text-muted-foreground">{result}</span>
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

      {/* Contact & Start Project */}
      <SectionWrapper className="section-padding-responsive bg-white">
        <div className="container-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <Badge variant="secondary" className="w-fit">
                <Lightbulb className="w-4 h-4 mr-2" />
                Ready to Innovate
              </Badge>
              
              <div className="space-y-6">
                <h2 className="text-heading" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Transform Your Vision
                  <span className="text-gradient-accent block">Into Reality</span>
                </h2>
                
                <p className="text-body-lg text-muted-foreground leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Ready to bring your custom yarn concept to life? Our development team is here to guide you 
                  through every step of the process, from initial consultation to full-scale production.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mt-1">
                    <Mail className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Free Consultation</h3>
                    <p className="text-sm text-muted-foreground">
                      Expert analysis of your requirements and development roadmap
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mt-1">
                    <Package className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Sample Development</h3>
                    <p className="text-sm text-muted-foreground">
                      Rapid prototyping and sample production for evaluation
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mt-1">
                    <Award className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Quality Assurance</h3>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive testing and certification support
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  Start Your Project
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  <Phone className="w-4 h-4 mr-2" />
                  Schedule Call
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-gradient-to-br from-primary-50 via-white to-accent-50 border-0">
                <h3 className="text-xl font-semibold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Project Consultation
                </h3>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Response Time</h4>
                      <p className="text-sm text-muted-foreground">24 hours</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Free Consultation</h4>
                      <p className="text-sm text-muted-foreground">Yes</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Sample Timeline</h4>
                      <p className="text-sm text-muted-foreground">1-4 weeks</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Global Support</h4>
                      <p className="text-sm text-muted-foreground">Available</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold text-primary mb-3">Development Team</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-accent" />
                        <span>custom@globaltextiles.com</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-accent" />
                        <span>+91 22 2876 5777</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold text-primary mb-3">Our Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">R&D Excellence</Badge>
                      <Badge variant="outline" className="text-xs">Fast Turnaround</Badge>
                      <Badge variant="outline" className="text-xs">Quality Assured</Badge>
                      <Badge variant="outline" className="text-xs">Global Reach</Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </motion.div>
  );
}