import DefaultButton from 'components/Elements/Buttons/DefaultButton';
import CloseIcon from 'public/icons/phosphor-icons/assets/duotone/x-duotone.svg';
import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';

interface IDrawer {
  visible?: boolean;
  children?: React.ReactElement;
  onClose: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  style?: React.CSSProperties;
  dimmable?: boolean;
}

interface IClose {
  onClose: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const CloseButton = ({onClose}: IClose) => {
  return (
    <DefaultButton
      aria={`close menu`}
      id="drawer-close"
      onClick={e => onClose(e)}
      className="absolute border-none p-xs"
      style={{width: '40px', height: '40px', top: '20px', right: '20px'}}
      icon={<CloseIcon className="fill-current text-secondary" />}
      type="icon"
    />
  );
};

/**
 *@desc NOTE Default Drawer / Sidebar
 *@visible {Boolen} component visible true /false
 *@children {Function} children to render inside the drawer
 */
export default function DefaultDrawer({
  className = '',
  style = {},
  dimmable = true,
  children,
  visible = false,
  onClose,
}: IDrawer): React.ReactElement {
  useEffect(() => {
    if (!visible) return;
    const dimmer = document?.querySelector('.dimmer') as HTMLButtonElement;
    const clickToClose = e => {
      onClose(e);
    };

    //FIXME IMPORTANT FIX THE TYPE OF ANY HERE
    dimmer &&
      dimmer.addEventListener<any>('click', (e: any) => {
        onClose(e);
      });

    return () => {
      if (dimmer) dimmer.removeEventListener('click', clickToClose);
    };
  }, [visible, onClose]);

  if (!visible || !process.browser) return <></>;
  if (dimmable) className += ' dimmed';

  let drawerContainer = document?.getElementById('drawer-root');
  if (!drawerContainer) drawerContainer = document?.createElement('DIV');
  drawerContainer?.setAttribute('id', 'drawer-root');

  const container = document?.querySelector('body');
  container?.appendChild(drawerContainer);

  const drawer = () => {
    return (
      <>
        <style jsx>{`
          .app-drawer.dimmed + .dimmer {
            width: 100vw;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            position: absolute;
            top: 0;
            left: 0;
            z-index: 40;
          }
          .app-drawer {
            min-width: 400px;
            max-width: 400px;
          }

          @media (max-width: 765px) {
            .app-drawer {
              min-width: 100%;
              max-width: 100%;
            }
          }
        `}</style>
        <aside
          style={style}
          className={
            'animate-drawer overflow-x-hidden overflow-y-scroll absolute z-50 bg-white h-100 sm:p-lg md:p-lg lg:p-2xl xl:p-4xl app-drawer app-drawer ' +
            className
          }
        >
          <CloseButton onClose={onClose} />
          {children}
        </aside>
        <div className="dimmer"></div>
      </>
    );
  };

  return ReactDOM.createPortal(drawer(), drawerContainer);
}
