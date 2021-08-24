import type { AppProps } from 'next/app';
import Head from "next/head";
import '../sass/app.scss';

export default function AppWrapper({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
