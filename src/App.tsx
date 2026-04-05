import React, { useState, useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Footer from './components/Footer';

// 懒加载组件
const VideoPortfolio = lazy(() => import('./components/VideoPortfolio'));
const PhotoPortfolio = lazy(() => import('./components/PhotoPortfolio'));
const CommercialPhotos = lazy(() => import('./components/CommercialPhotos'));
const PortraitPhotos = lazy(() => import('./components/PortraitPhotos'));
const StillLifePhotos = lazy(() => import('./components/StillLifePhotos'));
const BubbleBarBrand = lazy(() => import('./components/BubbleBarBrand'));

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div className="bg-white text-zinc-900 min-h-screen">
        {/* Navigation */}
        <nav 
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled 
              ? 'bg-white/80 backdrop-blur-md border-b border-zinc-200 shadow-sm' 
              : 'bg-transparent' 
          }`}
        >
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" className="text-xl font-bold text-blue-500">
              吴培民
            </Link>
            <div className="hidden md:flex space-x-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('home')}
                className="text-zinc-600 hover:text-blue-500 transition-colors"
              >
                首页
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('profile')}
                className="text-zinc-600 hover:text-blue-500 transition-colors"
              >
                关于我
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('experience')}
                className="text-zinc-600 hover:text-blue-500 transition-colors"
              >
                工作经历
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                className="text-zinc-600 hover:text-blue-500 transition-colors"
              >
                项目经历
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                className="text-zinc-600 hover:text-blue-500 transition-colors"
              >
                作品集
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="text-zinc-600 hover:text-blue-500 transition-colors"
              >
                联系我
              </motion.button>
            </div>
          </div>
        </nav>

        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">加载中...</div>}>
          <Routes>
            <Route path="/" element={
              <main>
                <section id="home">
                  <Hero />
                </section>
                <section id="profile" className="py-20 bg-zinc-50">
                  <Profile />
                </section>
                <section id="experience" className="py-20 bg-white">
                  <Experience />
                </section>
                <section id="projects" className="py-20 bg-zinc-50">
                  <Projects />
                </section>
                <section id="skills" className="py-20 bg-white">
                  <Skills />
                </section>
                <section id="contact" className="py-20 bg-zinc-50">
                  <Footer />
                </section>
              </main>
            } />
            <Route path="/video-portfolio" element={<VideoPortfolio />} />
            <Route path="/photo-portfolio" element={<PhotoPortfolio />} />
            <Route path="/photo-portfolio/commercial" element={<CommercialPhotos />} />
            <Route path="/photo-portfolio/portrait" element={<PortraitPhotos />} />
            <Route path="/photo-portfolio/still-life" element={<StillLifePhotos />} />
            <Route path="/bubble-bar-brand" element={<BubbleBarBrand />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
