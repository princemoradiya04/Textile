import { motion } from 'framer-motion';
import { Lightbulb, Cog, TestTube, Package } from 'lucide-react';

export function ProcessSection() {
  const processSteps = [
    {
      icon: Lightbulb,
      title: "Design & Planning",
      description: "Collaborative design process with our expert team to define your textile requirements and specifications.",
      step: "01"
    },
    {
      icon: TestTube,
      title: "Material Selection",
      description: "Careful selection of premium raw materials including organic cotton, sustainable wool, and advanced synthetics.",
      step: "02"
    },
    {
      icon: Cog,
      title: "Manufacturing",
      description: "State-of-the-art production using advanced machinery and traditional craftsmanship techniques.",
      step: "03"
    },
    {
      icon: Package,
      title: "Quality & Delivery",
      description: "Rigorous quality control testing followed by secure packaging and timely delivery to your location.",
      step: "04"
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
          className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20 mb-6"
        >
          <Cog className="w-4 h-4" />
          <span>Our Process</span>
        </motion.div>
        
        <h2 className="text-heading mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
          From Concept to 
          <span className="text-gradient-primary block">Finished Product</span>
        </h2>
        
        <p className="text-body-lg text-muted-foreground leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
          Our streamlined manufacturing process ensures exceptional quality and timely delivery, 
          from initial consultation to final product delivery.
        </p>
      </motion.div>

      {/* Process Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {processSteps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative text-center group"
          >
            {/* Step Number */}
            <motion.div
              className="absolute -top-4 -right-4 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent font-bold text-lg border-2 border-accent/20"
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              {step.step}
            </motion.div>

            <div className="rounded-xl border border-black/5 bg-white shadow-md p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
              {/* Icon */}
              <motion.div
                className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <step.icon className="w-8 h-8 text-primary" />
              </motion.div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                {step.description}
              </p>
            </div>

            {/* Connector Line (hidden on mobile) */}
            {index < processSteps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent/30 transform -translate-y-1/2 z-10" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}