import React from 'react';

interface IDH {
  style?: React.CSSProperties;
  title: string;
  className?: string;
}

/**
 *
 * @style {Object}  style additional inline style
 * @title {String}  title displayed text
 */
export default function DrawerHeadline({
  style = {},
  title = '',
  className = '',
}: IDH): React.ReactElement {
  return (
    <h2
      className={`text-4xl font-bold text-primary mt-4xl mb-2xl ` + className}
      style={style}
    >
      {title}
    </h2>
  );
}
