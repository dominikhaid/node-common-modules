import React from 'react';
import DefaultH1 from 'components/Elements/Titles/DefaultH1';
import {NextPage} from 'next';
import Head from 'next/head';

/**
 * @desc index page
 * @returns react component
 */
const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Example</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Bauservice Haid UG" key="title" />
      </Head>
      <section className="px-none primary-gradient">
        <div className="relative grid border-b-2 feature-next mt-none border-secondary sm:py-none sm:px-none md:py-6xl md:px-2xl lg:py-6xl lg:px-2xl xl:py-6xl xl:px-2xl place-content-center">
          <DefaultH1
            className="text-center gird-none lg:pl-4xl xl:pl-4xl xl:text-6xl lg:text-6xl"
            title={'Next.js Server'}
          />
        </div>
      </section>
    </>
  );
};

export default Index;

// export async function getStaticProps(context) {
//   const url = `${process.env.NEXT_PUBLIC_API}/api/products/${context.params.productCode}`;
//   const response = await fetch(url, {
//     method: 'GET',
//     mode: 'same-origin',
//     cache: 'no-cache',
//     credentials: 'same-origin',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     redirect: 'follow',
//     referrerPolicy: 'no-referrer',
//   });

//   const data = await response.json();

//   return {
//     props: {
//       products: data.success ? [data.success] : false,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const url = `${process.env.NEXT_PUBLIC_API}/api/products`;
//   const response = await fetch(url, {
//     method: 'GET',
//     mode: 'same-origin',
//     cache: 'no-cache',
//     credentals: 'same-origin',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     redirect: 'follow',
//     referrerPolicy: 'no-referrer',
//   });

//   const data = await response.json();

//   const paths = data.success
//     ? data.success.map(el => ({
//         params: {
//           productCode: el.productCode,
//         },
//       }))
//     : [];

//   return {
//     paths,
//     fallback: false,
//   };
// }
