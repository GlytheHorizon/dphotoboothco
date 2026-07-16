import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, MapPin, Send, CheckCircle, Camera } from 'lucide-react';
import Container from './Container';
import { contactInfo } from '../data/contact';

const FORMSPREE_ID = 'YOUR_FORMSPREE_ID';

const contactMethods = [
  {
    icon: Phone,
    label: 'Call Us',
    value: contactInfo.phone[0],
    href: `tel:+63289618659`,
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  {
    icon: MessageCircle,
    label: 'Messenger',
    value: '/dphotoboothco',
    href: contactInfo.messenger,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Metro Manila, Philippines',
    href: '#',
  },
];

export default function ContactCTA() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSending(true);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      }
    } catch {
      // fallback
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxLjUiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-50" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-xl bg-white/20 backdrop-blur-sm">
                <Camera className="w-5 h-5 text-white" />
              </div>
              <span className="text-white/60 text-sm font-semibold uppercase tracking-widest">
                Get in Touch
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight mb-4">
              Let's Book Your
              <br />
              <span className="text-primary-light">Photobooth</span>
            </h2>

            <p className="text-white/70 text-base leading-relaxed mb-8 max-w-md">
              Tell us about your event and we'll get back to you with the perfect photobooth package within 24 hours.
            </p>

            <div className="space-y-4">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.label === 'Call Us' || method.label === 'Email Us' ? undefined : '_blank'}
                    rel={method.label === 'Call Us' || method.label === 'Email Us' ? undefined : 'noopener noreferrer'}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white/50 text-xs font-medium uppercase tracking-wider">{method.label}</div>
                      <div className="text-white text-sm font-semibold group-hover:text-primary-light transition-colors">{method.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-2xl bg-primary/30 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-white/70 text-sm max-w-xs mx-auto mb-6">
                    Thanks for reaching out! We'll respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm text-primary-light hover:underline font-semibold"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-heading font-bold text-white mb-1">Send Us a Message</h3>
                  <p className="text-white/60 text-sm mb-6">
                    Fill out the form and we'll get back to you ASAP.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-1.5">
                        Your Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Juan Dela Cruz"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-primary-light focus:ring-1 focus:ring-primary-light transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1.5">
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="juandelacruz@email.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-primary-light focus:ring-1 focus:ring-primary-light transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-1.5">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your event — date, type, guest count, and any special requests..."
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-primary-light focus:ring-1 focus:ring-primary-light transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-primary font-bold text-sm hover:bg-primary-light hover:text-white transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {sending ? (
                        <span className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
