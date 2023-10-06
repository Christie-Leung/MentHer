'use client'
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className='p-4'>
      Hello!
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}

