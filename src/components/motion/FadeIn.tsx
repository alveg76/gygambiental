// components/motion/FadeIn.tsx
'use client';
import { motion } from 'framer-motion';

type FadeInProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

const FadeIn = ({ children, delay = 0, className }: FadeInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Empieza invisible y 20px más abajo
      whileInView={{ opacity: 1, y: 0 }} // Se vuelve visible y sube a su posición
      viewport={{ once: true }} // La animación ocurre solo una vez
      transition={{ duration: 0.6, delay }} // Duración y retraso
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;