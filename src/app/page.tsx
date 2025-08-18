// app/page.tsx
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import TargetAudience from '@/components/TargetAudience'; // <-- Asegúrate que esté importado
import Resources from '@/components/Resources';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="bg-white text-gray-800">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <TargetAudience /> {/* <-- Y que esté aquí, antes de Recursos */}
      <Resources />
      <ContactForm />
      <Footer />
    </main>
  );
}