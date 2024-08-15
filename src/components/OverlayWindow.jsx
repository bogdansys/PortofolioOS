import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button"

export const OverlayWindow = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-gradient-to-br from-white/80 to-white/40 dark:from-gray-800/80 dark:to-gray-900/40 backdrop-blur-md rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden border border-white/20 dark:border-gray-700/20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b border-white/20 dark:border-gray-700/20">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{title}</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full hover:bg-white/20 dark:hover:bg-gray-700/20">
            <X className="h-6 w-6 text-gray-800 dark:text-white" />
          </Button>
        </div>
        <div className="p-6 overflow-auto max-h-[calc(90vh-6rem)] custom-scrollbar">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};