'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function EPKRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.push('/eddie-epk.pdf')
  }, [router])

  return null
}