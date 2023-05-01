import MailIcon from 'public/icons/phosphor-icons/assets/duotone/envelope-duotone.svg';
import GlobeIcon from 'public/icons/phosphor-icons/assets/duotone/globe-stand-duotone.svg';
import HomeIcon from 'public/icons/phosphor-icons/assets/duotone/house-line-duotone.svg';
import LockIcon from 'public/icons/phosphor-icons/assets/duotone/lock-duotone.svg';
import PinIcon from 'public/icons/phosphor-icons/assets/duotone/map-pin-duotone.svg';
import MapFoldIcon from 'public/icons/phosphor-icons/assets/duotone/map-trifold-duotone.svg';
import PhooneIcon from 'public/icons/phosphor-icons/assets/duotone/phone-duotone.svg';
import UserIcon from 'public/icons/phosphor-icons/assets/duotone/user-circle-duotone.svg';
import React, {useEffect} from 'react';
import uuid from 'react-uuid';
import DefaultInput from '../Inputs/DefaultInput';
interface IUserField {
  user: IUser;
  resetForm: boolean;
  setResetForm: (arg: boolean) => void;
}

const FormFieldsUser = ({
  resetForm,
  setResetForm,
  user,
}: IUserField): React.ReactElement => {
  useEffect(() => {
    const reset = () => {
      setResetForm(false);
    };

    if (resetForm) reset();
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return () => {};
  }, [resetForm, setResetForm]);

  const data: IInput[] = [
    {
      name: 'userName',
      aria: 'user name',
      type: 'text',
      prefix: <UserIcon />,
      placeholder: 'User Name',
      defaultValue: user && user.userName ? user.userName : '',
      required: true,

      rules: [
        {
          type: 'text',
          required: true,
        },
      ],
    },
  ];

  const fields = data.map(field => {
    return <DefaultInput key={uuid()} {...field} />;
  });
  return <>{fields}</>;
};

const FormFieldsPassowrdUpdate = ({
  resetForm,
  setResetForm,
  user,
}: IUserField): React.ReactElement => {
  useEffect(() => {
    const reset = () => {
      setResetForm(false);
    };

    if (resetForm) reset();
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return () => {};
  }, [resetForm, setResetForm]);

  const data: IInput[] = [
    {
      name: 'old_password',
      aria: 'input your old password',
      type: 'password',
      prefix: <LockIcon />,
      placeholder: 'Old Password',
      defaultValue: user && user.password ? user.password : '',
      required: true,
    },
    {
      name: 'password',
      aria: 'input your new password',
      type: 'password',
      required: true,
      prefix: <LockIcon />,
      placeholder: 'New Password',
      defaultValue: user && user.password ? user.password : '',
    },
    {
      name: 'password_repeat',
      aria: 'repeat your password',
      type: 'password',
      required: true,
      prefix: <LockIcon />,
      placeholder: 'Confirm Password',
      defaultValue: user && user.password ? user.password : '',
    },
  ];

  const fields = data.map(field => {
    return <DefaultInput key={uuid()} {...field} />;
  });
  return <>{...fields}</>;
};

const FormFieldsPassowrd = ({
  resetForm,
  setResetForm,
  user,
}: IUserField): React.ReactElement => {
  useEffect(() => {
    const reset = () => {
      setResetForm(false);
    };

    if (resetForm) reset();
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return () => {};
  }, [resetForm, setResetForm]);

  const data: IInput[] = [
    {
      name: 'password',
      aria: 'input your password',
      type: 'password',
      required: true,
      prefix: <LockIcon />,
      placeholder: 'New Password',
      defaultValue: user?.password ? user.password : '',
    },
    {
      name: 'password_repeat',
      aria: 'reapet your password',
      type: 'password',
      required: true,
      prefix: <LockIcon />,
      placeholder: 'Confirm Password',
      defaultValue: user?.password ? user.password : '',
    },
  ];

  const fields = data.map(field => {
    return <DefaultInput key={uuid()} {...field} />;
  });
  return <>{...fields}</>;
};

const FormFieldsContact = ({
  resetForm,
  setResetForm,
  user,
}: IUserField): React.ReactElement => {
  useEffect(() => {
    const reset = () => {
      setResetForm(false);
    };

    if (resetForm) reset();
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return () => {};
  }, [resetForm, setResetForm]);

  const data: IInput[] = [
    {
      name: 'contactFirstName',
      aria: 'input your first name',
      prefix: <UserIcon />,
      type: 'text',
      placeholder: 'First Name',
      required: true,
      defaultValue: user?.contactFirstName ? user.contactFirstName : '',
    },
    {
      name: 'contactLastName',
      aria: 'input your last name',
      prefix: <UserIcon />,
      type: 'text',
      placeholder: 'Last Name',
      required: true,
      defaultValue: user?.contactLastName ? user.contactLastName : '',
    },
    {
      name: 'email',
      aria: 'input your email',
      prefix: <MailIcon />,
      placeholder: 'E-Mail',
      required: true,
      type: 'email',
      remember: true,
      defaultValue: user?.email ? user.email : '',
    },
    {
      name: 'phone',
      aria: 'input your phone number',
      prefix: <PhooneIcon />,
      placeholder: 'Phone',
      type: 'tel',
      defaultValue: user?.phone ? user.phone : '',
    },
  ];

  const fields = data.map(field => {
    return <DefaultInput key={uuid()} {...field} />;
  });
  return <>{fields}</>;
};

const FormFieldsAddress = ({
  resetForm,
  setResetForm,
  user,
}: IUserField): React.ReactElement => {
  useEffect(() => {
    const reset = () => {
      setResetForm(false);
    };

    if (resetForm) reset();
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return () => {};
  }, [resetForm, setResetForm]);

  const data: IInput[] = [
    {
      name: 'addressLine1',
      aria: 'input your first address line',
      prefix: <PinIcon />,
      placeholder: 'Address One',
      defaultValue: user?.addressLine1 ? user.addressLine1 : '',
      type: 'text',
      required: true,
    },
    {
      name: 'addressLine2',
      aria: 'input your second address line',
      prefix: <PinIcon />,
      type: 'text',
      placeholder: 'Address Two',
      defaultValue: user?.addressLine2 ? user.addressLine2 : '',
    },
    {
      name: 'city',
      aria: 'enter your city name',
      prefix: <HomeIcon />,
      placeholder: 'City',
      type: 'text',
      required: true,
      defaultValue: user?.city ? user.city : '',
    },
    {
      name: 'state',
      aria: 'input your state',
      prefix: <MapFoldIcon />,
      placeholder: 'State',
      required: true,
      type: 'text',
      defaultValue: user?.state ? user.state : '',
    },
    {
      name: 'postalCode',
      aria: 'input your postal code',
      prefix: <MapFoldIcon />,
      placeholder: 'Postal Code',
      required: true,
      type: 'text',
      defaultValue: user?.postalCode ? user.postalCode : '',
    },
    {
      name: 'country',
      aria: 'input your country',
      prefix: <GlobeIcon />,
      placeholder: 'Country',
      required: true,
      type: 'text',
      defaultValue: user?.country ? user.country : '',
    },
  ];

  const fields = data.map(field => {
    return <DefaultInput key={uuid()} {...field} />;
  });
  return <>{...fields}</>;
};

export {
  FormFieldsUser,
  FormFieldsContact,
  FormFieldsAddress,
  FormFieldsPassowrd,
  FormFieldsPassowrdUpdate,
};
