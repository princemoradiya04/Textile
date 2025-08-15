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
  Flame
} from 'lucide-react';
import { useState } from 'react';

// Add interface for navigation prop
interface WoolYarnsPageProps {
  onNavigate?: (page: 'home' | 'about' | 'products' | 'sustainability' | 'contact' | 'news' | 'cotton-yarns' | 'wool-yarns') => void;
}

// Wool yarn product data
const woolYarnProducts = [
  {
    id: 'merino-wool',
    name: 'Merino Wool Yarn',
    description: 'Premium merino wool yarn with exceptional softness, temperature regulation, and odor resistance. Perfect for luxury garments and activewear.',
    image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=800&h=600&fit=crop&crop=entropy',
    counts: ['2/28', '2/32', '2/40', '2/48', '2/60'],
    twist: '4.0 - 4.8 TPI',
    strength: 'High',
    colors: '120+',
    moq: '200 kg',
    price: '$12.50 - $18.90 per kg',
    leadTime: '18-22 days',
    applications: ['Luxury Knitwear', 'Base Layers', 'Suiting', 'Activewear'],
    features: ['Temperature Regulation', 'Odor Resistant', 'Soft Hand Feel', 'Natural Elasticity', 'UV Protection'],
    certifications: ['RWS', 'OEKO-TEX Standard 100', 'ISO 9001'],
    sustainability: 'Responsibly sourced merino wool',
    isPopular: true,
    micronCount: '18-22 microns'
  },
  {
    id: 'lambswool',
    name: 'Lambswool Yarn',
    description: 'Soft and lightweight lambswool yarn with excellent insulation properties. Ideal for warm, comfortable garments and luxury accessories.',
    image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=800&h=600&fit=crop&crop=entropy',
    counts: ['2/24', '2/28', '2/32', '2/40'],
    twist: '3.8 - 4.5 TPI',
    strength: 'Medium-High',
    colors: '90+',
    moq: '150 kg',
    price: '$9.80 - $14.20 per kg',
    leadTime: '15-18 days',
    applications: ['Sweaters', 'Scarves', 'Baby Clothing', 'Blankets'],
    features: ['Ultra Soft', 'Lightweight', 'Excellent Insulation', 'Hypoallergenic', 'Easy Care'],
    certifications: ['OEKO-TEX Standard 100', 'ISO 9001'],
    sustainability: 'Ethically sourced first shearing',
    micronCount: '20-25 microns'
  },
  {
    id: 'cashmere-blend',
    name: 'Cashmere Blend Yarn',
    description: 'Luxurious cashmere blend combining premium cashmere with wool for exceptional softness and durability at accessible pricing.',
    image: 'https://images.unsplash.com/photo-1612198537895-0f4ac2e8a93b?w=800&h=600&fit=crop&crop=entropy',
    counts: ['2/26', '2/30', '2/36', '2/44'],
    twist: '4.0 - 4.6 TPI',
    strength: 'Medium-High',
    colors: '80+',
    moq: '100 kg',
    price: '$28.50 - $42.00 per kg',
    leadTime: '22-28 days',
    applications: ['Luxury Fashion', 'Premium Knitwear', 'High-end Accessories', 'Designer Garments'],
    features: ['Ultimate Softness', 'Lightweight Warmth', 'Luxurious Feel', 'Natural Sheen', 'Excellent Drape'],
    certifications: ['RWS', 'OEKO-TEX Standard 100', 'Cashmere Standard'],
    sustainability: 'Sustainable cashmere sourcing',
    isLuxury: true,
    cashmereContent: '30%',
    micronCount: '14-16 microns'
  },
  {
    id: 'wool-blend',
    name: 'Wool Blend Yarn',
    description: 'Versatile wool blend yarns combining wool with other natural and synthetic fibers for enhanced performance and value.',
    image: 'https://images.unsplash.com/photo-1578924608972-6c7a2b8c38e1?w=800&h=600&fit=crop&crop=entropy',
    counts: ['2/28', '2/32', '2/40', '2/48'],
    twist: '4.2 - 4.8 TPI',
    strength: 'High',
    colors: '150+',
    moq: '250 kg',
    price: '$8.20 - $12.50 per kg',
    leadTime: '12-16 days',
    applications: ['Workwear', 'Upholstery', 'Carpets', 'Industrial Textiles'],
    features: ['Enhanced Durability', 'Cost Effective', 'Easy Maintenance', 'Versatile Properties', 'Consistent Quality'],
    certifications: ['OEKO-TEX Standard 100', 'ISO 9001'],
    sustainability: 'Mixed fiber sustainability standards',
    blendComposition: 'Wool 60%, Polyester 25%, Acrylic 15%',
    micronCount: '22-26 microns'
  },
  {
    id: 'alpaca-wool',
    name: 'Alpaca Wool Yarn',
    description: 'Exclusive alpaca wool yarn offering superior warmth, softness, and hypoallergenic properties. Premium choice for luxury textiles.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop&crop=entropy',
    counts: ['2/24', '2/28', '2/32', '2/36'],
    twist: '3.6 - 4.2 TPI',
    strength: 'High',
    colors: '60+',
    moq: '100 kg',
    price: '$22.00 - $32.50 per kg',
    leadTime: '25-30 days',
    applications: ['Luxury Outerwear', 'High-end Knitwear', 'Premium Accessories', 'Designer Collections'],
    features: ['Hypoallergenic', 'Water Repellent', 'Superior Warmth', 'Natural Sheen', 'Lanolin-free'],
    certifications: ['Animal Welfare Certified', 'OEKO-TEX Standard 100'],
    sustainability: 'Ethically sourced alpaca fiber',
    isEco: true,
    isLuxury: true,
    micronCount: '18-30 microns'
  }
];

// Technical specifications
const technicalSpecs = {
  fiber: {
    type: 'Natural Wool Fibers',
    stapleLength: '50-150mm',
    micronRange: '14-30 microns',
    crimp: '8-14 crimps per inch',
    moisture: '13-18% regain',
    lanolin: 'Scoured clean'
  },
  yarn: {
    system: 'Worsted & Woolen',
    direction: 'Z-Twist',
    evenness: 'CV% ≤ 14',
    imperfections: 'Uster Standards',
    hairiness: 'H ≤ 6.5'
  },
  physical: {
    tensileStrength: '12-18 cN/tex',
    elongation: '25-35%',
    resilience: 'Excellent',
    elasticity: 'Natural stretch',
    abrasionResistance: 'Good to Excellent'
  },
  thermal: {
    insulation: 'Excellent',
    breathability: 'High',
    temperatureRegulation: 'Natural',
    moistureWicking: 'Good',
    odorResistance: 'Natural antimicrobial'
  }
};

// Manufacturing process for wool yarns
const manufacturingSteps = [
  {
    step: 1,
    title: 'Wool Selection & Grading',
    description: 'Careful selection and grading of premium wool fibers based on micron count, staple length, and quality.',
    icon: Mountain,
    duration: '2-3 days'
  },
  {
    step: 2,
    title: 'Scouring & Cleaning',
    description: 'Thorough cleaning process to remove lanolin, dirt, and impurities while preserving fiber integrity.',
    icon: Droplets,
    duration: '1-2 days'
  },
  {
    step: 3,
    title: 'Carding & Combing',
    description: 'Alignment of wool fibers through carding and combing processes for smooth, parallel fiber preparation.',
    icon: Layers,
    duration: '1-2 days'
  },
  {
    step: 4,
    title: 'Drawing & Roving',
    description: 'Drawing process to create continuous roving with controlled thickness and twist preparation.',
    icon: Wind,
    duration: '1 day'
  },
  {
    step: 5,
    title: 'Spinning',
    description: 'Precision spinning using worsted or woolen systems to create strong, consistent wool yarns.',
    icon: Target,
    duration: '2-3 days'
  },
  {
    step: 6,
    title: 'Quality Testing',
    description: 'Comprehensive testing for strength, twist, evenness, and compliance with wool industry standards.',
    icon: Shield,
    duration: '1-2 days'
  }
];

// Color categories for wool yarns
const colorCategories = [
  {
    name: 'Natural Wool Colors',
    count: 8,
    colors: ['Natural White', 'Cream', 'Light Gray', 'Dark Gray', 'Brown', 'Black'],
    description: 'Undyed natural wool colors preserving fiber integrity'
  },
  {
    name: 'Earth Tones',
    count: 18,
    colors: ['Tan', 'Camel', 'Rust', 'Terracotta', 'Olive', 'Forest Green'],
    description: 'Warm earth tones perfect for autumn collections'
  },
  {
    name: 'Classic Colors',
    count: 24,
    colors: ['Navy', 'Burgundy', 'Hunter Green', 'Charcoal', 'Maroon', 'Royal Blue'],
    description: 'Timeless colors for traditional and formal wear'
  },
  {
    name: 'Fashion Colors',
    count: 30,
    colors: ['Emerald', 'Sapphire', 'Ruby', 'Amethyst', 'Coral', 'Teal'],
    description: 'Contemporary fashion colors for modern designs'
  },
  {
    name: 'Heathers & Melange',
    count: 25,
    colors: ['Gray Heather', 'Blue Heather', 'Green Melange', 'Brown Melange'],
    description: 'Sophisticated heathered and melange effects'
  },
  {
    name: 'Luxury Shades',
    count: 15,
    colors: ['Platinum', 'Rose Gold', 'Champagne', 'Pewter', 'Bronze', 'Copper'],
    description: 'Premium metallic and luxury color palette'
  }
];

// Applications data for wool yarns
const applications = [
  {
    category: 'Fashion & Apparel',
    icon: Shirt,
    products: [
      { name: 'Luxury Knitwear', description: 'Premium sweaters and cardigans', yarns: ['Merino Wool', 'Cashmere Blend'] },
      { name: 'Suiting', description: 'Professional business attire', yarns: ['Merino Wool', 'Wool Blend'] },
      { name: 'Outerwear', description: 'Coats, jackets, and winter wear', yarns: ['Alpaca Wool', 'Merino Wool'] },
      { name: 'Activewear', description: 'Performance sports clothing', yarns: ['Merino Wool'] },
      { name: 'Accessories', description: 'Scarves, hats, and gloves', yarns: ['Lambswool', 'Cashmere Blend'] },
      { name: 'Underwear', description: 'Base layers and thermal wear', yarns: ['Merino Wool'] }
    ]
  },
  {
    category: 'Home & Interior',
    icon: Home,
    products: [
      { name: 'Blankets & Throws', description: 'Cozy home textiles', yarns: ['Lambswool', 'Alpaca Wool'] },
      { name: 'Upholstery', description: 'Premium furniture fabrics', yarns: ['Wool Blend'] },
      { name: 'Carpets & Rugs', description: 'Durable floor coverings', yarns: ['Wool Blend'] },
      { name: 'Curtains', description: 'Insulating window treatments', yarns: ['Wool Blend'] },
      { name: 'Cushions', description: 'Decorative pillows and cushions', yarns: ['Merino Wool', 'Cashmere Blend'] },
      { name: 'Wall Hangings', description: 'Decorative textile art', yarns: ['All Types'] }
    ]
  },
  {
    category: 'Technical Applications',
    icon: Target,
    products: [
      { name: 'Flame Resistant Fabrics', description: 'Industrial safety textiles', yarns: ['Wool Blend'] },
      { name: 'Insulation Materials', description: 'Building and automotive insulation', yarns: ['Wool Blend'] },
      { name: 'Filtration Media', description: 'Air and liquid filtration systems', yarns: ['Wool Blend'] },
      { name: 'Military Textiles', description: 'Specialized defense applications', yarns: ['Merino Wool'] },
      { name: 'Medical Textiles', description: 'Healthcare and therapeutic applications', yarns: ['Merino Wool'] },
      { name: 'Geotextiles', description: 'Environmental and construction applications', yarns: ['Wool Blend'] }
    ]
  }
];

// Certifications and compliance for wool
const certifications = [
  {
    name: 'Responsible Wool Standard (RWS)',
    description: 'Ensures wool comes from farms with progressive land management',
    validity: '3 years',
    scope: 'Merino and premium wool products'
  },
  {
    name: 'OEKO-TEX Standard 100',
    description: 'Guarantees textiles are free from harmful substances',
    validity: '1 year',
    scope: 'All wool yarn products'
  },
  {
    name: 'Global Organic Textile Standard (GOTS)',
    description: 'Certification for organic wool products',
    validity: '3 years',
    scope: 'Organic wool yarns only'
  },
  {
    name: 'Animal Welfare Approved (AWA)',
    description: 'Highest welfare standards for farm animals',
    validity: '3 years',
    scope: 'Alpaca and specialty wool products'
  },
  {
    name: 'ISO 9001:2015',
    description: 'Quality management system certification',
    validity: '3 years',
    scope: 'All manufacturing processes'
  },
  {
    name: 'Cradle to Cradle Certified',
    description: 'Holistic approach to sustainable manufacturing',
    validity: '2 years',
    scope: 'Premium wool products'
  }
];

// Wool care instructions
const careInstructions = [
  {
    category: 'Washing',
    icon: Droplets,
    instructions: [
      'Hand wash in cool water (30°C max)',
      'Use wool-specific detergent',
      'Avoid agitation and twisting',
      'Rinse thoroughly with cool water'
    ]
  },
  {
    category: 'Drying',
    icon: Sun,
    instructions: [
      'Lay flat to dry on absorbent towel',
      'Avoid direct sunlight',
      'Do not wring or twist',
      'Reshape while damp'
    ]
  },
  {
    category: 'Storage',
    icon: Shield,
    instructions: [
      'Store in breathable containers',
      'Use cedar or lavender sachets',
      'Avoid plastic bags',
      'Keep away from moths'
    ]
  }
];

export function WoolYarnsPage({ onNavigate }: WoolYarnsPageProps) {
  const [selectedProduct, setSelectedProduct] = useState(woolYarnProducts[0]);
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
            <span className="text-muted-foreground">Wool Yarns</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <Badge variant="secondary" className="w-fit">
                <Mountain className="w-4 h-4 mr-2" />
                Premium Wool Yarns
              </Badge>
              
              <div className="space-y-6">
                <h1 className="text-display" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Wool Yarn
                  <span className="text-gradient-accent block">Collection</span>
                </h1>
                
                <p className="text-body-lg text-muted-foreground leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Premium quality wool yarns from the finest merino, lambswool, and specialty fibers. 
                  Our comprehensive range includes luxury cashmere blends, sustainable alpaca wool, 
                  and versatile wool blends for diverse textile applications.
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
                    5
                  </div>
                  <div className="text-sm text-muted-foreground">Product Types</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                    120+
                  </div>
                  <div className="text-sm text-muted-foreground">Color Options</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                    2/24-2/60
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
                  src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=800&h=800&fit=crop&crop=entropy"
                  alt="Premium wool yarn showcasing texture and quality"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Floating quality indicators */}
                <div className="absolute top-6 right-6">
                  <Badge className="bg-white/90 text-primary border-0 mb-3">
                    <Award className="w-3 h-3 mr-1" />
                    RWS Certified
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

      {/* Product Selection Cards */}
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
              Choose Your Wool Yarn
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Select from our premium range of wool yarns, each crafted for specific applications and luxury requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
            {woolYarnProducts.map((product, index) => (
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
                      {product.isLuxury && (
                        <Badge className="bg-purple-600 text-white border-0">
                          <Sparkles className="w-3 h-3 mr-1" />
                          Luxury
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
                      <Badge className="bg-white/20 text-white border-white/30 text-xs">
                        {product.micronCount}
                      </Badge>
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
                        {product.features.slice(0, 2).map((feature, i) => (
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
                    <TabsTrigger value="care">Care Guide</TabsTrigger>
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
                      <h4 className="font-semibold text-primary">Fiber Micron</h4>
                      <p className="text-muted-foreground">{selectedProduct.micronCount}</p>
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

                  {selectedProduct.cashmereContent && (
                    <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                      <h4 className="font-semibold text-purple-900 mb-2">Luxury Blend Composition</h4>
                      <p className="text-sm text-purple-700">
                        Contains {selectedProduct.cashmereContent} premium cashmere for exceptional luxury and softness.
                      </p>
                    </div>
                  )}

                  {selectedProduct.blendComposition && (
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-900 mb-2">Blend Composition</h4>
                      <p className="text-sm text-blue-700">{selectedProduct.blendComposition}</p>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="specifications" className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="p-6">
                      <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                        <Mountain className="w-4 h-4" />
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
                        <Thermometer className="w-4 h-4" />
                        Thermal Properties
                      </h4>
                      <div className="space-y-3">
                        {Object.entries(technicalSpecs.thermal).map(([key, value]) => (
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

                <TabsContent value="care" className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {careInstructions.map((care, index) => (
                      <Card key={index} className="p-6">
                        <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                          <care.icon className="w-5 h-5" />
                          {care.category}
                        </h4>
                        <div className="space-y-3">
                          {care.instructions.map((instruction, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{instruction}</span>
                            </div>
                          ))}
                        </div>
                      </Card>
                    ))}
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                    <h4 className="font-semibold text-amber-900 mb-3 flex items-center gap-2">
                      <Flame className="w-5 h-5" />
                      Important Care Tips
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-amber-800">
                      <div className="space-y-2">
                        <p>• Never use bleach or fabric softener</p>
                        <p>• Iron on low heat with pressing cloth</p>
                        <p>• Professional cleaning recommended for luxury yarns</p>
                      </div>
                      <div className="space-y-2">
                        <p>• Store with mothballs in off-season</p>
                        <p>• Brush gently to maintain texture</p>
                        <p>• Allow to air between wears</p>
                      </div>
                    </div>
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
              From Fleece to Yarn
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Our expert wool processing ensures the finest quality yarns through time-tested methods and modern precision.
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
                  Premium Wool
                  <span className="text-gradient-accent block">Solutions</span>
                </h2>
                
                <p className="text-body-lg text-muted-foreground leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Ready to elevate your textile projects with premium wool yarns? Our wool specialists 
                  are available to assist with product selection, sustainability certifications, 
                  and technical specifications for luxury applications.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mt-1">
                    <Mail className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Luxury Yarn Consultation</h3>
                    <p className="text-sm text-muted-foreground">
                      Expert guidance on wool selection for premium applications
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mt-1">
                    <Package className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Sample Collection</h3>
                    <p className="text-sm text-muted-foreground">
                      Premium wool samples for quality evaluation and testing
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mt-1">
                    <Award className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Certification Support</h3>
                    <p className="text-sm text-muted-foreground">
                      RWS, GOTS, and Animal Welfare certification assistance
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
                  Speak to Wool Expert
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
                  Wool Yarn Ordering
                </h3>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Min Order</h4>
                      <p className="text-sm text-muted-foreground">100-250 kg</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Lead Time</h4>
                      <p className="text-sm text-muted-foreground">12-30 days</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Payment</h4>
                      <p className="text-sm text-muted-foreground">L/C, T/T, Escrow</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Shipping</h4>
                      <p className="text-sm text-muted-foreground">Climate Controlled</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold text-primary mb-3">Wool Specialist Team</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-accent" />
                        <span>wool@globaltextiles.com</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-accent" />
                        <span>+91 22 2876 5444</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold text-primary mb-3">Certifications</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">RWS</Badge>
                      <Badge variant="outline" className="text-xs">OEKO-TEX</Badge>
                      <Badge variant="outline" className="text-xs">AWA</Badge>
                      <Badge variant="outline" className="text-xs">GOTS</Badge>
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