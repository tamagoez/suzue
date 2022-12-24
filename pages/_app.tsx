import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  let lang = "ja";
  const avalang = ["ja", "en"];
  if (typeof window !== "undefined") {
    let lSlang = window.localStorage.getItem("viewlang");
    const url = location.pathname + location.search;
    if (!lSlang) {
      let navigatorlang = window.navigator.language.substring(0, 2).toString();
      if (avalang.includes(navigatorlang) === false) navigatorlang = "en";
      window.localStorage.setItem("viewlang", navigatorlang);
      lSlang = navigatorlang;
    }
    if (avalang.includes(lSlang) === false) lSlang = "en";
    console.log(lSlang);
    if (
      url.substring(1, 3) !== lSlang &&
      url !== "/"
    ) {
      if (url.substring(3, 4) === "/")
        router.replace(`/${lSlang}/${url.substring(4)}`);
      else router.replace(`/${lSlang}${url}`);
    }
  }
  return (
    <>
      <Head>
        {/*
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />*/}
        {/* <link rel="shortcut icon" href="/favicon.png" key="shortcutIcon" /> */}
        {/* <link rel="manifest" href="/manifest.json" /> */}
      </Head>
      <Layout title="About | Next.js + TypeScript Example">
      <Component {...pageProps} />
      </Layout>
    </>
  );
}
