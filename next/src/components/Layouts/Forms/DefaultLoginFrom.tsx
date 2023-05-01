import DefaultButton from 'components/Elements/Buttons/DefaultButton';
import TextDivider from 'components/Elements/Divider/TextDivider';
import {FormFields} from 'components/Elements/FormFields/DefaultLoginFields';
import DrawerHeadline from 'components/Elements/Titles/DrawerHeadline';
import AuthProvider from 'components/Layouts/Auth/AuthListSmall';
import {MessageContext} from 'context/MessageProvider';
import AddUserIcon from 'public/icons/phosphor-icons/assets/duotone/user-circle-plus-duotone.svg';
import React, {useContext, useState} from 'react';
import {setToken} from 'src/hooks/token';
import {loginUserPlain} from 'src/hooks/user';
import {remapErrors, validateFrom} from 'src/hooks/validateFrom';
import RegisterForm from './DefaultRegisterForm';

interface IRender extends ILogin {
  setRender: (e: string) => void;
  user: IUser;
  updateState: (e: IUser) => void;
}

const RenderLogin = ({
  user,
  setRender,
  updateState,
}: IRender): React.ReactElement => {
  const addMessage = useContext(MessageContext);

  async function loginAndValidate() {
    const formData = validateFrom('login');
    remapErrors('login', formData.data);

    if (!formData.state)
      return addMessage({
        content: 'The form could not be submitted, please check your inputs!',
        type: 'error',
      });

    const dataFields: IUser = {};
    const exclude = ['remember'];

    formData.data.forEach(f => {
      exclude.find(e => e === f.name) ? false : (dataFields[f.name] = f.value);
    });

    loginUserPlain(dataFields).then((data: IUser) => {
      if (data?.code) {
        addMessage({content: data.msg || '', type: 'error'});
        return false;
      }

      data.accessToken && setToken(data.accessToken);
      data.accessToken && delete data.accessToken;

      if (document.getElementById('drawer-close'))
        document?.getElementById('drawer-close')?.click();

      addMessage({
        content: `Welcome back ${data.contactFirstName} ${data.contactLastName}`,
        type: 'success',
      });
      updateState({user: data} as IUser);
    });
  }

  return (
    <form name="login">
      <DrawerHeadline title={'Login'} />
      <div className="grid form-grid justify-items-center place-items-start">
        <div
          style={{maxWidth: '500px'}}
          className="flex flex-row flex-wrap h-10 border-2 rounded-md sm:p-xs md:p-lg lg:p-lg xl:p-lg place-content-center justify-self-center place-self-center w-100 border-primary"
        >
          <FormFields {...user} />
          <div className="flex justify-center w-100">
            <DefaultButton
              aria={`login`}
              className="mb-4xl"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                loginAndValidate();
              }}
              title="Login"
              type="secondary"
            />
          </div>
        </div>

        <div
          style={{maxWidth: '500px'}}
          className="flex flex-row flex-wrap border-2 rounded-md p-lg place-content-center justify-self-center place-self-center w-100 h-100 border-primary"
        >
          <TextDivider className="text-center" title={'Sign In  With'} />
          <div className="items-center justify-center spaced flex-warp">
            <DefaultButton
              aria={`register`}
              className="small"
              type="icon"
              style={{
                width: '50px',
                height: '50px',
              }}
              icon={<AddUserIcon />}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                setRender('register');
              }}
            />
            <AuthProvider className="flex-1 ml-lg" updateState={updateState} />
          </div>
        </div>
      </div>
    </form>
  );
};

interface ILogin {
  updateState: (e: IUser) => void;
  user: IUser;
}

export default function LoginForm({
  updateState,
  user,
}: ILogin): React.ReactElement {
  const [renderComponent, setRender] = useState('login');

  if (renderComponent !== 'register')
    return (
      <RenderLogin
        updateState={updateState}
        user={user}
        setRender={setRender}
      />
    );

  return <RegisterForm user={user} updateState={updateState} />;
}
