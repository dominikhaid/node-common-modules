import DefaultButton from 'components/Elements/Buttons/DefaultButton';
import {useRouter} from 'next/router';
import FacebookFilled from 'public/icons/logos/logos/facebook.svg';
import GoogleSquareFilled from 'public/icons/logos/logos/google-icon.svg';
import React from 'react';
import {setToken} from 'src/hooks/token';
interface IAuth {
  className: string;
  updateState: (e: IUser) => void;
}

interface IProvider {
  title: string;
  aria: string;
  icon: JSX.Element;
  link: string;
  onClick: (e: React.MouseEvent) => void;
}

export default function AuthProvider({
  className = '',
  updateState,
}: IAuth): React.ReactElement {
  const router = useRouter();

  const handelAuth = () => {
    const getAuthUser = (event: MessageEvent) => {
      const params = new URLSearchParams(event.data);
      const user = {};

      params.forEach(function (value, key) {
        if (key === 'accessToken') {
          setToken(value);
        } else if (value === 'true' || value === 'false') {
          user[key] = Boolean(value === 'true' ? 1 : 0);
        } else if (value === '0' || value === '1') {
          user[key] = Number(value);
        } else {
          user[key] = value;
        }
      });

      window.removeEventListener('message', getAuthUser, false);
      updateState({user: user} as IUser);
      if (document.getElementById('drawer-close'))
        document?.getElementById('drawer-close')?.click();
      router.push(`${process.env.NEXT_PUBLIC_HOST}/auth/register`);
    };

    window.addEventListener(
      'message',
      event => {
        if (new RegExp('email').test(event.data)) getAuthUser(event);
      },
      false,
    );
  };

  const data: IProvider[] = [
    {
      title: 'Google',
      aria: 'Sign in with google',
      icon: <GoogleSquareFilled />,
      link: '/auth/google',
      onClick: e => {
        e.preventDefault();

        window.open(
          `${process.env.NEXT_PUBLIC_HOST}/auth/google`,
          '_blank',
          'toolbar=no,scrollbars=yes,resizable=yes,top=500,left=500,width=545,height=700',
        );
        handelAuth();
      },
    },
    {
      title: 'Facebook',
      aria: 'Sign in with facebook',
      icon: <FacebookFilled />,
      link: `/auth/facebook`,
      onClick: e => {
        e.preventDefault();

        window.open(
          `${process.env.NEXT_PUBLIC_HOST}/auth/facebook`,
          '_blank',
          'toolbar=no,scrollbars=yes,resizable=yes,top=500,left=500,width=545,height=700',
        );
        handelAuth();
      },
    },
  ];

  const elements = data.map(
    (item: {
      title: string;
      onClick: (e: React.MouseEvent) => void;
      icon: JSX.Element;
    }) => {
      return (
        <DefaultButton
          key={item.title}
          className={className + ' small'}
          style={{
            width: '50px',
            height: '50px',
            backgroundColor: item.title === 'Facebook' ? '#395185' : 'inerhit',
          }}
          onClick={(e: React.MouseEvent) => item.onClick(e)}
          type="icon"
          icon={item.icon}
        />
      );
    },
  );

  return <>{elements}</>;
}
