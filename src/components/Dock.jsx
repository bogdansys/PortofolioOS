import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Music, FileText, Code, Award } from 'lucide-react';
import { OverlayWindow } from './OverlayWindow';
import CV from './CV';
import { SkillsModal } from './SkillsModal';
import { CertificatesModal } from './CertificatesModal';

const dockItems = [
  { id: 'github', icon: Github, title: 'GitHub', link: 'https://github.com/bogdansys' },
  { id: 'linkedin', icon: Linkedin, title: 'LinkedIn', link: 'https://www.linkedin.com/in/mihai-iordache-676444187/' },
  { id: 'email', icon: Mail, title: 'Email', link: 'mailto:your.email@example.com' },
  { id: 'spotify', icon: Music, title: 'Spotify', link: 'https://github.com/bogdansys/hackify' },
  { id: 'cv', icon: FileText, title: 'CV', link: '#' },
  { id: 'skills', icon: Code, title: 'Skills', link: '#' },
  { id: 'certificates', icon: Award, title: 'Certificates', link: '#' },
];

export const Dock = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleItemClick = (item) => {
    if (item.id === 'cv' || item.id === 'skills' || item.id === 'certificates') {
      setActiveItem(item);
    } else if (item.id === 'email') {
      window.location.href = item.link;
    } else {
      window.open(item.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      <motion.div
        className="fixed bottom-4 left-0 right-0 mx-auto flex items-center justify-center h-16 sm:h-24 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg overflow-hidden"
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          maxWidth: 'min(calc(100% - 1rem), 700px)',
        }}
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="flex items-center space-x-1 sm:space-x-3 px-2 sm:px-5">
          {dockItems.map((item, index) => (
            <DockIcon
              key={item.id}
              item={item}
              index={index}
              onClick={() => handleItemClick(item)}
              isHovered={hoveredItem === item.id}
              onHover={() => setHoveredItem(item.id)}
              onHoverEnd={() => setHoveredItem(null)}
            />
          ))}
        </div>
      </motion.div>
      <OverlayWindow
        isOpen={activeItem !== null}
        onClose={() => setActiveItem(null)}
        title={activeItem?.title}
      >
        {activeItem?.id === 'cv' && <CV />}
        {activeItem?.id === 'skills' && <SkillsModal />}
        {activeItem?.id === 'certificates' && <CertificatesModal />}
      </OverlayWindow>
    </>
  );
};

const DockIcon = ({ item, onClick, isHovered, onHover, onHoverEnd }) => {
  const Icon = item.icon;
  
  return (
    <motion.button
      onClick={onClick}
      onHoverStart={onHover}
      onHoverEnd={onHoverEnd}
      className="group relative flex items-center justify-center w-10 h-10 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 dark:from-white/30 dark:to-white/10 hover:from-gray-700/60 hover:to-gray-800/60 dark:hover:from-white/40 dark:hover:to-white/20 transition-all duration-300"
      style={{
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.1)',
        perspective: '1000px',
      }}
      whileHover={{ scale: 1.15, rotateY: 15, z: 30 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isHovered ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 300, damping: 20 }}
      >
        <Icon className="w-5 h-5 sm:w-8 sm:h-8 text-white group-hover:text-blue-300 transition-colors duration-300 absolute backface-hidden" />
        <Icon className="w-5 h-5 sm:w-8 sm:h-8 text-yellow-400 absolute backface-hidden" style={{ transform: 'rotateY(180deg)' }} />
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl"
        initial={{ scale: 0.5, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-75 blur transition duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.5 }}
        transition={{ duration: 0.3 }}
        style={{ zIndex: -1 }}
      />
    </motion.button>
  );
};