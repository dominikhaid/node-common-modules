import DefaultImg from 'components/Elements/Images/DefaultImage';
import React from 'react';

interface IFImage {
  src: string;
  style: React.CSSProperties;
  className: string;
}

export default function FloatingImage({
  style,
  src,
  className,
}: IFImage): React.ReactElement {
  const clsLst = className
    ? className + ' overflow-hidden'
    : 'overflow-hidden animate-hvr-bob';

  return (
    <div
      className={clsLst}
      style={{
        width: 'calc(110vw + 100px)',
        zIndex: 25,
        overflow: 'hidden',
        ...style,
      }}
    >
      <DefaultImg width={500} height={500} layout="fill" src={src} />
    </div>
  );
}
