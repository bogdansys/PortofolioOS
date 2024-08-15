import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button"

export const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project || !isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-2xl shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">{project.name}</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          <div className="mb-4">
            <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center text-6xl">
              {project.icon}
            </div>
            <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
          </div>
          <div className="flex justify-end space-x-2">
            <Button onClick={() => window.open(project.github, '_blank')}>View on GitHub</Button>
            {project.demo && (
              <Button variant="outline" onClick={() => window.open(project.demo, '_blank')}>Live Demo</Button>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};