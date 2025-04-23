"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = 500

    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
    }[] = []

    const createParticles = () => {
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100 + 155)}, ${Math.random() * 0.5 + 0.3})`,
        })
      }
    }

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()

        p.x += p.speedX
        p.y += p.speedY

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1
      }

      requestAnimationFrame(animateParticles)
    }

    createParticles()
    animateParticles()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = 500
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section className="relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              <span className="italic">Revolutionizing</span> the Future with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-yellow-400 font-extrabold">
                Advanced AI
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              Algenix AI delivers cutting-edge artificial intelligence solutions to transform your business and unlock
              new possibilities.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white" asChild>
                <a href="https://github.com/algenix-aI/Algenix-AI" target="_blank" rel="noopener noreferrer">
                  Open Source <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <Button variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-900/50" asChild>
                <a
                  href="https://github.com/algenix-aI/Algenix-AI/blob/main/Algenix%20AI%20Technical%20Whitepaper.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Technical Analysis
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image src="/logo.png" alt="Algenix AI" fill className="object-contain animate-float" />
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                className="absolute -top-4 -right-4 text-yellow-300"
              >
                <Sparkles className="h-8 w-8" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
