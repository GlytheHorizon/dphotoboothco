import { motion } from 'framer-motion';
import { whyChooseUs } from '../data/whyChooseUs';
import SectionTitle from './SectionTitle';
import Container from './Container';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.05, duration: 0.4, ease: 'easeOut' },
  }),
};

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-white relative overflow-hidden">
      <Container>
        <SectionTitle
          subtitle="Why Choose Us"
          title="What Makes Us Different"
          description="We don't just take photos — we create experiences. Here's why couples, companies, and families trust us with their memories."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {whyChooseUs.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-30px' }}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="group bg-bg-section rounded-2xl p-6 transition-all duration-300 hover:shadow-card hover:bg-white border border-transparent hover:border-primary/10"
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-heading font-bold text-text mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
