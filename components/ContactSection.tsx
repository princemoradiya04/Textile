import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 789-0123",
      description: "Mon-Fri 8AM-6PM EST"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@global-textiles.com",
      description: "We respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "2500 Manufacturing Drive",
      description: "Atlanta, GA 30309"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday",
      description: "8:00 AM - 6:00 PM EST"
    }
  ];

  return (
    <section className="container-100">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium border border-white/30 mb-6"
            >
              <Phone className="w-4 h-4" />
              <span>Get In Touch</span>
            </motion.div>

            <h2 className="text-heading text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ready to Start Your 
              <span className="text-accent block">Textile Project?</span>
            </h2>

            <p className="text-body-lg text-white/90 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Our team of textile experts is ready to help you find the perfect solution for your project. 
              Get in touch for a personalized consultation and quote.
            </p>
          </div>

          {/* Contact Info Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm">{info.title}</h3>
                    <p className="text-white/80 text-sm">{info.details}</p>
                  </div>
                </div>
                <p className="text-white/60 text-xs ml-13">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="rounded-2xl border border-white/10 bg-white/10 shadow-2xl p-8 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Request a Quote
            </h3>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Input
                    placeholder="First Name"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-accent"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Last Name"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-accent"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-accent"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Company"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-accent"
                  />
                </div>
              </div>

              <div>
                <Input
                  placeholder="Project Type (Cotton, Wool, Synthetic, etc.)"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-accent"
                />
              </div>

              <div>
                <Textarea
                  placeholder="Tell us about your project requirements..."
                  rows={4}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-accent resize-none"
                />
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent-700 text-accent-foreground px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <span>Send Message</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}