import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Server, TestTube, Database, GitBranch, Shield, Cloud, Workflow, Box, GraduationCap } from 'lucide-react';

const SkillCategory = ({ title, skills, icon: Icon }) => (
  <motion.div 
    className="mb-6 p-4 bg-white/10 dark:bg-gray-800/10 rounded-lg shadow-md"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center mb-2">
      <Icon className="w-6 h-6 mr-2 text-blue-500 dark:text-blue-400" />
      <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{title}</h3>
    </div>
    <p className="text-gray-700 dark:text-gray-300">{skills.join(', ')}</p>
  </motion.div>
);

export const SkillsModal = () => {
  const skillCategories = [
    { title: "Languages", skills: ["C++", "C", "Java", "JavaScript", "Python", "PHP", "SQL"], icon: Code },
    { title: "Web", skills: ["Angular", "React", "NodeJS", "HTML", "CSS"], icon: Globe },
    { title: "Backend", skills: ["Spring (Boot, Security)", "Zend", "Gradle", "Django"], icon: Server },
    { title: "Testing & QA", skills: ["Selenium", "Cypress", "JsMockito", "JUnit", "Playwright"], icon: TestTube },
    { title: "Databases", skills: ["SQL", "PostgreSQL", "MongoDB", "MariaDB"], icon: Database },
    { title: "Collab Tools", skills: ["Git", "Jira", "BitBucket"], icon: GitBranch },
    { title: "Security", skills: ["Kali & Blackarch Linux", "RAT", "MITM", "Metasploit", "Nmap"], icon: Shield },
    { title: "CI/CD", skills: ["Jenkins Pipelines", "GitLab Pipelines", "Kruiser"], icon: Cloud },
    { title: "Practices", skills: ["Agile Development", "SCRUM"], icon: Workflow },
    { title: "Containerization", skills: ["Docker"], icon: Box },
    { title: "University Courses", skills: ["Algorithm Design and Data Structures", "OOP", "ML"], icon: GraduationCap },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="p-6 bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-xl max-w-2xl mx-auto backdrop-blur-sm"
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Software Expertise</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillCategories.map((category, index) => (
          <SkillCategory key={index} {...category} />
        ))}
      </div>
    </motion.div>
  );
};