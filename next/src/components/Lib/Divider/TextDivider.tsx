import React from 'react';
interface IDiv {
  title: string;
  className?: string;
  style?: React.CSSProperties;
  icon?: React.ReactSVGElement;
}

function TextDivider({
  title,
  icon,
  className = '',
  style = {},
}: IDiv): React.ReactElement {
  className += ' relative font-bold divider';

  return (
    <p style={style} className={className}>
      <style jsx>{`
        .divider {
          display: flex;
          margin: 16px 0;
          white-space: nowrap;
          text-align: center;
          border-top: 0;
          border-top-color: currentcolor;
          border-top-color: rgba(0, 0, 0, 0.06);
        }
        .divider:after {
          position: absolute;
          top: 50%;
          width: 50%;
          right: 0%;
          border-top: 1px solid transparent;
          border-top-color: transparent;
          border-top-color: inherit;
          border-bottom: 0;
          transform: translateY(50%);
          content: '';
        }

        .divider:before {
          position: absolute;
          top: 50%;
          width: 50%;
          left: 0%;
          border-top: 1px solid transparent;
          border-top-color: transparent;
          border-top-color: inherit;
          border-bottom: 0;
          transform: translateY(50%);
          content: '';
        }
      `}</style>
      {icon && <span className="m-xs">{icon}</span>}
      <span className="mx-auto">{title}</span>
    </p>
  );
}

export default TextDivider;
