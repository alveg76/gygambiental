// app/layout.tsx

import type { Metadata } from "next";
// Importamos solo las fuentes que vamos a usar
import { Merriweather, Open_Sans } from 'next/font/google';
import "./globals.css";
import BackToTopButton from "@/components/BackToTopButton"; // <-- 1. Importa el nuevo componente

// Definimos la fuente Merriweather para los títulos
const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-merriweather', // Para que Tailwind la pueda usar
});

// Definimos la fuente Open Sans para el texto normal
const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans', // Para que Tailwind la pueda usar
});

// Actualizamos los metadatos para que el sitio tenga un título y descripción correctos
export const metadata: Metadata = {
  title: "G&G Consultoria Ambiental",
  description: "Soluciones ambientales sostenibles con enfoque técnico y humano.",
};

// ESTA ES LA ÚNICA FUNCIÓN RootLayout QUE DEBE EXISTIR EN EL ARCHIVO
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Aplicamos el idioma español, las variables de nuestras fuentes y el scroll suave al HTML
    <html lang="es" className={`${merriweather.variable} ${openSans.variable} scroll-smooth`}>
      <body>
        {children}
        <BackToTopButton /> {/* <-- 2. Añade el componente aquí para que aparezca en todas las páginas */}
      </body>
    </html>
  );
}
