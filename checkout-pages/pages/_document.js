import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://subs.youmaker.com/lib/template.css"
        />
        <link
          rel="shortcut icon"
          href="https://cdn.epoch.cloud/assets/static_assets/etfavicon.ico"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
