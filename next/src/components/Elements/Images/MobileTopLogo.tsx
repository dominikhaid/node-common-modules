import DefaultImage from 'components/Elements/Images/DefaultImage';
import React from 'react';
interface IMTopLogo {
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
export default function MobileTopLogo({
  id = 'top-logo',
  className = '',
  width,
  height,
  style = {},
  alt = '',
  svg,
  src = '',
  layout,
}: IMTopLogo): React.ReactElement {
  const classList = '';

  return (
    <aside
      id="header-logo"
      style={{...style, height: '80px'}}
      className={classList}
    >
      <div className={'flex justify-center relative'}>
        <DefaultImage
          id={id}
          className={className}
          height={height}
          width={width}
          svg={svg}
          layout={layout}
          alt={alt}
          src={`${src}`}
        />
      </div>
    </aside>
  );
}
