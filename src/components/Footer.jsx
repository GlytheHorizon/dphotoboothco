import { Camera, Phone, Mail, MessageCircle } from 'lucide-react';
import { navLinks } from '../data/navigation';
import { contactInfo } from '../data/contact';
import Container from './Container';

const quickLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Packages', href: '#packages' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: MessageCircle, href: contactInfo.facebook, label: 'Facebook' },
  { icon: Mail, href: `mailto:${contactInfo.email}`, label: 'Email' },
  { icon: Phone, href: `tel:+63289618659`, label: 'Phone' },
];

export default function Footer() {
  return (
    <footer className="bg-text text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 gradient-primary" />

      <Container className="py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-xl gradient-primary">
                <Camera className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-extrabold text-xl">
                The <span className="text-primary">Photobooth</span> Co.
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Capturing Smiles. Creating Memories.<br />
              Serving Memorable Events Since 2017.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-heading font-bold text-white mb-5 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-heading font-bold text-white mb-5 uppercase tracking-wider">
              Events Covered
            </h4>
            <ul className="space-y-3">
              {['Weddings', 'Corporate Events', 'Birthdays', 'Reunions'].map((e) => (
                <li key={e}>
                  <a href="#services" className="text-sm text-gray-400 hover:text-primary transition-colors">
                    {e}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-heading font-bold text-white mb-5 uppercase tracking-wider">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li>
                <a href={`tel:+63289618659`} className="flex items-start gap-3 text-sm text-gray-400 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <div>{contactInfo.phone[0]}</div>
                    <div>{contactInfo.phone[1]}</div>
                  </div>
                </a>
              </li>
              <li>
                <a href={`mailto:${contactInfo.email}`} className="flex items-start gap-3 text-sm text-gray-400 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{contactInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={contactInfo.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>/dphotoboothco</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} The Photobooth Co. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#home" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#home" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
