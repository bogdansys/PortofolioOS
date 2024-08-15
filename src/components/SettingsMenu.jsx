import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Palette, Droplets, Sparkles, Check } from 'lucide-react';
import { Button } from "@/components/ui/button"

const wallpapers = [
  { name: 'Chameleon', description: 'Current dynamic gradient' },
  { name: 'Jellyfish', description: 'Bioluminescent deep sea glow' },
  { name: 'Aurora Fox', description: 'Northern lights inspired' },
];

export const SettingsMenu = ({ currentWallpaper, onWallpaperChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="w-8 h-8 rounded-full bg-transparent hover:bg-white/20 transition-all duration-300"
      >
        <Settings className="h-5 w-5 text-white" />
      </Button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-64 rounded-xl bg-white/85 dark:bg-gray-800/85 shadow-xl overflow-hidden border border-white/30 dark:border-gray-600/30"
          >
            <div className="p-4">
              <h3 className="text-gray-800 dark:text-white font-semibold mb-4">Wallpaper</h3>
              {wallpapers.map((wallpaper) => (
                <Button
                  key={wallpaper.name}
                  variant="ghost"
                  className={`w-full justify-between mb-3 transition-all duration-300 hover:bg-white/40 dark:hover:bg-gray-700/60 ${
                    currentWallpaper === wallpaper.name ? 'bg-white/50 dark:bg-gray-600/70' : ''
                  }`}
                  onClick={() => onWallpaperChange(wallpaper.name)}
                >
                  <span className="flex items-center">
                    {wallpaper.name === 'Chameleon' && <Palette className="h-4 w-4 mr-2" />}
                    {wallpaper.name === 'Jellyfish' && <Droplets className="h-4 w-4 mr-2" />}
                    {wallpaper.name === 'Aurora Fox' && <Sparkles className="h-4 w-4 mr-2" />}
                    {wallpaper.name}
                  </span>
                  {currentWallpaper === wallpaper.name && (
                    <Check className="h-4 w-4 text-green-500" />
                  )}
                </Button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};