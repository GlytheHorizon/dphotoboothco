export const packages = [
  {
    id: 1,
    name: 'Standard Prints',
    items: [
      { name: '4R', price: 'PHP 2,500', duration: '2 Hours' },
      { name: 'Strip Bookmark', price: 'PHP 2,500', duration: '2 Hours' },
      { name: 'Dedication Strip', price: 'PHP 3,000', duration: '2 Hours' },
    ],
    addOns: [
      { name: 'Full Magnet', price: 'PHP 1,500' },
      { name: 'Extension per Hour', price: 'PHP 1,000' },
      { name: 'Extension per Hour w/ Magnet', price: 'PHP 1,500' },
    ],
    popular: false,
  },
  {
    id: 2,
    name: 'Premium Prints',
    items: [
      { name: 'Polaroid', price: 'PHP 4,000', duration: '2 Hours' },
      { name: 'Single Frame', price: 'PHP 4,500', duration: '2 Hours' },
    ],
    addOns: [
      { name: 'Full Magnet', price: 'PHP 1,500' },
      { name: 'Extension per Hour', price: 'PHP 1,000 - 1,500' },
      { name: 'Extension per Hour w/ Magnet', price: 'PHP 1,500' },
    ],
    popular: true,
  },
  {
    id: 3,
    name: 'Special',
    items: [
      { name: 'Toon Me Booth', price: 'PHP 8,500', duration: 'Enjoy Package' },
    ],
    addOns: [],
    popular: false,
  },
];
