// 处理后的图片数据
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

const processedImageData: ImageItem[] = [
  {
    "id": "s1",
    "title": "商业活动照片1",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s1-320.webp",
        "jpg": "./portfolio/processed/thumbs/s1-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s1-640.webp",
        "jpg": "./portfolio/processed/thumbs/s1-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s1-1200.webp",
        "jpg": "./portfolio/processed/full/s1-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s1-1600.webp",
        "jpg": "./portfolio/processed/full/s1-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s2",
    "title": "商业活动照片2",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s2-320.webp",
        "jpg": "./portfolio/processed/thumbs/s2-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s2-640.webp",
        "jpg": "./portfolio/processed/thumbs/s2-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s2-1200.webp",
        "jpg": "./portfolio/processed/full/s2-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s2-1600.webp",
        "jpg": "./portfolio/processed/full/s2-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s3",
    "title": "商业活动照片3",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s3-320.webp",
        "jpg": "./portfolio/processed/thumbs/s3-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s3-640.webp",
        "jpg": "./portfolio/processed/thumbs/s3-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s3-1200.webp",
        "jpg": "./portfolio/processed/full/s3-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s3-1600.webp",
        "jpg": "./portfolio/processed/full/s3-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s4",
    "title": "商业活动照片4",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s4-320.webp",
        "jpg": "./portfolio/processed/thumbs/s4-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s4-640.webp",
        "jpg": "./portfolio/processed/thumbs/s4-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s4-1200.webp",
        "jpg": "./portfolio/processed/full/s4-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s4-1600.webp",
        "jpg": "./portfolio/processed/full/s4-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s5",
    "title": "商业活动照片5",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s5-320.webp",
        "jpg": "./portfolio/processed/thumbs/s5-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s5-640.webp",
        "jpg": "./portfolio/processed/thumbs/s5-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s5-1200.webp",
        "jpg": "./portfolio/processed/full/s5-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s5-1600.webp",
        "jpg": "./portfolio/processed/full/s5-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s6",
    "title": "商业活动照片6",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s6-320.webp",
        "jpg": "./portfolio/processed/thumbs/s6-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s6-640.webp",
        "jpg": "./portfolio/processed/thumbs/s6-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s6-1200.webp",
        "jpg": "./portfolio/processed/full/s6-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s6-1600.webp",
        "jpg": "./portfolio/processed/full/s6-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s7",
    "title": "商业活动照片7",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s7-320.webp",
        "jpg": "./portfolio/processed/thumbs/s7-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s7-640.webp",
        "jpg": "./portfolio/processed/thumbs/s7-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s7-1200.webp",
        "jpg": "./portfolio/processed/full/s7-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s7-1600.webp",
        "jpg": "./portfolio/processed/full/s7-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s8",
    "title": "商业活动照片8",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s8-320.webp",
        "jpg": "./portfolio/processed/thumbs/s8-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s8-640.webp",
        "jpg": "./portfolio/processed/thumbs/s8-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s8-1200.webp",
        "jpg": "./portfolio/processed/full/s8-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s8-1600.webp",
        "jpg": "./portfolio/processed/full/s8-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s9",
    "title": "商业活动照片9",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s9-320.webp",
        "jpg": "./portfolio/processed/thumbs/s9-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s9-640.webp",
        "jpg": "./portfolio/processed/thumbs/s9-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s9-1200.webp",
        "jpg": "./portfolio/processed/full/s9-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s9-1600.webp",
        "jpg": "./portfolio/processed/full/s9-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s10",
    "title": "商业活动照片10",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s10-320.webp",
        "jpg": "./portfolio/processed/thumbs/s10-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s10-640.webp",
        "jpg": "./portfolio/processed/thumbs/s10-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s10-1200.webp",
        "jpg": "./portfolio/processed/full/s10-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s10-1600.webp",
        "jpg": "./portfolio/processed/full/s10-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s11",
    "title": "商业活动照片11",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s11-320.webp",
        "jpg": "./portfolio/processed/thumbs/s11-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s11-640.webp",
        "jpg": "./portfolio/processed/thumbs/s11-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s11-1200.webp",
        "jpg": "./portfolio/processed/full/s11-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s11-1600.webp",
        "jpg": "./portfolio/processed/full/s11-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s12",
    "title": "商业活动照片12",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s12-320.webp",
        "jpg": "./portfolio/processed/thumbs/s12-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s12-640.webp",
        "jpg": "./portfolio/processed/thumbs/s12-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s12-1200.webp",
        "jpg": "./portfolio/processed/full/s12-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s12-1600.webp",
        "jpg": "./portfolio/processed/full/s12-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s13",
    "title": "商业活动照片13",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s13-320.webp",
        "jpg": "./portfolio/processed/thumbs/s13-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s13-640.webp",
        "jpg": "./portfolio/processed/thumbs/s13-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s13-1200.webp",
        "jpg": "./portfolio/processed/full/s13-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s13-1600.webp",
        "jpg": "./portfolio/processed/full/s13-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s14",
    "title": "商业活动照片14",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s14-320.webp",
        "jpg": "./portfolio/processed/thumbs/s14-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s14-640.webp",
        "jpg": "./portfolio/processed/thumbs/s14-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s14-1200.webp",
        "jpg": "./portfolio/processed/full/s14-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s14-1600.webp",
        "jpg": "./portfolio/processed/full/s14-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s15",
    "title": "商业活动照片15",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s15-320.webp",
        "jpg": "./portfolio/processed/thumbs/s15-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s15-640.webp",
        "jpg": "./portfolio/processed/thumbs/s15-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s15-1200.webp",
        "jpg": "./portfolio/processed/full/s15-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s15-1600.webp",
        "jpg": "./portfolio/processed/full/s15-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s16",
    "title": "商业活动照片16",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s16-320.webp",
        "jpg": "./portfolio/processed/thumbs/s16-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s16-640.webp",
        "jpg": "./portfolio/processed/thumbs/s16-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s16-1200.webp",
        "jpg": "./portfolio/processed/full/s16-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s16-1600.webp",
        "jpg": "./portfolio/processed/full/s16-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s17",
    "title": "商业活动照片17",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s17-320.webp",
        "jpg": "./portfolio/processed/thumbs/s17-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s17-640.webp",
        "jpg": "./portfolio/processed/thumbs/s17-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s17-1200.webp",
        "jpg": "./portfolio/processed/full/s17-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s17-1600.webp",
        "jpg": "./portfolio/processed/full/s17-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s18",
    "title": "商业活动照片18",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s18-320.webp",
        "jpg": "./portfolio/processed/thumbs/s18-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s18-640.webp",
        "jpg": "./portfolio/processed/thumbs/s18-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s18-1200.webp",
        "jpg": "./portfolio/processed/full/s18-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s18-1600.webp",
        "jpg": "./portfolio/processed/full/s18-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s19",
    "title": "商业活动照片19",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s19-320.webp",
        "jpg": "./portfolio/processed/thumbs/s19-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s19-640.webp",
        "jpg": "./portfolio/processed/thumbs/s19-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s19-1200.webp",
        "jpg": "./portfolio/processed/full/s19-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s19-1600.webp",
        "jpg": "./portfolio/processed/full/s19-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s20",
    "title": "商业活动照片20",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s20-320.webp",
        "jpg": "./portfolio/processed/thumbs/s20-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s20-640.webp",
        "jpg": "./portfolio/processed/thumbs/s20-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s20-1200.webp",
        "jpg": "./portfolio/processed/full/s20-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s20-1600.webp",
        "jpg": "./portfolio/processed/full/s20-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s21",
    "title": "商业活动照片21",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s21-320.webp",
        "jpg": "./portfolio/processed/thumbs/s21-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s21-640.webp",
        "jpg": "./portfolio/processed/thumbs/s21-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s21-1200.webp",
        "jpg": "./portfolio/processed/full/s21-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s21-1600.webp",
        "jpg": "./portfolio/processed/full/s21-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s22",
    "title": "商业活动照片22",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s22-320.webp",
        "jpg": "./portfolio/processed/thumbs/s22-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s22-640.webp",
        "jpg": "./portfolio/processed/thumbs/s22-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s22-1200.webp",
        "jpg": "./portfolio/processed/full/s22-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s22-1600.webp",
        "jpg": "./portfolio/processed/full/s22-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s23",
    "title": "商业活动照片23",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s23-320.webp",
        "jpg": "./portfolio/processed/thumbs/s23-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s23-640.webp",
        "jpg": "./portfolio/processed/thumbs/s23-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s23-1200.webp",
        "jpg": "./portfolio/processed/full/s23-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s23-1600.webp",
        "jpg": "./portfolio/processed/full/s23-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s24",
    "title": "商业活动照片24",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s24-320.webp",
        "jpg": "./portfolio/processed/thumbs/s24-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s24-640.webp",
        "jpg": "./portfolio/processed/thumbs/s24-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s24-1200.webp",
        "jpg": "./portfolio/processed/full/s24-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s24-1600.webp",
        "jpg": "./portfolio/processed/full/s24-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s25",
    "title": "商业活动照片25",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s25-320.webp",
        "jpg": "./portfolio/processed/thumbs/s25-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s25-640.webp",
        "jpg": "./portfolio/processed/thumbs/s25-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s25-1200.webp",
        "jpg": "./portfolio/processed/full/s25-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s25-1600.webp",
        "jpg": "./portfolio/processed/full/s25-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s26",
    "title": "商业活动照片26",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s26-320.webp",
        "jpg": "./portfolio/processed/thumbs/s26-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s26-640.webp",
        "jpg": "./portfolio/processed/thumbs/s26-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s26-1200.webp",
        "jpg": "./portfolio/processed/full/s26-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s26-1600.webp",
        "jpg": "./portfolio/processed/full/s26-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s27",
    "title": "商业活动照片27",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s27-320.webp",
        "jpg": "./portfolio/processed/thumbs/s27-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s27-640.webp",
        "jpg": "./portfolio/processed/thumbs/s27-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s27-1200.webp",
        "jpg": "./portfolio/processed/full/s27-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s27-1600.webp",
        "jpg": "./portfolio/processed/full/s27-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s28",
    "title": "商业活动照片28",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s28-320.webp",
        "jpg": "./portfolio/processed/thumbs/s28-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s28-640.webp",
        "jpg": "./portfolio/processed/thumbs/s28-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s28-1200.webp",
        "jpg": "./portfolio/processed/full/s28-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s28-1600.webp",
        "jpg": "./portfolio/processed/full/s28-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s29",
    "title": "商业活动照片29",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s29-320.webp",
        "jpg": "./portfolio/processed/thumbs/s29-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s29-640.webp",
        "jpg": "./portfolio/processed/thumbs/s29-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s29-1200.webp",
        "jpg": "./portfolio/processed/full/s29-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s29-1600.webp",
        "jpg": "./portfolio/processed/full/s29-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s30",
    "title": "商业活动照片30",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s30-320.webp",
        "jpg": "./portfolio/processed/thumbs/s30-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s30-640.webp",
        "jpg": "./portfolio/processed/thumbs/s30-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s30-1200.webp",
        "jpg": "./portfolio/processed/full/s30-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s30-1600.webp",
        "jpg": "./portfolio/processed/full/s30-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s31",
    "title": "商业活动照片31",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s31-320.webp",
        "jpg": "./portfolio/processed/thumbs/s31-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s31-640.webp",
        "jpg": "./portfolio/processed/thumbs/s31-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s31-1200.webp",
        "jpg": "./portfolio/processed/full/s31-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s31-1600.webp",
        "jpg": "./portfolio/processed/full/s31-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s32",
    "title": "商业活动照片32",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s32-320.webp",
        "jpg": "./portfolio/processed/thumbs/s32-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s32-640.webp",
        "jpg": "./portfolio/processed/thumbs/s32-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s32-1200.webp",
        "jpg": "./portfolio/processed/full/s32-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s32-1600.webp",
        "jpg": "./portfolio/processed/full/s32-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s33",
    "title": "商业活动照片33",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s33-320.webp",
        "jpg": "./portfolio/processed/thumbs/s33-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s33-640.webp",
        "jpg": "./portfolio/processed/thumbs/s33-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s33-1200.webp",
        "jpg": "./portfolio/processed/full/s33-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s33-1600.webp",
        "jpg": "./portfolio/processed/full/s33-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s34",
    "title": "商业活动照片34",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s34-320.webp",
        "jpg": "./portfolio/processed/thumbs/s34-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s34-640.webp",
        "jpg": "./portfolio/processed/thumbs/s34-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s34-1200.webp",
        "jpg": "./portfolio/processed/full/s34-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s34-1600.webp",
        "jpg": "./portfolio/processed/full/s34-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s35",
    "title": "商业活动照片35",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s35-320.webp",
        "jpg": "./portfolio/processed/thumbs/s35-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s35-640.webp",
        "jpg": "./portfolio/processed/thumbs/s35-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s35-1200.webp",
        "jpg": "./portfolio/processed/full/s35-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s35-1600.webp",
        "jpg": "./portfolio/processed/full/s35-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s36",
    "title": "商业活动照片36",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s36-320.webp",
        "jpg": "./portfolio/processed/thumbs/s36-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s36-640.webp",
        "jpg": "./portfolio/processed/thumbs/s36-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s36-1200.webp",
        "jpg": "./portfolio/processed/full/s36-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s36-1600.webp",
        "jpg": "./portfolio/processed/full/s36-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s37",
    "title": "商业活动照片37",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s37-320.webp",
        "jpg": "./portfolio/processed/thumbs/s37-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s37-640.webp",
        "jpg": "./portfolio/processed/thumbs/s37-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s37-1200.webp",
        "jpg": "./portfolio/processed/full/s37-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s37-1600.webp",
        "jpg": "./portfolio/processed/full/s37-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s38",
    "title": "商业活动照片38",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s38-320.webp",
        "jpg": "./portfolio/processed/thumbs/s38-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s38-640.webp",
        "jpg": "./portfolio/processed/thumbs/s38-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s38-1200.webp",
        "jpg": "./portfolio/processed/full/s38-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s38-1600.webp",
        "jpg": "./portfolio/processed/full/s38-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s39",
    "title": "商业活动照片39",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s39-320.webp",
        "jpg": "./portfolio/processed/thumbs/s39-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s39-640.webp",
        "jpg": "./portfolio/processed/thumbs/s39-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s39-1200.webp",
        "jpg": "./portfolio/processed/full/s39-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s39-1600.webp",
        "jpg": "./portfolio/processed/full/s39-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s40",
    "title": "商业活动照片40",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s40-320.webp",
        "jpg": "./portfolio/processed/thumbs/s40-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s40-640.webp",
        "jpg": "./portfolio/processed/thumbs/s40-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s40-1200.webp",
        "jpg": "./portfolio/processed/full/s40-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s40-1600.webp",
        "jpg": "./portfolio/processed/full/s40-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s41",
    "title": "商业活动照片41",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s41-320.webp",
        "jpg": "./portfolio/processed/thumbs/s41-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s41-640.webp",
        "jpg": "./portfolio/processed/thumbs/s41-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s41-1200.webp",
        "jpg": "./portfolio/processed/full/s41-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s41-1600.webp",
        "jpg": "./portfolio/processed/full/s41-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s42",
    "title": "商业活动照片42",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s42-320.webp",
        "jpg": "./portfolio/processed/thumbs/s42-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s42-640.webp",
        "jpg": "./portfolio/processed/thumbs/s42-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s42-1200.webp",
        "jpg": "./portfolio/processed/full/s42-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s42-1600.webp",
        "jpg": "./portfolio/processed/full/s42-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s43",
    "title": "商业活动照片43",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s43-320.webp",
        "jpg": "./portfolio/processed/thumbs/s43-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s43-640.webp",
        "jpg": "./portfolio/processed/thumbs/s43-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s43-1200.webp",
        "jpg": "./portfolio/processed/full/s43-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s43-1600.webp",
        "jpg": "./portfolio/processed/full/s43-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s44",
    "title": "商业活动照片44",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s44-320.webp",
        "jpg": "./portfolio/processed/thumbs/s44-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s44-640.webp",
        "jpg": "./portfolio/processed/thumbs/s44-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s44-1200.webp",
        "jpg": "./portfolio/processed/full/s44-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s44-1600.webp",
        "jpg": "./portfolio/processed/full/s44-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s45",
    "title": "商业活动照片45",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s45-320.webp",
        "jpg": "./portfolio/processed/thumbs/s45-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s45-640.webp",
        "jpg": "./portfolio/processed/thumbs/s45-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s45-1200.webp",
        "jpg": "./portfolio/processed/full/s45-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s45-1600.webp",
        "jpg": "./portfolio/processed/full/s45-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s46",
    "title": "商业活动照片46",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s46-320.webp",
        "jpg": "./portfolio/processed/thumbs/s46-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s46-640.webp",
        "jpg": "./portfolio/processed/thumbs/s46-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s46-1200.webp",
        "jpg": "./portfolio/processed/full/s46-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s46-1600.webp",
        "jpg": "./portfolio/processed/full/s46-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s47",
    "title": "商业活动照片47",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s47-320.webp",
        "jpg": "./portfolio/processed/thumbs/s47-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s47-640.webp",
        "jpg": "./portfolio/processed/thumbs/s47-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s47-1200.webp",
        "jpg": "./portfolio/processed/full/s47-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s47-1600.webp",
        "jpg": "./portfolio/processed/full/s47-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s48",
    "title": "商业活动照片48",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s48-320.webp",
        "jpg": "./portfolio/processed/thumbs/s48-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s48-640.webp",
        "jpg": "./portfolio/processed/thumbs/s48-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s48-1200.webp",
        "jpg": "./portfolio/processed/full/s48-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s48-1600.webp",
        "jpg": "./portfolio/processed/full/s48-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s49",
    "title": "商业活动照片49",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s49-320.webp",
        "jpg": "./portfolio/processed/thumbs/s49-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s49-640.webp",
        "jpg": "./portfolio/processed/thumbs/s49-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s49-1200.webp",
        "jpg": "./portfolio/processed/full/s49-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s49-1600.webp",
        "jpg": "./portfolio/processed/full/s49-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s50",
    "title": "商业活动照片50",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s50-320.webp",
        "jpg": "./portfolio/processed/thumbs/s50-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s50-640.webp",
        "jpg": "./portfolio/processed/thumbs/s50-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s50-1200.webp",
        "jpg": "./portfolio/processed/full/s50-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s50-1600.webp",
        "jpg": "./portfolio/processed/full/s50-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s51",
    "title": "商业活动照片51",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s51-320.webp",
        "jpg": "./portfolio/processed/thumbs/s51-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s51-640.webp",
        "jpg": "./portfolio/processed/thumbs/s51-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s51-1200.webp",
        "jpg": "./portfolio/processed/full/s51-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s51-1600.webp",
        "jpg": "./portfolio/processed/full/s51-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s52",
    "title": "商业活动照片52",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s52-320.webp",
        "jpg": "./portfolio/processed/thumbs/s52-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s52-640.webp",
        "jpg": "./portfolio/processed/thumbs/s52-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s52-1200.webp",
        "jpg": "./portfolio/processed/full/s52-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s52-1600.webp",
        "jpg": "./portfolio/processed/full/s52-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s53",
    "title": "商业活动照片53",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s53-320.webp",
        "jpg": "./portfolio/processed/thumbs/s53-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s53-640.webp",
        "jpg": "./portfolio/processed/thumbs/s53-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s53-1200.webp",
        "jpg": "./portfolio/processed/full/s53-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s53-1600.webp",
        "jpg": "./portfolio/processed/full/s53-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s54",
    "title": "商业活动照片54",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s54-320.webp",
        "jpg": "./portfolio/processed/thumbs/s54-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s54-640.webp",
        "jpg": "./portfolio/processed/thumbs/s54-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s54-1200.webp",
        "jpg": "./portfolio/processed/full/s54-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s54-1600.webp",
        "jpg": "./portfolio/processed/full/s54-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s55",
    "title": "商业活动照片55",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s55-320.webp",
        "jpg": "./portfolio/processed/thumbs/s55-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s55-640.webp",
        "jpg": "./portfolio/processed/thumbs/s55-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s55-1200.webp",
        "jpg": "./portfolio/processed/full/s55-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s55-1600.webp",
        "jpg": "./portfolio/processed/full/s55-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "s56",
    "title": "商业活动照片56",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/s56-320.webp",
        "jpg": "./portfolio/processed/thumbs/s56-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/s56-640.webp",
        "jpg": "./portfolio/processed/thumbs/s56-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/s56-1200.webp",
        "jpg": "./portfolio/processed/full/s56-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/s56-1600.webp",
        "jpg": "./portfolio/processed/full/s56-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "commercial",
    "year": "2024"
  },
  {
    "id": "r1",
    "title": "人像摄影照片1",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/r1-320.webp",
        "jpg": "./portfolio/processed/thumbs/r1-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/r1-640.webp",
        "jpg": "./portfolio/processed/thumbs/r1-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/r1-1200.webp",
        "jpg": "./portfolio/processed/full/r1-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/r1-1600.webp",
        "jpg": "./portfolio/processed/full/r1-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "portrait",
    "year": "2024"
  },
  {
    "id": "r2",
    "title": "人像摄影照片2",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/r2-320.webp",
        "jpg": "./portfolio/processed/thumbs/r2-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/r2-640.webp",
        "jpg": "./portfolio/processed/thumbs/r2-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/r2-1200.webp",
        "jpg": "./portfolio/processed/full/r2-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/r2-1600.webp",
        "jpg": "./portfolio/processed/full/r2-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "portrait",
    "year": "2024"
  },
  {
    "id": "r3",
    "title": "人像摄影照片3",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/r3-320.webp",
        "jpg": "./portfolio/processed/thumbs/r3-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/r3-640.webp",
        "jpg": "./portfolio/processed/thumbs/r3-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/r3-1200.webp",
        "jpg": "./portfolio/processed/full/r3-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/r3-1600.webp",
        "jpg": "./portfolio/processed/full/r3-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "portrait",
    "year": "2024"
  },
  {
    "id": "r4",
    "title": "人像摄影照片4",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/r4-320.webp",
        "jpg": "./portfolio/processed/thumbs/r4-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/r4-640.webp",
        "jpg": "./portfolio/processed/thumbs/r4-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/r4-1200.webp",
        "jpg": "./portfolio/processed/full/r4-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/r4-1600.webp",
        "jpg": "./portfolio/processed/full/r4-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "portrait",
    "year": "2024"
  },
  {
    "id": "r5",
    "title": "人像摄影照片5",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/r5-320.webp",
        "jpg": "./portfolio/processed/thumbs/r5-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/r5-640.webp",
        "jpg": "./portfolio/processed/thumbs/r5-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/r5-1200.webp",
        "jpg": "./portfolio/processed/full/r5-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/r5-1600.webp",
        "jpg": "./portfolio/processed/full/r5-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "portrait",
    "year": "2024"
  },
  {
    "id": "r6",
    "title": "人像摄影照片6",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/r6-320.webp",
        "jpg": "./portfolio/processed/thumbs/r6-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/r6-640.webp",
        "jpg": "./portfolio/processed/thumbs/r6-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/r6-1200.webp",
        "jpg": "./portfolio/processed/full/r6-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/r6-1600.webp",
        "jpg": "./portfolio/processed/full/r6-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "portrait",
    "year": "2024"
  },
  {
    "id": "r7",
    "title": "人像摄影照片7",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/r7-320.webp",
        "jpg": "./portfolio/processed/thumbs/r7-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/r7-640.webp",
        "jpg": "./portfolio/processed/thumbs/r7-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/r7-1200.webp",
        "jpg": "./portfolio/processed/full/r7-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/r7-1600.webp",
        "jpg": "./portfolio/processed/full/r7-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "portrait",
    "year": "2024"
  },
  {
    "id": "r8",
    "title": "人像摄影照片8",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/r8-320.webp",
        "jpg": "./portfolio/processed/thumbs/r8-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/r8-640.webp",
        "jpg": "./portfolio/processed/thumbs/r8-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/r8-1200.webp",
        "jpg": "./portfolio/processed/full/r8-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/r8-1600.webp",
        "jpg": "./portfolio/processed/full/r8-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "portrait",
    "year": "2024"
  },
  {
    "id": "r9",
    "title": "人像摄影照片9",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/r9-320.webp",
        "jpg": "./portfolio/processed/thumbs/r9-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/r9-640.webp",
        "jpg": "./portfolio/processed/thumbs/r9-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/r9-1200.webp",
        "jpg": "./portfolio/processed/full/r9-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/r9-1600.webp",
        "jpg": "./portfolio/processed/full/r9-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "portrait",
    "year": "2024"
  },
  {
    "id": "r10",
    "title": "人像摄影照片10",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/r10-320.webp",
        "jpg": "./portfolio/processed/thumbs/r10-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/r10-640.webp",
        "jpg": "./portfolio/processed/thumbs/r10-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/r10-1200.webp",
        "jpg": "./portfolio/processed/full/r10-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/r10-1600.webp",
        "jpg": "./portfolio/processed/full/r10-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "portrait",
    "year": "2024"
  },
  {
    "id": "r11",
    "title": "人像摄影照片11",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/r11-320.webp",
        "jpg": "./portfolio/processed/thumbs/r11-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/r11-640.webp",
        "jpg": "./portfolio/processed/thumbs/r11-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/r11-1200.webp",
        "jpg": "./portfolio/processed/full/r11-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/r11-1600.webp",
        "jpg": "./portfolio/processed/full/r11-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "portrait",
    "year": "2024"
  },
  {
    "id": "r12",
    "title": "人像摄影照片12",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/r12-320.webp",
        "jpg": "./portfolio/processed/thumbs/r12-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/r12-640.webp",
        "jpg": "./portfolio/processed/thumbs/r12-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/r12-1200.webp",
        "jpg": "./portfolio/processed/full/r12-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/r12-1600.webp",
        "jpg": "./portfolio/processed/full/r12-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "portrait",
    "year": "2024"
  },
  {
    "id": "r13",
    "title": "人像摄影照片13",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/r13-320.webp",
        "jpg": "./portfolio/processed/thumbs/r13-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/r13-640.webp",
        "jpg": "./portfolio/processed/thumbs/r13-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/r13-1200.webp",
        "jpg": "./portfolio/processed/full/r13-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/r13-1600.webp",
        "jpg": "./portfolio/processed/full/r13-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "portrait",
    "year": "2024"
  },
  {
    "id": "r14",
    "title": "人像摄影照片14",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/r14-320.webp",
        "jpg": "./portfolio/processed/thumbs/r14-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/r14-640.webp",
        "jpg": "./portfolio/processed/thumbs/r14-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/r14-1200.webp",
        "jpg": "./portfolio/processed/full/r14-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/r14-1600.webp",
        "jpg": "./portfolio/processed/full/r14-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "portrait",
    "year": "2024"
  },
  {
    "id": "r15",
    "title": "人像摄影照片15",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/r15-320.webp",
        "jpg": "./portfolio/processed/thumbs/r15-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/r15-640.webp",
        "jpg": "./portfolio/processed/thumbs/r15-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/r15-1200.webp",
        "jpg": "./portfolio/processed/full/r15-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/r15-1600.webp",
        "jpg": "./portfolio/processed/full/r15-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "portrait",
    "year": "2024"
  },
  {
    "id": "r16",
    "title": "人像摄影照片16",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/r16-320.webp",
        "jpg": "./portfolio/processed/thumbs/r16-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/r16-640.webp",
        "jpg": "./portfolio/processed/thumbs/r16-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/r16-1200.webp",
        "jpg": "./portfolio/processed/full/r16-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/r16-1600.webp",
        "jpg": "./portfolio/processed/full/r16-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "portrait",
    "year": "2024"
  },
  {
    "id": "r17",
    "title": "人像摄影照片17",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/r17-320.webp",
        "jpg": "./portfolio/processed/thumbs/r17-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/r17-640.webp",
        "jpg": "./portfolio/processed/thumbs/r17-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/r17-1200.webp",
        "jpg": "./portfolio/processed/full/r17-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/r17-1600.webp",
        "jpg": "./portfolio/processed/full/r17-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "portrait",
    "year": "2024"
  },
  {
    "id": "r18",
    "title": "人像摄影照片18",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/r18-320.webp",
        "jpg": "./portfolio/processed/thumbs/r18-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/r18-640.webp",
        "jpg": "./portfolio/processed/thumbs/r18-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/r18-1200.webp",
        "jpg": "./portfolio/processed/full/r18-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/r18-1600.webp",
        "jpg": "./portfolio/processed/full/r18-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "portrait",
    "year": "2024"
  },
  {
    "id": "r19",
    "title": "人像摄影照片19",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/r19-320.webp",
        "jpg": "./portfolio/processed/thumbs/r19-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/r19-640.webp",
        "jpg": "./portfolio/processed/thumbs/r19-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/r19-1200.webp",
        "jpg": "./portfolio/processed/full/r19-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/r19-1600.webp",
        "jpg": "./portfolio/processed/full/r19-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "portrait",
    "year": "2024"
  },
  {
    "id": "r20",
    "title": "人像摄影照片20",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/r20-320.webp",
        "jpg": "./portfolio/processed/thumbs/r20-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/r20-640.webp",
        "jpg": "./portfolio/processed/thumbs/r20-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/r20-1200.webp",
        "jpg": "./portfolio/processed/full/r20-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/r20-1600.webp",
        "jpg": "./portfolio/processed/full/r20-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "portrait",
    "year": "2024"
  },
  {
    "id": "r21",
    "title": "人像摄影照片21",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/r21-320.webp",
        "jpg": "./portfolio/processed/thumbs/r21-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/r21-640.webp",
        "jpg": "./portfolio/processed/thumbs/r21-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/r21-1200.webp",
        "jpg": "./portfolio/processed/full/r21-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/r21-1600.webp",
        "jpg": "./portfolio/processed/full/r21-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "portrait",
    "year": "2024"
  },
  {
    "id": "r22",
    "title": "人像摄影照片22",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/r22-320.webp",
        "jpg": "./portfolio/processed/thumbs/r22-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/r22-640.webp",
        "jpg": "./portfolio/processed/thumbs/r22-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/r22-1200.webp",
        "jpg": "./portfolio/processed/full/r22-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/r22-1600.webp",
        "jpg": "./portfolio/processed/full/r22-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "portrait",
    "year": "2024"
  },
  {
    "id": "r23",
    "title": "人像摄影照片23",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/r23-320.webp",
        "jpg": "./portfolio/processed/thumbs/r23-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/r23-640.webp",
        "jpg": "./portfolio/processed/thumbs/r23-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/r23-1200.webp",
        "jpg": "./portfolio/processed/full/r23-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/r23-1600.webp",
        "jpg": "./portfolio/processed/full/r23-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "portrait",
    "year": "2024"
  },
  {
    "id": "j1",
    "title": "静物摄影照片1",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/j1-320.webp",
        "jpg": "./portfolio/processed/thumbs/j1-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/j1-640.webp",
        "jpg": "./portfolio/processed/thumbs/j1-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/j1-1200.webp",
        "jpg": "./portfolio/processed/full/j1-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/j1-1600.webp",
        "jpg": "./portfolio/processed/full/j1-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "stillLife",
    "year": "2024"
  },
  {
    "id": "j2",
    "title": "静物摄影照片2",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/j2-320.webp",
        "jpg": "./portfolio/processed/thumbs/j2-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/j2-640.webp",
        "jpg": "./portfolio/processed/thumbs/j2-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/j2-1200.webp",
        "jpg": "./portfolio/processed/full/j2-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/j2-1600.webp",
        "jpg": "./portfolio/processed/full/j2-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "stillLife",
    "year": "2024"
  },
  {
    "id": "j3",
    "title": "静物摄影照片3",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/j3-320.webp",
        "jpg": "./portfolio/processed/thumbs/j3-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/j3-640.webp",
        "jpg": "./portfolio/processed/thumbs/j3-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/j3-1200.webp",
        "jpg": "./portfolio/processed/full/j3-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/j3-1600.webp",
        "jpg": "./portfolio/processed/full/j3-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "stillLife",
    "year": "2024"
  },
  {
    "id": "j4",
    "title": "静物摄影照片4",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/j4-320.webp",
        "jpg": "./portfolio/processed/thumbs/j4-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/j4-640.webp",
        "jpg": "./portfolio/processed/thumbs/j4-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/j4-1200.webp",
        "jpg": "./portfolio/processed/full/j4-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/j4-1600.webp",
        "jpg": "./portfolio/processed/full/j4-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "stillLife",
    "year": "2024"
  },
  {
    "id": "j5",
    "title": "静物摄影照片5",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/j5-320.webp",
        "jpg": "./portfolio/processed/thumbs/j5-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/j5-640.webp",
        "jpg": "./portfolio/processed/thumbs/j5-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/j5-1200.webp",
        "jpg": "./portfolio/processed/full/j5-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/j5-1600.webp",
        "jpg": "./portfolio/processed/full/j5-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "stillLife",
    "year": "2024"
  },
  {
    "id": "j6",
    "title": "静物摄影照片6",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/j6-320.webp",
        "jpg": "./portfolio/processed/thumbs/j6-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/j6-640.webp",
        "jpg": "./portfolio/processed/thumbs/j6-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/j6-1200.webp",
        "jpg": "./portfolio/processed/full/j6-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/j6-1600.webp",
        "jpg": "./portfolio/processed/full/j6-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "stillLife",
    "year": "2024"
  },
  {
    "id": "j7",
    "title": "静物摄影照片7",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/j7-320.webp",
        "jpg": "./portfolio/processed/thumbs/j7-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/j7-640.webp",
        "jpg": "./portfolio/processed/thumbs/j7-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/j7-1200.webp",
        "jpg": "./portfolio/processed/full/j7-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/j7-1600.webp",
        "jpg": "./portfolio/processed/full/j7-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "stillLife",
    "year": "2024"
  },
  {
    "id": "j8",
    "title": "静物摄影照片8",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/j8-320.webp",
        "jpg": "./portfolio/processed/thumbs/j8-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/j8-640.webp",
        "jpg": "./portfolio/processed/thumbs/j8-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/j8-1200.webp",
        "jpg": "./portfolio/processed/full/j8-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/j8-1600.webp",
        "jpg": "./portfolio/processed/full/j8-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "stillLife",
    "year": "2024"
  },
  {
    "id": "j9",
    "title": "静物摄影照片9",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/j9-320.webp",
        "jpg": "./portfolio/processed/thumbs/j9-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/j9-640.webp",
        "jpg": "./portfolio/processed/thumbs/j9-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/j9-1200.webp",
        "jpg": "./portfolio/processed/full/j9-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/j9-1600.webp",
        "jpg": "./portfolio/processed/full/j9-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "stillLife",
    "year": "2024"
  },
  {
    "id": "j10",
    "title": "静物摄影照片10",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/j10-320.webp",
        "jpg": "./portfolio/processed/thumbs/j10-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/j10-640.webp",
        "jpg": "./portfolio/processed/thumbs/j10-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/j10-1200.webp",
        "jpg": "./portfolio/processed/full/j10-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/j10-1600.webp",
        "jpg": "./portfolio/processed/full/j10-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "stillLife",
    "year": "2024"
  },
  {
    "id": "j11",
    "title": "静物摄影照片11",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/j11-320.webp",
        "jpg": "./portfolio/processed/thumbs/j11-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/j11-640.webp",
        "jpg": "./portfolio/processed/thumbs/j11-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/j11-1200.webp",
        "jpg": "./portfolio/processed/full/j11-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/j11-1600.webp",
        "jpg": "./portfolio/processed/full/j11-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "stillLife",
    "year": "2024"
  },
  {
    "id": "j12",
    "title": "静物摄影照片12",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/j12-320.webp",
        "jpg": "./portfolio/processed/thumbs/j12-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/j12-640.webp",
        "jpg": "./portfolio/processed/thumbs/j12-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/j12-1200.webp",
        "jpg": "./portfolio/processed/full/j12-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/j12-1600.webp",
        "jpg": "./portfolio/processed/full/j12-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "stillLife",
    "year": "2024"
  },
  {
    "id": "j13",
    "title": "静物摄影照片13",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/j13-320.webp",
        "jpg": "./portfolio/processed/thumbs/j13-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/j13-640.webp",
        "jpg": "./portfolio/processed/thumbs/j13-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/j13-1200.webp",
        "jpg": "./portfolio/processed/full/j13-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/j13-1600.webp",
        "jpg": "./portfolio/processed/full/j13-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "stillLife",
    "year": "2024"
  },
  {
    "id": "j14",
    "title": "静物摄影照片14",
    "type": "image",
    "thumbnails": [
      {
        "size": 320,
        "webp": "./portfolio/processed/thumbs/j14-320.webp",
        "jpg": "./portfolio/processed/thumbs/j14-320.jpg"
      },
      {
        "size": 640,
        "webp": "./portfolio/processed/thumbs/j14-640.webp",
        "jpg": "./portfolio/processed/thumbs/j14-640.jpg"
      }
    ],
    "fullImages": [
      {
        "size": 1200,
        "webp": "./portfolio/processed/full/j14-1200.webp",
        "jpg": "./portfolio/processed/full/j14-1200.jpg"
      },
      {
        "size": 1600,
        "webp": "./portfolio/processed/full/j14-1600.webp",
        "jpg": "./portfolio/processed/full/j14-1600.jpg"
      }
    ],
    "description": "摄影作品",
    "tags": [
      "摄影"
    ],
    "category": "stillLife",
    "year": "2024"
  }
];

export default processedImageData;
