import React, { useEffect, useRef } from 'react'

const WaterEffects = ({ variant = 'waves' }) => {
  const canvasRef = useRef(null)

  // Animated water waves using canvas
  useEffect(() => {
    if (variant === 'waves' && canvasRef.current) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      let animationFrameId
      let time = 0

      const resizeCanvas = () => {
        canvas.width = canvas.offsetWidth
        canvas.height = canvas.offsetHeight
      }

      resizeCanvas()
      window.addEventListener('resize', resizeCanvas)

      const drawWaves = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        
        time += 0.02

        // Multiple wave layers for depth
        for (let i = 0; i < 3; i++) {
          ctx.beginPath()
          ctx.moveTo(0, canvas.height / 2)
          
          const amplitude = 20 + i * 10
          const frequency = 0.01 + i * 0.005
          const speed = time * (0.5 + i * 0.3)
          
          for (let x = 0; x < canvas.width; x += 1) {
            const y = canvas.height / 2 + 
              Math.sin(x * frequency + speed) * amplitude * Math.sin(time * 0.5) +
              Math.cos(x * frequency * 1.5 + speed * 1.2) * amplitude * 0.5
            ctx.lineTo(x, y)
          }
          
          ctx.lineTo(canvas.width, canvas.height)
          ctx.lineTo(0, canvas.height)
          ctx.closePath()
          
          // Gradient fill for water
          const gradient = ctx.createLinearGradient(0, canvas.height / 2, 0, canvas.height)
          const opacity = 0.15 - i * 0.03
          gradient.addColorStop(0, `rgba(59, 130, 246, ${opacity})`)
          gradient.addColorStop(1, `rgba(37, 99, 235, ${opacity * 0.5})`)
          
          ctx.fillStyle = gradient
          ctx.fill()
        }

        animationFrameId = requestAnimationFrame(drawWaves)
      }

      drawWaves()

      return () => {
        window.removeEventListener('resize', resizeCanvas)
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [variant])


  if (variant === 'waves') {
    return (
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />
    )
  }

  return null
}

export default WaterEffects

