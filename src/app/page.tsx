'use client'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"



export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push('/acceso')
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello!</h1>
    </main>
  )
}
