import type { AppProps } from 'next/app';
import Head from "next/head";
import '../../sass/app.scss';

export default function AppWrapper({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Test Title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
