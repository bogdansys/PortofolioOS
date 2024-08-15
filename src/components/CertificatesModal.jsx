import React from 'react';
import { motion } from 'framer-motion';

const CertificateItem = ({ title, issuer, date, credentialId }) => (
  <div className="mb-6 p-4 bg-white/10 dark:bg-gray-800/10 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">{title}</h3>
    <p className="text-gray-700 dark:text-gray-300">Issuer: {issuer}</p>
    <p className="text-gray-700 dark:text-gray-300">Issued: {date}</p>
    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 truncate">
      Credential ID: {credentialId.slice(0, 20)}...
    </p>
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
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Certificates & Qualifications</h2>
      
      <CertificateItem
        title="Penetration Testing Essential Training"
        issuer="LinkedIn"
        date="Aug 2024"
        credentialId="81831289eabcd978e9c760c599eb73e5e86f480c65af742c3a1a33204358c640"
      />
      
      <CertificateItem
        title="Penetration Testing with Metasploit"
        issuer="LinkedIn"
        date="Aug 2024"
        credentialId="0f7c257d3d4f80c1940cfdc1ffe8182f57cd70547a6a13f837b78ef6cc9f2ca7"
      />
      
      <div className="mb-6 p-4 bg-white/10 dark:bg-gray-800/10 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">IELTS Exam</h3>
        <p className="text-gray-700 dark:text-gray-300">Year: 2019</p>
        <p className="text-gray-700 dark:text-gray-300">Grade: C1</p>
      </div>
    </motion.div>
  );
};