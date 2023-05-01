import Link from 'next/link';
import React from 'react';

interface IBread {
  className?: string;
  style?: React.CSSProperties;
}

export default function DefaultBreadcrumb({
  style = {},
  className = '',
}: IBread): React.ReactElement {
  if (!process.browser) return <></>;

  const data =
    window.location.pathname === '/'
      ? [window.location.pathname]
      : window.location.pathname.split('/');

  className +=
    ' flex flex-1 md:min-w-100 sm:min-w-100 place-content-start text-primary xl:justify-start xs:w-100 xl:min-w-50 align-center lg:justify-start xl:max-w-50 lg:min-w-50 lg:max-w-50';

  return (
    <ul style={{...style}} className={className}>
      <style jsx>{`
        li::after {
          content: '/';
          padding: 0 0.5rem;
        }
      `}</style>

      {data.map(e => {
        return (
          <li
            className={`font-bold m-none  pr-nones ${
              data[data.length - 1] === e ? 'active text-primary' : ''
            }`}
            key={e}
          >
            <Link href={e === '/' || e === '' ? '/' : `/${e}`}>
              <a
                href={e === '/' || e === '' ? '/' : `/${e}`}
                className={`font-bold m-none text-lg ${
                  data[data.length - 1] === e ? 'active text-primary' : ''
                }`}
              >
                {e === '/' || e === '' ? 'HOME' : e.toUpperCase()}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
