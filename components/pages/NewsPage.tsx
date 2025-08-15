import { motion } from 'framer-motion';
import { SectionWrapper } from '../SectionWrapper';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { 
  Calendar, 
  User, 
  ArrowRight, 
  BookOpen, 
  Clock, 
  Send,
  Filter,
  Search,
  Mail,
  ChevronRight,
  Newspaper,
  TrendingUp,
  Factory,
  Leaf,
  Globe,
  Award,
  ExternalLink,
  Share2,
  Eye
} from 'lucide-react';
import { useState } from 'react';

interface NewsPageProps {
  onNavigate?: (page: string, context?: {
    linkText?: string;
    section?: string;
    intent?: any;
    articleId?: string;
  }) => void;
}

// Article categories
const articleCategories = [
  { id: 'all', name: 'All Articles', count: 24 },
  { id: 'industry', name: 'Industry News', count: 8 },
  { id: 'sustainability', name: 'Sustainability', count: 6 },
  { id: 'innovation', name: 'Innovation', count: 5 },
  { id: 'company', name: 'Company News', count: 3 },
  { id: 'insights', name: 'Market Insights', count: 2 }
];

// Featured article data
const featuredArticle = {
  id: 'featured-1',
  title: 'The Future of Sustainable Textile Manufacturing: Leading the Industry Transformation',
  excerpt: 'As the textile industry undergoes a revolutionary shift towards sustainability, Global Spinners & Textiles stands at the forefront of innovative manufacturing processes that balance environmental responsibility with premium quality production.',
  image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=600&fit=crop&crop=entropy',
  category: 'sustainability',
  categoryName: 'Sustainability',
  publishDate: '2024-03-15',
  readTime: '8 min read',
  author: 'Dr. Priya Sharma',
  authorRole: 'Chief Sustainability Officer',
  authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b4e10b9e?w=100&h=100&fit=crop&crop=face',
  views: '2.4k',
  shares: 145
};

// Articles data
const articlesData = [
  {
    id: '1',
    title: 'Advanced Fiber Technology Revolutionizes Cotton Production',
    excerpt: 'Our latest investment in ring spinning technology has increased production efficiency by 35% while maintaining superior yarn quality.',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop&crop=entropy',
    category: 'innovation',
    categoryName: 'Innovation',
    publishDate: '2024-03-12',
    readTime: '5 min read',
    author: 'David Chen',
    views: '1.8k'
  },
  {
    id: '2', 
    title: 'Global Expansion: New Manufacturing Hub in Southeast Asia',
    excerpt: 'Strategic expansion continues with the opening of our state-of-the-art facility in Vietnam, serving growing demand across Asia Pacific markets.',
    image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=400&h=300&fit=crop&crop=entropy',
    category: 'company',
    categoryName: 'Company News',
    publishDate: '2024-03-10',
    readTime: '4 min read',
    author: 'Sarah Williams',
    views: '2.1k'
  },
  {
    id: '3',
    title: 'Water Conservation Initiative Achieves 70% Recycling Rate',
    excerpt: 'Our comprehensive water management system has exceeded sustainability targets, setting new industry standards for responsible manufacturing.',
    image: 'https://images.unsplash.com/photo-1581093804475-577d72e38aa0?w=400&h=300&fit=crop&crop=entropy',
    category: 'sustainability',
    categoryName: 'Sustainability',
    publishDate: '2024-03-08',
    readTime: '6 min read',
    author: 'Dr. Priya Sharma',
    views: '3.2k'
  },
  {
    id: '4',
    title: 'Textile Market Trends: Premium Yarns Drive Growth in 2024',
    excerpt: 'Market analysis reveals increasing demand for high-quality synthetic and blended yarns across fashion and technical textile sectors.',
    image: 'https://images.unsplash.com/photo-1604719311504-e2ecd0324e0e?w=400&h=300&fit=crop&crop=entropy',
    category: 'insights',
    categoryName: 'Market Insights',
    publishDate: '2024-03-05',
    readTime: '7 min read',
    author: 'Rajesh Patel',
    views: '1.5k'
  },
  {
    id: '5',
    title: 'Partnership with Leading Fashion Brands Expands Market Reach',
    excerpt: 'Strategic collaborations with international fashion houses strengthen our position in the premium textile market segment.',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop&crop=entropy',
    category: 'company',
    categoryName: 'Company News',
    publishDate: '2024-03-02',
    readTime: '5 min read',
    author: 'Sarah Williams',
    views: '1.9k'
  },
  {
    id: '6',
    title: 'Industry Report: Sustainable Textile Certifications on the Rise',
    excerpt: 'Latest industry data shows 45% increase in demand for GOTS and OEKO-TEX certified materials across global markets.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=entropy',
    category: 'industry',
    categoryName: 'Industry News',
    publishDate: '2024-02-28',
    readTime: '6 min read',
    author: 'Market Research Team',
    views: '2.7k'
  },
  {
    id: '7',
    title: 'Smart Manufacturing: IoT Integration Optimizes Production',
    excerpt: 'Implementation of Industry 4.0 technologies has improved operational efficiency and quality control across all production lines.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop&crop=entropy',
    category: 'innovation',
    categoryName: 'Innovation',
    publishDate: '2024-02-25',
    readTime: '8 min read',
    author: 'David Chen',
    views: '2.3k'
  },
  {
    id: '8',
    title: 'Community Impact: Supporting Local Cotton Farmers',
    excerpt: 'Our farmer support program has benefited over 1,200 cotton farmers through training, fair pricing, and sustainable agriculture practices.',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop&crop=entropy',
    category: 'sustainability',
    categoryName: 'Sustainability',
    publishDate: '2024-02-22',
    readTime: '5 min read',
    author: 'Dr. Priya Sharma',
    views: '1.7k'
  },
  {
    id: '9',
    title: 'Global Trade Outlook: Textile Export Opportunities in 2024',
    excerpt: 'Analysis of emerging markets and trade opportunities reveals significant growth potential in sustainable textile exports.',
    image: 'https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=400&h=300&fit=crop&crop=entropy',
    category: 'insights',
    categoryName: 'Market Insights',
    publishDate: '2024-02-20',
    readTime: '9 min read',
    author: 'Global Trade Team',
    views: '2.8k'
  }
];

// Footer links data
const footerLinks = [
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Story', href: '/about#story' },
      { name: 'Leadership', href: '/about#team' },
      { name: 'Careers', href: '/careers' }
    ]
  },
  {
    title: 'Products',
    links: [
      { name: 'Cotton Yarns', href: '/products#cotton' },
      { name: 'Wool Yarns', href: '/products#wool' },
      { name: 'Synthetic Yarns', href: '/products#synthetic' },
      { name: 'Custom Solutions', href: '/products#custom' }
    ]
  },
  {
    title: 'Support',
    links: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Technical Support', href: '/contact#support' },
      { name: 'Quality Assurance', href: '/quality' },
      { name: 'Documentation', href: '/docs' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Compliance', href: '/compliance' }
    ]
  }
];

export function NewsPage({ onNavigate }: NewsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const filteredArticles = selectedCategory === 'all' 
    ? articlesData 
    : articlesData.filter(article => article.category === selectedCategory);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);
    
    // Simulate subscription process
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setNewsletterEmail('');
    setIsSubscribing(false);
    
    // Show success message (in a real app, you'd handle this properly)
    alert('Thank you for subscribing to our newsletter!');
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section - Fabric Rolls in Rich Colors */}
      <SectionWrapper className="min-h-screen section-padding-responsive bg-gradient-mesh relative overflow-hidden flex items-center">
        <div className="container-100 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <Badge variant="secondary" className="w-fit">
              <Newspaper className="w-4 h-4 mr-2" />
              Latest Updates
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-display" style={{ fontFamily: 'Playfair Display, serif' }}>
                News &
                <span className="text-gradient-accent block">Insights</span>
              </h1>
              
              <p className="text-body-lg text-muted-foreground leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Stay informed with the latest developments in textile manufacturing, sustainability initiatives, 
                market insights, and company updates from Global Spinners & Textiles.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                <BookOpen className="w-4 h-4 mr-2" />
                Read Latest
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                  24+
                </div>
                <div className="text-sm text-muted-foreground">Articles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                  6
                </div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Weekly
                </div>
                <div className="text-sm text-muted-foreground">Updates</div>
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
                alt="Colorful fabric rolls showcasing rich textures and vibrant colors in textile manufacturing"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              {/* Floating content badges */}
              <div className="absolute top-6 right-6">
                <Badge className="bg-white/90 text-primary border-0 mb-3">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Latest Updates
                </Badge>
              </div>
              <div className="absolute bottom-6 left-6">
                <Badge className="bg-accent/90 text-white border-0">
                  <Globe className="w-3 h-3 mr-1" />
                  Industry Insights
                </Badge>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full animate-float" />
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Featured Article Section */}
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
              <Award className="w-4 h-4 mr-2" />
              Featured Story
            </Badge>
            <h2 className="text-heading mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Editor's Pick
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Our most impactful story this month, highlighting innovation and sustainability in textile manufacturing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="rounded-xl border border-black/5 bg-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <ImageWithFallback
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r" />
                  
                  {/* Article stats overlay */}
                  <div className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6">
                    <div className="flex items-center gap-4 text-white text-sm">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {featuredArticle.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <Share2 className="w-4 h-4" />
                        {featuredArticle.shares}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                        {featuredArticle.categoryName}
                      </Badge>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {formatDate(featuredArticle.publishDate)}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold mb-4 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {featuredArticle.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {featuredArticle.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                          <ImageWithFallback
                            src={featuredArticle.authorImage}
                            alt={featuredArticle.author}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-medium text-sm">{featuredArticle.author}</div>
                          <div className="text-xs text-muted-foreground">{featuredArticle.authorRole}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {featuredArticle.readTime}
                      </div>
                    </div>

                    <Button size="lg" className="w-full group" onClick={() => onNavigate?.('article', { 
                      articleId: featuredArticle.id,
                      linkText: 'Read Full Article - Featured',
                      section: 'featured-article',
                      intent: 'read'
                    })}>
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Article Grid with Filter Tabs */}
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
              <Filter className="w-4 h-4 mr-2" />
              Browse Articles
            </Badge>
            <h2 className="text-heading mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Latest News & Insights
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Explore our latest articles organized by category. Stay updated with industry trends, company news, and expert insights.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {articleCategories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-accent text-white shadow-md'
                      : 'border border-black/10 hover:bg-accent hover:text-white'
                  }`}
                >
                  {category.name} ({category.count})
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Articles Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="rounded-xl border border-black/5 bg-white shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden h-full group">
                  <div className="relative h-48">
                    <ImageWithFallback
                      src={article.image}
                      alt={article.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-primary border-0">
                        {article.categoryName}
                      </Badge>
                    </div>

                    <div className="absolute bottom-4 right-4">
                      <div className="flex items-center gap-1 text-white text-sm">
                        <Eye className="w-3 h-3" />
                        {article.views}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(article.publishDate)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold mb-3 leading-tight line-clamp-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {article.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{article.author}</span>
                      </div>
                      
                      <Button variant="ghost" size="sm" className="group/btn" onClick={() => onNavigate?.('article', {
                        articleId: article.id,
                        linkText: `Read More - ${article.title}`,
                        section: 'article-grid',
                        intent: 'read'
                      })}>
                        Read More
                        <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button size="lg" variant="outline" className="group">
              Load More Articles
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Newsletter Signup Section */}
      <SectionWrapper className="section-padding-responsive bg-white">
        <div className="container-100">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="rounded-xl border border-black/5 bg-gradient-to-br from-primary-50 via-white to-accent-50 shadow-lg p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <Badge variant="secondary" className="mb-4">
                <Send className="w-4 h-4 mr-2" />
                Stay Updated
              </Badge>
              
              <h2 className="text-heading mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Subscribe to Our Newsletter
              </h2>
              
              <p className="text-body-lg text-muted-foreground mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
                Get the latest textile industry news, sustainability updates, and company insights 
                delivered directly to your inbox. Join over 5,000 industry professionals.
              </p>

              <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <Label htmlFor="newsletter-email" className="sr-only">
                      Email Address
                    </Label>
                    <Input
                      id="newsletter-email"
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="h-12 border-input-border focus:border-input-border-focus"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="group h-12"
                    disabled={isSubscribing}
                  >
                    {isSubscribing ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2" />
                        Subscribing...
                      </>
                    ) : (
                      <>
                        Subscribe
                        <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </div>
                
                <p className="text-sm text-muted-foreground mt-4">
                  No spam, unsubscribe at any time. We respect your privacy.
                </p>
              </form>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                    5,000+
                  </div>
                  <div className="text-sm text-muted-foreground">Subscribers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Weekly
                  </div>
                  <div className="text-sm text-muted-foreground">Updates</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                    35+
                  </div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Footer Links Section */}
      <SectionWrapper className="section-padding-responsive bg-primary text-primary-foreground">
        <div className="container-100">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {footerLinks.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all duration-200 flex items-center gap-2 group"
                        >
                          {link.name}
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="pt-8 border-t border-white/20 text-center">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2">
                  <Factory className="w-5 h-5" />
                  <span className="font-semibold" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Global Spinners & Textiles
                  </span>
                </div>
                
                <div className="flex items-center gap-6 text-sm opacity-75">
                  <span>© 2024 All rights reserved</span>
                  <span>•</span>
                  <span>Premium Textile Manufacturing</span>
                </div>
              </div>
              
              <p className="text-sm opacity-75 mt-4">
                Leading sustainable textile manufacturing since 1970 • Serving 35+ countries worldwide
              </p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </motion.div>
  );
}