import Hero from '../components/Hero'
import MSPaint from '../components/MSPaint'
import Waves from '../components/Waves'
import Carousel from '../components/Carousel'
import DynamicBackground from '../components/DynamicBackground'

export default function Home() {

    const carouselItems = [
      { 
        src: "/images/double-rainbow.png", 
        alt: "Modern Web Design", 
        title: "Modern Web Design",
        description: "Stunning, responsive interfaces that captivate visitors across all devices. Our pixel-perfect designs combine aesthetics with functionality to elevate your brand's digital presence.",
        cta: "View Portfolio",
        ctaLink: "/web-design"
       },
      { 
       src: "/images/platte.png", 
       alt: "Performance Optimization", 
       title: "Performance Optimization",
       description: "Revitalize your existing website with lightning-fast load times, mobile-friendly designs, and search engine optimization that drives organic traffic and improves rankings.",
       cta: "Boost Your Site",
       ctaLink: "/seo"
      },
      { 
        src: "/images/arvada-sunrise.png", 
        alt: "Custom Web Applications", 
        title: "Custom Web Applications",
        description: "Bespoke solutions built with cutting-edge frameworks that grow with your business. We create intuitive applications that streamline operations and delight users.",
        cta: "Our Services",
        ctaLink: "/web-design"
      }
    ]


  return (
    <>
      <Hero />
      <Carousel items={carouselItems} />
      <MSPaint />
      <Waves />
    </>
  );
}