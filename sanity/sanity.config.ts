import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'ecommerce-v2',

  projectId: 'gdxhzacc',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],
  

  schema: {
    types: schemaTypes,
  },
})
