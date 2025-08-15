import { CaseStudyDetailPage } from './CaseStudyDetailPage';

const sustainabilityCaseStudy = {
  id: '5',
  title: 'Dyehouse Optimization: −38% Water, +40% Renewable Energy',
  category: 'Sustainability',
  valueStatement: 'Achieved significant environmental impact reduction while maintaining consistent shade quality and ensuring full audit compliance for sustainability reporting.',
  heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=800&fit=crop',
  client: {
    type: 'Multi-brand textile manufacturer',
    region: 'South Asia operations',
    useCase: 'High-volume dyeing for multiple brands',
    volume: '2M meters monthly'
  },
  challenge: [
    'High water consumption exceeding sustainability targets',
    'Energy costs impacting competitiveness',
    'Pressure from brands for sustainability compliance',
    'Need to maintain color consistency while reducing environmental impact'
  ],
  solution: [
    'Implemented closed-loop water recycling system with advanced filtration',
    'Installed solar panel array covering 40% of energy requirements',
    'Optimized dyeing process parameters for reduced water and energy usage',
    'Integrated real-time monitoring systems for resource consumption',
    'Established partnerships with renewable energy providers',
    'Created comprehensive sustainability reporting dashboard'
  ],
  outcomes: [
    {
      metric: 'Water Usage',
      value: '−38%',
      description: 'Significant reduction in water consumption per kg of fabric processed'
    },
    {
      metric: 'Renewable Energy',
      value: '40%',
      description: 'Successfully integrated renewable energy sources into production mix'
    },
    {
      metric: 'Audit Compliance',
      value: '100%',
      description: 'Zero non-conformance in third-party sustainability audits'
    }
  ],
  sustainability: [
    'Closed-loop water recycling reducing freshwater dependency',
    'Solar energy integration reducing carbon footprint by 35%',
    'Zero liquid discharge system eliminating wastewater',
    'OEKO-TEX and GOTS certification compliance',
    'Chemical reduction program minimizing environmental impact',
    'Employee training on sustainable practices and monitoring'
  ],
  testimonial: {
    quote: 'The transformation has been remarkable. We are now a sustainability leader in our region while maintaining the quality our brand partners expect.',
    author: 'Dr. Priya Sharma',
    title: 'Head of Sustainability',
    company: 'EcoTextiles Manufacturing Ltd.'
  },
  relatedStudies: [
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
    },
    {
      id: '1',
      title: 'Cotton Combed 40s: Handfeel & Pilling Reduction for Fashion Basics',
      category: 'Cotton',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      slug: '/case-studies/cotton-40s-combed-fashion-basics'
    }
  ]
};

export function SustainabilityCaseStudyPage() {
  return <CaseStudyDetailPage caseStudy={sustainabilityCaseStudy} />;
}