// components/TargetAudience.tsx
import React from 'react';
import Section from './Section'; // Importamos el componente

const audienceData = [
  { icon: '🏛️', text: 'Entidades públicas territoriales (alcaldías, gobernaciones)' },
  { icon: '🏞️', text: 'Corporaciones Autónomas Regionales (CAR, CRQ)' },
  { icon: '🏗️', text: 'Proyectos de infraestructura, transporte o energía' },
  { icon: '🤝', text: 'ONGs ambientales y actores comunitarios' },
  { icon: '🏢', text: 'Empresas privadas buscando sostenibilidad y cumplimiento' },
];

const TargetAudience = () => {
  return (
    // Usamos el componente Section y le pasamos las propiedades
    <Section 
      id="audiencia" 
      title="¿A Quiénes Servimos?"
    >
      {/* El contenido específico va aquí */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        {audienceData.map((item, index) => (
          <div key={index} className="flex items-center bg-gray-light p-4 rounded-lg">
            <span className="text-3xl mr-4">{item.icon}</span>
            <p className="font-sans text-gray-800">{item.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default TargetAudience;