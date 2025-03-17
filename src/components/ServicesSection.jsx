import Link from "next/link"
import { ArrowRight, Palette, Search, Code, Smartphone, LineChart, Zap } from "lucide-react"

// Sample services data with enhanced styling
const webDesignServices = [
  {
    icon: <Palette className="h-10 w-10 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />,
    title: "Web Design",
    description: "Custom, responsive website designs that captivate your audience and reflect your brand identity.",
    link: "/services/web-design",
  },
  {
    icon: <Search className="h-10 w-10 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />,
    title: "Search Engine Optimization",
    description: "Data-driven SEO strategies to improve rankings, increase organic traffic, and drive conversions.",
    link: "/services/seo",
  },
  {
    icon: <Code className="h-10 w-10 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />,
    title: "Web Development",
    description: "Professional website development with clean code, fast load times, and seamless functionality.",
    link: "/services/web-development",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />,
    title: "Mobile Optimization",
    description: "Ensuring your website performs flawlessly across all devices with responsive, mobile-first design.",
    link: "/services/mobile-optimization",
  },
  {
    icon: <LineChart className="h-10 w-10 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />,
    title: "Analytics & Reporting",
    description: "Comprehensive performance tracking and actionable insights to continuously improve your digital presence.",
    link: "/services/analytics",
  },
  {
    icon: <Zap className="h-10 w-10 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />,
    title: "Page Speed Optimization",
    description: "Enhance user experience and search rankings with lightning-fast page load times through advanced performance tuning techniques.",
    link: "/services/page-speed-optimization",
  }
]

export default function ServicesSection({
  title = "Our Services",
  description = "Boost your online visibility with our expert SEO services.",
  services = webDesignServices
}) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        {(title || description) && (
          <div className="text-center mb-12">
            {title && <h2 className="text-3xl md:text-4xl font-bold mb-4 text-violet-500 drop-shadow-[0_0_10px_rgba(139,92,246,0.3)]">{title}</h2>}
            {description && (
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="group bg-gray-800/90 backdrop-blur-sm p-6 rounded-lg shadow-md 
                           border border-gray-700/50 hover:border-violet-500/30 
                           hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-700 
                           transition-all duration-300 hover:shadow-[0_4px_20px_rgba(139,92,246,0.15)]"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-violet-500 group-hover:text-violet-400 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                {service.link && (
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-teal-400 hover:text-teal-300 
                               font-medium transition-all duration-300
                               hover:drop-shadow-[0_0_6px_rgba(45,212,191,0.5)]"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}