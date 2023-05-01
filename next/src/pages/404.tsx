import {NextPage} from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

/**
 * @desc 404 Page
 * @returns react component
 */ const NotFoundPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Error - 404</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Error - 404" key="title" />
      </Head>
      <section className="relative w-100 bg-primary-light error-404 404">
        <style global jsx>{`
          section.error-404 {
            padding-top: 35%;
            z-index: 0;
            padding-bottom: 5rem;
          }

          section.error-404 #error-box {
            background-color: #f1eac7;
            padding-bottom: 10%;
            height: auto;
            width: 90%;
          }

          section.error-404 #error-box .error-content {
            position: relative;
            z-index: 0;
          }

          section.error-404 #error-box svg.top-image {
            top: -60%;
            left: 2%;
            width: 95%;
            z-index: -1;
          }
          section.error-404 #error-box svg.bottom-image {
            left: 12%;
            width: 90%;
            bottom: -10%;
          }
        `}</style>

        <div
          id="error-box"
          className="relative m-auto prose sm:prose-lg md:prose-xl lg:prose-xl xl:prose-2xl xl:tracking-wide xl:leading-relaxed p-4xl shadow-container"
        >
          <div className="error-content">
            <h1 className="">404 - Seite nicht gefunden!</h1>
            <p>
              Die von Ihnen gesuchte Seite wurde leider nicht gefunden. Sie
              können es später erneut versuchen oder zur
              <Link href="/">Startseite</Link>
              zurück gehen und von dortaus weiter agieren.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default NotFoundPage;
