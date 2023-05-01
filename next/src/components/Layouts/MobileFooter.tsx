import React, {SyntheticEvent, useState} from 'react';
import MobileInfoBtn from 'components/Elements/Buttons/MobileInfo';
import MobileSocialBtn from 'components/Elements/Buttons/MobileSocial';
import MobileSocialMenu from 'components/Elements/Menu/MobileSocialMenu';
import MobileTopLogo from 'components/Elements/Images/MobileTopLogo';
import BSHLogo from 'public/images/logos/print-und-screen-design.svg';
import FloatingImage from 'components/Elements/Images/FloatingImage';
import VerticalLinkList from 'components/Elements/Lists/VerticalLinkBlock';
import DefaultCopyright from 'components/Elements/Text/DefaultCopyright';
interface IFooter {
  children?: React.ReactElement;
  contact: IContact;
  menus: IMainNav;
}

export default function DefaultFooter({
  contact = {},
  children,
  menus,
}: IFooter): React.ReactElement {
  const [footer, setFooter] = useState(false);
  const [social, setSocial] = useState(false);

  const clsLstFtr =
    'fixed bottom-0  border-t-8 border-primary  left-0 w-full bg-white items-center grid text-white ';
  const clsLstLogo = 'relative w-full m-auto';
  const asdClsMobilePri = 'fixed top-0 left-0 h-full z-50 w-full bg-primary';
  const asdClsMobileSec = 'fixed top-0 left-0 h-full z-50 bg-secondary w-full';
  const socialClsMobile =
    'align-center place-items-end  bg-secondary place-content-end w-50 inline-flex flex-wrap';
  const infoClsMobile =
    'grid grid-cols-2 gap-8 m-auto my-xl place-content-cetner bg-secondary';
  const infoCntClsMobile =
    'fixed lef-0 w-full bg-secondary z-50 sm:p-xl md:p-xl xl:p-xl lg:p-6xl';
  const clsMobile =
    'fixed z-50 left-0 top-0 h-full w-full spaced-lg place-content-center justify-content-center items-center text-white sm:p-xl md:p-xl xl:p-xl lg:p-6xl';

  if (!process.browser) return <></>;

  return (
    <footer id="footer" className={clsLstFtr}>
      <div className="relative w-full m-auto overflow-hidden bg-white">
        {children}
        <style global jsx>{`
          #footer:before {
            content: ' ';
            width: 100vw;
            border-top: 4px solid var(--color-primary);
          }

          .img-filter-saturate img {
            filter: saturate(0);
          }
        `}</style>
        <div
          style={{zIndex: 99}}
          className={
            footer
              ? 'bg-secondary text-primary ' + clsLstLogo
              : social
              ? 'bg-primary text-white ' + clsLstLogo
              : 'bg-white text-primary ' + clsLstLogo
          }
        >
          <MobileInfoBtn
            onClick={(e: SyntheticEvent) => {
              e.preventDefault();
              social && setSocial(false);
              setFooter(!footer);
            }}
          />
          <MobileSocialBtn
            onClick={(e: SyntheticEvent) => {
              e.preventDefault();
              footer && setFooter(false);
              setSocial(!social);
            }}
          />
          <MobileTopLogo
            svg={<BSHLogo />}
            className={
              footer ? 'text-primary' : social ? 'text-white' : 'text-secondary'
            }
            style={{zIndex: 55, position: 'relative'}}
            alt="Bauservice Muhltal"
            layout={'intrinsic'}
            width={100}
            height={80}
          />
        </div>
      </div>
      {footer && (
        <aside id="info-overlay" className={asdClsMobileSec}>
          <FloatingImage
            className="overflow-hidden animate-hvr-bob"
            style={{
              height: 'calc(100% - 110px)',
            }}
            src="/images/backgrounds/pexels-media-159045.jpeg"
          />
          <div style={{bottom: '80px'}} className={infoCntClsMobile}>
            <div style={{maxWidth: 'max-content'}} className={infoClsMobile}>
              <VerticalLinkList group={menus.main} />
              <VerticalLinkList group={menus.legals} />
            </div>
            <DefaultCopyright contact={contact} style={{textAlign: 'center'}} />
          </div>
        </aside>
      )}
      {social && (
        <aside className={asdClsMobilePri}>
          <FloatingImage
            className="overflow-hidden img-filter-saturate animate-hvr-bob"
            style={{
              height: 'calc(100%)',
            }}
            src="/images/backgrounds/pexels-media-544965.jpeg"
          />
          <div className={socialClsMobile}>
            <div id="social-overlay" className={clsMobile}>
              <div className="border-2 bg-primary-lightest p-2xl border-primary rounded-xl">
                <h4 className="font-bold text-centerq text-secondary w-100">
                  Kontakt
                </h4>
                <MobileSocialMenu contact={contact} />
              </div>
            </div>
          </div>
        </aside>
      )}
    </footer>
  );
}
