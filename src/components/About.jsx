"use client"

import { motion } from "framer-motion"
import { Code, Search, TrendingUp, Building, Workflow, Users } from "lucide-react"

export default function About() {
  const backgroundItems = [
    {
      icon: <Search className="w-10 h-10 text-indigo-500" />,
      title: "20 Years in SEO",
      description: "Two decades of experience optimizing websites for search engines, staying ahead of algorithm changes, and delivering results that drive organic growth.",
      delay: 0.2
    },
    {
      icon: <Code className="w-10 h-10 text-purple-500" />,
      title: "10 Years as a Web Developer",
      description: "A decade of building responsive, high-performance websites and applications that combine technical excellence with user-centered design principles.",
      delay: 0.3
    },
    {
      icon: <Building className="w-10 h-10 text-blue-500" />,
      title: "Enterprise Experience",
      description: "Delivered results for major brands including 1800 Flowers, MapQuest, and leading digital agencies, bringing enterprise-level expertise to every project.",
      delay: 0.4
    },
    {
      icon: <Workflow className="w-10 h-10 text-green-500" />,
      title: "Full Stack Integration",
      description: "Learned to code to implement SEO solutions faster, evolving into a software engineer who bridges the gap between technical development and marketing.",
      delay: 0.5
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center mb-12 lg:mb-20">
          {/* Left side - Introduction */}
          <motion.div 
            className="lg:w-1/2 lg:pr-12"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent" style={{ fontFamily: "var(--font-outfit)" }}>
              About Me
            </h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
              With 20 years in SEO and 10 years as a web developer, I bring a unique combination of marketing insight and technical expertise to every project.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
              My journey began in search engine optimization, where I honed my skills working with major brands like 1800 Flowers, MapQuest, and top digital agencies. Seeking to implement SEO solutions more efficiently, I taught myself to code.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
              What started as a practical skill quickly became a passion, leading me to become a software engineer. Today, I'm excited to combine both disciplines to create websites that are not only beautifully designed and technically sound but also optimized for search visibility and business growth.
            </p>
          </motion.div>
          
          {/* Right side - Image or graphic */}
          <motion.div 
            className="lg:w-1/2 mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Main image */}
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/images/profile-image.jpg" 
                  alt="Professional headshot or work environment" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-5 -left-5 w-24 h-24 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 -z-10"></div>
              <div className="absolute -top-5 -right-5 w-32 h-32 rounded-lg bg-purple-100 dark:bg-purple-900/30 -z-10"></div>
            </div>
          </motion.div>
        </div>
        
        {/* Experience Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {backgroundItems.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-500/40 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="mb-5">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white" style={{ fontFamily: "var(--font-outfit)" }}>
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300" style={{ fontFamily: "var(--font-inter)" }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Call to action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-6" style={{ fontFamily: "var(--font-outfit)" }}>
            Ready to combine expert SEO strategy with cutting-edge web development for your project?
          </p>
          <a 
            href="/contact" 
            className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Let's Work Together
          </a>
        </motion.div>
      </div>
    </section>
  )
}