import path from 'path'
import type { CollectionConfig } from 'payload'
import { anyone } from '../access/anyone'

export const Media = {
  slug: 'media',
  access: {
    read: anyone,
  },
  upload: {
    staticDir: path.resolve('public', 'media'),
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      type: 'text',
      name: 'alt',
      required: false,
    },
  ],
} satisfies CollectionConfig
