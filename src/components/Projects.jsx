import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projectData = [
  { id: 1, title: "Hotel Booking Application – Quick Stay", image: "/pictures/Hotel.png", url: "https://quick-stay2025.netlify.app" },
  { id: 2, title: "Real Estate Platform – Quick Estate", image: "/pictures/QS.png", url: "https://quick-estate.netlify.app/" },
  { id: 3, title: "Random Color Generator", image: "/pictures/RANDOMCOLORGENERATOR.jpg", url: "https://randomcolorgenerator2025.netlify.app" },
  { id: 4, title: "Password Generator", image: "/pictures/RANDOMPASSWORDGENERATOR.png", url: "https://randompasswordgenerator2025.netlify.app" },
  { id: 5, title: "Calculator", image: "/pictures/CALCULATOR.jpg", url: "https://classic-calculator2025.netlify.app" },
  { id: 6, title: "QR Code Generator", image: "/pictures/QRCODEGENERATOR.jpg", url: "https://qrcodegenerator2025.netlify.app" },
];

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-display font-bold text-primary-500 dark:text-primary-400 mb-2">My Projects</h2>
        <div className="w-24 h-1 bg-black mx-auto mb-4"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover transition duration-300 hover:opacity-80"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold mb-2 transition duration-300 hover:text-primary-500">
                {project.title}
              </h3>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600 transition duration-300"
              >
                Live URL
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
