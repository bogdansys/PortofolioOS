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
    { title: "Languages & Frontend", skills: ["Java", "Python", "C/C++", "TypeScript", "SQL", "Bash", "React", "Tailwind CSS", "Capacitor"], icon: Code },
    { title: "Backend & Architecture", skills: ["Spring Boot", "Microservices", "JPA", "Node.js", "Django", "GraphQL", "REST", "Webhooks", "Stripe orchestration", "System Design"], icon: Server },
    { title: "Cloud, DevOps & AI", skills: ["Git", "AWS", "Docker", "Supabase", "Firebase", "CI/CD", "Linux", "iOS/Android deployment", "LLM APIs", "Agentic AI frameworks"], icon: Cloud },
    { title: "Database & Messaging", skills: ["PostgreSQL tuning", "Kafka", "Redis"], icon: Database },
    { title: "Security", skills: ["OWASP ZAP", "Burp Suite", "Kali", "Nmap", "Metasploit", "Wireshark", "OAuth2/OIDC", "RSA"], icon: Shield },
    { title: "Testing & QA", skills: ["JUnit", "Mockito", "Jest", "Cypress", "Playwright", "Selenium", "Vitest", "Postman", "TDD"], icon: TestTube },
    { title: "Embedded Systems", skills: ["FPGA (VHDL/Verilog)", "STM32 (Bare-metal)", "RTOS", "Arduino"], icon: Box },
    { title: "Professional Skills", skills: ["Agile/Scrum", "Tech Leadership", "Mentorship", "Stakeholder Management", "Splunk", "Technical Writing"], icon: Workflow },
    { title: "University Courses", skills: ["Algorithms & Data Structures", "Machine Learning & AI", "Secure & Distributed Systems", "Embedded Software"], icon: GraduationCap },
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
