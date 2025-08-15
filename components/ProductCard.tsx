import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Zap } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  features?: string[];
  category?: string;
  isPopular?: boolean;
  onViewDetails?: () => void;
  className?: string;
}

export function ProductCard({
  title,
  description,
  image,
  features = [],
  category,
  isPopular = false,
  onViewDetails,
  className = ''
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className={className}
    >
      <Card className="group h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden">
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <div className="aspect-[4/3] relative">
            <ImageWithFallback
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* View More Button - Shows on Hover */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <Button
                variant="secondary"
                size="sm"
                className="bg-white/90 hover:bg-white text-primary border-0 rounded-xl shadow-lg backdrop-blur-sm"
                onClick={onViewDetails}
              >
                View More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </div>

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {category && (
              <Badge variant="secondary" className="bg-secondary/90 text-secondary-foreground backdrop-blur-sm">
                {category}
              </Badge>
            )}
            {isPopular && (
              <Badge className="bg-accent text-accent-foreground">
                <Zap className="w-3 h-3 mr-1" />
                Popular
              </Badge>
            )}
          </div>
        </div>

        {/* Content */}
        <CardContent className="p-6 flex-1 flex flex-col">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-xl font-bold leading-tight group-hover:text-primary transition-colors duration-300" style={{ fontFamily: 'Playfair Display, serif' }}>
              {title}
            </CardTitle>
          </CardHeader>

          <p className="text-muted-foreground leading-relaxed mb-6 flex-1" style={{ fontFamily: 'Inter, sans-serif' }}>
            {description}
          </p>

          {/* Features */}
          {features.length > 0 && (
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-foreground mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                Key Features:
              </h4>
              <ul className="space-y-2">
                {features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-muted-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Button */}
          <Button
            variant="outline"
            className="w-full justify-between group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all duration-300 rounded-xl"
            onClick={onViewDetails}
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}