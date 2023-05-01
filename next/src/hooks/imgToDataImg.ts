async function imgToDataImg(url: string): Promise<string> {
  const img = new Image();
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const height = 200;
  const width = 200;
  canvas.width = width;
  canvas.height = height;

  const newimg = await new Promise((resolve, reject): void => {
    img.onload = function () {
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      ctx?.drawImage(img, 0, 0);

      canvas.toBlob(
        function (res) {
          resolve(res);
        },
        'image/png',
        0.75,
      );
    };
    reject('fdd');
    img.crossOrigin = '';
    img.src = url;
  });

  const dataImg = await new Promise((resolve, reject): void => {
    const a = new FileReader();
    a.onload = function (e) {
      resolve(e?.target?.result as string);
    };
    a.onerror = error => reject(error);
    a.readAsDataURL(newimg as Blob);
  });

  return dataImg as string;
}

export {imgToDataImg};
