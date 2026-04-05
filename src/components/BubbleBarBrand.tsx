import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Image } from 'lucide-react';
import portfolioItems from '../data/portfolio';
import VideoModal from './VideoModal';
import ImageModal from './ImageModal';

const base = import.meta.env.BASE_URL;

// 导入类型
interface PortfolioItem {
  id: string;
  title: string;
  type: 'video' | 'image';
  category: 'short' | 'mediumLong' | 'commercial' | 'portrait' | 'stillLife';
  coverImage?: string;
  cover?: string;
  videoUrl?: string;
  src?: string;
  description: string;
  tags: string[];
}

const BubbleBarBrand: React.FC = () => {
  // 从数据文件中过滤出图片作品
  const images = portfolioItems.filter((item: PortfolioItem) => item.type === 'image');
  // 从数据文件中过滤出视频作品
  const videos = portfolioItems.filter((item: PortfolioItem) => item.type === 'video');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  
  // 用于分批渲染的状态
  const [visibleSections, setVisibleSections] = useState<{[key: string]: boolean}>({
    space: true,  // 首屏可见
    activity: false,
    store: false
  });
  
  // 引用每个区块
  const spaceSectionRef = useRef<HTMLDivElement>(null);
  const activitySectionRef = useRef<HTMLDivElement>(null);
  const storeSectionRef = useRef<HTMLDivElement>(null);

  // 获取选中的图片
  const getSelectedImage = () => {
    return images.find((i: PortfolioItem) => i.id === selectedImage);
  };

  // 获取选中的视频
  const getSelectedVideo = () => {
    return videos.find((v: PortfolioItem) => v.id === selectedVideo);
  };
  
  // 滚动检测，实现分批渲染
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === spaceSectionRef.current) {
              setVisibleSections(prev => ({ ...prev, space: true }));
            } else if (entry.target === activitySectionRef.current) {
              setVisibleSections(prev => ({ ...prev, activity: true }));
            } else if (entry.target === storeSectionRef.current) {
              setVisibleSections(prev => ({ ...prev, store: true }));
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // 观察每个区块
    if (spaceSectionRef.current) observer.observe(spaceSectionRef.current);
    if (activitySectionRef.current) observer.observe(activitySectionRef.current);
    if (storeSectionRef.current) observer.observe(storeSectionRef.current);
    
    return () => {
      if (spaceSectionRef.current) observer.unobserve(spaceSectionRef.current);
      if (activitySectionRef.current) observer.unobserve(activitySectionRef.current);
      if (storeSectionRef.current) observer.unobserve(storeSectionRef.current);
    };
  }, []);

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
          <h1 className="text-4xl font-bold mb-8 text-center text-zinc-900">气泡舱社交酒馆品牌视觉</h1>
          
          {/* 店铺Logo */}
          <div className="flex justify-center mb-12">
            <img 
              src={`${base}portfolio/images/l1.jpg`} 
              alt="气泡舱社交酒馆Logo" 
              className="max-w-md h-auto"
            />
          </div>
          
          {/* Brand Story */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">品牌故事</h2>
            <div className="bg-zinc-50 p-6 rounded-xl border border-zinc-200">
              <p className="text-zinc-700 leading-relaxed">
                气泡舱社交酒馆是一个专注于打造沉浸式社交体验的品牌，通过“实体游戏化”的概念，将传统酒馆转变为具有高参与感的社交空间。品牌视觉设计以蓝色为主色调，象征着活力与创新，同时融入气泡元素，营造出轻松愉悦的氛围。
              </p>
              <p className="text-zinc-700 leading-relaxed mt-4">
                设计团队通过深入了解目标用户群体的需求，打造了一套完整的品牌视觉识别系统，包括标志设计、空间视觉、营销物料等，帮助品牌在竞争激烈的市场中脱颖而出。
              </p>
            </div>
          </section>

          {/* 空间设计展示 */}
          <section ref={spaceSectionRef} className="mb-16" style={{ contentVisibility: 'auto' }}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Image size={24} className="text-blue-500" />
              空间设计展示
            </h2>
            {visibleSections.space && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {Array.from({ length: 8 }).map((_, index) => (
                  <div key={`space-${index}`} className="aspect-square bg-zinc-100 rounded-lg overflow-hidden border border-zinc-200 hover:border-blue-300 transition-colors cursor-pointer">
                    <img 
                      src={`${base}portfolio/images/d${index + 1}.jpg`} 
                      alt={`空间设计展示 ${index + 1}`} 
                      className="w-full h-full object-cover transition-opacity duration-300"
                      loading={index < 4 ? "eager" : "lazy"}
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* 线下综艺活动 */}
          <section ref={activitySectionRef} className="mb-16" style={{ contentVisibility: 'auto' }}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Image size={24} className="text-blue-500" />
              线下综艺活动
            </h2>
            {visibleSections.activity && (
              <div className="grid grid-cols-5 gap-3">
                {Array.from({ length: 25 }).map((_, index) => {
                const num = index + 1;
                const isPng = [14, 15, 16, 17, 18, 21, 24].includes(num);
                return (
                  <div key={`activity-${num}`} className="aspect-[3/4] bg-zinc-100 rounded-lg overflow-hidden border border-zinc-200 hover:border-blue-300 transition-colors cursor-pointer">
                    <img 
                      src={`${base}portfolio/images/h${num}.${isPng ? 'png' : 'jpg'}`} 
                      alt={`线下综艺活动 ${num}`} 
                      className="w-full h-full object-cover transition-opacity duration-300"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                );
              })}
              </div>
            )}
          </section>

          {/* 店内活动照片 */}
          <section ref={storeSectionRef} style={{ contentVisibility: 'auto' }}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Image size={24} className="text-blue-500" />
              店内活动照片
            </h2>
            {visibleSections.store && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {Array.from({ length: 8 }).map((_, index) => (
                  <div key={`store-${index}`} className="aspect-square bg-zinc-100 rounded-lg overflow-hidden border border-zinc-200 hover:border-blue-300 transition-colors cursor-pointer">
                    <img 
                      src={`${base}portfolio/images/f${index + 1}.jpg`} 
                      alt={`店内活动照片 ${index + 1}`} 
                      className="w-full h-full object-cover transition-opacity duration-300"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
            )}
          </section>
        </motion.div>
      </main>

      {/* Image Modal */}
      {selectedImage && getSelectedImage() && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          title={getSelectedImage()?.title || ''}
          imageSrc={getSelectedImage()?.image || ''}
        />
      )}

      {/* Video Modal */}
      {selectedVideo && getSelectedVideo() && (
        <VideoModal
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          title={getSelectedVideo()?.title || ''}
          videoSrc={getSelectedVideo()?.videoUrl || ''}
        />
      )}
    </div>
  );
};

export default BubbleBarBrand;