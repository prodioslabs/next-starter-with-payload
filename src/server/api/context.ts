// TODO: Replace with actual session type from auth system
type Session = {
  user: {}
}

export type CreateContextOptions = {
  session: Session | null
}

export async function createTRPCContext(): Promise<CreateContextOptions> {
  return {
    session: null,
  }
}
