import React from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from './OptimizedImage';

const base = import.meta.env.BASE_URL;

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center">
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* 左侧文字区域 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            {/* 问候语 */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-blue-500 text-sm mb-4"
            >
              Hi, I'm Peimin Wu
            </motion.p>
            
            {/* 主标题 */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6"
            >
              全能型导演
              <br />
              <span className="text-black">编导 / 视觉主理人</span>
            </motion.h1>
            
            {/* 简介 */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-gray-600 text-base leading-relaxed mb-8 max-w-md"
            >
              各位亲爱的老师，大家好，感谢百忙之中能打开我的个人网站。我是小明，一个真诚礼貌，超高能量的ENFJ 00后。我希望用这一份个人网站更加充分的展示我自己。作品集里面有很多我这些年来的作品，建议点击查看，希望你们对我有更进一步的了解。
            </motion.p>
            
            {/* 信息标签 */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex gap-8 mb-8"
            >
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">位置</p>
                <p className="text-gray-900 font-medium">中国南京</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">经验</p>
                <p className="text-gray-900 font-medium">4年+</p>
              </div>
            </motion.div>
            
            {/* 按钮组 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: '#2563eb' }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToProjects}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium text-sm transition-colors duration-200"
              >
                查看作品
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02, borderColor: '#2563eb', color: '#2563eb' }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToContact}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium text-sm bg-white hover:border-blue-500 hover:text-blue-500 transition-all duration-200"
              >
                联系我
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* 右侧图片区域 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02, rotate: 2 }}
              transition={{ duration: 0.4 }}
            >
              {/* 图片容器 - 响应式尺寸 */}
              <div className="w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-xl bg-white">
                <OptimizedImage
                  src={`${base}profile.jpg`}
                  alt="吴培民"
                  className="w-full h-full object-cover transition-transform duration-400 hover:scale-108"
                  containerClassName="w-full h-full"
                  sizes="(max-width: 768px) 240px, (max-width: 1024px) 288px, 320px"
                  priority={true}
                />
              </div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
