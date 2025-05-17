import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

const SkillCard = ({ skill, index, inView }) => {
  const IconComponent = LucideIcons[skill.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={inView ? { scale: 1, rotateY: [0, 360] } : {}}
        transition={{ 
          duration: 0.8, 
          delay: 0.2 * index,
          rotateY: { repeat: Infinity, repeatType: "loop", duration: 10, ease: "linear" }
        }}
        className="w-16 h-16 flex items-center justify-center mb-4 rounded-full"
        style={{ color: skill.color, backgroundColor: `${skill.color}20` }}
      >
        {IconComponent && <IconComponent size={32} />}
      </motion.div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{skill.name}</h3>
    </motion.div>
  );
};

export default SkillCard;