import ListIcon from 'public/icons/phosphor-icons/assets/duotone/list-duotone.svg';
import React from 'react';
import DefaultButton from './DefaultButton';

interface IMenu {
  onClick: () => void;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * @desc Mobile Menu Button
 * @returns react component
 */
export default function MobileMenu({
  onClick,
  style = {},
  className = '',
}: IMenu): React.ReactElement {
  className += ' absolute bottom-0 left-0 border-none btn-close p-xs';

  return (
    <DefaultButton
      aria={`close menu`}
      className={className}
      onClick={() => {
        onClick();
      }}
      style={{...style, maxWidth: '45px', zIndex: 99}}
      icon={<ListIcon className="fill-current text-secondary" />}
      type="icon"
    />
  );
}
