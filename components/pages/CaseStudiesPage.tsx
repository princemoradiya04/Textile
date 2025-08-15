import { useState, useEffect } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { ArrowRight, Filter } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  oneLiner: string;
  metrics: string[];
  heroImage: string;
  slug: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'Cotton Combed 40s: Handfeel & Pilling Reduction for Fashion Basics',
    category: 'Cotton',
    oneLiner: 'Elevated softness and durability for year-round T-shirts at scale.',
    metrics: ['−32% pilling defects', '+18% repeat orders', '6-week pilot → full rollout'],
    heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    slug: '/case-studies/cotton-40s-combed-fashion-basics'
  },
  {
    id: '2',
    title: 'Fine Merino Blend: Warmth Without Bulk for Premium Knitwear',
    category: 'Wool',
    oneLiner: 'Thermal comfort at lighter GSM for a premium silhouette.',
    metrics: ['−22% returns due to itchiness', '+15% margin via reduced material usage', 'On-time delivery 99.2%'],
    heroImage: 'https://images.unsplash.com/photo-1615887417538-b5ac6e0d27c9?w=800&h=600&fit=crop',
    slug: '/case-studies/merino-blend-knitwear'
  },
  {
    id: '3',
    title: 'High-Tenacity Polyester for Workwear: 2× Abrasion Life',
    category: 'Synthetic',
    oneLiner: 'Longer garment life with stable dye fastness under stress.',
    metrics: ['2× Martindale abrasion cycles', 'Color fastness 4–5 rating', 'Lead time cut to 21 days'],
    heroImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
    slug: '/case-studies/ht-polyester-workwear'
  },
  {
    id: '4',
    title: 'Cotton/Poly 60/40: Balanced Handfeel & Quick Dry for Athleisure',
    category: 'Blended',
    oneLiner: 'Everyday comfort with performance drying and shape retention.',
    metrics: ['Dry time −28%', 'Shrinkage within ±1.5%', 'First pass quality 98.7%'],
    heroImage: 'https://images.unsplash.com/photo-1503341455225-b2a0b56c3d88?w=800&h=600&fit=crop',
    slug: '/case-studies/cotton-poly-6040-athleisure'
  },
  {
    id: '5',
    title: 'Dyehouse Optimization: −38% Water, +40% Renewable Energy',
    category: 'Sustainability',
    oneLiner: 'Lower impact, consistent shade lots, and audit-ready reporting.',
    metrics: ['−38% water usage per kg', '40% renewable energy mix', '0 non-conformance in audit'],
    heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
    slug: '/case-studies/dyehouse-sustainability-optimization'
  },
  {
    id: '6',
    title: 'Rapid Capsule Launch: Concept-to-Store in 28 Days',
    category: 'Speed-to-Market',
    oneLiner: 'Compressed development with pre-approved trims and colorways.',
    metrics: ['TAT 28 days', 'Sampling rounds: 2', 'OOS rate < 0.5%'],
    heroImage: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&h=600&fit=crop',
    slug: '/case-studies/rapid-capsule-28-days'
  },
  {
    id: '7',
    title: 'Hotel Linen Program: 30% Longer Life Through Twill Weave',
    category: 'Blended',
    oneLiner: 'High-cycle laundering without losing whiteness or handle.',
    metrics: ['Lifespan +30%', 'Whiteness index maintained 95', 'Claims reduced −42%'],
    heroImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
    slug: '/case-studies/hospitality-twill-linen'
  },
  {
    id: '8',
    title: 'Polyester Tricot for Auto Interiors: Low Shrink, High Consistency',
    category: 'Synthetic',
    oneLiner: 'Heat-set stability and uniform shade for seamless assembly.',
    metrics: ['Shrinkage ≤ 1% at 120°C', 'ΔE < 1.0 between lots', 'Defect rate 0.7%'],
    heroImage: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=800&h=600&fit=crop',
    slug: '/case-studies/poly-tricot-automotive'
  }
];

const categories = ['All', 'Cotton', 'Wool', 'Synthetic', 'Blended', 'Sustainability', 'Speed-to-Market'];
const sortOptions = ['Newest', 'Most Impact', 'A–Z'];

export function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Newest');
  const [filteredStudies, setFilteredStudies] = useState(caseStudies);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    let filtered = selectedCategory === 'All' 
      ? caseStudies 
      : caseStudies.filter(study => study.category === selectedCategory);

    // Sort the filtered results
    if (sortBy === 'A–Z') {
      filtered = filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'Most Impact') {
      // Sort by number of metrics (simple impact measurement)
      filtered = filtered.sort((a, b) => b.metrics.length - a.metrics.length);
    }
    // 'Newest' keeps original order

    setFilteredStudies(filtered);
  }, [selectedCategory, sortBy]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleQuoteRequest = () => {
    // This would trigger the quote request modal
    console.log('Quote request triggered');
  };

  const handleContactProduction = () => {
    // This would navigate to contact page or open contact modal
    console.log('Contact production triggered');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section-padding-responsive bg-gradient-to-b from-secondary-50 to-background">
        <div className="container-100">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="mb-6">Case Studies</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              How we help brands turn fiber into performance, quality, and scale.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Sort Toolbar */}
      <div className={`bg-background border-b border-border transition-all duration-300 ${
        isSticky ? 'sticky top-0 z-50 shadow-md' : ''
      }`}>
        <div className="container-100 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-accent text-accent-foreground shadow-md'
                      : 'bg-muted-100 text-muted-foreground hover:bg-muted-200 hover:text-foreground'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-3">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Sort by</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <section className="section-padding-responsive">
        <div className="container-100">
          {filteredStudies.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No matches found. Try a different filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStudies.map((study) => (
                <div
                  key={study.id}
                  className="group rounded-xl border border-black/5 bg-white shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                >
                  {/* Hero Image */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <ImageWithFallback
                      src={study.heroImage}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category Tag */}
                    <Badge 
                      variant="secondary" 
                      className="mb-3 bg-accent-100 text-accent-800 hover:bg-accent-200"
                    >
                      {study.category}
                    </Badge>

                    {/* Title */}
                    <h3 className="mb-3 line-clamp-2 group-hover:text-accent transition-colors duration-200">
                      {study.title}
                    </h3>

                    {/* One-liner */}
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {study.oneLiner}
                    </p>

                    {/* Metrics */}
                    <div className="space-y-2 mb-6">
                      {study.metrics.slice(0, 3).map((metric, index) => (
                        <div
                          key={index}
                          className="inline-block bg-primary-50 text-primary-800 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                        >
                          {metric}
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Button
                      variant="ghost"
                      className="p-0 h-auto text-accent hover:text-accent-700 group-hover:translate-x-1 transition-all duration-200"
                      onClick={() => {
                        if ((window as any).navigateToCaseStudy) {
                          (window as any).navigateToCaseStudy(study.slug);
                        } else {
                          window.location.href = study.slug;
                        }
                      }}
                    >
                      Read case study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Strip */}
      <section className="section-padding-responsive bg-primary text-primary-foreground">
        <div className="container-100">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-white mb-6">Have a similar challenge? Let's make a plan.</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent-700"
                onClick={handleQuoteRequest}
              >
                Request a Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
                onClick={handleContactProduction}
              >
                Talk to Production
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Block */}
      <section className="py-8 bg-muted-50">
        <div className="container-100">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Global Spinners & Textiles delivers measurable improvements in softness, durability, sustainability, and time-to-market across cotton, wool, synthetic, and blended fabrics. Our case studies demonstrate proven results in reducing defects, improving efficiency, and meeting stringent quality standards for textiles, yarns, sustainability initiatives, and manufacturing excellence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}