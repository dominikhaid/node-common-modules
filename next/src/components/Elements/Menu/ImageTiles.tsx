import DefaultImage from 'components/Elements/Images/DefaultImage';
import Link from 'next/link';
import React from 'react';

type Tile = {
  href: string;
  thumb: string;
  title: string;
  excerpt: string;
};

interface ITiles {
  fields: Tile[];
  onClick: (href: string) => void;
  active: string;
}

export default function ImageTiles({
  fields,
  onClick,
  active,
}: ITiles): React.ReactElement {
  if (!fields) return <></>;
  let pathName = '/';

  const clsLstImg =
    'img-wrapper relative flex justify-center h-full overflow-hidden';
  const clsLstSect = 'flex flex-row flex-nowrap';
  const articleWdth =
    process.browser && window.innerWidth < 1400
      ? 300
      : window.innerWidth > 1600
      ? 500
      : 400;

  const articleTop =
    process.browser && window.innerWidth < 1400
      ? 25
      : window.innerWidth > 1600
      ? 30
      : 25;

  if (process.browser)
    pathName = window.location.pathname.replace(/(.*\/)?(\w*)$/, '$2');

  if (pathName === '/') pathName = '/';

  return (
    <section className={clsLstSect}>
      {fields.map((item: Tile) => {
        return (
          <div
            className={
              item.href === active
                ? 'tile active border-l-2 border-r-2 border-primary'
                : 'tile'
            }
            key={item.title}
          >
            <style global jsx>{`
              .tile {
                filter: saturate(0.7);
                flex: 1 1 32.5%;
                max-width: 33.4%;
                opacity: 0.7;
              }
              .tile:hover {
                filter: saturate(1);
                opacity: 1;
              }
              .tile.active {
                filter: saturate(1);
                opacity: 1;
              }
              .tile .img-wrapper > div {
                display: contents !important;
                justify-content: center;
              }

              .tile .img-wrapper > div img {
                position: unset !important;
                width: auto !important;
                max-width: unset !important;
                min-width: unset !important;
              }
              article {
                width: ${articleWdth}px;
                top: ${articleTop}%;
                left: calc(50% - ${articleWdth / 2}px);
              }
              @media screen and (max-width: 1200px) {
                .tile {
                  filter: saturate(0);
                  opacity: 0.7;
                }
              }
            `}</style>
            <Link href={item.href}>
              <a href={item.href} onClick={() => onClick(item.href)}>
                <div className={clsLstImg}>
                  <DefaultImage
                    width={500}
                    height={500}
                    layout="fill"
                    src={item.thumb}
                  />
                </div>
              </a>
            </Link>
            <article className="absolute bg-white p-xl shadow-container">
              <h2>{item.title}</h2>
              <p>{item.excerpt}</p>
            </article>
          </div>
        );
      })}
    </section>
  );
}

//1112

// <li
//     className="text-2xl font-bold my-none inline-felx justify-self-start mr-lg"
//     key={index}
//   >
// <Link href={item.href}>
//   <a
//     href={item.href}
//     className={
//       pathName === test
//         ? pathName + ' acitve underline hover:underline'
//         : 'hover:underline'
//     }
//   >
//     {item.title}
//   </a>
// </Link>
//   </li>
