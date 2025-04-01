"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, Code } from "lucide-react"
import { Button } from "@/components/ui/button"

const projectsData = [
  {
    id: 1,
    title: "zDoubleB",
    description: "A modern web interface with clean design aesthetics and responsive layout implementation.",
    imageSrc: "/images/zdoubleb-screenshot.png", // You'll need to create or add this image
    liveUrl: "https://zdoubleb.vercel.app/",
    githubUrl: "", // Add if available
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    category: "Web Development"
  },
  {
    id: 2,
    title: "KOC Image Gallery",
    description: "An elegant image gallery solution with interactive elements and smooth animations.",
    imageSrc: "/images/koc-image-screenshot.png", // You'll need to create or add this image
    liveUrl: "https://koc-image.vercel.app/",
    githubUrl: "", // Add if available
    technologies: ["React", "Next.js", "Framer Motion", "Responsive Design"],
    category: "Web Development"
  },
  // Placeholder for future projects
  {
    id: 3,
    title: "Coming Soon",
    description: "An exciting new project currently in development. Stay tuned for updates!",
    imageSrc: "/images/placeholder-project.png", // Create a placeholder image
    liveUrl: "",
    githubUrl: "",
    technologies: ["Next.js", "Tailwind CSS", "Modern UI"],
    category: "In Development",
    isPlaceholder: true
  }
]

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative rounded-xl overflow-hidden shadow-lg group bg-white dark:bg-gray-800 h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: project.id * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Card Top Border Accent */}
      <div className="h-1 w-full bg-gradient-to-r from-indigo-500 to-purple-600" />

      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <div 
          className={`absolute inset-0 transition-transform duration-500 ease-in-out bg-cover bg-center z-0 ${isHovered ? 'scale-105' : 'scale-100'}`}
          style={{ 
            backgroundImage: `url(${project.imageSrc})`, 
            filter: project.isPlaceholder ? 'grayscale(100%)' : 'none' 
          }}
        />
        
        {/* Overlay with project info on hover */}
        <div 
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-all duration-300 ease-in-out z-10 group-hover:bg-opacity-70"
        >
          <div className="opacity-0 transform translate-y-8 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-center px-4">
            <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-200 text-sm mb-4">{project.description}</p>
            
            {!project.isPlaceholder && (
              <div className="flex justify-center space-x-3">
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded-md flex items-center text-sm transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" /> Visit
                  </a>
                )}
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-900 text-white px-3 py-1 rounded-md flex items-center text-sm transition-colors"
                  >
                    <Github className="w-4 h-4 mr-1" /> Code
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent" style={{ fontFamily: "var(--font-outfit)" }}>
          {project.title}
        </h3>
        
        <p className="mt-2 text-gray-600 dark:text-gray-300" style={{ fontFamily: "var(--font-inter)" }}>
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Action Buttons */}
        {!project.isPlaceholder ? (
          <div className="mt-6 flex justify-between items-center">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 flex items-center transition-colors"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Visit Site <ExternalLink className="ml-1 w-4 h-4" />
            </a>
            
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 flex items-center transition-colors"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                <Github className="mr-1 w-4 h-4" /> Repository
              </a>
            )}
          </div>
        ) : (
          <div className="mt-6">
            <span className="text-gray-500 italic" style={{ fontFamily: "var(--font-inter)" }}>
              Coming soon...
            </span>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent" style={{ fontFamily: "var(--font-outfit)" }}>
              Our Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300" style={{ fontFamily: "var(--font-inter)" }}>
              Showcasing our latest web design and development work. Modern, responsive, and built with cutting-edge technologies.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Button 
            className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-3 rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
            style={{ fontFamily: "var(--font-outfit)" }}
            onClick={() => window.location.href = '/contact'}
          >
            Start Your Project
          </Button>
        </motion.div>
      </div>
    </section>
  )
}