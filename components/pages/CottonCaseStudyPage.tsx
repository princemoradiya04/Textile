import { CaseStudyDetailPage } from './CaseStudyDetailPage';

const cottonCaseStudy = {
  id: '1',
  title: 'Cotton Combed 40s: Handfeel & Pilling Reduction for Fashion Basics',
  category: 'Cotton',
  valueStatement: 'We helped a global basics brand improve softness and durability without changing retail price points, using a combed 40s cotton yarn and controlled twist.',
  heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop',
  client: {
    type: 'Global fashion basics brand',
    region: 'EU & North America',
    useCase: 'Year-round tees, high repeat orders',
    volume: '250k units per quarter'
  },
  challenge: [
    'High pilling returns in darker shades affecting customer satisfaction',
    'Variation in handfeel across different production lots',
    'Lead times slipping during seasonal peaks due to quality issues',
    'Need to maintain competitive pricing while improving quality'
  ],
  solution: [
    'Switched to combed 40s cotton with specified twist and controlled Uster CV%',
    'Enforced shade continuity via tighter lab-dip delta E targets',
    'Added mid-line QC for pilling and burst strength testing',
    'Implemented pre-approved color matching system for faster turnaround',
    'Established dedicated production line for consistent handfeel',
    'Integrated automated quality monitoring at key production stages'
  ],
  outcomes: [
    {
      metric: 'Pilling Defects',
      value: '−32%',
      description: 'Significant reduction in pilling-related returns vs. previous 2 seasons'
    },
    {
      metric: 'Repeat Orders',
      value: '+18%',
      description: 'Increased customer satisfaction led to higher repeat business after first 2 drops'
    },
    {
      metric: 'Time to Market',
      value: '6 weeks',
      description: 'Rapid pilot to full rollout with 99% on-time dispatch rate'
    }
  ],
  sustainability: [
    'OEKO-TEX certified dyes ensuring safe textile production',
    'Water recycling system applied in finishing processes',
    'Reduced waste through improved first pass quality rates',
    'Energy-efficient combing process reducing overall carbon footprint'
  ],
  testimonial: {
    quote: 'The improvement in handfeel and durability has been remarkable. Our return rates dropped significantly, and customers are noticing the quality difference.',
    author: 'Sarah Martinez',
    title: 'Head of Product Development',
    company: 'Global Fashion Basics Co.'
  },
  relatedStudies: [
    {
      id: '4',
      title: 'Cotton/Poly 60/40: Balanced Handfeel & Quick Dry for Athleisure',
      category: 'Blended',
      image: 'https://images.unsplash.com/photo-1503341455225-b2a0b56c3d88?w=800&h=600&fit=crop',
      slug: '/case-studies/cotton-poly-6040-athleisure'
    },
    {
      id: '2',
      title: 'Fine Merino Blend: Warmth Without Bulk for Premium Knitwear',
      category: 'Wool',
      image: 'https://images.unsplash.com/photo-1615887417538-b5ac6e0d27c9?w=800&h=600&fit=crop',
      slug: '/case-studies/merino-blend-knitwear'
    },
    {
      id: '6',
      title: 'Rapid Capsule Launch: Concept-to-Store in 28 Days',
      category: 'Speed-to-Market',
      image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&h=600&fit=crop',
      slug: '/case-studies/rapid-capsule-28-days'
    }
  ]
};

export function CottonCaseStudyPage() {
  return <CaseStudyDetailPage caseStudy={cottonCaseStudy} />;
}