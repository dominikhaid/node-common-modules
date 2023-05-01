import React from 'react';
import DefaultButton from './DefaultButton';

interface IButton {
  title?: string;
  active: boolean;
  setActive: (state: boolean) => void;
  children: React.ReactNode;
  style: React.CSSProperties;
  layout: string;
  aria?: string;
  type: string;
  icon: JSX.Element;
  className: string;
}

function DropDownButton({
  active,
  setActive,
  aria = '',
  type,
  icon,
  title = '',
  style = {},
  className = '',
  layout,
  children,
}: IButton): React.ReactElement {
  if (type === 'ghost') className += ' btn-ghost';
  if (type === 'submit') className += ' btn-primary';
  if (type === 'secondary') className += ' btn-secondary';
  if (type === 'primary') className += ' btn-primary';
  if (type === 'outlined') className += ' btn-outlined';
  if (icon) className = className ? className + ' btn-icon' : 'btn-icon';

  return (
    <div>
      <button
        onClick={() => setActive(!active)}
        style={style}
        aria-label={aria}
        className={className + ''}
      >
        {icon}
        {title}
      </button>
      {active && (
        <div
          style={{marginTop: '1rem', left: '0', maxWidth: '600px'}}
          className={
            layout === 'grid'
              ? 'btn-drop-down relative z-20 bg-white rounded-lg shadow-container p-xl grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4'
              : 'btn-drop-dow relative z-20 bg-white rounded-lg shadow-container p-xl'
          }
        >
          {children}
          <div className="place-items-end place-content-center spaced">
            <DefaultButton
              aria="close menu"
              title="close"
              type="primary"
              className="small mt-lg"
              onClick={() => setActive(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default DropDownButton;
