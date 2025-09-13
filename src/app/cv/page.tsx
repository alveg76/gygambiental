// app/cv/page.tsx

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

// Metadatos específicos para la página del CV
export const metadata: Metadata = {
  title: 'Hoja de Vida - Jennyfer Garzón | G&G Ambiental',
  description: 'Perfil profesional y experiencia de Jennyfer Garzón Gutiérrez, Ingeniera Ambiental y Magíster en Desarrollo Sustentable y Gestión Ambiental.',
};

// Componente para una sección principal del CV (con fondo de color)
const SectionCV = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="inline-block px-4 py-2 bg-[#FBEAE5] text-[#8B2C2C] font-serif text-3xl font-bold mb-6">
      {title}
    </h2>
    <div className="font-sans text-gray-800 leading-relaxed space-y-6">
      {children}
    </div>
  </section>
);

// Componente para un subtítulo dentro de una sección
const SubHeading = ({ children }: { children: React.ReactNode }) => (
  <h3 className="font-serif text-2xl text-[#8B2C2C] font-bold border-b-2 border-[#8B2C2C] pb-1 mb-4">
    {children}
  </h3>
);

// Componente para una entrada de experiencia o estudio
const Entry = ({ title, institution, date, children }: { title: string; institution?: string; date?: string; children?: React.ReactNode }) => (
  <div className="mb-6">
    <h4 className="font-sans text-lg font-bold text-gray-900">{title}</h4>
    {institution && <p className="font-sans text-md text-gray-700">{institution}</p>}
    {date && <p className="font-sans text-sm text-gray-500 mb-2">{date}</p>}
    {children && <div className="text-gray-700 text-base space-y-2 mt-2">{children}</div>}
  </div>
);

export default function CvPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-gray-800 py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          
          <header className="text-center mb-12 border-b-4 border-green-leaf pb-8">
            <h1 className="font-serif text-5xl font-bold text-blue-deep mb-3">Jennyfer Garzón Gutiérrez</h1>
            <div className="flex justify-center items-center gap-x-4 flex-wrap text-gray-600">
              <span>57+3203730905</span>
              <span>•</span>
              <a href="mailto:garzon.ambiental@gmail.com" className="hover:text-green-leaf">garzon.ambiental@gmail.com</a>
              <span>•</span>
              <span>Bogotá, Colombia</span>
            </div>
          </header>

          <SectionCV title="Perfil laboral">
            <p>Ingeniera ambiental, Magíster en Desarrollo Sustentable y Gestión Ambiental, experiencia en consultoría, planeación y ejecución de proyectos ambientales y manejo del componente de gestión integral de la calidad del aire y movilidad sostenible. Poseo amplios conocimientos y experiencia en diagnóstico y aplicación de propuestas de solución a problemáticas ambientales mediante estudios de impacto ambiental, diagnósticos ambientales, planes de manejo ambiental, etc., en minería, hidrocarburos, infraestructura y sector gubernamental. Con competencias de liderazgo, disciplina, trabajo en equipo, proactividad, facilidad de comunicación, capacidad de análisis y buena redacción. Nivel de inglés B2.</p>
          </SectionCV>

          <SectionCV title="Estudios">
            <SubHeading>Formación académica</SubHeading>
            <Entry title="Magíster en Desarrollo Sustentable y Gestión Ambiental" institution="U. Distrital" date="Agosto 2012 - Octubre 2014" />
            <Entry title="Ingeniera Ambiental" institution="U. Distrital" date="Agosto 2004 - Diciembre 2010" />
            
            <SubHeading>Estudios Complementarios</SubHeading>
            <Entry title="Curso de inglés." date="2025">
              <p>Ingles nivel B2. CEFR Certificate. British Council. 2025</p>
              <p>British Council. English without borders, Connection 2. Oct 2024- feb 2025.</p>
            </Entry>
            <Entry title="Profesional calidad del aire, olores ofensivos y ruido." institution="Oficina de Gestión Ambiental (OGA) Universidad Nacional de Colombia Sede Bogotá" date="Sep 2019 - actual">
              <p>Levantamiento de la línea base ambiental y Plan de Manejo Ambiental, e implementación de las actividades del Plan de Manejo de la Calidad del Aire y Ruido del PMA sustentable de la sede y sus dependencias (Villavicencio EBRF, Centro Marengo, Museo Paleontológico de Villa de Leyva), incluyendo la elaboración del componente de diagnóstico del Plan de Manejo Ambiental (PMA) de la Facultad de Ciencias Humanas y Facultad de Medicina.</p>
            </Entry>
            <Entry title="Elaboración y revisión de preguntas concursos públicos y pruebas académicas" institution="Fundación Universitaria del Área Andina / ICFES" date="Abril – mayo 2023 / Junio 2020 / 2015-2016">
              <p>Elaboración de ítems (preguntas) relacionadas con temáticas ambientales, saneamiento ambiental, normatividad ambiental, políticas ambientales, etc, para concursos de cargos públicos. Revisión de cuestionarios ICFES.</p>
            </Entry>
          </SectionCV>
          
          <SectionCV title="Idiomas">
             <p>Ingles: Nivel B2. First Certificate in English – FCE. Cambridge 2019. Certificado EFSET. Nivel B2. 6/2021. CEFR Certificate B2. 2025.</p>
          </SectionCV>
          
          <SectionCV title="Experiencia Profesional">
            <Entry title="Consultora en temáticas de movilidad sostenible y seguridad vial" institution="Universidad Nacional de Colombia Sede Bogotá. Dirección Financiera." date="May 2024-dic 2024 / nov 2023 a mar 2024 / Oct 2022 a enero 2023">
              <ul className="list-disc pl-5 space-y-1">
                <li>Prestar servicios profesionales, para el apoyo de las actividades enmarcadas en el Plan Estratégico De Seguridad Vial de la División de Seguridad y Salud en el Trabajo.</li>
                <li>Prestar servicios profesionales a la división de logística, para la Elaboración del documento técnico de soporte de la política de renovación de la flota Vehicular Del Parque Automotor De La Universidad Nacional De Colombia, Sede Bogotá.</li>
              </ul>
            </Entry>

            <Entry title="Consultora elaboración de planes ambientales a nivel municipal y departamental">
                <div className="space-y-2 mb-4">
                    <p>1) Alcaldía de Facatativá. Sep 2023-nov 2023.</p>
                    <p>2) Corporación Autónoma Regional del Quindío. Oct 2021 – Feb 2022.</p>
                    <p>3) Alcaldía de Fusagasugá. Dic 2016 - Jul 2017.</p>
                </div>
                <p>Elaboración de: 1) Caracterización de biodiversidad del parque arqueológico del municipio de Facatativá, cuya información se deposite en una cartilla para su divulgación. Plan de Turismo de la Naturaleza de las Áreas de conservación y manejo de la Corporación Autónoma Regional del Quindío (3 personas a cargo). 2) Plan ambiental municipal de Fusagasugá, Cundinamarca 2017- 2028 (3 personas a cargo). 3) Elaboración del plan de emergencias y contingencias frente a los residuos sólidos del municipio de Fusagasugá. 2017.</p>
            </Entry>

            <Entry title="Consultora elaboración de Programas para el Uso Eficiente y Ahorro del Agua - PUEAA">
                <div className="space-y-2 mb-4">
                    <p>1) Servicio Nacional de Aprendizaje SENA Regional Valle del Cauca. Oct 2021 - Dic 2021.</p>
                    <p>2) Aeronáutica Civil. Oct 2020 - Dic 2020.</p>
                </div>
                <p>Elaboración de: 1) Programa para el Uso Eficiente y Ahorro del Agua - PUEAA -requisito para tramitar la solicitud de renovación de la concesión de aguas superficiales otorgada al SENA Centro Agropecuario de Buga, 2021 (1 persona a cargo). 2) Plan de Uso Eficiente y Ahorro de Agua del Aeropuerto Aguas Claras de Ocaña Norte de Santander, 2020 (1 persona a cargo).</p>
            </Entry>

            <Entry title="Consultora elaboración de documentos para trámite permiso de vertimientos">
                <div className="space-y-2 mb-4">
                    <p>1) Servicio Nacional de Aprendizaje Regional Santander. Jun 2019 – Dic 2019.</p>
                    <p>2) Colegio Nuestra Señora de Fátima Armenia. Policía Nacional de Colombia. Dic 2017 - Ene 2018. / Alcaldía de la Palma Cundinamarca. Nov 2016 - Feb 2017.</p>
                    <p>3) Instituto de Financiamiento Promoción y Desarrollo de Caldas INFICALDAS. Jul 2015 - Nov 2015.</p>
                </div>
                <p>Elaboración de: 1) Plan de gestión del riesgo para manejo de vertimientos y evaluación ambiental del vertimiento, sede Aguas Calientes casa regional Santander (2 personas a cargo). 2) Trámite de permiso de vertimientos del Colegio Nuestra Señora de Fátima Armenia (2 personas a cargo). 3) Plan de Saneamiento y Manejo de Vertimientos de La Palma Cundinamarca (4 personas a cargo). 4) Actualización del permiso de vertimientos y permiso de captación del Parador Turístico La Esperanza. Manizales – Caldas (3 personas a cargo).</p>
            </Entry>

            <Entry title="Directora de Proyectos" institution="Coral Consultores SAS" date="Feb 2018 - Nov 2018 / Jan. 2016- Nov 2016 / Abr 2014 – Nov 2014">
                <p>Dirección del equipo en la elaboración de estudios ambientales y presentación de ofertas y licitaciones. Dentro de los proyectos, se elaboró el plan de uso eficiente y ahorro de agua, como parte de las medidas de adaptación y mitigación frente al cambio climático para la compañía Crisálida Soluciones Gráficas SAS. Dirección en la elaboración del plan de gestión de residuos sólidos del establecimiento Intricon SAS. Elaboración del proyecto bioadsorción de metales pesados de industrias de galvanotecnia y minería de oro en Colombia. Elaboración del proyecto de gestión ambiental de aguas residuales industriales con mercurio proveniente de la minería aurífera (4 personas a cargo).</p>
            </Entry>

            <Entry title="Consultora Elaboración de documentos requeridos en trámites de licenciamiento ambiental">
                <div className="space-y-2 mb-4">
                    <p>1) Consorcio Vial Helios. Ene 2018 - Feb 2018.</p>
                    <p>2) Aeronáutica Civil. Nov 2015 - Dic 2015.</p>
                    <p>3) Alcaldía De Villamaría – Caldas. Sep 2015 –Dic 2015.</p>
                </div>
                <p>Elaboración de documentos requeridos en trámites de licenciamiento ambiental: 1) Informe identificación de impactos por desmantelamiento del campamento Guaduero. 2) Elaboración de la Geodatabase (GDB), para la actualización del Plan de Manejo Ambiental del aeropuerto Simón Bolívar de la Ciudad de Santa Marta (1 persona a cargo). 3) Estudio de impacto ambiental y ajustes para construir la vía que comunica la vereda el Avión de Villamaría con la vereda Java de Manizales hasta el puente San Pedro (2 personas a cargo).</p>
            </Entry>
            
            <Entry title="Consultora interventoría documento de sustracción de reserva forestal" institution="INVIAS" date="Nov 2017 - Jul 2018">
                <p>Dirección de la interventoría para el cumplimiento del requerimiento ambiental, en lo que respecta a la evaluación para la sustracción definitiva de siete (7) hectáreas aproximadamente, de la reserva forestal de la Sierra Nevada Santa Marta, del proyecto denominado: “Construcción y Mejoramiento de la Carretera Valledupar - Maicao, Sector Valledupar – San Juan Del Cesar". 2017-2018 (8 personas a cargo).</p>
            </Entry>

            <Entry title="Directora Técnica/ Ingeniera Ambiental" institution="Géminis Consultores S.A.S" date="Feb 2012 - Abr 2014">
                <p>Elaboración de estudios ambientales. Los estudios incluyeron: estudios de impacto ambiental, diagnóstico ambiental de alternativas, planes de manejo ambiental, planes de inversión del 1%, análisis ambiental y social, sustracción de reserva forestal y planes de restauración ecológica. Para proyectos de minería aurífera, minería de carbón, extracción de materiales agregados, así como proyectos viales 4G como Ruta del Sol Sector I y Sector III, APP Cambao Manizales; Doble Calzada Barboza – Pradera; Desarrollo Vial de Nariño; Autopistas de la Montaña y proyecto de hidrocarburos con la empresa Cepcolsa S.A. Responsable de 10 personas a cargo.</p>
            </Entry>

            <Entry title="Ingeniera ambiental – Ingeniera HSEQ" institution="Ingeniería Seguridad y Calidad ISC Ambiental" date="Feb 2011 - Sep 2011">
                <p>Elaboración e implementación en campo del Sistema de Seguridad y Salud Ocupacional en el proyecto de Tala, Desmonte y Limpia de la Doble Calzada Bogotá – Villavicencio. Elaboración de Diagnóstico Ambiental de los Predios del Club Payandé en Quebradanegra Cundinamarca. Elaboración del Plan de Manejo Ambiental de la Urbanización el Refugio en Tenjo Cundinamarca.</p>
            </Entry>
          </SectionCV>
          
          <div className="text-center mt-16 pt-8 border-t-2 border-gray-200">
              <p className="font-serif text-xl font-bold text-blue-deep">ING. MSc. JENNYFER M. GARZÓN GUTIÉRREZ</p>
              <p className="font-sans text-gray-600">T.P. 25238-208678 del 07/07/2011</p>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
