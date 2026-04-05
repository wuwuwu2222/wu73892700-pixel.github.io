// 视频外部链接配置
// 小于100MB的视频使用本地路径，直接在网页内预览播放
// 大于100MB的视频使用Cloudflare Stream托管，需要填写对应的Stream链接
const videoExternalLinks = {
  // 短视频系列 - 小于100MB，使用本地路径
  "w1": "./portfolio/videos/w1.mp4",  // vivo系列短片01 (14.39MB)
  "w3": "./portfolio/videos/w3.mp4",  // vivo系列短片02 (1.93MB)
  "w4": "./portfolio/videos/w4.mp4",  // vivo系列短片03 (23.05MB)
  "w5": "https://www.feicut.com/fv/2040429528811454464",  // vivo系列短片04 (30.88MB) - 飞咔链接
  "w6": "https://www.feicut.com/fv/2040429331247153152",  // vivo系列短片05 (32.39MB) - 飞咔链接
  "w7": "./portfolio/videos/w7.mp4",  // vivo系列短片06 (4MB)
  "w9": "https://www.feicut.com/fv/2040429210597998592",  // 女性SPA馆短片 (50.85MB) - 飞咔链接
  "w10": "https://www.feicut.com/fv/2040429707392335872", // 写真花絮短片 (28.93MB) - 飞咔链接
  "w13": "https://www.feicut.com/fv/2040429210597998592", // vivo系列短片07 (96.48MB) - 飞咔链接
  "w17": "./portfolio/videos/w17.mp4", // 高淳漫城艺术节宣传短片 (20.83MB)
  
  // 短视频系列 - 大于100MB，使用飞咔外链
  "w2": "https://www.feicut.com/fv/2039610759969128448",  // 海信洗衣机短片 (138.72MB) - 飞咔链接
  "w11": "https://www.feicut.com/fv/2039611482924531712", // 科龙新风空调广告 (262.89MB) - 飞咔链接
  "w12": "https://www.feicut.com/fv/2039611628047450112", // 千万粉丝博主短片 (150.21MB) - 飞咔链接
  "w14": "https://www.feicut.com/fv/2039611911406239744", // 科龙新风空调广告02 (148.82MB) - 飞咔链接
  "w15": "https://www.feicut.com/fv/2039612149508489216", // 黄梵见面会短片 (119.07MB) - 飞咔链接
  "w16": "https://www.feicut.com/fv/2039612348431745024", // 彩子家人物专访 (133.71MB) - 飞咔链接
  "w18": "https://www.feicut.com/fv/2039613042840715264",  // 万科地产样板房宣传 (1252.28MB) - 飞咔链接
  
  // 中长视频系列 - 大于100MB，使用飞咔外链
  "medium-1": "https://www.feicut.com/fv/FVyx23karh6i", // 国家能源集团环保院宣传片 (1015.8MB) - 飞咔链接
  "medium-2": "https://www.feicut.com/fv/2039605201211899904", // 国家能源集团电科院宣传片 (637.77MB) - 飞咔链接
  "medium-3": "https://www.feicut.com/fv/2039606170356170752", // 菲尼克斯集团宣传片 (633.02MB) - 飞咔链接
  "medium-4": "https://www.feicut.com/fv/FVr00n9shibp", // 中国建设银行南京分行宣传片01 (169.28MB) - 飞咔链接
  "medium-5": "https://www.feicut.com/fv/2039609019995668480", // 中国建设银行南京分行宣传片02 (634.82MB) - 飞咔链接
  "medium-6": "https://www.feicut.com/fv/FVr00n9shibp", // 中国建设银行南京分行宣传片03 (219.37MB) - 飞咔链接
  "medium-7": "https://www.feicut.com/fv/2039609546716364800"  // 2024美埃集团年度宣传片 (167.52MB) - 飞咔链接
};

// 作品集数据
// 后续新增作品时，在此文件中添加新的作品对象
const portfolioItems = [
  {
    id: "w1",
    title: "vivo系列短片01",
    type: "video",
    coverImage: "./portfolio/images/w1-cover.jpg",
    videoUrl: videoExternalLinks["w1"],
    description: "人像 颜值 产品",
    tags: ["编导"],
    category: "short"
  },
  {
    id: "w2",
    title: "海信洗衣机短片",
    type: "video",
    coverImage: "./portfolio/images/w2-cover.jpg",
    videoUrl: videoExternalLinks["w2"],
    description: "产品介绍 口播 广告",
    tags: ["编导"],
    category: "short"
  },
  {
    id: "w3",
    title: "vivo系列短片02",
    type: "video",
    coverImage: "./portfolio/images/w3-cover.jpg",
    videoUrl: videoExternalLinks["w3"],
    description: "人像 颜值 产品",
    tags: ["编导"],
    category: "short"
  },
  {
    id: "w4",
    title: "vivo系列短片03",
    type: "video",
    coverImage: "./portfolio/images/w4-cover.jpg",
    videoUrl: videoExternalLinks["w4"],
    description: "剧情 产品 段子",
    tags: ["编导"],
    category: "short"
  },
  {
    id: "w5",
    title: "vivo系列短片04",
    type: "video",
    coverImage: "./portfolio/images/w5-cover.jpg",
    videoUrl: videoExternalLinks["w5"],
    description: "剧情 产品 段子",
    tags: ["编导"],
    category: "short"
  },
  {
    id: "w6",
    title: "vivo系列短片05",
    type: "video",
    coverImage: "./portfolio/images/w6-cover.jpg",
    videoUrl: videoExternalLinks["w6"],
    description: "剧情 产品 段子",
    tags: ["编导"],
    category: "short"
  },
  {
    id: "w7",
    title: "vivo系列短片06",
    type: "video",
    coverImage: "./portfolio/images/w7-cover.jpg",
    videoUrl: videoExternalLinks["w7"],
    description: "人像 颜值 产品",
    tags: ["编导"],
    category: "short"
  },

  {
    id: "w9",
    title: "女性SPA馆短片",
    type: "video",
    coverImage: "./portfolio/images/w9-cover.jpg",
    videoUrl: videoExternalLinks["w9"],
    description: "氛围 服务 产品",
    tags: ["编导", "拍摄", "剪辑"],
    category: "short"
  },
  {
    id: "w10",
    title: "写真花絮短片",
    type: "video",
    coverImage: "./portfolio/images/w10-cover.jpg",
    videoUrl: videoExternalLinks["w10"],
    description: "氛围 人像 花絮",
    tags: ["编导", "拍摄", "剪辑"],
    category: "short"
  },
  {
    id: "w11",
    title: "科龙新风空调广告",
    type: "video",
    coverImage: "./portfolio/images/w11-cover.jpg",
    videoUrl: videoExternalLinks["w11"],
    description: "tvc 产品 剧情",
    tags: ["编导"],
    category: "short"
  },
  {
    id: "w12",
    title: "千万粉丝博主短片",
    type: "video",
    coverImage: "./portfolio/images/w12-cover.jpg",
    videoUrl: videoExternalLinks["w12"],
    description: "广告 剧情 人物",
    tags: ["编导"],
    category: "short"
  },
  {
    id: "w13",
    title: "vivo系列短片07",
    type: "video",
    coverImage: "./portfolio/images/w13-cover.jpg",
    videoUrl: videoExternalLinks["w13"],
    description: "产品 炫酷 实拍",
    tags: ["编导", "拍摄", "剪辑"],
    category: "short"
  },
  {
    id: "w14",
    title: "科龙新风空调广告02",
    type: "video",
    coverImage: "./portfolio/images/w14-cover.jpg",
    videoUrl: videoExternalLinks["w14"],
    description: "TVC 产品 剧情",
    tags: ["编导"],
    category: "short"
  },
  {
    id: "w15",
    title: "黄梵见面会短片",
    type: "video",
    coverImage: "./portfolio/images/w15-cover.jpg",
    videoUrl: videoExternalLinks["w15"],
    description: "文学 艺术 人物",
    tags: ["编导", "拍摄", "剪辑"],
    category: "short"
  },
  {
    id: "w16",
    title: "彩子家人物专访",
    type: "video",
    coverImage: "./portfolio/images/w16-cover.jpg",
    videoUrl: videoExternalLinks["w16"],
    description: "人物访谈 塔罗 专访",
    tags: ["编导", "拍摄", "剪辑"],
    category: "short"
  },
  {
    id: "w17",
    title: "高淳漫城艺术节宣传短片",
    type: "video",
    coverImage: "./portfolio/images/w17-cover.jpg",
    videoUrl: videoExternalLinks["w17"],
    description: "艺术节宣传 短片 剧情",
    tags: ["编导"],
    category: "short"
  },
  {
    id: "w18",
    title: "万科地产样板房宣传",
    type: "video",
    coverImage: "./portfolio/images/w18-cover.jpg",
    videoUrl: videoExternalLinks["w18"],
    description: "房产宣传 样板房 产品",
    tags: ["编导", "剪辑", "拍摄"],
    category: "short"
  },
  // 中长视频系列作品
  {
    id: "medium-1",
    title: "国家能源集团环保院宣传片",
    type: "video",
    coverImage: "./portfolio/images/medium-1-cover.png",
    videoUrl: videoExternalLinks["medium-1"],
    description: "国家能源集团 宣传片",
    tags: ["编导"],
    category: "mediumLong"
  },
  {
    id: "medium-2",
    title: "国家能源集团电科院宣传片",
    type: "video",
    coverImage: "./portfolio/images/medium-2-cover.png",
    videoUrl: videoExternalLinks["medium-2"],
    description: "国家能源集团 企业宣传片",
    tags: ["编导"],
    category: "mediumLong"
  },
  {
    id: "medium-3",
    title: "菲尼克斯集团宣传片",
    type: "video",
    coverImage: "./portfolio/images/medium-3-cover.png",
    videoUrl: videoExternalLinks["medium-3"],
    description: "菲尼克斯集团 企业宣传片",
    tags: ["编导"],
    category: "mediumLong"
  },
  {
    id: "medium-4",
    title: "中国建设银行南京分行宣传片01",
    type: "video",
    coverImage: "./portfolio/images/medium-4-cover.png",
    videoUrl: videoExternalLinks["medium-4"],
    description: "你可以创造奇迹系列人物短片",
    tags: ["编导", "拍摄"],
    category: "mediumLong"
  },
  {
    id: "medium-5",
    title: "中国建设银行南京分行宣传片02",
    type: "video",
    coverImage: "./portfolio/images/medium-5-cover.png",
    videoUrl: videoExternalLinks["medium-5"],
    description: "中国建设银行 南京分行年度宣传片",
    tags: ["编导", "拍摄"],
    category: "mediumLong"
  },
  {
    id: "medium-6",
    title: "中国建设银行南京分行宣传片03",
    type: "video",
    coverImage: "./portfolio/images/medium-7-cover.png",
    videoUrl: videoExternalLinks["medium-6"],
    description: "人物系列宣传片 个人宣传片",
    tags: ["编导", "拍摄"],
    category: "mediumLong"
  },
  {
    id: "medium-7",
    title: "2024美埃集团年度宣传片",
    type: "video",
    coverImage: "./portfolio/images/medium-8-cover.png",
    videoUrl: videoExternalLinks["medium-7"],
    description: "年度企业宣传片",
    tags: ["编导"],
    category: "mediumLong"
  },

  // s系列商业活动照片
  ...Array.from({ length: 56 }, (_, index) => {
    const num = index + 1;
    return {
      id: `s${num}`,
      title: `商业活动照片${num}`,
      type: "image",
      coverImage: `./portfolio/images/s${num}.jpg`,
      image: `./portfolio/images/s${num}.jpg`,
      thumbnail: `./portfolio/images/s${num}.jpg`,
      description: "商业活动现场拍摄",
      tags: ["商业", "活动", "摄影"],
      category: "commercial",
      year: "2024"
    };
  }),
  // w系列商业活动照片
  ...Array.from({ length: 37 }, (_, index) => {
    const num = index + 30;
    return {
      id: `w${num}`,
      title: `商业活动照片${num}`,
      type: "image",
      coverImage: `./portfolio/images/s${num - 29}.jpg`,
      image: `./portfolio/images/s${num - 29}.jpg`,
      thumbnail: `./portfolio/images/s${num - 29}.jpg`,
      description: "商业活动现场拍摄",
      tags: ["商业", "活动", "摄影"],
      category: "commercial",
      year: "2024"
    };
  }),
  // 人像摄影
  {
    id: "img3",
    title: "人像摄影1",
    type: "image",
    coverImage: "./portfolio/images/s1.jpg",
    image: "./portfolio/images/s1.jpg",
    thumbnail: "./portfolio/images/s1.jpg",
    description: "人像摄影作品",
    tags: ["人像", "摄影"],
    category: "portrait",
    year: "2024"
  },
  {
    id: "img4",
    title: "人像摄影2",
    type: "image",
    coverImage: "./portfolio/images/s2.jpg",
    image: "./portfolio/images/s2.jpg",
    thumbnail: "./portfolio/images/s2.jpg",
    description: "人像摄影作品",
    tags: ["人像", "摄影"],
    category: "portrait",
    year: "2024"
  },
  // 静物摄影
  {
    id: "img5",
    title: "静物摄影1",
    type: "image",
    coverImage: "./portfolio/images/s3.jpg",
    image: "./portfolio/images/s3.jpg",
    thumbnail: "./portfolio/images/s3.jpg",
    description: "静物摄影作品",
    tags: ["静物", "摄影"],
    category: "stillLife",
    year: "2024"
  },
  {
    id: "img6",
    title: "静物摄影2",
    type: "image",
    coverImage: "./portfolio/images/s4.jpg",
    image: "./portfolio/images/s4.jpg",
    thumbnail: "./portfolio/images/s4.jpg",
    description: "静物摄影作品",
    tags: ["静物", "摄影"],
    category: "stillLife",
    year: "2024"
  }
];

export default portfolioItems;
