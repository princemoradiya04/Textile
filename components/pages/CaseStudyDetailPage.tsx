import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { ArrowRight, Download, CheckCircle, Clock, Users, Target, TrendingUp } from 'lucide-react';

interface CaseStudyDetailProps {
  caseStudy: {
    id: string;
    title: string;
    category: string;
    valueStatement: string;
    heroImage: string;
    client: {
      type: string;
      region: string;
      useCase: string;
      volume: string;
    };
    challenge: string[];
    solution: string[];
    outcomes: {
      metric: string;
      value: string;
      description: string;
    }[];
    sustainability?: string[];
    testimonial?: {
      quote: string;
      author: string;
      title: string;
      company: string;
    };
    relatedStudies: {
      id: string;
      title: string;
      category: string;
      image: string;
      slug: string;
    }[];
  };
}

export function CaseStudyDetailPage({ caseStudy }: CaseStudyDetailProps) {
  const processSteps = [
    { icon: Target, title: 'Lab Sampling', description: 'Initial fiber testing and optimization' },
    { icon: Users, title: 'Pilot Run', description: 'Small-scale production validation' },
    { icon: TrendingUp, title: 'Bulk Production', description: 'Full-scale manufacturing' },
    { icon: CheckCircle, title: 'QC & Shade Continuity', description: 'Quality assurance and consistency checks' },
    { icon: Clock, title: 'Dispatch', description: 'On-time delivery and logistics' }
  ];

  const handleQuoteRequest = () => {
    console.log('Quote request triggered');
  };

  const handleContactProduction = () => {
    console.log('Contact production triggered');
  };

  const handleDownloadSpec = () => {
    console.log('Download spec sheet');
  };

  const handleDownloadGuide = () => {
    console.log('Download care guide');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section-padding-responsive bg-gradient-to-b from-secondary-50 to-background">
        <div className="container-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Badge variant="secondary" className="mb-4 bg-accent-100 text-accent-800">
                {caseStudy.category}
              </Badge>
              <h1 className="mb-6">{caseStudy.title}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                {caseStudy.valueStatement}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={handleQuoteRequest}>
                  Start a Similar Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" onClick={handleContactProduction}>
                  Talk to Production
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={caseStudy.heroImage}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client & Context */}
      <section className="section-padding-responsive border-b border-border">
        <div className="container-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="mb-8">Client & Context</h2>
              <div className="space-y-6">
                <div>
                  <h4 className="text-accent mb-2">Client Type</h4>
                  <p className="text-muted-foreground">{caseStudy.client.type}</p>
                </div>
                <div>
                  <h4 className="text-accent mb-2">Region</h4>
                  <p className="text-muted-foreground">{caseStudy.client.region}</p>
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-6 mt-12 md:mt-16">
                <div>
                  <h4 className="text-accent mb-2">Use Case</h4>
                  <p className="text-muted-foreground">{caseStudy.client.useCase}</p>
                </div>
                <div>
                  <h4 className="text-accent mb-2">Volume/Scale</h4>
                  <p className="text-muted-foreground">{caseStudy.client.volume}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="section-padding-responsive bg-muted-50">
        <div className="container-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">Challenge</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudy.challenge.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-white shadow-sm">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-destructive mt-3"></div>
                  <p className="text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="section-padding-responsive">
        <div className="container-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">Solution</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudy.solution.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg border border-accent-200 bg-accent-50">
                  <CheckCircle className="flex-shrink-0 w-5 h-5 text-accent mt-1" />
                  <p className="text-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Highlights */}
      <section className="section-padding-responsive bg-primary text-primary-foreground">
        <div className="container-100">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">Process Highlights</h2>
            <p className="text-primary-200 max-w-2xl mx-auto">
              Our systematic approach ensures consistent quality and measurable results at every stage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-accent-foreground mb-4">
                  <step.icon className="w-8 h-8" />
                </div>
                <h4 className="text-white mb-2">{step.title}</h4>
                <p className="text-primary-200 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Measured Outcomes */}
      <section className="section-padding-responsive">
        <div className="container-100">
          <div className="text-center mb-12">
            <h2 className="mb-4">Measured Outcomes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quantified results that demonstrate the impact of our solutions on your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudy.outcomes.map((outcome, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-black/5 bg-white shadow-md">
                <div className="text-3xl font-bold text-accent mb-2">{outcome.value}</div>
                <h4 className="mb-3">{outcome.metric}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      {caseStudy.sustainability && (
        <section className="section-padding-responsive bg-secondary-50">
          <div className="container-100">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-center mb-12">Sustainability Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudy.sustainability.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-white shadow-sm">
                    <CheckCircle className="flex-shrink-0 w-5 h-5 text-success mt-1" />
                    <p className="text-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Downloads */}
      <section className="section-padding-responsive border-t border-border">
        <div className="container-100">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="mb-8">Technical Documentation</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="outline" onClick={handleDownloadSpec}>
                <Download className="mr-2 h-4 w-4" />
                Request Spec Sheet (PDF)
              </Button>
              <Button variant="outline" onClick={handleDownloadGuide}>
                <Download className="mr-2 h-4 w-4" />
                Download Care Guide (PDF)
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {caseStudy.testimonial && (
        <section className="section-padding-responsive bg-muted-50">
          <div className="container-100">
            <div className="max-w-4xl mx-auto text-center">
              <blockquote className="text-xl leading-relaxed text-foreground mb-8">
                "{caseStudy.testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-medium text-foreground">{caseStudy.testimonial.author}</p>
                <p className="text-muted-foreground">
                  {caseStudy.testimonial.title}, {caseStudy.testimonial.company}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Case Studies */}
      <section className="section-padding-responsive">
        <div className="container-100">
          <h2 className="text-center mb-12">Related Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudy.relatedStudies.map((study) => (
              <div
                key={study.id}
                className="group rounded-xl border border-black/5 bg-white shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden cursor-pointer"
                onClick={() => {
                  if ((window as any).navigateToCaseStudy) {
                    (window as any).navigateToCaseStudy(study.slug);
                  } else {
                    window.location.href = study.slug;
                  }
                }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <Badge variant="secondary" className="mb-3 bg-accent-100 text-accent-800">
                    {study.category}
                  </Badge>
                  <h4 className="mb-4 line-clamp-2 group-hover:text-accent transition-colors duration-200">
                    {study.title}
                  </h4>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-accent hover:text-accent-700 group-hover:translate-x-1 transition-all duration-200"
                  >
                    Read case study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-responsive bg-primary text-primary-foreground">
        <div className="container-100">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-white mb-6">Ready to achieve similar results?</h2>
            <p className="text-primary-200 mb-8 leading-relaxed">
              Let's discuss how we can help optimize your textile production with measurable outcomes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent-700"
                onClick={handleQuoteRequest}
              >
                Start a Similar Project
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
    </div>
  );
}