// sanity-studio/schemaTypes/project.ts

export default {
  name: 'project',
  title: 'Proyecto',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título del Proyecto',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Ubicación (Ej: Fusagasugá, Cundinamarca)',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Descripción Corta (para la tarjeta)',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'longDescription',
      title: 'Descripción Larga (para el detalle en el modal)',
      type: 'text',
      rows: 5,
    },
    {
      name: 'imageUrl',
      title: 'Imagen Principal (para la tarjeta)',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    // ===== CAMBIOS AQUÍ =====
    {
      name: 'modalImage',
      title: 'Imagen para el modal (si no hay video)',
      type: 'image',
      description: 'Opcional. Sube una imagen para el modal si este proyecto no tiene un video.',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'videoUrl',
      title: 'Video del Proyecto (para el modal)',
      type: 'file',
      description: 'Opcional. Si subes un video, se mostrará en lugar de la "Imagen para el modal".',
      options: {
        accept: 'video/*',
      },
    },
  ],
};