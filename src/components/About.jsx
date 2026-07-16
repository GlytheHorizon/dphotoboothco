import { motion } from 'framer-motion';
import { Camera, Heart, Award, Users } from 'lucide-react';
import SectionTitle from './SectionTitle';
import Container from './Container';

const values = [
  {
    icon: Heart,
    title: 'Passion for Memories',
    description: 'We believe every smile tells a story. Our mission is to capture genuine joy and turn moments into lifelong keepsakes.',
  },
  {
    icon: Award,
    title: 'Quality & Excellence',
    description: 'From premium equipment to professional staff, we never compromise on the quality of your photobooth experience.',
  },
  {
    icon: Users,
    title: 'Guest Experience First',
    description: 'Every guest is treated like family. We create an interactive, fun atmosphere that keeps people coming back to the booth.',
  },
  {
    icon: Camera,
    title: 'Innovation in Every Shot',
    description: 'We stay ahead with the latest photobooth technology — from touch screens to 360 booths and AI-powered cartoons.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <Container>
        <SectionTitle
          subtitle="About Us"
          title="Serving Smiles Since 2017"
          description="We are The Photobooth Co. — a passionate team dedicated to making every event unforgettable through the magic of photos."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80"
                alt="The Photobooth Co. event"
                loading="lazy"
                className="rounded-3xl w-full h-[400px] object-cover shadow-card"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 gradient-primary rounded-3xl flex items-center justify-center shadow-xl hidden md:flex">
                <div className="text-center text-white">
                  <div className="text-4xl font-heading font-extrabold">2017</div>
                  <div className="text-sm font-medium opacity-80">Serving Since</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-text">
              We Turn Events Into{' '}
              <span className="gradient-text">Unforgettable Memories</span>
            </h3>
            <p className="text-muted leading-relaxed">
              Founded in 2017, The Photobooth Co. has grown from a small startup into one of the most trusted photobooth providers in the region. We've served hundreds of events — from intimate family gatherings to grand corporate celebrations.
            </p>
            <p className="text-muted leading-relaxed">
              Our team of professional photographers, attendants, and creative designers work tirelessly to ensure every guest leaves with a smile and a photo to remember. We combine cutting-edge technology with genuine hospitality to create an experience that's as memorable as the event itself.
            </p>
            <p className="text-muted leading-relaxed">
              Whether it's a wedding, birthday, corporate event, or reunion — we treat every booking with the same dedication and attention to detail. Because at The Photobooth Co., we're not just taking photos. We're capturing memories that last a lifetime.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-bg-section rounded-2xl p-6 text-center hover:shadow-card transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-base font-heading font-bold text-text mb-2">{value.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
