import DefaultImage from 'components/Elements/Images/DefaultImage';
import React from 'react';

interface ITopLogo {
  id?: string;
  className?: string;
  width: number;
  height: number;
  alt?: string;
  src?: string;
  svg?: JSX.Element;
  layout?: string;
  style?: React.CSSProperties;
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
export default function TopLogo({
  id = 'top-logo',
  className = '',
  width,
  height,
  style = {},
  alt = '',
  svg,
  src,
  layout = 'fixed',
}: ITopLogo): React.ReactElement {
  const classList =
    'relative flex items-center justify-center flex-1 m-auto sm:w-75 md:w-100 lg:w-100 xl:w-100 mb-2xl sm:min-w-75 md:min-w-100 lg:min-w-100 xl:min-w-100 xl:min-w-15 lg:min-w-15 xl:max-w-25';

  return (
    <aside
      id="header-logo"
      style={{...style, height: 'min-contnet'}}
      className={classList}
    >
      <div className={'relative'}>
        <style jsx>
          {`
            #top-logo-filter {
              filter: blur(20px) brightness(0);
              opacity: 0.7;
            }
          `}
        </style>
        <DefaultImage
          id={id}
          className={className}
          svg={svg}
          width={width}
          layout={layout}
          height={height}
          alt={alt}
          src={`${src}`}
        />
      </div>
    </aside>
  );
}
