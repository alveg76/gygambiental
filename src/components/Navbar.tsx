// components/Navbar.tsx
'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useActiveSection } from '@/hooks/useActiveSection'; // <-- Importa el hook

const Navbar = () => {
  // Estados para el menú móvil y el efecto de scroll (se mantienen igual)
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Efecto que escucha el evento de scroll (se mantiene igual)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Array de items del menú, ahora en minúsculas para que coincida con los IDs de las secciones
  const menuItems = ['perfil', 'servicios', 'proyectos', 'audiencia', 'recursos', 'contacto'];
  
  // <-- Uso del hook para obtener la sección activa
  const activeSection = useActiveSection(menuItems);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-sm shadow-md'
          : 'bg-white shadow-none'
      }`}
    >
      <div className="container mx-auto px-6 h-16 flex justify-between items-center">
        <a href="#" className="flex items-center h-full">
          <Image
            src="/logo.png"
            alt="Logo de G&G Ambiental"
            width={140}
            height={35}
            priority
            className="h-[35px] w-auto"
          />
        </a>

        {/* Menú de escritorio actualizado con resaltado dinámico */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              // ===== AQUÍ ESTÁ LA MAGIA DEL RESALTADO =====
              className={`transition-colors font-sans capitalize ${
                activeSection === item
                  ? 'text-green-leaf font-bold' // Estilo para el item activo
                  : 'text-gray-800 hover:text-green-leaf' // Estilo normal
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-1">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Menú móvil actualizado con resaltado dinámico */}
      {isOpen && (
        <div className={`md:hidden px-6 pt-2 pb-4 flex flex-col space-y-2 shadow-lg ${
            isScrolled ? 'bg-white/95' : 'bg-white'
        }`}>
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setIsOpen(false)}
              // ===== RESALTADO APLICADO TAMBIÉN AL MENÚ MÓVIL =====
              className={`block py-2 transition-colors font-sans capitalize ${
                activeSection === item
                  ? 'text-green-leaf font-bold'
                  : 'text-gray-800 hover:text-green-leaf'
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;