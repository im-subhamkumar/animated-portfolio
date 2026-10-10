import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Float, Environment, ContactShadows, PresentationControls, useTexture, RoundedBox } from '@react-three/drei'

function Avatar3D() {
  const texture = useTexture('/subham.jpg')
  
  return (
    <Float speed={2.5} rotationIntensity={0.6} floatIntensity={1.8}>
      {/* Main 3D Photo Card with clearcoat film finish */}
      <RoundedBox args={[3.2, 3.2, 0.16]} radius={0.25} smoothness={4} castShadow receiveShadow>
        <meshPhysicalMaterial 
          map={texture} 
          roughness={0.15} 
          metalness={0.05}
          clearcoat={1}
          clearcoatRoughness={0.1}
          reflectivity={0.9}
        />
      </RoundedBox>
      
      {/* Floating 3D Prismatic Geometry - Radiant Amber & Sky Cyan */}
      <mesh position={[2, 1.8, 0.6]} castShadow>
        <sphereGeometry args={[0.38, 32, 32]} />
        <meshPhysicalMaterial color="#ff6b1a" transmission={0.92} opacity={1} roughness={0.05} ior={1.5} thickness={2} />
      </mesh>
      
      <mesh position={[-2, -1.5, 0.7]} castShadow rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[0.5, 0.14, 16, 32]} />
        <meshPhysicalMaterial color="#0284c7" transmission={0.92} opacity={1} roughness={0.05} ior={1.5} thickness={2} />
      </mesh>

      <mesh position={[1.7, -1.8, -0.4]} castShadow>
        <octahedronGeometry args={[0.38]} />
        <meshPhysicalMaterial color="#a855f7" transmission={0.92} opacity={1} roughness={0.05} ior={1.5} thickness={2} />
      </mesh>
    </Float>
  )
}

export default function HolographicBadge() {
  return (
    <div className="relative w-full max-w-[420px] aspect-square flex justify-center items-center">
      {/* Ambient background soft pastel halo */}
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-200/50 via-sky-200/40 to-purple-200/40 rounded-full blur-3xl opacity-80 pointer-events-none" />
      
      {/* 3D Canvas with smooth mouse presentation controls */}
      <div className="absolute inset-0 cursor-grab active:cursor-grabbing">
        <Canvas camera={{ position: [0, 0, 6.2], fov: 45 }}>
          <ambientLight intensity={1.5} />
          <spotLight position={[10, 15, 10]} angle={0.25} penumbra={1} intensity={2.8} color="#ffffff" castShadow />
          <directionalLight position={[-10, 8, -5]} intensity={1.5} color="#fed7aa" />
          <directionalLight position={[5, -10, 5]} intensity={1.2} color="#bae6fd" />
          
          <PresentationControls
            global
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 1500 }}
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
          >
            <Suspense fallback={null}>
              <Avatar3D />
              <Environment preset="city" />
            </Suspense>
          </PresentationControls>
          
          <ContactShadows position={[0, -2.5, 0]} opacity={0.35} scale={10} blur={2.5} far={4} color="#0f172a" />
        </Canvas>
      </div>

      {/* iOS Frosted HUD Badge Overlay */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs backdrop-blur-xl bg-white/80 px-4 py-2.5 rounded-2xl border border-white/90 pointer-events-none shadow-[0_10px_25px_rgba(15,23,42,0.08)]">
        <div>
          <div className="font-display font-extrabold text-slate-900 text-sm">SUBHAM KUMAR</div>
          <div className="text-[10px] text-[#ea580c] font-mono uppercase tracking-wider font-bold">3D WebGL Spatial Canvas</div>
        </div>
        <div className="text-right">
          <div className="text-[10px] text-emerald-700 font-mono font-bold flex items-center gap-1.5 justify-end">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            60 FPS
          </div>
        </div>
      </div>
    </div>
  )
}
