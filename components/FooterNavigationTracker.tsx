import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ExternalLink, Eye, Clock, ArrowLeft, Bookmark } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { toast } from './ui/sonner';

interface FooterNavigationTrackerProps {
  onNavigate: (route: string) => void;
  currentPage?: string;
}

interface NavigationEvent {
  id: string;
  timestamp: Date;
  fromPage: string;
  toPage: string;
  linkText: string;
  section: string;
  userIntent: 'explore' | 'contact' | 'learn' | 'purchase';
}

interface BreadcrumbItem {
  name: string;
  route: string;
  icon?: any;
}

interface PageContext {
  title: string;
  description: string;
  category: 'company' | 'products' | 'resources' | 'support';
  estimatedReadTime: string;
  relatedPages: string[];
  businessValue: 'high' | 'medium' | 'low';
  userType: 'manufacturer' | 'designer' | 'buyer' | 'general';
}

const pageContextMap: Record<string, PageContext> = {
  'about': {
    title: 'About Global Textiles',
    description: 'Learn about our 50+ years of textile manufacturing expertise',
    category: 'company',
    estimatedReadTime: '3 min read',
    relatedPages: ['sustainability', 'careers', 'news'],
    businessValue: 'high',
    userType: 'general'
  },
  'sustainability': {
    title: 'Sustainability Commitment',
    description: 'Our environmental initiatives and sustainable practices',
    category: 'company',
    estimatedReadTime: '5 min read',
    relatedPages: ['about', 'products', 'news'],
    businessValue: 'high',
    userType: 'buyer'
  },
  'news': {
    title: 'News & Insights',
    description: 'Latest industry updates and company announcements',
    category: 'company',
    estimatedReadTime: '2 min browse',
    relatedPages: ['about', 'sustainability'],
    businessValue: 'medium',
    userType: 'general'
  },
  'careers': {
    title: 'Career Opportunities',
    description: 'Join our team of textile manufacturing professionals',
    category: 'company',
    estimatedReadTime: '4 min browse',
    relatedPages: ['about', 'sustainability'],
    businessValue: 'medium',
    userType: 'general'
  },
  'cotton-yarns': {
    title: 'Premium Cotton Yarns',
    description: 'Organic and conventional cotton yarns for luxury applications',
    category: 'products',
    estimatedReadTime: '6 min read',
    relatedPages: ['wool-yarns', 'product-catalog', 'contact'],
    businessValue: 'high',
    userType: 'manufacturer'
  },
  'wool-yarns': {
    title: 'Luxury Wool Yarns',
    description: 'Premium wool and wool blend yarns from finest sources',
    category: 'products',
    estimatedReadTime: '6 min read',
    relatedPages: ['cotton-yarns', 'synthetic-yarns', 'product-catalog'],
    businessValue: 'high',
    userType: 'manufacturer'
  },
  'synthetic-yarns': {
    title: 'High-Performance Synthetics',
    description: 'Advanced synthetic yarns with technical properties',
    category: 'products',
    estimatedReadTime: '5 min read',
    relatedPages: ['blended-yarns', 'product-catalog', 'contact'],
    businessValue: 'high',
    userType: 'manufacturer'
  },
  'blended-yarns': {
    title: 'Innovative Blended Yarns',
    description: 'Custom fiber blends combining multiple materials',
    category: 'products',
    estimatedReadTime: '5 min read',
    relatedPages: ['synthetic-yarns', 'custom-solutions', 'product-catalog'],
    businessValue: 'high',
    userType: 'manufacturer'
  },
  'custom-solutions': {
    title: 'Custom Textile Solutions',
    description: 'Tailored manufacturing solutions for unique requirements',
    category: 'products',
    estimatedReadTime: '4 min read',
    relatedPages: ['blended-yarns', 'contact', 'product-catalog'],
    businessValue: 'high',
    userType: 'buyer'
  },
  'product-catalog': {
    title: 'Complete Product Catalog',
    description: 'Browse our comprehensive range of textile products',
    category: 'resources',
    estimatedReadTime: '10 min browse',
    relatedPages: ['cotton-yarns', 'wool-yarns', 'contact'],
    businessValue: 'high',
    userType: 'manufacturer'
  },
  'case-studies': {
    title: 'Success Case Studies',
    description: 'Proven results and client success stories across industries',
    category: 'resources',
    estimatedReadTime: '8 min read',
    relatedPages: ['about', 'sustainability', 'contact'],
    businessValue: 'high',
    userType: 'buyer'
  },
  'technical-support': {
    title: 'Technical Support Center',
    description: 'Comprehensive support resources and expert assistance',
    category: 'support',
    estimatedReadTime: '5 min browse',
    relatedPages: ['contact', 'case-studies', 'product-catalog'],
    businessValue: 'high',
    userType: 'manufacturer'
  },
  'contact': {
    title: 'Contact Our Team',
    description: 'Get in touch for quotes, samples, and technical support',
    category: 'support',
    estimatedReadTime: '2 min',
    relatedPages: ['product-catalog', 'custom-solutions'],
    businessValue: 'high',
    userType: 'buyer'
  }
};

export function FooterNavigationTracker({ onNavigate, currentPage = 'home' }: FooterNavigationTrackerProps) {
  const [navigationHistory, setNavigationHistory] = useState<NavigationEvent[]>([]);
  const [showNavigationPreview, setShowNavigationPreview] = useState(false);
  const [previewTarget, setPreviewTarget] = useState<string | null>(null);
  const [recentPages, setRecentPages] = useState<string[]>([]);
  const [isTrackingEnabled, setIsTrackingEnabled] = useState(true);
  const [showBreadcrumb, setShowBreadcrumb] = useState(false);

  // Track navigation events
  const trackNavigation = (
    toPage: string, 
    linkText: string, 
    section: string, 
    intent: NavigationEvent['userIntent'] = 'explore'
  ) => {
    if (!isTrackingEnabled) return;

    const event: NavigationEvent = {
      id: `nav-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date(),
      fromPage: currentPage,
      toPage,
      linkText,
      section,
      userIntent: intent
    };

    setNavigationHistory(prev => [event, ...prev.slice(0, 49)]); // Keep last 50 events
    
    // Update recent pages
    setRecentPages(prev => {
      const updated = [toPage, ...prev.filter(p => p !== toPage)].slice(0, 5);
      return updated;
    });

    // Analytics simulation
    console.log('Footer Navigation Event:', {
      event_name: 'footer_navigation',
      event_category: 'navigation',
      event_label: `${section}-${linkText}`,
      from_page: currentPage,
      to_page: toPage,
      user_intent: intent,
      timestamp: event.timestamp
    });

    // Show user feedback
    const pageContext = pageContextMap[toPage];
    if (pageContext) {
      toast.success(`Navigating to ${pageContext.title}`, {
        description: `${pageContext.description} • ${pageContext.estimatedReadTime}`,
        duration: 3000,
        action: {
          label: 'Back',
          onClick: () => {
            // Could implement a back navigation here
            console.log('Back button clicked from toast');
          }
        }
      });
    }
  };

  // Enhanced navigation handler with preview and tracking
  const handleEnhancedNavigation = (
    route: string,
    linkText: string,
    section: string,
    options: {
      showPreview?: boolean;
      intent?: NavigationEvent['userIntent'];
      delay?: number;
    } = {}
  ) => {
    const { showPreview = false, intent = 'explore', delay = 0 } = options;

    if (showPreview && pageContextMap[route]) {
      setPreviewTarget(route);
      setShowNavigationPreview(true);
      
      // Auto-hide preview after 5 seconds
      setTimeout(() => {
        setShowNavigationPreview(false);
        setPreviewTarget(null);
      }, 5000);
      
      return;
    }

    // Track the navigation
    trackNavigation(route, linkText, section, intent);

    // Navigate with optional delay
    setTimeout(() => {
      onNavigate(route);
    }, delay);
  };

  // Generate breadcrumb based on navigation history
  const generateBreadcrumb = (): BreadcrumbItem[] => {
    const breadcrumb: BreadcrumbItem[] = [
      { name: 'Home', route: 'home' }
    ];

    if (currentPage !== 'home' && pageContextMap[currentPage]) {
      const context = pageContextMap[currentPage];
      breadcrumb.push({
        name: context.title,
        route: currentPage
      });
    }

    return breadcrumb;
  };

  // Get user intent based on page context and navigation pattern
  const inferUserIntent = (toPage: string, fromPage: string): NavigationEvent['userIntent'] => {
    const toContext = pageContextMap[toPage];
    const fromContext = pageContextMap[fromPage];

    if (!toContext) return 'explore';

    // Business logic for intent inference
    if (toPage === 'contact' || toPage.includes('quote')) return 'contact';
    if (toContext.category === 'products') return 'purchase';
    if (toPage === 'about' || toPage === 'sustainability' || toPage === 'news') return 'learn';
    
    return 'explore';
  };

  // Get related pages suggestions
  const getRelatedPages = (currentRoute: string): { route: string; title: string; reason: string }[] => {
    const context = pageContextMap[currentRoute];
    if (!context) return [];

    return context.relatedPages.map(route => {
      const relatedContext = pageContextMap[route];
      let reason = 'Related content';
      
      if (context.category === relatedContext?.category) {
        reason = `More ${context.category} information`;
      } else if (relatedContext?.businessValue === 'high') {
        reason = 'High business value';
      } else if (relatedContext?.userType === context.userType) {
        reason = `Relevant for ${context.userType}s`;
      }

      return {
        route,
        title: relatedContext?.title || route,
        reason
      };
    });
  };

  // Export function for footer links
  const createFooterLinkHandler = (
    route: string,
    linkText: string,
    section: string
  ) => {
    return (options: { 
      showPreview?: boolean; 
      ctrlKey?: boolean; 
      shiftKey?: boolean;
    } = {}) => {
      const intent = inferUserIntent(route, currentPage);
      
      // Handle special navigation modes
      if (options.ctrlKey || options.shiftKey) {
        // Could open in new tab or show preview
        handleEnhancedNavigation(route, linkText, section, {
          showPreview: true,
          intent
        });
        return;
      }

      // Normal navigation
      handleEnhancedNavigation(route, linkText, section, { intent });
    };
  };

  return (
    <>
      {/* Navigation Preview Modal */}
      <AnimatePresence>
        {showNavigationPreview && previewTarget && pageContextMap[previewTarget] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={() => {
              setShowNavigationPreview(false);
              setPreviewTarget(null);
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="w-full max-w-md mx-4"
              onClick={e => e.stopPropagation()}
            >
              <Card className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">
                      {pageContextMap[previewTarget].title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {pageContextMap[previewTarget].description}
                    </p>
                  </div>
                  <Badge variant="outline">
                    {pageContextMap[previewTarget].category}
                  </Badge>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {pageContextMap[previewTarget].estimatedReadTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {pageContextMap[previewTarget].businessValue} value
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    onClick={() => {
                      handleEnhancedNavigation(
                        previewTarget,
                        pageContextMap[previewTarget].title,
                        'preview-modal',
                        { intent: 'explore' }
                      );
                      setShowNavigationPreview(false);
                      setPreviewTarget(null);
                    }}
                    className="flex-1 gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Visit Page
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setShowNavigationPreview(false);
                      setPreviewTarget(null);
                    }}
                  >
                    Cancel
                  </Button>
                </div>

                {/* Related pages suggestions */}
                {getRelatedPages(previewTarget).length > 0 && (
                  <div className="border-t pt-4">
                    <h4 className="text-sm font-medium mb-2">You might also like:</h4>
                    <div className="space-y-2">
                      {getRelatedPages(previewTarget).slice(0, 2).map((related) => (
                        <button
                          key={related.route}
                          onClick={() => {
                            handleEnhancedNavigation(
                              related.route,
                              related.title,
                              'preview-related',
                              { intent: 'explore' }
                            );
                            setShowNavigationPreview(false);
                            setPreviewTarget(null);
                          }}
                          className="flex items-center justify-between w-full text-left p-2 rounded hover:bg-muted"
                        >
                          <div>
                            <div className="text-sm font-medium">{related.title}</div>
                            <div className="text-xs text-muted-foreground">{related.reason}</div>
                          </div>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Breadcrumb Navigation (conditionally shown) */}
      <AnimatePresence>
        {showBreadcrumb && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-20 left-4 right-4 z-40 bg-background/95 backdrop-blur-sm border rounded-lg p-2"
          >
            <div className="flex items-center space-x-2 text-sm">
              {generateBreadcrumb().map((item, index) => (
                <div key={item.route} className="flex items-center">
                  {index > 0 && <ChevronRight className="w-4 h-4 text-muted-foreground mx-1" />}
                  <button
                    onClick={() => handleEnhancedNavigation(
                      item.route,
                      item.name,
                      'breadcrumb',
                      { intent: 'explore' }
                    )}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Export the handler for use in Footer component */}
      <div style={{ display: 'none' }}>
        {/* This component provides the enhanced navigation functionality */}
        {/* The createFooterLinkHandler function is available for use */}
      </div>
    </>
  );
}

// Export types and utilities for use in Footer
export type { NavigationEvent, PageContext, BreadcrumbItem };
export { pageContextMap };

// Helper function to create enhanced footer link handlers
export const createEnhancedFooterLink = (
  route: string,
  linkText: string,
  section: string,
  onNavigate: (route: string) => void,
  trackNavigation?: (
    toPage: string,
    linkText: string,
    section: string,
    intent: NavigationEvent['userIntent']
  ) => void
) => {
  return {
    onClick: (e: React.MouseEvent) => {
      e.preventDefault();
      
      // Track the navigation if tracking function is provided
      if (trackNavigation) {
        const intent = route === 'contact' ? 'contact' : 
                     pageContextMap[route]?.category === 'products' ? 'purchase' : 'explore';
        trackNavigation(route, linkText, section, intent);
      }
      
      // Show toast notification
      const pageContext = pageContextMap[route];
      if (pageContext) {
        toast.success(`Loading ${pageContext.title}...`, {
          description: pageContext.description,
          duration: 2000
        });
      }
      
      // Navigate to the page
      onNavigate(route);
    },
    onMouseEnter: () => {
      // Preload page data or show hover preview
      console.log(`Preloading ${route} page data...`);
    },
    'aria-label': `Navigate to ${linkText} - ${pageContextMap[route]?.description || 'Learn more'}`
  };
};