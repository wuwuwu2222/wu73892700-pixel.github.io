import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// 配置项
const config = {
  inputDir: path.join(process.cwd(), 'public/portfolio/images'),
  outputDir: path.join(process.cwd(), 'public/portfolio/processed'),
  thumbsDir: 'thumbs',
  fullDir: 'full',
  thumbSizes: [320, 640],
  fullSizes: [1200, 1600],
  quality: 80,
  formats: ['webp', 'jpg'],
  // 排除视频封面图片
  excludePatterns: [
    /^medium-.*-cover\.(png|jpg|jpeg)$/,
    /^w.*-cover\.(png|jpg|jpeg)$/
  ]
};

// 确保输出目录存在
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// 处理单个图片
async function processImage(imagePath, filename) {
  try {
    console.log(`Processing ${filename}...`);
    
    const image = sharp(imagePath);
    
    // 处理缩略图
    for (const size of config.thumbSizes) {
      for (const format of config.formats) {
        const outputPath = path.join(
          config.outputDir,
          config.thumbsDir,
          `${path.parse(filename).name}-${size}.${format}`
        );
        
        await image
          .clone()
          .resize(size)
          .toFormat(format, { quality: config.quality })
          .toFile(outputPath);
        
        console.log(`  Created thumbnail: ${path.basename(outputPath)}`);
      }
    }
    
    // 处理大图
    for (const size of config.fullSizes) {
      for (const format of config.formats) {
        const outputPath = path.join(
          config.outputDir,
          config.fullDir,
          `${path.parse(filename).name}-${size}.${format}`
        );
        
        await image
          .clone()
          .resize(size)
          .toFormat(format, { quality: config.quality })
          .toFile(outputPath);
        
        console.log(`  Created full size: ${path.basename(outputPath)}`);
      }
    }
    
  } catch (error) {
    console.error(`Error processing ${filename}:`, error);
  }
}

// 生成图片数据
function generateImageData() {
  const images = [];
  const files = fs.readdirSync(config.inputDir);
  
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    const shouldExclude = config.excludePatterns.some(pattern => pattern.test(file));
    return ['.jpg', '.jpeg', '.png'].includes(ext) && !shouldExclude;
  });
  
  imageFiles.forEach(file => {
    const baseName = path.parse(file).name;
    
    // 生成缩略图路径
    const thumbnails = config.thumbSizes.map(size => ({
      size,
      webp: `/portfolio/processed/thumbs/${baseName}-${size}.webp`,
      jpg: `/portfolio/processed/thumbs/${baseName}-${size}.jpg`
    }));
    
    // 生成大图路径
    const fullImages = config.fullSizes.map(size => ({
      size,
      webp: `/portfolio/processed/full/${baseName}-${size}.webp`,
      jpg: `/portfolio/processed/full/${baseName}-${size}.jpg`
    }));
    
    // 确定分类
    let category = 'commercial';
    if (file.startsWith('r')) {
      // 将所有r开头的图片归为人像摄影
      category = 'portrait';
    } else if (file.startsWith('j')) {
      // 将所有j开头的图片归为静物摄影
      category = 'stillLife';
    } else if (file.startsWith('s')) {
      // 将所有s开头的图片归为商业活动
      category = 'commercial';
    } else if (file.includes('portrait')) {
      category = 'portrait';
    } else if (file.includes('still')) {
      category = 'stillLife';
    }
    
    // 生成标题
    let title = baseName;
    if (baseName.includes('s')) {
      const sNumber = parseInt(baseName.replace('s', ''));
      if (!isNaN(sNumber)) {
        title = `商业活动照片${sNumber}`;
      }
    } else if (baseName.includes('r')) {
      const rNumber = parseInt(baseName.replace('r', ''));
      if (!isNaN(rNumber)) {
        title = `人像摄影照片${rNumber}`;
      }
    } else if (baseName.includes('j')) {
      const jNumber = parseInt(baseName.replace('j', ''));
      if (!isNaN(jNumber)) {
        title = `静物摄影照片${jNumber}`;
      }
    }
    
    images.push({
      id: baseName,
      title,
      type: 'image',
      thumbnails,
      fullImages,
      description: '摄影作品',
      tags: ['摄影'],
      category,
      year: '2024'
    });
  });
  
  // 对图片数据进行排序
  images.sort((a, b) => {
    // 首先按分类排序
    if (a.category !== b.category) {
      const categoryOrder = { commercial: 0, portrait: 1, stillLife: 2 };
      return categoryOrder[a.category] - categoryOrder[b.category];
    }
    
    // 然后按标题中的数字排序
    const aMatch = a.title.match(/\d+/);
    const bMatch = b.title.match(/\d+/);
    
    if (aMatch && bMatch) {
      return parseInt(aMatch[0]) - parseInt(bMatch[0]);
    }
    
    // 如果没有数字，则按标题排序
    return a.title.localeCompare(b.title);
  });
  
  return images;
}

// 主函数
async function main() {
  console.log('Starting image processing...');
  
  // 确保输出目录存在
  ensureDir(path.join(config.outputDir, config.thumbsDir));
  ensureDir(path.join(config.outputDir, config.fullDir));
  
  // 处理所有图片
  const files = fs.readdirSync(config.inputDir);
  console.log('Found all files:', files);
  console.log('Found r files:', files.filter(f => f.startsWith('r')));
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    const shouldExclude = config.excludePatterns.some(pattern => pattern.test(file));
    const isImage = ['.jpg', '.jpeg', '.png'].includes(ext);
    console.log(`Processing file ${file}: ext=${ext}, isImage=${isImage}, shouldExclude=${shouldExclude}`);
    return isImage && !shouldExclude;
  });
  console.log('Filtered all image files:', imageFiles);
  console.log('Filtered r image files:', imageFiles.filter(f => f.startsWith('r')));
  
  for (const file of imageFiles) {
    const imagePath = path.join(config.inputDir, file);
    await processImage(imagePath, file);
  }
  
  // 生成图片数据
  const imageData = generateImageData();
  const dataOutputPath = path.join(process.cwd(), 'src/data/processedImageData.ts');
  
  const dataContent = `// 处理后的图片数据
// 自动生成，请勿手动修改

interface ImageItem {
  id: string;
  title: string;
  type: 'image';
  thumbnails: Array<{
    size: number;
    webp: string;
    jpg: string;
  }>;
  fullImages: Array<{
    size: number;
    webp: string;
    jpg: string;
  }>;
  description: string;
  tags: string[];
  category: 'commercial' | 'portrait' | 'stillLife';
  year: string;
}

const processedImageData: ImageItem[] = ${JSON.stringify(imageData, null, 2)};

export default processedImageData;
`;
  
  fs.writeFileSync(dataOutputPath, dataContent);
  console.log(`\nGenerated image data at ${dataOutputPath}`);
  console.log('Image processing completed!');
}

// 运行
main().catch(console.error);
