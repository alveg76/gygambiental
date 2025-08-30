// sanity-studio/schemaTypes/profile.ts

export default {
  name: 'profile',
  title: 'Perfil / Sobre Mí',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Título Principal',
      type: 'string',
      description: 'Ej: "G&G Ambiental: Liderazgo y Experiencia a su Servicio"',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'subheading',
      title: 'Subtítulo',
      type: 'string',
      description: 'Ej: "Dirigidos por Jennyfer M. Garzón Gutiérrez"',
    },
    {
      name: 'profileImage',
      title: 'Foto de Perfil',
      type: 'image',
      options: {
        hotspot: true, // Permite enfocar la imagen
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'bioPart1',
      title: 'Primer Párrafo de la Biografía',
      type: 'text',
      rows: 4,
    },
    {
      name: 'bioPart2',
      title: 'Segundo Párrafo de la Biografía',
      type: 'text',
      rows: 4,
    },
  ],
}