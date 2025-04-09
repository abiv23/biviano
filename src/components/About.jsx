"use client"

import { motion } from "framer-motion"
import { Code, BookOpen, Users, Heart, Utensils, Briefcase, Github, Linkedin, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  // Professional background items
  const professionalItems = [
    {
      icon: <Briefcase className="w-10 h-10 text-indigo-500" />,
      title: "20 Years of Web Experience",
      description: "Two decades building and marketing websites, with titles ranging from Director of SEO to Senior Web Developer.",
      delay: 0.2
    },
    {
      icon: <Code className="w-10 h-10 text-purple-500" />,
      title: "Developer Journey",
      description: "Started programming to overcome the developer time bottleneck for SEO initiatives, and discovered a passion for problem-solving that led to becoming a full-time software engineer.",
      delay: 0.3
    },
    {
      icon: <BookOpen className="w-10 h-10 text-blue-500" />,
      title: "Continuous Learning",
      description: "Constantly evolving skills to stay at the forefront of web development and digital marketing, combining technical expertise with business strategy.",
      delay: 0.4
    }
  ]

  // Personal background items
  const personalItems = [
    {
      icon: <Heart className="w-10 h-10 text-rose-500" />,
      title: "Family First",
      description: "Proud husband and father of three children who remain my primary focus and inspiration.",
      delay: 0.2
    },
    {
      icon: <Utensils className="w-10 h-10 text-amber-500" />,
      title: "Italian Heritage",
      description: "Love for cooking passed down from grandparents and parents. Regularly make homemade pizza, pasta, and authentic red sauce.",
      delay: 0.3
    },
    {
      icon: <BarChart className="w-10 h-10 text-orange-500" />,
      title: "Youth Sports Coach",
      description: "Dedicated basketball and football coach, helping young athletes develop skills and character.",
      delay: 0.4
    },
    {
      icon: <Users className="w-10 h-10 text-green-500" />,
      title: "Community Volunteer",
      description: "Volunteer web developer for non-profits focused on helping those in need and fundraising through cooking events like pancake breakfasts, salsa and burrito sales.",
      delay: 0.5
    }
  ]

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <div className="relative min-h-screen">
      {/* Hero Section with Gradient Background */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#4F46E5_0%,transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,#7E22CE_0%,transparent_70%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white" style={{ fontFamily: "var(--font-outfit)" }}>
              About <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Luca Biv</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto" style={{ fontFamily: "var(--font-inter)" }}>
              Web developer, SEO expert, family man, and community volunteer.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute -bottom-8 md:-bottom-12 left-0 w-full"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-12 md:h-20 w-full">
            <path 
              d="M0,0 C150,120 271,120 420,60 C569,0 620,40 769,60 C918,80 1050,0 1200,80 L1200,120 L0,120 Z" 
              className="fill-white dark:fill-gray-900"
            ></path>
          </svg>
        </motion.div>
      </section>

      {/* Professional Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="flex flex-col lg:flex-row items-center mb-16"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Left side - Professional Introduction */}
            <motion.div 
              className="lg:w-1/2 lg:pr-12"
              variants={itemVariants}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent" style={{ fontFamily: "var(--font-outfit)" }}>
                Professional Journey
              </h2>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                With 20 years in web development and digital marketing, I've evolved from an SEO specialist to a full-stack developer, combining both disciplines to create websites that are not only beautifully designed but also optimized for search visibility and business growth.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                My journey began in search engine optimization, where I honed my skills through various roles, including Director of SEO. Encountering the common bottleneck of developer resources for SEO initiatives, I taught myself to code.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                What started as a practical skill quickly became a passion for problem-solving and creative building, leading me to transition into a full-time software engineering role where I could combine technical expertise with strategic marketing knowledge.
              </p>
            </motion.div>
            
            {/* Right side - Image or graphic */}
            <motion.div 
              className="lg:w-1/2 mt-12 lg:mt-0"
              variants={itemVariants}
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
                
                {/* Social links */}
                <div className="mt-6 flex justify-center space-x-4">
                  <a 
                    href="https://github.com/abiv23" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-colors"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </a>
                  <a 
                    href="https://www.linkedin.com/feed/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </a>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-5 -left-5 w-24 h-24 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 -z-10"></div>
                <div className="absolute -top-5 -right-5 w-32 h-32 rounded-lg bg-purple-100 dark:bg-purple-900/30 -z-10"></div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Professional Experience Boxes */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {professionalItems.map((item, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-500/40 transition-all duration-300"
                variants={itemVariants}
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
          </motion.div>
        </div>
      </section>
      
      {/* Personal Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="flex flex-col lg:flex-row-reverse items-center mb-16"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Right side - Personal Introduction */}
            <motion.div 
              className="lg:w-1/2 lg:pl-12"
              variants={itemVariants}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent" style={{ fontFamily: "var(--font-outfit)" }}>
                Personal Life
              </h2>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                Beyond my professional life, I'm a dedicated family man with a wife and three wonderful children who are the center of my world and my greatest source of joy and inspiration.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                My Italian heritage has instilled in me a deep love for cooking, a passion passed down from my grandparents and parents. You'll often find me in the kitchen crafting homemade pizzas, pastas, and authentic red sauces that bring family and friends together.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                Community involvement is also important to me. I serve as a youth basketball and football coach, helping young athletes develop not just their skills but also character and teamwork. Additionally, I volunteer my web development skills for non-profits that focus on helping the needy, often supporting fundraising efforts through community cooking events.
              </p>
            </motion.div>
            
            {/* Left side - Family/Personal Image */}
            <motion.div 
              className="lg:w-1/2 mb-12 lg:mb-0"
              variants={itemVariants}
            >
              <div className="relative">
                {/* Main image - replace with a family or cooking image */}
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="/images/family-cooking.jpg" 
                    alt="Family cooking Italian food together" 
                    className="w-full h-auto"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-5 -right-5 w-24 h-24 rounded-lg bg-amber-100 dark:bg-amber-900/30 -z-10"></div>
                <div className="absolute -top-5 -left-5 w-32 h-32 rounded-lg bg-rose-100 dark:bg-rose-900/30 -z-10"></div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Personal Life Boxes */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {personalItems.map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-gray-700/50 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-gray-100 dark:border-gray-600 hover:border-amber-300 dark:hover:border-amber-500/40 transition-all duration-300"
                variants={itemVariants}
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
          </motion.div>
        </div>
      </section>
      
      {/* Call to action */}
      <section className="py-16 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-outfit)" }}>
              Let's Work Together
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8" style={{ fontFamily: "var(--font-inter)" }}>
              Ready to combine 20 years of web expertise with your project? Whether you need SEO strategy, web development, or both, I'm here to help your business grow online.
            </p>
            <Button 
              className="bg-white text-indigo-700 hover:bg-gray-100 px-8 py-6 text-lg font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{ fontFamily: "var(--font-outfit)" }}
              onClick={() => window.location.href = '/contact'}
            >
              Start a Conversation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}