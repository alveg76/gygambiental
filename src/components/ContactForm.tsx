// components/ContactForm.tsx
'use client';
import React from 'react';
import Section from './Section';
import { useForm, ValidationError } from '@formspree/react'; // <-- 1. Importa los hooks

const ContactForm = () => {
  // 2. Configura el hook con tu ID de Formspree
  const [state, handleSubmit] = useForm("meozwbpb"); // <-- REEMPLAZA ESTO

  if (state.succeeded) {
    return (
      <Section id="contacto" title="¡Gracias por tu mensaje!" className="bg-gray-light">
        <p className="text-center font-sans text-lg text-gray-700">Nos pondremos en contacto contigo pronto.</p>
      </Section>
    );
  }

  return (
    <Section id="contacto" title="Contáctanos" className="bg-gray-light">
      <div className="flex flex-col md:flex-row gap-12 max-w-4xl mx-auto">
        {/* ... (Tu columna de Información de Contacto no cambia) ... */}
        <div className="md:w-1/3 w-full">
          {/* ... */}
        </div>

        <div className="md:w-2/3 w-full">
          {/* 3. El `onSubmit` ahora usa el `handleSubmit` de Formspree */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="font-sans font-bold text-gray-700">Nombre</label>
              <input type="text" name="name" id="name" required className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-leaf"/>
              <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-600 text-sm mt-1" />
            </div>
            <div>
              <label htmlFor="email" className="font-sans font-bold text-gray-700">Correo Electrónico</label>
              <input type="email" name="email" id="email" required className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-leaf"/>
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-600 text-sm mt-1" />
            </div>
            <div>
              <label htmlFor="message" className="font-sans font-bold text-gray-700">Mensaje</label>
              <textarea name="message" id="message" rows={5} required className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-leaf"></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-600 text-sm mt-1" />
            </div>
            
            <button
              type="submit"
              disabled={state.submitting} // <-- 4. Deshabilita el botón mientras se envía
              className="bg-[#1A5276] text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors shadow-md disabled:bg-gray-400"
            >
              {state.submitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default ContactForm;