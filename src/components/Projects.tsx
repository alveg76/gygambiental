// components/Projects.tsx

import { client } from '@/sanity/client';
import { PROJECTS_QUERY } from '@/sanity/queries';
import Section from './Section';
import ProjectGrid from './ProjectGrid'; // Importamos el componente de cliente

export default async function Projects() {
  // Obtenemos los datos directamente desde Sanity
  const projects = await client.fetch(PROJECTS_QUERY);

  return (
    <Section id="proyectos" title="Proyectos Destacados">
      {/* Pasamos los datos obtenidos al componente que los va a mostrar */}
      <ProjectGrid projects={projects} />
    </Section>
  );
}