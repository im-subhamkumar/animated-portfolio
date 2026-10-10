import React from 'react'
import { motion } from 'motion/react'

export default function SpatialBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-slate-50">
      {/* Subtle Spatial Coordinate Grid */}
      <div className="absolute inset-0 grid-mesh opacity-80" />

      {/* Primary Cyan Aurora */}
      <motion.div 
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.45, 0.3],
          x: [0, 20, 0],
          y: [0, -30, 0]
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full bg-cyan-300/40 blur-[120px]"
      />

      {/* Secondary Electric Violet Aurora */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
          x: [0, -30, 0],
          y: [0, 40, 0]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[35%] -right-20 w-[550px] h-[550px] rounded-full bg-purple-300/40 blur-[130px]"
      />

      {/* Bottom Subtle Emerald Glow */}
      <motion.div 
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -bottom-20 left-1/3 w-[500px] h-[400px] rounded-full bg-emerald-300/30 blur-[120px]"
      />

      {/* Vignette Edge Shading */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-white/40" />
    </div>
  )
}
