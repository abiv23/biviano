import { Code, Search, Palette, Smartphone, LineChart, Zap } from "lucide-react"

import Hero from '@/components/Hero'
import Waves from '@/components/Waves'
import Carousel from '@/components/Carousel'
import ServicesSection from '@/components/ServicesSection'
import CompanyStats from '@/components/CompanyStats'

export default function Home() {

    const carouselItems = [
      { 
        src: "/images/forrest-light.jpg", 
        alt: "Modern Web Design", 
        title: "Modern Web Design",
        description: "Stunning, responsive interfaces that captivate visitors across all devices. Our pixel-perfect designs combine aesthetics with functionality to elevate your brand's digital presence.",
        cta: "View Portfolio",
        ctaLink: "/web-design"
       },
      { 
       src: "/images/denver-platte.jpg", 
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

    const webDesignServices = [
      {
          icon: <Palette className="h-10 w-10 text-blue-600" />,
          title: "Web Design",
          description: "Custom, responsive website designs that captivate your audience and reflect your brand identity.",
          link: "/web-design",
      },
      {
          icon: <Search className="h-10 w-10 text-blue-600" />,
          title: "Search Engine Optimization",
          description: "Data-driven SEO strategies to improve rankings, increase organic traffic, and drive conversions.",
          link: "/seo",
      },
      {
          icon: <Code className="h-10 w-10 text-blue-600" />,
          title: "Web Development",
          description: "Professional website development with clean code, fast load times, and seamless functionality.",
          link: "/web-development",
      },
      {
          icon: <Smartphone className="h-10 w-10 text-blue-600" />,
          title: "Mobile Optimization",
          description: "Ensuring your website performs flawlessly across all devices with responsive, mobile-first design.",
          link: "/mobile-optimization",
      },
      {
          icon: <LineChart className="h-10 w-10 text-blue-600" />,
          title: "Analytics & Reporting",
          description: "Comprehensive performance tracking and actionable insights to continuously improve your digital presence.",
          link: "/analytics",
      },
      {
        icon: <Zap className="h-10 w-10 text-blue-600" />,
        title: "Page Speed Optimization",
        description: "Enhance user experience and search rankings with lightning-fast page load times through advanced performance tuning techniques.",
        link: "/page-speed-optimization",
      }
  ]


  return (
    <>
      <Hero />
      <Carousel items={carouselItems} />
      <ServicesSection 
          title="Our Services" 
          description=""
          services={webDesignServices}
        />
      <CompanyStats />
      <Waves />
    </>
  );
}