import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Info, Maximize2 } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Dock } from '@/components/Dock';
import { Desktop } from '@/components/Desktop';
import { ThemeProvider, useTheme } from '@/components/ThemeProvider';
import { BackgroundCanvas } from '@/components/BackgroundCanvas';
import { SettingsMenu } from '@/components/SettingsMenu';
import { AboutModal } from '@/components/AboutModal';

const Index = () => {
  const { theme, setTheme } = useTheme();
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentWallpaper, setCurrentWallpaper] = useState('Chameleon');
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(timer);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleWallpaperChange = (wallpaperName) => {
    setCurrentWallpaper(wallpaperName);
  };

  const getWallpaperStyle = () => {
    switch (currentWallpaper) {
      case 'Jellyfish':
        return theme === 'dark' ? 'bg-gradient-to-br from-blue-900 via-purple-800 to-pink-800' : 'bg-gradient-to-br from-blue-400 via-purple-300 to-pink-300';
      case 'Aurora Fox':
        return theme === 'dark' ? 'bg-gradient-to-br from-green-800 via-blue-900 to-purple-900' : 'bg-gradient-to-br from-green-300 via-blue-400 to-purple-400';
      default:
        return theme === 'dark' ? 'bg-gradient-to-br from-gray-800 to-blue-900' : 'bg-gradient-to-br from-blue-300 to-purple-300';
    }
  };

  return (
    <div className={`relative w-full h-screen overflow-hidden ${getWallpaperStyle()} transition-colors duration-500`}>
      <BackgroundCanvas wallpaper={currentWallpaper} />
      <motion.div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 100px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(255,255,255,0.15), transparent 100%)`,
        }}
      />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-2 left-0 right-0 z-50 mx-auto flex justify-between items-center h-10 bg-black/20 dark:bg-white/10 backdrop-blur-md rounded-full shadow-lg px-4"
          style={{
            width: 'calc(100% - 16px)',
            maxWidth: '600px',
          }}
        >
          <div className="text-sm font-medium text-white">Bogdan's Coding Projects</div>
          <div className="flex items-center space-x-4">
            <div className="text-sm font-medium text-white">
              {currentTime.toLocaleString('en-US', { 
                hour: 'numeric', 
                minute: 'numeric', 
                hour12: true,
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="w-8 h-8 rounded-full bg-transparent hover:bg-white/20 transition-all duration-300"
            >
              <motion.div
                animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {theme === 'dark' ? <Sun className="h-5 w-5 text-white" /> : <Moon className="h-5 w-5 text-white" />}
              </motion.div>
            </Button>
            <SettingsMenu currentWallpaper={currentWallpaper} onWallpaperChange={handleWallpaperChange} />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsAboutModalOpen(true)}
              className="w-8 h-8 rounded-full bg-transparent hover:bg-white/20 transition-all duration-300"
            >
              <Info className="h-5 w-5 text-white" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleFullscreen}
              className="w-8 h-8 rounded-full bg-transparent hover:bg-white/20 transition-all duration-300"
            >
              <Maximize2 className="h-5 w-5 text-white" />
            </Button>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="h-full pt-14">
        <Desktop />
      </div>
      <Dock />
      <AboutModal isOpen={isAboutModalOpen} onClose={() => setIsAboutModalOpen(false)} />
    </div>
  );
};

export default Index;