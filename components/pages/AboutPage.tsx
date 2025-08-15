import { motion } from 'framer-motion';
import { SectionWrapper } from '../SectionWrapper';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { MapPin, Users, Award, Globe, Factory, Leaf, ChevronRight, Mail, Phone, MapIcon } from 'lucide-react';
import { QuoteRequestModal } from '../QuoteRequestModal';
import { ConsultationSchedulingModal } from '../ConsultationSchedulingModal';
import { useState } from 'react';

// Heritage timeline data
const timelineData = [
  {
    year: '1970',
    title: 'Founded',
    description: 'Global Spinners established with a single mill in Mumbai, beginning our textile legacy.'
  },
  {
    year: '1985',
    title: 'First Export',
    description: 'Expanded internationally with first exports to the Middle East, marking global presence.'
  },
  {
    year: '1995',
    title: 'Technology Upgrade',
    description: 'Invested in advanced spinning technology, increasing capacity and quality standards.'
  },
  {
    year: '2005',
    title: 'Sustainability Initiative',
    description: 'Launched eco-friendly production processes and renewable energy adoption.'
  },
  {
    year: '2015',
    title: 'Digital Transformation',
    description: 'Implemented Industry 4.0 technologies for enhanced efficiency and traceability.'
  },
  {
    year: '2020',
    title: 'Global Recognition',
    description: 'Achieved international certifications and expanded to 35+ countries worldwide.'
  },
  {
    year: '2025',
    title: 'Future Vision',
    description: 'Leading the textile industry towards carbon neutrality and innovative fiber solutions.'
  }
];

// Leadership team data
const leadershipData = [
  {
    name: 'Rajesh Patel',
    position: 'Chairman & CEO',
    bio: 'With over 30 years in textile manufacturing, Rajesh has led Global to become a international leader in sustainable textile production.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    achievements: ['Industry Pioneer Award 2022', 'Sustainability Leadership Recognition']
  },
  {
    name: 'Priya Sharma',
    position: 'Chief Operating Officer',
    bio: 'Priya oversees global operations across all manufacturing facilities, ensuring quality and efficiency at every stage.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b4e10b9e?w=400&h=400&fit=crop&crop=face',
    achievements: ['Operations Excellence Award', 'Women in Manufacturing Leadership']
  },
  {
    name: 'David Chen',
    position: 'Head of Innovation',
    bio: 'David leads our R&D initiatives, developing next-generation fibers and sustainable manufacturing processes.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    achievements: ['Textile Innovation Award', 'Sustainability Technology Pioneer']
  },
  {
    name: 'Sarah Williams',
    position: 'Global Sales Director',
    bio: 'Sarah manages international client relationships and expansion strategies across 35+ countries.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
    achievements: ['International Trade Excellence', 'Client Relationship Leadership']
  }
];

// Global reach data
const globalReachData = [
  { region: 'Asia Pacific', countries: 12, percentage: 45 },
  { region: 'Europe', countries: 8, percentage: 25 },
  { region: 'Middle East & Africa', countries: 10, percentage: 20 },
  { region: 'Americas', countries: 5, percentage: 10 }
];

export function AboutPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  const handleScrollToJourney = () => {
    const journeySection = document.getElementById('our-journey');
    if (journeySection) {
      journeySection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleScrollToTeam = () => {
    const teamSection = document.getElementById('meet-our-team');
    if (teamSection) {
      teamSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section with Vintage Mill + Modern Factory */}
      <SectionWrapper className="min-h-screen section-padding-responsive bg-gradient-mesh relative overflow-hidden flex items-center">
        <div className="container-100 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <Badge variant="secondary" className="w-fit">
              <Factory className="w-4 h-4 mr-2" />
              Est. 1970 • 55+ Years of Excellence
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-display" style={{ fontFamily: 'Playfair Display, serif' }}>
                Weaving Heritage with
                <span className="text-gradient-accent block">Modern Innovation</span>
              </h1>
              
              <p className="text-body-lg text-muted-foreground leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                From a single mill in Mumbai to a global textile powerhouse serving 35+ countries, 
                Global Spinners & Textiles has been at the forefront of sustainable manufacturing 
                and premium quality production for over five decades.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group" onClick={handleScrollToJourney}>
                Our Story
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" onClick={handleScrollToTeam}>
                <Users className="w-4 h-4 mr-2" />
                Meet Our Team
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent" style={{ fontFamily: 'Playfair Display, serif' }}>35+</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent" style={{ fontFamily: 'Playfair Display, serif' }}>55+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent" style={{ fontFamily: 'Playfair Display, serif' }}>5M+</div>
                <div className="text-sm text-muted-foreground">Yards Monthly</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4 h-[600px]">
              <div className="space-y-4">
                <div className="relative h-2/3 rounded-2xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=800&fit=crop&crop=entropy"
                    alt="Vintage textile mill from 1970s showing traditional manufacturing"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <Badge className="absolute bottom-4 left-4 bg-white/90 text-primary border-0">
                    Heritage 1970
                  </Badge>
                </div>
                <div className="relative h-1/3 rounded-2xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1460518451285-97b6aa326961?w=800&h=400&fit=crop&crop=entropy"
                    alt="Traditional textile workers operating vintage machinery"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-1/3 rounded-2xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=400&fit=crop&crop=entropy"
                    alt="Modern automated textile manufacturing facility"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="relative h-2/3 rounded-2xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=800&h=800&fit=crop&crop=entropy"
                    alt="State-of-the-art modern textile factory with advanced technology"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <Badge className="absolute bottom-4 left-4 bg-white/90 text-primary border-0">
                    Innovation 2025
                  </Badge>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full animate-float" />
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Heritage Timeline Section */}
      <SectionWrapper className="section-padding-responsive bg-white" id="our-journey">
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
              Our Journey
            </Badge>
            <h2 className="text-heading mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Heritage Timeline
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Five and a half decades of continuous innovation, growth, and commitment to textile excellence.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-accent/20 via-accent to-accent/20 h-full" />

            <div className="space-y-16">
              {timelineData.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? '' : 'lg:text-right'
                  }`}
                >
                  <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <Card className="p-8 rounded-xl border border-black/5 bg-white shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                            {item.year}
                          </Badge>
                          <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                        </div>
                        <h3 className="text-xl font-semibold" style={{ fontFamily: 'Playfair Display, serif' }}>
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {item.description}
                        </p>
                      </div>
                    </Card>
                  </div>

                  <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} hidden lg:block`}>
                    <div className="relative">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto shadow-lg">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                          <div className="w-3 h-3 bg-accent rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Mission & Vision Section */}
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
              <Leaf className="w-4 h-4 mr-2" />
              Our Purpose
            </Badge>
            <h2 className="text-heading mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Mission & Vision
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 rounded-xl border border-black/5 bg-white shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 h-full">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Factory className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Our Mission
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                    To deliver premium quality textiles through innovative, sustainable manufacturing 
                    processes while maintaining the highest standards of craftsmanship. We are committed 
                    to creating value for our partners, supporting local communities, and preserving 
                    the environment for future generations.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-sm text-muted-foreground">Premium Quality Standards</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-sm text-muted-foreground">Sustainable Manufacturing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-sm text-muted-foreground">Community Support</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 rounded-xl border border-black/5 bg-white shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 h-full">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Our Vision
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                    To be the world's most trusted and innovative textile manufacturing partner, 
                    leading the industry towards carbon neutrality while setting new standards 
                    for quality, sustainability, and technological advancement in textile production.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm text-muted-foreground">Global Industry Leadership</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm text-muted-foreground">Carbon Neutral Operations</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm text-muted-foreground">Technological Innovation</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Leadership Team Section */}
      <SectionWrapper className="section-padding-responsive bg-white" id="meet-our-team">
        <div className="container-100">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">
              <Users className="w-4 h-4 mr-2" />
              Leadership
            </Badge>
            <h2 className="text-heading mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Meet Our Team
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Visionary leaders driving innovation, sustainability, and excellence in textile manufacturing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipData.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="rounded-xl border border-black/5 bg-white shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                  <div className="relative h-64">
                    <ImageWithFallback
                      src={leader.image}
                      alt={`${leader.name} - ${leader.position}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg font-semibold text-white mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {leader.name}
                      </h3>
                      <p className="text-sm text-white/90" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {leader.position}
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {leader.bio}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="text-xs font-semibold text-primary uppercase tracking-wide">
                        Key Achievements
                      </h4>
                      {leader.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Award className="w-3 h-3 text-accent" />
                          <span className="text-xs text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Global Reach Section */}
      <SectionWrapper className="section-padding-responsive bg-gradient-to-br from-accent-50 via-white to-primary-50">
        <div className="container-100">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">
              <MapPin className="w-4 h-4 mr-2" />
              Global Presence
            </Badge>
            <h2 className="text-heading mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Global Reach
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Serving textile manufacturers and fashion brands across 35+ countries with premium quality products.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-white rounded-2xl p-8 shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=800&h=600&fit=crop&crop=entropy"
                  alt="World map showing Global Spinners international presence across 35+ countries"
                  className="w-full h-96 object-cover rounded-xl"
                />
                <div className="absolute inset-8 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
                
                {/* Map pins overlay */}
                <div className="absolute inset-8 rounded-xl">
                  <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-accent rounded-full animate-pulse shadow-lg" title="Mumbai - Headquarters" />
                  <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary rounded-full animate-pulse shadow-lg" title="Asia Pacific Markets" />
                  <div className="absolute top-1/4 left-1/2 w-3 h-3 bg-accent rounded-full animate-pulse shadow-lg" title="European Markets" />
                  <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-primary rounded-full animate-pulse shadow-lg" title="Middle East & Africa" />
                  <div className="absolute top-1/2 left-1/6 w-3 h-3 bg-accent rounded-full animate-pulse shadow-lg" title="Americas" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {globalReachData.map((region, index) => (
                <div key={region.region} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {region.region}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">
                        {region.countries} countries
                      </span>
                      <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                        {region.percentage}%
                      </Badge>
                    </div>
                  </div>
                  <div className="w-full bg-muted-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${region.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-accent to-primary h-2 rounded-full"
                    />
                  </div>
                </div>
              ))}

              <Card className="p-6 rounded-xl border border-black/5 bg-white shadow-md mt-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                      35+
                    </div>
                    <div className="text-sm text-muted-foreground">Countries Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                      500+
                    </div>
                    <div className="text-sm text-muted-foreground">Global Partners</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Work with Us CTA Section */}
      <SectionWrapper className="section-padding-responsive bg-primary text-primary-foreground">
        <div className="container-100">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-heading mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ready to Work with Us?
            </h2>
            <p className="text-body-lg mb-8 opacity-90" style={{ fontFamily: 'Inter, sans-serif' }}>
              Join our network of satisfied clients worldwide. From premium cotton yarns to innovative 
              synthetic blends, we deliver textile solutions that exceed expectations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold">Email Us</h3>
                <p className="text-sm opacity-90">info@globalspinners.com</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold">Call Us</h3>
                <p className="text-sm opacity-90">+91 22 2569 8765</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto">
                  <MapIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold">Visit Us</h3>
                <p className="text-sm opacity-90">Mumbai, India</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="group" onClick={() => setIsQuoteModalOpen(true)}>
                Get Quote
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10" onClick={() => setIsConsultationModalOpen(true)}>
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      <QuoteRequestModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
      
      <ConsultationSchedulingModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
    </motion.div>
  );
}