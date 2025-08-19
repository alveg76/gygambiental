// src/types.ts

// Define cómo es un objeto de imagen de Sanity
export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

// Define cómo es un objeto de Proyecto
export interface Project {
  _id: string;
  title: string;
  location: string;
  description: string;
  longDescription?: string;
  imageUrl: SanityImage;
  modalImage?: SanityImage;
  videoUrl?: string;
}