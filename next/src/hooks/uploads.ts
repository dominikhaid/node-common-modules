interface IImagePath {
  folder?: string;
  customerNumber?: string;
  customerPhoto?: string;
}

const createUserImgPath = ({
  folder,
  customerNumber = 'dfhfgbf',
  customerPhoto = 'fhgjgfhdnjhgfnmfjhg',
}: IImagePath): string => {
  if (/^http./gi.test(customerPhoto)) return customerPhoto;
  if (/^data:image/gi.test(customerPhoto)) return customerPhoto;
  const basePath = '/uploads/user/';
  if (!folder) return `${basePath}${customerNumber}/${customerPhoto}`;
  return `${basePath}${customerNumber}`;
};

export {createUserImgPath};
