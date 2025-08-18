// components/ServiceAccordion.tsx
'use client';

import React, { useState } from 'react';

type Service = {
  _id: string;
  title: string;
  content: string[];
};

export default function ServiceAccordion({ services }: { services: Service[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggleAccordion = (index: number) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="max-w-3xl mx-auto">
      {services.map((service, index) => (
        <div key={service._id} className="border-b border-gray-200">
          <button onClick={() => toggleAccordion(index)} className="w-full flex justify-between items-center py-5 px-2 text-left">
            <h3 className="font-serif text-xl font-semibold text-blue-deep">{service.title}</h3>
            <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-leaf" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
            </span>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
            <ul className="list-disc list-inside pl-6 pb-5 space-y-2">
              {service.content.map((item, i) => <li key={i} className="font-sans text-gray-700">{item}</li>)}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}