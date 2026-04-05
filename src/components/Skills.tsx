import React from 'react';
import { motion } from 'framer-motion';

interface SkillCategory {
  title: string;
  skills: string[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: '硬件',
      skills: ['主流相机', '无人机航拍', '主流稳定器']
    },
    {
      title: '软件',
      skills: ['GPT深度使用者', 'Sora', 'Trae Ai', 'Pr', 'Ae']
    },
    {
      title: '软实力',
      skills: ['结构化思维', '自驱自我迭代', '高强度网感', '跨角色沟通', '责任心超强！']
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-12 text-center text-zinc-900"
      >
        技能树矩阵
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ 
              scale: 1.03, 
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              transition: { duration: 0.2 } 
            }}
            className="bg-white p-8 rounded-xl border border-zinc-200 hover:border-blue-300 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-6">{category.title}</h3>
            <ul className="space-y-3">
              {category.skills.map((skill, skillIndex) => (
                <motion.li
                  key={skillIndex}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * (index + skillIndex), duration: 0.3 }}
                  className="text-zinc-700 flex items-center"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;