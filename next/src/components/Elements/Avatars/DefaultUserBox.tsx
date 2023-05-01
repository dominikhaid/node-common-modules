import Image from 'components/Elements/Images/DefaultImage';
import UserOutlined from 'public/icons/phosphor-icons/assets/duotone/user-circle-duotone.svg';
import React from 'react';

interface IUser {
  content: string;
  className: string;
  title: string;
  alt: string;
  src: string;
  size: number;
  link: string;
  style: React.CSSProperties;
  children: React.ReactChildren;
}

export default function DefaultUserBox({
  content = '',
  title = '',
  src = '',
  size = 50,
  link = '/',
  style,
  className = '',
  alt = '',
}: IUser): React.ReactElement {
  const displaylink = link ? link.replace(/https:\/\/|http:\/\//g, '') : '';

  const minWidth = '280px',
    maxWidth = '450px';
  className +=
    ' flex justify-start mx-auto border-2 w-100 shadow-container border-gray my-4xl p-xl';

  return (
    <div
      style={{...style, maxWidth: `${maxWidth}`, minWidth: `${minWidth}`}}
      className={className}
    >
      <div
        style={{
          minWidth: size,
          minHeight: size,
          maxWidth: size,
          maxHeight: size,
        }}
        className="overflow-hidden rounded-full mr-lg"
      >
        {src ? (
          <Image width={size} height={size} alt={alt} src={src} />
        ) : (
          <UserOutlined width={size} height={size} />
        )}
      </div>
      <div className="flex-auto prose">
        <h3>{title}</h3>
        <p>{content}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {displaylink}
        </a>
      </div>
    </div>
  );
}
