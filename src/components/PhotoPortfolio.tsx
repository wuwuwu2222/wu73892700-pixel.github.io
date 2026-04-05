import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import OptimizedImage from './OptimizedImage';

const base = import.meta.env.BASE_URL;

const PhotoPortfolio: React.FC = () => {
  // 分类数据
  const categories = [
    {
      id: 'commercial',
      name: '商业活动',
      count: 56,
      cover: `${base}portfolio/processed/thumbs/s2-320.webp`,
      description: '商业活动现场拍摄作品'
    },
    {
      id: 'portrait',
      name: '人像摄影',
      count: 23,
      cover: `${base}portfolio/processed/thumbs/r1-320.webp`,
      description: '人像摄影作品'
    },
    {
      id: 'still-life',
      name: '静物摄影',
      count: 14,
      cover: `${base}portfolio/processed/thumbs/j10-320.webp`,
      description: '静物摄影作品'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-blue-500">
            吴培民
          </Link>
          <Link to="/" className="text-zinc-600 hover:text-blue-500 transition-colors">
            返回首页
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-center text-zinc-900">图片作品案例</h1>
          
          {/* 分类入口 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {categories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="group"
              >
                <Link to={`/photo-portfolio/${category.id}`} className="block">
                  <div className="relative rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    <div className="aspect-video w-full h-64">
                      <OptimizedImage
                        src={category.cover}
                        alt={category.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        containerClassName="w-full h-full"
                        priority
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
                      <h2 className="text-2xl font-bold text-white mb-2">{category.name}</h2>
                      <p className="text-white/80 mb-3">{category.description}</p>
                      <p className="text-white/60 text-sm">{category.count} 张作品</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default PhotoPortfolio;
