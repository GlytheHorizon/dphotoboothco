import { motion } from 'framer-motion';

export default function SectionTitle({ subtitle, title, description, align = 'center', light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl mx-auto mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      {subtitle && (
        <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary mb-3">
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight ${light ? 'text-white' : 'text-text'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto ${light ? 'text-white/80' : 'text-muted'}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
