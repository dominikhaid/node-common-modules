import BSHLogo from 'public/images/logos/print-und-screen-design.svg';
import React from 'react';

export default function HeaderRound(): React.ReactElement {
  const radius =
    process.browser && window.innerWidth < 1150
      ? 200
      : process.browser && window.innerWidth < 1450
      ? 300
      : 350;

  return (
    <div className="z-10 bg-white border-8 rounded-full shadow-inner border-primary menu-round">
      <style global jsx>{`
        .menu-round > div {
          width: ${radius}px;
          margin: auto;
          height: ${radius}px;
          display: flex;
          justify-content: center;
          place-items: center;
          top: calc(${radius}px / 5.5);
          position: relative;
          margin-left: -8px;
        }

        .menu-round {
          width: ${radius}px;
          position: absolute;
          top: -${radius / 2}px;
          left: calc(50% - ${radius / 2}px);
        }

        .menu-round svg {
          width: 57%;
          height: max-content;
        }
      `}</style>
      <div className="py-xs">
        <BSHLogo />
      </div>
    </div>
  );
}
