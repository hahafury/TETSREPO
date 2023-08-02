import "../styles/bootstrap.min.css";
import Head from "next/head";
import "../styles/styles-custom.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, noarchive, noimageindex" />
        <title>The Epoch Times</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <script async src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script async src="https://services.epoch.cloud/public-labs/epoch-ai/et_utils.js"></script>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
