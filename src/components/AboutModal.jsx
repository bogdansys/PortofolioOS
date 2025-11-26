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
              I’m Bogdan Iordache, a full-stack engineer and technical architect focused on secure, reliable product delivery. I build end-to-end systems (frontend, backend, mobile) with an emphasis on resilient architectures, DevSecOps, and measurable impact.
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4 space-y-2">
              <li>Built and shipped enterprise SaaS (Supabase, Stripe, Docker, CI/CD with blue/green + feature flags).</li>
              <li>Production experience in Java/Spring, GraphQL/REST, Postgres tuning, and observability.</li>
              <li>Security-aware delivery: OAuth2/OIDC/SAML, MFA, RLS/RBAC, pentesting mindset.</li>
              <li>Comfortable leading squads, mentoring, and working directly with stakeholders.</li>
            </ul>
            <div className="mb-4 text-sm text-gray-700 dark:text-gray-300">
              <p className="font-semibold text-gray-800 dark:text-white">Contact</p>
              <p>Email: <a href="mailto:bogdanmihai453@gmail.com" className="text-blue-500 hover:underline">bogdanmihai453@gmail.com</a></p>
              <p>LinkedIn: <a href="https://www.linkedin.com/in/mihai-iordache-676444187/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">mihai-iordache-676444187</a></p>
              <p>Phone: +40 733 794 788</p>
              <p>Portfolio: <a href="https://bogdan-porto-os.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">bogdan-porto-os.vercel.app</a></p>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Explore the desktop icons for projects, use the dock for my CV/skills/certifications, and reach out via email or LinkedIn if you’d like to collaborate.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
