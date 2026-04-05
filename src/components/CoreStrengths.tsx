import React from 'react';
import { motion } from 'framer-motion';

const CoreStrengths: React.FC = () => {
  const strengths = [
    {
      value: '10亿+',
      label: '流量操盘',
      color: 'text-blue-500'
    },
    {
      value: '300+',
      label: '商业项目',
      color: 'text-amber-400'
    },
    {
      value: '10+',
      label: '百万级爆款',
      color: 'text-blue-500'
    },
    {
      value: '4年',
      label: '创业经验',
      color: 'text-amber-400'
    }
  ];

  return (
    <div className="container mx-auto px-4 mb-20">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-12 text-center"
      >
        核心优势
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {strengths.map((strength, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 text-center"
          >
            <p className={`text-3xl font-bold ${strength.color} mb-2`}>{strength.value}</p>
            <p className="text-zinc-300">{strength.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CoreStrengths;