// components/Resources.tsx
import React from 'react';
import Section from './Section'; // Importamos el componente

const resourcesData = [
  {
    title: "Cartilla Educativa Ambiental",
    icon: "📚",
    fileUrl: "/docs/cartilla-educativa.pdf",
  },
  {
    title: "Infografía de Biodiversidad",
    icon: "🦋",
    fileUrl: "/docs/infografia-biodiversidad.pdf",
  },
  {
    title: "Ejemplo Plan de Manejo",
    icon: "📄",
    fileUrl: "/docs/ejemplo-pma.pdf",
  },
];

const Resources = () => {
  return (
    // Usamos el componente Section y le pasamos las propiedades
    <Section 
      id="recursos" 
      title="Recursos Descargables"
      className="bg-white" // Aquí podemos especificar un color de fondo si queremos
    >
      {/* El contenido específico va aquí */}
      <div className="flex flex-wrap justify-center gap-8">
        {resourcesData.map((resource) => (
          <a
            key={resource.title}
            href={resource.fileUrl}
            download
            className="bg-gray-light p-6 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col items-center w-64 text-center"
          >
            <div className="text-4xl mb-3">{resource.icon}</div>
            <h3 className="font-sans font-bold text-blue-deep">{resource.title}</h3>
          </a>
        ))}
      </div>
    </Section>
  );
};

export default Resources;