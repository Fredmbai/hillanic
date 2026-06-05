'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const SELECTOR =
  '.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade'

export default function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    let observer

    const timer = setTimeout(() => {
      // Auto-stagger: children of [data-stagger] get incremental delays injected
      document.querySelectorAll('[data-stagger]').forEach((parent) => {
        const children = parent.querySelectorAll(
          ':scope > .reveal, :scope > .reveal-left, :scope > .reveal-right, :scope > .reveal-scale, :scope > .reveal-fade'
        )
        children.forEach((child, i) => {
          child.style.transitionDelay = `${i * 0.09}s`
        })
      })

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              // Stop watching once revealed — saves observer overhead
              observer.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0.1,
          // Trigger slightly before the element fully enters the viewport
          rootMargin: '0px 0px -48px 0px',
        }
      )

      document.querySelectorAll(SELECTOR).forEach((el) => observer.observe(el))
    }, 60)

    return () => {
      clearTimeout(timer)
      observer?.disconnect()
    }
  }, [pathname])

  return null
}
