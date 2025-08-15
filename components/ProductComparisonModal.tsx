import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  X, 
  Download, 
  Mail, 
  FileText, 
  Package, 
  Star, 
  CheckCircle,
  AlertCircle,
  Minus,
  Plus,
  ExternalLink,
  Heart,
  Share2,
  ArrowRight,
  BarChart3,
  Zap,
  Shield,
  Leaf,
  Award,
  Info,
  Calculator,
  ShoppingCart
} from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProducts: string[];
  onRemoveProduct: (productId: string) => void;
  onRequestSample: (productIds: string[]) => void;
  onRequestQuote: (productIds: string[]) => void;
}

// Extended product data for comparison
const detailedProducts = {
  'cotton': {
    id: 'cotton',
    name: 'Premium Cotton Yarns',
    category: 'Cotton',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    description: 'Premium organic and conventional cotton yarns for luxury apparel',
    rating: 4.9,
    certifications: ['GOTS', 'OEKO-TEX', 'BCI'],
    sustainability: 95,
    availability: 'In Stock',
    leadTime: '2-3 weeks',
    minOrder: '500 kg',
    priceRange: '$8.50 - $12.00',
    specifications: {
      'Fiber Content': '100% Cotton',
      'Count Range': 'Ne 10-60',
      'Twist': 'S & Z Twist',
      'Strength': 'High Tenacity',
      'Elongation': '6-8%',
      'Moisture Regain': '8.5%',
      'Micronaire': '3.5-4.9',
      'Staple Length': '28-35mm',
      'Color Fastness': 'Grade 4-5',
      'Shrinkage': '<3%'
    },
    applications: ['Apparel', 'Home Textiles', 'Medical', 'Baby Products'],
    advantages: [
      'Breathable and comfortable',
      'Hypoallergenic properties',
      'Excellent dye absorption',
      'Biodegradable and sustainable'
    ],
    technicalSheet: '/pdfs/cotton-yarns-technical.pdf',
    sampleAvailable: true,
    colors: ['Natural White', 'Optical White', 'Raw White', 'Colored'],
    packaging: ['Cone', 'Cheese', 'Hank', 'Beam'],
    qualityGrade: 'Premium'
  },
  'wool': {
    id: 'wool',
    name: 'Luxury Wool Yarns',
    category: 'Wool',
    image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&w=800&q=80',
    description: 'Luxury wool and wool blend yarns from finest sources',
    rating: 4.8,
    certifications: ['RWS', 'OEKO-TEX', 'Woolmark'],
    sustainability: 88,
    availability: 'Limited Stock',
    leadTime: '4-6 weeks',
    minOrder: '200 kg',
    priceRange: '$18.00 - $35.00',
    specifications: {
      'Fiber Content': '100% Wool / Blends',
      'Count Range': 'Nm 28-48',
      'Micron': '18-24 microns',
      'Treatment': 'Superwash Available',
      'Staple Length': '65-85mm',
      'Crimp': '12-16 crimps/inch',
      'Tensile Strength': '120-160 MPa',
      'Elasticity': 'Excellent',
      'Thermal Properties': 'Superior Insulation',
      'Flame Resistance': 'Natural'
    },
    applications: ['Luxury Apparel', 'Outerwear', 'Accessories', 'Interior Textiles'],
    advantages: [
      'Superior thermal regulation',
      'Natural flame resistance',
      'Excellent elasticity and recovery',
      'Luxurious hand feel'
    ],
    technicalSheet: '/pdfs/wool-yarns-technical.pdf',
    sampleAvailable: true,
    colors: ['Natural', 'Dyed Colors', 'Melange', 'Heathered'],
    packaging: ['Cone', 'Ball', 'Skein', 'Hank'],
    qualityGrade: 'Luxury'
  },
  'synthetic': {
    id: 'synthetic',
    name: 'High-Performance Synthetics',
    category: 'Synthetic',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    description: 'Advanced synthetic yarns with technical performance properties',
    rating: 4.7,
    certifications: ['OEKO-TEX', 'ISO 9001', 'REACH'],
    sustainability: 72,
    availability: 'In Stock',
    leadTime: '1-2 weeks',
    minOrder: '1000 kg',
    priceRange: '$4.50 - $8.00',
    specifications: {
      'Fiber Content': 'Polyester/Nylon/Acrylic',
      'Denier': '150-300D',
      'Filament': 'Continuous/Staple',
      'Features': 'Technical Properties',
      'Tenacity': '4.5-7.0 g/den',
      'Moisture Management': 'Excellent',
      'UV Protection': 'UPF 50+',
      'Anti-bacterial': 'Available',
      'Thermal Properties': 'Quick Dry',
      'Abrasion Resistance': 'Superior'
    },
    applications: ['Sportswear', 'Technical Textiles', 'Outdoor Gear', 'Industrial'],
    advantages: [
      'Superior durability and strength',
      'Moisture-wicking properties',
      'Quick-drying capabilities',
      'Excellent color retention'
    ],
    technicalSheet: '/pdfs/synthetic-yarns-technical.pdf',
    sampleAvailable: true,
    colors: ['Solution Dyed', 'Piece Dyed', 'Yarn Dyed', 'Raw White'],
    packaging: ['Cone', 'Bobbin', 'Cheese', 'Beam'],
    qualityGrade: 'Technical'
  },
  'blended': {
    id: 'blended',
    name: 'Innovative Blended Yarns',
    category: 'Blended',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
    description: 'Custom fiber blends combining the best of multiple materials',
    rating: 4.6,
    certifications: ['OEKO-TEX', 'GRS', 'Custom Blends'],
    sustainability: 85,
    availability: 'Made to Order',
    leadTime: '6-8 weeks',
    minOrder: '300 kg',
    priceRange: '$6.00 - $15.00',
    specifications: {
      'Fiber Content': 'Multiple Fiber Blends',
      'Blend Ratio': 'Customizable',
      'Count Range': 'Various',
      'Properties': 'Combined Benefits',
      'Cotton/Poly': '50/50 - 80/20',
      'Wool/Acrylic': '70/30 - 85/15',
      'Performance Features': 'Tailored',
      'Durability': 'Enhanced',
      'Comfort': 'Optimized',
      'Cost Efficiency': 'Balanced'
    },
    applications: ['Fashion Apparel', 'Workwear', 'Home Textiles', 'Accessories'],
    advantages: [
      'Combines best properties of each fiber',
      'Cost-effective solutions',
      'Custom performance characteristics',
      'Versatile applications'
    ],
    technicalSheet: '/pdfs/blended-yarns-technical.pdf',
    sampleAvailable: true,
    colors: ['Custom Colors', 'Standard Range', 'Heathered', 'Melange'],
    packaging: ['Cone', 'Cheese', 'Hank', 'Custom'],
    qualityGrade: 'Versatile'
  }
};

const comparisonCategories = [
  { id: 'overview', label: 'Overview', icon: Info },
  { id: 'specifications', label: 'Technical Specs', icon: BarChart3 },
  { id: 'performance', label: 'Performance', icon: Zap },
  { id: 'sustainability', label: 'Sustainability', icon: Leaf },
  { id: 'pricing', label: 'Pricing & Orders', icon: Calculator }
];

export function ProductComparisonModal({ 
  isOpen, 
  onClose, 
  selectedProducts, 
  onRemoveProduct,
  onRequestSample,
  onRequestQuote 
}: ProductComparisonModalProps) {
  const [activeCategory, setActiveCategory] = useState('overview');
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});

  const products = selectedProducts.map(id => detailedProducts[id as keyof typeof detailedProducts]).filter(Boolean);

  const updateQuantity = (productId: string, quantity: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(0, quantity)
    }));
  };

  const handleSampleRequest = () => {
    onRequestSample(selectedProducts);
  };

  const handleBulkQuote = () => {
    onRequestQuote(selectedProducts);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-7xl max-h-[90vh] bg-background rounded-2xl shadow-2xl overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border/50 bg-gradient-to-r from-primary-50 to-accent-50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h2 className="text-heading text-foreground" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Product Comparison
                  </h2>
                  <p className="text-muted-foreground">
                    Compare {products.length} products side by side
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" className="gap-2">
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="w-4 h-4" />
                  Export
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="rounded-full w-10 h-10 p-0"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 overflow-hidden">
              {/* Sidebar Navigation */}
              <div className="w-64 border-r border-border/50 bg-muted/30 p-4">
                <div className="space-y-2">
                  {comparisonCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                        activeCategory === category.id
                          ? 'bg-accent text-accent-foreground shadow-sm'
                          : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
                      }`}
                    >
                      <category.icon className="w-5 h-5" />
                      <span className="font-medium">{category.label}</span>
                    </button>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="mt-8 space-y-3">
                  <Button
                    onClick={handleSampleRequest}
                    className="w-full gap-2"
                    size="sm"
                  >
                    <Package className="w-4 h-4" />
                    Request Samples
                  </Button>
                  <Button
                    onClick={handleBulkQuote}
                    variant="outline"
                    className="w-full gap-2"
                    size="sm"
                  >
                    <Calculator className="w-4 h-4" />
                    Get Bulk Quote
                  </Button>
                </div>
              </div>

              {/* Main Comparison Area */}
              <div className="flex-1 overflow-auto">
                <div className="p-6">
                  {/* Product Headers */}
                  <div className="grid gap-6 mb-8" style={{ gridTemplateColumns: `300px repeat(${products.length}, 1fr)` }}>
                    <div className="text-sm font-medium text-muted-foreground">
                      Comparing {products.length} Products
                    </div>
                    {products.map((product) => (
                      <Card key={product.id} className="p-4 relative">
                        <button
                          onClick={() => onRemoveProduct(product.id)}
                          className="absolute top-2 right-2 w-6 h-6 rounded-full bg-destructive/10 text-destructive hover:bg-destructive hover:text-destructive-foreground transition-colors flex items-center justify-center"
                        >
                          <X className="w-3 h-3" />
                        </button>

                        <div className="space-y-3">
                          <div className="aspect-square rounded-lg overflow-hidden">
                            <ImageWithFallback
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{product.name}</h3>
                            <p className="text-sm text-muted-foreground">{product.category}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">{product.rating}</span>
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {product.qualityGrade}
                            </Badge>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>

                  {/* Comparison Content */}
                  {activeCategory === 'overview' && (
                    <div className="space-y-6">
                      {/* Basic Information */}
                      {[
                        { label: 'Description', key: 'description' },
                        { label: 'Applications', key: 'applications' },
                        { label: 'Availability', key: 'availability' },
                        { label: 'Lead Time', key: 'leadTime' },
                        { label: 'Minimum Order', key: 'minOrder' }
                      ].map((row) => (
                        <div key={row.key} className="grid gap-6" style={{ gridTemplateColumns: `300px repeat(${products.length}, 1fr)` }}>
                          <div className="flex items-center">
                            <span className="font-medium text-foreground">{row.label}</span>
                          </div>
                          {products.map((product) => (
                            <div key={product.id} className="py-3 px-4 bg-muted/30 rounded-lg">
                              {row.key === 'applications' ? (
                                <div className="flex flex-wrap gap-1">
                                  {product[row.key].slice(0, 3).map((app: string) => (
                                    <Badge key={app} variant="secondary" className="text-xs">
                                      {app}
                                    </Badge>
                                  ))}
                                  {product[row.key].length > 3 && (
                                    <Badge variant="secondary" className="text-xs">
                                      +{product[row.key].length - 3}
                                    </Badge>
                                  )}
                                </div>
                              ) : row.key === 'availability' ? (
                                <div className="flex items-center gap-2">
                                  <div className={`w-2 h-2 rounded-full ${
                                    product.availability === 'In Stock' ? 'bg-green-500' :
                                    product.availability === 'Limited Stock' ? 'bg-yellow-500' :
                                    'bg-red-500'
                                  }`} />
                                  <span className="text-sm">{product[row.key as keyof typeof product]}</span>
                                </div>
                              ) : (
                                <span className="text-sm">{product[row.key as keyof typeof product]}</span>
                              )}
                            </div>
                          ))}
                        </div>
                      ))}

                      {/* Certifications */}
                      <div className="grid gap-6" style={{ gridTemplateColumns: `300px repeat(${products.length}, 1fr)` }}>
                        <div className="flex items-center">
                          <span className="font-medium text-foreground">Certifications</span>
                        </div>
                        {products.map((product) => (
                          <div key={product.id} className="py-3 px-4 bg-muted/30 rounded-lg">
                            <div className="flex flex-wrap gap-1">
                              {product.certifications.map((cert) => (
                                <Badge key={cert} className="text-xs bg-accent/10 text-accent">
                                  <Award className="w-3 h-3 mr-1" />
                                  {cert}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeCategory === 'specifications' && (
                    <div className="space-y-4">
                      {/* Get all unique specification keys */}
                      {Array.from(new Set(products.flatMap(p => Object.keys(p.specifications)))).map((specKey) => (
                        <div key={specKey} className="grid gap-6" style={{ gridTemplateColumns: `300px repeat(${products.length}, 1fr)` }}>
                          <div className="flex items-center">
                            <span className="font-medium text-foreground">{specKey}</span>
                          </div>
                          {products.map((product) => (
                            <div key={product.id} className="py-3 px-4 bg-muted/30 rounded-lg">
                              <span className="text-sm">
                                {product.specifications[specKey] || '—'}
                              </span>
                            </div>
                          ))}
                        </div>
                      ))}

                      {/* Technical Documents */}
                      <div className="grid gap-6 mt-8" style={{ gridTemplateColumns: `300px repeat(${products.length}, 1fr)` }}>
                        <div className="flex items-center">
                          <span className="font-medium text-foreground">Technical Sheets</span>
                        </div>
                        {products.map((product) => (
                          <div key={product.id} className="py-3 px-4 bg-muted/30 rounded-lg">
                            <Button variant="outline" size="sm" className="gap-2">
                              <FileText className="w-4 h-4" />
                              Download PDF
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeCategory === 'performance' && (
                    <div className="space-y-6">
                      {/* Performance Advantages */}
                      <div className="grid gap-6" style={{ gridTemplateColumns: `300px repeat(${products.length}, 1fr)` }}>
                        <div className="flex items-center">
                          <span className="font-medium text-foreground">Key Advantages</span>
                        </div>
                        {products.map((product) => (
                          <div key={product.id} className="py-3 px-4 bg-muted/30 rounded-lg">
                            <div className="space-y-2">
                              {product.advantages.map((advantage, index) => (
                                <div key={index} className="flex items-start gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{advantage}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Performance Rating */}
                      <div className="grid gap-6" style={{ gridTemplateColumns: `300px repeat(${products.length}, 1fr)` }}>
                        <div className="flex items-center">
                          <span className="font-medium text-foreground">Overall Rating</span>
                        </div>
                        {products.map((product) => (
                          <div key={product.id} className="py-3 px-4 bg-muted/30 rounded-lg">
                            <div className="flex items-center gap-3">
                              <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star
                                    key={star}
                                    className={`w-4 h-4 ${
                                      star <= Math.floor(product.rating)
                                        ? 'fill-yellow-400 text-yellow-400'
                                        : 'text-gray-300'
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="font-semibold">{product.rating}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeCategory === 'sustainability' && (
                    <div className="space-y-6">
                      {/* Sustainability Score */}
                      <div className="grid gap-6" style={{ gridTemplateColumns: `300px repeat(${products.length}, 1fr)` }}>
                        <div className="flex items-center">
                          <span className="font-medium text-foreground">Sustainability Score</span>
                        </div>
                        {products.map((product) => (
                          <div key={product.id} className="py-3 px-4 bg-muted/30 rounded-lg">
                            <div className="flex items-center gap-3">
                              <div className="flex-1 bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-green-600 h-2 rounded-full transition-all duration-500"
                                  style={{ width: `${product.sustainability}%` }}
                                />
                              </div>
                              <span className="font-semibold text-green-600">{product.sustainability}%</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Environmental Certifications */}
                      <div className="grid gap-6" style={{ gridTemplateColumns: `300px repeat(${products.length}, 1fr)` }}>
                        <div className="flex items-center">
                          <span className="font-medium text-foreground">Environmental Impact</span>
                        </div>
                        {products.map((product) => (
                          <div key={product.id} className="py-3 px-4 bg-muted/30 rounded-lg">
                            <div className="space-y-3">
                              <div className="flex items-center gap-2">
                                <Leaf className="w-4 h-4 text-green-600" />
                                <span className="text-sm">Eco-friendly production</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Shield className="w-4 h-4 text-blue-600" />
                                <span className="text-sm">Safe chemicals only</span>
                              </div>
                              {product.sustainability > 90 && (
                                <div className="flex items-center gap-2">
                                  <Award className="w-4 h-4 text-yellow-600" />
                                  <span className="text-sm">Carbon neutral</span>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeCategory === 'pricing' && (
                    <div className="space-y-6">
                      {/* Price Range */}
                      <div className="grid gap-6" style={{ gridTemplateColumns: `300px repeat(${products.length}, 1fr)` }}>
                        <div className="flex items-center">
                          <span className="font-medium text-foreground">Price Range (per kg)</span>
                        </div>
                        {products.map((product) => (
                          <div key={product.id} className="py-3 px-4 bg-muted/30 rounded-lg">
                            <div className="space-y-2">
                              <span className="text-lg font-semibold text-accent">
                                {product.priceRange}
                              </span>
                              <p className="text-xs text-muted-foreground">
                                Price varies by quantity and specifications
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Quantity Calculator */}
                      <div className="grid gap-6" style={{ gridTemplateColumns: `300px repeat(${products.length}, 1fr)` }}>
                        <div className="flex items-center">
                          <span className="font-medium text-foreground">Quantity (kg)</span>
                        </div>
                        {products.map((product) => (
                          <div key={product.id} className="py-3 px-4 bg-muted/30 rounded-lg">
                            <div className="space-y-3">
                              <div className="flex items-center gap-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="w-8 h-8 p-0"
                                  onClick={() => updateQuantity(product.id, (quantities[product.id] || 0) - 100)}
                                >
                                  <Minus className="w-4 h-4" />
                                </Button>
                                <Input
                                  type="number"
                                  value={quantities[product.id] || 0}
                                  onChange={(e) => updateQuantity(product.id, parseInt(e.target.value) || 0)}
                                  className="text-center w-20"
                                  min="0"
                                  step="100"
                                />
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="w-8 h-8 p-0"
                                  onClick={() => updateQuantity(product.id, (quantities[product.id] || 0) + 100)}
                                >
                                  <Plus className="w-4 h-4" />
                                </Button>
                              </div>
                              <div className="text-xs text-muted-foreground">
                                Min order: {product.minOrder}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Packaging Options */}
                      <div className="grid gap-6" style={{ gridTemplateColumns: `300px repeat(${products.length}, 1fr)` }}>
                        <div className="flex items-center">
                          <span className="font-medium text-foreground">Packaging</span>
                        </div>
                        {products.map((product) => (
                          <div key={product.id} className="py-3 px-4 bg-muted/30 rounded-lg">
                            <Select 
                              value={selectedVariants[product.id] || product.packaging[0]}
                              onValueChange={(value) => setSelectedVariants(prev => ({
                                ...prev,
                                [product.id]: value
                              }))}
                            >
                              <SelectTrigger className="w-full">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                {product.packaging.map((option) => (
                                  <SelectItem key={option} value={option}>
                                    {option}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="grid gap-6 mt-8" style={{ gridTemplateColumns: `300px repeat(${products.length}, 1fr)` }}>
                        <div className="flex items-center">
                          <span className="font-medium text-foreground">Actions</span>
                        </div>
                        {products.map((product) => (
                          <div key={product.id} className="py-3 px-4 bg-muted/30 rounded-lg">
                            <div className="space-y-2">
                              <Button className="w-full gap-2" size="sm">
                                <ShoppingCart className="w-4 h-4" />
                                Add to Quote
                              </Button>
                              <Button variant="outline" className="w-full gap-2" size="sm">
                                <Heart className="w-4 h-4" />
                                Save to Favorites
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="border-t border-border/50 p-6 bg-muted/30">
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Comparing {products.length} products • Updated pricing as of today
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="outline" onClick={onClose}>
                    Close Comparison
                  </Button>
                  <Button onClick={handleSampleRequest} className="gap-2">
                    <Package className="w-4 h-4" />
                    Request All Samples
                  </Button>
                  <Button onClick={handleBulkQuote} className="gap-2 bg-gradient-to-r from-accent-600 to-accent-700">
                    <Calculator className="w-4 h-4" />
                    Get Bulk Quote
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}