import DefaultH1 from 'components/Elements/Titles/DefaultH1';
import React from 'react';

interface ILogin {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  title?: string;
  icon?: JSX.Element;
}

export default function RenderLogin({
  children,
  title = '',
  icon,
  style = {},
  className = '',
}: ILogin): React.ReactElement {
  className += ' prose m-auto border-2 p-4xl';

  return (
    <div style={style} className={className}>
      <style jsx>{`
        span {
          height: 250px;
          max-width: 250px;
        }
        @media (max-width: 765px) {
          span {
            height: 150px;
            max-width: 150px !important;
          }
        }
      `}</style>
      <DefaultH1 title={title} className="text-center" />
      {icon && <span className="block m-auto p-xs">{icon}</span>}
      <div className="text-center">{children}</div>
    </div>
  );
}
