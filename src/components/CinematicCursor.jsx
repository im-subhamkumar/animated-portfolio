import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })
  const visible = useRef(false)

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsMobile(true)
      return
    }

    const move = (e) => {
      target.current = { x: e.clientX, y: e.clientY }
      if (!visible.current) {
        visible.current = true
        if (dotRef.current) dotRef.current.style.opacity = '1'
        if (ringRef.current) ringRef.current.style.opacity = '1'
      }
    }

    const leave = () => {
      visible.current = false
      if (dotRef.current) dotRef.current.style.opacity = '0'
      if (ringRef.current) ringRef.current.style.opacity = '0'
    }

    const handleHoverIn = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '56px'
        ringRef.current.style.height = '56px'
        ringRef.current.style.borderColor = '#ff6b1a'
        ringRef.current.style.background = 'rgba(255, 107, 26, 0.08)'
      }
      if (dotRef.current) {
        dotRef.current.style.transform = 'translate(-50%, -50%) scale(0)'
      }
    }

    const handleHoverOut = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '36px'
        ringRef.current.style.height = '36px'
        ringRef.current.style.borderColor = 'rgba(255, 255, 255, 0.3)'
        ringRef.current.style.background = 'transparent'
      }
      if (dotRef.current) {
        dotRef.current.style.transform = 'translate(-50%, -50%) scale(1)'
      }
    }

    document.addEventListener('mousemove', move)
    document.addEventListener('mouseleave', leave)

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleHoverIn)
      el.addEventListener('mouseleave', handleHoverOut)
    })

    // Animation loop with lerp
    let raf
    const lerp = (a, b, n) => a + (b - a) * n

    const tick = () => {
      pos.current.x = lerp(pos.current.x, target.current.x, 0.15)
      pos.current.y = lerp(pos.current.y, target.current.y, 0.15)

      if (dotRef.current) {
        dotRef.current.style.left = `${target.current.x}px`
        dotRef.current.style.top = `${target.current.y}px`
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${pos.current.x}px`
        ringRef.current.style.top = `${pos.current.y}px`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    // MutationObserver to handle dynamic elements
    const observer = new MutationObserver(() => {
      const newElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select')
      newElements.forEach(el => {
        el.addEventListener('mouseenter', handleHoverIn)
        el.addEventListener('mouseleave', handleHoverOut)
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseleave', leave)
      observer.disconnect()
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverIn)
        el.removeEventListener('mouseleave', handleHoverOut)
      })
    }
  }, [])

  if (isMobile) return null

  return (
    <>
      {/* Center dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: '#ff6b1a',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: 0,
          transition: 'transform 0.2s ease, opacity 0.3s ease',
        }}
      />
      {/* Outer ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          border: '1.5px solid rgba(255, 255, 255, 0.3)',
          background: 'transparent',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9998,
          opacity: 0,
          transition: 'width 0.3s ease, height 0.3s ease, border-color 0.3s ease, background 0.3s ease, opacity 0.3s ease',
        }}
      />
    </>
  )
}
