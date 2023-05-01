import React from 'react';

interface IH1 {
  style?: React.CSSProperties;
  title: string;
  className?: string;
}

/**
 *
 * @style {Object}  style additional inline style
 * @title {String}  title displayed text
 */
export default function DefaultH1({
  style = {},
  title = '',
  className = '',
}: IH1): React.ReactElement {
  return (
    <h1
      className={`text-4xl font-bold text-primary mt-4xl mb-2xl ` + className}
      style={style}
    >
      {title}
    </h1>
  );
}
