import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from './Header';
import { Footer } from './Footer';
import { LoadingScreen } from './LoadingScreen';
import { FloatingContact } from './FloatingContact';
import { ScrollToTop } from './ScrollToTop';
import { SkipLinks } from './SkipLinks';
import { PageProgress } from './PageProgress';
import { FooterNavigationTracker, type NavigationEvent } from './FooterNavigationTracker';
import { NavigationAnalyticsDashboard } from './NavigationAnalyticsDashboard';
import { Toaster } from './ui/sonner';

// Page components
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { SustainabilityPage } from './pages/SustainabilityPage';
import { ContactPage } from './pages/ContactPage';
import { NewsPage } from './pages/NewsPage';
import { ArticlePage } from './pages/ArticlePage';
import { CottonYarnsPage } from './pages/CottonYarnsPage';
import { WoolYarnsPage } from './pages/WoolYarnsPage';
import { SyntheticYarnsPage } from './pages/SyntheticYarnsPage';
import { BlendedYarnsPage } from './pages/BlendedYarnsPage';
import { CustomSolutionsPage } from './pages/CustomSolutionsPage';
import { CareersPage } from './pages/CareersPage';
import { ProductCatalogPage } from './pages/ProductCatalogPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { TechnicalSupportPage } from './pages/TechnicalSupportPage';

// Case Study Detail Pages
import { CottonCaseStudyPage } from './pages/CottonCaseStudyPage';
import { MerinoCaseStudyPage } from './pages/MerinoCaseStudyPage';
import { SustainabilityCaseStudyPage } from './pages/SustainabilityCaseStudyPage';

export type PageRoute = 'home' | 'about' | 'products' | 'sustainability' | 'contact' | 'news' | 'article' | 'cotton-yarns' | 'wool-yarns' | 'synthetic-yarns' | 'blended-yarns' | 'custom-solutions' | 'careers' | 'product-catalog' | 'case-studies' | 'technical-support' | 'case-study-cotton' | 'case-study-merino' | 'case-study-sustainability';

interface RouterProps {
  isLoading: boolean;
}

export function Router({ isLoading }: RouterProps) {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [currentArticleId, setCurrentArticleId] = useState<string>('');
  const [isPageTransitioning, setIsPageTransitioning] = useState(false);
  const [navigationHistory, setNavigationHistory] = useState<NavigationEvent[]>([]);
  const [showAnalytics, setShowAnalytics] = useState(false);

  // Simple URL-based routing simulation
  useEffect(() => {
    const path = window.location.pathname;
    if (path.includes('/case-studies/cotton-40s-combed-fashion-basics')) {
      setCurrentPage('case-study-cotton');
    } else if (path.includes('/case-studies/merino-blend-knitwear')) {
      setCurrentPage('case-study-merino');
    } else if (path.includes('/case-studies/dyehouse-sustainability-optimization')) {
      setCurrentPage('case-study-sustainability');
    } else if (path.includes('/case-studies')) {
      setCurrentPage('case-studies');
    }
    // Add more path mappings as needed
  }, []);

  // Handle case study navigation
  const handleCaseStudyNavigation = (slug: string) => {
    let page: PageRoute;
    if (slug.includes('cotton-40s-combed-fashion-basics')) {
      page = 'case-study-cotton';
    } else if (slug.includes('merino-blend-knitwear')) {
      page = 'case-study-merino';
    } else if (slug.includes('dyehouse-sustainability-optimization')) {
      page = 'case-study-sustainability';
    } else {
      page = 'case-studies';
    }
    
    // Update URL for better UX
    window.history.pushState({}, '', slug);
    handleNavigation(page);
  };

  // Make navigation handler available globally for case study cards
  useEffect(() => {
    (window as any).navigateToCaseStudy = handleCaseStudyNavigation;
    return () => {
      delete (window as any).navigateToCaseStudy;
    };
  }, []);

  // Track navigation events
  const trackNavigation = (
    fromPage: string,
    toPage: string,
    linkText: string,
    section: string,
    intent: NavigationEvent['userIntent']
  ) => {
    const event: NavigationEvent = {
      id: `nav-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date(),
      fromPage,
      toPage,
      linkText,
      section,
      userIntent: intent
    };

    setNavigationHistory(prev => [event, ...prev.slice(0, 99)]); // Keep last 100 events

    // Show analytics dashboard when we have enough data
    if (navigationHistory.length >= 5) {
      setShowAnalytics(true);
    }
  };

  // Enhanced navigation handler with tracking and article ID support
  const handleNavigation = (page: PageRoute, context?: {
    linkText?: string;
    section?: string;
    intent?: NavigationEvent['userIntent'];
    articleId?: string;
  }) => {
    if (page === currentPage && (!context?.articleId || context.articleId === currentArticleId)) return;
    
    // Handle article navigation with ID
    if (page === 'article' && context?.articleId) {
      setCurrentArticleId(context.articleId);
      // Update URL for better UX
      window.history.pushState({}, '', `/articles/${context.articleId}`);
    }
    
    // Track the navigation if context is provided (from footer)
    if (context) {
      trackNavigation(
        currentPage,
        page,
        context.linkText || page,
        context.section || 'unknown',
        context.intent || 'explore'
      );
    }
    
    setIsPageTransitioning(true);
    
    // Scroll to top smoothly before transition
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    setTimeout(() => {
      setCurrentPage(page);
      setIsPageTransitioning(false);
    }, 300);
  };

  // Handle back to news navigation
  const handleBackToNews = () => {
    setCurrentArticleId('');
    window.history.pushState({}, '', '/news');
    handleNavigation('news');
  };

  // Legacy navigation handler for compatibility
  const handleLegacyNavigation = (page: PageRoute) => {
    handleNavigation(page);
  };

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      // This would typically read from URL, but for simplicity we'll keep it as is
      // In a real app, you'd use React Router or similar
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Page component mapping
  const pages: Record<PageRoute, React.ComponentType<any>> = {
    home: HomePage,
    about: AboutPage,
    products: (props: any) => <ProductsPage {...props} onNavigate={handleLegacyNavigation} />,
    sustainability: SustainabilityPage,
    contact: ContactPage,
    news: (props: any) => <NewsPage {...props} onNavigate={handleNavigation} />,
    article: (props: any) => <ArticlePage {...props} articleId={currentArticleId} onBack={handleBackToNews} />,
    'cotton-yarns': (props: any) => <CottonYarnsPage {...props} onNavigate={handleLegacyNavigation} />,
    'wool-yarns': (props: any) => <WoolYarnsPage {...props} onNavigate={handleLegacyNavigation} />,
    'synthetic-yarns': (props: any) => <SyntheticYarnsPage {...props} onNavigate={handleLegacyNavigation} />,
    'blended-yarns': (props: any) => <BlendedYarnsPage {...props} onNavigate={handleLegacyNavigation} />,
    'custom-solutions': (props: any) => <CustomSolutionsPage {...props} onNavigate={handleLegacyNavigation} />,
    careers: (props: any) => <CareersPage {...props} onNavigate={handleLegacyNavigation} />,
    'product-catalog': (props: any) => <ProductCatalogPage {...props} onNavigate={handleLegacyNavigation} />,
    'case-studies': CaseStudiesPage,
    'technical-support': TechnicalSupportPage,
    'case-study-cotton': CottonCaseStudyPage,
    'case-study-merino': MerinoCaseStudyPage,
    'case-study-sustainability': SustainabilityCaseStudyPage
  };

  const CurrentPageComponent = pages[currentPage];

  // Show loading screen
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Accessibility */}
      <SkipLinks />
      
      {/* Page Progress Indicator */}
      <PageProgress />
      
      {/* Header with 100px responsive padding */}
      <Header currentPage={currentPage} onNavigate={handleNavigation} />
      
      {/* Main Content Area */}
      <main className="min-h-screen pt-16 sm:pt-18 md:pt-20">
        <AnimatePresence mode="wait">
          {!isPageTransitioning && (
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ 
                duration: 0.4, 
                ease: [0.4, 0, 0.2, 1] 
              }}
            >
              <CurrentPageComponent />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      
      {/* Footer with 100px responsive padding */}
      <Footer onNavigate={handleNavigation} />
      
      {/* Floating Elements */}
      <FloatingContact onNavigate={handleNavigation} />
      <ScrollToTop />
      <Toaster />
    </div>
  );
}