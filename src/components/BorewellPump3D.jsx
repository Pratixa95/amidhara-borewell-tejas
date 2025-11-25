import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import * as THREE from 'three'

const PumpBase = ({ position }) => {
  return (
    <mesh position={position} castShadow receiveShadow>
      <cylinderGeometry args={[0.8, 0.8, 0.3, 32]} />
      <meshStandardMaterial color="#1e3a8a" metalness={0.8} roughness={0.2} />
    </mesh>
  )
}

const PumpBody = ({ position, rotation }) => {
  return (
    <mesh position={position} rotation={rotation} castShadow receiveShadow>
      <cylinderGeometry args={[0.6, 0.7, 1.5, 32]} />
      <meshStandardMaterial color="#2563eb" metalness={0.9} roughness={0.1} />
    </mesh>
  )
}

const PumpHead = ({ position, rotation }) => {
  return (
    <mesh position={position} rotation={rotation} castShadow receiveShadow>
      <cylinderGeometry args={[0.5, 0.6, 0.4, 32]} />
      <meshStandardMaterial color="#3b82f6" metalness={0.9} roughness={0.1} />
    </mesh>
  )
}

const PumpPipe = ({ position, height = 2 }) => {
  return (
    <mesh position={position} castShadow receiveShadow>
      <cylinderGeometry args={[0.15, 0.15, height, 16]} />
      <meshStandardMaterial color="#1e40af" metalness={0.8} roughness={0.2} />
    </mesh>
  )
}

const WaterFlow = ({ position, rotation }) => {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y -= 0.05
      if (meshRef.current.position.y < -1) {
        meshRef.current.position.y = 0.5
      }
    }
  })

  return (
    <mesh ref={meshRef} position={position} rotation={rotation}>
      <cylinderGeometry args={[0.12, 0.12, 0.8, 16]} />
      <meshStandardMaterial
        color="#60a5fa"
        transparent
        opacity={0.7}
        emissive="#3b82f6"
        emissiveIntensity={0.3}
      />
    </mesh>
  )
}

const BorewellPump3D = () => {
  const groupRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle rotation animation - slower and more prominent
      groupRef.current.rotation.y += 0.01
      // Floating effect
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15
    }
  })

  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
      <pointLight position={[-5, 5, -5]} intensity={0.6} color="#3b82f6" />
      <pointLight position={[0, 5, 0]} intensity={0.4} color="#60a5fa" />
      
      <group
        ref={groupRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.15 : 1.2}
      >
        {/* Main Pump Structure */}
        <PumpBase position={[0, -1.5, 0]} />
        <PumpBody position={[0, -0.5, 0]} rotation={[0, 0, 0]} />
        <PumpHead position={[0, 0.5, 0]} rotation={[0, 0, 0]} />
        
        {/* Pipes */}
        <PumpPipe position={[0, -2.5, 0]} height={1} />
        <PumpPipe position={[0.3, 0.8, 0]} height={0.5} />
        <PumpPipe position={[-0.3, 0.8, 0]} height={0.5} />
        
        {/* Water Flow Effect */}
        <WaterFlow position={[0, 1.2, 0]} rotation={[0, 0, 0]} />
        
        {/* Decorative Elements */}
        <mesh position={[0, 0.7, 0]} castShadow>
          <ringGeometry args={[0.55, 0.6, 16]} />
          <meshStandardMaterial color="#60a5fa" metalness={0.9} roughness={0.1} />
        </mesh>
        
        {/* Glow Effect */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[1.2, 16, 16]} />
          <meshStandardMaterial
            color="#3b82f6"
            transparent
            opacity={0.1}
            emissive="#3b82f6"
            emissiveIntensity={hovered ? 0.5 : 0.2}
          />
        </mesh>
      </group>
      
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2.2}
        autoRotate
        autoRotateSpeed={1.5}
        minDistance={3}
        maxDistance={8}
        enableDamping
        dampingFactor={0.05}
      />
      
      <Environment preset="sunset" />
    </>
  )
}

export default BorewellPump3D

