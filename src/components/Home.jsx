import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Download } from 'lucide-react';

const Home = () => {
  const roles = ['Web Designer', 'Web Developer'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 10000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center px-4"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Hello, It's me
        </h2>

        <h1 className="text-4xl sm:text-5xl font-bold text-primary-500 dark:text-white mb-6">
          RAKATLA KRISHNA
        </h1>

        
        <div className="h-16 mb-8 flex items-center justify-center">
          <motion.h3
            key={currentRoleIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-gray-800 dark:text-gray-200"
          >
            {roles[currentRoleIndex]}
          </motion.h3>
        </div>

       
        <a
          href="/RESUMEKRISHNA.pdf"
          download
          className="inline-flex items-center px-6 py-3 mb-8 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors duration-200"
        >
          <Download size={18} className="mr-2" />
          Download CV
        </a>

        {/* Social Icons */}
        <div className="flex justify-center gap-6">
          <a
            href="https://wa.me/919953120067"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-600 text-2xl"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://github.com/KRISHNA17081998"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-900 dark:text-white text-2xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/rakatla-krishna-a096772b3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 text-2xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
