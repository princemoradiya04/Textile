import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { Input } from '../ui/input';
import { 
  Download, 
  Search, 
  FileText, 
  File, 
  Image, 
  Video, 
  Archive,
  Shield,
  Award,
  BookOpen,
  Settings,
  Truck,
  Users,
  Globe,
  Factory,
  Palette,
  Beaker,
  Zap,
  Eye,
  Calendar,
  Filter,
  Grid,
  List,
  ExternalLink,
  ChevronDown,
  Star,
  Clock
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useState } from 'react';

interface DownloadItem {
  id: string;
  title: string;
  description: string;
  category: string;
  fileType: string;
  fileSize: string;
  lastUpdated: string;
  downloadCount: number;
  featured: boolean;
  tags: string[];
  thumbnail?: string;
  version?: string;
}

const downloadCategories = [
  { id: 'all', name: 'All Downloads', icon: <Grid className="w-4 h-4" />, count: 47 },
  { id: 'catalogs', name: 'Product Catalogs', icon: <BookOpen className="w-4 h-4" />, count: 12 },
  { id: 'technical', name: 'Technical Data', icon: <Settings className="w-4 h-4" />, count: 15 },
  { id: 'certifications', name: 'Certificates', icon: <Shield className="w-4 h-4" />, count: 8 },
  { id: 'sustainability', name: 'Sustainability', icon: <Globe className="w-4 h-4" />, count: 6 },
  { id: 'installation', name: 'Installation Guides', icon: <Factory className="w-4 h-4" />, count: 4 },
  { id: 'multimedia', name: 'Media Assets', icon: <Image className="w-4 h-4" />, count: 2 }
];

const downloads: DownloadItem[] = [
  // Product Catalogs
  {
    id: '1',
    title: 'Complete Product Catalog 2025',
    description: 'Comprehensive catalog featuring all cotton, wool, synthetic, and blended yarn products with detailed specifications.',
    category: 'catalogs',
    fileType: 'PDF',
    fileSize: '24.5 MB',
    lastUpdated: '2025-01-15',
    downloadCount: 2847,
    featured: true,
    tags: ['complete', 'products', '2025', 'specifications'],
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=entropy',
    version: '2025.1'
  },
  {
    id: '2',
    title: 'Cotton Yarns Catalog',
    description: 'Detailed catalog of premium cotton yarn products including specifications, applications, and technical data.',
    category: 'catalogs',
    fileType: 'PDF',
    fileSize: '8.2 MB',
    lastUpdated: '2024-12-20',
    downloadCount: 1654,
    featured: true,
    tags: ['cotton', 'specifications', 'applications'],
    thumbnail: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop&crop=entropy'
  },
  {
    id: '3',
    title: 'Wool & Synthetic Fibers Guide',
    description: 'Comprehensive guide covering wool and synthetic fiber products with performance characteristics.',
    category: 'catalogs',
    fileType: 'PDF',
    fileSize: '12.1 MB',
    lastUpdated: '2024-12-18',
    downloadCount: 1432,
    featured: false,
    tags: ['wool', 'synthetic', 'performance', 'characteristics'],
    thumbnail: 'https://images.unsplash.com/photo-1612198537895-0f4ac2e8a93b?w=300&h=200&fit=crop&crop=entropy'
  },
  {
    id: '4',
    title: 'Custom Solutions Portfolio',
    description: 'Showcase of custom textile solutions and specialized yarn development capabilities.',
    category: 'catalogs',
    fileType: 'PDF',
    fileSize: '15.3 MB',
    lastUpdated: '2024-11-30',
    downloadCount: 967,
    featured: false,
    tags: ['custom', 'solutions', 'development', 'specialized'],
    thumbnail: 'https://images.unsplash.com/photo-1567696044516-fc0c1a8e41b8?w=300&h=200&fit=crop&crop=entropy'
  },

  // Technical Data
  {
    id: '5',
    title: 'Technical Specifications Sheet',
    description: 'Detailed technical specifications for all yarn products including strength, elongation, and quality parameters.',
    category: 'technical',
    fileType: 'PDF',
    fileSize: '3.7 MB',
    lastUpdated: '2025-01-10',
    downloadCount: 3210,
    featured: true,
    tags: ['technical', 'specifications', 'quality', 'parameters'],
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop&crop=entropy'
  },
  {
    id: '6',
    title: 'Fiber Testing Procedures',
    description: 'Comprehensive documentation of fiber testing methodologies and quality control procedures.',
    category: 'technical',
    fileType: 'PDF',
    fileSize: '5.9 MB',
    lastUpdated: '2024-12-15',
    downloadCount: 1876,
    featured: false,
    tags: ['testing', 'procedures', 'quality control', 'methodologies']
  },
  {
    id: '7',
    title: 'Color Matching Guide',
    description: 'Professional guide for color matching and consistency across different yarn batches.',
    category: 'technical',
    fileType: 'PDF',
    fileSize: '7.4 MB',
    lastUpdated: '2024-12-01',
    downloadCount: 1245,
    featured: false,
    tags: ['color', 'matching', 'consistency', 'batches'],
    thumbnail: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop&crop=entropy'
  },
  {
    id: '8',
    title: 'Care Instructions Manual',
    description: 'Complete care and maintenance instructions for different types of textile products.',
    category: 'technical',
    fileType: 'PDF',
    fileSize: '2.8 MB',
    lastUpdated: '2024-11-25',
    downloadCount: 2134,
    featured: false,
    tags: ['care', 'instructions', 'maintenance', 'textile']
  },

  // Certifications
  {
    id: '9',
    title: 'OEKO-TEX Standard 100 Certificate',
    description: 'Official OEKO-TEX Standard 100 certification for harmful substance testing.',
    category: 'certifications',
    fileType: 'PDF',
    fileSize: '1.2 MB',
    lastUpdated: '2024-06-01',
    downloadCount: 987,
    featured: true,
    tags: ['OEKO-TEX', 'certification', 'safety', 'testing']
  },
  {
    id: '10',
    title: 'GOTS Certification',
    description: 'Global Organic Textile Standard certification for organic textile production.',
    category: 'certifications',
    fileType: 'PDF',
    fileSize: '1.5 MB',
    lastUpdated: '2024-08-15',
    downloadCount: 756,
    featured: false,
    tags: ['GOTS', 'organic', 'textile', 'standard']
  },
  {
    id: '11',
    title: 'ISO 9001:2015 Certificate',
    description: 'International Organization for Standardization quality management certification.',
    category: 'certifications',
    fileType: 'PDF',
    fileSize: '0.9 MB',
    lastUpdated: '2024-03-20',
    downloadCount: 654,
    featured: false,
    tags: ['ISO', 'quality', 'management', 'certification']
  },
  {
    id: '12',
    title: 'GRS Certificate',
    description: 'Global Recycled Standard certification for recycled content verification.',
    category: 'certifications',
    fileType: 'PDF',
    fileSize: '1.1 MB',
    lastUpdated: '2024-06-30',
    downloadCount: 543,
    featured: false,
    tags: ['GRS', 'recycled', 'standard', 'verification']
  },

  // Sustainability
  {
    id: '13',
    title: 'Sustainability Report 2024',
    description: 'Annual sustainability report detailing environmental impact and social responsibility initiatives.',
    category: 'sustainability',
    fileType: 'PDF',
    fileSize: '18.7 MB',
    lastUpdated: '2024-12-31',
    downloadCount: 1876,
    featured: true,
    tags: ['sustainability', 'environmental', 'social', 'responsibility'],
    thumbnail: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop&crop=entropy'
  },
  {
    id: '14',
    title: 'Carbon Footprint Assessment',
    description: 'Detailed assessment of carbon footprint across our manufacturing processes.',
    category: 'sustainability',
    fileType: 'PDF',
    fileSize: '4.3 MB',
    lastUpdated: '2024-11-15',
    downloadCount: 789,
    featured: false,
    tags: ['carbon', 'footprint', 'assessment', 'manufacturing']
  },
  {
    id: '15',
    title: 'Water Conservation Practices',
    description: 'Documentation of water conservation methods and sustainable practices in textile production.',
    category: 'sustainability',
    fileType: 'PDF',
    fileSize: '6.2 MB',
    lastUpdated: '2024-10-20',
    downloadCount: 612,
    featured: false,
    tags: ['water', 'conservation', 'sustainable', 'practices']
  },

  // Installation Guides
  {
    id: '16',
    title: 'Machinery Setup Guide',
    description: 'Step-by-step guide for setting up textile machinery for optimal yarn processing.',
    category: 'installation',
    fileType: 'PDF',
    fileSize: '9.8 MB',
    lastUpdated: '2024-09-10',
    downloadCount: 456,
    featured: false,
    tags: ['machinery', 'setup', 'processing', 'optimization']
  },
  {
    id: '17',
    title: 'Quality Control Installation',
    description: 'Installation and calibration guide for quality control equipment.',
    category: 'installation',
    fileType: 'PDF',
    fileSize: '5.5 MB',
    lastUpdated: '2024-08-25',
    downloadCount: 334,
    featured: false,
    tags: ['quality control', 'installation', 'calibration', 'equipment']
  },

  // Media Assets
  {
    id: '18',
    title: 'Product Photography Pack',
    description: 'High-resolution product images for marketing and promotional use.',
    category: 'multimedia',
    fileType: 'ZIP',
    fileSize: '156.3 MB',
    lastUpdated: '2024-12-05',
    downloadCount: 234,
    featured: false,
    tags: ['photography', 'marketing', 'promotional', 'high-resolution'],
    thumbnail: 'https://images.unsplash.com/photo-1604719311504-e2ecd0324e0e?w=300&h=200&fit=crop&crop=entropy'
  },
  {
    id: '19',
    title: 'Company Logo Package',
    description: 'Official company logos in various formats and sizes for business use.',
    category: 'multimedia',
    fileType: 'ZIP',
    fileSize: '12.4 MB',
    lastUpdated: '2024-11-01',
    downloadCount: 567,
    featured: false,
    tags: ['logo', 'branding', 'business', 'formats']
  }
];

const getFileIcon = (fileType: string) => {
  switch (fileType.toLowerCase()) {
    case 'pdf':
      return <FileText className="w-5 h-5 text-red-500" />;
    case 'zip':
    case 'rar':
      return <Archive className="w-5 h-5 text-purple-500" />;
    case 'jpg':
    case 'jpeg':
    case 'png':
      return <Image className="w-5 h-5 text-blue-500" />;
    case 'mp4':
    case 'avi':
      return <Video className="w-5 h-5 text-green-500" />;
    default:
      return <File className="w-5 h-5 text-gray-500" />;
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
};

const formatDownloadCount = (count: number) => {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }
  return count.toString();
};

export function DownloadCenterPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'newest' | 'popular' | 'name'>('newest');

  const filteredDownloads = downloads
    .filter(item => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch = searchQuery === '' || 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.downloadCount - a.downloadCount;
        case 'name':
          return a.title.localeCompare(b.title);
        case 'newest':
        default:
          return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
      }
    });

  const featuredDownloads = downloads.filter(item => item.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section-padding-responsive bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 relative overflow-hidden">
        <div className="container-100">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center">
                <Download className="w-8 h-8 text-accent-foreground" />
              </div>
            </div>
            <h1 className="mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Download Center
            </h1>
            <p className="text-body-lg text-muted-foreground mb-8 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Access our comprehensive library of technical documentation, product catalogs, 
              certifications, and resources. Everything you need for successful textile projects.
            </p>
            
            {/* Search Bar */}
            <motion.div 
              className="max-w-md mx-auto relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search downloads..."
                className="pl-10 h-12 rounded-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Downloads */}
      {featuredDownloads.length > 0 && (
        <section className="section-padding-responsive">
          <div className="container-100">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-2 mb-6">
                <Star className="w-5 h-5 text-accent" />
                <h2 className="text-heading" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Featured Downloads
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredDownloads.slice(0, 3).map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer">
                      {item.thumbnail && (
                        <div className="aspect-video relative overflow-hidden rounded-t-lg">
                          <ImageWithFallback
                            src={item.thumbnail}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-accent text-accent-foreground">
                              Featured
                            </Badge>
                          </div>
                        </div>
                      )}
                      
                      <CardHeader>
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <CardTitle className="text-lg group-hover:text-accent transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
                              {item.title}
                            </CardTitle>
                            <CardDescription className="mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                              {item.description}
                            </CardDescription>
                          </div>
                          <div className="flex-shrink-0">
                            {getFileIcon(item.fileType)}
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {formatDate(item.lastUpdated)}
                          </span>
                          <span>{item.fileSize}</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">
                            {formatDownloadCount(item.downloadCount)} downloads
                          </span>
                          <Button size="sm" className="group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                            <Download className="w-3 h-3 mr-1" />
                            Download
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="section-padding-responsive bg-muted/30">
        <div className="container-100">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Categories */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Categories
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {downloadCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-accent text-accent-foreground'
                            : 'hover:bg-muted'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {category.icon}
                          <span className="text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                            {category.name}
                          </span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {category.count}
                        </Badge>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Main Content Area */}
            <div className="lg:col-span-3">
              {/* Controls */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6"
              >
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {filteredDownloads.length} downloads found
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as 'newest' | 'popular' | 'name')}
                    className="px-3 py-2 rounded-lg border border-border bg-background text-sm"
                  >
                    <option value="newest">Newest First</option>
                    <option value="popular">Most Downloaded</option>
                    <option value="name">Name A-Z</option>
                  </select>
                  
                  <div className="flex items-center rounded-lg border border-border p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded ${viewMode === 'grid' ? 'bg-accent text-accent-foreground' : ''}`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded ${viewMode === 'list' ? 'bg-accent text-accent-foreground' : ''}`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Downloads Grid/List */}
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredDownloads.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer">
                        <CardHeader>
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                {getFileIcon(item.fileType)}
                                <Badge variant="outline" className="text-xs">
                                  {item.fileType}
                                </Badge>
                                {item.version && (
                                  <Badge variant="secondary" className="text-xs">
                                    v{item.version}
                                  </Badge>
                                )}
                              </div>
                              <CardTitle className="text-base group-hover:text-accent transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
                                {item.title}
                              </CardTitle>
                              <CardDescription className="mt-1 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                                {item.description}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        
                        <CardContent>
                          <div className="flex flex-wrap gap-1 mb-4">
                            {item.tags.slice(0, 3).map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                            <span>{formatDate(item.lastUpdated)}</span>
                            <span>{item.fileSize}</span>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">
                              {formatDownloadCount(item.downloadCount)} downloads
                            </span>
                            <Button size="sm" className="group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                              <Download className="w-3 h-3 mr-1" />
                              Download
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredDownloads.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.02 }}
                      viewport={{ once: true }}
                    >
                      <Card className="hover:shadow-lg transition-all duration-300 group cursor-pointer">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-4 flex-1">
                              <div className="flex-shrink-0">
                                {getFileIcon(item.fileType)}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <h3 className="font-semibold group-hover:text-accent transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                                    {item.title}
                                  </h3>
                                  <Badge variant="outline" className="text-xs">
                                    {item.fileType}
                                  </Badge>
                                  {item.featured && (
                                    <Badge className="text-xs bg-accent text-accent-foreground">
                                      Featured
                                    </Badge>
                                  )}
                                </div>
                                <p className="text-sm text-muted-foreground mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                                  {item.description}
                                </p>
                                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                  <span>{formatDate(item.lastUpdated)}</span>
                                  <span>{item.fileSize}</span>
                                  <span>{formatDownloadCount(item.downloadCount)} downloads</span>
                                </div>
                              </div>
                            </div>
                            <Button size="sm" className="group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                              <Download className="w-3 h-3 mr-1" />
                              Download
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              )}

              {filteredDownloads.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    No downloads found
                  </h3>
                  <p className="text-muted-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Try adjusting your search or category filter.
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="section-padding-responsive">
        <div className="container-100">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Need Help Finding Something?
            </h2>
            <p className="text-muted-foreground mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
              Can't find the document you're looking for? Our technical support team 
              is here to help you access the resources you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Users className="w-4 h-4 mr-2" />
                Contact Support
              </Button>
              <Button variant="outline">
                <ExternalLink className="w-4 h-4 mr-2" />
                Request Document
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}