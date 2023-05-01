import DefaultButton from 'components/Elements/Buttons/DefaultButton';
import ResultBox from 'components/Elements/Results/DefaultResult';
import {GetServerSideProps, NextPage} from 'next';
import Error from 'next/error';
import Head from 'next/head';
import Link from 'next/link';
import {useRouter} from 'next/router';
import WarningIcon from 'public/icons/phosphor-icons/assets/duotone/hard-drives-duotone.svg';
import React from 'react';

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js');
  const errorCode = res.ok ? false : res;
  const json = await res.json();

  return {
    props: {errorCode, stars: json.stargazers_count},
  };
};

interface Props {
  errorCode: never;
}

/**
 * @desc Next.js Server Error
 * @param {String} errorCode Next.js error code
 * @returns react component
 */
const ErrorPage: NextPage<Props> = ({errorCode}) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Error - Next Server</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Error - 500" key="title" />
      </Head>
      <section className="500 px-lg xl:px-none">
        <ResultBox
          className="bg-white shadow-lg text-secondary"
          icon={<WarningIcon className="animate-popIn text-secondary" />}
          title="Error - 500"
        >
          {errorCode && <Error statusCode={errorCode} />}
          <h2>Server error please come back later</h2>
          <Link href="/">
            <DefaultButton
              aria={`home`}
              type="primary"
              title="Home"
              onClick={() => router.push('/')}
            />
          </Link>
        </ResultBox>
      </section>
    </>
  );
};

export default ErrorPage;
