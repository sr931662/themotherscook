import { useEffect, useRef, useState } from 'react'
import type { ElementType, ReactNode } from 'react'

interface FadeUpProps {
  as?: ElementType
  className?: string
  children: ReactNode
  /** Milliseconds to stagger the reveal, for lists of cards. */
  delay?: number
}

/** Fades and slides content up into place the first time it enters the viewport. */
export function FadeUp({ as: Tag = 'div', className = '', children, delay = 0 }: FadeUpProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const node = ref.current
    if (!node || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`fadeUp ${visible ? 'visible' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
