import * as CSS from 'csstype';
import TelegramIcon from 'public/icons/phosphor-icons/assets/fill/chat-circle-text-fill-light.svg';
import React from 'react';
import DefaultButton from './DefaultButton';

interface ISocial {
  onClick: (event: React.MouseEvent) => void;
  className?: string;
  style?: React.CSSProperties;
}

const style_button: CSS.Properties = {
  width: '110px',
  zIndex: 99,
  marginLeft: '-25px',
  marginTop: '-12px',
  color: 'inherit',
};

const style_svg: CSS.Properties = {
  position: 'relative',
  right: '-5px',
};

/**
 * @desc Mobile Menu Button
 * @returns react component
 */
export default function MobileSocial({
  onClick,
  style = {},
  className = '',
}: ISocial): React.ReactElement {
  className += ' p-sm rounded-full absolute top-0 left-0';

  return (
    <DefaultButton
      aria={`close menu`}
      className={className}
      onClick={e => {
        onClick(e);
      }}
      style={{...style, ...style_button}}
      icon={
        <TelegramIcon style={{...style_svg}} className="fill-current m-2xl" />
      }
    />
  );
}
