import React from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from './OptimizedImage';

const base = import.meta.env.BASE_URL;

const Profile: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto pt-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-black">关于我</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          
          {/* 左侧文字介绍 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 h-full flex flex-col"
          >
            {/* Welcome 标题 */}
            <div className="mb-6">
              <p className="text-3xl md:text-4xl font-bold text-black mb-2">Welcome to</p>
              <div className="inline-block bg-blue-500 px-4 py-2 rounded-lg">
                <span className="text-white text-xl md:text-2xl font-bold">小明的频道</span>
              </div>
            </div>
            
            {/* 个人介绍文字 */}
            <div className="space-y-4 text-gray-600 leading-relaxed mb-6 flex-1">
              <p>
                你好，我叫小明，出生在浙江的一个小县城，毕业于南京传媒学院摄影学院，一个超高能量的ENFJ。为人真诚，活泼开朗，脑洞很大！~
              </p>
              <p>
                4年创业与内容实战经验。具备扎实的视听语言审美与成熟的内容判断力。累计统筹并闭环交付300+视觉项目，能够高效完成从创意、脚本到拍摄、后期的全流程协作与推进。
              </p>
              <p>
                擅长跨角色沟通、进度同步与现场控场，在高强度、多线程项目中仍能保持稳定输出。熟悉B站、抖音、小红书等内容生态，具备敏锐网感、用户洞察与持续迭代能力，并能结合AI工具优化创作流程与执行效率。
              </p>
              <p>
                熟练使用表答进行数据抓取，结合Chat GPT完成内容策划，运用闪电分镜、BananaPro制作分镜，具备相机拍摄、稳定器及灯光实操能力，熟悉PR、AE、PS、FCP等工具。
              </p>
            </div>
            
            {/* 个人标签 */}
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">导演</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">编导</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">视觉主理人</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">内容策划</span>
            </div>
          </motion.div>
          
          {/* 右侧工牌设计 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end h-full"
          >
            <motion.div 
              className="relative w-full max-w-sm h-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* 工牌卡片 */}
              <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden shadow-xl h-full flex flex-col">
                {/* 顶部蓝色区域 */}
                <div className="bg-blue-500 px-6 py-4 relative">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-white font-bold text-lg">ID CARD</p>
                      <p className="text-blue-100 text-xs">NANJING UNIVERSITY OF THE ARTS</p>
                    </div>
                    {/* 右上角徽章 */}
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                      <span className="text-white text-xl font-bold">W</span>
                    </div>
                  </div>
                </div>
                
                {/* 工牌内容区域 */}
                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  {/* 头像和姓名区域 */}
                  <div className="flex gap-4">
                    {/* 头像 */}
                    <div className="w-20 h-24 bg-gray-100 rounded-lg overflow-hidden border-2 border-gray-200 flex-shrink-0">
                      <OptimizedImage
                        src={`${base}profile.jpg`}
                        alt="吴培民"
                        className="w-full h-full object-cover"
                        containerClassName="w-full h-full"
                        sizes="80px"
                      />
                    </div>
                    
                    {/* 姓名卡片 */}
                    <div className="flex-1 space-y-2">
                      <div className="bg-gray-100 rounded-lg p-3 border border-gray-200 max-w-xs">
                        <p className="text-xs text-gray-500 mb-1">NAME</p>
                        <p className="font-bold text-black">吴培民</p>
                      </div>
                      
                      <div className="bg-blue-50 rounded-lg p-3 border border-blue-100 max-w-xs">
                        <p className="text-xs text-gray-500 mb-1">TITLE</p>
                        <p className="font-bold text-black">全能型导演</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* 工作经历 */}
                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 flex-1">
                    <p className="text-xs text-gray-500 mb-2">WORK EXPERIENCE</p>
                    <div className="space-y-1 text-sm">
                      <p className="text-black">• 合光星迹文化 | 联合创始人/编导</p>
                      <p className="text-black">• 气泡舱社交酒馆 | 游戏主理人</p>
                      <p className="text-black">• 南京火工文化 | 资深编导</p>
                      <p className="text-black">• ATOPOS 零一淘宝店 | 联合创始人</p>
                    </div>
                  </div>
                  
                  {/* 底部信息 */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="text-xs text-gray-400">
                      <p>ID: Wu-20010619-PM</p>
                    </div>
                    {/* 官方认证徽章 */}
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex flex-col items-center justify-center border-2 border-white shadow-md">
                      <span className="text-white text-xs font-bold">无限</span>
                      <span className="text-white text-xs font-bold">进步</span>
                    </div>
                  </div>
                  
                  {/* 条形码装饰 */}
                  <div className="flex justify-center pt-2">
                    <div className="flex gap-0.5 h-8 items-end">
                      {[...Array(20)].map((_, i) => (
                        <div 
                          key={i} 
                          className="bg-gray-800 w-1"
                          style={{ height: `${Math.random() * 100}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
        </div>
        
        {/* 底部三个卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
            className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
          >
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-600"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-3">个人爱好</h4>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                足球
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                政治
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                阅读
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                晒太阳
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                一切新鲜事物
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                ChatGPT深度使用者
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
            className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
          >
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-600"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/><path d="M3 7.5h4"/><path d="M3 12h18"/><path d="M3 16.5h4"/><path d="M17 3v18"/><path d="M17 7.5h4"/><path d="M17 16.5h4"/></svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-3">喜欢的电影</h4>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                白日梦想家
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                星际穿越
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                绿皮书
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                燃情岁月
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                教父系列
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                了不起的盖茨比
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
            className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
          >
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-600"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-3">喜欢的书籍</h4>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                乔布斯传
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                三体
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                白夜行
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                病隙碎笔
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                明朝那些事儿
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                拿破仑传
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
