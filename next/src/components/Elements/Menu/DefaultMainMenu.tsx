import Link from 'next/link';
import React from 'react';

interface IMain {
  className: string;
  fields: any[];
}

export default function DefaultMainMenu({
  className,
  fields,
}: IMain): React.ReactElement {
  if (!process.browser) return <></>;
  let pathName = '/';
  if (process.browser)
    pathName = window.location.pathname.replace(/(.*\/)?(\w*)$/, '$2');

  if (pathName === process.env.NEXT_PUBLIC_FOLDER) pathName = '/';

  return (
    <ul className={'inline-flex ' + className}>
      {fields.map((item, index) => {
        let test = item.href;
        if (pathName !== '/') test = test.replace('/', '');

        return (
          <li
            className="text-2xl font-bold my-none inline-felx justify-self-start mr-lg"
            key={index}
          >
            <Link href={item.href}>
              <a
                href={item.href}
                className={
                  pathName === test
                    ? pathName + ' acitve underline hover:underline'
                    : 'hover:underline'
                }
              >
                {item.title}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
