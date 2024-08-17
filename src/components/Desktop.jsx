import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { OverlayWindow } from './OverlayWindow';
import { Button } from "@/components/ui/button";
import { RaceTrackSimulator } from './RaceTrackSimulator';
import * as HeroIcons from '@heroicons/react/24/outline';

const PlayIcon = HeroIcons.PlayIcon; // Alternative icon for HackIfy

const projects = [
  {
    id: 16,
    name: 'Game Of Life Encryption Algorithm',
    icon: HeroIcons.LockClosedIcon,
    github: 'https://github.com/bogdansys/game-of-life-encrytion-algorithm',
    demo: 'https://game-of-life-encrytion-algorithm.vercel.app/',
    description: 'A new encryption algorithm based on Conway\'s Game of Life. Designed by me and includes a research paper.',
    gradient: 'from-red-500 to-yellow-500',
  },
  {
    id: 15,
    name: 'Financial Data Insights',
    icon: HeroIcons.CurrencyDollarIcon,
    github: 'https://github.com/bogdansys/financial-data-insights',
    demo: 'https://financial-data-insights.vercel.app/',
    description: 'Website to download massive amounts of financial data and analyze it using Data Insights Project.',
    gradient: 'from-green-400 to-blue-500',
  },
  {
    id: 2,
    name: 'DataInsights',
    icon: HeroIcons.ChartBarIcon,
    description: 'ML and Data Insights Hub for data analysis, visualization, and machine learning',
    github: 'https://github.com/bogdansys/data_insights',
    demo: 'https://data-insights-nu.vercel.app/',
    gradient: 'from-purple-400 to-pink-500',
  },
  {
    id: 19,
    name: 'MindKey',
    icon: HeroIcons.LightBulbIcon, // Updated to LightBulbIcon for MindKey
    description: 'Android app for creating mental maps and notes. (Waiting for approval on Play Store)',
    github: 'https://github.com/bogdansys/mindkey',
    gradient: 'from-green-400 to-blue-500',
  },
  {
    id: 1,
    name: 'Event Horizon Zero',
    icon: HeroIcons.ShieldCheckIcon,
    description: 'FOSS Cybersecurity Resources Hub',
    github: 'https://github.com/bogdansys/AlpacaExploit',
    gradient: 'from-green-400 to-blue-500',
  },
  {
    id: 12314,
    name: 'HackIfy',
    icon: PlayIcon,  // Updated to PlayIcon
    description: 'My very own locally running Spotify client',
    github: 'https://github.com/bogdansys/hackify',
    gradient: 'from-red-400 to-blue-500',
  },
  {
    id: 3,
    name: 'pwnGPT',
    icon: HeroIcons.FireIcon,  // Updated to FireIcon
    description: 'AI cybersecurity automation FOSS tool for reverse shell and listener creation and sending as well as vulnerability assessment, built with NMAP and MetaSploit. (Not currently released Due to licensing issues.)',
    gradient: 'from-red-400 to-yellow-500',
  },
  {
    id: 4,
    name: 'Rhaast Study Tool',
    icon: HeroIcons.AcademicCapIcon,
    description: 'Python program designed to help you study for various courses and topics. It allows you to add courses and topics, and then add questions for each topic.',
    github: 'https://github.com/bogdansys/rhaast_study_tool',
    gradient: 'from-blue-400 to-indigo-500',
  },
  {
    id: 5,
    name: 'In Time',
    icon: HeroIcons.ClockIcon,
    description: 'Streamlined desktop application designed to enhance study motivation by continuously displaying time elapsed in your life, day, week, month, and year.',
    github: 'https://github.com/bogdansys/in_time',
    gradient: 'from-yellow-400 to-orange-500',
  },
  {
    id: 6,
    name: 'AI Terminal Image Creator',
    icon: HeroIcons.PhotoIcon,
    description: 'A Python script that leverages OpenAI\'s DALL·E to generate images from text prompts and subsequently converts those images into ASCII art suitable for displaying in terminal or text documents.',
    github: 'https://github.com/bogdansys/AI-Terminal-Image-Creator',
    gradient: 'from-teal-400 to-green-500',
  },
  {
    id: 7,
    name: '3D Graphics Engine',
    icon: HeroIcons.CubeIcon,
    description: 'A rudimentary 3D graphics engine that projects and visualizes basic geometric shapes in a console environment.',
    github: 'https://github.com/bogdansys/Simple-3D-Graphics-Engine',
    gradient: 'from-indigo-400 to-purple-500',
  },
  {
    id: 8,
    name: 'ML Book',
    icon: HeroIcons.BookOpenIcon,
    description: 'Book On Machine Learning: An introductory guide to the mathematics behind Machine Learning models, written by me.',
    github: 'https://github.com/bogdansys/Book-On-Machine-Learning',
    gradient: 'from-blue-400 to-cyan-500',
  },
  {
    id: 9,
    name: 'DSA Book',
    icon: HeroIcons.BookOpenIcon,  // Updated to use the same icon as ML Book
    description: 'Book on Data Structures and Algorithms: A comprehensive crash course on algorithms and data structures, authored by me.',
    github: 'https://github.com/bogdansys/Book-On-Algorithms-and-data-structures',
    gradient: 'from-green-400 to-teal-500',
  },
  {
    id: 10,
    name: 'Microservice Pizza Delivery App',
    icon: HeroIcons.ServerIcon,  // Updated to ServerIcon to represent microservices architecture
    description: 'A complex microservices-based backend for a pizza delivery application, showcasing advanced Java Spring architecture, including Spring Security for authentication and authorization.',
    github: 'https://github.com/bogdansys/Microservice-project-java-spring',
    gradient: 'from-red-400 to-pink-500',
  },
  {
    id: 11,
    name: 'Multiplayer Game Quizzz',
    icon: HeroIcons.PuzzlePieceIcon,  // Updated to PuzzlePieceIcon to represent a game
    description: 'Quizzzz is a multiplayer and singleplayer trivia-game that wants to teach the players a lesson about energy consumption while providing a fun gaming experience.',
    github: 'https://github.com/bogdansys/multiplayer-online-java-game-in-Spring',
    gradient: 'from-purple-400 to-indigo-500',
  },
  {
    id: 12,
    name: 'Revista CAVA',
    icon: HeroIcons.NewspaperIcon,
    description: '"Sfantul Sava" National College student owned magazine',
    github: 'https://github.com/bogdansys/revista-cava-website',
    gradient: 'from-yellow-400 to-red-500',
  },
  {
    id: 13,
    name: 'Bogdan\'s Portfolio OS',
    icon: HeroIcons.BriefcaseIcon,
    description: 'A portfolio application simulating an operating system interface. (This is the app you are currently viewing)',
    github: 'https://github.com/bogdansys/PortofolioOS',
    gradient: 'from-gray-400 to-blue-500',
  },
  {
    id: 14,
    name: 'RaceTrack Simulator',
    icon: HeroIcons.FlagIcon,  // Updated to FlagIcon
    description: 'A high-performance racing simulation with realistic physics and customizable tracks.',
    gradient: 'from-red-500 to-yellow-500',
    isGame: true,
  },
];

const ProjectIcon = ({ project, onClick }) => {
  const IconComponent = project.icon;
  return (
    <motion.div
      className="flex flex-col items-center justify-center w-24 sm:w-28 cursor-pointer group"
      onClick={onClick}
      whileHover={{ scale: 0.95 }}  // Add a slight shrink effect
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-2 transition-all duration-300 relative overflow-hidden`}
        initial={{ opacity: 0.7 }}
        whileHover={{ opacity: 1 }}
      >
        <IconComponent className="w-10 h-10 sm:w-12 sm:h-12 text-white relative z-10" />
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

export const Desktop = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="absolute inset-0 pt-32 px-4 overflow-hidden">
      <div className="h-full overflow-y-auto scrollbar-hide">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 justify-items-center pb-24">
          {projects.map((project) => (
            <div
              key={project.id}
              className="overflow-visible"
            >
              <ProjectIcon project={project} onClick={() => setSelectedProject(project)} />
            </div>
          ))}
        </div>
      </div>
      {selectedProject && selectedProject.isGame ? (
        <RaceTrackSimulator onClose={() => setSelectedProject(null)} />
      ) : (
        <OverlayWindow
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject?.name}
        >
          {selectedProject && (
            <div className="flex flex-col items-center">
              <div className={`w-20 h-20 bg-gradient-to-br ${selectedProject.gradient} rounded-2xl flex items-center justify-center text-white text-3xl font-bold mb-4`}>
                <selectedProject.icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
              </div>
              <p className="text-lg mb-4 text-center">{selectedProject.description}</p>
              <div className="flex space-x-4">
                {selectedProject.github && (
                  <Button onClick={() => window.open(selectedProject.github, '_blank')}>
                    View on GitHub
                  </Button>
                )}
                {selectedProject.demo && (
                  <Button variant="outline" onClick={() => window.open(selectedProject.demo, '_blank')}>
                    Live Demo
                  </Button>
                )}
              </div>
            </div>
          )}
        </OverlayWindow>
      )}
    </div>
  );
};
