// sanity-studio/sanity.config.ts

import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
// 1. IMPORTA TU SCHEMA DESDE LA CARPETA CORRECTA
import {schemaTypes} from './schemaTypes' 

export default defineConfig({
  name: 'default',
  title: 'g&gambiental-studio', // Puedes cambiar este título si quieres

  projectId: 'r518u0xj', // Tu Project ID
  dataset: 'production', // Tu Dataset

  plugins: [structureTool(), visionTool()],

  schema: {
    // 2. AQUÍ ES DONDE USAS LOS SCHEMAS IMPORTADOS
    types: schemaTypes,
  },
})