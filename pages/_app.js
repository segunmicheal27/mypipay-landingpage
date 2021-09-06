import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="author" content="joekenpat@gmail.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/my_pipay_favicon.png" />
        <script src="https://sdk.minepi.com/pi-sdk.js" async/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
