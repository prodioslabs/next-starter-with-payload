import path from 'path'
import { fileURLToPath } from 'url'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import { s3Storage } from '@payloadcms/storage-s3'
import { Resource } from 'sst'
import { env } from '@/env'
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
  plugins: [
    s3Storage({
      enabled: env.NODE_ENV === 'production',
      collections: {
        [Media.slug]: true,
      },
      bucket: Resource.NextStarterWithPayloadBucket.name,
      config: {},
    }),
  ],
  secret: env.PAYLOAD_SECRET,
  typescript: {
    outputFile: path.resolve(dirname, 'types.ts'),
  },
  db: mongooseAdapter({
    url: env.DATABASE_URL,
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
