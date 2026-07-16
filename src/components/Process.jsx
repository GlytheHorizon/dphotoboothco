import { motion } from 'framer-motion';
import { BookOpen, Palette, Settings, Smile, Printer, Download } from 'lucide-react';
import SectionTitle from './SectionTitle';
import Container from './Container';

const steps = [
  { icon: BookOpen, title: 'Book', description: 'Choose your package and secure your date.' },
  { icon: Palette, title: 'Customize', description: 'Personalize frames, backdrops, and props.' },
  { icon: Settings, title: 'Setup', description: 'We arrive early and set up everything.' },
  { icon: Smile, title: 'Smile', description: 'Your guests enjoy unlimited photo sessions.' },
  { icon: Printer, title: 'Print', description: 'Instant high-quality prints for everyone.' },
  { icon: Download, title: 'Receive Digital Copies', description: 'All photos delivered online after event.' },
];

export default function Process() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <Container>
        <SectionTitle
          subtitle="How It Works"
          title="From Booking to Memories"
          description="Simple, seamless, and stress-free. Here's how we bring the photobooth experience to your event."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="relative bg-bg-section rounded-2xl p-6 flex items-start gap-5 group hover:shadow-card transition-all duration-300"
              >
                <div className="relative flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 border-primary flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">{i + 1}</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-heading font-bold text-text mb-1">{step.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
