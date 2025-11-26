import React from 'react';
import { motion } from 'framer-motion';

const CertificateItem = ({ title, issuer, date, credentialId }) => (
  <div className="mb-6 p-4 bg-white/10 dark:bg-gray-800/10 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">{title}</h3>
    <p className="text-gray-700 dark:text-gray-300">Issuer: {issuer}</p>
    <p className="text-gray-700 dark:text-gray-300">Issued: {date}</p>
    {credentialId && (
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 truncate">
        Credential ID: {credentialId.slice(0, 20)}...
      </p>
    )}
  </div>
);

export const CertificatesModal = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="p-6 bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-xl max-w-2xl mx-auto backdrop-blur-sm"
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Courses & Certifications</h2>
      
      <CertificateItem
        title="AI Engineer Associate"
        issuer="DataCamp"
        date="2025"
      />
      
      <CertificateItem
        title="ISO/IEC 27001 Lead Auditor"
        issuer="Mastermind"
        date="2025"
      />

      <CertificateItem
        title="Offensive Penetration Testing"
        issuer="LinkedIn"
        date="2024"
      />
      
      <CertificateItem
        title="Pen Testing with Metasploit"
        issuer="LinkedIn"
        date="2024"
      />

      <CertificateItem
        title="OSCP"
        issuer="OffSec"
        date="In progress"
      />

      <CertificateItem
        title="AWS Solutions Architect Associate"
        issuer="AWS"
        date="In progress"
      />
    </motion.div>
  );
};
