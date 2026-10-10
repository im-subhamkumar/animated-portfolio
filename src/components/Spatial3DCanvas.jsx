import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sparkles, MeshTransmissionMaterial } from '@react-three/drei'
import * as THREE from 'three'

function FloatingSpatialSculptures() {
  const torusRef = useRef()
  const icosaRef = useRef()
  const sphere1Ref = useRef()
  const sphere2Ref = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    const { x, y } = state.pointer

    // Smooth camera parallax reacting to mouse movement in 3D space
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, x * 1.2, 0.05)
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, y * 0.8, 0.05)
    state.camera.lookAt(0, 0, 0)

    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.25
      torusRef.current.rotation.y = t * 0.35
    }
    if (icosaRef.current) {
      icosaRef.current.rotation.x = t * 0.2
      icosaRef.current.rotation.z = t * 0.3
    }
    if (sphere1Ref.current) {
      sphere1Ref.current.position.y = Math.sin(t * 0.8) * 0.4 + 1.2
    }
    if (sphere2Ref.current) {
      sphere2Ref.current.position.y = Math.cos(t * 0.7) * 0.3 - 1.5
    }
  })

  return (
    <>
      {/* Primary Floating Frosted Glass Torus */}
      <Float speed={2.5} rotationIntensity={0.6} floatIntensity={1.5} position={[3.5, 1, -2]}>
        <mesh ref={torusRef} castShadow>
          <torusGeometry args={[1.6, 0.45, 32, 64]} />
          <meshPhysicalMaterial
            color="#ffffff"
            transmission={0.92}
            roughness={0.08}
            ior={1.48}
            thickness={1.5}
            specularColor="#ff6b1a"
            specularIntensity={1}
            transparent
            opacity={0.85}
          />
        </mesh>
      </Float>

      {/* Floating Ethereal Cyan Crystal Icosahedron */}
      <Float speed={2} rotationIntensity={0.8} floatIntensity={1.8} position={[-3.8, -0.8, -1]}>
        <mesh ref={icosaRef} castShadow>
          <icosahedronGeometry args={[1.2, 0]} />
          <meshPhysicalMaterial
            color="#38bdf8"
            transmission={0.88}
            roughness={0.12}
            ior={1.5}
            thickness={2}
            transparent
            opacity={0.75}
          />
        </mesh>
      </Float>

      {/* Floating Sunset Amber Glass Sphere */}
      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={1.2} position={[2.8, -2, 0]}>
        <mesh ref={sphere1Ref} castShadow>
          <sphereGeometry args={[0.75, 32, 32]} />
          <meshPhysicalMaterial
            color="#ff6b1a"
            transmission={0.85}
            roughness={0.1}
            ior={1.5}
            thickness={1.8}
            transparent
            opacity={0.7}
          />
        </mesh>
      </Float>

      {/* Floating Lilac Frosted Crystal Sphere */}
      <Float speed={2.2} rotationIntensity={0.5} floatIntensity={1.4} position={[-2.5, 2.2, -1.5]}>
        <mesh ref={sphere2Ref} castShadow>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshPhysicalMaterial
            color="#c084fc"
            transmission={0.9}
            roughness={0.1}
            ior={1.5}
            thickness={1.5}
            transparent
            opacity={0.75}
          />
        </mesh>
      </Float>

      {/* Floating 3D Spatial Light Dust / Sparkles */}
      <Sparkles
        count={60}
        scale={[12, 10, 8]}
        size={2.5}
        speed={0.4}
        opacity={0.45}
        color="#38bdf8"
      />
      <Sparkles
        count={40}
        scale={[12, 10, 8]}
        size={3}
        speed={0.3}
        opacity={0.5}
        color="#ff6b1a"
      />
    </>
  )
}

export default function Spatial3DCanvas() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Radiant ambient gradient light orbs in background */}
      <div className="absolute top-[-10%] left-[20%] w-[650px] h-[650px] bg-gradient-to-tr from-sky-200/50 via-indigo-100/40 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-bl from-orange-200/40 via-amber-100/30 to-transparent rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[550px] h-[550px] bg-gradient-to-tr from-purple-200/35 via-rose-100/25 to-transparent rounded-full blur-[120px] pointer-events-none" />

      {/* Coordinate grid */}
      <div className="absolute inset-0 spatial-light-grid opacity-70" />

      {/* WebGL 3D Canvas */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 7], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={1.2} />
          <directionalLight position={[10, 15, 10]} intensity={2.5} color="#ffffff" />
          <directionalLight position={[-10, -10, -5]} intensity={1.8} color="#38bdf8" />
          <pointLight position={[0, 0, 5]} intensity={1.5} color="#ff8533" />

          <FloatingSpatialSculptures />
        </Canvas>
      </div>

      {/* Light Noise Texture */}
      <div className="light-grain-overlay" />
    </div>
  )
}
