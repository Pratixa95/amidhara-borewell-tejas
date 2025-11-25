import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import * as THREE from 'three'

const TractorBody = ({ position, rotation }) => {
  return (
    <mesh position={position} rotation={rotation} castShadow receiveShadow>
      <boxGeometry args={[2, 0.8, 1.2]} />
      <meshStandardMaterial color="#2563eb" metalness={0.8} roughness={0.2} />
    </mesh>
  )
}

const TractorHood = ({ position, rotation }) => {
  return (
    <mesh position={position} rotation={rotation} castShadow receiveShadow>
      <boxGeometry args={[1.2, 0.6, 1]} />
      <meshStandardMaterial color="#1e40af" metalness={0.9} roughness={0.1} />
    </mesh>
  )
}

const TractorWheel = ({ position, rotation, size = 0.5 }) => {
  const wheelRef = useRef()
  
  useFrame(() => {
    if (wheelRef.current) {
      wheelRef.current.rotation.x += 0.02
    }
  })
  
  return (
    <group ref={wheelRef} position={position} rotation={rotation}>
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[size, size, 0.3, 32]} />
        <meshStandardMaterial color="#1f2937" metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0, 0.15]}>
        <cylinderGeometry args={[size * 0.7, size * 0.7, 0.1, 16]} />
        <meshStandardMaterial color="#4b5563" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  )
}

const TractorCab = ({ position, rotation }) => {
  return (
    <mesh position={position} rotation={rotation} castShadow receiveShadow>
      <boxGeometry args={[0.8, 0.9, 0.8]} />
      <meshStandardMaterial color="#3b82f6" metalness={0.9} roughness={0.1} />
    </mesh>
  )
}

const TractorExhaust = ({ position }) => {
  return (
    <mesh position={position} castShadow receiveShadow>
      <cylinderGeometry args={[0.08, 0.08, 0.6, 16]} />
      <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.1} />
    </mesh>
  )
}

const TractorDrillAttachment = ({ position, rotation }) => {
  const drillRef = useRef()
  
  useFrame(() => {
    if (drillRef.current) {
      drillRef.current.rotation.z += 0.1
    }
  })
  
  return (
    <group position={position} rotation={rotation}>
      <mesh ref={drillRef} castShadow>
        <cylinderGeometry args={[0.15, 0.15, 2, 16]} />
        <meshStandardMaterial color="#fbbf24" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, -1, 0]} castShadow>
        <coneGeometry args={[0.2, 0.4, 16]} />
        <meshStandardMaterial color="#f59e0b" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  )
}

const Tractor3D = () => {
  const groupRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating animation
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      // Slight rotation
      if (!hovered) {
        groupRef.current.rotation.y += 0.005
      }
    }
  })

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
      <pointLight position={[-5, 5, -5]} intensity={0.6} color="#3b82f6" />
      <pointLight position={[0, 5, 0]} intensity={0.5} color="#fbbf24" />
      
      <group
        ref={groupRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.1 : 1}
      >
        {/* Main Tractor Body */}
        <TractorBody position={[0, 0, 0]} rotation={[0, 0, 0]} />
        <TractorHood position={[0.6, 0.3, 0]} rotation={[0, 0, 0]} />
        <TractorCab position={[-0.5, 0.5, 0]} rotation={[0, 0, 0]} />
        <TractorExhaust position={[0.7, 0.8, 0]} />
        
        {/* Wheels */}
        <TractorWheel position={[0.8, -0.4, 0.6]} rotation={[0, 0, Math.PI / 2]} size={0.4} />
        <TractorWheel position={[0.8, -0.4, -0.6]} rotation={[0, 0, Math.PI / 2]} size={0.4} />
        <TractorWheel position={[-0.8, -0.4, 0.6]} rotation={[0, 0, Math.PI / 2]} size={0.5} />
        <TractorWheel position={[-0.8, -0.4, -0.6]} rotation={[0, 0, Math.PI / 2]} size={0.5} />
        
        {/* Drill Attachment */}
        <TractorDrillAttachment position={[-1.2, -0.2, 0]} rotation={[0, 0, 0]} />
        
        {/* Decorative Elements */}
        <mesh position={[0, 0.6, 0]} castShadow>
          <boxGeometry args={[0.3, 0.1, 0.3]} />
          <meshStandardMaterial color="#fbbf24" metalness={0.9} roughness={0.1} />
        </mesh>
        
        {/* Glow Effect */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[2, 16, 16]} />
          <meshStandardMaterial
            color="#3b82f6"
            transparent
            opacity={0.1}
            emissive="#3b82f6"
            emissiveIntensity={hovered ? 0.6 : 0.3}
          />
        </mesh>
      </group>
      
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2.2}
        autoRotate
        autoRotateSpeed={1}
        minDistance={3}
        maxDistance={8}
        enableDamping
        dampingFactor={0.05}
      />
      
      <Environment preset="sunset" />
    </>
  )
}

export default Tractor3D

