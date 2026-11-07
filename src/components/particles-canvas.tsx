'use client'

import { useEffect, useRef } from 'react'

export function ParticlesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    // Golden dust particles
    const particleCount = Math.min(width < 768 ? 40 : 85, 90)
    const particles: Array<{
      x: number
      y: number
      radius: number
      alpha: number
      speedY: number
      speedX: number
      pulseSpeed: number
      color: string
    }> = []

    const goldHues = ['#e6ca7d', '#f8e9c6', '#dfcca6', '#e08a3c', '#d4af37']

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.6 + 0.4,
        alpha: Math.random() * 0.7 + 0.15,
        speedY: -(Math.random() * 0.35 + 0.1),
        speedX: (Math.random() - 0.5) * 0.25,
        pulseSpeed: Math.random() * 0.02 + 0.008,
        color: goldHues[Math.floor(Math.random() * goldHues.length)],
      })
    }

    // Rare warm bokeh circles (soft distant light spheres)
    const bokehs = [
      { x: width * 0.2, y: height * 0.35, r: 120, a: 0.04 },
      { x: width * 0.82, y: height * 0.4, r: 150, a: 0.035 },
      { x: width * 0.5, y: height * 0.75, r: 180, a: 0.045 },
    ]

    let tick = 0

    const render = () => {
      tick++
      ctx.clearRect(0, 0, width, height)

      // Draw subtle warm bokeh in background
      bokehs.forEach((b) => {
        const radGrad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r)
        radGrad.addColorStop(0, `rgba(224, 138, 60, ${b.a})`)
        radGrad.addColorStop(1, 'rgba(7, 7, 9, 0)')
        ctx.fillStyle = radGrad
        ctx.beginPath()
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw drifting golden dust
      particles.forEach((p) => {
        p.y += p.speedY
        p.x += p.speedX
        p.alpha += Math.sin(tick * p.pulseSpeed) * 0.008

        // Wrap around
        if (p.y < -10) {
          p.y = height + 10
          p.x = Math.random() * width
        }
        if (p.x < -10) p.x = width + 10
        if (p.x > width + 10) p.x = -10

        const clampedAlpha = Math.max(0.1, Math.min(0.85, p.alpha))

        ctx.save()
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = clampedAlpha
        ctx.shadowBlur = p.radius * 4
        ctx.shadowColor = p.color
        ctx.fill()
        ctx.restore()
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-[1] w-full h-full"
    />
  )
}
