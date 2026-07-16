import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { packages } from '../data/packages';
import { contactInfo } from '../data/contact';
import SectionTitle from './SectionTitle';
import Container from './Container';

export default function Packages() {
  return (
    <section className="py-24 bg-bg-section relative overflow-hidden">
      <Container>
        <SectionTitle
          subtitle="Pricing Plans"
          title="Our Service Packages"
          description="Transparent pricing with flexible add-ons. All packages include professional setup, attendants, and digital copies."
        />

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className={`relative bg-white rounded-3xl overflow-hidden transition-all duration-500 ${
                pkg.popular
                  ? 'shadow-hover scale-105 ring-2 ring-primary ring-offset-2'
                  : 'shadow-card hover:shadow-hover'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0">
                  <div className="gradient-primary text-white text-xs font-bold text-center py-2 tracking-wider uppercase">
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`p-8 ${pkg.popular ? 'pt-14' : ''}`}>
                <h3 className="text-xl font-heading font-bold text-text mb-1">
                  {pkg.name}
                </h3>

                <div className="space-y-3 my-6">
                  {pkg.items.map((item, idx) => (
                    <div key={idx} className="bg-bg-section rounded-xl p-4">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-heading font-bold text-text">{item.name}</span>
                        <span className="font-heading font-bold text-lg gradient-text">{item.price}</span>
                      </div>
                      <span className="text-xs text-muted">{item.duration}</span>
                    </div>
                  ))}
                </div>

                {pkg.addOns.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-muted uppercase tracking-wider mb-3">Add-Ons</h4>
                    <ul className="space-y-2.5">
                      {pkg.addOns.map((addon, idx) => (
                        <li key={idx} className="flex items-center justify-between text-sm">
                          <span className="flex items-center gap-2 text-gray-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            {addon.name}
                          </span>
                          <span className="font-semibold text-text">{addon.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={contactInfo.messenger}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-primary text-white font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Message Us for Reservations
          </a>
        </div>
      </Container>
    </section>
  );
}
