import { CaseStudyDetailPage } from './CaseStudyDetailPage';

const merinoCaseStudy = {
  id: '2',
  title: 'Fine Merino Blend: Warmth Without Bulk for Premium Knitwear',
  category: 'Wool',
  valueStatement: 'Delivered thermal comfort at lighter GSM for a premium knitwear brand, reducing returns while improving profit margins through optimized material usage.',
  heroImage: 'https://images.unsplash.com/photo-1615887417538-b5ac6e0d27c9?w=1200&h=800&fit=crop',
  client: {
    type: 'Premium knitwear brand',
    region: 'European market focus',
    useCase: 'Winter collections, luxury knitwear',
    volume: '150k pieces annually'
  },
  challenge: [
    'Customer complaints about itchiness in traditional wool garments',
    'Bulky appearance compromising the premium aesthetic',
    'High material costs impacting profit margins',
    'Inconsistent thermal performance across different weights'
  ],
  solution: [
    'Developed fine merino blend with optimized micron count for softness',
    'Engineered yarn structure for thermal efficiency at lower GSM',
    'Implemented specialized washing and finishing processes',
    'Created weight-specific thermal performance standards',
    'Established supplier partnerships for consistent fine merino supply',
    'Integrated testing protocols for itch factor and thermal properties'
  ],
  outcomes: [
    {
      metric: 'Itchiness Returns',
      value: '−22%',
      description: 'Significant reduction in customer complaints and returns related to skin irritation'
    },
    {
      metric: 'Material Efficiency',
      value: '+15%',
      description: 'Improved profit margins through reduced material usage while maintaining warmth'
    },
    {
      metric: 'On-time Delivery',
      value: '99.2%',
      description: 'Consistent production schedule with optimized supply chain management'
    }
  ],
  sustainability: [
    'Mulesing-free merino wool sourcing for ethical production',
    'Reduced water usage in washing processes by 25%',
    'Biodegradable natural fiber composition',
    'Local supplier partnerships reducing transportation carbon footprint'
  ],
  testimonial: {
    quote: 'The fine merino blend has transformed our winter collection. Customers love the softness and warmth without the bulk, and our margins have improved significantly.',
    author: 'Alessandro Rossi',
    title: 'Creative Director',
    company: 'Luxury Knitwear Italia'
  },
  relatedStudies: [
    {
      id: '1',
      title: 'Cotton Combed 40s: Handfeel & Pilling Reduction for Fashion Basics',
      category: 'Cotton',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      slug: '/case-studies/cotton-40s-combed-fashion-basics'
    },
    {
      id: '7',
      title: 'Hotel Linen Program: 30% Longer Life Through Twill Weave',
      category: 'Blended',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
      slug: '/case-studies/hospitality-twill-linen'
    },
    {
      id: '5',
      title: 'Dyehouse Optimization: −38% Water, +40% Renewable Energy',
      category: 'Sustainability',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      slug: '/case-studies/dyehouse-sustainability-optimization'
    }
  ]
};

export function MerinoCaseStudyPage() {
  return <CaseStudyDetailPage caseStudy={merinoCaseStudy} />;
}