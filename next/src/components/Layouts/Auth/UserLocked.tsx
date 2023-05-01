import DefaultButton from 'components/Elements/Buttons/DefaultButton';
import ResultBox from 'components/Elements/Results/DefaultResult';
import SignOutIcon from 'public/icons/phosphor-icons/assets/duotone/sign-out-duotone.svg';
import SmileOutlined from 'public/icons/phosphor-icons/assets/duotone/smiley-duotone.svg';
import React from 'react';
import {logout} from 'src/hooks/token';

interface IUser {
  updateCard: ({user: IUser}) => void;
}

export default function UserLocked({updateCard}: IUser): React.ReactElement {
  return (
    <ResultBox
      className="bg-white shadow-lg text-secondary"
      icon={<SmileOutlined className="animate-popIn" />}
      title="Oooops!"
    >
      <p>
        We are sorry something with your account seems to be wrong! Please
        contact&nbsp;
        <a
          href="mailto:info@dominikhaid.de"
          target="_blank"
          rel="noopener noreferrer"
        >
          us
        </a>
        .
      </p>
      <DefaultButton
        type="secondary"
        aria="sign out"
        title="Sign out"
        className="flex-auto flex-grow-0 px-xs lg:px-lg xs:mx-none my-xs sm:ml-none md:ml-lg lg:ml-lg xl:ml-lg "
        icon={
          <SignOutIcon
            className="inline fill-current button lg:pr-lg pr-xs"
            style={{width: '45px', height: '45px'}}
          />
        }
        onClick={() => logout(updateCard)}
      />
    </ResultBox>
  );
}
