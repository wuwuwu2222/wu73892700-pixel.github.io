import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Project {
  title: string;
  category: string;
  description: string[];
  link?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: '视频作品案例',
      category: '视频制作',
      description: ['短视频系列', '宣传片系列', '广告片系列'],
      link: '/video-portfolio'
    },
    {
      title: '图片作品案例',
      category: '摄影设计',
      description: ['活动摄影', '人像摄像', '产品摄影'],
      link: '/photo-portfolio'
    },
    {
      title: '气泡舱社交酒馆品牌视觉',
      category: '品牌设计',
      description: ['线下综艺活动', '空间视觉设计', '营销物料制作'],
      link: '/bubble-bar-brand'
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
        作品集
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ 
              scale: 1.03, 
              y: -5,
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              transition: { duration: 0.2 } 
            }}
            className="bg-white p-6 rounded-xl border border-zinc-200 hover:border-blue-300 transition-all duration-300 group"
          >
            <h3 className="text-xl font-semibold text-zinc-900 mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h3>
            <p className="text-sm text-blue-600 font-medium mb-4">{project.category}</p>
            <ul className="space-y-2 mb-6">
              {project.description.map((desc, idx) => (
                <li key={idx} className="flex items-center text-zinc-700">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
            {project.link && (
              <Link 
                to={project.link} 
                className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
              >
                查看详情
                <span className="ml-1 text-xs transition-transform group-hover:translate-x-1">→</span>
              </Link>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;