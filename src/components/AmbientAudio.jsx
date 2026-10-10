import React, { useState, useEffect, useRef } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

export default function AmbientAudio() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioCtxRef = useRef(null)
  const gainNodeRef = useRef(null)
  const osc1Ref = useRef(null)
  const osc2Ref = useRef(null)

  const toggleAudio = () => {
    if (!isPlaying) {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext
        const ctx = new AudioCtx()
        audioCtxRef.current = ctx

        const gainNode = ctx.createGain()
        gainNode.gain.setValueAtTime(0.001, ctx.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.05, ctx.currentTime + 3)
        gainNode.connect(ctx.destination)
        gainNodeRef.current = gainNode

        // Fundamental warm ambient chord: 110Hz (A2 note)
        const osc1 = ctx.createOscillator()
        osc1.type = 'sine'
        osc1.frequency.setValueAtTime(110, ctx.currentTime)

        // Sub-harmonic warmth: 55Hz (A1 sub-bass)
        const osc2 = ctx.createOscillator()
        osc2.type = 'triangle'
        osc2.frequency.setValueAtTime(55, ctx.currentTime)

        osc1.connect(gainNode)
        osc2.connect(gainNode)

        osc1.start()
        osc2.start()

        osc1Ref.current = osc1
        osc2Ref.current = osc2

        setIsPlaying(true)
      } catch (err) {
        console.warn('AudioContext requires user gesture:', err)
      }
    } else {
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 1)
        setTimeout(() => {
          try {
            osc1Ref.current?.stop()
            osc2Ref.current?.stop()
            audioCtxRef.current?.close()
          } catch (e) {}
          setIsPlaying(false)
        }, 1000)
      } else {
        setIsPlaying(false)
      }
    }
  }

  useEffect(() => {
    return () => {
      try {
        audioCtxRef.current?.close()
      } catch (e) {}
    }
  }, [])

  return (
    <button
      onClick={toggleAudio}
      title={isPlaying ? "Mute Spatial Atmosphere" : "Enable Spatial Atmosphere"}
      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 hover:bg-white border border-white/90 shadow-sm text-xs font-mono transition-all text-slate-700 hover:text-slate-900 backdrop-blur-md"
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-3.5 h-3.5 text-[#ea580c] animate-pulse" />
          <div className="flex items-end gap-0.5 h-3">
            <span className="w-0.5 h-2 bg-[#ea580c] animate-pulse" style={{ animationDuration: '0.6s' }} />
            <span className="w-0.5 h-3 bg-[#ea580c] animate-pulse" style={{ animationDuration: '0.9s' }} />
            <span className="w-0.5 h-1.5 bg-[#ea580c] animate-pulse" style={{ animationDuration: '0.4s' }} />
          </div>
          <span className="hidden sm:inline text-[10px] text-slate-500 font-semibold">SPATIAL ON</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-slate-400" />
          <span className="hidden sm:inline text-[10px] text-slate-500 font-semibold">AUDIO OFF</span>
        </>
      )}
    </button>
  )
}
