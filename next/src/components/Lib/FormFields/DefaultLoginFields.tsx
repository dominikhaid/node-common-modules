import MailOutlined from 'public/icons/phosphor-icons/assets/duotone/envelope-duotone.svg';
import LockOutlined from 'public/icons/phosphor-icons/assets/duotone/lock-duotone.svg';
import React from 'react';
import uuid from 'react-uuid';
import DefaultInput from '../Inputs/DefaultInput';
const FormFields = ({email, password}: IUser): React.ReactElement => {
  const data: IInput[] = [
    {
      name: 'email',
      type: 'email',
      aria: 'user email',
      prefix: <MailOutlined />,
      placeholder: 'E-Mail',
      defaultValue: email,
      required: true,
    },
    {
      name: 'password',
      required: true,
      aria: 'user password',
      type: 'password',
      prefix: <LockOutlined />,
      placeholder: 'Password',
      defaultValue: password,
    },
    {
      aria: 'Keep me signed in',
      name: 'remember',
      type: 'checkbox',
      label: 'Keep me signed in',
    },
  ];

  const fields = data.map(field => {
    return <DefaultInput key={uuid()} {...field} />;
  });

  return <>{fields}</>;
};

export {FormFields};
