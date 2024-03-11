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
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `function(s,u,m,o,j,v){j=u.createElement(m);v=u.getElementsByTagName(m)[0];j.async=1;j.src=o;j.dataset.sumoSiteId='57fb48e6553f1a99b0225c5776960096cb8d1df8ae9a4a3788ee1a36cab1ac6e';v.parentNode.insertBefore(j,v)})(window,document,'script','//load.sumome.com/');`,
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
