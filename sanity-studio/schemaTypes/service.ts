// sanity-studio/schemaTypes/service.ts

export default {
  name: 'service',
  title: 'Servicio',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título del Servicio',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Lista de Ítems del Servicio',
      type: 'array',
      of: [{type: 'string'}], // Esto crea una lista de campos de texto
      description: 'Añade uno o más ítems que describan este servicio.',
      validation: (Rule: any) => Rule.required().min(1),
    },
  ],
}