import { motion } from 'framer-motion';
import { SectionWrapper } from '../SectionWrapper';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { Table } from '../ui/table';
import { Tabs } from '../ui/tabs';
import { 
  Package, 
  Settings, 
  Award, 
  Palette, 
  Sparkles, 
  ChevronRight, 
  Download,
  ShoppingCart,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Factory,
  Shirt,
  Home,
  Wrench,
  CircuitBoard,
  Zap,
  Target,
  FileText
} from 'lucide-react';

// Add interface for navigation prop
interface ProductsPageProps {
  onNavigate?: (page: 'home' | 'about' | 'products' | 'sustainability' | 'contact' | 'news' | 'cotton-yarns' | 'wool-yarns' | 'synthetic-yarns' | 'blended-yarns') => void;
}

// Product categories data
const productCategories = [
  {
    id: 'cotton',
    name: 'Cotton Yarns',
    description: 'Premium quality cotton yarns from carefully selected fibers',
    image: 'https://images.unsplash.com/photo-1586864387635-57b89e7a7646?w=800&h=600&fit=crop&crop=entropy',
    features: ['100% Pure Cotton', 'Combed & Carded', 'Ring Spun', 'Organic Options'],
    counts: '10s to 60s',
    applications: ['Fashion', 'Home Textiles', 'Denim'],
    sustainability: 'GOTS Certified',
    detailPage: 'cotton-yarns'
  },
  {
    id: 'wool',
    name: 'Wool Yarns',
    description: 'Luxurious wool yarns for premium textile applications',
    image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=800&h=600&fit=crop&crop=entropy',
    features: ['Merino Wool', 'Worsted & Woolen', 'Blended Options', 'Superwash'],
    counts: '2/28 to 2/60',
    applications: ['Knitwear', 'Suiting', 'Blankets'],
    sustainability: 'RWS Certified',
    detailPage: 'wool-yarns'
  },
  {
    id: 'synthetic',
    name: 'Synthetic Yarns',
    description: 'Advanced synthetic yarns with superior performance',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=entropy',
    features: ['Polyester', 'Nylon', 'Acrylic', 'Technical Fibers'],
    counts: '20D to 600D',
    applications: ['Sportswear', 'Industrial', 'Technical'],
    sustainability: 'Recycled Options',
    detailPage: 'synthetic-yarns'
  },
  {
    id: 'blended',
    name: 'Blended Yarns',
    description: 'Custom blended yarns combining the best of multiple fibers',
    image: 'https://images.unsplash.com/photo-1604719311504-e2ecd0324e0e?w=800&h=600&fit=crop&crop=entropy',
    features: ['Cotton-Poly', 'Wool-Cashmere', 'Linen-Cotton', 'Custom Blends'],
    counts: 'Variable',
    applications: ['Fashion', 'Performance', 'Luxury'],
    sustainability: 'Eco-Friendly Options',
    detailPage: 'blended-yarns'
  }
];

// Specifications data
const specsData = [
  {
    category: 'Cotton Yarns',
    specifications: [
      { yarnType: 'Combed Cotton', count: '20s-40s', twist: '3.8-4.2 TPI', denier: 'N/A', colors: '200+', moq: '500 kg' },
      { yarnType: 'Carded Cotton', count: '10s-30s', twist: '3.5-4.0 TPI', denier: 'N/A', colors: '150+', moq: '300 kg' },
      { yarnType: 'Organic Cotton', count: '20s-50s', twist: '3.8-4.5 TPI', denier: 'N/A', colors: '100+', moq: '1000 kg' },
      { yarnType: 'Recycled Cotton', count: '16s-32s', twist: '3.6-4.1 TPI', denier: 'N/A', colors: '80+', moq: '500 kg' }
    ]
  },
  {
    category: 'Wool Yarns',
    specifications: [
      { yarnType: 'Merino Wool', count: '2/28-2/48', twist: '4.0-4.8 TPI', denier: 'N/A', colors: '120+', moq: '200 kg' },
      { yarnType: 'Lambswool', count: '2/24-2/40', twist: '3.8-4.5 TPI', denier: 'N/A', colors: '90+', moq: '150 kg' },
      { yarnType: 'Wool Blend', count: '2/30-2/50', twist: '4.0-4.6 TPI', denier: 'N/A', colors: '100+', moq: '300 kg' },
      { yarnType: 'Alpaca Wool', count: '2/26-2/44', twist: '3.9-4.4 TPI', denier: 'N/A', colors: '60+', moq: '100 kg' }
    ]
  },
  {
    category: 'Synthetic Yarns',
    specifications: [
      { yarnType: 'Polyester FDY', count: 'N/A', twist: '80-120 TPM', denier: '75D-300D', colors: '500+', moq: '500 kg' },
      { yarnType: 'Polyester DTY', count: 'N/A', twist: '100-180 TPM', denier: '75D-600D', colors: '400+', moq: '300 kg' },
      { yarnType: 'Nylon 6', count: 'N/A', twist: '90-150 TPM', denier: '20D-210D', colors: '200+', moq: '200 kg' },
      { yarnType: 'Acrylic', count: '2/28-2/60', twist: '4.2-5.0 TPI', denier: 'N/A', colors: '300+', moq: '400 kg' }
    ]
  },
  {
    category: 'Blended Yarns',
    specifications: [
      { yarnType: 'Cotton-Polyester', count: '20s-50s', twist: '3.8-4.4 TPI', denier: 'N/A', colors: '250+', moq: '400 kg' },
      { yarnType: 'Wool-Cashmere', count: '2/26-2/48', twist: '4.0-4.6 TPI', denier: 'N/A', colors: '80+', moq: '100 kg' },
      { yarnType: 'Linen-Cotton', count: '20s-40s', twist: '4.0-4.5 TPI', denier: 'N/A', colors: '120+', moq: '300 kg' },
      { yarnType: 'Modal-Cotton', count: '30s-60s', twist: '3.9-4.3 TPI', denier: 'N/A', colors: '180+', moq: '500 kg' }
    ]
  }
];

// Application areas data
const applicationAreas = [
  {
    id: 'fashion',
    name: 'Fashion & Apparel',
    description: 'Premium yarns for clothing, accessories, and fashion textiles',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop&crop=entropy',
    icon: Shirt,
    products: ['T-shirts', 'Dresses', 'Knitwear', 'Denim', 'Activewear'],
    yarns: ['Cotton', 'Wool', 'Synthetic', 'Blended'],
    features: ['Soft Hand Feel', 'Color Fastness', 'Durability', 'Comfort']
  },
  {
    id: 'upholstery',
    name: 'Home & Upholstery',
    description: 'Durable yarns for furniture, curtains, and home textiles',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=entropy',
    icon: Home,
    products: ['Furniture Fabric', 'Curtains', 'Carpets', 'Bedding', 'Cushions'],
    yarns: ['Cotton', 'Wool', 'Synthetic', 'Blended'],
    features: ['Abrasion Resistant', 'Stain Resistant', 'UV Stable', 'Fire Retardant']
  },
  {
    id: 'industrial',
    name: 'Industrial & Technical',
    description: 'High-performance yarns for industrial and technical applications',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop&crop=entropy',
    icon: Wrench,
    products: ['Filter Fabrics', 'Conveyor Belts', 'Geotextiles', 'Ropes', 'Nets'],
    yarns: ['Synthetic', 'Technical Fibers', 'Aramid', 'UHMWPE'],
    features: ['High Strength', 'Chemical Resistant', 'Temperature Stable', 'Anti-Static']
  }
];

// Certifications data
const certifications = [
  {
    name: 'OEKO-TEX Standard 100',
    logo: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop&crop=entropy',
    description: 'Harmful substances tested',
    scope: 'All Products'
  },
  {
    name: 'GOTS Certified',
    logo: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop&crop=entropy',
    description: 'Global Organic Textile Standard',
    scope: 'Organic Cotton'
  },
  {
    name: 'ISO 9001:2015',
    logo: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop&crop=entropy',
    description: 'Quality Management Systems',
    scope: 'All Operations'
  },
  {
    name: 'ISO 14001:2015',
    logo: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop&crop=entropy',
    description: 'Environmental Management',
    scope: 'Manufacturing'
  },
  {
    name: 'GRS Certified',
    logo: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop&crop=entropy',
    description: 'Global Recycled Standard',
    scope: 'Recycled Products'
  },
  {
    name: 'RWS Certified',
    logo: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop&crop=entropy',
    description: 'Responsible Wool Standard',
    scope: 'Wool Products'
  }
];

export function ProductsPage({ onNavigate }: ProductsPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section with Macro Yarn Shot */}
      <SectionWrapper className="min-h-screen section-padding-responsive bg-gradient-mesh relative overflow-hidden flex items-center">
        <div className="container-100 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <Badge variant="secondary" className="w-fit">
              <Package className="w-4 h-4 mr-2" />
              Premium Quality Yarns
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-display" style={{ fontFamily: 'Playfair Display, serif' }}>
                Premium Textile
                <span className="text-gradient-accent block">Solutions</span>
              </h1>
              
              <p className="text-body-lg text-muted-foreground leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Discover our comprehensive range of premium yarns - from pure cotton and luxurious wool 
                to advanced synthetic fibers and custom blends. Each product engineered for excellence 
                and manufactured to the highest international standards.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                View Catalog
                <Download className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Request Samples
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                  400+
                </div>
                <div className="text-sm text-muted-foreground">Product Lines</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                  1000+
                </div>
                <div className="text-sm text-muted-foreground">Color Options</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                  50+
                </div>
                <div className="text-sm text-muted-foreground">Count Ranges</div>
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
                alt="Macro shot of premium yarn cones showing intricate fiber details and texture"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              {/* Floating quality badges */}
              <div className="absolute top-6 right-6">
                <Badge className="bg-white/90 text-primary border-0 mb-3">
                  <Award className="w-3 h-3 mr-1" />
                  Premium Quality
                </Badge>
              </div>
              <div className="absolute bottom-6 left-6">
                <Badge className="bg-accent/90 text-white border-0">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Certified Products
                </Badge>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full animate-float" />
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Product Categories Grid */}
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
              Product Categories
            </Badge>
            <h2 className="text-heading mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Yarn Collections
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Comprehensive range of premium yarns designed for diverse textile applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="rounded-xl border border-black/5 bg-white shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                  <div className="relative h-64">
                    <ImageWithFallback
                      src={category.image}
                      alt={`${category.name} - Premium quality yarn showcase`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {category.name}
                      </h3>
                      <Badge className="bg-white/20 text-white border-white/30">
                        {category.sustainability}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <p className="text-muted-foreground leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {category.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Count Range</h4>
                        <p className="text-muted-foreground">{category.counts}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Applications</h4>
                        <p className="text-muted-foreground">{category.applications.join(', ')}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-primary">Key Features</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.features.map((feature, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button 
                      className="w-full group" 
                      variant="outline"
                      onClick={() => {
                        if (category.detailPage && onNavigate) {
                          onNavigate(category.detailPage as any);
                        }
                      }}
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Specifications Table */}
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
              <FileText className="w-4 h-4 mr-2" />
              Technical Specifications
            </Badge>
            <h2 className="text-heading mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Product Specifications
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Detailed technical specifications for all our yarn categories.
            </p>
          </motion.div>

          <Tabs defaultValue="Cotton Yarns" className="w-full">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {specsData.map((category) => (
                <motion.button
                  key={category.category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-lg border border-black/10 text-sm font-medium hover:bg-accent hover:text-white transition-all duration-300"
                  data-state="inactive"
                >
                  {category.category}
                </motion.button>
              ))}
            </div>

            {specsData.map((category) => (
              <div key={category.category} className="space-y-4">
                <Card className="rounded-xl border border-black/5 bg-white shadow-md overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border bg-muted/50">
                          <th className="text-left p-4 font-semibold">Yarn Type</th>
                          <th className="text-left p-4 font-semibold">Count</th>
                          <th className="text-left p-4 font-semibold">Twist</th>
                          <th className="text-left p-4 font-semibold">Denier</th>
                          <th className="text-left p-4 font-semibold">Colors</th>
                          <th className="text-left p-4 font-semibold">MOQ</th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.specifications.map((spec, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                          >
                            <td className="p-4 font-medium">{spec.yarnType}</td>
                            <td className="p-4 text-muted-foreground">{spec.count}</td>
                            <td className="p-4 text-muted-foreground">{spec.twist}</td>
                            <td className="p-4 text-muted-foreground">{spec.denier}</td>
                            <td className="p-4 text-muted-foreground">{spec.colors}</td>
                            <td className="p-4">
                              <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                                {spec.moq}
                              </Badge>
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>
              </div>
            ))}
          </Tabs>

          <div className="text-center mt-8">
            <Button size="lg" className="group">
              Download Full Catalog
              <Download className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* Application Carousel */}
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
              Applications
            </Badge>
            <h2 className="text-heading mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Industry Applications
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Our yarns serve diverse industries with specialized solutions for every application.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {applicationAreas.map((application, index) => (
              <motion.div
                key={application.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="rounded-xl border border-black/5 bg-white shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden h-full">
                  <div className="relative h-48">
                    <ImageWithFallback
                      src={application.image}
                      alt={`${application.name} application showcase`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                          <application.icon className="w-4 h-4 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                          {application.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <p className="text-muted-foreground leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {application.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-semibold text-primary mb-2">Products</h4>
                        <div className="flex flex-wrap gap-1">
                          {application.products.map((product, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {product}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-primary mb-2">Suitable Yarns</h4>
                        <div className="flex flex-wrap gap-1">
                          {application.yarns.map((yarn, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {yarn}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-primary mb-2">Key Features</h4>
                        <div className="space-y-1">
                          {application.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 text-accent" />
                              <span className="text-xs text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Special Orders Section */}
      <SectionWrapper className="section-padding-responsive bg-gradient-to-br from-accent-50 via-white to-primary-50">
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
                Custom Solutions
              </Badge>
              
              <div className="space-y-6">
                <h2 className="text-heading" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Special Orders &
                  <span className="text-gradient-accent block">Custom Blends</span>
                </h2>
                
                <p className="text-body-lg text-muted-foreground leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Beyond our standard range, we specialize in creating custom yarn solutions 
                  tailored to your specific requirements. From unique fiber blends to custom 
                  colors and specialized properties.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mt-1">
                    <Palette className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Custom Colors</h3>
                    <p className="text-sm text-muted-foreground">
                      Match any Pantone color or create unique shades with our advanced dyeing capabilities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mt-1">
                    <Settings className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Fiber Blending</h3>
                    <p className="text-sm text-muted-foreground">
                      Combine different fibers to achieve specific performance characteristics and properties.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mt-1">
                    <Zap className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Special Properties</h3>
                    <p className="text-sm text-muted-foreground">
                      Add functional properties like antimicrobial, flame retardant, or moisture-wicking features.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  Request Custom Quote
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  <FileText className="w-4 h-4 mr-2" />
                  Custom Spec Sheet
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4 h-[500px]">
                <div className="space-y-4">
                  <div className="relative h-3/5 rounded-2xl overflow-hidden shadow-xl">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=600&fit=crop&crop=entropy"
                      alt="Custom color matching and yarn dyeing process"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-white/90 text-primary border-0">
                      Color Matching
                    </Badge>
                  </div>
                  <div className="relative h-2/5 rounded-2xl overflow-hidden shadow-xl">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1604719312566-3dcd3d5d8032?w=400&h=300&fit=crop&crop=entropy"
                      alt="Fiber blending and custom yarn creation"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative h-2/5 rounded-2xl overflow-hidden shadow-xl">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1567696044516-fc0c1a8e41b8?w=400&h=300&fit=crop&crop=entropy"
                      alt="Quality testing and yarn analysis"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative h-3/5 rounded-2xl overflow-hidden shadow-xl">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1604719311504-e2ecd0324e0e?w=400&h=600&fit=crop&crop=entropy"
                      alt="Custom yarn samples and testing"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <Badge className="absolute bottom-4 left-4 bg-accent/90 text-white border-0">
                      Custom Blends
                    </Badge>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Certifications Strip */}
      <SectionWrapper className="section-padding-responsive bg-white border-t border-border">
        <div className="container-100">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge variant="secondary" className="mb-4">
              <Award className="w-4 h-4 mr-2" />
              Quality Certifications
            </Badge>
            <h2 className="text-heading mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Industry Certifications
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Our products meet the highest international standards for quality, safety, and sustainability.
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
                className="group"
              >
                <Card className="p-6 rounded-xl border border-black/5 bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
                  <div className="relative w-16 h-16 mx-auto mb-4 rounded-lg overflow-hidden bg-muted-100">
                    <ImageWithFallback
                      src={cert.logo}
                      alt={`${cert.name} certification logo`}
                      className="absolute inset-0 w-full h-full object-contain p-2"
                    />
                  </div>
                  <h3 className="font-semibold text-sm mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {cert.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2">
                    {cert.description}
                  </p>
                  <Badge variant="outline" className="text-xs">
                    {cert.scope}
                  </Badge>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground mb-6">
              All certifications are regularly audited and maintained to ensure compliance
            </p>
            <Button variant="outline" size="lg">
              <FileText className="w-4 h-4 mr-2" />
              View All Certificates
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </motion.div>
  );
}