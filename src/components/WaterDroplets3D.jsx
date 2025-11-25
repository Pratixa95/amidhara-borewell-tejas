import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere } from '@react-three/drei'
import * as THREE from 'three'

const WaterDroplet = ({ position, speed = 1, size = 0.3 }) => {
  const meshRef = useRef()
  const initialY = position[1]
  const initialX = position[0]

  useFrame((state) => {
    if (meshRef.current) {
      // Floating animation with slight horizontal drift
      meshRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime * speed) * 0.3
      meshRef.current.position.x = initialX + Math.cos(state.clock.elapsedTime * speed * 0.7) * 0.2
      // Gentle rotation
      meshRef.current.rotation.y += 0.015
      meshRef.current.rotation.x += 0.008
    }
  })

  return (
    <group ref={meshRef} position={position}>
      <Sphere args={[size, 32, 32]}>
        <MeshDistortMaterial
          color="#3b82f6"
          transparent
          opacity={0.85}
          roughness={0.05}
          metalness={0.9}
          distort={0.4}
          speed={3}
          emissive="#60a5fa"
          emissiveIntensity={0.2}
        />
      </Sphere>
      {/* Highlight for realism */}
      <Sphere args={[size * 0.4, 16, 16]} position={[size * 0.35, size * 0.35, size * 0.35]}>
        <meshStandardMaterial
          color="#ffffff"
          transparent
          opacity={0.7}
          emissive="#ffffff"
          emissiveIntensity={0.6}
        />
      </Sphere>
      {/* Refraction effect */}
      <Sphere args={[size * 1.1, 16, 16]}>
        <meshStandardMaterial
          color="#3b82f6"
          transparent
          opacity={0.1}
          emissive="#3b82f6"
          emissiveIntensity={0.3}
        />
      </Sphere>
    </group>
  )
}

const WaterDroplets3D = () => {
  const droplets = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 10,
        Math.random() * 5 + 1,
        (Math.random() - 0.5) * 5
      ],
      speed: 0.5 + Math.random() * 0.8,
      size: 0.2 + Math.random() * 0.2
    }))
  }, [])

  return (
    <>
      {droplets.map((droplet, i) => (
        <WaterDroplet
          key={i}
          position={droplet.position}
          speed={droplet.speed}
          size={droplet.size}
        />
      ))}
    </>
  )
}

export default WaterDroplets3D

