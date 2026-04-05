import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Download, ExternalLink, X } from 'lucide-react';

const base = import.meta.env.BASE_URL;

const Footer: React.FC = () => {
  const [showWechat, setShowWechat] = useState(false);

  // 处理ESC键关闭弹窗
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && showWechat) {
        setShowWechat(false);
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [showWechat]);

  // 小红书主页链接
  const XHS_URL = "https://xhslink.com/m/A4wQeRAUcIq";

  return (
    <div className="container mx-auto px-4">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-12 text-center text-zinc-900"
      >
        联系我
      </motion.h2>
      
      <div className="bg-white p-8 rounded-xl border border-zinc-200 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowWechat(true)}
            className="flex flex-col items-center justify-center p-6 bg-zinc-50 rounded-lg hover:bg-zinc-100 transition-all duration-300 border border-zinc-200 hover:border-blue-300 cursor-pointer"
          >
            <MessageSquare className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="text-lg font-semibold text-zinc-900 mb-1">微信</h3>
            <p className="text-sm text-zinc-500">点击查看二维码</p>
          </motion.button>
          
          <motion.a
            href={XHS_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center justify-center p-6 bg-zinc-50 rounded-lg hover:bg-zinc-100 transition-all duration-300 border border-zinc-200 hover:border-blue-300 cursor-pointer"
          >
            <ExternalLink className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="text-lg font-semibold text-zinc-900 mb-1">小红书</h3>
            <p className="text-sm text-zinc-500">跳转我的主页</p>
          </motion.a>
          
          <motion.a
            href={`${base}files/吴培民-简历.pdf`}
            download
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center justify-center p-6 bg-zinc-50 rounded-lg hover:bg-zinc-100 transition-all duration-300 border border-zinc-200 hover:border-blue-300 cursor-pointer"
          >
            <Download className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="text-lg font-semibold text-zinc-900 mb-1">简历</h3>
            <p className="text-sm text-zinc-500">下载 PDF 版本</p>
          </motion.a>
        </div>

        {/* WeChat QR Code Modal */}
        {showWechat && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
            onClick={() => setShowWechat(false)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="bg-white p-6 rounded-lg border border-zinc-200 shadow-lg relative"
            >
              <button 
                onClick={() => setShowWechat(false)}
                className="absolute top-3 right-3 p-1 rounded-full hover:bg-zinc-100 transition-colors"
              >
                <X size={20} className="text-zinc-500" />
              </button>
              <h4 className="text-center text-zinc-900 mb-4">扫码添加微信</h4>
              <div className="w-48 h-48 mx-auto border border-zinc-200 rounded overflow-hidden">
                <img 
                  src={`${base}contact/wechat-qr.png`} 
                  alt="微信二维码" 
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}

        <div className="mt-8 text-center text-zinc-500 text-sm">
          <p>© 2026 吴培民. 保留所有权利.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;