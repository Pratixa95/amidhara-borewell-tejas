import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Loader } from '@react-three/drei'
import WaterDroplets3D from './WaterDroplets3D'
import BorewellPump3D from './BorewellPump3D'

const Scene3D = ({ showPump = true, showDroplets = true }) => {
  return (
    <div className="w-full h-full relative">
      <Canvas
        shadows
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: showPump ? [0, 2, 5] : [0, 0, 5], fov: 50 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          {showDroplets && <WaterDroplets3D />}
          {showPump && <BorewellPump3D />}
        </Suspense>
      </Canvas>
      <Loader />
    </div>
  )
}

export default Scene3D

