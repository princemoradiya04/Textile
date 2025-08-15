import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Global's commitment to quality and sustainability is unmatched. Their cotton yarns have elevated our entire product line.",
      clientName: "Sarah Johnson",
      position: "Head of Design",
      company: "Luxury Fashion Co.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b0cd8f56?auto=format&fit=crop&w=150&q=80",
      rating: 5
    },
    {
      quote: "The consistency and reliability of Global's textile products have made them our preferred partner for over 15 years.",
      clientName: "Michael Chen",
      position: "Manufacturing Director",
      company: "Premium Textiles Ltd.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      rating: 5
    },
    {
      quote: "Working with Global has transformed our approach to sustainable fashion. Their innovative materials are exceptional.",
      clientName: "Emma Rodriguez",
      position: "Sustainability Officer",
      company: "EcoFashion Brand",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      rating: 5
    }
  ];

  return (
    <section className="container-100">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/20 mb-6"
        >
          <Star className="w-4 h-4" />
          <span>Client Testimonials</span>
        </motion.div>
        
        <h2 className="text-heading mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
          Trusted by Industry 
          <span className="text-gradient-accent block">Leaders Worldwide</span>
        </h2>
        
        <p className="text-body-lg text-muted-foreground leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
          Our commitment to excellence has earned the trust of leading brands and manufacturers 
          across the global textile industry.
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.clientName}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500 rounded-3xl overflow-hidden">
              <div className="p-8 flex flex-col h-full">
                {/* Quote Icon & Rating */}
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
                          i < testimonial.rating ? 'text-accent fill-current' : 'text-muted-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Quote Text */}
                <blockquote className="text-lg leading-relaxed text-foreground mb-8 flex-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                  "{testimonial.quote}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.clientName}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-accent rounded-full border-2 border-white" />
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-foreground" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {testimonial.clientName}
                    </h4>
                    <p className="text-sm text-muted-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {testimonial.position}
                    </p>
                    <p className="text-xs text-accent font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}