import { useCallback } from 'react'

const HEADER_OFFSET = 84

/**
 * Returns a click handler for in-page `#id` links that smooth-scrolls with an
 * offset for the sticky header, instead of relying on default anchor jump.
 */
export function useAnchorScroll() {
  return useCallback((event: React.MouseEvent<HTMLAnchorElement>) => {
    const href = event.currentTarget.getAttribute('href')
    if (!href || !href.startsWith('#')) return

    const id = href.slice(1)
    const target = document.getElementById(id)
    if (!target) return

    event.preventDefault()
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const top = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET

    window.scrollTo({ top, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
    history.pushState(null, '', href)
  }, [])
}
