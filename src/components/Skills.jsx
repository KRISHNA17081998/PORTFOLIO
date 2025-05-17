import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/skills';
import SkillCard from './SkillCard';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
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
        <h2 className="text-3xl font-display font-bold text-primary-500 dark:text-primary-400 mb-2">My Skills</h2>
        <div className="w-20 h-1 bg-black mx-auto"></div>
      </motion.div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <SkillCard 
            key={skill.id} 
            skill={skill} 
            index={index}
            inView={inView}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
