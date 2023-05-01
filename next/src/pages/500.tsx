import {NextPage} from 'next';
import Head from 'next/head';
import React from 'react';

interface Props {
  email: string;
  tel: string;
}

/**
 * @desc 500 Page
 * @returns react component
 */

const DatabaseError: NextPage<Props> = ({email, tel}) => {
  return (
    <>
      <Head>
        <title>Error - 500</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Error - 500" key="title" />
      </Head>

      <section className="relative w-100 bg-primary-light error-500">
        <style global jsx>{`
          section.error-500 {
            padding-top: 20%;
            z-index: 0;
            padding-bottom: 7rem;
          }

          section.error-500 #error-box {
            background-color: #f1eac7;
            padding-bottom: 10%;
            height: auto;
            width: 90%;
          }

          section.error-500 #error-box .error-content {
            position: relative;
            z-index: 0;
          }

          section.error-500 #error-box svg.top-image {
            top: -60%;
            left: 2%;
            width: 95%;
            z-index: -1;
          }
          section.error-500 #error-box svg.bottom-image {
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
            <h1 className="">505 - Server error please come back later!</h1>
            <p>
              Unser Webserver wird gerade gewartet bitte versuchen Sie es zu
              einem späteren Zeitpunkt nochmals. Sie können uns auch gerne eine
              <a href={`mailto:${email}`}>E-Mail</a> zukommen lassen, oder uns
              <a href={`tel:${tel}`}>telefonisch</a>
              kontaktieren.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default DatabaseError;
