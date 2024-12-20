const PngType = 'image/png';
const PngDataURLHeadLength = `data:${PngType};base64,`.length;

export const BlankImageData =
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUGFdjYAACAAAFAAGq1chRAAAAAElFTkSuQmCC';

// 从文件载入图片
// 图片宽高超出给定尺寸的，等比例缩小
export function loadImageFromFile(file, maxSize) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener('load', () => {
      const image = new Image();
      image.src = reader.result;
      image.addEventListener('load', () => {
        if (image.dataset.data) {
          return resolve(image);
        }

        let width = image.width;
        let height = image.height;

        if (image.width > size.width || image.height > size.height) {
          width = size.width;
          height = size.height;

          const sw = image.width / size.width;
          const sh = image.height / size.height;
          if (sw > sh) {
            height = image.height / sw;
          } else {
            width = image.width / sh;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0, width, height);

        const dataUrl = canvas.toDataURL(PngType);
        if (dataUrl === 'data:,') {
          return resolve(null);
        }
        image.dataset.data = dataUrl.slice(PngDataURLHeadLength);
        image.src = dataUrl;
      });
    });
  });
}

// 从项目资源载入图片
export function loadImageFromAsset(asset) {
  return new Promise((resolve) => {
    const image = new Image();
    const dataUrlHead = `data:${asset.type};base64,`;
    image.src = `${dataUrlHead}${asset.data}`;
    image.addEventListener('load', () => {
      image.dataset.data = image.src.slice(dataUrlHead.length);
      resolve(image);
    });
  });
}

// 从 URL 在图片
// 通常是从 Library 载入图片
export function loadImageFromURL(url) {
  return new Promise((resolve) => {
    const image = new Image();
    image.src = url;
    image.addEventListener('load', () => {
      const canvas = document.createElement('canvas');
      canvas.width = image.width;
      canvas.height = image.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(image, 0, 0, image.width, image.height);
      const dataUrl = canvas.toDataURL(PngType);
      image.dataset.data = dataUrl.slice(PngDataURLHeadLength);
      resolve(image);
    });
  });
}
