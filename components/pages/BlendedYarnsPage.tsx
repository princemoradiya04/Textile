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
  Palette
} from 'lucide-react';
import { useState } from 'react';

// Add interface for navigation prop
interface BlendedYarnsPageProps {
  onNavigate?: (page: 'home' | 'about' | 'products' | 'sustainability' | 'contact' | 'news' | 'cotton-yarns' | 'wool-yarns' | 'synthetic-yarns' | 'blended-yarns') => void;
}

// Blended yarn product data
const blendedYarnProducts = [
  {
    id: 'cotton-polyester',
    name: 'Cotton-Polyester Blend',
    description: 'Versatile cotton-polyester blend combining natural comfort with synthetic durability. Perfect balance of softness and performance.',
    image: 'https://images.unsplash.com/photo-1604719311504-e2ecd0324e0e?w=800&h=600&fit=crop&crop=entropy',
    blendRatio: 'Cotton 60% / Polyester 40%',
    counts: ['20s', '30s', '40s', '50s', '60s'],
    twist: '3.8-4.4 TPI',
    strength: 'High',
    colors: '250+',
    moq: '400 kg',
    price: '$2.80 - $3.60 per kg',
    leadTime: '14-18 days',
    applications: ['Workwear', 'Casual Apparel', 'Uniforms', 'Bed Linen'],
    features: ['Easy Care', 'Wrinkle Resistant', 'Durable', 'Comfortable', 'Color Fast'],
    certifications: ['OEKO-TEX Standard 100', 'ISO 9001'],
    sustainability: 'Recycled polyester options available',
    isPopular: true,
    blendType: 'Staple Blend'
  },
  {
    id: 'wool-cashmere',
    name: 'Wool-Cashmere Blend',
    description: 'Luxurious blend of fine wool and premium cashmere offering exceptional softness and warmth. Ideal for high-end fashion applications.',
    image: 'https://images.unsplash.com/photo-1612198537895-0f4ac2e8a93b?w=800&h=600&fit=crop&crop=entropy',
    blendRatio: 'Wool 70% / Cashmere 30%',
    counts: ['2/26', '2/30', '2/36', '2/44', '2/48'],
    twist: '4.0-4.6 TPI',
    strength: 'Medium-High',
    colors: '80+',
    moq: '100 kg',
    price: '$24.00 - $36.00 per kg',
    leadTime: '20-25 days',
    applications: ['Luxury Knitwear', 'Designer Fashion', 'Premium Accessories', 'High-end Suits'],
    features: ['Ultimate Softness', 'Lightweight Warmth', 'Natural Drape', 'Luxury Feel', 'Temperature Regulation'],
    certifications: ['RWS', 'OEKO-TEX Standard 100', 'Cashmere Standard'],
    sustainability: 'Sustainably sourced fibers',
    isLuxury: true,
    blendType: 'Premium Natural Blend'
  },
  {
    id: 'linen-cotton',
    name: 'Linen-Cotton Blend',
    description: 'Natural blend combining linen\'s breathability with cotton\'s softness. Excellent for summer garments and home textiles.',
    image: 'https://images.unsplash.com/photo-1586864387635-57b89e7a7646?w=800&h=600&fit=crop&crop=entropy',
    blendRatio: 'Linen 55% / Cotton 45%',
    counts: ['20s', '30s', '40s', '50s'],
    twist: '4.0-4.5 TPI',
    strength: 'Medium-High',
    colors: '120+',
    moq: '300 kg',
    price: '$4.20 - $5.80 per kg',
    leadTime: '16-20 days',
    applications: ['Summer Clothing', 'Casual Wear', 'Home Textiles', 'Table Linen'],
    features: ['Breathable', 'Moisture Absorbing', 'Natural Look', 'Easy Drape', 'Anti-bacterial'],
    certifications: ['GOTS Available', 'OEKO-TEX Standard 100'],
    sustainability: 'Organic options available',
    isEco: true,
    blendType: 'Natural Fiber Blend'
  },
  {
    id: 'modal-cotton',
    name: 'Modal-Cotton Blend',
    description: 'Innovative blend of modal and cotton offering enhanced softness, color brilliance, and dimensional stability.',
    image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=800&h=600&fit=crop&crop=entropy',
    blendRatio: 'Modal 50% / Cotton 50%',
    counts: ['30s', '40s', '50s', '60s'],
    twist: '3.9-4.3 TPI',
    strength: 'High',
    colors: '180+',
    moq: '500 kg',
    price: '$3.40 - $4.20 per kg',
    leadTime: '15-19 days',
    applications: ['Underwear', 'T-shirts', 'Activewear', 'Sleepwear'],
    features: ['Superior Softness', 'Color Retention', 'Moisture Management', 'Shape Retention', 'Pill Resistant'],
    certifications: ['OEKO-TEX Standard 100', 'ISO 9001'],
    sustainability: 'TENCEL™ Modal available',
    isPremium: true,
    blendType: 'Cellulosic Blend'
  },
  {
    id: 'bamboo-cotton',
    name: 'Bamboo-Cotton Blend',
    description: 'Eco-friendly blend combining bamboo\'s natural antimicrobial properties with cotton\'s comfort and durability.',
    image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=800&h=600&fit=crop&crop=entropy',
    blendRatio: 'Bamboo 40% / Cotton 60%',
    counts: ['20s', '30s', '40s', '50s'],
    twist: '3.8-4.2 TPI',
    strength: 'Medium-High',
    colors: '100+',
    moq: '350 kg',
    price: '$3.80 - $4.60 per kg',
    leadTime: '17-21 days',
    applications: ['Eco-fashion', 'Baby Clothing', 'Activewear', 'Towels'],
    features: ['Antimicrobial', 'UV Protection', 'Moisture Wicking', 'Soft Hand Feel', 'Biodegradable'],
    certifications: ['OEKO-TEX Standard 100', 'Organic Certified'],
    sustainability: '100% sustainable fiber sources',
    isEco: true,
    isSustainable: true,
    blendType: 'Eco-Friendly Blend'
  }
];

// Technical specifications for blended yarns
const technicalSpecs = {
  fiber: {
    blendTechnology: 'Intimate Fiber Blending',
    uniformity: 'CV% ≤ 3.0',
    stapleLength: '25-40mm (varies by blend)',
    micronRange: '15-25 microns (varies)',
    moisture: '6-8% regain (blended average)',
    compatibility: 'Optimized fiber compatibility'
  },
  yarn: {
    system: 'Ring Spinning / Rotor Spinning',
    direction: 'Z-Twist Standard',
    evenness: 'CV% ≤ 12',
    imperfections: 'Minimal due to blending',
    hairiness: 'Controlled through blend optimization'
  },
  physical: {
    tensileStrength: '18-35 cN/tex (blend dependent)',
    elongation: '8-25% (varies by composition)',
    elasticRecovery: '85-95%',
    abrasionResistance: 'Enhanced through blending',
    thermalStability: 'Improved vs. pure fibers'
  },
  performance: {
    moistureManagement: 'Optimized blend properties',
    colorFastness: 'Enhanced retention',
    dimensionalStability: 'Improved through blending',
    comfort: 'Synergistic fiber benefits',
    durability: 'Extended through blend optimization'
  }
};

// Manufacturing process for blended yarns
const manufacturingSteps = [
  {
    step: 1,
    title: 'Fiber Selection & Testing',
    description: 'Careful selection and compatibility testing of different fiber types to ensure optimal blending characteristics.',
    icon: Target,
    duration: '1-2 days'
  },
  {
    step: 2,
    title: 'Intimate Blending',
    description: 'Precise fiber blending using advanced mixing technology to achieve uniform distribution and optimal blend ratios.',
    icon: Combine,
    duration: '4-6 hours'
  },
  {
    step: 3,
    title: 'Carding & Preparation',
    description: 'Specialized carding process optimized for multi-fiber blends to ensure proper fiber alignment and preparation.',
    icon: Layers,
    duration: '2-3 hours'
  },
  {
    step: 4,
    title: 'Drawing & Doubling',
    description: 'Multiple drawing passages to achieve fiber parallelization and further blend uniformity enhancement.',
    icon: Wind,
    duration: '1-2 hours'
  },
  {
    step: 5,
    title: 'Spinning',
    description: 'Optimized spinning parameters for each blend type to maximize the benefits of combined fiber properties.',
    icon: Settings,
    duration: '30-45 minutes'
  },
  {
    step: 6,
    title: 'Blend Quality Testing',
    description: 'Comprehensive testing to verify blend ratio accuracy, uniformity, and performance characteristics.',
    icon: Shield,
    duration: '45 minutes'
  }
];

// Color categories for blended yarns
const colorCategories = [
  {
    name: 'Natural Blend Colors',
    count: 25,
    colors: ['Ecru', 'Natural', 'Cream', 'Light Beige', 'Stone', 'Oatmeal'],
    description: 'Undyed natural colors showcasing fiber blend characteristics'
  },
  {
    name: 'Fashion Neutrals',
    count: 40,
    colors: ['Charcoal', 'Taupe', 'Mushroom', 'Pearl Gray', 'Dove', 'Platinum'],
    description: 'Sophisticated neutral tones for versatile applications'
  },
  {
    name: 'Earth Tones',
    count: 35,
    colors: ['Terracotta', 'Sage', 'Rust', 'Clay', 'Moss', 'Ochre'],
    description: 'Natural earth colors perfect for eco-friendly collections'
  },
  {
    name: 'Contemporary Colors',
    count: 60,
    colors: ['Coral', 'Teal', 'Lavender', 'Mint', 'Peach', 'Sage Green'],
    description: 'Modern fashion colors for contemporary designs'
  },
  {
    name: 'Classic Colors',
    count: 45,
    colors: ['Navy', 'Burgundy', 'Forest', 'Royal Blue', 'Maroon', 'Hunter'],
    description: 'Timeless colors for traditional and formal applications'
  },
  {
    name: 'Performance Colors',
    count: 50,
    colors: ['Athletic Blue', 'Performance Black', 'Sport Gray', 'Active White'],
    description: 'Colors optimized for performance and activewear'
  }
];

// Applications data for blended yarns
const applications = [
  {
    category: 'Fashion & Apparel',
    icon: Shirt,
    products: [
      { name: 'Business Casual', description: 'Professional comfortable clothing', yarns: ['Cotton-Polyester', 'Modal-Cotton'] },
      { name: 'Luxury Knitwear', description: 'Premium sweaters and cardigans', yarns: ['Wool-Cashmere'] },
      { name: 'Summer Collections', description: 'Breathable warm-weather clothing', yarns: ['Linen-Cotton', 'Bamboo-Cotton'] },
      { name: 'Activewear', description: 'Performance athletic clothing', yarns: ['Modal-Cotton', 'Bamboo-Cotton'] },
      { name: 'Underwear & Intimates', description: 'Comfortable next-to-skin garments', yarns: ['Modal-Cotton', 'Bamboo-Cotton'] },
      { name: 'Designer Fashion', description: 'High-end fashion applications', yarns: ['Wool-Cashmere'] }
    ]
  },
  {
    category: 'Home & Lifestyle',
    icon: Home,
    products: [
      { name: 'Bedding & Linens', description: 'Comfortable home textiles', yarns: ['Cotton-Polyester', 'Linen-Cotton'] },
      { name: 'Towels & Bath', description: 'Absorbent bathroom textiles', yarns: ['Bamboo-Cotton', 'Modal-Cotton'] },
      { name: 'Upholstery', description: 'Durable furniture fabrics', yarns: ['Cotton-Polyester'] },
      { name: 'Curtains & Drapes', description: 'Decorative window treatments', yarns: ['Linen-Cotton', 'Cotton-Polyester'] },
      { name: 'Table Linens', description: 'Elegant dining textiles', yarns: ['Linen-Cotton'] },
      { name: 'Throws & Blankets', description: 'Cozy home accessories', yarns: ['Wool-Cashmere', 'Modal-Cotton'] }
    ]
  },
  {
    category: 'Specialized Applications',
    icon: Target,
    products: [
      { name: 'Workwear & Uniforms', description: 'Durable professional clothing', yarns: ['Cotton-Polyester'] },
      { name: 'Medical Textiles', description: 'Healthcare and medical applications', yarns: ['Bamboo-Cotton', 'Modal-Cotton'] },
      { name: 'Baby & Children', description: 'Gentle clothing for sensitive skin', yarns: ['Bamboo-Cotton', 'Linen-Cotton'] },
      { name: 'Eco-Fashion', description: 'Sustainable fashion applications', yarns: ['Bamboo-Cotton', 'Linen-Cotton'] },
      { name: 'Hotel & Hospitality', description: 'Commercial hospitality textiles', yarns: ['Cotton-Polyester', 'Modal-Cotton'] },
      { name: 'Automotive Interiors', description: 'Vehicle interior applications', yarns: ['Cotton-Polyester'] }
    ]
  }
];

// Certifications and compliance for blended yarns
const certifications = [
  {
    name: 'OEKO-TEX Standard 100',
    description: 'Ensures all fiber components are free from harmful substances',
    validity: '1 year',
    scope: 'All blended yarn products'
  },
  {
    name: 'Global Organic Textile Standard (GOTS)',
    description: 'Certification for organic fiber blends',
    validity: '3 years',
    scope: 'Organic cotton and natural fiber blends'
  },
  {
    name: 'Responsible Wool Standard (RWS)',
    description: 'Certification for wool-containing blends',
    validity: '3 years',
    scope: 'Wool-cashmere and wool blend products'
  },
  {
    name: 'Cradle to Cradle Certified',
    description: 'Circular design certification for sustainable blends',
    validity: '2 years',
    scope: 'Eco-friendly and sustainable blend products'
  },
  {
    name: 'ISO 9001:2015',
    description: 'Quality management system certification',
    validity: '3 years',
    scope: 'All blending and manufacturing processes'
  },
  {
    name: 'TENCEL™ Certification',
    description: 'Certification for TENCEL™ Modal and Lyocell blends',
    validity: '2 years',
    scope: 'Modal-cotton and TENCEL™ blend products'
  }
];

// Care instructions for blended yarns
const careInstructions = [
  {
    category: 'Washing',
    icon: Droplets,
    instructions: [
      'Follow care instructions for most delicate fiber in blend',
      'Use appropriate water temperature for fiber blend',
      'Gentle cycle recommended for luxury blends',
      'Sort by color and fiber content'
    ]
  },
  {
    category: 'Drying',
    icon: Sun,
    instructions: [
      'Air dry for best longevity of natural fibers',
      'Low heat tumble dry for cotton-synthetic blends',
      'Lay flat to dry for wool-containing blends',
      'Avoid over-drying to prevent fiber damage'
    ]
  },
  {
    category: 'Maintenance',
    icon: Settings,
    instructions: [
      'Iron at temperature suitable for most sensitive fiber',
      'Use steam for natural fiber blends',
      'Store in breathable garment bags',
      'Professional cleaning for luxury blends'
    ]
  }
];

export function BlendedYarnsPage({ onNavigate }: BlendedYarnsPageProps) {
  const [selectedProduct, setSelectedProduct] = useState(blendedYarnProducts[0]);
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
            <span className="text-muted-foreground">Blended Yarns</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <Badge variant="secondary" className="w-fit">
                <Palette className="w-4 h-4 mr-2" />
                Innovative Blended Yarns
              </Badge>
              
              <div className="space-y-6">
                <h1 className="text-display" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Blended Yarn
                  <span className="text-gradient-accent block">Collection</span>
                </h1>
                
                <p className="text-body-lg text-muted-foreground leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Innovative fiber blends combining the best properties of different materials. Our expertly crafted 
                  blends include cotton-polyester, wool-cashmere, linen-cotton, modal-cotton, and eco-friendly 
                  bamboo blends for enhanced performance and versatility.
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
                  <div className="text-sm text-muted-foreground">Blend Types</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                    250+
                  </div>
                  <div className="text-sm text-muted-foreground">Color Options</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                    20s-60s
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
                  src="https://images.unsplash.com/photo-1604719311504-e2ecd0324e0e?w=800&h=800&fit=crop&crop=entropy"
                  alt="Innovative blended yarn showcasing fiber combination technology"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Floating quality indicators */}
                <div className="absolute top-6 right-6">
                  <Badge className="bg-white/90 text-primary border-0 mb-3">
                    <Award className="w-3 h-3 mr-1" />
                    Certified Blends
                  </Badge>
                </div>
                <div className="absolute bottom-6 left-6">
                  <Badge className="bg-accent/90 text-white border-0">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Optimized Performance
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
              Choose Your Blended Yarn
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Select from our innovative range of blended yarns, each expertly crafted to combine the best properties of different fibers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
            {blendedYarnProducts.map((product, index) => (
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
                      {product.isPremium && (
                        <Badge className="bg-blue-600 text-white border-0">
                          <Zap className="w-3 h-3 mr-1" />
                          Premium
                        </Badge>
                      )}
                      {product.isSustainable && (
                        <Badge className="bg-emerald-600 text-white border-0">
                          <Globe className="w-3 h-3 mr-1" />
                          Sustainable
                        </Badge>
                      )}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {product.name}
                      </h3>
                      <Badge className="bg-white/20 text-white border-white/30 text-xs">
                        {product.blendType}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {product.description}
                    </p>
                    
                    <div className="grid grid-cols-1 gap-4 text-xs">
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Blend Ratio</h4>
                        <p className="text-muted-foreground">{product.blendRatio}</p>
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
                      <h4 className="font-semibold text-primary">Blend Ratio</h4>
                      <p className="text-muted-foreground">{selectedProduct.blendRatio}</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-primary">Count Range</h4>
                      <p className="text-muted-foreground">{selectedProduct.counts.join(', ')}</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-primary">Twist</h4>
                      <p className="text-muted-foreground">{selectedProduct.twist}</p>
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

                  <div className="p-4 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg border border-accent/20">
                    <h4 className="font-semibold text-primary mb-2">Blend Composition</h4>
                    <p className="text-sm text-muted-foreground mb-2">{selectedProduct.blendRatio}</p>
                    <p className="text-sm text-muted-foreground">
                      This blend combines the best properties of each fiber to create enhanced performance characteristics 
                      beyond what individual fibers can achieve alone.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="specifications" className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="p-6">
                      <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                        <Combine className="w-4 h-4" />
                        Fiber Blend Properties
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
                        <Activity className="w-4 h-4" />
                        Performance Properties
                      </h4>
                      <div className="space-y-3">
                        {Object.entries(technicalSpecs.performance).map(([key, value]) => (
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
                      <Palette className="w-5 h-5" />
                      Blend-Specific Care Tips
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-amber-800">
                      <div className="space-y-2">
                        <p>• Always follow care instructions for the most delicate fiber</p>
                        <p>• Test colorfastness before first wash</p>
                        <p>• Use appropriate detergent for fiber blend</p>
                      </div>
                      <div className="space-y-2">
                        <p>• Check blend composition on care label</p>
                        <p>• Professional cleaning recommended for luxury blends</p>
                        <p>• Store according to most sensitive fiber requirements</p>
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
              From Fibers to Blend
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Our advanced blending technology creates optimized fiber combinations that enhance performance beyond individual fiber capabilities.
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
                <Combine className="w-4 h-4 mr-2" />
                Ready to Order
              </Badge>
              
              <div className="space-y-6">
                <h2 className="text-heading" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Innovative Blend
                  <span className="text-gradient-accent block">Solutions</span>
                </h2>
                
                <p className="text-body-lg text-muted-foreground leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Ready to enhance your products with innovative blended yarns? Our blend specialists 
                  provide expert consultation on fiber combinations, performance optimization, 
                  and custom blend development for your specific applications.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mt-1">
                    <Mail className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Blend Consultation</h3>
                    <p className="text-sm text-muted-foreground">
                      Expert guidance on optimal fiber combinations for your applications
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mt-1">
                    <Package className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Custom Blends</h3>
                    <p className="text-sm text-muted-foreground">
                      Tailored blend development for specific performance requirements
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
                      GOTS, OEKO-TEX, and sustainability certification assistance
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
                  Blend Specialist
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
                  Blended Yarn Ordering
                </h3>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Min Order</h4>
                      <p className="text-sm text-muted-foreground">100-500 kg</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Lead Time</h4>
                      <p className="text-sm text-muted-foreground">14-25 days</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Payment</h4>
                      <p className="text-sm text-muted-foreground">L/C, T/T, CAD</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Custom Blends</h4>
                      <p className="text-sm text-muted-foreground">Available on Request</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold text-primary mb-3">Blend Specialists</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-accent" />
                        <span>blends@globaltextiles.com</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-accent" />
                        <span>+91 22 2876 5666</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold text-primary mb-3">Certifications</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">OEKO-TEX</Badge>
                      <Badge variant="outline" className="text-xs">GOTS</Badge>
                      <Badge variant="outline" className="text-xs">RWS</Badge>
                      <Badge variant="outline" className="text-xs">TENCEL™</Badge>
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