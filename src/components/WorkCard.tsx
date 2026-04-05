import React, { memo, useMemo, useState, useEffect } from 'react';
import { Video, Image } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

interface WorkCardProps {
  id: string;
  title: string;
  type: 'video' | 'image';
  cover: string;
  thumbnails?: Array<{
    size: number;
    webp: string;
    jpg: string;
  }>;
  description: string;
  tags: string[];
  priority?: boolean;
  onClick: () => void;
}

const WorkCard: React.FC<WorkCardProps> = memo(({ title, type, cover, thumbnails, description, tags, priority = false, onClick }) => {
  const sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw';

  const sortedThumbnails = useMemo(() => {
    if (!thumbnails || thumbnails.length === 0) return [];
    return [...thumbnails].sort((a, b) => a.size - b.size);
  }, [thumbnails]);

  const src = sortedThumbnails[0]?.webp || cover;
  const srcSet = sortedThumbnails.map(t => `${t.webp} ${t.size}w`).join(', ');

  const [imageOrientation, setImageOrientation] = useState<'landscape' | 'portrait' | 'square'>('landscape');

  useEffect(() => {
    if (type === 'video') {
      const img = new (window as any).Image();
      img.src = sortedThumbnails[0]?.webp || cover;
      img.onload = () => {
        const { naturalWidth, naturalHeight } = img;
        if (naturalWidth > naturalHeight * 1.1) {
          setImageOrientation('landscape');
        } else if (naturalHeight > naturalWidth * 1.1) {
          setImageOrientation('portrait');
        } else {
          setImageOrientation('square');
        }
      };
    }
  }, [type, cover, sortedThumbnails]);

  const getContainerStyle = () => {
    if (type === 'video') {
      switch (imageOrientation) {
        case 'portrait': return 'aspect-[3/4]';
        case 'square': return 'aspect-square';
        case 'landscape':
        default: return 'aspect-video';
      }
    }
    return 'aspect-[4/3]';
  };

  const getImageStyle = () => {
    if (type === 'video') return 'w-full h-full object-contain';
    return 'w-full h-full object-cover';
  };

  return (
    <div
      className="bg-white rounded-xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative">
        <div className={`w-full ${getContainerStyle()}`}>
          <OptimizedImage
            src={src}
            alt={title}
            className={getImageStyle()}
            containerClassName="w-full h-full"
            sizes={sizes}
            priority={priority}
            {...(srcSet ? { srcSet } : {})}
          />
        </div>
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
          <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
            {type === 'video' ? (
              <Video size={32} className="text-blue-500" />
            ) : (
              <Image size={24} className="text-blue-500" />
            )}
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-zinc-900 mb-2">{title}</h3>
        <p className="text-zinc-600 text-sm mb-3 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
});

WorkCard.displayName = 'WorkCard';

export default WorkCard;
