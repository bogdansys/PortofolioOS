import React from 'react';
import { motion } from 'framer-motion';

export const ProjectIcon = ({ project, onClick }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center w-20 sm:w-24 cursor-pointer group"
      onClick={onClick}
    >
      <motion.div
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center mb-2 transition-all duration-300 relative overflow-hidden"
        whileHover={{
          opacity: 1.1, // Gentle opacity shift
        }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-white/30 to-transparent opacity-0 transition-opacity duration-300"
          whileHover={{ opacity: 1 }} // Radial gradient overlay
        />
        <motion.span 
          className="text-2xl sm:text-3xl relative z-10"
          whileHover={{ rotate: 360 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          {project.icon}
        </motion.span>
      </motion.div>
      <motion.span 
        className="text-xs sm:text-sm text-center font-medium text-gray-800 dark:text-white bg-white/50 dark:bg-gray-800/50 px-2 sm:px-3 py-1 rounded-full backdrop-blur-sm transition-colors duration-300"
        whileHover={{ backgroundColor: "rgba(255,255,255,0.8)", color: "#000" }}
      >
        {project.name}
      </motion.span>
    </motion.div>
  );
};