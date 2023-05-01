import DefaultButton from 'components/Elements/Buttons/DefaultButton';
import TextDivider from 'components/Elements/Divider/TextDivider';
import DefaultDragger from 'components/Elements/Dragger/DefaultDragger';
import {
  FormFieldsAddress,
  FormFieldsContact,
  FormFieldsPassowrd,
  FormFieldsUser,
} from 'components/Elements/FormFields/DefaultProfilFields';
import DrawerHeadline from 'components/Elements/Titles/DrawerHeadline';
import {MessageContext} from 'context/MessageProvider';
import React, {useContext, useState} from 'react';
import {imgToDataImg} from 'src/hooks/imgToDataImg';
import {setToken} from 'src/hooks/token';
import {createUser} from 'src/hooks/user';
import {remapErrors, validateFrom} from 'src/hooks/validateFrom';
interface IRegisterFrom {
  user: IUser;
  updateState: (e: IUser) => void;
}

export default function DefaultRegisterForm({
  user,
  updateState,
}: IRegisterFrom): React.ReactElement {
  const addMessage = useContext(MessageContext);
  const [resetForm, setResetForm] = useState(false);

  async function registerUser() {
    const formData = validateFrom('register');

    remapErrors('register', formData.data);

    if (!formData.state)
      return addMessage({
        content: 'The form could not be submitted, please check your inputs!',
        type: 'error',
      });

    const dataFields: IUser = {};
    formData.data.forEach(e => (dataFields[e.name] = e.value));

    if (
      dataFields.customerPhoto &&
      !/^data:image/.test(dataFields.customerPhoto)
    )
      dataFields.customerPhoto = await imgToDataImg(dataFields.customerPhoto);

    createUser(dataFields)
      .then(data => {
        if (data?.code) {
          addMessage({
            content: data?.errors
              ? data?.errors.map((msg: string) => msg + '\n').join()
              : data?.msg || '',
            type: 'error',
          });
          return;
        }

        data.accessToken && setToken(data.accessToken);
        data.accessToken && delete data.accessToken;

        addMessage({
          content: `Welcome on board ${
            data.contactFirstName ? data.contactFirstName : ''
          }!`,
          type: 'success',
        });

        updateState({user: data} as IUser);

        if (document?.getElementById('drawer-close'))
          document?.getElementById('drawer-close')?.click();

        return true;
      })
      .catch(error => {
        addMessage({
          content: error.msg.errors
            ? error.msg.errors.map((e: {message: string}) => e.message)
            : error.msg,
          type: 'error',
        });
        return false;
      });
  }

  return (
    <form name="register">
      <div className="place-content-end mb-xl place-items-end spaced">
        <DrawerHeadline
          style={{marginBottom: '0', width: '100%', textAlign: 'center'}}
          title="Register"
        />
      </div>
      <div className="grid form-grid justify-items-center place-items-start">
        <div
          style={{maxWidth: '500px'}}
          className="flex flex-row flex-wrap rounded-md sm:p-xs md:p-lg lg:p-lg xl:p-lg place-content-center justify-self-center place-self-center w-100 h-100 bg-gray-light"
        >
          <DefaultDragger {...user} />
        </div>
        <div
          style={{maxWidth: '500px', width: '100%'}}
          className="border-2 rounded-md border-primary sm:p-xs md:p-lg lg:p-lg xl:p-lg"
        >
          <TextDivider title="User Info" className="text-xl text-secondary" />
          <FormFieldsUser
            resetForm={resetForm}
            setResetForm={setResetForm}
            user={user}
          />
          <FormFieldsPassowrd
            resetForm={resetForm}
            setResetForm={setResetForm}
            user={user}
          />
        </div>
        <div
          style={{maxWidth: '500px', width: '100%', height: '100%'}}
          className="border-2 rounded-md border-primary sm:p-xs md:p-lg lg:p-lg xl:p-lg"
        >
          <TextDivider
            title="Contact Info"
            className="text-xl text-secondary"
          />
          <FormFieldsContact
            resetForm={resetForm}
            setResetForm={setResetForm}
            user={user}
          />
        </div>
        <div
          style={{maxWidth: '500px', width: '100%'}}
          className="border-2 rounded-md border-primary sm:p-xs md:p-lg lg:p-lg xl:p-lg"
        >
          <TextDivider
            title="Address Info"
            className="text-xl text-secondary"
          />
          <FormFieldsAddress
            resetForm={resetForm}
            setResetForm={setResetForm}
            user={user}
          />
        </div>
      </div>
      <div className="mt-xl spaced sm:p-xs md:p-lg lg:p-lg xl:p-lg justify-items-center place-items-end place-content-end">
        <DefaultButton
          aria={`submit register`}
          title="Register"
          onClick={e => {
            e.preventDefault();
            registerUser();
          }}
          type="secondary"
        />
        <DefaultButton
          aria={`reset changes`}
          title="Reset"
          type="primary"
          onClick={e => {
            e.preventDefault();
            setResetForm(true);
          }}
        />
      </div>
    </form>
  );
}
