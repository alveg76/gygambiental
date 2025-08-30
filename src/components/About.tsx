// components/About.tsx
import React from 'react';
import Image from 'next/image';
import { client } from '@/sanity/client'; // Importamos el cliente de Sanity
import { PROFILE_QUERY } from '@/sanity/queries'; // Importamos la nueva consulta
import { urlFor } from '@/sanity/image'; // Importamos el helper de imágenes

// Convertimos el componente a `async` para poder usar `await`
export default async function About() {
  // Buscamos los datos del perfil en Sanity
  const profileData = await client.fetch(PROFILE_QUERY);

  // Es una buena práctica verificar si los datos existen
  if (!profileData) {
    return <section id="perfil"></section>; // No renderizar nada si no hay datos
  }

  return (
    // Mantenemos la animación que ya tenías
    <section id="perfil" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Columna de la Imagen (ahora dinámica) */}
          <div className="md:w-1/3 w-full flex justify-center">
            <Image
              src={urlFor(profileData.profileImage).width(300).height(300).url()} 
              alt="Foto de Jennyfer Garzón, Directora de G&G Ambiental"
              width={300}
              height={300}
              className="rounded-full object-cover w-[250px] h-[250px] md:w-[300px] md:h-[300px] shadow-lg border-4 border-green-leaf"
            />
          </div>

          {/* Columna del Texto (ahora dinámica) */}
          <div className="md:w-2/3 w-full">
            <h2 className="font-serif text-3xl font-bold text-blue-deep mb-4">
              {profileData.heading}
            </h2>
            <h3 className="font-sans text-xl text-gray-600 mb-4">
              {profileData.subheading}
            </h3>
            <p className="font-sans text-gray-700 leading-relaxed mb-4">
              {profileData.bioPart1}
            </p>
            <p className="font-sans text-gray-700 leading-relaxed mb-6">
              {profileData.bioPart2}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};