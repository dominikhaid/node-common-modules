import DefaultAvatar from 'components/Elements/Avatars/DefaultAvatar';
import DefaultButton from 'components/Elements/Buttons/DefaultButton';
import CropIcon from 'public/icons/phosphor-icons/assets/duotone/crop-duotone.svg';
import CouldIcon from 'public/icons/phosphor-icons/assets/duotone/upload-duotone.svg';
import Croppie from 'public/js/croppie';
import React, {useEffect, useState} from 'react';
import {fileToDataImg} from 'src/hooks/fileToDataImg';
import {imgToDataImg} from 'src/hooks/imgToDataImg';
import {createUserImgPath} from 'src/hooks/uploads';

interface ICroppie {
  avatar?: string;
  croppie: boolean;
  customerPhoto?: string;
  userName?: string;
  setCroppie: (event: boolean) => void;
  setAvatar: (event: string) => void;
}

const RenderCroppie = ({
  avatar = '',
  setCroppie,
  setAvatar,
}: ICroppie): React.ReactElement => {
  useEffect(() => {
    if (
      !avatar ||
      !document?.getElementById('preview') ||
      !document?.getElementById('croppie') ||
      !document?.getElementById('saveBlob')
    )
      return;
    // @ts-expect-error: Let's ignore a compile error like this unreachable code
    const vanilla = new Croppie(document.getElementById('croppie'), {
      viewport: {
        width: 150,
        height: 150,
        type: 'square',
      },
      boundary: {
        width: 200,
        height: 200,
      },
      customClass: 'm-auto',
      showZoomer: true,
      enableOrientation: false,
    });

    // @ts-expect-error: Let's ignore a compile error like this unreachable code
    vanilla.bind({
      url: (document?.getElementById('preview') as HTMLInputElement)?.src,
      orientation: 1,
    });

    document?.getElementById('saveBlob')?.addEventListener('click', e => {
      e.preventDefault();
      // @ts-expect-error: Let's ignore a compile error like this unreachable code
      vanilla.result('blob', 'viewport', 'png', 1).then(function (blob: Blob) {
        // @ts-expect-error: Let's ignore a compile error like this unreachable code
        fileToDataImg(blob).then((dataImg: string) => setAvatar(dataImg));
      });
    });

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return () => {};
  }, [avatar, setAvatar]);

  return (
    <>
      <div id="croppie"></div>
      <div className="flex justify-center">
        <DefaultButton
          aria={`crop avtar`}
          title="Crop"
          type="secondary"
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            setCroppie(false);
          }}
          id="saveBlob"
        />
        <img id="preview" className="hidden w-100 h-100" src={avatar} />
      </div>
    </>
  );
};

const RenderDragger = ({
  avatar = '',
  userName,
  customerPhoto,
  setAvatar,
  setCroppie,
}: ICroppie): React.ReactElement => {
  const handleDragDrop = (event: React.DragEvent) => {
    event.stopPropagation();
    event.preventDefault();
    if (!event.dataTransfer || !event.dataTransfer.files[0]) return false;
    fileToDataImg(event.dataTransfer.files[0]).then((dataImg: string) =>
      setAvatar(dataImg),
    );
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.stopPropagation();
    event.preventDefault();
  };

  return (
    <div>
      <div
        id="dropzone"
        onDrop={e => handleDragDrop(e)}
        onDragOver={e => handleDragOver(e)}
        className="relative m-auto rounded-full shadow-inner cursor-pointer bg-gray-lightest "
        style={{width: '200px', height: '200px'}}
      >
        <div
          onClick={() => {
            (
              document?.getElementById('avatarUpload') as HTMLButtonElement
            ).click();
          }}
          className="relative flex-1 h-100 w-100"
        >
          {avatar === '' && (
            <p
              className="absolute text-center left-none fontnt-bold w-100"
              style={{top: '45%'}}
            >
              Upload
            </p>
          )}
          {avatar !== '' && (
            <DefaultAvatar
              className="avatar-preview"
              size={200}
              alt={userName}
              src={
                /^data:image/gi.test(avatar)
                  ? avatar
                  : createUserImgPath({
                      customerPhoto: customerPhoto,
                    })
              }
            />
          )}
          <input
            aria-label="upload avatar picture"
            aria-required="false"
            type="file"
            id="avatarUpload"
            style={{width: '0px', height: '0px'}}
            className="absolute border-none opacity-0 cursor-pointer top-none left-none bg-none"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const file = e?.target?.files ? e.target.files[0] : null;
              file &&
                fileToDataImg(file).then((dataImg: string) => {
                  setAvatar(dataImg);
                  setCroppie(true);
                });
            }}
            accept=".jpg, .jpeg, .png"
            name="filename"
          />

          <input
            type="text"
            aria-label="upload avatar picture"
            aria-required="false"
            id="customerPhoto"
            style={{width: '0px', height: '0px'}}
            className="hidden"
            value={avatar}
            accept=".jpg, .jpeg, .png"
            name="filename"
          />
        </div>
      </div>

      <div className="justify-center spaced my-sm w-100">
        <DefaultButton
          aria={`open avatar cropbox`}
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            avatar !== '' && setCroppie(true);
          }}
          className="small"
          type="secondary"
          icon={
            <CropIcon
              className="small"
              style={{width: '15px', height: '15px', padding: '0px'}}
            />
          }
        />
        <DefaultButton
          aria={`upload avatar picture`}
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            const uploadBtn = document.getElementById('avatarUpload');
            if (uploadBtn) uploadBtn.click();
          }}
          className="small"
          type="secondary"
          icon={
            <CouldIcon
              className="small"
              style={{width: '15px', height: '15px', padding: '0px'}}
            />
          }
        />
      </div>
    </div>
  );
};

interface IDaggerWrapper {
  customerPhoto?: string;
  userName?: string;
}

export default function DefaultDragger({
  customerPhoto,
  userName,
}: IDaggerWrapper): React.ReactElement {
  const [avatar, setAvatar] = useState(customerPhoto);
  const [croppie, setCroppie] = useState(false);

  useEffect(() => {
    if (avatar && avatar !== '' && !/^data:image/.test(avatar)) {
      imgToDataImg(
        `${process.env.NEXT_PUBLIC_HOST}/uploads/user/${avatar.replace(
          '.png',
          '',
        )}/${avatar}`,
      ).then((dataImg: string) => setAvatar(dataImg));
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return () => {};
  }, [croppie, avatar]);

  return croppie ? (
    <RenderCroppie
      avatar={avatar}
      croppie={croppie}
      setAvatar={setAvatar}
      setCroppie={setCroppie}
      customerPhoto={customerPhoto}
      userName={userName}
    />
  ) : (
    <RenderDragger
      avatar={avatar}
      croppie={croppie}
      setAvatar={setAvatar}
      setCroppie={setCroppie}
      customerPhoto={customerPhoto}
      userName={userName}
    />
  );
}
