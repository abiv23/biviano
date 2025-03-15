import Hero from '../components/Hero'
import MSPaint from '../components/MSPaint'
import Waves from '../components/Waves'
import Carousel from '../components/Carousel'
import DynamicBackground from '../components/DynamicBackground'

export default function Home() {

    const carouselItems = [
      { 
       src: "/images/platte.png", 
       alt: "Performance Optimization", 
       title: "Performance Optimization",
       description: "Revitalize your existing website with lightning-fast load times, mobile-friendly designs, and search engine optimization that drives organic traffic and improves rankings.",
       cta: "Boost Your Site",
       ctaLink: "/optimization"
      },
      { 
        src: "/images/arvada-sunrise.png", 
        alt: "Custom Web Applications", 
        title: "Custom Web Applications",
        description: "Bespoke solutions built with cutting-edge frameworks that grow with your business. We create intuitive applications that streamline operations and delight users.",
        cta: "Our Services",
        ctaLink: "/services"
      },
      { 
        src: "/images/arcade.png", 
        alt: "Custom Arcade Builds", 
        title: "Free Play Arcades",
        description: "Custom-built arcade machines featuring classic and modern games for businesses and enthusiasts. Create memorable experiences that keep customers coming back.",
        cta: "Get a Quote",
        ctaLink: "/support"
      },
      { 
       src: "/images/double-rainbow.png", 
       alt: "Modern Web Design", 
       title: "Modern Web Design",
       description: "Stunning, responsive interfaces that captivate visitors across all devices. Our pixel-perfect designs combine aesthetics with functionality to elevate your brand's digital presence.",
       cta: "View Portfolio",
       ctaLink: "/portfolio"
      }
    ]


  return (
    <>
      <Hero />
      <DynamicBackground />
      <MSPaint />
      <Carousel items={carouselItems} />
      <Waves />
    </>
  );
}