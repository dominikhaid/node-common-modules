import React from 'react';
import VerticalLinkBlock from 'components/Elements/Lists/VerticalLinkBlock';
import DefaultCopyright from 'components/Elements/Text/DefaultCopyright';
interface IFooter {
  children?: React.ReactElement;
  contact: IContact;
  menus: IMainNav;
}

export default function DefaultFooter({
  contact,
  children,
  menus,
}: IFooter): React.ReactElement {
  const classList =
    'w-full border-t-8 border-primary text-white sm:p-lg md:p-xl xl:p-lg lg:p-lg bg-secondary';

  return (
    <>
      <footer className={classList}>
        {children}
        <div
          style={{maxWidth: 'max-content'}}
          className="grid grid-cols-2 gap-8 m-auto my-xl place-content-cetner"
        >
          <VerticalLinkBlock group={menus.main} />
          <VerticalLinkBlock group={menus.legals} />
        </div>
        <DefaultCopyright contact={contact} style={{textAlign: 'center'}} />
      </footer>
    </>
  );
}
