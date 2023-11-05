import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from '@/sanity/schemas';
import { documentInternationalization } from '@sanity/document-internationalization';
import { i18n } from '@/i18n.config';

const projectId = '';
const dataset = 'production';

export default defineConfig({
  basePath: '/admin',
  name: 'super_blog',
  title: 'Super Blog',
  projectId,
  dataset,
  plugins: [
    deskTool(),
    documentInternationalization({
      supportedLanguages: i18n.languages,
      schemaTypes: ['post'],
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
