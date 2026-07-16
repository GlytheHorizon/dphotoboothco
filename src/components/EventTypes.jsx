import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { eventTypes } from '../data/events';
import { contactInfo } from '../data/contact';
import SectionTitle from './SectionTitle';
import Container from './Container';

export default function EventTypes() {
  return (
    <section className="py-24 bg-bg-section relative overflow-hidden">
      <Container>
        <SectionTitle
          subtitle="Events Covered"
          title="We Cover All Types of Celebrations"
          description="From weddings to corporate events, birthdays to reunions — we've got the perfect photobooth experience."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventTypes.map((event, i) => {
            const Icon = event.icon;
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-heading font-bold text-lg">
                      {event.title}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {event.description}
                  </p>
                  <a
                    href={contactInfo.messenger}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Inquire via Messenger
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
