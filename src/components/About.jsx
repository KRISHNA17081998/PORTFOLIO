import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import MeImage from '../pictures/ME.jpg';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });


  const transition = { duration: 0.8, type: "spring", stiffness: 100 };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-display font-bold text-primary-500 dark:text-primary-400 mb-2">About Me</h2>
        <div className="w-20 h-1 bg-black mx-auto"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        

        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -200 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={transition}
          className="relative"
        >
          <div className="w-full max-w-md mx-auto relative">
            <div className="relative z-10 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl">
              <img 
                src={MeImage} 
                alt="Professional headshot" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </motion.div>

          <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 200 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={transition}
        >
          <div className="text-gray-800 dark:text-gray-200 leading-relaxed">
            <div className="mb-6 text-lg text-gray-700 dark:text-gray-300">
              <p className="mb-4">
                I'm a creative web designer with a focus on user-friendly, responsive design. I blend aesthetics with performance, building modern interfaces with clean code.
                With experience across React, HTML, CSS, and backend tools, I enjoy turning ideas into reality through the browser.              
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
