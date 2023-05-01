import WindowClose from 'components/Elements/Buttons/WindowClose';
import React from 'react';
import {addClassToBody} from 'src/lib/site';

interface WindowProps {
  visible?: boolean;
  windowTitle: string;
  onClose: () => void;
  children: React.ReactNode;
}

/**
 * @desc Window Componenten renders children
 * @returns react component
 */
const DefaultWindow = ({
  windowTitle = 'Home',
  visible = false,
  onClose,
  children,
}: WindowProps): React.ReactElement => {
  if (!visible) return <></>;

  return (
    <section className="absolute top-0 left-0 z-20 w-full overflow-y-scroll bg-white">
      <aside className="grid text-center bg-primary w-100">
        <h4 className="text-lg text-white py-sm mb-none">
          {process.browser &&
            window &&
            addClassToBody({
              path: window.location.pathname.replace(
                /\/[\w\d/]*?([\d\w]*)$/,
                '$1',
              ),
              windowTitle: windowTitle,
            })}
        </h4>
        <WindowClose
          style={{maxWidth: '35px', alignSelf: 'center'}}
          onClose={() => onClose()}
        />
      </aside>
      <article className="min-h-full w-100">{children}</article>
    </section>
  );
};

export default DefaultWindow;
