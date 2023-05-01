import BSHLogo from 'public/images/logos/print-und-screen-design.svg';
import React from 'react';

export default function HeaderSmall(): React.ReactElement {
  return (
    <div className="w-full bg-primary">
      <div
        style={{maxWidth: '33.2%', maxHeight: '120px'}}
        className="flex flex-row justify-start bg-white justify-items-start py-xs"
      >
        <BSHLogo />
      </div>
    </div>
  );
}
