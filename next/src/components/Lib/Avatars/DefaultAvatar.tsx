import DeafaultImage from 'components/Elements/Images/DefaultImage';
import UserOutlined from 'public/icons/phosphor-icons/assets/duotone/user-circle-duotone.svg';
import React from 'react';

interface IAvatar {
  src: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
  size?: number;
}

export default function DefaultAvatar({
  className = '',
  alt = '',
  style = {},
  src = '',
  size = 50,
}: IAvatar): React.ReactElement {
  className +=
    ' overflow-hidden rounded-full p-none small hover:animate-hvr-icon-push';

  return (
    <div
      style={{...style, width: size ? size : 45, height: size ? size : 45}}
      className={className}
    >
      {src && (
        <DeafaultImage
          src={`${src}`}
          alt={alt}
          cache={false}
          width={size}
          height={size}
        />
      )}
      {!src && <UserOutlined />}
    </div>
  );
}
