'use client'

import { Loader } from 'lucide-react'
import { redirect } from 'next/navigation'

export default function SigninPage() {
  // TODO: Get status from payload

  const status: string = ''
  const session = null

  if (status === 'loading') {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader className="mr-2 h-6 w-6 animate-spin" />
        <span className="text-sm text-muted-foreground">Fetching session...</span>
      </div>
    )
  }

  // TODO: Get session from payload
  if (session) {
    redirect('/')
  }

  return (
    <div className="grid h-screen grid-cols-2">
      <div className="flex flex-col border-r border-primary-foreground/25 bg-primary p-8 text-primary-foreground">
        <div className="flex items-center gap-2">
          <div className="text-4xl font-semibold">Next Starter</div>
        </div>
        <div className="flex-1" />
        <div className="text-base text-primary-foreground">
          A sleek Next.js starter kit, integrating Payload for headless CMS, TailwindCSS for intuitive styling, and
          @shadcn/ui for modern UI components
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-8">
        <div className="text-center text-2xl font-semibold">Welcome to Next Starter App</div>
        <div className="mb-8 text-sm text-muted-foreground">
          Unlock the power of building fullstack web apps with modern stack
        </div>
        {/** TODO: Add login form and authenticate with payload */}
      </div>
    </div>
  )
}
