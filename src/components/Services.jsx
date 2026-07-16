import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { services, photoboothTypes, printStyles } from '../data/services';
import { contactInfo } from '../data/contact';
import SectionTitle from './SectionTitle';
import Container from './Container';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-bg-section relative overflow-hidden">
      <Container>
        <SectionTitle
          subtitle="Photobooth Type"
          title="Choose Your Booth Experience"
          description="We offer a variety of photobooth setups to match the vibe of your event."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {photoboothTypes.map((booth, i) => (
            <motion.div
              key={booth.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-card hover:shadow-hover transition-all duration-300 border border-gray-50"
            >
              <h3 className="text-lg font-heading font-bold text-text mb-2">{booth.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{booth.description}</p>
            </motion.div>
          ))}
        </div>

        <SectionTitle
          subtitle="Print Styles"
          title="Choose Your Print Style"
          description="From standard prints to premium magnets — pick the format that your guests will love."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {printStyles.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-card"
            >
              <h3 className="text-base font-heading font-bold text-primary mb-4">{group.category}</h3>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <SectionTitle
          subtitle="Pricing"
          title="Service Packages & Rates"
          description="Transparent pricing with flexible add-ons. Pick what works best for your event."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            const p = service.pricing;
            return (
              <motion.div
                key={service.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md rounded-xl p-2.5">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  {service.isPopular && (
                    <span className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      Popular
                    </span>
                  )}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-white/70 text-xs font-medium uppercase tracking-wider">{service.category}</span>
                    <h3 className="text-2xl font-heading font-bold text-white">{service.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-muted text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-5">
                    {Object.values(p).map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between text-sm py-1.5 border-b border-gray-50 last:border-0">
                        <span className="text-gray-500">{item.label}</span>
                        <span className="font-heading font-bold text-text">{item.price}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href={contactInfo.messenger}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-primary text-white font-semibold text-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Inquire Now
          </a>
        </div>
      </Container>
    </section>
  );
}
