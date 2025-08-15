import { motion } from 'framer-motion';
import { Leaf, Droplets, Recycle, Wind } from 'lucide-react';

export function SustainabilitySection() {
  const sustainabilityFeatures = [
    {
      icon: Leaf,
      title: "Organic Materials",
      description: "100% certified organic cotton and natural fibers sourced from sustainable farms",
      metric: "70% Organic"
    },
    {
      icon: Droplets,
      title: "Water Conservation",
      description: "Advanced water recycling systems reduce consumption by 70% compared to industry standards",
      metric: "70% Water Saved"
    },
    {
      icon: Recycle,
      title: "Circular Production",
      description: "Zero-waste manufacturing with complete recycling of production materials",
      metric: "100% Recycled"
    },
    {
      icon: Wind,
      title: "Clean Energy",
      description: "Solar and wind-powered facilities with carbon-neutral production processes",
      metric: "Carbon Neutral"
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
          className="inline-flex items-center space-x-2 bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-medium border border-green-200 mb-6"
        >
          <Leaf className="w-4 h-4" />
          <span>Sustainable Manufacturing</span>
        </motion.div>
        
        <h2 className="text-heading mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
          Committed to a 
          <span className="text-gradient-accent block">Sustainable Future</span>
        </h2>
        
        <p className="text-body-lg text-muted-foreground leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
          Environmental responsibility is at the heart of everything we do. Our sustainable practices 
          ensure that quality textiles and environmental stewardship go hand in hand.
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {sustainabilityFeatures.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center group"
          >
            <div className="rounded-xl border border-black/5 bg-white shadow-md p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
              {/* Icon */}
              <motion.div
                className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-100 transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <feature.icon className="w-8 h-8 text-green-600" />
              </motion.div>

              {/* Metric */}
              <div className="text-2xl font-bold text-green-600 mb-2">{feature.metric}</div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center mt-16 bg-gradient-to-r from-green-50 to-accent-50 rounded-2xl p-8 lg:p-12"
      >
        <h3 className="text-subheading mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          Join the Sustainable Revolution
        </h3>
        <p className="text-body text-muted-foreground mb-6 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
          Partner with us to create beautiful textiles while protecting our planet for future generations. 
          Discover our full sustainability commitment.
        </p>
      </motion.div>
    </section>
  );
}