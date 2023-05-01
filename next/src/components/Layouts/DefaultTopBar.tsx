import React from 'react';
import DefaultMainMenu from 'components/Elements/Menu/DefaultMainMenu';

interface ITopBar {
  menus: {main: {links: any[]}};
  size: number;
}

export default function DefaultTopBar({menus}: ITopBar): React.ReactElement {
  const asdClsDesk =
    'px-6xl w-full bg-gray-lightest align-center place-items-start place-content-start inline-flex';
  const lftClsDesk =
    'py-xl w-50 align-center place-items-start place-content-start  inline-flex flex-wrap';

  if (!process.browser) return <></>;

  return (
    <>
      <aside style={{height: 'unset'}} className={asdClsDesk}>
        <div className={lftClsDesk}>
          <DefaultMainMenu
            fields={menus.main.links}
            className="flex justify-start flex-1 text-white mt-2xl xl:mt-none px-lg w-100 border-gray-light lg:mt-none"
          />
        </div>
      </aside>
    </>
  );
}
