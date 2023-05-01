import CloseIcon from 'public/icons/phosphor-icons/assets/duotone/x-duotone.svg';
import React from 'react';
import DefaultButton from './DefaultButton';

interface IClose {
  onClose: (event: React.SyntheticEvent) => void;
  style: React.CSSProperties;
}

/**
 * @desc Close Button
 * @returns react component
 */
export default function WindowClose({
  onClose,
  style,
}: IClose): React.ReactElement {
  return (
    <DefaultButton
      aria={`close menu`}
      className={
        'absolute right-xl border-none btn-close p-xs rounded-full fill-current bg-white text-primary'
      }
      onClick={e => {
        onClose(e);
      }}
      style={style}
      icon={<CloseIcon className="fill-current text-secondary" />}
    />
  );
}
