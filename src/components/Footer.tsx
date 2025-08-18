// components/Footer.tsx
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-deep text-white py-8"> {/* Aumenté un poco el padding a py-8 */}
      <div className="container mx-auto px-6 text-center">
        <p className="font-sans">
          © {currentYear} G&G Ambiental. Todos los derechos reservados.
        </p>
        <p className="text-sm text-gray-300 mt-2"> {/* Cambié mt-1 por mt-2 y text-gray-400 por text-gray-300 para un poco más de contraste */}
          Soluciones de ingeniería para un futuro sostenible.
        </p>
        <p className="text-xs text-gray-400 mt-4"> {/* Texto de créditos más pequeño y sutil */}
          Powered by <a href="https://ianovalabs.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">ianovalabs.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;