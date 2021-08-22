import Head from "next/head";

import 'bootstrap/dist/css/bootstrap.css';
import '../sass/app.scss';

export default function AppWrapper({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
