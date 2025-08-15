import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  X, 
  Factory,
  Users,
  Award,
  Globe,
  Calendar,
  MapPin,
  Shield,
  TrendingUp,
  Leaf,
  Clock,
  Target,
  Star,
  Building,
  Cpu,
  Zap,
  Heart,
  CheckCircle,
  ArrowRight,
  Play,
  Download,
  ExternalLink,
  Phone,
  Mail,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CompanyOverviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Company timeline data
const timelineEvents = [
  {
    year: '1970',
    title: 'Founded',
    description: 'Global Textiles established in Atlanta, Georgia with a vision to revolutionize textile manufacturing.',
    icon: Building,
    achievement: 'Started with 25 employees'
  },
  {
    year: '1985',
    title: 'First Expansion',
    description: 'Opened our first additional facility in Charlotte, NC, doubling production capacity.',
    icon: Factory,
    achievement: 'Reached $10M in revenue'
  },
  {
    year: '1995',
    title: 'International Growth',
    description: 'Began exporting to European markets, establishing Global as an international player.',
    icon: Globe,
    achievement: '15 countries served'
  },
  {
    year: '2005',
    title: 'Quality Certification',
    description: 'Achieved ISO 9001:2000 certification, setting new standards for quality management.',
    icon: Award,
    achievement: '99.5% quality rating'
  },
  {
    year: '2010',
    title: 'Sustainability Initiative',
    description: 'Launched comprehensive sustainability program, reducing water usage by 40%.',
    icon: Leaf,
    achievement: 'Carbon neutral operations'
  },
  {
    year: '2015',
    title: 'Technology Innovation',
    description: 'Invested $50M in cutting-edge automated manufacturing systems.',
    icon: Cpu,
    achievement: '300% efficiency increase'
  },
  {
    year: '2020',
    title: 'Digital Transformation',
    description: 'Completed digital transformation with AI-powered quality control and supply chain optimization.',
    icon: Zap,
    achievement: '99.8% on-time delivery'
  },
  {
    year: '2025',
    title: 'Future Vision',
    description: 'Leading the industry with sustainable innovations and expanding into emerging markets.',
    icon: Target,
    achievement: '35+ countries served'
  }
];

// Leadership team data
const leadershipTeam = [
  {
    name: 'Robert Chen',
    position: 'Chief Executive Officer',
    experience: '25+ years',
    background: 'Former VP of Manufacturing at Fortune 500 textile company',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    expertise: ['Strategic Leadership', 'Global Operations', 'Sustainable Manufacturing']
  },
  {
    name: 'Sarah Williams',
    position: 'Chief Technology Officer',
    experience: '20+ years',
    background: 'PhD in Materials Science, former R&D Director at leading textile innovator',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b6d96a3c?w=300&h=300&fit=crop&crop=face',
    expertise: ['Innovation Management', 'Sustainable Materials', 'Process Optimization']
  },
  {
    name: 'Michael Rodriguez',
    position: 'Chief Operations Officer',
    experience: '18+ years',
    background: 'Lean Six Sigma Black Belt, specialized in textile manufacturing excellence',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    expertise: ['Operations Excellence', 'Quality Management', 'Supply Chain Optimization']
  },
  {
    name: 'Emily Thompson',
    position: 'Chief Financial Officer',
    experience: '15+ years',
    background: 'CPA with extensive experience in manufacturing finance and international markets',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    expertise: ['Financial Strategy', 'Risk Management', 'International Operations']
  }
];

// Key capabilities data
const keyCapabilities = [
  {
    title: 'Advanced Manufacturing',
    description: 'State-of-the-art automated production lines with AI-powered quality control',
    icon: Factory,
    stats: ['24/7 Operations', '99.8% Quality Rate', '50k+ units/day'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&crop=entropy'
  },
  {
    title: 'Sustainable Production',
    description: 'Environmental responsibility through water recycling, renewable energy, and waste reduction',
    icon: Leaf,
    stats: ['70% Water Reduction', 'Carbon Neutral', '95% Waste Recycling'],
    image: 'https://images.unsplash.com/photo-1518709779329-9b4705b74509?w=600&h=400&fit=crop&crop=entropy'
  },
  {
    title: 'Global Supply Chain',
    description: 'Worldwide distribution network ensuring reliable delivery to 35+ countries',
    icon: Globe,
    stats: ['35+ Countries', '99.5% On-time', '24/7 Support'],
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&crop=entropy'
  },
  {
    title: 'Quality Assurance',
    description: 'Rigorous testing and certification processes meeting international standards',
    icon: Shield,
    stats: ['ISO 9001:2015', 'OEKO-TEX', '100% Tested'],
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop&crop=entropy'
  }
];

// Certifications and awards
const certifications = [
  {
    name: 'ISO 9001:2015',
    description: 'Quality Management System',
    issuer: 'International Organization for Standardization',
    year: '2020',
    icon: Award
  },
  {
    name: 'OEKO-TEX Standard 100',
    description: 'Textile Safety Certification',
    issuer: 'OEKO-TEX Association',
    year: '2019',
    icon: Shield
  },
  {
    name: 'GOTS Certification',
    description: 'Global Organic Textile Standard',
    issuer: 'Global Organic Textile Standard',
    year: '2021',
    icon: Leaf
  },
  {
    name: 'Best Manufacturer Award',
    description: 'Excellence in Textile Manufacturing',
    issuer: 'Textile Industry Association',
    year: '2023',
    icon: Star
  }
];

// Key statistics
const keyStats = [
  { number: '50+', label: 'Years Experience', icon: Calendar },
  { number: '850+', label: 'Team Members', icon: Users },
  { number: '35+', label: 'Countries Served', icon: Globe },
  { number: '500+', label: 'Happy Clients', icon: Heart },
  { number: '3', label: 'Manufacturing Facilities', icon: Factory },
  { number: '99.8%', label: 'Quality Rating', icon: Star },
  { number: '24/7', label: 'Operations', icon: Clock },
  { number: '70%', label: 'Water Reduction', icon: Leaf }
];

export function CompanyOverviewModal({ isOpen, onClose }: CompanyOverviewModalProps) {
  const [selectedTab, setSelectedTab] = useState('story');
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

  if (!isOpen) return null;

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
        className="relative w-full max-w-6xl max-h-[90vh] mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-800 rounded-xl flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                <g strokeLinecap="round" strokeLinejoin="round">
                  <motion.path 
                    d="M2 6h20M2 12h20M2 18h20" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    opacity="0.9"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                  />
                  <motion.path 
                    d="M6 2v20M12 2v20M18 2v20" 
                    stroke="currentColor" 
                    strokeWidth="1.8" 
                    opacity="0.7"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.4 }}
                  />
                </g>
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold" style={{ fontFamily: 'Playfair Display, serif' }}>
                About Global Textiles
              </h2>
              <p className="text-sm text-muted-foreground">
                Heritage craftsmanship meets modern precision
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto max-h-[calc(90vh-120px)]">
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
            {/* Tab Navigation */}
            <div className="px-6 py-4 bg-muted/30 border-b border-border">
              <TabsList className="grid w-full grid-cols-5 max-w-2xl mx-auto">
                <TabsTrigger value="story">Our Story</TabsTrigger>
                <TabsTrigger value="capabilities">Capabilities</TabsTrigger>
                <TabsTrigger value="team">Leadership</TabsTrigger>
                <TabsTrigger value="achievements">Awards</TabsTrigger>
                <TabsTrigger value="stats">Statistics</TabsTrigger>
              </TabsList>
            </div>

            <div className="p-6">
              {/* Our Story Tab */}
              <TabsContent value="story" className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Five Decades of Excellence
                  </h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    From humble beginnings in 1970 to becoming a global leader in textile manufacturing, 
                    our journey is defined by innovation, quality, and unwavering commitment to our clients.
                  </p>
                </div>

                {/* Company Timeline */}
                <div className="space-y-6">
                  {timelineEvents.map((event, index) => (
                    <motion.div
                      key={event.year}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <Card className="p-6 border border-border hover:shadow-lg transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <event.icon className="w-6 h-6 text-accent" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <Badge variant="outline">{event.year}</Badge>
                              <h4 className="font-semibold" style={{ fontFamily: 'Playfair Display, serif' }}>
                                {event.title}
                              </h4>
                            </div>
                            <p className="text-muted-foreground mb-3">{event.description}</p>
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-accent" />
                              <span className="text-sm font-medium text-accent">{event.achievement}</span>
                            </div>
                          </div>
                        </div>
                      </Card>
                      
                      {/* Timeline connector */}
                      {index < timelineEvents.length - 1 && (
                        <div className="absolute left-6 top-20 w-0.5 h-8 bg-border"></div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Mission Statement */}
                <Card className="p-8 bg-gradient-to-br from-accent/5 to-primary/5">
                  <div className="text-center">
                    <h4 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Our Mission
                    </h4>
                    <p className="text-lg text-muted-foreground italic leading-relaxed">
                      "To be the world's most trusted textile manufacturing partner, 
                      delivering exceptional quality through sustainable innovation 
                      and unwavering commitment to our clients' success."
                    </p>
                  </div>
                </Card>
              </TabsContent>

              {/* Capabilities Tab */}
              <TabsContent value="capabilities" className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Manufacturing Excellence
                  </h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Our state-of-the-art facilities and advanced capabilities enable us to deliver 
                    superior quality textiles at scale, serving global markets with reliability and precision.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {keyCapabilities.map((capability, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="overflow-hidden hover:shadow-xl transition-all duration-500">
                        <div className="aspect-video relative">
                          <ImageWithFallback
                            src={capability.image}
                            alt={capability.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          <div className="absolute bottom-4 left-4">
                            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                              <capability.icon className="w-5 h-5 text-white" />
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-6">
                          <h4 className="font-semibold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                            {capability.title}
                          </h4>
                          <p className="text-muted-foreground mb-4">{capability.description}</p>
                          
                          <div className="space-y-2">
                            {capability.stats.map((stat, statIndex) => (
                              <div key={statIndex} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-accent" />
                                <span className="text-sm">{stat}</span>
                              </div>
                            ))}
                          </div>
                          
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-4 w-full"
                            onClick={() => setExpandedCapability(expandedCapability === index ? null : index)}
                          >
                            {expandedCapability === index ? 'Show Less' : 'Learn More'}
                            {expandedCapability === index ? 
                              <ChevronUp className="w-4 h-4 ml-2" /> : 
                              <ChevronDown className="w-4 h-4 ml-2" />
                            }
                          </Button>
                          
                          <AnimatePresence>
                            {expandedCapability === index && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mt-4 pt-4 border-t border-border"
                              >
                                <p className="text-sm text-muted-foreground">
                                  Advanced technical specifications and detailed capabilities available upon request. 
                                  Contact our technical team for comprehensive documentation and custom solutions.
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              {/* Leadership Team Tab */}
              <TabsContent value="team" className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Leadership Team
                  </h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Our experienced leadership team brings together decades of industry expertise, 
                    driving innovation and excellence across all aspects of our operations.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {leadershipTeam.map((leader, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="p-6 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                            <ImageWithFallback
                              src={leader.image}
                              alt={leader.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                              {leader.name}
                            </h4>
                            <p className="text-accent font-medium mb-1">{leader.position}</p>
                            <p className="text-sm text-muted-foreground mb-3">{leader.background}</p>
                            
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-muted-foreground" />
                                <span className="text-sm">{leader.experience}</span>
                              </div>
                              
                              <div className="flex flex-wrap gap-1 mt-3">
                                {leader.expertise.map((skill, skillIndex) => (
                                  <Badge key={skillIndex} variant="outline" className="text-xs">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              {/* Awards & Certifications Tab */}
              <TabsContent value="achievements" className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Awards & Certifications
                  </h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Recognition of our commitment to quality, sustainability, and excellence 
                    from leading industry organizations and certification bodies.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
                        <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <cert.icon className="w-8 h-8 text-accent" />
                        </div>
                        
                        <h4 className="font-semibold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                          {cert.name}
                        </h4>
                        <p className="text-muted-foreground text-sm mb-3">{cert.description}</p>
                        
                        <div className="space-y-2">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-sm text-muted-foreground">Issued by:</span>
                            <span className="text-sm font-medium">{cert.issuer}</span>
                          </div>
                          <Badge variant="outline">{cert.year}</Badge>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              {/* Statistics Tab */}
              <TabsContent value="stats" className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                    By the Numbers
                  </h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Our achievements and capabilities reflected in the numbers that matter most to our clients and partners.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {keyStats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <Card className="p-6 hover:shadow-lg transition-all duration-300">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                          <stat.icon className="w-6 h-6 text-accent" />
                        </div>
                        <div className="text-2xl font-bold text-accent mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                          {stat.number}
                        </div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Additional insights */}
                <div className="mt-8">
                  <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
                    <div className="text-center">
                      <h4 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Industry Leadership
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div>
                          <div className="text-3xl font-bold text-accent mb-2">Top 5</div>
                          <div className="text-sm text-muted-foreground">Textile manufacturers in North America</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-accent mb-2">99.8%</div>
                          <div className="text-sm text-muted-foreground">Client satisfaction rate</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-accent mb-2">$500M+</div>
                          <div className="text-sm text-muted-foreground">Annual revenue</div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
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
              <span className="text-sm text-muted-foreground">info@globaltextiles.com</span>
            </div>
          </div>
          
          <div className="flex gap-3">
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="w-4 h-4" />
              Company Profile
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <ExternalLink className="w-4 h-4" />
              Virtual Tour
            </Button>
            <Button onClick={onClose} className="gap-2">
              <CheckCircle className="w-4 h-4" />
              Continue Exploring
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}