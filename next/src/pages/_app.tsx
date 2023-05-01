import {AppContext, AppProvider} from 'context/AppProvider';
import type {AppProps} from 'next/app';
import dynamic from 'next/dynamic';
import 'public/css/global.css';
import React, {useState} from 'react';

// eslint-disable-next-line
export function reportWebVitals(metric: any): void {
  if (metric.label === 'web-vital') {
    console.debug('METRIC', metric);
  }
}

/**
 * App Root
 * @param {React Component} Component main component to render
 * @param {Object} pageProps pageProps from getStatic methods
 * @returns
 */
export default function MyApp({
  Component,
  pageProps,
}: AppProps): React.ReactElement {
  const [appView, setAppView] = useState({state: false, href: '/'});
  process.browser && window.location.pathname === '/tailwind' && <Component />;

  return (
    <AppProvider>
      <AppContext.Consumer>
        {(appState: IAppStateIface): React.ReactElement => {
          const is_mobile = process.browser && window.innerWidth < 768;

          const HeaderLayout = is_mobile
            ? () => {
                return <></>;
              }
            : dynamic(() => import('components/Elements/Menu/HeaderRound'));

          return (
            <div className="relative min-h-full grid-main">
              <main className="overflow-hidden p-none">
                <Component {...appState} {...pageProps} />
              </main>
            </div>
          );
        }}
      </AppContext.Consumer>
    </AppProvider>
  );
}
