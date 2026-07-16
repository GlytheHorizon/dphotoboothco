import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages, galleryCategories } from '../data/gallery';
import SectionTitle from './SectionTitle';
import Container from './Container';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  const currentIndex = lightbox !== null ? filtered.findIndex((img) => img.id === lightbox) : -1;

  const next = () => {
    const nextIdx = (currentIndex + 1) % filtered.length;
    setLightbox(filtered[nextIdx].id);
  };

  const prev = () => {
    const prevIdx = (currentIndex - 1 + filtered.length) % filtered.length;
    setLightbox(filtered[prevIdx].id);
  };

  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden">
      <Container>
        <SectionTitle
          subtitle="Our Gallery"
          title="Moments We've Captured"
          description="A glimpse into the events and celebrations we've been honored to be part of."
        />

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'gradient-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {filtered.map((img) => (
            <motion.div
              key={img.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="break-inside-avoid cursor-pointer group relative rounded-2xl overflow-hidden"
              onClick={() => setLightbox(img.id)}
            >
              <img
                src={img.src}
                alt={img.category}
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ aspectRatio: `${img.width}/${img.height}` }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
                <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  {img.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-60 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              src={filtered.find((img) => img.id === lightbox)?.src}
              alt={filtered.find((img) => img.id === lightbox)?.category || "Photobooth gallery image"}
              className="max-w-full max-h-[85vh] object-contain rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
