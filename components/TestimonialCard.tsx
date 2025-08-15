import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Quote, Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  clientName: string;
  position: string;
  company: string;
  image?: string;
  logo?: string;
  rating?: number;
  className?: string;
}

export function TestimonialCard({
  quote,
  clientName,
  position,
  company,
  image,
  logo,
  rating = 5,
  className = ''
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={className}
    >
      <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500 rounded-3xl overflow-hidden">
        <CardContent className="p-8 flex flex-col h-full">
          {/* Quote Icon */}
          <div className="flex items-center justify-between mb-6">
            <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center">
              <Quote className="w-6 h-6 text-accent" />
            </div>
            
            {/* Rating Stars */}
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < rating ? 'text-accent fill-current' : 'text-muted-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Quote Text */}
          <blockquote className="text-lg leading-relaxed text-foreground mb-8 flex-1" style={{ fontFamily: 'Inter, sans-serif' }}>
            "{quote}"
          </blockquote>

          {/* Client Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {image && (
                <div className="relative">
                  <ImageWithFallback
                    src={image}
                    alt={clientName}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-accent rounded-full border-2 border-white" />
                </div>
              )}
              
              <div>
                <h4 className="font-bold text-foreground" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {clientName}
                </h4>
                <p className="text-sm text-muted-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {position}
                </p>
                <p className="text-xs text-accent font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {company}
                </p>
              </div>
            </div>

            {/* Company Logo */}
            {logo && (
              <div className="w-16 h-16 bg-muted/30 rounded-xl flex items-center justify-center p-2">
                <ImageWithFallback
                  src={logo}
                  alt={`${company} logo`}
                  className="w-full h-full object-contain opacity-60"
                />
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}