import MobileSocialMenu from 'components/Elements/Menu/MobileSocialMenu';
import React from 'react';
interface ISocial {
  contact: IContact;
}

export default function DefaultSocialMenu({
  contact,
}: ISocial): React.ReactElement {
  const socialClsMobile =
    'align-center place-items-end place-content-end w-50 inline-flex flex-wrap';

  return (
    <aside className={socialClsMobile}>
      <MobileSocialMenu contact={contact} />
    </aside>
  );
}
