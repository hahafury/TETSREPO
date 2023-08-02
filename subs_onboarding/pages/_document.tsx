import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://subs.theepochtimes.com/lib/template.css"
          type="text/css"
          media="all"
        ></link>
        <Script
          src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"
          strategy="beforeInteractive"
        />
        <link rel="preload" href="./2023-ETTablet.png" as="image" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          src={"https://subs.theepochtimes.com/lib/api.bundle.js?execute=false"}
          strategy="beforeInteractive"
        />
        <Script
          src="https://services.epoch.cloud/public-labs/epoch-ai/et_utils.js"
          strategy="lazyOnload"
        />
      </body>
    </Html>
  );
}
