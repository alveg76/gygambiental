// components/Hero.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';

const videoSources = [
  '/videos/video1.mp4',
  '/videos/video2.mp4',
  '/videos/video3.mp4',
  '/videos/video4.mp4',
  '/videos/video5.mp4',
];

const Hero = () => {
  // Estado para los índices de los videos y el estado de la transición
  const [activeIndex, setActiveIndex] = useState(0); // El video que se está mostrando
  const [nextIndex, setNextIndex] = useState(1);     // El video que se está precargando
  const [isFading, setIsFading] = useState(false);   // Controla la animación de fundido

  // Efecto para rotar los videos
  useEffect(() => {
    // Iniciar con un video aleatorio
    const startIndex = Math.floor(Math.random() * videoSources.length);
    setActiveIndex(startIndex);
    setNextIndex((startIndex + 1) % videoSources.length);

    const interval = setInterval(() => {
      // Cuando se activa el intervalo, simplemente indicamos que queremos empezar a desvanecer
      setIsFading(true);
    }, 8000); // 10 segundos de duración del video

    return () => clearInterval(interval);
  }, []);

  // Función que se llama cuando la transición de fundido termina
  const handleTransitionEnd = () => {
    if (isFading) {
      // La transición terminó, así que actualizamos los índices
      setActiveIndex(nextIndex);
      setNextIndex((prev) => (prev + 1) % videoSources.length);
      // Volvemos a mostrar el video, listo para el próximo ciclo
      setIsFading(false);
    }
  };

  return (
    <div className="relative h-screen bg-black flex items-center justify-center text-center text-white">
      {/* Video Activo (visible) */}
      <video
        key={videoSources[activeIndex]}
        autoPlay
        loop
        muted
        playsInline
        // Se desvanece (opacity-0) cuando isFading es true
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isFading ? 'opacity-0' : 'opacity-100'
        }`}
        onTransitionEnd={handleTransitionEnd} // Se llama cuando el fundido termina
      >
        <source src={videoSources[activeIndex]} type="video/mp4" />
      </video>

      {/* Video Siguiente (oculto, para precarga) */}
      {/* Este video siempre está cargando la siguiente fuente, pero no es visible.
          Su propósito es estar listo para mostrarse cuando el activo se desvanezca. */}
      <video
        key={videoSources[nextIndex]}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-0" // Siempre oculto
      >
        <source src={videoSources[nextIndex]} type="video/mp4" />
      </video>

      {/* Capa oscura y contenido (sin cambios) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
      <div className="relative z-20 px-4">
        <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-4">
          Conservar, restaurar y educar para transformar el territorio
        </h1>
        <p className="font-sans text-lg md:text-xl max-w-3xl mx-auto">
          Soluciones ambientales sostenibles con un enfoque técnico y humano.
        </p>
      </div>
    </div>
  );
};

export default Hero;