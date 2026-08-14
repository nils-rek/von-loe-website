import { onMounted, onUnmounted } from 'vue'

/**
 * Lightweight scroll-reveal. Elements fade/slide in once when they enter the
 * viewport. Fully skipped when the user prefers reduced motion.
 *
 * Usage:
 *   const { reveal } = useScrollReveal()
 *   const headerReveal = reveal({ delay: 80 })
 *   <div v-bind="headerReveal"> ... </div>
 */
export function useScrollReveal() {
  const elements = []
  let observer = null
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  function reveal(options = {}) {
    const { delay = 0 } = options
    const entry = { el: null, delay }
    elements.push(entry)

    return {
      ref: (el) => {
        entry.el = el
      },
      class: prefersReducedMotion ? '' : 'scroll-reveal',
      style: delay && !prefersReducedMotion ? `--reveal-delay: ${delay}ms` : undefined,
    }
  }

  onMounted(() => {
    if (prefersReducedMotion) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((obsEntry) => {
          if (obsEntry.isIntersecting) {
            obsEntry.target.classList.add('revealed')
            observer.unobserve(obsEntry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )

    elements.forEach(({ el }) => {
      if (!el) return
      const rect = el.getBoundingClientRect()
      // Already in view on mount → reveal immediately (no flash)
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('revealed')
      } else {
        observer.observe(el)
      }
    })
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
  })

  return { reveal }
}
