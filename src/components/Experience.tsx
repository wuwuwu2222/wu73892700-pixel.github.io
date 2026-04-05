import React from 'react';
import { motion } from 'framer-motion';

const base = import.meta.env.BASE_URL;

interface ExperienceItem {
  period: string;
  company: string;
  position: string;
  content: string[];
  achievements: string[];
  image?: string;
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      period: '2023.01-2026.02',
      company: '南京合光星迹文化传媒有限公司',
      position: '编导 / 联合创始人',
      image: `${base}experience-photos/heguang.jpg`,
      content: [
        '工作室全案统筹：创建并管理工作室，负责精准沟通客户需求、制定个性化服务方案，并协调现场团队主导拍摄执行。',
        '项目流质量管理：负责高并发项目下的成果审核与质量交付，管理团队成员，保障各环节高效推进与交付节点对齐。',
        '流程优化：建立每周复盘机制，通过AI工作流提升脚本产出效率与交付质量。',
        '个人IP冷启动实验：持续探索跨平台算法逻辑，进行高频度的内容复盘与工具迭代。'
      ],
      achievements: [
        '高并发项目闭环：成立两年间，通过线上渠道精准获客，累计独立统筹并高标准交付各类视觉项目超过300个。',
        '高效私域转化：擅长短视频起号与内容爆发，熟悉小红书等平台算法机制，半年内通过内容运营实现私域精准获客2000+，并推动单账号累计播放量突破500万。',
        '行业口碑与背书：凭借长期稳定的高质量产出与极佳的协作沟通，荣获“南京大学校友会最佳合作伙伴”称号。'
      ]
    },
    {
      period: '2025.04 - 2026.01',
      company: '江宁区气泡舱社交酒馆店（个体工商户）',
      position: '社交酒馆主理人 / 综艺编导',
      image: `${base}experience-photos/qipaocang.jpg`,
      content: [
        '互联网全渠道获客运营：针对无线下自然客流的写字楼痛点，独立负责从0到1的线上引流矩阵。通过高频短视频内容（周均8套脚本）在社交媒体进行精准获客，涵盖选题、拍摄、出镜及后期全流程。',
        '“实体游戏化”活动策划：将线下社交定义为沉浸式产品，策划并主持具有机制感的社交活动，负责现场节奏控场与用户情绪管理。',
        '社群与私域维护：通过内容运营与玩法设计，完成从线上流量到线下转化的闭环，并负责2000+私域用户的日常深度维护。'
      ],
      achievements: [
        '从0到1的线上获客：在写字楼门店无任何自然客流的极端条件下，完全依靠纯线上引流策略，助力门店斩获江宁区社交酒馆“线上人气榜”与“销量榜”双榜第一。',
        '高频游戏产品迭代能力：累计策划并执行超过80场沉浸式线下综艺游戏，将传统酒馆转化为具有高参与感的“实体游戏空间”，极大地提升了用户粘性与复购率。',
        '内容驱动与精准引流：独立运营门店矩阵账号，凭借对流量钩子的精准把控，实现全网播放量突破200万，线上获客2000+。'
      ]
    },
    {
      period: '2022.06 - 2023.12',
      company: '南京火工传媒文化有限公司',
      position: '导演 / 编导',
      image: `${base}experience-photos/huogong.jpg`,
      content: [
        '商业内容全流程产出：主导vivo苏皖南京总公司短视频项目，负责产品实景拍摄、实测出镜及光影设计。',
        '脚本撰写与后期包装：独立完成包含视频文案、分镜脚本在内的策划方案，并主导调色、特效包装及封面设计等全链路后期工作。',
        '数据驱动迭代：实时监控播放量等核心指标，针对反馈进行内容复盘与策略优化。'
      ],
      achievements: [
        '区域标杆与流量统治力：主导vivo苏皖区域官方账号运营，凭借对品牌调性与用户心理的深度洞察，助力其跃升为苏皖地区vivo官方账号线上流量第一名。',
        '现象级数据增长：操盘项目在抖音平台半年内实现从0到20万的爆发式涨粉，系列视频总播放量突破2亿次。',
        '高频爆款产出能力：通过对流量钩子与叙事节奏的精准掌控，累计打造播放量破百万的爆款视频10余支，证明了高质量内容的可复制性与持续输出能力。'
      ]
    },
    {
      period: '2021.12 - 2022.05',
      company: '杭州ATOPOS零一工作室',
      position: '摄影 / 摄像',
      image: `${base}experience-photos/atopos.jpg`,
      content: [
        '视觉营销与品牌建立：负责淘宝店服装类目的整体视觉呈现。利用课余时间往返杭州，独立执行商品样片拍摄、画册（Lookbook）设计及后期修图。',
        '多角色参与：根据拍摄需求，亲自出镜充当模特，建立具有亲和力与信任感的品牌形象。'
      ],
      achievements: [
        '通过视觉风格迭代，助力店铺在半年内粉丝增长1.5W+，实现月营业额最高10万元的突破。'
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-12 text-center text-zinc-900"
      >
        工作与创业经历
      </motion.h2>
      <div className="space-y-8">
        {experiences.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-white p-6 rounded-lg border border-zinc-200 hover:border-blue-500/50 hover:shadow-md transition-all duration-300"
          >
            <div className="relative">
              {item.image && (
                <div className="float-right ml-4 mb-4 w-64 h-52 rounded-lg border border-gray-200 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={`${item.company}工作照片`} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              )}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-zinc-900">{item.company}</h3>
                  <p className="text-blue-500 font-medium">{item.position}</p>
                </div>
                <div className="mt-2 md:mt-0 text-zinc-500">{item.period}</div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-zinc-900 mb-2">内容：</h4>
                  <ul className="space-y-2 text-zinc-700">
                    {item.content.map((content, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-500 mr-2">{idx + 1}.</span>
                        <span>{content}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-zinc-900 mb-2">业绩：</h4>
                  <ul className="space-y-2 text-zinc-700">
                    {item.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-500 mr-2">{idx + 1}.</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
