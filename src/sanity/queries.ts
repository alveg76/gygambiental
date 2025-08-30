// src/sanity/queries.ts
import { groq } from 'next-sanity';

// Añadimos "modalImage" a la consulta
export const PROJECTS_QUERY = groq`*[_type == "project"]{
  _id,
  title,
  location,
  description,
  longDescription,
  imageUrl,
  modalImage, // <-- AÑADIDO
  "videoUrl": videoUrl.asset->url
}`;

export const SERVICES_QUERY = groq`*[_type == "service"]{
  _id,
  title,
  content
}`;

export const PROFILE_QUERY = groq`*[_type == "profile"][0]{
  _id,
  heading,
  subheading,
  profileImage,
  bioPart1,
  bioPart2
}`;
