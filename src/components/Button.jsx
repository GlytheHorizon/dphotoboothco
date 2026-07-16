import { motion } from 'framer-motion';

export default function Button({ children, variant = 'primary', href, onClick, className = '', size = 'md' }) {
  const base = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 cursor-pointer border-none';

  const sizes = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-7 py-3 text-base',
    lg: 'px-9 py-4 text-lg',
  };

  const variants = {
    primary:
      'gradient-primary text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105',
    secondary:
      'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white',
    ghost:
      'text-white bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30',
  };

  const content = (
    <motion.span
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <motion.button onClick={onClick} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <span className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>
        {children}
      </span>
    </motion.button>
  );
}
