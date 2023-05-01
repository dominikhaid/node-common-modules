import React from 'react';

interface ICopy {
  className?: string;
  contact?: IContact;
  style?: React.CSSProperties;
}

export default function DefaultCopyright({
  contact = {web: '', company: '', address: '', full_name: ''},
  className = '',
  style = {},
}: ICopy): React.ReactElement {
  return (
    <div className={className} style={style}>
      <b>{contact.company}&nbsp;</b>
      <br />
      {contact.address}
      <br />
      <a target="_blank" href={`${contact.web}`}>
        {contact.web}
      </a>
      &nbsp;&copy;&nbsp;{contact.full_name}
    </div>
  );
}
