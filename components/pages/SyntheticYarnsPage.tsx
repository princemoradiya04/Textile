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
  Activity
} from 'lucide-react';
import { useState } from 'react';

// Add interface for navigation prop
interface SyntheticYarnsPageProps {
  onNavigate?: (page: 'home' | 'about' | 'products' | 'sustainability' | 'contact' | 'news' | 'cotton-yarns' | 'wool-yarns' | 'synthetic-yarns' | 'blended-yarns') => void;
}

// Synthetic yarn product data
const syntheticYarnProducts = [
  {
    id: 'polyester-fdy',
    name: 'Polyester FDY Yarn',
    description: 'Fully Drawn Yarn (FDY) with excellent strength, durability, and color retention. Ideal for high-performance textiles and industrial applications.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=entropy',
    deniers: ['75D', '100D', '150D', '200D', '300D'],
    filaments: ['24F', '36F', '48F', '72F', '144F'],
    twist: '80-120 TPM',
    strength: 'Very High',
    colors: '500+',
    moq: '500 kg',
    price: '$1.80 - $2.40 per kg',
    leadTime: '10-14 days',
    applications: ['Sportswear', 'Automotive Textiles', 'Home Furnishing', 'Industrial Fabrics'],
    features: ['High Strength', 'Chemical Resistant', 'UV Stable', 'Quick Dry', 'Easy Care'],
    certifications: ['OEKO-TEX Standard 100', 'ISO 9001', 'GRS'],
    sustainability: 'Recycled PET available',
    isPopular: true,
    yarnType: 'Continuous Filament'
  },
  {
    id: 'polyester-dty',
    name: 'Polyester DTY Yarn',
    description: 'Draw Textured Yarn with enhanced bulk and elasticity. Perfect for knitted fabrics, activewear, and comfort applications.',
    image: 'https://images.unsplash.com/photo-1604719311504-e2ecd0324e0e?w=800&h=600&fit=crop&crop=entropy',
    deniers: ['75D', '100D', '150D', '300D', '600D'],
    filaments: ['24F', '36F', '48F', '72F', '144F'],
    twist: '100-180 TPM',
    strength: 'High',
    colors: '400+',
    moq: '300 kg',
    price: '$1.90 - $2.60 per kg',
    leadTime: '12-16 days',
    applications: ['Knitted Fabrics', 'Activewear', 'Casual Wear', 'Upholstery'],
    features: ['High Elasticity', 'Soft Hand Feel', 'Good Dyeability', 'Moisture Wicking', 'Wrinkle Resistant'],
    certifications: ['OEKO-TEX Standard 100', 'ISO 9001'],
    sustainability: 'Bio-based options available',
    textureType: 'Air Jet Textured',
    yarnType: 'Textured Filament'
  },
  {
    id: 'nylon-6',
    name: 'Nylon 6 Yarn',
    description: 'Premium nylon 6 yarn offering exceptional strength, abrasion resistance, and elasticity. Ideal for demanding applications.',
    image: 'https://images.unsplash.com/photo-1567696044516-fc0c1a8e41b8?w=800&h=600&fit=crop&crop=entropy',
    deniers: ['20D', '40D', '70D', '100D', '210D'],
    filaments: ['7F', '13F', '24F', '34F', '68F'],
    twist: '90-150 TPM',
    strength: 'Excellent',
    colors: '200+',
    moq: '200 kg',
    price: '$3.20 - $4.80 per kg',
    leadTime: '14-18 days',
    applications: ['Hosiery', 'Lingerie', 'Swimwear', 'Technical Textiles'],
    features: ['Superior Strength', 'Excellent Elasticity', 'Abrasion Resistant', 'Chemical Resistant', 'Heat Resistant'],
    certifications: ['OEKO-TEX Standard 100', 'ISO 9001', 'REACH'],
    sustainability: 'Recyclable nylon available',
    isLuxury: true,
    yarnType: 'Continuous Filament'
  },
  {
    id: 'acrylic',
    name: 'Acrylic Yarn',
    description: 'Soft and lightweight acrylic yarn with wool-like properties. Excellent for knitwear, blankets, and comfort applications.',
    image: 'https://images.unsplash.com/photo-1578924608972-6c7a2b8c38e1?w=800&h=600&fit=crop&crop=entropy',
    counts: ['2/28', '2/32', '2/40', '2/48', '2/60'],
    twist: '4.2-5.0 TPI',
    strength: 'Medium-High',
    colors: '300+',
    moq: '400 kg',
    price: '$2.10 - $2.80 per kg',
    leadTime: '12-15 days',
    applications: ['Knitwear', 'Blankets', 'Carpets', 'Outdoor Textiles'],
    features: ['Wool-like Feel', 'Lightweight', 'Machine Washable', 'Moth Resistant', 'UV Resistant'],
    certifications: ['OEKO-TEX Standard 100', 'ISO 9001'],
    sustainability: 'Solution dyed options available',
    isEco: true,
    yarnType: 'Staple Fiber'
  },
  {
    id: 'polypropylene',
    name: 'Polypropylene Yarn',
    description: 'Lightweight, chemical-resistant polypropylene yarn for technical and industrial applications. Excellent moisture management.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop&crop=entropy',
    deniers: ['150D', '300D', '600D', '900D', '1200D'],
    filaments: ['48F', '72F', '144F', '192F'],
    twist: '70-120 TPM',
    strength: 'High',
    colors: '150+',
    moq: '500 kg',
    price: '$1.60 - $2.20 per kg',
    leadTime: '10-12 days',
    applications: ['Geotextiles', 'Automotive', 'Marine Textiles', 'Industrial Filters'],
    features: ['Chemical Resistant', 'Moisture Resistant', 'Lightweight', 'Float on Water', 'Low Thermal Conductivity'],
    certifications: ['ISO 9001', 'Technical Standards'],
    sustainability: '100% recyclable',
    isTechnical: true,
    yarnType: 'Continuous Filament'
  }
];

// Technical specifications for synthetic yarns
const technicalSpecs = {
  fiber: {
    type: 'Synthetic Polymer Fibers',
    meltingPoint: '250-265°C (Polyester)',
    density: '1.38-1.4 g/cm³',
    moisture: '0.2-0.4% regain',
    chemicalResistance: 'Excellent',
    uvStability: 'Good to Excellent'
  },
  yarn: {
    system: 'Melt Spinning',
    direction: 'Z-Twist/S-Twist',
    evenness: 'CV% ≤ 1.5',
    imperfections: 'Minimal',
    hairiness: 'Very Low'
  },
  physical: {
    tensileStrength: '35-55 cN/tex',
    elongation: '15-35%',
    elasticRecovery: '95-98%',
    abrasionResistance: 'Excellent',
    thermalStability: 'Good'
  },
  performance: {
    moistureWicking: 'Excellent',
    quickDry: 'Superior',
    colorFastness: 'Excellent',
    pillingResistance: 'Good to Excellent',
    dimensionalStability: 'Excellent'
  }
};

// Manufacturing process for synthetic yarns
const manufacturingSteps = [
  {
    step: 1,
    title: 'Polymer Preparation',
    description: 'Preparation and purification of synthetic polymers with precise molecular weight control for optimal yarn properties.',
    icon: Atom,
    duration: '4-6 hours'
  },
  {
    step: 2,
    title: 'Melt Spinning',
    description: 'High-temperature melt extrusion through precision spinnerets to form continuous filaments with controlled diameter.',
    icon: Flame,
    duration: 'Continuous'
  },
  {
    step: 3,
    title: 'Cooling & Solidification',
    description: 'Controlled cooling of extruded filaments using precision air flow systems to achieve desired crystallinity.',
    icon: Snowflake,
    duration: '30-60 seconds'
  },
  {
    step: 4,
    title: 'Drawing & Orientation',
    description: 'Mechanical drawing process to orient polymer chains and achieve target strength and elongation properties.',
    icon: Wind,
    duration: '2-5 minutes'
  },
  {
    step: 5,
    title: 'Texturing (DTY)',
    description: 'Air jet texturing or false twist texturing to introduce crimp and bulk for enhanced fabric properties.',
    icon: Activity,
    duration: '1-3 minutes'
  },
  {
    step: 6,
    title: 'Quality Control',
    description: 'Comprehensive testing for denier, strength, elongation, and uniformity using advanced yarn testing equipment.',
    icon: Shield,
    duration: '30 minutes'
  }
];

// Color categories for synthetic yarns
const colorCategories = [
  {
    name: 'Standard Colors',
    count: 50,
    colors: ['White', 'Black', 'Navy', 'Royal Blue', 'Red', 'Green'],
    description: 'Basic color range for standard applications'
  },
  {
    name: 'Fashion Colors',
    count: 120,
    colors: ['Coral', 'Mint', 'Lavender', 'Peach', 'Turquoise', 'Magenta'],
    description: 'Contemporary fashion colors for apparel'
  },
  {
    name: 'Performance Colors',
    count: 80,
    colors: ['Neon Green', 'Safety Orange', 'Reflective Silver', 'Electric Blue'],
    description: 'High-visibility and performance colors'
  },
  {
    name: 'Technical Colors',
    count: 60,
    colors: ['Camouflage', 'Military Green', 'Industrial Gray', 'Safety Yellow'],
    description: 'Specialized colors for technical applications'
  },
  {
    name: 'Automotive Colors',
    count: 40,
    colors: ['Charcoal', 'Titanium', 'Deep Blue', 'Burgundy', 'Tan', 'Silver'],
    description: 'Automotive interior and exterior colors'
  },
  {
    name: 'Solution Dyed',
    count: 150,
    colors: ['All Standard Colors Available'],
    description: 'Fade-resistant solution dyed options'
  }
];

// Applications data for synthetic yarns
const applications = [
  {
    category: 'Performance Apparel',
    icon: Activity,
    products: [
      { name: 'Activewear', description: 'Moisture-wicking sports clothing', yarns: ['Polyester DTY', 'Nylon 6'] },
      { name: 'Swimwear', description: 'Chlorine-resistant swimwear fabrics', yarns: ['Nylon 6', 'Polyester FDY'] },
      { name: 'Outdoor Gear', description: 'Weather-resistant outdoor clothing', yarns: ['Polyester FDY', 'Polypropylene'] },
      { name: 'Athleisure', description: 'Comfortable performance casual wear', yarns: ['Polyester DTY'] },
      { name: 'Base Layers', description: 'Thermal and moisture management', yarns: ['Polypropylene', 'Polyester DTY'] },
      { name: 'Compression Wear', description: 'Medical and athletic compression', yarns: ['Nylon 6'] }
    ]
  },
  {
    category: 'Home & Furnishing',
    icon: Home,
    products: [
      { name: 'Upholstery', description: 'Durable furniture fabrics', yarns: ['Polyester FDY', 'Acrylic'] },
      { name: 'Curtains & Drapes', description: 'Light control and privacy fabrics', yarns: ['Polyester FDY'] },
      { name: 'Carpets & Rugs', description: 'High-traffic floor coverings', yarns: ['Nylon 6', 'Polypropylene'] },
      { name: 'Bedding', description: 'Easy-care bedding fabrics', yarns: ['Polyester DTY'] },
      { name: 'Outdoor Furniture', description: 'Weather-resistant outdoor fabrics', yarns: ['Acrylic', 'Polypropylene'] },
      { name: 'Awnings', description: 'UV-resistant shade structures', yarns: ['Acrylic'] }
    ]
  },
  {
    category: 'Industrial & Technical',
    icon: Target,
    products: [
      { name: 'Automotive Textiles', description: 'Interior and exterior automotive fabrics', yarns: ['Polyester FDY', 'Nylon 6'] },
      { name: 'Geotextiles', description: 'Soil stabilization and drainage', yarns: ['Polypropylene'] },
      { name: 'Filtration Media', description: 'Air and liquid filtration systems', yarns: ['Polyester FDY', 'Polypropylene'] },
      { name: 'Safety Textiles', description: 'Protective and safety equipment', yarns: ['Nylon 6', 'Polyester FDY'] },
      { name: 'Marine Textiles', description: 'Boat covers and marine applications', yarns: ['Acrylic', 'Polypropylene'] },
      { name: 'Conveyor Belts', description: 'Industrial conveying systems', yarns: ['Polyester FDY', 'Nylon 6'] }
    ]
  }
];

// Certifications and compliance for synthetic yarns
const certifications = [
  {
    name: 'OEKO-TEX Standard 100',
    description: 'Ensures synthetic yarns are free from harmful substances',
    validity: '1 year',
    scope: 'All synthetic yarn products'
  },
  {
    name: 'Global Recycled Standard (GRS)',
    description: 'Certification for recycled synthetic fiber content',
    validity: '3 years',
    scope: 'Recycled polyester and nylon products'
  },
  {
    name: 'REACH Compliance',
    description: 'European regulation for chemical safety',
    validity: 'Ongoing',
    scope: 'All synthetic polymers and additives'
  },
  {
    name: 'ISO 9001:2015',
    description: 'Quality management system certification',
    validity: '3 years',
    scope: 'All manufacturing processes'
  },
  {
    name: 'Cradle to Cradle Certified',
    description: 'Circular economy certification for sustainable products',
    validity: '2 years',
    scope: 'Selected eco-friendly synthetic yarns'
  },
  {
    name: 'ASTM Standards',
    description: 'American Society for Testing and Materials standards',
    validity: 'Ongoing',
    scope: 'Technical and performance specifications'
  }
];

// Care instructions for synthetic yarns
const careInstructions = [
  {
    category: 'Washing',
    icon: Droplets,
    instructions: [
      'Machine wash in warm water (40°C max)',
      'Use mild detergent without fabric softener',
      'Separate colors to prevent dye transfer',
      'Avoid bleach or harsh chemicals'
    ]
  },
  {
    category: 'Drying',
    icon: Sun,
    instructions: [
      'Tumble dry on low heat setting',
      'Remove promptly to prevent wrinkles',
      'Air dry for best longevity',
      'Avoid high heat to prevent melting'
    ]
  },
  {
    category: 'Maintenance',
    icon: Settings,
    instructions: [
      'Iron on low to medium heat',
      'Use pressing cloth for delicate fibers',
      'Remove static with anti-static spray',
      'Store in dry, ventilated areas'
    ]
  }
];

export function SyntheticYarnsPage({ onNavigate }: SyntheticYarnsPageProps) {
  const [selectedProduct, setSelectedProduct] = useState(syntheticYarnProducts[0]);
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
            <span className="text-muted-foreground">Synthetic Yarns</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <Badge variant="secondary" className="w-fit">
                <Cpu className="w-4 h-4 mr-2" />
                Advanced Synthetic Yarns
              </Badge>
              
              <div className="space-y-6">
                <h1 className="text-display" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Synthetic Yarn
                  <span className="text-gradient-accent block">Collection</span>
                </h1>
                
                <p className="text-body-lg text-muted-foreground leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  High-performance synthetic yarns engineered for demanding applications. Our range includes 
                  polyester FDY and DTY, premium nylon 6, soft acrylics, and technical polypropylene 
                  yarns for diverse industrial and consumer applications.
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
                    500+
                  </div>
                  <div className="text-sm text-muted-foreground">Color Options</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                    20D-1200D
                  </div>
                  <div className="text-sm text-muted-foreground">Denier Range</div>
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
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop&crop=entropy"
                  alt="High-performance synthetic yarn showcasing modern technology"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Floating quality indicators */}
                <div className="absolute top-6 right-6">
                  <Badge className="bg-white/90 text-primary border-0 mb-3">
                    <Award className="w-3 h-3 mr-1" />
                    GRS Certified
                  </Badge>
                </div>
                <div className="absolute bottom-6 left-6">
                  <Badge className="bg-accent/90 text-white border-0">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    High Performance
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
              Choose Your Synthetic Yarn
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Select from our advanced range of synthetic yarns, each engineered for specific performance requirements and applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
            {syntheticYarnProducts.map((product, index) => (
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
                          Premium
                        </Badge>
                      )}
                      {product.isEco && (
                        <Badge className="bg-green-600 text-white border-0">
                          <Leaf className="w-3 h-3 mr-1" />
                          Eco-Friendly
                        </Badge>
                      )}
                      {product.isTechnical && (
                        <Badge className="bg-blue-600 text-white border-0">
                          <Zap className="w-3 h-3 mr-1" />
                          Technical
                        </Badge>
                      )}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {product.name}
                      </h3>
                      <Badge className="bg-white/20 text-white border-white/30 text-xs">
                        {product.yarnType}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {product.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Range</h4>
                        <p className="text-muted-foreground">
                          {product.deniers ? product.deniers.join(', ') : product.counts?.join(', ')}
                        </p>
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
                      <h4 className="font-semibold text-primary">Range</h4>
                      <p className="text-muted-foreground">
                        {selectedProduct.deniers ? selectedProduct.deniers.join(', ') : selectedProduct.counts?.join(', ')}
                      </p>
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

                  {selectedProduct.filaments && (
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-900 mb-2">Filament Options</h4>
                      <p className="text-sm text-blue-700">
                        Available filaments: {selectedProduct.filaments.join(', ')}
                      </p>
                    </div>
                  )}

                  {selectedProduct.textureType && (
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-900 mb-2">Texture Type</h4>
                      <p className="text-sm text-green-700">{selectedProduct.textureType}</p>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="specifications" className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="p-6">
                      <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                        <Atom className="w-4 h-4" />
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
                      <Flame className="w-5 h-5" />
                      Important Care Tips
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-amber-800">
                      <div className="space-y-2">
                        <p>• Avoid fabric softeners (reduces moisture-wicking)</p>
                        <p>• Low heat ironing to prevent melting</p>
                        <p>• Anti-static treatment may be needed</p>
                      </div>
                      <div className="space-y-2">
                        <p>• Check care labels for specific requirements</p>
                        <p>• Use color-safe detergents</p>
                        <p>• Store away from heat sources</p>
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
              From Polymer to Yarn
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Our state-of-the-art synthetic yarn production combines advanced polymer science with precision manufacturing technology.
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
                <Zap className="w-4 h-4 mr-2" />
                Ready to Order
              </Badge>
              
              <div className="space-y-6">
                <h2 className="text-heading" style={{ fontFamily: 'Playfair Display, serif' }}>
                  High-Performance
                  <span className="text-gradient-accent block">Synthetic Solutions</span>
                </h2>
                
                <p className="text-body-lg text-muted-foreground leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Ready to enhance your products with high-performance synthetic yarns? Our technical specialists 
                  provide expert guidance on polymer selection, performance optimization, 
                  and application-specific solutions.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mt-1">
                    <Mail className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Technical Consultation</h3>
                    <p className="text-sm text-muted-foreground">
                      Expert guidance on synthetic yarn selection for performance applications
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mt-1">
                    <Package className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Sample Testing</h3>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive testing samples for performance validation
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
                      OEKO-TEX, GRS, and REACH compliance assistance
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
                  Technical Support
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
                  Synthetic Yarn Ordering
                </h3>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Min Order</h4>
                      <p className="text-sm text-muted-foreground">200-500 kg</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Lead Time</h4>
                      <p className="text-sm text-muted-foreground">10-18 days</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Payment</h4>
                      <p className="text-sm text-muted-foreground">L/C, T/T, CAD</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Shipping</h4>
                      <p className="text-sm text-muted-foreground">Global Logistics</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold text-primary mb-3">Technical Team</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-accent" />
                        <span>synthetic@globaltextiles.com</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-accent" />
                        <span>+91 22 2876 5555</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold text-primary mb-3">Certifications</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">OEKO-TEX</Badge>
                      <Badge variant="outline" className="text-xs">GRS</Badge>
                      <Badge variant="outline" className="text-xs">REACH</Badge>
                      <Badge variant="outline" className="text-xs">ASTM</Badge>
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