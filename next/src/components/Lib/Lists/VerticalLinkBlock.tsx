import Link from 'next/link';
import React from 'react';
interface IVert {
  group: {
    title: string;
    links: IMenuItem[];
  };
}

/**
 * Basic site links as grid
 * @returns react component
 */
export default function VerticalLinkBlock({group}: IVert): React.ReactElement {
  return (
    <>
      <ul className="mx-auto border-l-2 border-primary-darkest pl-lg justify-items-center">
        <h4 className="font-bold text-primary">{group.title}</h4>
        {group.links.map(item => (
          <li key={item.title}>
            <Link href={item.href}>
              <a href={item.href} className="font-bold text-primary-dark">
                {item.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
