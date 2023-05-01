import React from 'react';

interface IDefaultButton {
  id?: string;
  title?: string;
  aria?: string;
  style?: React.CSSProperties;
  type?: string;
  icon?: JSX.Element;
  className?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
}

function DefaultButton({
  id = '',
  aria = '',
  onClick,
  type = 'secondary',
  icon,
  title = '',
  style = {},
  className = '',
  disabled = false,
}: IDefaultButton): React.ReactElement {
  if (!className) className = '';
  if (type === 'ghost') className += ' btn-ghost';
  if (type === 'submit') className += 'btn-primary';
  if (type === 'secondary') className += ' btn-secondary';
  if (type === 'primary') className += ' btn-primary';
  if (type === 'outlined') className += ' btn-outlined';
  if (type === 'icon') className += ' btn-icon';

  return (
    <button
      id={id}
      aria-label={aria}
      onClick={e => onClick(e)}
      style={style}
      className={className}
      disabled={disabled}
    >
      {icon}
      <p className="inline text-lg">{title}</p>
    </button>
  );
}

export default DefaultButton;
