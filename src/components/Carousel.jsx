"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"

const Carousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const carouselRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const index = Math.round(carouselRef.current.scrollLeft / carouselRef.current.offsetWidth)
        setActiveIndex(index)
      }
    }

    carouselRef.current?.addEventListener("scroll", handleScroll)
    return () => carouselRef.current?.removeEventListener("scroll", handleScroll)
  }, [])

  // Auto-scroll functionality
  useEffect(() => {
    const autoScroll = setInterval(() => {
      if (carouselRef.current) {
        const nextIndex = (activeIndex + 1) % items.length
        carouselRef.current.scrollTo({
          left: nextIndex * carouselRef.current.offsetWidth,
          behavior: "smooth"
        })
        setActiveIndex(nextIndex)
      }
    }, 15000) // 15 seconds interval

    return () => clearInterval(autoScroll)
  }, [activeIndex, items.length])

  // Function to manually navigate to a slide
  const goToSlide = (index) => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: index * carouselRef.current.offsetWidth,
        behavior: "smooth"
      })
      setActiveIndex(index)
    }
  }

  return (
    <div className="relative h-full w-full overflow-hidden" style={{ height: "800px" }}>
      <div
        ref={carouselRef}
        className="flex h-full w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {items.map((item, index) => (
          <div key={index} className="relative flex-shrink-0 h-full w-full snap-start flex items-center justify-center bg-gray-900">
            <img 
              src={item.src} 
              alt={item.alt}
              className="object-cover w-full h-full"
              style={{ 
                filter: "contrast(1.1) saturate(1.2) brightness(1.05)",
                imageRendering: "crisp-edges"
              }}
            />
            
            {/* Updated Card Design with Modern Font */}
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <div className="max-w-md w-full overflow-hidden rounded-xl shadow-xl bg-white dark:bg-black dark:bg-opacity-75 backdrop-blur-md transform hover:scale-105 transition-transform duration-300">
                <div className="p-8 text-center">
                  <h2 
                    className="text-2xl md:text-3xl font-bold mb-4 tracking-tight bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent" 
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {item.title}
                  </h2>
                  <div className="w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-4"></div>
                  <p 
                    className="text-slate-700 dark:text-slate-200 mb-8 leading-relaxed" 
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {item.description}
                  </p>
                  <Button 
                    variant="default" 
                    size="lg" 
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium px-8 py-3 rounded-md shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-purple-500/25"
                    style={{ fontFamily: "var(--font-outfit)" }}
                    onClick={() => window.location.href = item.ctaLink}
                  >
                    {item.cta}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none ${
              index === activeIndex ? "bg-white scale-125" : "bg-gray-400 bg-opacity-70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <button 
        onClick={() => goToSlide((activeIndex - 1 + items.length) % items.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full focus:outline-none transition-all hover:scale-110"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={() => goToSlide((activeIndex + 1) % items.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full focus:outline-none transition-all hover:scale-110"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}

export default Carousel