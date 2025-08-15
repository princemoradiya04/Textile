import { motion } from 'framer-motion';
import { ArrowRight, Zap, Leaf, Award } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ProductSelectorModal } from './ProductSelectorModal';
import { QuoteRequestModal } from './QuoteRequestModal';
import { useState } from 'react';

export function ProductsSection() {
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const handleLearnMore = () => {
    setIsProductModalOpen(true);
  };

  const handleQuoteRequest = () => {
    setIsProductModalOpen(false);
    setIsQuoteModalOpen(true);
  };

  const products = [
    {
      title: "Premium Cotton Yarns",
      description: "Finest quality cotton yarns sourced from organic farms, perfect for luxury textiles and high-end fashion applications.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
      features: ["100% Organic", "Eco-Friendly", "Premium Quality"],
      category: "Cotton",
      isPopular: true
    },
    {
      title: "Luxury Wool Fabrics",
      description: "Sustainable wool fabrics with exceptional softness and durability, ideal for premium clothing and home textiles.",
      image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=600&q=80",
      features: ["Sustainable", "Ultra-Soft", "Durable"],
      category: "Wool"
    },
    {
      title: "Advanced Synthetic Blends",
      description: "Innovative synthetic fabric blends engineered for performance, combining comfort with cutting-edge technology.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
      features: ["Performance", "Innovation", "Tech-Enhanced"],
      category: "Synthetic"
    },
    {
      title: "Custom Fabric Solutions",
      description: "Bespoke fabric development services tailored to your specific requirements and quality standards.",
      image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=600&q=80",
      features: ["Custom", "Tailored", "Premium"],
      category: "Custom"
    }
  ];

  return (
    <>
    <section className="container-100 w-full mx-auto px-4 sm:px-5 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/20 mb-6"
        >
          <Award className="w-4 h-4" />
          <span>Premium Product Range</span>
        </motion.div>
        
        <h2 className="text-heading mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
          Exceptional Textiles for 
          <span className="text-gradient-accent block">Every Application</span>
        </h2>
        
        <p className="text-body-lg text-muted-foreground leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
          From premium cotton yarns to innovative synthetic blends, our comprehensive range of textile products 
          meets the highest standards of quality, sustainability, and performance.
        </p>
      </motion.div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
        {products.map((product, index) => (
          <motion.div
            key={product.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="rounded-xl border border-black/5 bg-white shadow-md p-0 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              {/* Image */}
              <div className="relative overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="bg-secondary/90 text-secondary-foreground backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                    {product.category}
                  </span>
                  {product.isPopular && (
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      Popular
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors duration-300 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {product.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-2 py-1 bg-accent/10 text-accent rounded-md text-xs font-medium"
                      >
                        <Leaf className="w-3 h-3 mr-1" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <Button
                  variant="outline"
                  className="w-full justify-between group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all duration-300 rounded-xl"
                  onClick={handleLearnMore}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center bg-gradient-to-r from-accent/5 to-primary/5 rounded-2xl p-8 lg:p-12"
      >
        <h3 className="text-subheading mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          Need Custom Solutions?
        </h3>
        <p className="text-body text-muted-foreground mb-6 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
          Our expert team can develop bespoke textile solutions tailored to your specific requirements. 
          Let's discuss your project needs.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-accent-600 to-accent-700 hover:from-accent-700 hover:to-accent-800 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            onClick={handleQuoteRequest}
          >
            <span>Request Custom Quote</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </motion.div>
      </motion.div>
    </section>

    {/* Product Selector Modal */}
    <ProductSelectorModal
      isOpen={isProductModalOpen}
      onClose={() => setIsProductModalOpen(false)}
      onQuoteRequest={handleQuoteRequest}
    />

    {/* Quote Request Modal */}
    <QuoteRequestModal
      isOpen={isQuoteModalOpen}
      onClose={() => setIsQuoteModalOpen(false)}
    />
    </>
  );
}