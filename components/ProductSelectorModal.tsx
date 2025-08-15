import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  X, 
  ArrowRight,
  Zap,
  Leaf,
  Award,
  Factory,
  Thermometer,
  Droplets,
  Shield,
  Sparkles,
  CheckCircle,
  Info,
  TrendingUp,
  Globe,
  Users,
  Star,
  Target,
  Clock,
  Gauge,
  Palette,
  Wind,
  Mountain,
  ExternalLink,
  Download,
  Phone,
  Mail,
  ChevronDown,
  ChevronUp,
  GitCompare
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onQuoteRequest?: () => void;
}

// Product categories data with comprehensive details
const productCategories = [
  {
    id: 'cotton',
    name: 'Cotton Yarns',
    shortDesc: 'Natural comfort and breathability',
    description: 'Premium cotton yarns offering exceptional softness, breathability, and natural comfort for everyday wear.',
    icon: Leaf,
    color: 'bg-green-50 text-green-700 border-green-200',
    accentColor: 'text-green-600',
    gradientFrom: 'from-green-50',
    gradientTo: 'to-green-100',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&h=400&fit=crop&crop=entropy',
    specifications: [
      { label: 'Fiber Content', value: '100% Cotton' },
      { label: 'Count Range', value: 'Ne 10s - Ne 60s' },
      { label: 'Twist Factor', value: '3.8 - 4.2' },
      { label: 'Strength', value: '1200-1800 cN/tex' },
      { label: 'Elongation', value: '5-8%' },
      { label: 'Evenness (CV%)', value: '<12%' }
    ],
    features: [
      { icon: Droplets, text: 'Moisture Absorbent', desc: 'Excellent moisture wicking properties' },
      { icon: Wind, text: 'Breathable', desc: 'Natural ventilation for comfort' },
      { icon: Leaf, text: 'Biodegradable', desc: 'Environmentally friendly disposal' },
      { icon: Shield, text: 'Hypoallergenic', desc: 'Gentle on sensitive skin' }
    ],
    applications: [
      'T-shirts & Casual Wear',
      'Bed Linens & Towels',
      'Denim & Workwear',
      'Baby & Children\'s Clothing',
      'Home Textiles',
      'Medical Textiles'
    ],
    sustainability: {
      waterUsage: '40% less water than conventional',
      energyEfficiency: '25% energy reduction',
      certifications: ['GOTS', 'BCI', 'Organic Cotton']
    },
    priceRange: '$2.20 - $4.80/kg',
    minimumOrder: '500 kg',
    leadTime: '2-3 weeks',
    availability: 'Year-round',
    qualityRating: 4.8
  },
  {
    id: 'wool',
    name: 'Wool Yarns',
    shortDesc: 'Luxurious warmth and elegance',
    description: 'High-quality wool yarns providing superior insulation, durability, and natural elasticity for premium textiles.',
    icon: Mountain,
    color: 'bg-amber-50 text-amber-700 border-amber-200',
    accentColor: 'text-amber-600',
    gradientFrom: 'from-amber-50',
    gradientTo: 'to-amber-100',
    image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=600&h=400&fit=crop&crop=entropy',
    specifications: [
      { label: 'Fiber Content', value: 'Pure Wool / Wool Blends' },
      { label: 'Micron Range', value: '18-24 microns' },
      { label: 'Count Range', value: 'Nm 28 - Nm 120' },
      { label: 'Twist Factor', value: '4.0 - 4.5' },
      { label: 'Tensile Strength', value: '180-250 cN/tex' },
      { label: 'Crimp Recovery', value: '>95%' }
    ],
    features: [
      { icon: Thermometer, text: 'Temperature Regulating', desc: 'Natural climate control properties' },
      { icon: Shield, text: 'Fire Resistant', desc: 'Inherent flame retardant properties' },
      { icon: Sparkles, text: 'Odor Resistant', desc: 'Natural antimicrobial properties' },
      { icon: Gauge, text: 'Elastic Recovery', desc: 'Excellent shape retention' }
    ],
    applications: [
      'Suits & Formal Wear',
      'Sweaters & Knitwear',
      'Coats & Outerwear',
      'Luxury Bedding',
      'Carpets & Rugs',
      'Technical Textiles'
    ],
    sustainability: {
      waterUsage: '30% less processing water',
      energyEfficiency: '20% energy reduction',
      certifications: ['RWS', 'Woolmark', 'Cradle to Cradle']
    },
    priceRange: '$8.50 - $18.00/kg',
    minimumOrder: '250 kg',
    leadTime: '3-4 weeks',
    availability: 'Seasonal variations',
    qualityRating: 4.9
  },
  {
    id: 'synthetic',
    name: 'Synthetic Yarns',
    shortDesc: 'Advanced performance and durability',
    description: 'Cutting-edge synthetic yarns engineered for superior performance, durability, and specialized applications.',
    icon: Zap,
    color: 'bg-blue-50 text-blue-700 border-blue-200',
    accentColor: 'text-blue-600',
    gradientFrom: 'from-blue-50',
    gradientTo: 'to-blue-100',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&crop=entropy',
    specifications: [
      { label: 'Fiber Types', value: 'Polyester, Nylon, Acrylic' },
      { label: 'Denier Range', value: '75D - 600D' },
      { label: 'Tenacity', value: '4.5-7.0 g/denier' },
      { label: 'Elongation', value: '15-30%' },
      { label: 'Shrinkage', value: '<3%' },
      { label: 'Color Fastness', value: 'Grade 4-5' }
    ],
    features: [
      { icon: Zap, text: 'High Performance', desc: 'Superior strength and durability' },
      { icon: Droplets, text: 'Quick Dry', desc: 'Fast moisture wicking technology' },
      { icon: Palette, text: 'Colorfast', desc: 'Excellent color retention' },
      { icon: Shield, text: 'Chemical Resistant', desc: 'Resistant to chemicals and UV' }
    ],
    applications: [
      'Sportswear & Activewear',
      'Outdoor & Performance Gear',
      'Industrial Textiles',
      'Automotive Textiles',
      'Medical Applications',
      'Technical Fabrics'
    ],
    sustainability: {
      waterUsage: '60% less water in production',
      energyEfficiency: '35% energy reduction',
      certifications: ['GRS', 'OEKO-TEX', 'Cradle to Cradle']
    },
    priceRange: '$1.80 - $6.20/kg',
    minimumOrder: '1000 kg',
    leadTime: '2-3 weeks',
    availability: 'Continuous supply',
    qualityRating: 4.7
  },
  {
    id: 'blended',
    name: 'Blended Yarns',
    shortDesc: 'Perfect fusion of natural and synthetic',
    description: 'Innovative blended yarns combining the best properties of natural and synthetic fibers for optimal performance.',
    icon: Award,
    color: 'bg-purple-50 text-purple-700 border-purple-200',
    accentColor: 'text-purple-600',
    gradientFrom: 'from-purple-50',
    gradientTo: 'to-purple-100',
    image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop&crop=entropy',
    specifications: [
      { label: 'Blend Ratios', value: 'Custom ratios available' },
      { label: 'Common Blends', value: 'Cotton/Poly, Wool/Acrylic' },
      { label: 'Count Range', value: 'Ne 20s - Ne 80s' },
      { label: 'Twist Factor', value: '3.9 - 4.3' },
      { label: 'Strength', value: '1400-2200 cN/tex' },
      { label: 'Uniformity', value: '<10% CV' }
    ],
    features: [
      { icon: Award, text: 'Best of Both', desc: 'Combined benefits of different fibers' },
      { icon: Gauge, text: 'Balanced Properties', desc: 'Optimized performance characteristics' },
      { icon: Target, text: 'Customizable', desc: 'Tailored blend ratios for specific needs' },
      { icon: TrendingUp, text: 'Cost Effective', desc: 'Optimal price-performance ratio' }
    ],
    applications: [
      'Workwear & Uniforms',
      'Casual & Smart Casual Wear',
      'Home Textiles',
      'Hospitality Linens',
      'Children\'s Clothing',
      'Specialty Applications'
    ],
    sustainability: {
      waterUsage: '45% less water consumption',
      energyEfficiency: '30% energy reduction',
      certifications: ['OEKO-TEX', 'GRS', 'BCI']
    },
    priceRange: '$2.50 - $7.80/kg',
    minimumOrder: '500 kg',
    leadTime: '2-4 weeks',
    availability: 'Year-round',
    qualityRating: 4.6
  }
];

// Comparison matrix for all products
const comparisonMatrix = [
  {
    property: 'Comfort Level',
    cotton: 'Excellent',
    wool: 'Superior',
    synthetic: 'Good',
    blended: 'Very Good'
  },
  {
    property: 'Durability',
    cotton: 'Good',
    wool: 'Very Good',
    synthetic: 'Excellent',
    blended: 'Very Good'
  },
  {
    property: 'Moisture Management',
    cotton: 'Excellent',
    wool: 'Very Good',
    synthetic: 'Superior',
    blended: 'Very Good'
  },
  {
    property: 'Temperature Regulation',
    cotton: 'Good',
    wool: 'Excellent',
    synthetic: 'Fair',
    blended: 'Very Good'
  },
  {
    property: 'Care Requirements',
    cotton: 'Easy',
    wool: 'Moderate',
    synthetic: 'Very Easy',
    blended: 'Easy'
  },
  {
    property: 'Price Point',
    cotton: 'Medium',
    wool: 'High',
    synthetic: 'Low',
    blended: 'Medium'
  },
  {
    property: 'Sustainability',
    cotton: 'Good',
    wool: 'Very Good',
    synthetic: 'Improving',
    blended: 'Good'
  },
  {
    property: 'Color Fastness',
    cotton: 'Good',
    wool: 'Very Good',
    synthetic: 'Excellent',
    blended: 'Very Good'
  }
];

export function ProductSelectorModal({ isOpen, onClose, onQuoteRequest }: ProductSelectorModalProps) {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [comparisonMode, setComparisonMode] = useState(false);
  const [selectedComparisons, setSelectedComparisons] = useState<string[]>([]);
  const [expandedCapability, setExpandedCapability] = useState<number | null>(null);

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

  const handleProductSelect = (productId: string) => {
    setSelectedProduct(productId);
    setSelectedTab('details');
  };

  const handleComparisonToggle = (productId: string) => {
    setSelectedComparisons(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      } else if (prev.length < 3) {
        return [...prev, productId];
      }
      return prev;
    });
  };

  const navigateToProductPage = (productId: string) => {
    onClose();
    // This would be handled by the parent component or router
    const pageMap: { [key: string]: string } = {
      cotton: '/products/cotton-yarns',
      wool: '/products/wool-yarns',
      synthetic: '/products/synthetic-yarns',
      blended: '/products/blended-yarns'
    };
    window.location.href = pageMap[productId] || '/products';
  };

  if (!isOpen) return null;

  const selectedProductData = selectedProduct ? productCategories.find(p => p.id === selectedProduct) : null;

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
        className="relative w-full max-w-7xl max-h-[90vh] mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-800 rounded-xl flex items-center justify-center">
              <Factory className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold" style={{ fontFamily: 'Playfair Display, serif' }}>
                Product Selector
              </h2>
              <p className="text-sm text-muted-foreground">
                Explore our premium yarn collections
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setComparisonMode(!comparisonMode)}
              className={`gap-2 ${comparisonMode ? 'bg-accent text-accent-foreground' : ''}`}
            >
              <GitCompare className="w-4 h-4" />
              Compare
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
              <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="comparison">Compare</TabsTrigger>
                <TabsTrigger value="specifications">Specs</TabsTrigger>
              </TabsList>
            </div>

            <div className="p-6">
              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Choose Your Perfect Yarn
                  </h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Discover our comprehensive range of premium yarns, each engineered to meet specific performance 
                    requirements and application needs. From natural comfort to synthetic durability.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {productCategories.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 group">
                        <div className="aspect-video relative">
                          <ImageWithFallback
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          
                          {/* Comparison Checkbox */}
                          {comparisonMode && (
                            <div className="absolute top-4 right-4">
                              <Button
                                variant={selectedComparisons.includes(product.id) ? "default" : "outline"}
                                size="sm"
                                className="w-8 h-8 p-0 bg-white/20 backdrop-blur-sm border-white/30"
                                onClick={() => handleComparisonToggle(product.id)}
                                disabled={selectedComparisons.length >= 3 && !selectedComparisons.includes(product.id)}
                              >
                                {selectedComparisons.includes(product.id) ? (
                                  <CheckCircle className="w-4 h-4" />
                                ) : (
                                  <span className="text-xs font-bold">{selectedComparisons.length + 1}</span>
                                )}
                              </Button>
                            </div>
                          )}
                          
                          <div className="absolute bottom-4 left-4">
                            <div className={`w-10 h-10 ${product.color} rounded-lg flex items-center justify-center backdrop-blur-sm`}>
                              <product.icon className="w-5 h-5" />
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="font-semibold mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                                {product.name}
                              </h4>
                              <p className="text-sm text-muted-foreground">{product.shortDesc}</p>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-sm font-medium">{product.qualityRating}</span>
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                            {product.description}
                          </p>
                          
                          {/* Key Features */}
                          <div className="grid grid-cols-2 gap-2 mb-4">
                            {product.features.slice(0, 2).map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <feature.icon className="w-3 h-3 text-accent" />
                                <span className="text-xs text-muted-foreground">{feature.text}</span>
                              </div>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="text-sm">
                              <span className="text-accent font-semibold">{product.priceRange}</span>
                              <span className="text-muted-foreground ml-1">per kg</span>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              className="gap-2 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300"
                              onClick={() => handleProductSelect(product.id)}
                            >
                              <span>Learn More</span>
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </Button>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              {/* Product Details Tab */}
              <TabsContent value="details" className="space-y-6">
                {selectedProductData ? (
                  <div className="space-y-8">
                    {/* Product Header */}
                    <div className="flex items-start gap-6">
                      <div className="relative w-32 h-32 rounded-xl overflow-hidden">
                        <ImageWithFallback
                          src={selectedProductData.image}
                          alt={selectedProductData.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-semibold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                              {selectedProductData.name}
                            </h3>
                            <p className="text-muted-foreground mb-3">{selectedProductData.description}</p>
                            <div className="flex items-center gap-4">
                              <Badge className={selectedProductData.color}>
                                <selectedProductData.icon className="w-3 h-3 mr-1" />
                                Premium Quality
                              </Badge>
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <span className="font-medium">{selectedProductData.qualityRating}</span>
                                <span className="text-muted-foreground text-sm">(4.2k reviews)</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-2xl font-semibold text-accent mb-1">
                              {selectedProductData.priceRange}
                            </div>
                            <div className="text-sm text-muted-foreground mb-2">per kg</div>
                            <div className="text-sm">
                              <div>MOQ: {selectedProductData.minimumOrder}</div>
                              <div>Lead time: {selectedProductData.leadTime}</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex gap-3">
                          <Button 
                            onClick={() => navigateToProductPage(selectedProductData.id)}
                            className="gap-2"
                          >
                            <ExternalLink className="w-4 h-4" />
                            View Full Details
                          </Button>
                          <Button 
                            variant="outline"
                            onClick={onQuoteRequest}
                            className="gap-2"
                          >
                            <Phone className="w-4 h-4" />
                            Get Quote
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Features Grid */}
                    <div>
                      <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedProductData.features.map((feature, index) => (
                          <Card key={index} className="p-4">
                            <div className="flex items-start gap-3">
                              <div className={`w-10 h-10 ${selectedProductData.color} rounded-lg flex items-center justify-center`}>
                                <feature.icon className="w-5 h-5" />
                              </div>
                              <div>
                                <h5 className="font-medium mb-1">{feature.text}</h5>
                                <p className="text-sm text-muted-foreground">{feature.desc}</p>
                              </div>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>

                    {/* Applications */}
                    <div>
                      <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Applications
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {selectedProductData.applications.map((app, index) => (
                          <div key={index} className="flex items-center gap-2 p-3 bg-muted/30 rounded-lg">
                            <CheckCircle className="w-4 h-4 text-accent" />
                            <span className="text-sm">{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Sustainability */}
                    <Card className={`p-6 bg-gradient-to-r ${selectedProductData.gradientFrom} ${selectedProductData.gradientTo}`}>
                      <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Sustainability Impact
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <Droplets className={`w-8 h-8 ${selectedProductData.accentColor} mx-auto mb-2`} />
                          <div className="font-semibold">{selectedProductData.sustainability.waterUsage}</div>
                          <div className="text-sm text-muted-foreground">Water Usage</div>
                        </div>
                        <div className="text-center">
                          <Zap className={`w-8 h-8 ${selectedProductData.accentColor} mx-auto mb-2`} />
                          <div className="font-semibold">{selectedProductData.sustainability.energyEfficiency}</div>
                          <div className="text-sm text-muted-foreground">Energy Efficiency</div>
                        </div>
                        <div className="text-center">
                          <Award className={`w-8 h-8 ${selectedProductData.accentColor} mx-auto mb-2`} />
                          <div className="font-semibold">{selectedProductData.sustainability.certifications.length}+ Certs</div>
                          <div className="text-sm text-muted-foreground">Certifications</div>
                        </div>
                      </div>
                    </Card>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Factory className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h4 className="text-lg font-semibold mb-2">Select a Product</h4>
                    <p className="text-muted-foreground mb-6">
                      Choose a product from the overview section to view detailed specifications and features.
                    </p>
                    <Button onClick={() => setSelectedTab('overview')}>
                      Browse Products
                    </Button>
                  </div>
                )}
              </TabsContent>

              {/* Comparison Tab */}
              <TabsContent value="comparison" className="space-y-6">
                {selectedComparisons.length >= 2 ? (
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Product Comparison
                      </h3>
                      <p className="text-muted-foreground">
                        Compare key characteristics across selected products
                      </p>
                    </div>

                    {/* Comparison Matrix */}
                    <Card className="overflow-hidden">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-border bg-muted/30">
                              <th className="text-left p-4 font-medium">Property</th>
                              {selectedComparisons.map(id => {
                                const product = productCategories.find(p => p.id === id);
                                return (
                                  <th key={id} className="text-center p-4 font-medium min-w-32">
                                    <div className="flex items-center justify-center gap-2">
                                      {product && <product.icon className="w-4 h-4" />}
                                      {product?.name.split(' ')[0]}
                                    </div>
                                  </th>
                                );
                              })}
                            </tr>
                          </thead>
                          <tbody>
                            {comparisonMatrix.map((row, index) => (
                              <tr key={index} className="border-b border-border hover:bg-muted/20">
                                <td className="p-4 font-medium">{row.property}</td>
                                {selectedComparisons.map(id => (
                                  <td key={id} className="p-4 text-center">
                                    <span className={`px-2 py-1 rounded-full text-sm ${
                                      row[id as keyof typeof row] === 'Excellent' || row[id as keyof typeof row] === 'Superior'
                                        ? 'bg-green-100 text-green-700'
                                        : row[id as keyof typeof row] === 'Very Good' || row[id as keyof typeof row] === 'High'
                                        ? 'bg-blue-100 text-blue-700'
                                        : row[id as keyof typeof row] === 'Good' || row[id as keyof typeof row] === 'Medium'
                                        ? 'bg-yellow-100 text-yellow-700'
                                        : 'bg-gray-100 text-gray-700'
                                    }`}>
                                      {row[id as keyof typeof row]}
                                    </span>
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </Card>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <GitCompare className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h4 className="text-lg font-semibold mb-2">Select Products to Compare</h4>
                    <p className="text-muted-foreground mb-6">
                      Choose at least 2 products from the overview section to start comparing their features and specifications.
                    </p>
                    <Button onClick={() => {setSelectedTab('overview'); setComparisonMode(true);}}>
                      Select Products
                    </Button>
                  </div>
                )}
              </TabsContent>

              {/* Specifications Tab */}
              <TabsContent value="specifications" className="space-y-6">
                {selectedProductData ? (
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Technical Specifications
                      </h3>
                      <p className="text-muted-foreground">
                        Detailed technical data for {selectedProductData.name}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {selectedProductData.specifications.map((spec, index) => (
                        <Card key={index} className="p-4">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{spec.label}</span>
                            <span className="text-accent font-semibold">{spec.value}</span>
                          </div>
                        </Card>
                      ))}
                    </div>

                    {/* Download Technical Sheet */}
                    <Card className="p-6 text-center bg-gradient-to-r from-muted/30 to-muted/10">
                      <h4 className="font-semibold mb-2">Need More Details?</h4>
                      <p className="text-muted-foreground mb-4">
                        Download our comprehensive technical data sheet with complete specifications, 
                        test methods, and quality standards.
                      </p>
                      <div className="flex justify-center gap-3">
                        <Button variant="outline" className="gap-2">
                          <Download className="w-4 h-4" />
                          Technical Sheet (PDF)
                        </Button>
                        <Button onClick={onQuoteRequest} className="gap-2">
                          <Mail className="w-4 h-4" />
                          Request Custom Specs
                        </Button>
                      </div>
                    </Card>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Info className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h4 className="text-lg font-semibold mb-2">Select a Product</h4>
                    <p className="text-muted-foreground mb-6">
                      Choose a product to view its detailed technical specifications and data sheets.
                    </p>
                    <Button onClick={() => setSelectedTab('overview')}>
                      Browse Products
                    </Button>
                  </div>
                )}
              </TabsContent>
            </div>
          </Tabs>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-border bg-muted/20">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">+1 (555) 789-0123</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">products@globaltextiles.com</span>
            </div>
          </div>
          
          <div className="flex gap-3">
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="w-4 h-4" />
              Product Catalog
            </Button>
            {onQuoteRequest && (
              <Button onClick={onQuoteRequest} className="gap-2">
                <ArrowRight className="w-4 h-4" />
                Request Quote
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}