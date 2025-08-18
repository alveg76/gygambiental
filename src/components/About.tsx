// components/About.tsx
'use client'; // Necesario para Framer Motion

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id="perfil"
      className="py-20 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Animación para la imagen */}
          <motion.div
            className="md:w-1/3 w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/images/profile-photo.jpg" 
              alt="Foto de Jennyfer Garzón, Directora de G&G Ambiental"
              width={300}
              height={300}
              className="rounded-full object-cover w-[250px] h-[250px] md:w-[300px] md:h-[300px] shadow-lg border-4 border-green-leaf"
            />
          </motion.div>

          {/* Animación para el bloque de texto */}
          <motion.div
            className="md:w-2/3 w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="font-serif text-3xl font-bold text-blue-deep mb-4">
              G&G Ambiental: Liderazgo y Experiencia a su Servicio
            </h2>
            <h3 className="font-sans text-xl text-gray-600 mb-4">
              Dirigidos por Jennyfer M. Garzón Gutiérrez
            </h3>
            <p className="font-sans text-gray-700 leading-relaxed mb-4">
              **G&G Ambiental** es una firma de consultoría dedicada a ofrecer soluciones integrales y sostenibles en planificación territorial, gestión de recursos y cumplimiento normativo.
            </p>
            <p className="font-sans text-gray-700 leading-relaxed mb-6">
              Bajo la dirección de la Ingeniera Jennyfer Garzón, combinamos rigor técnico, innovación y un profundo conocimiento del territorio para garantizar resultados exitosos.
            </p>
            
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default About;