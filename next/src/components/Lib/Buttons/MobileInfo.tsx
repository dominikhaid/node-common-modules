import * as CSS from 'csstype';
import InfoIcon from 'public/icons/phosphor-icons/assets/fill/info-fill-light.svg';
import React from 'react';
import DefaultButton from './DefaultButton';

interface IInfo {
  onClick: (event: React.MouseEvent) => void;
  className?: string;
  style?: React.CSSProperties;
}

const style_svg: CSS.Properties = {
  position: 'relative',
  left: '-5px',
};

const style_button: CSS.Properties = {
  width: '110px',
  zIndex: 99,
  marginRight: '-25px',
  marginTop: '-12px',
  color: 'inherit',
  position: 'relative',
  left: '-5px',
};

/**
 * @desc Mobile Info Button
 * @returns react component
 */
export default function MobileInfo({
  onClick,
  style = {},
  className = '',
}: IInfo): React.ReactElement {
  className += ' p-sm rounded-full text-primary absolute top-0 right-0';

  return (
    <DefaultButton
      aria={`close menu`}
      className={className}
      onClick={e => {
        onClick(e);
      }}
      style={{...style, ...style_button}}
      icon={<InfoIcon style={{...style_svg}} className="fill-current m-2xl" />}
    />
  );
}
