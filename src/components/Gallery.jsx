import React, { useState, useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls, Environment, PerspectiveCamera, Sphere, MeshDistortMaterial } from '@react-three/drei'
import PhotoVideoGallery from './PhotoVideoGallery'
import * as THREE from 'three'

// Simplified 3D elements for animation
const AnimatedDroplet = ({ position, scale }) => {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2
    }
  })
  
  return (
    <group ref={meshRef} position={position} scale={scale}>
      <Sphere args={[0.3, 32, 32]}>
        <MeshDistortMaterial
          color="#3b82f6"
          transparent
          opacity={0.8}
          roughness={0.1}
          metalness={0.8}
          distort={0.3}
          speed={2}
        />
      </Sphere>
    </group>
  )
}

const AnimatedPump = ({ position, scale }) => {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005
    }
  })
  
  return (
    <group ref={meshRef} position={position} scale={scale}>
      <mesh castShadow>
        <cylinderGeometry args={[0.6, 0.6, 1.5, 32]} />
        <meshStandardMaterial color="#2563eb" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, 0.75, 0]} castShadow>
        <cylinderGeometry args={[0.5, 0.5, 0.4, 32]} />
        <meshStandardMaterial color="#3b82f6" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  )
}

const AnimatedTractor = ({ position, scale }) => {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005
    }
  })
  
  return (
    <group ref={meshRef} position={position} scale={scale}>
      <mesh castShadow>
        <boxGeometry args={[2, 0.8, 1.2]} />
        <meshStandardMaterial color="#2563eb" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0.6, 0.3, 0]} castShadow>
        <boxGeometry args={[1.2, 0.6, 1]} />
        <meshStandardMaterial color="#1e40af" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  )
}

const Animated3DScene = ({ onAnimationComplete }) => {
  const groupRef = useRef()
  const [scale, setScale] = useState(0.1)
  const [position, setPosition] = useState([0, 0, 10])

  useEffect(() => {
    // Animate coming to user's face
    const duration = 2000 // 2 seconds
    const startTime = Date.now()
    const startScale = 0.1
    const endScale = 1.5
    const startZ = 10
    const endZ = 2

    let animationFrame

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      
      setScale(startScale + (endScale - startScale) * easeOutCubic)
      setPosition([0, 0, startZ - (startZ - endZ) * easeOutCubic])
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        // Hold for a moment, then scale back
        setTimeout(() => {
          const scaleBackStart = Date.now()
          const scaleBackDuration = 1000
          
          const scaleBackAnimate = () => {
            const elapsed = Date.now() - scaleBackStart
            const progress = Math.min(elapsed / scaleBackDuration, 1)
            const easeInCubic = progress * progress * progress
            
            setScale(endScale - (endScale - 1) * easeInCubic)
            setPosition([0, 0, endZ + (3 - endZ) * easeInCubic])
            
            if (progress < 1) {
              animationFrame = requestAnimationFrame(scaleBackAnimate)
            } else {
              onAnimationComplete()
            }
          }
          scaleBackAnimate()
        }, 1000)
      }
    }
    
    animationFrame = requestAnimationFrame(animate)
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [onAnimationComplete])

  return (
    <group ref={groupRef} position={position} scale={scale}>
      <AnimatedDroplet position={[-1.5, 1, 0]} scale={1} />
      <AnimatedDroplet position={[1.5, 1, 0]} scale={1} />
      <AnimatedDroplet position={[0, 2, 0]} scale={0.8} />
      <AnimatedPump position={[-1, -0.5, 0]} scale={1} />
      <AnimatedTractor position={[1, -0.5, 0]} scale={1} />
    </group>
  )
}

const Gallery = () => {
  const [show3DAnimation, setShow3DAnimation] = useState(true)
  const [showGallery, setShowGallery] = useState(false)

  const handleAnimationComplete = () => {
    setShow3DAnimation(false)
    setTimeout(() => {
      setShowGallery(true)
    }, 500)
  }

  return (
    <section id="gallery" className="min-h-screen bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      {/* 3D Animation Section */}
      {show3DAnimation && (
        <div className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center">
          <div className="w-full h-full">
            <Canvas
              shadows
              gl={{ antialias: true, alpha: true }}
              camera={{ position: [0, 2, 10], fov: 50 }}
              style={{ background: 'transparent' }}
            >
              <PerspectiveCamera makeDefault position={[0, 2, 10]} fov={50} />
              <ambientLight intensity={0.7} />
              <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
              <pointLight position={[-5, 5, -5]} intensity={0.6} color="#3b82f6" />
              <pointLight position={[0, 5, 0]} intensity={0.5} color="#fbbf24" />
              
              <Suspense fallback={null}>
                <Animated3DScene onAnimationComplete={handleAnimationComplete} />
              </Suspense>
              
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.5}
              />
              <Environment preset="sunset" />
            </Canvas>
            
            {/* Loading Text */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center z-10">
              <p className="text-white text-xl md:text-2xl font-semibold animate-pulse">
                Experience Our 3D Showcase
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Gallery Content */}
      {showGallery && (
        <div className={`transition-opacity duration-500 ${showGallery ? 'opacity-100' : 'opacity-0'}`}>
          <div className="container mx-auto px-4 py-20">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                Our Work Gallery
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore our professional borewell services through photos and videos
              </p>
            </div>

            <PhotoVideoGallery
              photos={[
                '/images/sonalika-tractor-dealership.jpeg',
                '/images/yellow-drilling-rig.jpeg',
                '/images/borewell-drilling-operation.jpeg',
                '/images/drill-rods-closeup.jpeg',
                '/images/drill-rods-collection.jpeg',
              ]}
              videos={[
                '/videos/drilling-process.mp4',
                '/videos/drilling-process2.mp4',
                '/videos/drilling-process3.mp4',
                '/videos/galleryvideo3.mp4',
              ]}
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery

