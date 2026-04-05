import React, { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Video } from 'lucide-react';
import portfolioItems from '../data/portfolio';
import WorkCard from './WorkCard';
import VideoModal from './VideoModal';

// 定义视频类型
interface VideoItem {
  id: string;
  title: string;
  type: string;
  category: string;
  coverImage: string;
  videoUrl: string;
  description: string;
  tags: string[];
}

const VideoPortfolio: React.FC = () => {
  // 从数据文件中过滤出视频作品
  const videos = useMemo(() => portfolioItems.filter((item: VideoItem) => item.type === 'video'), []);
  // 过滤出短视频系列
  const shortVideos = useMemo(() => videos.filter((video: VideoItem) => video.category === 'short'), [videos]);
  // 过滤出中长视频系列
  const mediumLongVideos = useMemo(() => videos.filter((video: VideoItem) => video.category === 'mediumLong'), [videos]);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [shortVideosVisibleCount, setShortVideosVisibleCount] = useState(4); // 初始只加载4个视频
  const [mediumLongVideosVisibleCount, setMediumLongVideosVisibleCount] = useState(4); // 初始只加载4个视频
  const shortVideosObserverRef = useRef<HTMLDivElement>(null);
  const mediumLongVideosObserverRef = useRef<HTMLDivElement>(null);
  const shortVideosLoadingRef = useRef(false);
  const mediumLongVideosLoadingRef = useRef(false);

  // 获取选中的视频
  const getSelectedVideo = useCallback(() => {
    return videos.find((v: VideoItem) => v.id === selectedVideo);
  }, [videos, selectedVideo]);

  // 计算当前要显示的视频
  const visibleShortVideos = useMemo(() => {
    return shortVideos.slice(0, shortVideosVisibleCount);
  }, [shortVideos, shortVideosVisibleCount]);

  const visibleMediumLongVideos = useMemo(() => {
    return mediumLongVideos.slice(0, mediumLongVideosVisibleCount);
  }, [mediumLongVideos, mediumLongVideosVisibleCount]);

  // 加载更多短视频
  const loadMoreShortVideos = useCallback(() => {
    if (shortVideosLoadingRef.current || shortVideosVisibleCount >= shortVideos.length) return;
    shortVideosLoadingRef.current = true;
    setShortVideosVisibleCount(prev => Math.min(prev + 4, shortVideos.length));
  }, [shortVideosVisibleCount, shortVideos.length]);

  // 加载更多中长视频
  const loadMoreMediumLongVideos = useCallback(() => {
    if (mediumLongVideosLoadingRef.current || mediumLongVideosVisibleCount >= mediumLongVideos.length) return;
    mediumLongVideosLoadingRef.current = true;
    setMediumLongVideosVisibleCount(prev => Math.min(prev + 4, mediumLongVideos.length));
  }, [mediumLongVideosVisibleCount, mediumLongVideos.length]);

  // 重置 loadingRef
  useEffect(() => {
    shortVideosLoadingRef.current = false;
  }, [shortVideosVisibleCount]);

  useEffect(() => {
    mediumLongVideosLoadingRef.current = false;
  }, [mediumLongVideosVisibleCount]);

  // 实现滚动加载
  useEffect(() => {
    const shortVideosObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !shortVideosLoadingRef.current && shortVideosVisibleCount < shortVideos.length) {
          loadMoreShortVideos();
        }
      },
      { threshold: 0.1 }
    );

    const mediumLongVideosObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !mediumLongVideosLoadingRef.current && mediumLongVideosVisibleCount < mediumLongVideos.length) {
          loadMoreMediumLongVideos();
        }
      },
      { threshold: 0.1 }
    );

    if (shortVideosObserverRef.current) {
      shortVideosObserver.observe(shortVideosObserverRef.current);
    }

    if (mediumLongVideosObserverRef.current) {
      mediumLongVideosObserver.observe(mediumLongVideosObserverRef.current);
    }

    return () => {
      if (shortVideosObserverRef.current) {
        shortVideosObserver.unobserve(shortVideosObserverRef.current);
      }
      if (mediumLongVideosObserverRef.current) {
        mediumLongVideosObserver.unobserve(mediumLongVideosObserverRef.current);
      }
    };
  }, [shortVideosVisibleCount, shortVideos.length, loadMoreShortVideos, mediumLongVideosVisibleCount, mediumLongVideos.length, loadMoreMediumLongVideos]);

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
          <h1 className="text-4xl font-bold mb-2 text-center text-zinc-900">视频作品案例</h1>
          <p className="text-center text-zinc-500 mb-8">由于小明搭建个人网站还不是很熟练，超过100M的视频预览时会跳转外链请您谅解哦~</p>
          
          {/* 短视频系列 */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Video size={24} className="text-blue-500" />
              短视频系列
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleShortVideos.map((video: VideoItem) => {
                // 检查视频是否是外部链接（飞咔链接）
                const isExternalLink = video.videoUrl.startsWith('https://www.feicut.com');
                
                const handleClick = () => {
                  if (isExternalLink) {
                    // 打开新标签页跳转到飞咔链接
                    window.open(video.videoUrl, '_blank', 'noopener noreferrer');
                  } else {
                    // 使用现有模态框播放本地视频
                    setSelectedVideo(video.id);
                  }
                };
                
                return (
                  <WorkCard
                    key={video.id}
                    id={video.id}
                    title={video.title}
                    type="video"
                    cover={video.coverImage}
                    description={video.description}
                    tags={video.tags}
                    onClick={handleClick}
                  />
                );
              })}
            </div>
            
            {/* 加载更多指示器 */}
            <div ref={shortVideosObserverRef} className="mt-12 flex justify-center">
              {shortVideosVisibleCount < shortVideos.length ? (
                <button
                  onClick={loadMoreShortVideos}
                  className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                >
                  加载更多
                </button>
              ) : (
                <p className="text-gray-500 text-sm">已加载全部作品</p>
              )}
            </div>
          </section>

          {/* 中长视频系列 */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Video size={24} className="text-blue-500" />
              中长视频系列
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleMediumLongVideos.map((video: VideoItem) => {
                // 检查视频是否是外部链接（飞咔链接）
                const isExternalLink = video.videoUrl.startsWith('https://www.feicut.com');
                
                const handleClick = () => {
                  if (isExternalLink) {
                    // 打开新标签页跳转到飞咔链接
                    window.open(video.videoUrl, '_blank', 'noopener noreferrer');
                  } else {
                    // 使用现有模态框播放本地视频
                    setSelectedVideo(video.id);
                  }
                };
                
                return (
                  <WorkCard
                    key={video.id}
                    id={video.id}
                    title={video.title}
                    type="video"
                    cover={video.coverImage}
                    description={video.description}
                    tags={video.tags}
                    onClick={handleClick}
                  />
                );
              })}
            </div>
            
            {/* 加载更多指示器 */}
            <div ref={mediumLongVideosObserverRef} className="mt-12 flex justify-center">
              {mediumLongVideosVisibleCount < mediumLongVideos.length ? (
                <button
                  onClick={loadMoreMediumLongVideos}
                  className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                >
                  加载更多
                </button>
              ) : (
                <p className="text-gray-500 text-sm">已加载全部作品</p>
              )}
            </div>
          </section>
        </motion.div>
      </main>

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

export default VideoPortfolio;