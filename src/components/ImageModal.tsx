import React, { useState, useEffect, useCallback, memo, useMemo } from 'react';
import processedImageData from '../data/processedImageData';
import OptimizedImage from './OptimizedImage';

const base = import.meta.env.BASE_URL;

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  imageSrc: string;
}

const ImageModal: React.FC<ImageModalProps> = memo(({ isOpen, onClose, imageSrc }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // 找到当前图片在数据中的索引
  useEffect(() => {
    if (isOpen) {
      // 移除 base 前缀后再比较
      const cleanImageSrc = imageSrc.replace(base, '');
      const index = processedImageData.findIndex(img => img.fullImages[0].webp === cleanImageSrc || `${base}${img.fullImages[0].webp.replace('./', '')}` === imageSrc);
      if (index !== -1) {
        setCurrentImageIndex(index);
      }
    }
  }, [isOpen, imageSrc, base]);

  // 生成响应式尺寸配置
  const sizes = useMemo(() => {
    return '(max-width: 768px) 95vw, 80vw';
  }, []);

  // 预加载图片
  const preloadImage = useCallback((src: string) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = resolve;
      img.onerror = reject;
      img.src = src;
    });
  }, []);

  // 处理下一张图片
  const handleNext = useCallback(async () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setIsLoading(true);
    
    try {
      const nextIndex = (currentImageIndex + 1) % processedImageData.length;
      const nextImage = processedImageData[nextIndex];
      // 预加载下一张图片
      await preloadImage(`${base}${nextImage.fullImages[0].webp.replace('./', '')}`);
      setCurrentImageIndex(nextIndex);
    } catch (error) {
      console.error('Error preloading image:', error);
    } finally {
      setIsLoading(false);
      setIsTransitioning(false);
    }
  }, [currentImageIndex, isTransitioning, preloadImage]);

  // 处理上一张图片
  const handlePrev = useCallback(async () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setIsLoading(true);
    
    try {
      const prevIndex = (currentImageIndex - 1 + processedImageData.length) % processedImageData.length;
      const prevImage = processedImageData[prevIndex];
      // 预加载上一张图片
      await preloadImage(`${base}${prevImage.fullImages[0].webp.replace('./', '')}`);
      setCurrentImageIndex(prevIndex);
    } catch (error) {
      console.error('Error preloading image:', error);
    } finally {
      setIsLoading(false);
      setIsTransitioning(false);
    }
  }, [currentImageIndex, isTransitioning, preloadImage]);

  // 键盘导航
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handleNext, handlePrev]);

  // 点击背景关闭
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const currentImage = processedImageData[currentImageIndex];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-xl p-4 md:p-6 max-w-5xl w-full mx-4 max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg md:text-xl font-semibold truncate pr-4">{currentImage.title}</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-zinc-100 rounded-full flex items-center justify-center hover:bg-zinc-200 transition-colors flex-shrink-0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="bg-gray-100 rounded-lg overflow-hidden relative flex-1 flex items-center justify-center min-h-[300px] md:min-h-[500px]">
          <OptimizedImage
            src={`${base}${currentImage.fullImages[0].webp.replace('./', '')}`}
            alt={currentImage.title}
            className="max-w-full max-h-[60vh] md:max-h-[70vh] w-auto h-auto object-contain"
            containerClassName="w-full h-full flex items-center justify-center"
            sizes={sizes}
            onLoad={() => setIsLoading(false)}
          />
          
          {/* 加载指示器 */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
            </div>
          )}
          
          {/* 导航按钮 */}
          <button
            onClick={handlePrev}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
            disabled={isTransitioning}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
            disabled={isTransitioning}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
        
        {/* 图片计数器 */}
        <div className="mt-4 text-center text-sm text-gray-500">
          {currentImageIndex + 1} / {processedImageData.length}
        </div>
      </div>
    </div>
  );
});

ImageModal.displayName = 'ImageModal';

export default ImageModal;
