import DefaultButton from 'components/Elements/Buttons/DefaultButton';
import {useRouter} from 'next/router';
import WhatsAppIcon from 'public/icons/logos/logos/whatsapp.svg';
import MailUsIcon from 'public/icons/phosphor-icons/assets/duotone/envelope-duotone.svg';
import WriteUsIcon from 'public/icons/phosphor-icons/assets/duotone/note-pencil-duotone.svg';
import CallUsIcon from 'public/icons/phosphor-icons/assets/duotone/phone-call-duotone.svg';
import React from 'react';
import iconStyles from './defaultShopMenu.module.css';

interface IShop {
  contact: {mobile: string; email: string};
  size: number;
}

export default function DefaultShopMenu({contact}: IShop): React.ReactElement {
  const router = useRouter();

  return (
    <div className="justify-start spaced lg:justify-end xl:justify-end md:min-w-100 xs:min-w-100 lg:min-w-50 xl:min-w-50">
      <DefaultButton
        aria={`whats app`}
        className="small"
        style={{width: '45px', height: '45px'}}
        icon={
          <WhatsAppIcon className={iconStyles.whatsapp} id="whats-app-icon" />
        }
        onClick={() =>
          window.open(
            `https://wa.me/${contact.mobile.replace(/(\+)|(-)/gim, '')}`,
            '_blank',
          )
        }
      />
      <DefaultButton
        aria={`kontakt formular`}
        className="small"
        style={{width: '45px', height: '45px'}}
        icon={
          <WriteUsIcon id="kontakt-icon" className={iconStyles.secondary} />
        }
        onClick={() => router.push('/kontakt')}
      />
      <DefaultButton
        aria={`call us`}
        className="small"
        style={{width: '45px', height: '45px'}}
        icon={<CallUsIcon className={iconStyles.duotone} id="call-us-icon" />}
        onClick={() => window.open(`tel:${contact.mobile}`, '_blank')}
      />
      <DefaultButton
        aria={`mail us`}
        className="small"
        style={{width: '45px', height: '45px'}}
        icon={<MailUsIcon className={iconStyles.duotone} id="mail-us-icon" />}
        onClick={() => window.open(`mailto:${contact.email}`, '_blank')}
      />
    </div>
  );
}
