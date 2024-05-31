import { User } from '@/payload/types'
import { getUser } from './auth'

export type UserWithoutSensitiveData = Pick<User, 'id' | 'email' | 'createdAt' | 'updatedAt'> & {}

export type CreateContextOptions = {
  user?: UserWithoutSensitiveData | null
}

export async function createTRPCContext(): Promise<CreateContextOptions> {
  const user = await getUser()
  return { user }
}
