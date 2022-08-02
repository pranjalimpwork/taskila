import "../styles/globals.scss"
import Head from "next/head";
import "antd/dist/antd.css";
import "../styles/globals.scss";
import AuthProvider from "../store/auth/auth";
function MyApp({ Component, pageProps }) {
  return (<>
  <Head>
        <title>SenseAble</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="shortcut icon"
          href="/images/favicon.png"
          type="image/x-icon"
        />
        <meta property="og:title" content="Login" />
      </Head>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
  </>)
}

export default MyApp
