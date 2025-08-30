// sanity-studio/sanity.config.ts

import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

// Función para definir la estructura del menú del Studio
const singletonActions = new Set(["publish", "discardChanges", "restore"])
const singletonTypes = new Set(["profile"])

export const structure = (S: any) =>
  S.list()
    .title("Content")
    .items([
      // Nuestro item singleton
      S.listItem()
        .title("Perfil / Sobre Mí")
        .id("profile")
        .child(
          S.document()
            .schemaType("profile")
            .documentId("profile")
        ),

      // Separador visual
      S.divider(),

      // El resto de documentos (Proyectos, Servicios) se mostrarán como listas
      ...S.documentTypeListItems().filter(
        (item: any) => !singletonTypes.has(item.getId())
      ),
    ])

export default defineConfig({
  name: 'default',
  title: 'g&gambiental-studio',
  
  projectId: 'r518u0xj',
  dataset: 'production',

  plugins: [
    // Añadimos la estructura personalizada al structureTool
    structureTool({ structure }), 
    visionTool()
  ],

  schema: {
    types: schemaTypes,
    // Filtramos para que no se puedan crear más perfiles desde el botón "+"
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    // Para los singletons, removemos las acciones de "crear nuevo" y "duplicar"
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
})