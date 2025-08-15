import { motion } from 'framer-motion';
import { SectionWrapper } from '../SectionWrapper';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { Separator } from '../ui/separator';
import { Avatar } from '../ui/avatar';
import { Tooltip } from '../ui/tooltip';
import { 
  Calendar, 
  User, 
  ArrowLeft, 
  Share2, 
  BookOpen, 
  Clock,
  Eye,
  ChevronRight,
  TrendingUp,
  Factory,
  Leaf,
  Globe,
  Award,
  ExternalLink,
  Mail,
  Linkedin,
  Twitter,
  Facebook,
  Link2,
  Download,
  Printer,
  BookmarkPlus,
  MessageCircle,
  ThumbsUp,
  Hash,
  ArrowUp,
  Users,
  Building2,
  MapPin,
  Phone,
  CheckCircle,
  Star,
  Zap,
  Target,
  Search
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface ArticlePageProps {
  articleId?: string;
  onBack?: () => void;
}

// Enhanced article data structure with more comprehensive content
const getArticleData = (id?: string) => {
  const articles = {
    'sustainable-innovation-2024': {
      id: 'sustainable-innovation-2024',
      title: 'Global Spinners Leads Sustainable Innovation in Textile Manufacturing',
      subtitle: 'Revolutionary eco-friendly production processes reduce environmental impact by 40% while maintaining premium quality standards',
      category: 'Sustainability',
      date: '2024-01-15',
      lastUpdated: '2024-01-20',
      author: {
        name: 'Dr. Priya Sharma',
        role: 'Chief Operating Officer',
        bio: 'Dr. Priya Sharma leads sustainability initiatives at Global Spinners with over 15 years of experience in sustainable textile manufacturing. She holds a PhD in Environmental Engineering and has published extensively on eco-friendly production methods.',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b4e10b9e?w=400&h=400&fit=crop&crop=face',
        credentials: ['PhD Environmental Engineering', 'Certified Sustainability Professional', '15+ Years Industry Experience'],
        social: {
          linkedin: '#',
          twitter: '#',
          email: 'priya.sharma@globalspinners.com'
        }
      },
      readTime: '8 min read',
      views: '2,847',
      likes: '142',
      shares: '87',
      comments: '23',
      heroImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop&crop=entropy',
      excerpt: 'Global Spinners announces breakthrough in sustainable textile manufacturing with new processes that significantly reduce environmental impact while maintaining the premium quality our clients expect.',
      tags: ['Sustainability', 'Innovation', 'Manufacturing', 'Environment', 'Technology', 'Quality'],
      tableOfContents: [
        { id: 'introduction', title: 'Introduction', level: 1 },
        { id: 'revolutionary-process', title: 'Revolutionary Process Innovation', level: 1 },
        { id: 'environmental-impact', title: 'Environmental Impact Reduction', level: 2 },
        { id: 'quality-maintenance', title: 'Quality Maintenance Standards', level: 2 },
        { id: 'certifications', title: 'Industry-Leading Certifications', level: 1 },
        { id: 'global-impact', title: 'Global Impact and Future Plans', level: 1 },
        { id: 'conclusion', title: 'Conclusion and Next Steps', level: 1 }
      ],
      content: [
        {
          type: 'paragraph',
          id: 'introduction',
          content: 'At Global Spinners & Textiles, we have always believed that sustainable manufacturing is not just an environmental imperative—it\'s a business necessity that drives innovation and creates lasting value for our clients and communities. Today, we\'re proud to announce a significant milestone in our sustainability journey that exemplifies this philosophy.'
        },
        {
          type: 'heading',
          id: 'revolutionary-process',
          content: 'Revolutionary Process Innovation'
        },
        {
          type: 'paragraph',
          content: 'Our research and development team, led by Chief Innovation Officer David Chen, has successfully implemented a new production process that reduces water consumption by 45%, energy usage by 30%, and chemical waste by 55%. These improvements were achieved through a combination of advanced filtration systems, renewable energy integration, and innovative fiber treatment techniques.'
        },
        {
          type: 'stats-grid',
          content: [
            { label: 'Water Consumption Reduction', value: '45%', icon: 'droplet' },
            { label: 'Energy Usage Reduction', value: '30%', icon: 'zap' },
            { label: 'Chemical Waste Reduction', value: '55%', icon: 'leaf' },
            { label: 'Quality Standards Maintained', value: '100%', icon: 'target' }
          ]
        },
        {
          type: 'quote',
          content: 'This breakthrough represents three years of intensive research and development. We\'ve proven that environmental responsibility and manufacturing excellence can not only coexist but actually enhance each other.',
          author: 'David Chen, Chief Innovation Officer',
          image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
        },
        {
          type: 'paragraph',
          id: 'environmental-impact',
          content: 'The new processes have been implemented across our primary manufacturing facilities in Mumbai, resulting in immediate environmental benefits while maintaining the premium quality standards that have made Global Spinners a trusted partner for textile manufacturers worldwide.'
        },
        {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1581093804475-577d72e38aa0?w=800&h=400&fit=crop&crop=entropy',
          alt: 'Sustainable textile manufacturing facility',
          caption: 'Our state-of-the-art sustainable manufacturing facility in Mumbai implementing new eco-friendly processes'
        },
        {
          type: 'heading',
          id: 'certifications',
          content: 'Industry-Leading Certifications'
        },
        {
          type: 'paragraph',
          content: 'These innovations have earned Global Spinners several prestigious certifications, including the Global Organic Textile Standard (GOTS) and OEKO-TEX Standard 100. These certifications validate our commitment to environmental and social criteria along the entire textile supply chain.'
        },
        {
          type: 'certification-grid',
          content: [
            {
              name: 'GOTS Certification',
              description: 'Global Organic Textile Standard for organic fiber processing',
              image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=100&h=100&fit=crop&crop=entropy',
              verified: true
            },
            {
              name: 'OEKO-TEX Standard 100',
              description: 'Harmful substance testing certification',
              image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=100&h=100&fit=crop&crop=entropy',
              verified: true
            },
            {
              name: 'ISO 14001',
              description: 'Environmental Management System certification',
              image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=100&h=100&fit=crop&crop=entropy',
              verified: true
            },
            {
              name: 'ZDHC Compliance',
              description: 'Zero Discharge of Hazardous Chemicals compliance',
              image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=100&h=100&fit=crop&crop=entropy',
              verified: true
            }
          ]
        },
        {
          type: 'paragraph',
          content: 'The implementation of these sustainable practices has also resulted in operational cost savings of approximately 25%, demonstrating that environmental stewardship and business efficiency are aligned objectives in modern textile manufacturing.'
        },
        {
          type: 'heading',
          id: 'global-impact',
          content: 'Global Impact and Future Plans'
        },
        {
          type: 'paragraph',
          content: 'The success of our sustainable manufacturing initiative has attracted attention from international partners and industry leaders. We\'re currently in discussions with several European fashion brands to supply sustainably-produced yarns for their upcoming collections, representing a significant expansion of our global footprint.'
        },
        {
          type: 'paragraph',
          content: 'Looking ahead, Global Spinners plans to achieve carbon neutrality by 2030 through continued innovation, renewable energy adoption, and strategic partnerships with like-minded organizations across the textile supply chain.'
        },
        {
          type: 'cta-section',
          content: {
            title: 'Partner with Us for Sustainable Manufacturing',
            description: 'Join leading brands who trust Global Spinners for sustainable, high-quality textile solutions.',
            buttons: [
              { text: 'Request Quote', variant: 'primary' },
              { text: 'Download Sustainability Report', variant: 'secondary' }
            ]
          }
        }
      ],
      relatedArticles: [
        {
          id: 'textile-trends-2024',
          title: 'Textile Industry Trends Shaping 2024',
          category: 'Industry Insights',
          date: '2024-01-10',
          image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=400&h=200&fit=crop&crop=entropy',
          readTime: '6 min read',
          excerpt: 'Comprehensive analysis of emerging trends in the textile industry for 2024.'
        },
        {
          id: 'cotton-quality-standards',
          title: 'Setting New Standards in Cotton Yarn Quality',
          category: 'Quality Assurance',
          date: '2024-01-05',
          image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=200&fit=crop&crop=entropy',
          readTime: '5 min read',
          excerpt: 'How Global Spinners maintains superior quality standards in cotton yarn production.'
        },
        {
          id: 'global-expansion-strategy',
          title: 'Global Spinners Announces European Expansion',
          category: 'Company News',
          date: '2023-12-28',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop&crop=entropy',
          readTime: '4 min read',
          excerpt: 'Strategic expansion plans to serve European markets with sustainable textile solutions.'
        }
      ],
      seo: {
        metaTitle: 'Sustainable Textile Manufacturing Innovation | Global Spinners',
        metaDescription: 'Discover how Global Spinners leads sustainable innovation in textile manufacturing with 40% reduced environmental impact while maintaining premium quality.',
        keywords: ['sustainable textiles', 'eco-friendly manufacturing', 'textile innovation', 'sustainable fashion', 'green manufacturing'],
        canonicalUrl: '/articles/sustainable-innovation-2024'
      }
    },
    'featured-1': {
      id: 'featured-1',
      title: 'The Future of Sustainable Textile Manufacturing: Leading the Industry Transformation',
      subtitle: 'As the textile industry undergoes a revolutionary shift towards sustainability, Global Spinners & Textiles stands at the forefront of innovative manufacturing processes that balance environmental responsibility with premium quality production',
      category: 'Sustainability',
      date: '2024-03-15',
      lastUpdated: '2024-03-16',
      author: {
        name: 'Dr. Priya Sharma',
        role: 'Chief Sustainability Officer',
        bio: 'Dr. Priya Sharma leads sustainability initiatives at Global Spinners with over 15 years of experience in sustainable textile manufacturing. She holds a PhD in Environmental Engineering and has published extensively on eco-friendly production methods.',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b4e10b9e?w=400&h=400&fit=crop&crop=face',
        credentials: ['PhD Environmental Engineering', 'Certified Sustainability Professional', '15+ Years Industry Experience'],
        social: {
          linkedin: '#',
          twitter: '#',
          email: 'priya.sharma@globalspinners.com'
        }
      },
      readTime: '8 min read',
      views: '2,400',
      likes: '189',
      shares: '145',
      comments: '34',
      heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=600&fit=crop&crop=entropy',
      excerpt: 'As the textile industry undergoes a revolutionary shift towards sustainability, Global Spinners & Textiles stands at the forefront of innovative manufacturing processes that balance environmental responsibility with premium quality production.',
      tags: ['Sustainability', 'Innovation', 'Manufacturing', 'Future', 'Technology', 'Environment'],
      content: [
        {
          type: 'paragraph',
          content: 'The textile industry stands at a critical juncture. As global consciousness around environmental responsibility continues to grow, manufacturers face unprecedented pressure to revolutionize their operations while maintaining the quality and efficiency that modern markets demand.'
        },
        {
          type: 'heading',
          content: 'Pioneering Sustainable Technologies'
        },
        {
          type: 'paragraph',
          content: 'At Global Spinners & Textiles, we have invested heavily in cutting-edge technologies that reduce our environmental footprint without compromising on quality. Our latest innovations include water recycling systems that achieve 85% efficiency, renewable energy integration across all major facilities, and revolutionary fiber processing techniques that eliminate harmful chemicals.'
        },
        {
          type: 'stats-grid',
          content: [
            { label: 'Carbon Footprint Reduction', value: '60%', icon: 'leaf' },
            { label: 'Water Usage Efficiency', value: '85%', icon: 'droplet' },
            { label: 'Renewable Energy Usage', value: '75%', icon: 'zap' },
            { label: 'Waste Reduction', value: '70%', icon: 'target' }
          ]
        },
        {
          type: 'quote',
          content: 'Sustainability is not just about environmental responsibility—it\'s about creating long-term value for all stakeholders while building a more resilient and innovative business model.',
          author: 'Dr. Priya Sharma, Chief Sustainability Officer'
        },
        {
          type: 'paragraph',
          content: 'Our commitment to sustainability extends beyond our manufacturing processes. We work closely with suppliers to ensure ethical sourcing, support local communities through fair trade practices, and invest in research and development to continuously improve our environmental performance.'
        },
        {
          type: 'cta-section',
          content: {
            title: 'Join the Sustainability Revolution',
            description: 'Partner with Global Spinners to access sustainable textile solutions that meet the highest quality standards.',
            buttons: [
              { text: 'Learn More', variant: 'primary' },
              { text: 'Contact Our Team', variant: 'secondary' }
            ]
          }
        }
      ],
      relatedArticles: [
        {
          id: 'sustainable-innovation-2024',
          title: 'Global Spinners Leads Sustainable Innovation in Textile Manufacturing',
          category: 'Sustainability',
          date: '2024-01-15',
          image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=200&fit=crop&crop=entropy',
          readTime: '8 min read',
          excerpt: 'Revolutionary eco-friendly production processes reduce environmental impact by 40% while maintaining premium quality standards.'
        },
        {
          id: '1',
          title: 'Advanced Fiber Technology Revolutionizes Cotton Production',
          category: 'Innovation',
          date: '2024-03-12',
          image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=200&fit=crop&crop=entropy',
          readTime: '5 min read',
          excerpt: 'Our latest investment in ring spinning technology has increased production efficiency by 35% while maintaining superior yarn quality.'
        },
        {
          id: '3',
          title: 'Water Conservation Initiative Achieves 70% Recycling Rate',
          category: 'Sustainability',
          date: '2024-03-08',
          image: 'https://images.unsplash.com/photo-1581093804475-577d72e38aa0?w=400&h=200&fit=crop&crop=entropy',
          readTime: '6 min read',
          excerpt: 'Our comprehensive water management system has exceeded sustainability targets, setting new industry standards for responsible manufacturing.'
        }
      ],
      seo: {
        metaTitle: 'The Future of Sustainable Textile Manufacturing | Global Spinners',
        metaDescription: 'Discover how Global Spinners is leading the industry transformation towards sustainable textile manufacturing with innovative processes and cutting-edge technology.',
        keywords: ['sustainable textiles', 'future manufacturing', 'textile innovation', 'environmental responsibility', 'green technology'],
        canonicalUrl: '/articles/featured-1'
      }
    }
  };

  // Return the specific article if found, otherwise default to sustainable innovation
  return articles[id as keyof typeof articles] || articles['sustainable-innovation-2024'];
};

export function ArticlePage({ articleId, onBack }: ArticlePageProps) {
  const [isSharing, setIsSharing] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showTableOfContents, setShowTableOfContents] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [readingProgress, setReadingProgress] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const article = getArticleData(articleId);

  // Calculate reading progress
  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const element = contentRef.current;
        const scrollTop = window.scrollY;
        const docHeight = element.offsetHeight;
        const winHeight = window.innerHeight;
        const scrollPercent = scrollTop / (docHeight - winHeight);
        const scrollPercentRounded = Math.round(scrollPercent * 100);
        setReadingProgress(Math.min(100, Math.max(0, scrollPercentRounded)));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update SEO meta tags
  useEffect(() => {
    if (article.seo) {
      document.title = article.seo.metaTitle;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', article.seo.metaDescription);
      }

      // Update meta keywords
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', article.seo.keywords.join(', '));
      }
    }

    return () => {
      // Reset title when component unmounts
      document.title = "Global Spinners & Textiles - Premium Fabric Manufacturing Since 1970";
    };
  }, [article]);

  const handleShare = async (platform: string) => {
    setIsSharing(true);
    
    const shareData = {
      title: article.title,
      text: article.excerpt,
      url: window.location.href
    };

    try {
      if (platform === 'native' && navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback to platform-specific sharing
        const shareUrls = {
          twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`,
          linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
          facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
          email: `mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(`${article.excerpt}\n\nRead more: ${window.location.href}`)}`
        };
        
        if (shareUrls[platform as keyof typeof shareUrls]) {
          window.open(shareUrls[platform as keyof typeof shareUrls], '_blank');
        } else {
          // Copy to clipboard fallback
          await navigator.clipboard.writeText(window.location.href);
        }
      }
    } catch (error) {
      console.error('Error sharing:', error);
    } finally {
      setTimeout(() => setIsSharing(false), 1000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // In a real implementation, this would generate a PDF
    console.log('Download article as PDF');
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getIconComponent = (iconName: string) => {
    const icons = {
      droplet: Globe, // Using Globe as placeholder for droplet
      zap: Zap,
      leaf: Leaf,
      target: Target
    };
    return icons[iconName as keyof typeof icons] || Globe;
  };

  const renderContent = (content: any, index: number) => {
    switch (content.type) {
      case 'paragraph':
        return (
          <p key={index} className="text-muted-foreground leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            {content.content}
          </p>
        );
      
      case 'heading':
        return (
          <h2 key={index} className="text-2xl font-semibold mb-4 mt-8" style={{ fontFamily: 'Playfair Display, serif' }}>
            {content.content}
          </h2>
        );
      
      case 'quote':
        return (
          <div key={index} className="my-8 p-6 border-l-4 border-accent bg-accent-50 rounded-r-lg">
            <blockquote className="text-lg italic text-accent-800 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
              "{content.content}"
            </blockquote>
            {content.author && (
              <cite className="text-sm font-medium text-accent-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                — {content.author}
              </cite>
            )}
          </div>
        );
      
      case 'list':
        return (
          <ul key={index} className="space-y-3 mb-6 ml-6">
            {content.content.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-muted-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        );
      
      case 'stats-grid':
        return (
          <div key={index} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {content.content.map((stat: any, i: number) => {
              const IconComponent = getIconComponent(stat.icon);
              return (
                <div key={i} className="p-4 bg-muted rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                      {stat.icon && <IconComponent className="w-4 h-4 text-accent" />}
                    </div>
                    <div className="text-sm font-medium">
                      {stat.label}
                    </div>
                  </div>
                  <div className="text-2xl font-bold mt-1">
                    {stat.value}
                  </div>
                </div>
              );
            })}
          </div>
        );
      
      case 'image':
        return (
          <div key={index} className="mb-8">
            <ImageWithFallback
              src={content.src}
              alt={content.alt}
              className="w-full h-auto rounded-lg shadow-md"
            />
            <p className="text-sm text-muted-foreground mt-2">
              {content.caption}
            </p>
          </div>
        );
      
      case 'certification-grid':
        return (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {content.content.map((cert: any, i: number) => (
              <div key={i} className="p-4 bg-muted rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                    {cert.verified && <CheckCircle className="w-4 h-4 text-accent" />}
                  </div>
                  <div className="text-sm font-medium">
                    {cert.name}
                  </div>
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {cert.description}
                </div>
              </div>
            ))}
          </div>
        );
      
      case 'cta-section':
        return (
          <div key={index} className="mt-12">
            <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              {content.content.title}
            </h3>
            <p className="text-muted-foreground mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              {content.content.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {content.content.buttons.map((button: any, i: number) => (
                <Button
                  key={i}
                  variant={button.variant}
                  className="px-4 py-2"
                >
                  {button.text}
                </Button>
              ))}
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      ref={contentRef}
    >
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-muted-200 z-50">
        <div 
          className="h-full bg-accent transition-all duration-300 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Floating Article Actions */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <Card className="p-3 space-y-3 bg-white/90 backdrop-blur-sm border shadow-lg">
          <Tooltip>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLike}
              className={`w-full ${isLiked ? 'text-red-500' : ''}`}
            >
              <ThumbsUp className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
            </Button>
          </Tooltip>
          <span className="text-xs text-center block">{article.likes}</span>
          
          <Separator />
          
          <Tooltip>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBookmark}
              className={`w-full ${isBookmarked ? 'text-accent' : ''}`}
            >
              <BookmarkPlus className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
            </Button>
          </Tooltip>
          
          <Tooltip>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleShare('native')}
              className="w-full"
            >
              <Share2 className="w-4 h-4" />
            </Button>
          </Tooltip>
          <span className="text-xs text-center block">{article.shares}</span>
          
          <Separator />
          
          <Tooltip>
            <Button
              variant="ghost"
              size="sm"
              onClick={handlePrint}
              className="w-full"
            >
              <Printer className="w-4 h-4" />
            </Button>
          </Tooltip>
          
          <Tooltip>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDownload}
              className="w-full"
            >
              <Download className="w-4 h-4" />
            </Button>
          </Tooltip>
          
          <Separator />
          
          <Tooltip>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="w-full"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </Tooltip>
        </Card>
      </div>

      {/* Back Navigation */}
      <SectionWrapper className="pt-8 pb-0">
        <div className="container-100">
          <Button 
            variant="ghost" 
            className="mb-6 group"
            onClick={onBack}
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to News
          </Button>
        </div>
      </SectionWrapper>

      {/* Article Header */}
      <SectionWrapper className="py-8">
        <div className="container-100">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Category and Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <Badge variant="secondary" className="bg-accent/10 text-accent">
                  {article.category}
                </Badge>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(article.date)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {article.readTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {article.views} views
                  </div>
                </div>
              </div>

              {/* Title and Subtitle */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {article.title}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {article.subtitle}
                </p>
              </div>

              {/* Author and Sharing */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-6 border-t border-border">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <ImageWithFallback
                      src={article.author.image}
                      alt={article.author.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {article.author.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {article.author.role}
                    </p>
                  </div>
                </div>

                {/* Share Buttons */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground mr-2">Share:</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShare('twitter')}
                    disabled={isSharing}
                  >
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShare('linkedin')}
                    disabled={isSharing}
                  >
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShare('email')}
                    disabled={isSharing}
                  >
                    <Mail className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShare('copy')}
                    disabled={isSharing}
                  >
                    <Link2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Article Stats */}
              <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <ThumbsUp className="w-4 h-4" />
                  <span>{article.likes} likes</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>{article.comments} comments</span>
                </div>
                <div className="flex items-center gap-1">
                  <Share2 className="w-4 h-4" />
                  <span>{article.shares} shares</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Hero Image */}
      <SectionWrapper className="py-0">
        <div className="container-100">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl max-w-6xl mx-auto"
          >
            <ImageWithFallback
              src={article.heroImage}
              alt={article.title}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Article Content */}
      <SectionWrapper className="section-padding-responsive">
        <div className="container-100">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="prose prose-lg max-w-none"
            >
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Article Content */}
              <div className="space-y-0">
                {article.content.map((content, index) => renderContent(content, index))}
              </div>

              {/* Article Footer */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <BookOpen className="w-4 h-4" />
                    <span>Published on {formatDate(article.date)}</span>
                    {article.lastUpdated && (
                      <>
                        <span>•</span>
                        <span>Updated {formatDate(article.lastUpdated)}</span>
                      </>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground mr-2">Share this article:</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShare('native')}
                      disabled={isSharing}
                      className="gap-2"
                    >
                      <Share2 className="w-4 h-4" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Author Bio Section */}
      <SectionWrapper className="section-padding-responsive bg-muted-50">
        <div className="container-100">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="p-8 bg-white border border-black/5 shadow-lg">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-full overflow-hidden">
                      <ImageWithFallback
                        src={article.author.image}
                        alt={article.author.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                          About {article.author.name}
                        </h3>
                        <p className="text-sm text-accent font-medium">
                          {article.author.role}
                        </p>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {article.author.bio}
                      </p>
                      
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm">Credentials:</h4>
                        <div className="flex flex-wrap gap-2">
                          {article.author.credentials.map((credential, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {credential}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 pt-2">
                        <span className="text-sm text-muted-foreground">Connect:</span>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Linkedin className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Twitter className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Mail className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Related Articles */}
      <SectionWrapper className="section-padding-responsive bg-white">
        <div className="container-100">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Related Articles
              </h2>
              <p className="text-muted-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>
                Discover more insights from Global Spinners
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {article.relatedArticles.map((relatedArticle, index) => (
                <motion.div
                  key={relatedArticle.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <Card className="rounded-xl border border-black/5 bg-white shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden group cursor-pointer h-full">
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback
                        src={relatedArticle.image}
                        alt={relatedArticle.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-white/90 text-primary">
                          {relatedArticle.category}
                        </Badge>
                      </div>
                    </div>

                    <div className="p-6 space-y-4 flex flex-col flex-1">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(relatedArticle.date)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {relatedArticle.readTime}
                        </div>
                      </div>

                      <h3 className="font-semibold leading-tight group-hover:text-accent transition-colors flex-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {relatedArticle.title}
                      </h3>

                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {relatedArticle.excerpt}
                      </p>

                      <Button variant="ghost" className="p-0 h-auto group/btn self-start">
                        <span className="mr-2">Read Article</span>
                        <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* View All Articles */}
            <div className="text-center mt-12">
              <Button size="lg" variant="outline" onClick={onBack} className="group">
                View All News & Insights
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </motion.div>
  );
}