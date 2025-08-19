// components/ProjectGrid.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Modal, { Styles } from 'react-modal'; // <-- CAMBIO 1: Importamos Styles
import { urlFor } from '@/sanity/image';
import type { Project } from '@/types';

// CAMBIO 2: Aplicamos el tipo 'Styles' a la constante
const customModalStyles: Styles = {
  content: {
    top: 'auto',
    left: 'auto',
    right: 'auto',
    bottom: 'auto',
    width: '90%',
    maxWidth: '900px',
    padding: '0',
    border: 'none',
    borderRadius: '8px',
    overflow: 'hidden',
    position: 'relative',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
  },
};

Modal.setAppElement('body');

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    if (!project.longDescription && !project.videoUrl && !project.modalImage) return;
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <button
            key={project._id}
            onClick={() => openModal(project)}
            className="text-left bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow disabled:cursor-not-allowed disabled:opacity-70"
            disabled={!project.longDescription && !project.videoUrl && !project.modalImage}
          >
            <div className="relative h-56 w-full">
              <Image
                src={urlFor(project.imageUrl).width(400).height(300).url()}
                alt={`Imagen del proyecto ${project.title}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="font-serif text-xl font-bold text-blue-deep">{project.title}</h3>
              <p className="font-sans text-sm text-gray-500 mb-2">{project.location}</p>
              <p className="font-sans text-gray-700">{project.description}</p>
            </div>
          </button>
        ))}
      </div>

      {selectedProject && (
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customModalStyles} contentLabel="Detalles del Proyecto">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 bg-black flex items-center justify-center">
              {selectedProject.videoUrl ? (
                <video className="w-full h-full object-cover" controls autoPlay muted loop>
                  <source src={selectedProject.videoUrl} type="video/mp4" />
                  Tu navegador no soporta videos.
                </video>
              ) : selectedProject.modalImage ? (
                <Image
                  src={urlFor(selectedProject.modalImage).url()}
                  alt={`Imagen detallada del proyecto ${selectedProject.title}`}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              ) : null}
            </div>

            <div className="w-full md:w-1/2 p-6 md:p-8 relative">
              <button onClick={closeModal} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-blue-deep mb-2 mt-6 md:mt-0">{selectedProject.title}</h2>
              <p className="font-sans text-gray-700 leading-relaxed">{selectedProject.longDescription}</p>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}