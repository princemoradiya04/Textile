import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { 
  Shield, 
  Award, 
  CheckCircle, 
  FileText, 
  Globe, 
  Leaf,
  Factory,
  Users,
  Target,
  TrendingUp,
  Download,
  ExternalLink,
  Zap,
  Eye,
  Thermometer,
  Scissors,
  Palette,
  Beaker
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const certifications = [
  {
    id: 'oeko-tex-100',
    name: 'OEKO-TEX Standard 100',
    icon: <Shield className="w-6 h-6" />,
    category: 'Product Safety',
    description: 'Ensures harmful substances are kept below levels that are harmless to human health',
    benefits: [
      'Tests for over 100 harmful substances',
      'Independent laboratory testing',
      'Consumer confidence and safety',
      'Global recognition and acceptance'
    ],
    validUntil: '2025-12-31',
    certificateNumber: 'OTX-2024-001547',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&crop=entropy'
  },
  {
    id: 'gots',
    name: 'Global Organic Textile Standard (GOTS)',
    icon: <Leaf className="w-6 h-6" />,
    category: 'Environmental & Social',
    description: 'Leading standard for organic fibers with environmental and social requirements',
    benefits: [
      'Organic fiber certification',
      'Environmental compliance',
      'Social workplace standards',
      'Supply chain transparency'
    ],
    validUntil: '2025-08-15',
    certificateNumber: 'GOTS-GL-2024-7821',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop&crop=entropy'
  },
  {
    id: 'grs',
    name: 'Global Recycled Standard (GRS)',
    icon: <Globe className="w-6 h-6" />,
    category: 'Sustainability',
    description: 'International standard for recycled content verification and supply chain requirements',
    benefits: [
      'Recycled content verification',
      'Supply chain traceability',
      'Social and environmental practices',
      'Chemical restrictions compliance'
    ],
    validUntil: '2025-06-30',
    certificateNumber: 'GRS-2024-3456',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=300&fit=crop&crop=entropy'
  },
  {
    id: 'iso-9001',
    name: 'ISO 9001:2015',
    icon: <Award className="w-6 h-6" />,
    category: 'Quality Management',
    description: 'International standard for quality management systems',
    benefits: [
      'Consistent quality processes',
      'Continuous improvement focus',
      'Customer satisfaction enhancement',
      'Operational efficiency'
    ],
    validUntil: '2026-03-20',
    certificateNumber: 'ISO9001-2024-GTX',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&crop=entropy'
  },
  {
    id: 'iso-14001',
    name: 'ISO 14001:2015',
    icon: <Globe className="w-6 h-6" />,
    category: 'Environmental Management',
    description: 'International standard for environmental management systems',
    benefits: [
      'Environmental impact reduction',
      'Regulatory compliance',
      'Resource efficiency',
      'Environmental performance monitoring'
    ],
    validUntil: '2026-03-20',
    certificateNumber: 'ISO14001-2024-GTX',
    image: 'https://images.unsplash.com/photo-1569163139610-de47f4fa1f0a?w=400&h=300&fit=crop&crop=entropy'
  },
  {
    id: 'cradle-to-cradle',
    name: 'Cradle to Cradle Certified',
    icon: <TrendingUp className="w-6 h-6" />,
    category: 'Circular Economy',
    description: 'Multi-attribute eco-label that assesses products across five categories',
    benefits: [
      'Material health assessment',
      'Renewable energy usage',
      'Water stewardship',
      'Social fairness evaluation'
    ],
    validUntil: '2025-11-10',
    certificateNumber: 'C2C-2024-7890',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop&crop=entropy'
  }
];

const testingProcedures = [
  {
    name: 'Fiber Content Analysis',
    icon: <Eye className="w-5 h-5" />,
    description: 'Precise identification and quantification of fiber content using microscopic and chemical analysis',
    methods: ['Optical microscopy', 'Chemical dissolution', 'FTIR spectroscopy'],
    standards: ['AATCC 20A', 'ISO 1833', 'ASTM D629']
  },
  {
    name: 'Physical Properties Testing',
    icon: <Thermometer className="w-5 h-5" />,
    description: 'Comprehensive evaluation of yarn strength, elongation, and dimensional stability',
    methods: ['Tensile strength testing', 'Twist measurement', 'Evenness testing'],
    standards: ['ASTM D2256', 'ISO 2061', 'USTER Statistics']
  },
  {
    name: 'Colorfastness Assessment',
    icon: <Palette className="w-5 h-5" />,
    description: 'Evaluation of color retention under various conditions including wash, light, and perspiration',
    methods: ['Wash fastness', 'Light fastness', 'Rubbing fastness'],
    standards: ['ISO 105-C06', 'ISO 105-B02', 'AATCC 8']
  },
  {
    name: 'Chemical Analysis',
    icon: <Beaker className="w-5 h-5" />,
    description: 'Detection and quantification of chemical substances and compliance with safety standards',
    methods: ['Formaldehyde testing', 'Heavy metals analysis', 'pH measurement'],
    standards: ['ISO 14184-1', 'OEKO-TEX Standard 100', 'AATCC 81']
  },
  {
    name: 'Performance Evaluation',
    icon: <Zap className="w-5 h-5" />,
    description: 'Assessment of functional properties including moisture management and durability',
    methods: ['Abrasion resistance', 'Moisture wicking', 'Thermal properties'],
    standards: ['ISO 12947', 'AATCC 195', 'ISO 11092']
  },
  {
    name: 'Dimensional Stability',
    icon: <Scissors className="w-5 h-5" />,
    description: 'Measurement of shrinkage and distortion properties under various conditions',
    methods: ['Wash shrinkage', 'Steam shrinkage', 'Relaxation shrinkage'],
    standards: ['AATCC 135', 'ISO 6330', 'AATCC 179']
  }
];

const qualityMetrics = [
  { label: 'Defect Rate', value: '<0.1%', icon: <Target className="w-4 h-4" /> },
  { label: 'Customer Satisfaction', value: '98.7%', icon: <Users className="w-4 h-4" /> },
  { label: 'On-Time Delivery', value: '99.2%', icon: <CheckCircle className="w-4 h-4" /> },
  { label: 'Process Capability (Cpk)', value: '>1.67', icon: <TrendingUp className="w-4 h-4" /> }
];

const documents = [
  {
    name: 'Quality Management Manual',
    type: 'PDF',
    size: '2.8 MB',
    description: 'Comprehensive guide to our quality management system and procedures'
  },
  {
    name: 'Testing Procedures Handbook',
    type: 'PDF',
    size: '4.2 MB',
    description: 'Detailed testing methodologies and standards for all product categories'
  },
  {
    name: 'Certification Registry',
    type: 'PDF',
    size: '1.5 MB',
    description: 'Current certificates and compliance documentation'
  },
  {
    name: 'Supplier Quality Requirements',
    type: 'PDF',
    size: '2.1 MB',
    description: 'Quality standards and requirements for our supplier network'
  }
];

export function QualityStandardsPage() {
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
                <Shield className="w-8 h-8 text-accent-foreground" />
              </div>
            </div>
            <h1 className="mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Quality Standards & Certifications
            </h1>
            <p className="text-body-lg text-muted-foreground mb-8 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Our commitment to excellence is demonstrated through rigorous quality standards, 
              comprehensive testing procedures, and internationally recognized certifications that 
              ensure every product meets the highest benchmarks for safety, sustainability, and performance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Download className="w-4 h-4 mr-2" />
                Download Quality Manual
              </Button>
              <Button variant="outline">
                <FileText className="w-4 h-4 mr-2" />
                View Certificates
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quality Metrics Section */}
      <section className="section-padding-responsive">
        <div className="container-100">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Quality Performance Metrics
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Key performance indicators that demonstrate our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-accent">
                        {metric.icon}
                      </div>
                    </div>
                    <div className="mb-2 text-2xl font-bold text-accent" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {metric.value}
                    </div>
                    <p className="text-sm text-muted-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {metric.label}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-padding-responsive bg-muted/30">
        <div className="container-100">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              International Certifications
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Our comprehensive certification portfolio demonstrates our commitment to quality, 
              sustainability, and social responsibility across all aspects of our operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <ImageWithFallback
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/90 text-primary">
                        {cert.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                      <div className="text-primary">
                        {cert.icon}
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {cert.name}
                    </CardTitle>
                    <CardDescription style={{ fontFamily: 'Inter, sans-serif' }}>
                      {cert.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Key Benefits:
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {cert.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                              <CheckCircle className="w-3 h-3 text-accent mt-0.5 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Separator />
                      
                      <div className="text-xs text-muted-foreground space-y-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                        <div>Certificate: {cert.certificateNumber}</div>
                        <div>Valid until: {cert.validUntil}</div>
                      </div>
                      
                      <Button variant="outline" size="sm" className="w-full">
                        <ExternalLink className="w-3 h-3 mr-2" />
                        View Certificate
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Procedures Section */}
      <section className="section-padding-responsive">
        <div className="container-100">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Comprehensive Testing Procedures
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Our state-of-the-art testing laboratory employs advanced methodologies and international 
              standards to ensure product quality and compliance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testingProcedures.map((procedure, index) => (
              <motion.div
                key={procedure.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <div className="text-accent">
                          {procedure.icon}
                        </div>
                      </div>
                      <CardTitle className="text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {procedure.name}
                      </CardTitle>
                    </div>
                    <CardDescription style={{ fontFamily: 'Inter, sans-serif' }}>
                      {procedure.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Testing Methods:
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {procedure.methods.map((method, idx) => (
                            <li key={idx} className="flex items-start gap-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                              <CheckCircle className="w-3 h-3 text-accent mt-0.5 flex-shrink-0" />
                              {method}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Standards Applied:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {procedure.standards.map((standard, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {standard}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Management System */}
      <section className="section-padding-responsive bg-muted/30">
        <div className="container-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <Badge className="mb-4">Quality Management System</Badge>
                <h2 className="mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Continuous Improvement Culture
                </h2>
                <p className="text-muted-foreground mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Our quality management system is built on the foundation of continuous improvement, 
                  customer focus, and evidence-based decision making. We employ advanced statistical 
                  process control methods and lean manufacturing principles to ensure consistent 
                  quality across all our operations.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: 'Process Control',
                    description: 'Real-time monitoring and control of critical process parameters',
                    icon: <Factory className="w-5 h-5" />
                  },
                  {
                    title: 'Customer Focus',
                    description: 'Voice of customer integration into all quality improvement initiatives',
                    icon: <Users className="w-5 h-5" />
                  },
                  {
                    title: 'Data-Driven Decisions',
                    description: 'Statistical analysis and trend monitoring for continuous improvement',
                    icon: <TrendingUp className="w-5 h-5" />
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-accent">
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] relative overflow-hidden rounded-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=450&fit=crop&crop=entropy"
                  alt="Quality control laboratory"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Documentation & Downloads */}
      <section className="section-padding-responsive">
        <div className="container-100">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Quality Documentation
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Access our comprehensive quality documentation, procedures, and certification materials.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {documents.map((doc, index) => (
              <motion.div
                key={doc.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="font-semibold mb-1 group-hover:text-accent transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                              {doc.name}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                              {doc.description}
                            </p>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Badge variant="outline" className="text-xs">
                                {doc.type}
                              </Badge>
                              <span>{doc.size}</span>
                            </div>
                          </div>
                          <Download className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding-responsive bg-gradient-to-br from-primary to-primary-800 text-primary-foreground">
        <div className="container-100">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
              Questions About Our Quality Standards?
            </h2>
            <p className="text-primary-100 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
              Our quality assurance team is ready to discuss your specific requirements and 
              answer any questions about our standards, certifications, or testing procedures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Users className="w-4 h-4 mr-2" />
                Contact Quality Team
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                <FileText className="w-4 h-4 mr-2" />
                Request Lab Tour
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}