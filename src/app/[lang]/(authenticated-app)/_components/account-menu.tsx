'use client'

import { ChevronDownIcon, UserIcon } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'

export default function AccountMenu() {
  // TODO: Get these from payload
  const userName = ''
  const userEmail = ''

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 rounded-md p-2 text-sm text-muted-foreground focus-visible:outline-none focus-visible:ring-1">
          <UserIcon className="h-4 w-4" />
          <span>{userName}</span>
          <ChevronDownIcon className="h-4 w-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem disabled className="flex-col items-start space-y-1">
          <div>{userName}</div>
          <div className="text-xs">{userEmail}</div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            // TODO: Implement logout
          }}
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
