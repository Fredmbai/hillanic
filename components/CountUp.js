'use client'

import { useEffect, useRef, useState } from 'react'

export default function CountUp({ to, suffix = '', duration = 1800 }) {
  const [count, setCount] = useState(0)
  const ref       = useRef(null)
  const triggered = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true
          observer.disconnect()

          const startTime = performance.now()

          const tick = (now) => {
            const elapsed  = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            // Ease-out cubic for a satisfying deceleration
            const eased    = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * to))
            if (progress < 1) requestAnimationFrame(tick)
          }

          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [to, duration])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}
