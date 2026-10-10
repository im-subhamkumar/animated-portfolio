import React, { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'motion/react'

export default function GlassCursor() {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  // Spring physics for smooth fluid cursor lag
  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseOver = (e) => {
      const target = e.target
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-cursor="hover"]') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isVisible, mouseX, mouseY])

  if (!isVisible) return null

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {/* Outer fluid trailing ring with iOS light glass aesthetic */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? 56 : 28,
          height: isHovered ? 56 : 28,
          borderColor: isHovered ? '#ff6b1a' : 'rgba(15, 23, 42, 0.25)',
          backgroundColor: isHovered ? 'rgba(255, 107, 26, 0.12)' : 'rgba(255, 255, 255, 0.25)',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        className="rounded-full border backdrop-blur-[2px] pointer-events-none fixed top-0 left-0 shadow-sm"
      />

      {/* Center sharp laser dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 0 : 1,
        }}
        className="w-1.5 h-1.5 rounded-full bg-[#ff6b1a] fixed top-0 left-0 pointer-events-none shadow-[0_0_8px_#ff6b1a]"
      />
    </div>
  )
}
