import path from 'path'
import { fileURLToPath } from 'url'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload/config'
import { Users } from './collections/users'
import { Media } from './collections/media'
import { Home } from './collections/home'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Media],
  globals: [Home],
  editor: lexicalEditor({}),
  plugins: [],
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  localization: {
    locales: [
      { code: 'en', label: 'English' },
      { code: 'hi', label: 'Hindi' },
    ],
    defaultLocale: 'en',
    fallback: true,
  },
})
