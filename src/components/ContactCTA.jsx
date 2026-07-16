import { motion } from 'framer-motion';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import Container from './Container';
import Button from './Button';
import { contactInfo } from '../data/contact';

export default function ContactCTA() {
  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxLjUiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-50" />

      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight mb-4">
            Let's Make Your Event
            <br />
            <span className="text-primary-light">Unforgettable</span>
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Ready to create amazing memories? Book your photobooth today and let's make your celebration one for the books.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg" href="tel:+63289618659">
              <Phone className="w-5 h-5 mr-2" />
              Call 8961 86 59
            </Button>
            <a
              href={contactInfo.messenger}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-7 py-3.5 text-base font-semibold rounded-full bg-[#0084FF] text-white hover:bg-[#0072d6] transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Messenger
            </a>
            <Button variant="ghost" size="lg" href={`mailto:${contactInfo.email}`}>
              <Calendar className="w-5 h-5 mr-2" />
              Email Us
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
