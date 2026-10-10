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
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, x * 1.5, 0.05)
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, y * 1.5, 0.05)
    state.camera.lookAt(0, 0, 0)

    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.15
      torusRef.current.rotation.y = t * 0.25
    }
    if (icosaRef.current) {
      icosaRef.current.rotation.x = t * 0.15
      icosaRef.current.rotation.z = t * 0.2
    }
    if (sphere1Ref.current) {
      sphere1Ref.current.position.y = Math.sin(t * 0.5) * 0.3 + 1.5
    }
    if (sphere2Ref.current) {
      sphere2Ref.current.position.y = Math.cos(t * 0.4) * 0.2 - 1.5
    }
  })

  return (
    <>
      {/* Primary Floating Dark Glass Torus */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5} position={[3.5, 1, -3]}>
        <mesh ref={torusRef} castShadow>
          <torusGeometry args={[1.8, 0.4, 32, 64]} />
          <meshPhysicalMaterial
            color="#080808"
            transmission={0.95}
            roughness={0.15}
            ior={1.6}
            thickness={2}
            specularColor="#ff6b1a"
            specularIntensity={2}
            transparent
            opacity={1}
          />
        </mesh>
      </Float>

      {/* Floating Ethereal Dark Icosahedron */}
      <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1.8} position={[-4.5, -1, -2]}>
        <mesh ref={icosaRef} castShadow>
          <icosahedronGeometry args={[1.4, 0]} />
          <meshPhysicalMaterial
            color="#000000"
            transmission={0.9}
            roughness={0.2}
            ior={1.7}
            thickness={2}
            specularColor="#ff6b1a"
            transparent
            opacity={0.8}
          />
        </mesh>
      </Float>

      {/* Floating Deep Orange Glass Sphere */}
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={1} position={[3.5, -2.5, -1]}>
        <mesh ref={sphere1Ref} castShadow>
          <sphereGeometry args={[0.9, 32, 32]} />
          <meshPhysicalMaterial
            color="#ff6b1a"
            transmission={0.8}
            roughness={0.15}
            ior={1.5}
            thickness={2}
            emissive="#ff6b1a"
            emissiveIntensity={0.2}
            transparent
            opacity={0.9}
          />
        </mesh>
      </Float>

      {/* Floating Dark Glass Sphere */}
      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={1.2} position={[-3, 2.5, -2]}>
        <mesh ref={sphere2Ref} castShadow>
          <sphereGeometry args={[0.7, 32, 32]} />
          <meshPhysicalMaterial
            color="#111111"
            transmission={0.9}
            roughness={0.1}
            ior={1.5}
            thickness={1.5}
            specularColor="#ff8533"
            transparent
            opacity={0.9}
          />
        </mesh>
      </Float>

      {/* Floating 3D Spatial Light Dust / Sparkles */}
      <Sparkles
        count={80}
        scale={[15, 15, 10]}
        size={2}
        speed={0.2}
        opacity={0.3}
        color="#ff6b1a"
      />
      <Sparkles
        count={60}
        scale={[15, 15, 10]}
        size={3}
        speed={0.15}
        opacity={0.2}
        color="#ffffff"
      />
    </>
  )
}

export default function Cinematic3DCanvas() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Radiant ambient dark gradient light orbs in background */}
      <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-gradient-to-tr from-[#ff6b1a]/10 via-[#ea580c]/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-gradient-to-bl from-[#ff6b1a]/8 via-transparent to-transparent rounded-full blur-[130px] pointer-events-none" />

      {/* WebGL 3D Canvas */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 15, 10]} intensity={1.5} color="#ffffff" />
          <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#ff6b1a" />
          <pointLight position={[0, 0, 5]} intensity={2} color="#ff8533" distance={20} />

          <FloatingSpatialSculptures />
        </Canvas>
      </div>
    </div>
  )
}
