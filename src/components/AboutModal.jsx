import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button"

export const AboutModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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
          className="bg-white/85 dark:bg-gray-800/85 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden border border-white/20 dark:border-gray-700/20"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">About This Portfolio</h2>
            <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              <X className="h-6 w-6 text-gray-800 dark:text-white" />
            </Button>
          </div>
          <div className="p-6 overflow-auto max-h-[calc(90vh-6rem)]">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Welcome to my personal portfolio! This interactive application showcases my journey as a developer and penetration tester, featuring:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4">
              <li>All projects I've worked on or am currently developing</li>
              <li>My comprehensive CV detailing my professional experience and skills</li>
              <li>Personal details and contact information</li>
              <li>Insights into my life as a developer and pen tester</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              This portfolio is designed to resemble an operating system interface, allowing you to explore my work in an engaging and interactive manner. Feel free to click around, open projects, and discover more about my skills and experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Thank you for visiting, and I hope you enjoy exploring my digital world!
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              Special thanks to my mom, dad, sister, grandma, and ChatGPT for their support and inspiration in my journey.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};