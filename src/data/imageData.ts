// 图片数据配置文件
// 为每张图片提供不同尺寸的路径

interface ImageItem {
  id: string;
  title: string;
  type: 'image';
  thumbnail: string; // 缩略图 (使用原始图片)
  medium: string; // 中等尺寸 (使用原始图片)
  large: string; // 高清图 (原始尺寸)
  description: string;
  tags: string[];
  category: 'commercial' | 'portrait' | 'stillLife';
  year: string;
}

const imageData: ImageItem[] = [
  // s系列商业活动照片（实际存在的文件）
  ...Array.from({ length: 56 }, (_, index) => {
    const num = index + 1;
    return {
      id: `s${num}`,
      title: `商业活动照片${num + 2}`,
      type: 'image' as 'image',
      thumbnail: `portfolio/images/s${num}.jpg`,
      medium: `portfolio/images/s${num}.jpg`,
      large: `portfolio/images/s${num}.jpg`,
      description: '商业活动现场拍摄',
      tags: ['商业', '活动', '摄影'],
      category: 'commercial' as 'commercial',
      year: '2024'
    } as ImageItem;
  }),
  // 人像摄影
  {
    id: 'portrait1',
    title: '人像摄影1',
    type: 'image' as 'image',
    thumbnail: 'portfolio/images/s1.jpg',
    medium: 'portfolio/images/s1.jpg',
    large: 'portfolio/images/s1.jpg',
    description: '人像摄影作品',
    tags: ['人像', '摄影'],
    category: 'portrait' as 'portrait',
    year: '2024'
  } as ImageItem,
  {
    id: 'portrait2',
    title: '人像摄影2',
    type: 'image' as 'image',
    thumbnail: 'portfolio/images/s2.jpg',
    medium: 'portfolio/images/s2.jpg',
    large: 'portfolio/images/s2.jpg',
    description: '人像摄影作品',
    tags: ['人像', '摄影'],
    category: 'portrait' as 'portrait',
    year: '2024'
  } as ImageItem,
  // 静物摄影
  {
    id: 'stillLife1',
    title: '静物摄影1',
    type: 'image' as 'image',
    thumbnail: 'portfolio/images/s3.jpg',
    medium: 'portfolio/images/s3.jpg',
    large: 'portfolio/images/s3.jpg',
    description: '静物摄影作品',
    tags: ['静物', '摄影'],
    category: 'stillLife' as 'stillLife',
    year: '2024'
  } as ImageItem,
  {
    id: 'stillLife2',
    title: '静物摄影2',
    type: 'image' as 'image',
    thumbnail: 'portfolio/images/s4.jpg',
    medium: 'portfolio/images/s4.jpg',
    large: 'portfolio/images/s4.jpg',
    description: '静物摄影作品',
    tags: ['静物', '摄影'],
    category: 'stillLife' as 'stillLife',
    year: '2024'
  } as ImageItem
];

export default imageData;
