'use client'

import Content from '@/components/Content/Content'
import lcs from './page.module.scss'
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'
export default function Home() {

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main className={lcs.main}>
      <Content />
    </main>
  )
}
