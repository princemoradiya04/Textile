import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Clock, 
  ArrowRight, 
  ExternalLink,
  Eye,
  Target,
  Filter,
  Download,
  Calendar,
  Zap
} from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import type { NavigationEvent } from './FooterNavigationTracker';

interface NavigationAnalyticsDashboardProps {
  navigationHistory: NavigationEvent[];
  onNavigate?: (page: string) => void;
}

interface AnalyticsMetric {
  label: string;
  value: string | number;
  change: number;
  trend: 'up' | 'down' | 'stable';
  icon: any;
}

interface PopularPath {
  from: string;
  to: string;
  count: number;
  intent: string;
  conversionRate: number;
  avgTimeOnPage: string;
}

interface UserJourney {
  id: string;
  path: string[];
  intent: 'explore' | 'contact' | 'learn' | 'purchase';
  startTime: Date;
  endTime?: Date;
  pages: number;
  converted: boolean;
}

const intentColors = {
  explore: 'bg-blue-100 text-blue-800',
  contact: 'bg-green-100 text-green-800',
  learn: 'bg-purple-100 text-purple-800',
  purchase: 'bg-orange-100 text-orange-800'
};

const intentIcons = {
  explore: Eye,
  contact: ExternalLink,
  learn: Target,
  purchase: Zap
};

export function NavigationAnalyticsDashboard({ 
  navigationHistory, 
  onNavigate 
}: NavigationAnalyticsDashboardProps) {
  const [selectedTimeRange, setSelectedTimeRange] = useState<'1h' | '24h' | '7d' | '30d'>('24h');
  const [selectedIntent, setSelectedIntent] = useState<string>('all');
  const [isVisible, setIsVisible] = useState(false);

  // Calculate analytics metrics
  const getAnalyticsMetrics = (): AnalyticsMetric[] => {
    const totalNavigations = navigationHistory.length;
    const uniquePages = new Set(navigationHistory.map(event => event.toPage)).size;
    const avgNavigationsPerSession = totalNavigations > 0 ? (totalNavigations / 10).toFixed(1) : '0'; // Assuming 10 sessions
    const intentDistribution = navigationHistory.reduce((acc, event) => {
      acc[event.userIntent] = (acc[event.userIntent] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return [
      {
        label: 'Total Navigations',
        value: totalNavigations,
        change: 12.5,
        trend: 'up',
        icon: BarChart3
      },
      {
        label: 'Unique Pages Visited',
        value: uniquePages,
        change: 8.2,
        trend: 'up',
        icon: Eye
      },
      {
        label: 'Avg. Nav/Session',
        value: avgNavigationsPerSession,
        change: 15.3,
        trend: 'up',
        icon: TrendingUp
      },
      {
        label: 'Primary Intent',
        value: Object.keys(intentDistribution).reduce((a, b) => 
          intentDistribution[a] > intentDistribution[b] ? a : b, 'explore'
        ),
        change: 0,
        trend: 'stable',
        icon: Target
      }
    ];
  };

  // Get popular navigation paths
  const getPopularPaths = (): PopularPath[] => {
    const pathCounts = navigationHistory.reduce((acc, event) => {
      const key = `${event.fromPage}->${event.toPage}`;
      if (!acc[key]) {
        acc[key] = {
          from: event.fromPage,
          to: event.toPage,
          count: 0,
          intents: {},
          events: []
        };
      }
      acc[key].count++;
      acc[key].intents[event.userIntent] = (acc[key].intents[event.userIntent] || 0) + 1;
      acc[key].events.push(event);
      return acc;
    }, {} as Record<string, any>);

    return Object.values(pathCounts)
      .sort((a: any, b: any) => b.count - a.count)
      .slice(0, 8)
      .map((path: any) => ({
        from: path.from,
        to: path.to,
        count: path.count,
        intent: Object.keys(path.intents).reduce((a, b) => 
          path.intents[a] > path.intents[b] ? a : b, 'explore'
        ),
        conversionRate: Math.random() * 100, // Mock conversion rate
        avgTimeOnPage: `${Math.floor(Math.random() * 5) + 1}m ${Math.floor(Math.random() * 60)}s`
      }));
  };

  // Generate user journey insights
  const getUserJourneys = (): UserJourney[] => {
    // Mock user journey data based on navigation history
    const journeys: UserJourney[] = [];
    const groupedByTime = navigationHistory.reduce((acc, event) => {
      const timeKey = Math.floor(event.timestamp.getTime() / (30 * 60 * 1000)); // 30-minute windows
      if (!acc[timeKey]) acc[timeKey] = [];
      acc[timeKey].push(event);
      return acc;
    }, {} as Record<number, NavigationEvent[]>);

    Object.values(groupedByTime).forEach((events, index) => {
      if (events.length > 1) {
        const sortedEvents = events.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
        journeys.push({
          id: `journey-${index}`,
          path: [sortedEvents[0].fromPage, ...sortedEvents.map(e => e.toPage)],
          intent: sortedEvents[sortedEvents.length - 1].userIntent,
          startTime: sortedEvents[0].timestamp,
          endTime: sortedEvents[sortedEvents.length - 1].timestamp,
          pages: sortedEvents.length + 1,
          converted: sortedEvents.some(e => e.userIntent === 'contact' || e.userIntent === 'purchase')
        });
      }
    });

    return journeys.slice(0, 5);
  };

  const metrics = getAnalyticsMetrics();
  const popularPaths = getPopularPaths();
  const userJourneys = getUserJourneys();

  const handlePathClick = (path: PopularPath) => {
    if (onNavigate) {
      onNavigate(path.to);
    }
  };

  const handleExportData = () => {
    const data = {
      metrics,
      popularPaths,
      userJourneys,
      rawEvents: navigationHistory,
      exportTime: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `navigation-analytics-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      {navigationHistory.length > 5 && ( // Show dashboard when there's sufficient data
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="space-y-6"
        >
          {/* Dashboard Header */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold" style={{ fontFamily: 'Playfair Display, serif' }}>
                Navigation Analytics
              </h3>
              <p className="text-sm text-muted-foreground">
                Real-time insights into user navigation patterns
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={handleExportData} className="gap-2">
                <Download className="w-4 h-4" />
                Export
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Calendar className="w-4 h-4" />
                {selectedTimeRange.toUpperCase()}
              </Button>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">{metric.label}</p>
                      <p className="text-2xl font-bold">{metric.value}</p>
                      {metric.change !== 0 && (
                        <div className={`flex items-center text-xs ${
                          metric.trend === 'up' ? 'text-green-600' : 
                          metric.trend === 'down' ? 'text-red-600' : 'text-gray-500'
                        }`}>
                          <TrendingUp className="w-3 h-3 mr-1" />
                          {metric.change > 0 ? '+' : ''}{metric.change}%
                        </div>
                      )}
                    </div>
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <metric.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <Tabs defaultValue="paths" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="paths">Popular Paths</TabsTrigger>
              <TabsTrigger value="journeys">User Journeys</TabsTrigger>
              <TabsTrigger value="insights">AI Insights</TabsTrigger>
            </TabsList>

            <TabsContent value="paths" className="space-y-4">
              <div className="grid gap-3">
                {popularPaths.map((path, index) => (
                  <motion.div
                    key={`${path.from}-${path.to}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card 
                      className="p-4 cursor-pointer hover:shadow-lg transition-all duration-300"
                      onClick={() => handlePathClick(path)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium capitalize">{path.from}</span>
                            <ArrowRight className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm font-medium capitalize">{path.to}</span>
                          </div>
                          <Badge className={intentColors[path.intent as keyof typeof intentColors]}>
                            {path.intent}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>{path.count} visits</span>
                          <span>{path.conversionRate.toFixed(1)}% CVR</span>
                          <span>{path.avgTimeOnPage}</span>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="journeys" className="space-y-4">
              <div className="space-y-3">
                {userJourneys.map((journey, index) => {
                  const IntentIcon = intentIcons[journey.intent];
                  return (
                    <motion.div
                      key={journey.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="p-4">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <IntentIcon className="w-4 h-4" />
                              <span className="text-sm font-medium">
                                {journey.pages} page journey
                              </span>
                              <Badge 
                                variant={journey.converted ? "default" : "outline"}
                                className="text-xs"
                              >
                                {journey.converted ? 'Converted' : 'Exploring'}
                              </Badge>
                            </div>
                            <span className="text-xs text-muted-foreground">
                              {journey.startTime.toLocaleTimeString()}
                            </span>
                          </div>
                          
                          <div className="flex items-center space-x-2 text-sm">
                            {journey.path.map((page, pageIndex) => (
                              <div key={pageIndex} className="flex items-center space-x-2">
                                <span className="px-2 py-1 bg-muted rounded text-xs capitalize">
                                  {page}
                                </span>
                                {pageIndex < journey.path.length - 1 && (
                                  <ArrowRight className="w-3 h-3 text-muted-foreground" />
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="insights" className="space-y-4">
              <div className="space-y-3">
                <Card className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium">High Engagement</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Product pages show 85% higher engagement than average. 
                      Consider highlighting these navigation paths.
                    </p>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm font-medium">Optimization Opportunity</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Users frequently navigate from Contact to Products. 
                      Consider adding product recommendations on contact pages.
                    </p>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-medium">User Behavior</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      87% of footer navigations lead to successful page engagement. 
                      Footer is a strong navigation driver.
                    </p>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      )}
    </AnimatePresence>
  );
}