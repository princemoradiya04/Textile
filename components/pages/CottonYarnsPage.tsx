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
  Shirt
} from 'lucide-react';
import { useState } from 'react';

// Add interface for navigation prop
interface CottonYarnsPageProps {
  onNavigate?: (page: 'home' | 'about' | 'products' | 'sustainability' | 'contact' | 'news' | 'cotton-yarns') => void;
}

// Cotton yarn product data
const cottonYarnProducts = [
  {
    id: 'combed-cotton',
    name: 'Combed Cotton Yarn',
    description: 'Premium combed cotton yarn with superior softness, strength, and uniformity. Ideal for high-quality apparel and luxury textiles.',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop&crop=entropy',
    counts: ['20s', '30s', '40s', '50s', '60s'],
    twist: '3.8 - 4.2 TPI',
    strength: 'High',
    colors: '200+',
    moq: '500 kg',
    price: '$4.20 - $5.80 per kg',
    leadTime: '15-20 days',
    applications: ['Premium T-shirts', 'Shirts', 'Underwear', 'Baby Clothing'],
    features: ['Soft Hand Feel', 'High Strength', 'Even Yarn', 'Low Hairiness', 'Color Fastness'],
    certifications: ['OEKO-TEX Standard 100', 'GOTS', 'ISO 9001'],
    sustainability: 'Organic options available',
    isPopular: true
  },
  {
    id: 'carded-cotton',
    name: 'Carded Cotton Yarn',
    description: 'Cost-effective carded cotton yarn maintaining good quality standards. Perfect for everyday textiles and casual wear.',
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&h=600&fit=crop&crop=entropy',
    counts: ['10s', '16s', '20s', '24s', '30s'],
    twist: '3.5 - 4.0 TPI',
    strength: 'Medium-High',
    colors: '150+',
    moq: '300 kg',
    price: '$3.50 - $4.80 per kg',
    leadTime: '10-15 days',
    applications: ['Casual Wear', 'Workwear', 'Home Textiles', 'Canvas'],
    features: ['Cost Effective', 'Good Strength', 'Versatile', 'Quick Production'],
    certifications: ['OEKO-TEX Standard 100', 'ISO 9001'],
    sustainability: 'Standard production'
  },
  {
    id: 'organic-cotton',
    name: 'Organic Cotton Yarn',
    description: 'Certified organic cotton yarn from pesticide-free farms. Environmentally responsible choice for sustainable fashion.',
    image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=800&h=600&fit=crop&crop=entropy',
    counts: ['20s', '30s', '40s', '50s'],
    twist: '3.8 - 4.5 TPI',
    strength: 'High',
    colors: '100+',
    moq: '1000 kg',
    price: '$6.50 - $8.20 per kg',
    leadTime: '20-25 days',
    applications: ['Organic Fashion', 'Baby Wear', 'Eco-friendly Textiles', 'Luxury Brands'],
    features: ['100% Organic', 'Chemical Free', 'Biodegradable', 'Skin Friendly', 'Premium Quality'],
    certifications: ['GOTS', 'OCS', 'OEKO-TEX Standard 100'],
    sustainability: 'Fully organic & sustainable',
    isEco: true
  },
  {
    id: 'recycled-cotton',
    name: 'Recycled Cotton Yarn',
    description: 'Sustainable recycled cotton yarn made from pre and post-consumer cotton waste. Eco-friendly without compromising quality.',
    image: 'https://images.unsplash.com/photo-1604719311504-e2ecd0324e0e?w=800&h=600&fit=crop&crop=entropy',
    counts: ['16s', '20s', '24s', '30s'],
    twist: '3.6 - 4.1 TPI',
    strength: 'Medium',
    colors: '80+',
    moq: '500 kg',
    price: '$4.80 - $6.20 per kg',
    leadTime: '18-22 days',
    applications: ['Casual Wear', 'Denim', 'Accessories', 'Home Textiles'],
    features: ['Eco-Friendly', 'Recycled Content', 'Good Quality', 'Sustainable'],
    certifications: ['GRS', 'OEKO-TEX Standard 100', 'RCS'],
    sustainability: '70% recycled content',
    isEco: true
  }
];

// Technical specifications
const technicalSpecs = {
  fiber: {
    type: '100% Cotton',
    stapleLength: '28-34mm',
    micronaire: '3.5-4.9',
    strength: '29-32 g/tex',
    maturity: '0.85-0.95'
  },
  yarn: {
    system: 'Ring Spun',
    direction: 'Z-Twist',
    evenness: 'CV% ≤ 12',
    imperfections: 'Uster Standards',
    hairiness: 'H ≤ 5.5'
  },
  physical: {
    tensileStrength: '15-25 cN/tex',
    elongation: '4-8%',
    abrasionResistance: 'High',
    pilling: 'Grade 4-5',
    shrinkage: '≤ 3%'
  },
  chemical: {
    moisture: '≤ 8.5%',
    ph: '6.0-8.0',
    formaldehydeContent: '≤ 75 ppm',
    heavyMetals: 'OEKO-TEX Limits',
    pesticideResidues: 'Not detectable'
  }
};

// Manufacturing process
const manufacturingSteps = [
  {
    step: 1,
    title: 'Cotton Selection',
    description: 'Careful selection of premium cotton fibers based on staple length, strength, and purity.',
    icon: Leaf,
    duration: '1-2 days'
  },
  {
    step: 2,
    title: 'Blending & Carding',
    description: 'Precise blending of cotton varieties and carding to align fibers and remove impurities.',
    icon: Settings,
    duration: '2-3 days'
  },
  {
    step: 3,
    title: 'Drawing & Combing',
    description: 'Drawing process to parallel fibers followed by combing for premium grades.',
    icon: Layers,
    duration: '1-2 days'
  },
  {
    step: 4,
    title: 'Roving',
    description: 'Converting carded/combed sliver into roving with slight twist preparation for spinning.',
    icon: Wind,
    duration: '1 day'
  },
  {
    step: 5,
    title: 'Ring Spinning',
    description: 'Final spinning process creating strong, even yarn with optimal twist and tension.',
    icon: Target,
    duration: '2-3 days'
  },
  {
    step: 6,
    title: 'Quality Control',
    description: 'Comprehensive testing for strength, evenness, and compliance with international standards.',
    icon: Shield,
    duration: '1-2 days'
  }
];

// Color categories
const colorCategories = [
  {
    name: 'Natural Colors',
    count: 12,
    colors: ['Raw White', 'Optical White', 'Cream', 'Ecru', 'Natural', 'Off-White'],
    description: 'Undyed and naturally colored cotton yarns'
  },
  {
    name: 'Basic Colors',
    count: 24,
    colors: ['Black', 'Navy', 'Gray', 'Brown', 'Beige', 'Khaki'],
    description: 'Essential color palette for everyday use'
  },
  {
    name: 'Fashion Colors',
    count: 60,
    colors: ['Red', 'Blue', 'Green', 'Purple', 'Orange', 'Pink'],
    description: 'Trendy colors for fashion applications'
  },
  {
    name: 'Pastel Colors',
    count: 36,
    colors: ['Baby Blue', 'Soft Pink', 'Mint Green', 'Lavender', 'Peach', 'Lemon'],
    description: 'Soft, gentle colors for delicate applications'
  },
  {
    name: 'Neon & Bright',
    count: 18,
    colors: ['Electric Blue', 'Hot Pink', 'Lime Green', 'Orange Red', 'Magenta', 'Cyan'],
    description: 'Vibrant colors for bold designs'
  },
  {
    name: 'Melange & Heathers',
    count: 50,
    colors: ['Gray Melange', 'Blue Heather', 'Green Mix', 'Multi-color', 'Space Dye'],
    description: 'Mixed and blended color effects'
  }
];

// Applications data
const applications = [
  {
    category: 'Apparel',
    icon: Shirt,
    products: [
      { name: 'Premium T-shirts', description: 'Soft, comfortable everyday wear', yarns: ['Combed Cotton'] },
      { name: 'Dress Shirts', description: 'Formal and business attire', yarns: ['Combed Cotton'] },
      { name: 'Casual Wear', description: 'Relaxed fit clothing', yarns: ['Carded Cotton'] },
      { name: 'Underwear', description: 'Intimate apparel requiring softness', yarns: ['Combed Cotton', 'Organic Cotton'] },
      { name: 'Baby Clothing', description: 'Gentle fabrics for sensitive skin', yarns: ['Organic Cotton', 'Combed Cotton'] },
      { name: 'Denim', description: 'Durable denim fabrics', yarns: ['Carded Cotton', 'Recycled Cotton'] }
    ]
  },
  {
    category: 'Home Textiles',
    icon: Home,
    products: [
      { name: 'Bed Sheets', description: 'Comfortable sleeping textiles', yarns: ['Combed Cotton'] },
      { name: 'Towels', description: 'Absorbent bathroom textiles', yarns: ['Carded Cotton', 'Combed Cotton'] },
      { name: 'Curtains', description: 'Decorative window treatments', yarns: ['Carded Cotton'] },
      { name: 'Upholstery', description: 'Furniture covering fabrics', yarns: ['Carded Cotton'] },
      { name: 'Table Linens', description: 'Dining and kitchen textiles', yarns: ['Combed Cotton'] },
      { name: 'Cushions', description: 'Decorative home accessories', yarns: ['All Types'] }
    ]
  }
];

// Certifications and compliance
const certifications = [
  {
    name: 'OEKO-TEX Standard 100',
    description: 'Ensures textiles are free from harmful substances',
    validity: '1 year',
    scope: 'All cotton yarn products'
  },
  {
    name: 'GOTS (Global Organic Textile Standard)',
    description: 'Certification for organic cotton products',
    validity: '3 years',
    scope: 'Organic cotton yarns only'
  },
  {
    name: 'GRS (Global Recycled Standard)',
    description: 'Verification of recycled content',
    validity: '3 years',
    scope: 'Recycled cotton yarns'
  },
  {
    name: 'ISO 9001:2015',
    description: 'Quality management system certification',
    validity: '3 years',
    scope: 'All manufacturing processes'
  },
  {
    name: 'ISO 14001:2015',
    description: 'Environmental management system',
    validity: '3 years',
    scope: 'Manufacturing facilities'
  }
];

export function CottonYarnsPage({ onNavigate }: CottonYarnsPageProps) {
  const [selectedProduct, setSelectedProduct] = useState(cottonYarnProducts[0]);
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
            <span className="text-muted-foreground">Cotton Yarns</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <Badge variant="secondary" className="w-fit">
                <Package className="w-4 h-4 mr-2" />
                Premium Cotton Yarns
              </Badge>
              
              <div className="space-y-6">
                <h1 className="text-display" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Cotton Yarn
                  <span className="text-gradient-accent block">Collection</span>
                </h1>
                
                <p className="text-body-lg text-muted-foreground leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Premium quality cotton yarns manufactured from carefully selected cotton fibers. 
                  Our comprehensive range includes combed, carded, organic, and recycled cotton 
                  options to meet diverse textile requirements.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  Request Quote
                  <Mail className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="w-4 h-4 mr-2" />
                  Download Specs
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                    4
                  </div>
                  <div className="text-sm text-muted-foreground">Product Types</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                    200+
                  </div>
                  <div className="text-sm text-muted-foreground">Color Options</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                    10s-60s
                  </div>
                  <div className="text-sm text-muted-foreground">Count Range</div>
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
                  src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=800&fit=crop&crop=entropy"
                  alt="Premium cotton yarn cones showcasing quality and texture"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Floating quality indicators */}
                <div className="absolute top-6 right-6">
                  <Badge className="bg-white/90 text-primary border-0 mb-3">
                    <Award className="w-3 h-3 mr-1" />
                    GOTS Certified
                  </Badge>
                </div>
                <div className="absolute bottom-6 left-6">
                  <Badge className="bg-accent/90 text-white border-0">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Premium Quality
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

      {/* Product Selection Tabs */}
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
              Product Range
            </Badge>
            <h2 className="text-heading mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Choose Your Cotton Yarn
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Select from our comprehensive range of cotton yarns, each designed for specific applications and quality requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {cottonYarnProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className={`rounded-xl border shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden cursor-pointer ${
                    selectedProduct.id === product.id ? 'border-accent bg-accent/5' : 'border-black/5 bg-white'
                  }`}
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="relative h-48">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Product badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {product.isPopular && (
                        <Badge className="bg-accent text-white border-0">
                          <Star className="w-3 h-3 mr-1" />
                          Popular
                        </Badge>
                      )}
                      {product.isEco && (
                        <Badge className="bg-green-600 text-white border-0">
                          <Leaf className="w-3 h-3 mr-1" />
                          Eco-Friendly
                        </Badge>
                      )}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {product.name}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {product.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Count Range</h4>
                        <p className="text-muted-foreground">{product.counts.join(', ')}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">MOQ</h4>
                        <p className="text-muted-foreground">{product.moq}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="text-xs font-semibold text-primary">Key Features</h4>
                      <div className="flex flex-wrap gap-1">
                        {product.features.slice(0, 3).map((feature, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Selected Product Details */}
          <motion.div
            key={selectedProduct.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="rounded-xl border border-black/5 bg-white shadow-lg">
              <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
                <div className="border-b border-border px-6 pt-6">
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {selectedProduct.name}
                      </h3>
                      <p className="text-muted-foreground">{selectedProduct.description}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Request Quote
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download TDS
                      </Button>
                    </div>
                  </div>
                  
                  <TabsList className="grid w-full grid-cols-5">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="specifications">Specifications</TabsTrigger>
                    <TabsTrigger value="applications">Applications</TabsTrigger>
                    <TabsTrigger value="colors">Colors</TabsTrigger>
                    <TabsTrigger value="certifications">Certifications</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="overview" className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-primary">Count Range</h4>
                      <p className="text-muted-foreground">{selectedProduct.counts.join(', ')}</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-primary">Twist</h4>
                      <p className="text-muted-foreground">{selectedProduct.twist}</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-primary">Strength</h4>
                      <p className="text-muted-foreground">{selectedProduct.strength}</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-primary">Colors Available</h4>
                      <p className="text-muted-foreground">{selectedProduct.colors}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-primary">Minimum Order</h4>
                      <p className="text-muted-foreground">{selectedProduct.moq}</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-primary">Price Range</h4>
                      <p className="text-muted-foreground">{selectedProduct.price}</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-primary">Lead Time</h4>
                      <p className="text-muted-foreground">{selectedProduct.leadTime}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-primary">Key Features</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                      {selectedProduct.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-accent" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-primary">Primary Applications</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.applications.map((app, i) => (
                        <Badge key={i} variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="specifications" className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="p-6">
                      <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                        <Leaf className="w-4 h-4" />
                        Fiber Properties
                      </h4>
                      <div className="space-y-3">
                        {Object.entries(technicalSpecs.fiber).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="text-sm text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                            <span className="text-sm font-medium">{value}</span>
                          </div>
                        ))}
                      </div>
                    </Card>

                    <Card className="p-6">
                      <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                        <Settings className="w-4 h-4" />
                        Yarn Properties
                      </h4>
                      <div className="space-y-3">
                        {Object.entries(technicalSpecs.yarn).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="text-sm text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                            <span className="text-sm font-medium">{value}</span>
                          </div>
                        ))}
                      </div>
                    </Card>

                    <Card className="p-6">
                      <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                        <Shield className="w-4 h-4" />
                        Physical Properties
                      </h4>
                      <div className="space-y-3">
                        {Object.entries(technicalSpecs.physical).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="text-sm text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                            <span className="text-sm font-medium">{value}</span>
                          </div>
                        ))}
                      </div>
                    </Card>

                    <Card className="p-6">
                      <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                        <Droplets className="w-4 h-4" />
                        Chemical Properties
                      </h4>
                      <div className="space-y-3">
                        {Object.entries(technicalSpecs.chemical).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="text-sm text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                            <span className="text-sm font-medium">{value}</span>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="applications" className="p-6 space-y-6">
                  {applications.map((category, index) => (
                    <div key={category.category} className="space-y-4">
                      <h4 className="font-semibold text-primary text-lg flex items-center gap-2">
                        <category.icon className="w-5 h-5" />
                        {category.category}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {category.products.map((product, i) => (
                          <Card key={i} className="p-4">
                            <h5 className="font-semibold mb-2">{product.name}</h5>
                            <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                            <div className="flex flex-wrap gap-1">
                              {product.yarns.map((yarn, j) => (
                                <Badge key={j} variant="outline" className="text-xs">
                                  {yarn}
                                </Badge>
                              ))}
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="colors" className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {colorCategories.map((category, index) => (
                      <Card key={index} className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h4 className="font-semibold text-primary">{category.name}</h4>
                          <Badge variant="outline">{category.count} colors</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                        <div className="space-y-2">
                          <h5 className="text-sm font-medium">Sample Colors:</h5>
                          <div className="flex flex-wrap gap-1">
                            {category.colors.map((color, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {color}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                  <div className="text-center">
                    <Button>
                      <Eye className="w-4 h-4 mr-2" />
                      View Complete Color Chart
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="certifications" className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certifications.map((cert, index) => (
                      <Card key={index} className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                            <Award className="w-6 h-6 text-accent" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-primary mb-2">{cert.name}</h4>
                            <p className="text-sm text-muted-foreground mb-3">{cert.description}</p>
                            <div className="flex justify-between text-xs text-muted-foreground">
                              <span>Validity: {cert.validity}</span>
                              <span>{cert.scope}</span>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Manufacturing Process */}
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
              <Factory className="w-4 h-4 mr-2" />
              Manufacturing Process
            </Badge>
            <h2 className="text-heading mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              From Fiber to Yarn
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Our state-of-the-art manufacturing process ensures consistent quality and performance in every yarn.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {manufacturingSteps.map((step, index) => (
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
                  <Badge variant="outline" className="text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    {step.duration}
                  </Badge>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Contact & Ordering */}
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
                <Sparkles className="w-4 h-4 mr-2" />
                Ready to Order
              </Badge>
              
              <div className="space-y-6">
                <h2 className="text-heading" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Start Your Order
                  <span className="text-gradient-accent block">Today</span>
                </h2>
                
                <p className="text-body-lg text-muted-foreground leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Ready to place an order or need more information? Our technical team is 
                  available to assist with product selection, custom requirements, and 
                  technical specifications.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mt-1">
                    <Mail className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Request a Quote</h3>
                    <p className="text-sm text-muted-foreground">
                      Get detailed pricing and specifications for your requirements
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mt-1">
                    <Package className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Sample Orders</h3>
                    <p className="text-sm text-muted-foreground">
                      Test our quality with sample orders before bulk purchase
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mt-1">
                    <Users className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Technical Support</h3>
                    <p className="text-sm text-muted-foreground">
                      Expert guidance on product selection and applications
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  Request Quote
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Sales Team
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
                  Quick Order Info
                </h3>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Min Order</h4>
                      <p className="text-sm text-muted-foreground">300-1000 kg</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Lead Time</h4>
                      <p className="text-sm text-muted-foreground">10-25 days</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Payment</h4>
                      <p className="text-sm text-muted-foreground">L/C, T/T</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Shipping</h4>
                      <p className="text-sm text-muted-foreground">Worldwide</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold text-primary mb-3">Contact Information</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-accent" />
                        <span>cotton@globaltextiles.com</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-accent" />
                        <span>+91 22 2876 5432</span>
                      </div>
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