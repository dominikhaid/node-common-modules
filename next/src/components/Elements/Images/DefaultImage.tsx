import Image from 'next/image';
import React from 'react';

const myLoader = ({src, width, quality}: any): string => {
  if (/^http./.test(src)) return `${src}`;
  let url = `${process.env.NEXT_PUBLIC_HOST}/${src.replace(/^\//, '')}`;

  //NOTE SERVER OPTIMIZED IMAGES IN PRDUCTION MODE
  if (process.env.NODE_ENV === 'production')
    url = url.replace(/(.jpg)$|(.png)$/, `_${width}_${quality || 75}$1`);
  return url;
};

interface IImage {
  id?: string;
  className?: string;
  width: number;
  height: number;
  alt?: string;
  src: string;
  layout?: any;
  svg?: JSX.Element;
  cache?: boolean;
}

/**
 *
 * @width {String} width for Next Image
 * @height {String} height for Next Image
 * @style {Object} style additional inline style
 * @alt {String} alt text
 * @src {String} img src
 * @layout {String} image fill mode
 */
export default function DefaultImage({
  id = '',
  className = '',
  width,
  height,
  alt = '',
  src = '',
  svg,
  layout = 'fixed',
  cache = false,
}: IImage): React.ReactElement {
  if (typeof svg === 'object') return svg;

  if (/^data:image/.test(src))
    return (
      <img
        id={id}
        className={className}
        width={width}
        height={height}
        alt={alt}
        src={src}
      />
    );

  if (cache === false)
    return (
      <img
        id={id}
        className={className}
        width={width}
        height={height}
        alt={alt}
        src={`${
          /^http/.test(src) ? '' : process.env.NEXT_PUBLIC_HOST + '/'
        }${src.replace(/^\//, '')}`}
      />
    );

  return (
    <>
      <Image
        id={id}
        className={className}
        width={width}
        loader={myLoader}
        layout={layout}
        height={height}
        alt={alt}
        src={`${src}`}
      />
    </>
  );
}
