"use client"

import { useEffect, useRef, useState } from 'react'
import ContactForm from '@/components/ContactForm'

export default function Component() {
  const canvasRef = useRef(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleFormSubmit = async (formData) => {
    // Here you would normally send the form data with the recaptchaToken to your server
    console.log('Form submitted with data and reCAPTCHA token:', formData)
    
    // Simulate form submission
    setIsSubmitted(true)
      
    // Reset form after showing success message
    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
    
    return true
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let time = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const drawHalftoneWave = () => {
      const gridSize = 20
      const rows = Math.ceil(canvas.height / gridSize)
      const cols = Math.ceil(canvas.width / gridSize)

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const centerX = x * gridSize
          const centerY = y * gridSize
          const distanceFromCenter = Math.sqrt(
            Math.pow(centerX - canvas.width / 2, 2) + 
            Math.pow(centerY - canvas.height / 2, 2)
          )
          const maxDistance = Math.sqrt(
            Math.pow(canvas.width / 2, 2) + 
            Math.pow(canvas.height / 2, 2)
          )
          const normalizedDistance = distanceFromCenter / maxDistance
          
          const waveOffset = Math.sin(normalizedDistance * 10 - time) * 0.5 + 0.5
          const size = gridSize * waveOffset * 0.8

          ctx.beginPath()
          ctx.arc(centerX, centerY, size / 2, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, ${waveOffset * 0.5})`
          ctx.fill()
        }
      }
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      drawHalftoneWave()

      time += 0.05
      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <div className="relative w-full h-screen">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full bg-black" />
      
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <div className="p-8 rounded-lg bg-black bg-opacity-60 backdrop-blur-md w-full max-w-md">
          {isSubmitted ? (
            <div className="text-center text-white">
              <h2 className="text-2xl font-bold mb-4">Thanks for reaching out!</h2>
              <p>We'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <ContactForm 
              title="Contact Us"
              submitText="Send Message"
              onSubmit={handleFormSubmit}
              darkMode={true}
            />
          )}
        </div>
      </div>
    </div>
  )
}