import { MdCamera, MdPhotoSizeSelectLarge, MdPhotoFilter, MdPortrait, MdColorLens } from 'react-icons/md';
import { BiBookmark } from 'react-icons/bi';
import { BsHeart } from 'react-icons/bs';

export const photoboothTypes = [
  { id: 1, title: 'Classic Photobooth', description: 'The timeless photobooth experience with professional lighting and instant prints.' },
  { id: 2, title: 'Mirror Photobooth', description: 'Interactive full-length mirror booth with animated touchscreen interface.' },
  { id: 3, title: 'Toon Me Booth', description: 'AI-powered cartoon style photo transformation for fun and unique keepsakes.' },
  { id: 4, title: '360 Booth', description: 'Slow-motion 360-degree video booth for stunning social media content.' },
];

export const services = [
  {
    id: 1,
    title: '4R',
    category: 'Standard Prints',
    description: 'One (1) 4R Size Photo per Session. 3 to 4 Frame Template (No. of Shot).',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80',
    icon: MdCamera,
    basePrice: 'PHP 2,500',
    duration: '2 Hours',
    pricing: {
      base: { label: '2 Hours', price: 'PHP 2,500' },
      magnet: { label: 'Full Magnet', price: 'PHP 1,500' },
      extension: { label: 'Extension per Hour', price: 'PHP 1,000' },
      extensionMagnet: { label: 'Extension per Hour w/ Magnet', price: 'PHP 1,500' },
    },
    features: [
      'One (1) 4R Size Photo per Session',
      '3 to 4 Frame Template',
    ],
  },
  {
    id: 2,
    title: 'Strip Bookmark',
    category: 'Standard Prints',
    description: 'Two (2) Photo Strips per Session. 3 to 4 Frame Template (No. of Shot).',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
    icon: BiBookmark,
    basePrice: 'PHP 2,500',
    duration: '2 Hours',
    pricing: {
      base: { label: '2 Hours', price: 'PHP 2,500' },
      magnet: { label: 'Full Magnet', price: 'PHP 1,500' },
      extension: { label: 'Extension per Hour', price: 'PHP 1,000' },
      extensionMagnet: { label: 'Extension per Hour w/ Magnet', price: 'PHP 1,500' },
    },
    features: [
      'Two (2) Photo Strips per Session',
      '3 to 4 Frame Template',
    ],
  },
  {
    id: 3,
    title: 'Dedication Strip',
    category: 'Standard Prints',
    description: 'Two (2) Photo Strips per Session. 3 to 4 Frame Template. 1 Shot with Photos, 1 Shot for Dedication.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80',
    icon: BsHeart,
    basePrice: 'PHP 3,000',
    duration: '2 Hours',
    pricing: {
      base: { label: '2 Hours', price: 'PHP 3,000' },
      magnet: { label: 'Full Magnet (1 Side)', price: 'PHP 1,000' },
      extension: { label: 'Extension per Hour', price: 'PHP 1,000' },
      extensionMagnet: { label: 'Extension per Hour w/ Magnet', price: 'PHP 1,000' },
    },
    features: [
      'Two (2) Photo Strips per Session',
      '3 to 4 Frame Template',
      '1 Shot with Photos, 1 Shot for Dedication',
    ],
  },
  {
    id: 4,
    title: 'Polaroid',
    category: 'Premium Prints',
    description: 'Two (2) Portrait & Polaroid per Session. 1 Frame Template (No. of Shot).',
    image: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=600&q=80',
    icon: MdPhotoSizeSelectLarge,
    basePrice: 'PHP 4,000',
    duration: '2 Hours',
    pricing: {
      base: { label: '2 Hours', price: 'PHP 4,000' },
      magnet: { label: 'Full Magnet', price: 'PHP 1,500' },
      extension: { label: 'Extension per Hour', price: 'PHP 1,000' },
      extensionMagnet: { label: 'Extension per Hour w/ Magnet', price: 'PHP 1,500' },
    },
    features: [
      'Two (2) Portrait & Polaroid per Session',
      '1 Frame Template',
    ],
  },
  {
    id: 5,
    title: 'Single Frame',
    category: 'Premium Prints',
    description: 'One (1) Photo 4R Single Shot per Session. 1 Frame Template (No. of Shot).',
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&q=80',
    icon: MdPortrait,
    basePrice: 'PHP 4,500',
    duration: '2 Hours',
    pricing: {
      base: { label: '2 Hours', price: 'PHP 4,500' },
      magnet: { label: 'Full Magnet', price: 'PHP 1,500' },
      extension: { label: 'Extension per Hour', price: 'PHP 1,500' },
      extensionMagnet: { label: 'Extension per Hour w/ Magnet', price: 'PHP 1,500' },
    },
    features: [
      'One (1) Photo 4R Single Shot per Session',
      '1 Frame Template',
    ],
  },
  {
    id: 6,
    title: 'Toon Me Booth',
    category: 'Special',
    description: 'Enjoy Package with AI-powered cartoon style photo transformation.',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80',
    icon: MdColorLens,
    basePrice: 'PHP 8,500',
    duration: '',
    pricing: {
      base: { label: 'Enjoy Package', price: 'PHP 8,500' },
    },
    features: [
      'AI-powered cartoon style',
      'Digital and print copies',
    ],
    isPopular: true,
  },
];

export const printStyles = [
  {
    category: 'Standard Prints',
    items: ['Frame Standee', 'Strip Bookmark', 'Dedication Strip'],
  },
  {
    category: 'Magnetic Prints',
    items: ['Full Magnet', 'Magnet Strip', 'Dedication Strip Magnet', 'Polaroid Magnet'],
  },
  {
    category: 'Premium Prints',
    items: ['Polaroid Standee', 'Full Magnet Polaroid'],
  },
];
