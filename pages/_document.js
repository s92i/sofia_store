import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1239828783658150&ev=PageView&noscript=1"
          />
        </noscript>
        <meta
          name="facebook-domain-verification"
          content="8qziznv2fp8zrkqa309c4yoruzqtjt"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
