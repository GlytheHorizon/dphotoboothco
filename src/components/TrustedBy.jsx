import { motion } from 'framer-motion';
import { Building2, Heart, GraduationCap, Gift, Building, Users, Church } from 'lucide-react';

const logos = [
  { icon: Heart, label: 'Wedding' },
  { icon: Building2, label: 'Corporate' },
  { icon: GraduationCap, label: 'Schools' },
  { icon: Gift, label: 'Birthdays' },
  { icon: Building, label: 'Government' },
  { icon: Users, label: 'Reunions' },
  { icon: Church, label: 'Church Events' },
];

export default function TrustedBy() {
  return (
    <section className="py-16 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-muted mb-8">
          Trusted by events of all kinds
        </p>

        <div className="relative">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="flex gap-16 items-center"
          >
            {[...logos, ...logos].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 flex-shrink-0 opacity-40 hover:opacity-70 transition-opacity"
                >
                  <Icon className="w-6 h-6 text-gray-400" />
                  <span className="text-sm font-medium text-gray-400 whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
