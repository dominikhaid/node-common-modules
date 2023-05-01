import React from 'react';
import MobileSocialMenu from 'components/Elements/Menu/MobileSocialMenu';
interface ISocial {
  contact: IContact;
}

export default function VerticalSocialMenu({
  contact,
}: ISocial): React.ReactElement {
  const socialClsMobile =
    'fixed z-10 p-xs shadow-lg rounded-xl right-xl flex flex-col';

  return (
    <aside id="vertical-social-menu" className={socialClsMobile}>
      <style global jsx>{`
        #vertical-social-menu {
          top: 30vh;
          background-color: var(--transparent-container);
        }
      `}</style>
      <MobileSocialMenu contact={contact} />
    </aside>
  );
}
