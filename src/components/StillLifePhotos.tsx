import React, { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import processedImageData from '../data/processedImageData';
import WorkCard from './WorkCard';
import ImageModal from './ImageModal';

const base = import.meta.env.BASE_URL;

const StillLifePhotos: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(4);
  const observerRef = useRef<HTMLDivElement>(null);
  const loadingRef = useRef(false);

  const stillLifeImages = useMemo(() => {
    return processedImageData.filter(image => image.category === 'stillLife');
  }, []);

  const visibleImages = useMemo(() => {
    return stillLifeImages.slice(0, visibleCount);
  }, [stillLifeImages, visibleCount]);

  const loadMore = useCallback(() => {
    if (loadingRef.current || visibleCount >= stillLifeImages.length) return;
    loadingRef.current = true;
    setVisibleCount(prev => Math.min(prev + 4, stillLifeImages.length));
  }, [visibleCount, stillLifeImages.length]);

  useEffect(() => {
    loadingRef.current = false;
  }, [visibleCount]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCount < stillLifeImages.length) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [visibleCount, stillLifeImages.length, loadMore]);

  const getSelectedImage = useCallback(() => {
    const image = stillLifeImages.find(i => i.id === selectedImage);
    if (image) {
      // 为图片路径添加 base 前缀
      const processedImage = {
        ...image,
        thumbnails: image.thumbnails.map(thumb => ({
          ...thumb,
          webp: base + thumb.webp.replace('./', ''),
          jpg: base + thumb.jpg.replace('./', '')
        })),
        fullImages: image.fullImages.map(img => ({
          ...img,
          webp: base + img.webp.replace('./', ''),
          jpg: base + img.jpg.replace('./', '')
        }))
      };
      return processedImage;
    }
    return undefined;
  }, [stillLifeImages, selectedImage, base]);

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-blue-500">吴培民</Link>
          <div className="flex space-x-4">
            <Link to="/photo-portfolio" className="text-zinc-600 hover:text-blue-500 transition-colors">返回分类</Link>
            <Link to="/" className="text-zinc-600 hover:text-blue-500 transition-colors">返回首页</Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 pt-24 pb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl font-bold mb-8 text-center text-zinc-900">静物摄影</h1>
          <p className="text-center text-zinc-600 mb-12 max-w-2xl mx-auto">静物摄影作品，展现物品的质感与美感</p>
          
          <section className="mb-16" style={{ contentVisibility: 'auto' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {visibleImages.map((image, index) => {
                const processedThumbnails = image.thumbnails.map(thumb => ({
                  ...thumb,
                  webp: base + thumb.webp.replace('./', ''),
                  jpg: base + thumb.jpg.replace('./', '')
                }));
                return (
                  <WorkCard
                    key={image.id}
                    id={image.id}
                    title={image.title}
                    type="image"
                    cover={base + image.thumbnails[0].webp.replace('./', '')}
                    thumbnails={processedThumbnails}
                    description={image.description}
                    tags={image.tags}
                    priority={index < 2}
                    onClick={() => setSelectedImage(image.id)}
                  />
                );
              })}
            </div>
            
            <div ref={observerRef} className="mt-12 flex justify-center">
              {visibleCount < stillLifeImages.length ? (
                <button onClick={loadMore} className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">加载更多</button>
              ) : (
                <p className="text-gray-500 text-sm">已加载全部作品</p>
              )}
            </div>
          </section>
        </motion.div>
      </main>

      {selectedImage && getSelectedImage() && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          title={getSelectedImage()?.title || ''}
          imageSrc={getSelectedImage()?.fullImages[0].webp || ''}
        />
      )}
    </div>
  );
};

export default StillLifePhotos;
