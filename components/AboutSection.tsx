import { motion } from 'framer-motion';
import { Award, Users, Globe, Leaf } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CompanyOverviewModal } from './CompanyOverviewModal';
import { useState } from 'react';

export function AboutSection() {
  const achievements = [
    { icon: Award, number: "50+", label: "Years Experience" },
    { icon: Users, number: "500+", label: "Global Clients" },
    { icon: Globe, number: "35+", label: "Countries Served" },
    { icon: Leaf, number: "70%", label: "Eco Materials" }
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="container-100 w-full mx-auto px-4 sm:px-5 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20"
          >
            <Award className="w-4 h-4" />
            <span>Heritage & Innovation</span>
          </motion.div>

          <h2 className="text-heading" style={{ fontFamily: 'Playfair Display, serif' }}>
            Three Generations of 
            <span className="text-gradient-primary block">Textile Excellence</span>
          </h2>

          <p className="text-body-lg text-muted-foreground leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            Since 1970, Global has been at the forefront of textile manufacturing, combining traditional 
            craftsmanship with cutting-edge technology to deliver exceptional fabrics to clients worldwide.
          </p>

          <p className="text-body text-muted-foreground leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            Our commitment to sustainability and innovation has made us a trusted partner for leading 
            fashion brands, manufacturers, and designers across the globe.
          </p>

          {/* Achievements Grid */}
          <div className="grid grid-cols-2 gap-4 pt-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 rounded-xl bg-white/50 border border-primary/10"
              >
                <achievement.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{achievement.number}</div>
                <div className="text-sm text-muted-foreground">{achievement.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-xl"
              onClick={() => setIsModalOpen(true)}
            >
              Learn Our Story
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80"
              alt="Our textile manufacturing facility"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Company Overview Modal */}
      <CompanyOverviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}