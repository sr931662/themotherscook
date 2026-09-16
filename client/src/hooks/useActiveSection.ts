import { useEffect, useState } from 'react'

/**
 * Tracks which of the given section ids is currently most visible in the
 * viewport, so the nav can highlight the matching link as the user scrolls.
 */
export function useActiveSection(sectionIds: string[], headerOffset = 100): string {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        rootMargin: `-${headerOffset}px 0px -60% 0px`,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [sectionIds, headerOffset])

  return activeId
}
