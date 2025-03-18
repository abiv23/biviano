import { motion } from "framer-motion"

export function ScrollIndicator({text = ''}) {
  return (
    <motion.div 
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        delay: 2,
        duration: 1.5
      }}
    >
      <motion.div 
        className="text-white/70 text-sm tracking-widest uppercase font-light mb-2"
      >
        {text}
      </motion.div>
      <motion.div
        className="w-8 h-8 flex items-center justify-center"
        animate={{ 
          y: [0, 8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg 
          width="24" 
          height="28" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-white/70"
        >
          <path 
            d="M12 5L12 19M12 19L19 12M12 19L5 12" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            transform="rotate(0 12 12)"
          />
        </svg>
      </motion.div>
    </motion.div>
  )
}