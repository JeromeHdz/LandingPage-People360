import Document, { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <Link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap"
            rel="stylesheet"
          />
          <script
            type="text/javascript"
            id="hs-script-loader"
            async
            defer
            src="//js-eu1.hs-scripts.com/143410325.js"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.axeptioSettings = {
                  clientId: "651ed2d2126eb94c492a2785",
                  cookiesVersion: "people360-fr",
                };
                (function(d, s) {
                  var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
                  e.async = true; e.src = "//static.axept.io/sdk.js";
                  t.parentNode.insertBefore(e, t);
                })(document, "script");
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        
      </Html>
    );
  }
}

export default MyDocument;
