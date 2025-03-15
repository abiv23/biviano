"use client"

import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'

export default function Component() {
  const canvasRef = useRef(null)
  const recaptchaRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false)
  const [recaptchaError, setRecaptchaError] = useState('')

  // Replace with your actual reCAPTCHA site key
  const RECAPTCHA_SITE_KEY = 'YOUR_RECAPTCHA_SITE_KEY'

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const executeRecaptcha = async () => {
    if (!window.grecaptcha || !recaptchaLoaded) {
      setRecaptchaError('reCAPTCHA not loaded yet')
      return null
    }

    try {
      const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'submit' })
      return token
    } catch (error) {
      console.error('reCAPTCHA execution error:', error)
      setRecaptchaError('Failed to verify reCAPTCHA')
      return null
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setRecaptchaError('')
    
    // Execute reCAPTCHA and get token
    const recaptchaToken = await executeRecaptcha()
    
    if (!recaptchaToken) {
      setIsSubmitting(false)
      return
    }
    
    // Here you would normally send the form data along with the recaptchaToken to your server
    // For demonstration, we're simulating a form submission
    console.log('Form submitted with reCAPTCHA token:', recaptchaToken)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          email: '',
          message: ''
        })
      }, 3000)
    }, 1500)
  }

  // Initialize reCAPTCHA when component mounts
  useEffect(() => {
    // This function will be called once the reCAPTCHA script is loaded
    window.onRecaptchaLoad = () => {
      setRecaptchaLoaded(true)
    }

    return () => {
      // Clean up
      window.onRecaptchaLoad = undefined
    }
  }, [])

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
      {/* Load reCAPTCHA v3 script */}
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}&onload=onRecaptchaLoad`}
        strategy="afterInteractive"
      />
      
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full bg-black" />
      
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <div className="p-8 rounded-lg bg-black bg-opacity-60 backdrop-blur-md w-full max-w-md">
          {isSubmitted ? (
            <div className="text-center text-white">
              <h2 className="text-2xl font-bold mb-4">Thanks for reaching out!</h2>
              <p>We'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-6 text-white text-center">Contact Us</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                
                {recaptchaError && (
                  <div className="mb-4 text-red-500 text-sm">
                    {recaptchaError}
                  </div>
                )}
                
                <div ref={recaptchaRef} className="hidden"></div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2 px-4 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                <p className="mt-4 text-xs text-gray-400 text-center">
                  This site is protected by reCAPTCHA and the Google
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300"> Privacy Policy</a> and
                  <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300"> Terms of Service</a> apply.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}