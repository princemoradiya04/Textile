import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  Grid, 
  List, 
  ChevronDown, 
  Star, 
  CheckCircle,
  ArrowRight,
  Book,
  FileText,
  Package,
  Layers,
  Zap,
  Leaf,
  Award,
  Globe,
  Mail,
  Phone,
  ExternalLink,
  Eye,
  ShoppingCart,
  GitCompare,
  Heart
} from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Checkbox } from '../ui/checkbox';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ProductCatalogPageProps {
  onNavigate?: (page: string) => void;
}

const productCategories = [
  {
    id: 'cotton',
    name: 'Cotton Yarns',
    description: 'Premium organic and conventional cotton yarns',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    products: 15,
    route: 'cotton-yarns',
    features: ['Organic Options', 'GOTS Certified', 'Various Counts'],
    specs: {
      'Fiber Content': '100% Cotton',
      'Count Range': 'Ne 10-60',
      'Twist': 'S & Z Twist',
      'Strength': 'High Tenacity'
    }
  },
  {
    id: 'wool',
    name: 'Wool Yarns',
    description: 'Luxury wool and wool blend yarns',
    image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&w=800&q=80',
    products: 12,
    route: 'wool-yarns',
    features: ['Merino Wool', 'Cashmere Blends', 'Sustainable Sourcing'],
    specs: {
      'Fiber Content': '100% Wool / Blends',
      'Count Range': 'Nm 28-48',
      'Micron': '18-24 microns',
      'Treatment': 'Superwash Available'
    }
  },
  {
    id: 'synthetic',
    name: 'Synthetic Yarns',
    description: 'High-performance synthetic and technical yarns',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    products: 18,
    route: 'synthetic-yarns',
    features: ['Moisture Wicking', 'Anti-bacterial', 'UV Protection'],
    specs: {
      'Fiber Content': 'Polyester/Nylon/Acrylic',
      'Denier': '150-300D',
      'Filament': 'Continuous/Staple',
      'Features': 'Technical Properties'
    }
  },
  {
    id: 'blended',
    name: 'Blended Yarns',
    description: 'Innovative fiber combinations for unique properties',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
    products: 14,
    route: 'blended-yarns',
    features: ['Custom Blends', 'Enhanced Properties', 'Performance Fabrics'],
    specs: {
      'Fiber Content': 'Multiple Fiber Blends',
      'Blend Ratio': 'Customizable',
      'Count Range': 'Various',
      'Properties': 'Combined Benefits'
    }
  }
];

const filterOptions = {
  fiberType: ['Cotton', 'Wool', 'Polyester', 'Nylon', 'Acrylic', 'Blends'],
  count: ['Ne 10-20', 'Ne 21-30', 'Ne 31-40', 'Ne 41-50', 'Ne 51-60'],
  features: ['Organic', 'Recycled', 'Anti-bacterial', 'Moisture Wicking', 'UV Protection', 'Flame Retardant'],
  certifications: ['GOTS', 'OEKO-TEX', 'GRS', 'CRADLE2CRADLE', 'BCI'],
  applications: ['Apparel', 'Home Textiles', 'Technical', 'Automotive', 'Medical', 'Industrial']
};

const catalogDownloads = [
  {
    title: 'Complete Product Catalog 2025',
    description: 'Comprehensive overview of all our yarn categories and specifications',
    pages: 156,
    size: '24.5 MB',
    format: 'PDF',
    icon: Book
  },
  {
    title: 'Cotton Yarns Specification Sheet',
    description: 'Detailed technical specifications for our cotton yarn range',
    pages: 32,
    size: '4.2 MB',
    format: 'PDF',
    icon: FileText
  },
  {
    title: 'Sustainability Report 2024',
    description: 'Our commitment to sustainable textile manufacturing',
    pages: 48,
    size: '8.1 MB',
    format: 'PDF',
    icon: Leaf
  },
  {
    title: 'Technical Data Sheets',
    description: 'Individual data sheets for all product categories',
    pages: 28,
    size: '6.8 MB',
    format: 'ZIP',
    icon: Package
  }
];

export function ProductCatalogPage({ onNavigate }: ProductCatalogPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});
  const [sortBy, setSortBy] = useState('name');
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const handleFilterChange = (category: string, value: string, checked: boolean) => {
    setSelectedFilters(prev => ({
      ...prev,
      [category]: checked 
        ? [...(prev[category] || []), value]
        : (prev[category] || []).filter(item => item !== value)
    }));
  };

  const handleProductSelect = (productId: string) => {
    setSelectedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const filteredProducts = productCategories.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-background to-accent-50 section-padding-responsive">
        <div className="container-100">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full border border-accent/20">
                <Book className="w-4 h-4" />
                <span className="text-sm font-medium">Complete Product Catalog</span>
              </div>

              <h1 className="text-display text-foreground" style={{ fontFamily: 'Playfair Display, serif' }}>
                Comprehensive 
                <span className="text-gradient-primary block">Yarn Catalog</span>
              </h1>

              <p className="text-body-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Explore our complete range of premium yarns across four main categories. 
                From organic cotton to technical synthetics, find the perfect materials for your next project.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="gap-2 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-xl"
                >
                  <Download className="w-5 h-5" />
                  Download Full Catalog
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="gap-2 px-8 py-4 rounded-xl"
                  onClick={() => onNavigate?.('contact')}
                >
                  <Mail className="w-5 h-5" />
                  Request Samples
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="section-padding-responsive bg-muted/30">
        <div className="container-100">
          <div className="space-y-6">
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row gap-4"
            >
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search products, specifications, or categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 rounded-xl border-border/50 focus:ring-2 focus:ring-accent"
                />
              </div>
              
              <div className="flex gap-3">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40 h-12 rounded-xl">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Name A-Z</SelectItem>
                    <SelectItem value="products">Product Count</SelectItem>
                    <SelectItem value="category">Category</SelectItem>
                    <SelectItem value="recent">Recently Added</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex border rounded-xl bg-background">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="rounded-r-none"
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="rounded-l-none"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-muted-foreground" />
                <span className="font-medium">Filters</span>
              </div>

              <Tabs defaultValue="fiberType" className="w-full">
                <TabsList className="grid w-full grid-cols-6 bg-muted/50">
                  <TabsTrigger value="fiberType">Fiber Type</TabsTrigger>
                  <TabsTrigger value="count">Count Range</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="certifications">Certifications</TabsTrigger>
                  <TabsTrigger value="applications">Applications</TabsTrigger>
                  <TabsTrigger value="all">All Filters</TabsTrigger>
                </TabsList>

                {Object.entries(filterOptions).map(([category, options]) => (
                  <TabsContent key={category} value={category} className="mt-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                      {options.map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <Checkbox
                            id={`${category}-${option}`}
                            checked={selectedFilters[category]?.includes(option) || false}
                            onCheckedChange={(checked) => 
                              handleFilterChange(category, option, checked as boolean)
                            }
                          />
                          <label
                            htmlFor={`${category}-${option}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                          >
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                ))}

                <TabsContent value="all" className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(filterOptions).map(([category, options]) => (
                      <Card key={category} className="p-4">
                        <h4 className="font-semibold mb-3 capitalize">{category.replace(/([A-Z])/g, ' $1').trim()}</h4>
                        <div className="space-y-2">
                          {options.map((option) => (
                            <div key={option} className="flex items-center space-x-2">
                              <Checkbox
                                id={`all-${category}-${option}`}
                                checked={selectedFilters[category]?.includes(option) || false}
                                onCheckedChange={(checked) => 
                                  handleFilterChange(category, option, checked as boolean)
                                }
                              />
                              <label
                                htmlFor={`all-${category}-${option}`}
                                className="text-sm leading-none cursor-pointer"
                              >
                                {option}
                              </label>
                            </div>
                          ))}
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="section-padding-responsive">
        <div className="container-100">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-heading text-foreground mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Product Categories
              </h2>
              <p className="text-body text-muted-foreground max-w-2xl mx-auto">
                Browse our comprehensive range of yarn categories, each designed for specific applications and performance requirements.
              </p>
            </motion.div>

            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {filteredProducts.map((category, index) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <ImageWithFallback
                          src={category.image}
                          alt={category.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-accent text-accent-foreground">
                            {category.products} Products
                          </Badge>
                        </div>

                        {/* Actions */}
                        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button
                            size="sm"
                            variant="secondary"
                            className="rounded-full w-10 h-10 p-0"
                            onClick={() => handleProductSelect(category.id)}
                          >
                            {selectedProducts.includes(category.id) ? (
                              <CheckCircle className="w-4 h-4" />
                            ) : (
                              <GitCompare className="w-4 h-4" />
                            )}
                          </Button>
                          <Button
                            size="sm"
                            variant="secondary"
                            className="rounded-full w-10 h-10 p-0"
                          >
                            <Heart className="w-4 h-4" />
                          </Button>
                        </div>

                        {/* Category Title Overlay */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-white text-xl font-semibold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                            {category.name}
                          </h3>
                          <p className="text-white/90 text-sm">
                            {category.description}
                          </p>
                        </div>
                      </div>

                      <div className="p-6 space-y-4">
                        {/* Features */}
                        <div className="flex flex-wrap gap-2">
                          {category.features.map((feature) => (
                            <Badge key={feature} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>

                        {/* Key Specifications */}
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm">Key Specifications</h4>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            {Object.entries(category.specs).slice(0, 4).map(([key, value]) => (
                              <div key={key} className="flex justify-between">
                                <span className="text-muted-foreground">{key}:</span>
                                <span className="font-medium">{value}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-3 pt-2">
                          <Button
                            onClick={() => onNavigate?.(category.route)}
                            className="flex-1 gap-2"
                          >
                            <Eye className="w-4 h-4" />
                            View Details
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="gap-2"
                          >
                            <Download className="w-4 h-4" />
                            Specs
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredProducts.map((category, index) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="group hover:shadow-lg transition-all duration-300">
                      <div className="p-6">
                        <div className="flex items-center gap-6">
                          <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                            <ImageWithFallback
                              src={category.image}
                              alt={category.name}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div className="flex-1 space-y-3">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="text-lg font-semibold text-foreground" style={{ fontFamily: 'Playfair Display, serif' }}>
                                  {category.name}
                                </h3>
                                <p className="text-muted-foreground text-sm">
                                  {category.description}
                                </p>
                              </div>
                              <Badge className="bg-accent text-accent-foreground">
                                {category.products} Products
                              </Badge>
                            </div>

                            <div className="flex flex-wrap gap-2">
                              {category.features.map((feature) => (
                                <Badge key={feature} variant="outline" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                            </div>

                            <div className="flex items-center justify-between">
                              <div className="flex gap-2 text-xs text-muted-foreground">
                                {Object.entries(category.specs).slice(0, 2).map(([key, value]) => (
                                  <span key={key}>
                                    {key}: <span className="font-medium">{value}</span>
                                  </span>
                                ))}
                              </div>

                              <div className="flex gap-2">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => handleProductSelect(category.id)}
                                >
                                  {selectedProducts.includes(category.id) ? (
                                    <CheckCircle className="w-4 h-4" />
                                  ) : (
                                    <GitCompare className="w-4 h-4" />
                                  )}
                                </Button>
                                <Button
                                  size="sm"
                                  onClick={() => onNavigate?.(category.route)}
                                  className="gap-2"
                                >
                                  View Details
                                  <ArrowRight className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Comparison Panel */}
            {selectedProducts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
              >
                <Card className="bg-primary text-primary-foreground shadow-2xl">
                  <div className="p-4 flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <GitCompare className="w-5 h-5" />
                      <span className="font-medium">
                        {selectedProducts.length} products selected
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="gap-2"
                      >
                        <Eye className="w-4 h-4" />
                        Compare
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedProducts([])}
                      >
                        Clear
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="section-padding-responsive bg-muted/30">
        <div className="container-100">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-heading text-foreground mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Catalog Downloads
              </h2>
              <p className="text-body text-muted-foreground max-w-2xl mx-auto">
                Access detailed product information, technical specifications, and comprehensive catalogs for offline reference.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {catalogDownloads.map((download, index) => (
                <motion.div
                  key={download.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="p-6 space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                          <download.icon className="w-6 h-6 text-accent" />
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {download.format}
                        </Badge>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                          {download.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {download.description}
                        </p>
                      </div>

                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{download.pages} pages</span>
                        <span>{download.size}</span>
                      </div>

                      <Button className="w-full gap-2 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                        <Download className="w-4 h-4" />
                        Download
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding-responsive bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-100">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-heading text-foreground" style={{ fontFamily: 'Playfair Display, serif' }}>
                Need More Information?
              </h2>
              <p className="text-body text-muted-foreground leading-relaxed">
                Our technical experts are ready to help you find the perfect yarn solution for your specific requirements. 
                Contact us for custom specifications, bulk pricing, or technical support.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Email our Sales Team</p>
                    <p className="text-sm text-muted-foreground">sales@global-textiles.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Call Technical Support</p>
                    <p className="text-sm text-muted-foreground">+1 (555) 789-0123</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Package className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Request Physical Samples</p>
                    <p className="text-sm text-muted-foreground">Free sample service worldwide</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="gap-2"
                  onClick={() => onNavigate?.('contact')}
                >
                  <Mail className="w-5 h-5" />
                  Contact Sales
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="gap-2"
                >
                  <Package className="w-5 h-5" />
                  Request Samples
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Card className="p-4 text-center">
                    <Award className="w-8 h-8 text-accent mx-auto mb-2" />
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </Card>
                  <Card className="p-4 text-center">
                    <Globe className="w-8 h-8 text-accent mx-auto mb-2" />
                    <div className="text-2xl font-bold">35+</div>
                    <div className="text-sm text-muted-foreground">Countries Served</div>
                  </Card>
                </div>
                <div className="space-y-4 pt-8">
                  <Card className="p-4 text-center">
                    <Layers className="w-8 h-8 text-accent mx-auto mb-2" />
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm text-muted-foreground">Product Variants</div>
                  </Card>
                  <Card className="p-4 text-center">
                    <CheckCircle className="w-8 h-8 text-accent mx-auto mb-2" />
                    <div className="text-2xl font-bold">99.5%</div>
                    <div className="text-sm text-muted-foreground">Quality Rate</div>
                  </Card>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}