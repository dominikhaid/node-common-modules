import React, {useEffect} from 'react';
import TopLogo from 'components/Elements/Images/TopLogo';
import BSHLogo from 'public/images/logos/print-und-screen-design.svg';
interface IHeader {
  user: IUser;
  children: React.ReactElement;
}

export default function DefaultHeader({
  user,
  children,
}: IHeader): React.ReactElement {
  const classList =
    'flex flex-col container-md lg:flex-wrap py-6xl xl:flex-row lg:flex-row xl:flex-wrap';

  const width = 600,
    height = 230;

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return () => {};
  }, [user]);

  if (!process.browser) return <></>;

  return (
    <>
      <header className="relative w-full layout">
        <nav id="topNav" className={classList}>
          <TopLogo
            className="flex-1"
            svg={<BSHLogo />}
            alt="Bauservice Muhltal"
            layout={'intrinsic'}
            width={width}
            height={height}
          />
          {children}
        </nav>
      </header>
    </>
  );
}
