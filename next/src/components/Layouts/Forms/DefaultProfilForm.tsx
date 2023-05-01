import DefaultButton from 'components/Elements/Buttons/DefaultButton';
import TextDivider from 'components/Elements/Divider/TextDivider';
import DefaultDragger from 'components/Elements/Dragger/DefaultDragger';
import {
  FormFieldsAddress,
  FormFieldsContact,
  FormFieldsPassowrdUpdate,
  FormFieldsUser,
} from 'components/Elements/FormFields/DefaultProfilFields';
import {MessageContext} from 'context/MessageProvider';
import Link from 'next/link';
import ResetIcon from 'public/icons/phosphor-icons/assets/duotone/arrows-clockwise-duotone.svg';
import PWDIcon from 'public/icons/phosphor-icons/assets/duotone/lock-duotone.svg';
import SignOutIcon from 'public/icons/phosphor-icons/assets/duotone/sign-out-duotone.svg';
import React, {useContext, useState} from 'react';
import {logout, setToken} from 'src/hooks/token';
import {updateUser} from 'src/hooks/user';
import {remapErrors, validateFrom} from 'src/hooks/validateFrom';
import DrawerHeadline from '../../Elements/Titles/DrawerHeadline';
interface IProfil {
  user: IUser;
  updateState: ({user: IUser}) => void;
}

export default function ProfilForm({
  user,
  updateState,
}: IProfil): React.ReactElement {
  const addMessage = useContext(MessageContext);
  const [resetForm, setResetForm] = useState(false);
  const [changePassword, setChangePassword] = useState(false);

  async function updateUserForm() {
    const formData = validateFrom('profil');

    remapErrors('profil', formData.data);

    if (!formData.state)
      return addMessage({
        content: 'The form could not be submitted, please check your inputs!',
        type: 'error',
      });

    const dataFields: IUser = {};
    formData.data.forEach(e => (dataFields[e.name] = e.value));

    dataFields.registered = user.registered;
    dataFields.locked = user.locked;

    updateUser(dataFields).then(data => {
      if (data?.code) {
        addMessage({
          content: data?.errors
            ? data?.errors.map((msg: string) => msg + '\n').join()
            : 'Please check the marked fields!',
          type: 'error',
        });
        return false;
      }

      data.accessToken && setToken(data.accessToken);
      data.accessToken && delete data.accessToken;

      const emailField = document.querySelector(
        'form[name="profil"] input[type="email"]',
      );
      if (emailField) emailField.setAttribute('data-value', data.email || '');
      addMessage({content: 'Profil updated successfuly!', type: 'success'});
      updateState({user: data});
    });
  }

  return (
    <form name="profil">
      <div className="place-content-start mb-xl place-items-start spaced">
        <DrawerHeadline
          style={{marginBottom: '0'}}
          title={
            user && user.contactFirstName && user.contactLastName
              ? `Profil of ${user.contactFirstName} ${user.contactLastName}`
              : 'Profil'
          }
        />
      </div>

      <div className="grid form-grid justify-items-center place-items-start">
        <div
          style={{maxWidth: '500px'}}
          className="flex flex-row flex-wrap h-10 rounded-md p-lg bg-gray-light place-content-center justify-self-center place-self-center w-100"
        >
          <DefaultDragger {...user} />

          {user && user.registered === false && (
            <p style={{color: 'red', marginTop: '0.5rem'}}>
              You are not registered in the shop please
              <Link href="/register">register</Link>
            </p>
          )}
        </div>

        <div
          style={{maxWidth: '500px'}}
          className="flex flex-row flex-wrap border-2 rounded-md p-lg place-content-center justify-self-center place-self-center w-100 h-100 border-primary"
        >
          <FormFieldsUser
            resetForm={resetForm}
            setResetForm={setResetForm}
            user={user}
          />
          {changePassword && (
            <FormFieldsPassowrdUpdate
              resetForm={resetForm}
              setResetForm={setResetForm}
              user={user}
            />
          )}
          <div className="spaced mt-lg place-content-end">
            {changePassword && (
              <>
                <DefaultButton
                  aria={`save new password`}
                  title="Save"
                  className="small"
                  type="primary"
                  onClick={e => {
                    e.preventDefault();
                    updateUserForm();
                  }}
                />
                <DefaultButton
                  aria={`cancel password change`}
                  title="Cancel"
                  className="border-2 border-gray small text-gray"
                  onClick={e => {
                    e.preventDefault();
                    setChangePassword(false);
                  }}
                  type="outlined"
                />
              </>
            )}
            {!changePassword && (
              <>
                <DefaultButton
                  aria={`change password`}
                  icon={<PWDIcon style={{width: '20px', height: '20px'}} />}
                  className="small"
                  onClick={e => {
                    e.preventDefault();
                    setChangePassword(true);
                  }}
                  type="secondary"
                />
                <DefaultButton
                  aria={`reset form`}
                  icon={<ResetIcon style={{width: '20px', height: '20px'}} />}
                  className="small"
                  type="primary"
                  onClick={e => {
                    e.preventDefault();
                    setResetForm(true);
                  }}
                />
                <DefaultButton
                  aria={`sign out`}
                  icon={<SignOutIcon style={{width: '20px', height: '20px'}} />}
                  type="primary"
                  className="small"
                  onClick={e => {
                    e.preventDefault();
                    logout(updateState);
                  }}
                />
              </>
            )}
          </div>
        </div>

        <div
          style={{maxWidth: '500px'}}
          className="flex flex-row flex-wrap border-2 rounded-md p-lg place-content-center justify-self-center place-self-center w-100 h-100 border-primary"
        >
          <TextDivider title="Contact Info" className="text-secondary" />
          <FormFieldsContact
            resetForm={resetForm}
            setResetForm={setResetForm}
            user={user}
          />
        </div>
        <div
          style={{maxWidth: '500px'}}
          className="flex flex-row flex-wrap border-2 rounded-md p-lg place-content-center justify-self-center place-self-center w-100 h-100 border-primary"
        >
          <TextDivider title="Address Info" className="text-secondary" />
          <FormFieldsAddress
            resetForm={resetForm}
            setResetForm={setResetForm}
            user={user}
          />
        </div>
        <div
          style={{maxWidth: '500px'}}
          className="flex flex-row flex-wrap rounded-md p-lg place-content-center justify-self-center place-self-center w-100 h-100 bg-gray-light"
        >
          <div className="mt-xl spaced place-content-end">
            <DefaultButton
              aria={`save changes`}
              title="Save"
              onClick={e => {
                e.preventDefault();
                updateUserForm();
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
        </div>
      </div>
    </form>
  );
}
