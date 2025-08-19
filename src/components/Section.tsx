// components/Section.tsx
'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

// Definimos las propiedades que nuestro componente aceptará
interface SectionProps {
  id: string; // El id para la navegación (ej: 'servicios')
  title: string; // El título que se mostrará
  className?: string; // Clases de estilo adicionales (ej: bg-gray-light)
  children: React.ReactNode; // El contenido específico de cada sección
}

// Variantes de animación para Framer Motion
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      // StaggerChildren hace que los hijos se animen uno después del otro
      staggerChildren: 0.2, 
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Section: React.FC<SectionProps> = ({ id, title, className = 'bg-white', children }) => {
  return (
    // El contenedor de la sección aplica la animación principal
    <motion.section
      id={id}
      className={`py-20 ${className}`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible" // La animación se dispara cuando la sección entra en la vista
      viewport={{ once: true, amount: 0.2 }} // Se anima una vez, cuando el 20% es visible
    >
      <div className="container mx-auto px-6">
        {/* El título tiene su propia animación */}
        <motion.h2
          className="text-center font-serif text-3xl font-bold text-blue-deep mb-12"
          variants={itemVariants}
        >
          {title}
        </motion.h2>

        {/* El contenido de la sección (lo que envuelve) también se anima */}
        <motion.div variants={itemVariants}>
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Section;