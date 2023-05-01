async function fileToDataImg(dataImg: File): Promise<string> {
  const convertImg = (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  };

  const file = await convertImg(dataImg);
  return file as string;
}

export {fileToDataImg};
