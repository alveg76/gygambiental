// components/Services.tsx

import { client } from '@/sanity/client';
import { SERVICES_QUERY } from '@/sanity/queries';
import Section from './Section';
import ServiceAccordion from './ServiceAccordion'; // Importamos el nuevo componente

export default async function Services() {
  const services = await client.fetch(SERVICES_QUERY);

  return (
    <Section id="servicios" title="Nuestros Campos de Servicio" className="bg-gray-light">
      <ServiceAccordion services={services} />
    </Section>
  );
}