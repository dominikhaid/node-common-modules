import CloseIcon from 'public/icons/phosphor-icons/assets/duotone/x-duotone.svg';
import React from 'react';
import DefaultButton from './DefaultButton';

interface IClose {
  onClose: (event: React.SyntheticEvent) => void;
  className: string;
  style: React.CSSProperties;
}

/**
 * @desc Close Button
 * @returns react component
 */
export default function CloseButton({
  onClose,
  style,
  className,
}: IClose): React.ReactElement {
  return (
    <DefaultButton
      aria={`close menu`}
      className={
        className
          ? className + ' border-none btn-close p-xs'
          : 'border-none btn-close p-xs'
      }
      onClick={e => {
        onClose(e);
      }}
      style={style}
      icon={<CloseIcon className="fill-current text-secondary" />}
      type="icon"
    />
  );
}
